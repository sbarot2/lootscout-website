import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "FAQ — LootScout",
  description:
    "LootScout FAQ: card scanner requirements, the Desktop Scan Station and marketplace CSV exports, Home search behavior, pricing beta, and the local collectibles marketplace.",
};

const qa = [
  {
    id: "scanner-build",
    q: "Do I need a special app build to scan cards?",
    a: "Yes. The in-app card scanner uses your device camera and on-device text recognition (OCR). It ships in native iOS/Android builds that include the OCR module (for example a development client or production store build). Expo Go and generic web builds do not include the camera scanner pipeline — on a computer, use the Desktop Scan Station instead.",
  },
  {
    id: "scanner-web",
    q: "Can I scan cards on a computer?",
    a: "Yes, with a desktop scanner. lootscout.io is the marketing site, but the LootScout app runs in your browser at app.lootscout.io — go to Collection → Import scans to open the Desktop Scan Station and bulk-import scan images. Camera scanning is different: that needs the phone camera and stays in the mobile app.",
  },
  {
    id: "scan-station",
    q: "What is the Desktop Scan Station?",
    a: "It is the bulk workflow for people who scan cards on a flatbed or feed scanner. Open app.lootscout.io on a computer, go to Collection → Import scans, and drop in your images — fronts, or fronts and backs together, up to 150 scans per import. Every card is read in your browser (images are only uploaded when you list a card for sale) and matched to the catalog. A review grid lets you confirm each match, set printing and condition, compare the market price with your own price, and pick a folder. From there you can add the whole batch to your collection, list it for sale in bulk with the scans attached, or export it to eBay and TCGplayer.",
  },
  {
    id: "marketplace-export",
    q: "Which plans get the eBay and TCGplayer CSV export?",
    a: "Pro Shop and Enterprise. The exports turn a reviewed batch — or your existing shop inventory — into a ready-to-upload eBay File Exchange file or a TCGplayer seller file, with your own scan photos attached. Everything else in the Desktop Scan Station, including reading scans and adding them to your collection, is available on every plan.",
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
    id: "tap-to-pay",
    q: "How do I get paid for in-person sales and trades?",
    a: "With Tap to Pay, you can accept contactless card payments using just your phone — no card reader or extra hardware. Payments are powered by Stripe, and money goes directly to your own bank account through Stripe Connect. LootScout never holds your funds. Card payments settle sales and trades instantly, so there's no separate confirmation step, and refunds are handled in-app if a deal is disputed. It works on Android, and on iPhone as Tap to Pay on iPhone.",
  },
  {
    id: "tap-to-pay-fees",
    q: "What does Tap to Pay cost?",
    a: "Two fees, both seller-side: a small LootScout platform fee, and Stripe's card processing fee. The app shows you the exact breakdown of both before each sale — no platform holding your money and taking a large cut.",
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
            Answers for beta testers and collectors using LootScout. For step-by-step product flows, see{" "}
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
