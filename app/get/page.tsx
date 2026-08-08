import type { Metadata } from "next";
import Link from "next/link";
import StoreLinks from "./StoreLinks";

export const metadata: Metadata = {
  title: "Get LootScout — Download the app",
  description:
    "Download LootScout for iOS or Android. Every new account gets Enterprise free for its first 60 days during our intro period.",
};

export default function GetPage() {
  return (
    <main className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
      <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-white font-semibold text-lg">
          <img src="/logo.svg" alt="LootScout" className="h-10 w-10" width={40} height={40} />
          LootScout
        </Link>

        <h1 className="mt-8 text-3xl sm:text-4xl font-bold tracking-tight">Get LootScout</h1>
        <p className="mt-4 text-lg text-primary-100">
          The local marketplace for collectors — free, with{" "}
          <strong className="font-semibold text-white">60 days of Enterprise included</strong>.
        </p>

        <StoreLinks />

        <p className="mt-6 text-sm text-primary-200">Available on the App Store and Google Play.</p>

        <p className="mt-2 text-sm font-medium text-white/90">
          iOS users: a major app update is coming very soon.
        </p>

        <p className="mt-10 text-sm">
          <Link
            href="/"
            className="text-white/90 underline decoration-white/40 underline-offset-2 hover:decoration-white transition-colors"
          >
            ← Back to lootscout.io
          </Link>
        </p>
      </div>
    </main>
  );
}
