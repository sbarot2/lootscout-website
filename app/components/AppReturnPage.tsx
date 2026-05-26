"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface AppReturnPageProps {
  title: string;
  description: string;
  buttonLabel: string;
  /** Path after `lootscout://` (no leading slash). e.g. "subscription-success" */
  deepLinkPath: string;
  /** When true, copy any `?session_id=...` (and other Stripe params) into the deep link. */
  forwardQuery?: boolean;
  variant?: "success" | "info" | "error";
}

const VARIANT_STYLES: Record<
  NonNullable<AppReturnPageProps["variant"]>,
  { iconBg: string; icon: string; srLabel: string }
> = {
  success: {
    iconBg: "bg-emerald-100 text-emerald-600",
    icon: "✓",
    srLabel: "Success",
  },
  info: {
    iconBg: "bg-sky-100 text-sky-600",
    icon: "↺",
    srLabel: "Info",
  },
  error: {
    iconBg: "bg-amber-100 text-amber-600",
    icon: "!",
    srLabel: "Notice",
  },
};

export default function AppReturnPage({
  title,
  description,
  buttonLabel,
  deepLinkPath,
  forwardQuery = false,
  variant = "success",
}: AppReturnPageProps) {
  const [deepLink, setDeepLink] = useState<string>(`lootscout://${deepLinkPath}`);
  const [autoOpened, setAutoOpened] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = window.location.search;
    const target =
      forwardQuery && params
        ? `lootscout://${deepLinkPath}${params}`
        : `lootscout://${deepLinkPath}`;

    setDeepLink(target);

    // Try to deep-link back into the app automatically. iOS SFSafariViewController
    // will prompt "Open in LootScout?"; if dismissed, the button below works as fallback.
    const timer = setTimeout(() => {
      window.location.href = target;
      setAutoOpened(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [deepLinkPath, forwardQuery]);

  const styles = useMemo(() => VARIANT_STYLES[variant], [variant]);

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
            className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full ${styles.iconBg}`}
          >
            <span className="text-2xl" aria-hidden>
              {styles.icon}
            </span>
            <span className="sr-only">{styles.srLabel}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {title}
          </h1>
          <p className="mt-4 text-slate-600">{description}</p>

          <a
            href={deepLink}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {buttonLabel}
          </a>

          {autoOpened ? (
            <p className="mt-4 text-xs text-slate-400">
              Didn&apos;t open automatically? Tap the button above.
            </p>
          ) : null}
        </div>
      </main>
    </div>
  );
}
