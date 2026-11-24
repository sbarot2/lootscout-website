import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "FAQ — LootScout",
  description:
    "LootScout FAQ: card scanner requirements, the Scan Station and marketplace CSV exports, public shop pages (sort and filter), CSV import formats and quantities, guest browsing, QR labels and signs, vendor show mode, Home search behavior, pricing, and the collectibles marketplace.",
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
    a: "Yes, with a desktop scanner. lootscout.io is the marketing site, but the full LootScout app runs in your browser at app.lootscout.io — go to Collection → Import scans to open the Scan Station and bulk-import scan images. The Scan Station also runs on a phone now, so you can import, review, list, and export from either. Camera scanning is the one thing that is different: that needs the phone camera and stays in the mobile app.",
  },
  {
    id: "scan-station",
    q: "What is the Desktop Scan Station?",
    a: "It is the bulk workflow for people who scan cards on a flatbed or feed scanner. Open app.lootscout.io on a computer, go to Collection → Import scans, and drop in your images — fronts, or fronts and backs together, up to 150 scans per import. Every card is read in your browser (images are only uploaded when you list a card for sale) and matched to the catalog. A review grid lets you confirm each match, set printing and condition, compare the market price with your own price, and pick a folder. From there you can add the whole batch to your collection, list it for sale in bulk with the scans attached, or export it to eBay and TCGplayer.",
  },
  {
    id: "marketplace-export",
    q: "Which plans get the eBay and TCGplayer CSV export?",
    a: "Shop and Enterprise. The exports turn a reviewed batch — or your existing shop inventory — into a ready-to-upload eBay File Exchange file or a TCGplayer seller file, with your own scan photos attached. Everything else in the Desktop Scan Station, including reading scans and adding them to your collection, is available on every plan; imported scans count toward your plan's monthly photo-upload allowance (10 on Free, 100 on Collector, 10,000 on Shop, unlimited on Enterprise).",
  },
  {
    id: "public-shop",
    q: "Do people need an account to see my shop?",
    a: "No. Your shop page is public — send the link to anyone and they can browse your listings straight away, no signup wall. An account is only needed to act: message you, add items to a pickup cart, or follow the shop. Tap Share on your shop page to send the link, and there is a shortcut to your own shop from the Home and Collection tabs.",
  },
  {
    id: "shop-sort-filter",
    q: "Can I sort or filter a shop's inventory?",
    a: "Yes. On any shop page, Sort orders the listings by price (low to high or high to low) and Filter narrows them by game or category, sealed, raw or graded, condition, and price range — showing only what that shop actually stocks. It works for everyone, signed in or not, and together with the shop's search box. The same Sort and Filter buttons are on a user's profile listings in the app and in kiosk mode.",
  },
  {
    id: "csv-import",
    q: "What can I import from a CSV, and does it bring my quantities?",
    a: "Collectr, Deckbox, and TCGplayer Seller Portal inventory exports are recognized, and PriceCharting collection exports are recognized too; any other spreadsheet works by mapping its columns. Quantities come across: each row shows its quantity and imports as one collection item holding that many copies, and the preview totals both rows and cards. Matching handles promos, sealed product, alternate arts, and reprints; rows it is unsure of are marked Check this match with the closest catalog versions to pick from. Each row is priced for its own condition or grade, and you can change a row's condition, grade, printing, or quantity before you import. CSV import is on every plan with a monthly allowance.",
  },
  {
    id: "guest",
    q: "Can I look around without making an account?",
    a: "Yes. Tap Browse as guest on the sign-in screen to search products and listings, open the map, and browse Events and vendor maps without signing up. Guest mode is view-only — adding to a collection, messaging, or buying asks you to sign in first. Shop pages and listing links work the same way: anyone can open them, in the app or in a browser.",
  },
  {
    id: "qr-codes",
    q: "Do my listing QR labels and shop sign work for people without the app?",
    a: "Yes. Listing QR codes and the shop QR sign are ordinary web links, so any phone camera can scan them. If LootScout is installed, the link opens in the app; if not, it opens the listing or shop in the browser, where they can browse as a guest. Older labels printed before the switch still scan inside the app.",
  },
  {
    id: "show-mode",
    q: "What is vendor show mode?",
    a: "A way to keep one show's numbers together. Start it from your shop dashboard or an event page (Shop plan and above) — the start control is on every upcoming event and opens from the day before the event — optionally with a spending budget and your starting cash. While it is running, every sale, trade-in, and trade you make is filed under the show automatically, and you get a warning before a buy takes you over budget. When you end the show, the summary shows sales by cash and card, what you spent against the budget, the cash that should be in your box, and the items that went out and came in.",
  },
  {
    id: "search-api",
    q: "Does manual search hit external APIs while I type?",
    a: "No. Manual search (including from the scanner) stays catalog-first while you type, similar to Home search: results come from the local LootScout database for responsive suggestions. Broader hybrid / external API search runs only after you tap Search or press Enter — and only if the catalog returned no rows for that query. That saves API cost and matches how the product behaves.",
  },
  {
    id: "scanner-free",
    q: "Does the card scanner cost extra?",
    a: "No. Single-card and batch scanning with the live camera are free and unlimited on every plan — there is no separate scanner subscription on top of your tier. Scanning uploaded or picked images (including the Desktop Scan Station) uses a monthly photo-upload allowance: 10 on Free, 100 on Collector, 10,000 on Shop, unlimited on Enterprise.",
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
    a: "Two fees, both seller-side — the buyer is never surcharged: a small LootScout platform fee, and Stripe's card processing fee on top of it. Before you charge, the app shows you an estimate of what the card will cost you; the completed sale shows what it actually cost. No platform holding your money and taking a large cut.",
  },
  {
    id: "pricing-beta",
    q: "Can plan prices or limits change?",
    a: "Yes. Plan prices, limits and features may change as we refine the product; we'll give notice before a price change applies to your subscription. Current plans and limits are on the pricing page.",
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
            Answers for collectors using LootScout. For step-by-step product flows, see{" "}
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
