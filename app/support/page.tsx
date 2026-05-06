import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "Support — LootScout",
  description:
    "Get help with LootScout. Contact support, find answers in the FAQ, manage your subscription, or delete your account.",
};

interface SupportLink {
  href: string;
  title: string;
  body: string;
  external?: boolean;
}

const helpLinks: SupportLink[] = [
  {
    href: "/faq",
    title: "Frequently asked questions",
    body: "Card scanner requirements, search behavior, beta pricing, and other common questions.",
  },
  {
    href: "/features",
    title: "Features & guides",
    body: "Step-by-step walkthroughs of the collection tab, listings, scanner, trades, and more.",
  },
  {
    href: "/refund",
    title: "Refund policy",
    body: "How subscription refunds and cancellations work.",
  },
  {
    href: "/delete-account",
    title: "Delete your account",
    body: "Remove your LootScout account and associated data.",
  },
  {
    href: "/privacy",
    title: "Privacy policy",
    body: "What data we collect, how it's used, and your rights.",
  },
  {
    href: "/terms",
    title: "Terms of service",
    body: "Rules and policies for using LootScout.",
  },
];

const troubleshooting: { id: string; q: string; a: string }[] = [
  {
    id: "cant-sign-in",
    q: "I can't sign in.",
    a: "If you signed up with email and forgot your password, use the \"Forgot password\" link on the login screen. If you signed in with Google or Apple, use the same provider — switching providers creates a new account. Still stuck? Email support@lootscout.io with the email you used.",
  },
  {
    id: "listing-cap",
    q: "I hit my listing limit.",
    a: "Each tier has a different active-listing cap (Free, Plus, Pro, Pro Shop, Enterprise). To raise it, view the plans on the pricing page and subscribe on the web — your subscription syncs back into the app automatically within a minute.",
  },
  {
    id: "scanner-mismatch",
    q: "The scanner picked the wrong card.",
    a: "Tap the thumbnail to open the match picker. Use Change Match to pick from suggested alternates, or open Manual Search to look it up by name and set. The Review screen lets you fix the match for any row before adding to your collection.",
  },
  {
    id: "wrong-price",
    q: "The displayed price looks wrong.",
    a: "LootScout combines real-time TCG data, daily PriceCharting baselines, and confirmed local sales. Prices update overnight; major TCG cards refresh more frequently. If a specific card looks off, email support@lootscout.io with the card name, set, and condition and we'll investigate.",
  },
  {
    id: "subscription-iphone",
    q: "I can't subscribe in the iPhone app.",
    a: "Subscriptions are managed at lootscout.io. Tap your tier in the Profile tab to open the manage page, or visit lootscout.io/pricing in any browser. Subscriptions you start on the web work in the iOS app immediately.",
  },
  {
    id: "stripe-portal",
    q: "How do I cancel or change my plan?",
    a: "Sign in at lootscout.io and open Account → Subscription, or use the link in any LootScout billing email. You can change tiers, update your payment method, or cancel; cancellation takes effect at the end of the current billing period.",
  },
];

export default function SupportPage() {
  return (
    <>
      <SitePageHeader />
      <main className="min-h-[60vh] bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-sm font-medium text-primary-600">
            <Link href="/" className="hover:underline">
              ← Back to home
            </Link>
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Support
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We aim to respond to support emails within 24 hours.
          </p>

          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Contact us
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Email{" "}
              <a
                href="mailto:support@lootscout.io"
                className="text-primary-600 font-medium hover:underline"
              >
                support@lootscout.io
              </a>
              . Include your account email, what you were trying to do, and any
              error messages. Screenshots help.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              For privacy or data requests, see the{" "}
              <Link href="/privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </Link>
              . For account deletion, see{" "}
              <Link
                href="/delete-account"
                className="text-primary-600 hover:underline"
              >
                Delete your account
              </Link>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">
              Common questions
            </h2>
            <div className="mt-4 space-y-4">
              {troubleshooting.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">
              Helpful links
            </h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {helpLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-primary-300 hover:shadow-sm"
                >
                  <div className="font-semibold text-slate-900 group-hover:text-primary-700">
                    {link.title} →
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {link.body}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <p className="mt-12 text-sm text-slate-500">
            Raleigh, NC. We&apos;re a small team and read every message.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
