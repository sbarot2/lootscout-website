import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";
import { paymentLinks, type PaidTierKey } from "./paymentLinks";

export const metadata: Metadata = {
  title: "Pricing — LootScout",
  description:
    "LootScout subscription plans for individual collectors and shops. Beta lock-in pricing. Manage or cancel anytime.",
};

interface PlanFeature {
  label: string;
  value: string;
}

interface Plan {
  id: string;
  name: string;
  tagline: string;
  retailPrice?: string;
  price: string;
  cadence: string;
  highlight?: boolean;
  features: PlanFeature[];
  /** If set, Subscribe button uses the matching paymentLinks[paidTier] URL. */
  paidTier?: PaidTierKey;
}

const individualPlans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "For casual sellers",
    price: "$0",
    cadence: "forever",
    features: [
      { label: "Active listings", value: "5" },
      { label: "Price alerts", value: "—" },
      { label: "Peer trades / month", value: "5" },
      { label: "CSV import", value: "—" },
      { label: "Bulk operations", value: "—" },
    ],
  },
  {
    id: "plus",
    name: "Plus",
    tagline: "For active sellers",
    retailPrice: "$9.99",
    price: "$4.99",
    cadence: "per month",
    highlight: true,
    paidTier: "plus",
    features: [
      { label: "Active listings", value: "25" },
      { label: "Price alerts", value: "10" },
      { label: "Peer trades / month", value: "5" },
      { label: "CSV import", value: "Included" },
      { label: "Bulk operations", value: "—" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For power sellers",
    retailPrice: "$21.99",
    price: "$14.99",
    cadence: "per month",
    paidTier: "pro",
    features: [
      { label: "Active listings", value: "50" },
      { label: "Price alerts", value: "Unlimited" },
      { label: "Peer trades / month", value: "10" },
      { label: "CSV import", value: "Included" },
      { label: "Bulk operations", value: "Included" },
    ],
  },
];

const shopPlans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Free shop tier",
    price: "$0",
    cadence: "forever",
    features: [
      { label: "Active listings", value: "10" },
      { label: "Price alerts", value: "—" },
      { label: "Peer trades / month", value: "—" },
      { label: "CSV import", value: "Included" },
      { label: "In-person checkout", value: "—" },
      { label: "Trade-in cart", value: "—" },
    ],
  },
  {
    id: "pro_shop",
    name: "Pro Shop",
    tagline: "Kiosk, bulk ops, in-person sales",
    retailPrice: "$44.99",
    price: "$29",
    cadence: "per month",
    highlight: true,
    paidTier: "pro_shop",
    features: [
      { label: "Active listings", value: "150" },
      { label: "Price alerts", value: "Unlimited" },
      { label: "Peer trades / month", value: "20" },
      { label: "CSV import", value: "Included" },
      { label: "In-person checkout", value: "Included" },
      { label: "Trade-in cart", value: "—" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "POS, rewards, API, multi-location",
    retailPrice: "$149.99",
    price: "$99",
    cadence: "per month",
    paidTier: "enterprise",
    features: [
      { label: "Active listings", value: "Unlimited" },
      { label: "Price alerts", value: "Unlimited" },
      { label: "Peer trades / month", value: "Unlimited" },
      { label: "CSV import", value: "Included" },
      { label: "In-person checkout", value: "Included" },
      { label: "Trade-in cart", value: "Included" },
      { label: "Rewards program", value: "Included" },
      { label: "API access", value: "Included" },
      { label: "Multi-location", value: "Included" },
      { label: "Priority support", value: "Included" },
    ],
  },
];

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
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
          {plan.highlight && (
            <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
              Beta lock-in
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-slate-600">{plan.tagline}</p>
        <div className="mt-5 flex items-baseline gap-2">
          {plan.retailPrice && (
            <span className="text-base text-slate-400 line-through">
              {plan.retailPrice}
            </span>
          )}
          <span className="text-3xl font-extrabold text-slate-900">
            {plan.price}
          </span>
          <span className="text-sm text-slate-500">{plan.cadence}</span>
        </div>
      </div>

      <ul className="mt-6 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li
            key={f.label}
            className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0"
          >
            <span className="text-slate-600">{f.label}</span>
            <span className="font-medium text-slate-900">{f.value}</span>
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
        `Hi LootScout,\n\nI'd like to subscribe to ${planName} at the beta lock-in rate. My account email is: <your-email-here>\n\nThanks!`,
      )}`}
      className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary-600 px-4 py-2.5 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
    >
      Email support to subscribe
    </a>
  );
}

export default function PricingPage() {
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
          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            Beta subscribers keep their promotional rate as long as the subscription
            stays active. Prices in USD, billed monthly. Cancel anytime.
          </p>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Individual plans
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              For collectors and personal sellers.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {individualPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">Shop plans</h2>
            <p className="mt-1 text-sm text-slate-600">
              For brick-and-mortar shops and high-volume sellers.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
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
                <strong>Already in the app on Android?</strong> Open Profile →
                Subscription to upgrade from inside the app.
              </p>
              <p>
                <strong>To change tiers, update billing, or cancel:</strong>{" "}
                email{" "}
                <a
                  href="mailto:support@lootscout.io"
                  className="text-primary-600 font-medium hover:underline"
                >
                  support@lootscout.io
                </a>{" "}
                from the address on your account and we&apos;ll send you a
                secure Stripe billing link. Cancellations take effect at the
                end of the current billing period.
              </p>
              <p className="text-sm text-slate-500">
                A self-serve billing portal on the web is on the roadmap.
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
            Prices and limits may change during beta. Existing subscribers keep
            their current rate while their subscription is active. See{" "}
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
