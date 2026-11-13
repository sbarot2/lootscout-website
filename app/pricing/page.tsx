import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";
import { paymentLinks, type PaidTierKey } from "./paymentLinks";
import { COMPARISON_ROWS, PLAN_CHANGE_NOTE, PLANS, type Plan } from "./plans";

export const metadata: Metadata = {
  title: "Pricing — LootScout",
  description:
    "LootScout plans for collectors and shops: Free, Collector, Shop and Enterprise. Every plan gets the full app; paid plans raise the monthly limits. Manage or cancel anytime.",
};

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={[
        "rounded-2xl border p-6 sm:p-7 flex flex-col",
        plan.highlight
          ? "border-primary-300 bg-white shadow-sm ring-1 ring-primary-200"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div>
        <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{plan.tagline}</p>
        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-slate-900">
            {plan.price}
          </span>
          <span className="text-sm text-slate-500">per month</span>
        </div>
      </div>

      <ul className="mt-6 space-y-2.5 text-sm">
        {COMPARISON_ROWS.map((row) => (
          <li
            key={row.label}
            className="flex items-start justify-between gap-3 border-b border-slate-100 pb-2 last:border-0"
          >
            <span className="text-slate-600">
              {row.label}
              {row.note && (
                <span className="block text-xs text-slate-400">{row.note}</span>
              )}
            </span>
            <span className="shrink-0 text-right font-medium text-slate-900">
              {row.values[plan.id]}
            </span>
          </li>
        ))}
      </ul>

      {plan.paidTier ? <SubscribeCta tier={plan.paidTier} planName={plan.name} /> : null}
    </div>
  );
}

function SubscribeCta({ tier, planName }: { tier: PaidTierKey; planName: string }) {
  const url = paymentLinks[tier];
  if (url) {
    return (
      <a
        href={url}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
      >
        Subscribe to {planName}
      </a>
    );
  }
  return (
    <a
      href={`mailto:support@lootscout.io?subject=${encodeURIComponent(
        `Subscribe to ${planName}`,
      )}&body=${encodeURIComponent(
        `Hi LootScout,\n\nI'd like to subscribe to ${planName}. My account email is: <your-email-here>\n\nThanks!`,
      )}`}
      className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary-600 px-4 py-2.5 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
    >
      Email support to subscribe
    </a>
  );
}

export default function PricingPage() {
  const personalPlans = PLANS.filter((p) => p.group === "personal");
  const shopPlans = PLANS.filter((p) => p.group === "shop");
  return (
    <>
      <SitePageHeader />
      <main className="min-h-[60vh] bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-sm font-medium text-primary-600">
            <Link href="/" className="hover:underline">
              ← Back to home
            </Link>
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Pricing
          </h1>
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 px-5 py-4 text-white shadow-sm flex items-center gap-3">
            <span className="text-2xl" aria-hidden>
              🎉
            </span>
            <p className="text-sm sm:text-base font-semibold">
              Intro offer: every new account gets <span className="underline decoration-white/40 underline-offset-2">Enterprise free for its first 30 days</span>.
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Every plan gets the full app. Paid plans raise the monthly limits, and
            the Shop plans add the shop tools. Live camera card scanning is free
            and unlimited on every plan. Prices in USD, billed monthly. Cancel
            anytime.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">{PLAN_CHANGE_NOTE}</p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Personal plans
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              For collectors and personal sellers.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {personalPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">Shop plans</h2>
            <p className="mt-1 text-sm text-slate-600">
              For brick-and-mortar shops, show vendors and high-volume sellers.{" "}
              <span className="text-slate-500">
                eBay / TCGplayer export covers both the{" "}
                <Link href="/features#scan-station" className="text-primary-600 hover:underline">
                  Desktop Scan Station
                </Link>{" "}
                and your shop inventory.
              </span>
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {shopPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Manage your subscription
            </h2>
            <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>To start a new subscription:</strong> tap a{" "}
                <em>Subscribe</em> button above. Stripe will collect your
                payment details — <strong>be sure to use the same email
                address as your LootScout account</strong> so the subscription
                links automatically. Your tier syncs into the app within a
                minute.
              </p>
              <p>
                <strong>Already in the app?</strong> Open Profile →
                Subscription. On Android and in the browser that runs through
                Stripe; on iPhone and iPad it uses Apple In-App Purchase, and{" "}
                <em>Restore Purchases</em> is one tap away if you have
                reinstalled.
              </p>
              <p>
                <strong>To change tiers, update billing, or cancel:</strong>{" "}
                open the <strong>billing portal</strong> — sign in at{" "}
                <a
                  href="https://app.lootscout.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:underline"
                >
                  app.lootscout.io
                </a>{" "}
                and go to Profile → Subscription → Manage, or use the link in
                any LootScout billing email. Cancellations take effect at the
                end of the current billing period. Subscriptions bought through
                Apple are managed in your App Store subscription settings
                instead.
              </p>
              <p className="text-sm text-slate-500">
                Stuck? Email{" "}
                <a
                  href="mailto:support@lootscout.io"
                  className="text-primary-600 font-medium hover:underline"
                >
                  support@lootscout.io
                </a>{" "}
                from the address on your account and we&apos;ll sort it out.
              </p>
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Questions about pricing?
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              See the{" "}
              <Link href="/faq" className="text-primary-600 hover:underline">
                FAQ
              </Link>{" "}
              or read the{" "}
              <Link href="/refund" className="text-primary-600 hover:underline">
                refund policy
              </Link>
              . For everything else, contact{" "}
              <Link href="/support" className="text-primary-600 hover:underline">
                support
              </Link>
              .
            </p>
          </section>

          <p className="mt-12 text-sm text-slate-500">
            Plan prices, limits and features may change. We&apos;ll give notice
            before a change affects your subscription. See{" "}
            <Link href="/terms" className="text-primary-600 hover:underline">
              Terms of service
            </Link>{" "}
            for details.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
