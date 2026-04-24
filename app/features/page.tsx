import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "Features & guides — LootScout",
  description:
    "How to use LootScout: Home search, collection, in-app TCG card scanner (single & batch), listings, shops, and pickup. Summarized from the project feature guide.",
};

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={id ? "scroll-mt-24" : undefined}>
      <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">{title}</h2>
      <div className="mt-4 space-y-3 text-slate-600 leading-relaxed">{children}</div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <SitePageHeader />
      <main className="bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-sm font-medium text-primary-600">
            <Link href="/" className="hover:underline">
              ← Back to home
            </Link>
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Features &amp; guides</h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            This page summarizes the in-repo <strong>FEATURES.md</strong> guide for beta testers, support, and teams. LootScout is a{" "}
            <strong>mobile app</strong> (React Native / Expo) focused on the Raleigh–Durham, NC area, with hybrid pricing (JustTCG, catalog
            baselines, and local transaction intelligence over time). Some capabilities require a <strong>development build</strong>, not Expo
            Go — especially the card scanner.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Canonical source: <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-slate-800">FEATURES.md</code> in the website repo.
            Scanner implementation notes may also live in app-repo docs such as <code className="rounded bg-slate-200/80 px-1.5 py-0.5">docs/features-card-scanner.md</code>.
          </p>

          <div className="mt-10 space-y-12">
            <Section id="account" title="1. Account & basics">
              <p>Sign up and sign in with email (Supabase Auth). Confirm email if your project requires it.</p>
              <p>
                Typical tabs: <strong>Home</strong>, <strong>Collection</strong>, <strong>Profile</strong>, plus beta routes your build exposes (e.g. Scanner, Shop, Pickup). Pull to refresh on supported screens reloads server-backed data.
              </p>
            </Section>

            <Section id="home" title="2. Home tab">
              <p>
                <strong>Portfolio</strong> shows collection value and gain/loss (scope may follow folder filters). Pull to refresh updates figures.
              </p>
              <p>
                <strong>Product search:</strong> While typing, search is <strong>database / catalog only</strong> — fast, without live TCG API on every keystroke. When you submit (Search / Enter), the app runs a <strong>hybrid</strong> search path that may call external APIs when appropriate, then merges and caches results.
              </p>
              <p>
                <strong>Listings search:</strong> Switch to listings mode when available; use filters (price, condition, distance, etc.). Distance may require location permission.
              </p>
              <p>
                See also:{" "}
                <Link href="/faq#search-api" className="text-primary-600 font-medium hover:underline">
                  FAQ — external APIs while typing
                </Link>
                .
              </p>
            </Section>

            <Section id="product" title="3. Product page">
              <p>Open from search or scanner match. Choose RAW vs GRADED (trading cards) or category-specific condition UI.</p>
              <p>
                <strong>Add to collection</strong> opens the add sheet with prefilled catalog data; pick condition, variant, folder, optional purchase price, then save. If you already own the item, quantity and sell flows apply as offered.
              </p>
            </Section>

            <Section id="collection" title="4. Collection">
              <p>
                Add from Collection → Add: image lookup where supported, search by name, condition (including graded options), optional purchase price and folder, then save.
              </p>
              <p>
                Recent builds polish <strong>add-to-collection</strong> from scanner and product flows, including safe-area and scroll behavior so primary actions stay clear of the home indicator.
              </p>
              <p>
                <strong>CSV import</strong> (when enabled): bring an existing spreadsheet from another tool — you don&apos;t have to re-enter your
                whole collection. Map columns, preview matching, confirm bulk import, resolve duplicates per app messaging.
              </p>
              <p>
                <strong>List for sale</strong> from a collection item — listing is prefilled from condition, variant, and catalog links; fixed price vs offer-only where supported.
              </p>
            </Section>

            <Section id="scanner" title="5. Card scanner (TCG)">
              <p className="rounded-lg bg-amber-50 border border-amber-200/80 px-4 py-3 text-amber-950 text-sm">
                <strong>Requires</strong> a physical iOS or Android device with a dev client or store build that includes <strong>camera + on-device OCR</strong>. Web builds show a scanner-unavailable style message.{" "}
                <Link href="/faq#scanner-build" className="text-primary-700 font-semibold underline underline-offset-2">
                  Read build requirements →
                </Link>
              </p>
              <p>
                <strong>Single mode:</strong> Point the camera at a card; when a match is found, a sheet shows the best match and alternates. Open a full match list or manual catalog search. Manual search uses catalog-first typing; broader API search only after explicit Search / Enter, and only if the catalog returned no rows.
              </p>
              <p>
                <strong>Batch mode:</strong> Scan in sequence; thumbnails appear along the bottom with remove controls; Review is placed so it does not overlap thumbnails. The scanner pauses while pickers and sheets are open. On the batch review screen, set condition (including graded grades), variant, folder, see approximate prices per row where data exists, change match from the thumbnail, remove rows, then add all to collection.
              </p>
              <p>
                <strong>Cost:</strong> Scanning is <strong>free for every account</strong> during beta — no separate scanner fee.
              </p>
              <p>
                <Link href="/faq" className="text-primary-600 font-medium hover:underline">
                  Scanner &amp; search FAQ →
                </Link>
              </p>
            </Section>

            <Section id="listings" title="6. Listings & selling">
              <p>Create listings from collection or listing flows. Fixed vs offer types; auto_price may track catalog prices until you manually override (see product docs).</p>
              <p>Record sale / sale confirmation flows apply for in-person deals where implemented.</p>
            </Section>

            <Section id="shops" title="7. Shops, trades & pickup">
              <p>
                Shop-scoped pickup cart on device; Pickup hub and checkout routes; kiosk tablet flow with QR listings; trade/sale drafts from listing QR where enabled. See kiosk/pickup documentation in the app repo for routes and deep links.
              </p>
            </Section>

            <Section id="profile" title="8. Profile & subscription">
              <p>Profile shows public info, shop entry points, usage, and settings. Subscription billing may open the Stripe customer portal from Edge Functions. Usage limits refresh on focus in supported builds.</p>
            </Section>

            <Section id="ai" title="9. AI & analytics (where enabled)">
              <p>Price trend hints, market opportunities, portfolio analytics — availability depends on build and configuration.</p>
            </Section>
          </div>

          <p className="mt-14 text-sm text-slate-500">
            Related:{" "}
            <Link href="/faq" className="text-primary-600 hover:underline">
              FAQ
            </Link>
            {" · "}
            <Link href="/" className="text-primary-600 hover:underline">
              Home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
