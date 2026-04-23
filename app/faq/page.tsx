import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "FAQ — LootScout",
  description:
    "LootScout FAQ: card scanner requirements, Home search behavior, pricing beta, and the Raleigh–Durham local marketplace.",
};

const qa = [
  {
    id: "scanner-build",
    q: "Do I need a special app build to scan cards?",
    a: "Yes. The in-app card scanner uses your device camera and on-device text recognition (OCR). It ships in native iOS/Android builds that include the OCR module (for example a development client or production store build). Expo Go and generic web builds do not include the full scanner pipeline.",
  },
  {
    id: "scanner-web",
    q: "Does scanning work on the website?",
    a: "No — not today. lootscout.io is the marketing site. Scanning, batch review, and add-to-collection from scans happen in the mobile app. Web builds typically show a “scanner not available” style message if you open scanner routes there.",
  },
  {
    id: "search-api",
    q: "Does manual search hit external APIs while I type?",
    a: "No. Manual search (including from the scanner) stays catalog-first while you type, similar to Home search: results come from the local LootScout database for responsive suggestions. Broader hybrid / external API search runs only after you tap Search or press Enter — and only if the catalog returned no rows for that query. That saves API cost and matches how the product behaves.",
  },
  {
    id: "scanner-free",
    q: "Does the card scanner cost extra?",
    a: "No. Single-card and batch scanning are included for every account during beta — there is no separate scanner subscription on top of your tier.",
  },
  {
    id: "scanner-batch",
    q: "What is batch scanning?",
    a: "In batch mode you scan many cards in sequence. Each scan appears as a thumbnail; you can change the catalog match, remove a scan, or add a row via manual search. When you are ready, open Review to set condition (including graded grades), variant, and folder per row, see approximate prices where data exists, then add all to your collection.",
  },
  {
    id: "pricing-beta",
    q: "Why is pricing labeled beta?",
    a: "Plans and limits can evolve while we refine the product. Lock-in messaging on the homepage describes how beta subscribers may keep promotional rates; see the pricing section for details.",
  },
] as const;

export default function FaqPage() {
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
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Frequently asked questions</h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Answers for beta testers and collectors using LootScout in the Raleigh–Durham area. For step-by-step product flows, see{" "}
            <Link href="/features" className="text-primary-600 font-medium hover:underline">
              Features &amp; guides
            </Link>
            .
          </p>

          <ul className="mt-10 space-y-2 text-sm border border-slate-200 rounded-xl bg-white p-4 shadow-sm">
            <li className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-2">On this page</li>
            {qa.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-primary-600 hover:underline">
                  {item.q}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-12">
            {qa.map((item) => (
              <section key={item.id} id={item.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900">{item.q}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.a}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
