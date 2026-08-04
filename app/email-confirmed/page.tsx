"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Supabase signup-confirmation landing page.
 *
 * WHY THIS PAGE VERIFIES THE TOKEN ITSELF
 * ---------------------------------------
 * The default Supabase template links to `{{ .ConfirmationURL }}`, which is a
 * GET on `/auth/v1/verify`. That link is single-use, so ANY automated GET
 * consumes it — Outlook SafeLinks, Defender/ATP, corporate mail gateways and
 * mobile-mail link previews all fetch links before a human ever clicks. The
 * human's click then hits an already-consumed token and GoTrue redirects here
 * with `?error=access_denied&error_code=otp_expired
 * &error_description=Email+link+is+invalid+or+has+expired`.
 *
 * Fix: the email template now links to THIS page carrying `token_hash` + `type`
 * (see the template in the repo report / Supabase dashboard). Nothing is
 * consumed by loading the page — verification only happens when the user
 * presses "Confirm my email", which a link scanner cannot do (it is a POST
 * issued from JS on click).
 *
 * Backwards compatibility: links already sitting in inboxes use the old
 * template and arrive here with no `token_hash` (GoTrue already verified them),
 * so the no-params case still renders success and the `?error=` case still
 * renders the failure copy — now with "you may already be confirmed" guidance
 * instead of a dead end.
 */

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://skpjyyxwudjteoomfazu.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const VERIFIABLE_TYPES = ["signup", "email", "invite", "magiclink"] as const;
type VerifiableType = (typeof VERIFIABLE_TYPES)[number];

type Status =
  | "loading"
  | "needs_confirm"
  | "verifying"
  | "confirmed"
  | "already_used"
  | "error";

type PageState = {
  status: Status;
  description: string;
  /** Present only while `status === "needs_confirm"`. */
  tokenHash: string;
  type: VerifiableType;
};

const SUCCESS_DESCRIPTION =
  "Your account is ready. Open the app to complete your profile.";
const NEEDS_CONFIRM_DESCRIPTION =
  "Tap the button below to finish confirming your email address.";
const ALREADY_USED_DESCRIPTION =
  "This confirmation link has already been used or has expired. If you already confirmed your email, just open LootScout and sign in. Otherwise, sign up again from the app to get a fresh link.";
const ERROR_FALLBACK_DESCRIPTION =
  "The verification link may have expired. Please try signing up again.";

function parseType(raw: string | null): VerifiableType {
  const match = VERIFIABLE_TYPES.find((candidate) => candidate === raw);
  return match ?? "signup";
}

/**
 * GoTrue answers a consumed / expired one-time token with an `otp_expired`
 * style code. We deliberately DO NOT surface that as a hard failure: the most
 * common way to hit it is confirming successfully and then re-opening the same
 * link, in which case the account is fine and the user only needs to sign in.
 */
function isConsumedTokenResponse(status: number, body: unknown): boolean {
  if (status === 401 || status === 403 || status === 410) return true;
  if (status !== 400) return false;

  const payload = body as { error_code?: unknown; error?: unknown; msg?: unknown } | null;
  const haystack = [payload?.error_code, payload?.error, payload?.msg]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();

  return (
    haystack.includes("expired") ||
    haystack.includes("invalid") ||
    haystack.includes("not found")
  );
}

/** No-JS / missing-anon-key fallback: hand the token back to GoTrue's GET verify. */
function hostedVerifyUrl(tokenHash: string, type: VerifiableType): string {
  const redirectTo = "https://lootscout.io/email-confirmed";
  return `${SUPABASE_URL}/auth/v1/verify?token=${encodeURIComponent(
    tokenHash
  )}&type=${encodeURIComponent(type)}&redirect_to=${encodeURIComponent(
    redirectTo
  )}`;
}

export default function EmailConfirmedPage() {
  const [state, setState] = useState<PageState>({
    status: "loading",
    description: SUCCESS_DESCRIPTION,
    tokenHash: "",
    type: "signup",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const errorDescription = params.get("error_description");
    // `token_hash` is what the new template sends; `token` covers a hand-rolled
    // link and GoTrue's own historical parameter name.
    const tokenHash = params.get("token_hash") ?? params.get("token") ?? "";
    const type = parseType(params.get("type"));

    if (error) {
      // Legacy link (or a genuinely dead token) that GoTrue already rejected.
      // Treat the one-time-token errors as "you're probably already confirmed".
      const errorCode = params.get("error_code") ?? "";
      const consumed =
        errorCode.includes("expired") ||
        errorCode.includes("invalid") ||
        (errorDescription ?? "").toLowerCase().includes("expired");

      setState({
        status: consumed ? "already_used" : "error",
        description: consumed
          ? ALREADY_USED_DESCRIPTION
          : errorDescription || ERROR_FALLBACK_DESCRIPTION,
        tokenHash: "",
        type,
      });
      return;
    }

    if (tokenHash) {
      setState({
        status: "needs_confirm",
        description: NEEDS_CONFIRM_DESCRIPTION,
        tokenHash,
        type,
      });
      return;
    }

    // Legacy template: GoTrue verified before redirecting here.
    setState({
      status: "confirmed",
      description: SUCCESS_DESCRIPTION,
      tokenHash: "",
      type,
    });
  }, []);

  const confirmEmail = async () => {
    const { tokenHash, type } = state;
    if (!tokenHash) return;

    setState((prev) => ({
      ...prev,
      status: "verifying",
      description: "Confirming your email…",
    }));

    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ type, token_hash: tokenHash }),
      });

      if (response.ok) {
        setState((prev) => ({
          ...prev,
          status: "confirmed",
          description: SUCCESS_DESCRIPTION,
          tokenHash: "",
        }));
        return;
      }

      const body = await response.json().catch(() => null);

      if (isConsumedTokenResponse(response.status, body)) {
        setState((prev) => ({
          ...prev,
          status: "already_used",
          description: ALREADY_USED_DESCRIPTION,
          tokenHash: "",
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        status: "error",
        description: ERROR_FALLBACK_DESCRIPTION,
        tokenHash: "",
      }));
    } catch {
      // Network failure — the token is still unused, so let them retry.
      setState((prev) => ({
        ...prev,
        status: "needs_confirm",
        description:
          "We couldn't reach the server. Check your connection and tap Confirm my email again.",
      }));
    }
  };

  const { status, description, tokenHash, type } = state;

  const isFailure = status === "error";
  const isNeutral = status === "already_used";
  const title =
    status === "needs_confirm" || status === "verifying"
      ? "Confirm your email"
      : status === "confirmed"
        ? "Email Confirmed!"
        : status === "already_used"
          ? "Link already used"
          : status === "error"
            ? "Something went wrong"
            : "Confirming your email…";

  const icon = isFailure ? "✗" : isNeutral ? "!" : "✓";
  const iconBgClass = isFailure
    ? "bg-red-100 text-red-600"
    : isNeutral
      ? "bg-amber-100 text-amber-600"
      : "bg-emerald-100 text-emerald-600";

  const showConfirmButton = status === "needs_confirm" || status === "verifying";
  const openAppLabel = isFailure ? "Back to App" : "Open LootScout";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-primary-600 font-semibold hover:underline"
          >
            ← Back to LootScout
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
          <div
            className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full ${iconBgClass}`}
          >
            <span className="text-2xl" aria-hidden>
              {icon}
            </span>
            <span className="sr-only">
              {isFailure ? "Error" : isNeutral ? "Notice" : "Success"}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {title}
          </h1>
          <p className="mt-4 text-slate-600" aria-live="polite">
            {description}
          </p>

          {showConfirmButton ? (
            SUPABASE_ANON_KEY ? (
              <button
                type="button"
                onClick={confirmEmail}
                disabled={status === "verifying"}
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {status === "verifying" ? "Confirming…" : "Confirm my email"}
              </button>
            ) : (
              // Anon key not configured for the site build — fall back to
              // GoTrue's hosted GET verify, still behind an explicit click.
              <a
                href={hostedVerifyUrl(tokenHash, type)}
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Confirm my email
              </a>
            )
          ) : (
            <a
              href="lootscout://"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {openAppLabel}
            </a>
          )}
        </div>
      </main>
    </div>
  );
}
