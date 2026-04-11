"use client";

import { type FormEvent, useState } from "react";

export default function BetaEmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if ((fd.get("website") as string)?.trim()) {
      setStatus("success");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const email = String(fd.get("email") || "").trim();

    try {
      const res = await fetch("/api/beta-signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: "" }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="mt-8 max-w-xl">
      <p className="text-sm text-primary-100 leading-relaxed">
        Enter your email address to gain free beta access to enterprise features.
      </p>
      <form
        onSubmit={handleSubmit}
        className="relative mt-3 flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute h-0 w-0 opacity-0 pointer-events-none"
          aria-hidden
        />
        <label htmlFor="beta-enterprise-email" className="sr-only">
          Email address
        </label>
        <input
          id="beta-enterprise-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-lg border border-white/35 bg-white/95 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/70"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {status === "loading" ? "Submitting…" : "Submit"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm font-medium text-primary-50" role="status">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-amber-100" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
