"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type State = {
  hasError: boolean;
  description: string;
};

const SUCCESS_DESCRIPTION =
  "Your account is ready. Open the app to complete your profile.";
const ERROR_FALLBACK_DESCRIPTION =
  "The verification link may have expired. Please try signing up again.";

export default function EmailConfirmedPage() {
  const [state, setState] = useState<State>({
    hasError: false,
    description: SUCCESS_DESCRIPTION,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const errorDescription = params.get("error_description");
    const hasError = Boolean(error);

    setState({
      hasError,
      description: hasError
        ? errorDescription || ERROR_FALLBACK_DESCRIPTION
        : SUCCESS_DESCRIPTION,
    });
  }, []);

  const { hasError, description } = state;

  const title = hasError ? "Something went wrong" : "Email Confirmed!";
  const buttonLabel = hasError ? "Back to App" : "Open LootScout";
  const icon = hasError ? "✗" : "✓";
  const iconBgClass = hasError
    ? "bg-red-100 text-red-600"
    : "bg-emerald-100 text-emerald-600";

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
              {hasError ? "Error" : "Success"}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {title}
          </h1>
          <p className="mt-4 text-slate-600">{description}</p>

          <a
            href="lootscout://"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {buttonLabel}
          </a>
        </div>
      </main>
    </div>
  );
}

