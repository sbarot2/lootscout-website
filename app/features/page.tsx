import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "Features & guides — LootScout",
  description:
    "How to use LootScout: Home search, collection, in-app TCG card scanner (single & batch), the Desktop Scan Station, listings, shops, and pickup. Summarized from the project feature guide.",
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
            LootScout is a <strong>marketplace</strong> for trading cards,
            video games, comics, and other collectibles &mdash; on iOS, Android,
            and in your browser at{" "}
            <a
              href="https://app.lootscout.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-medium hover:underline"
            >
              app.lootscout.io
            </a>{" "}
            &mdash; with hybrid pricing (JustTCG, Scrydex, PriceCharting /
            SportsCardsPro catalog baselines, and local transaction intelligence
            that improves over time). This page summarizes the features
            available in the current build.
          </p>

          <div className="mt-10 space-y-12">
            <Section id="account" title="1. Account & basics">
              <p>
                Sign up and sign in with email, <strong>Sign in with Apple</strong>{" "}
                (iOS), or Google. Email accounts confirm via a link sent to your
                inbox. Passwords require uppercase, lowercase, a number, and a
                symbol — and are checked against the HaveIBeenPwned breach
                database so weak / known-compromised passwords are rejected.
              </p>
              <p>
                Forgot your password? Tap <strong>Forgot password?</strong> on
                the login screen. We&rsquo;ll email a recovery link that opens
                straight into the app via Universal Links / App Links.
              </p>
              <p>
                Tabs: <strong>Home</strong>, <strong>Collection</strong>,{" "}
                <strong>Profile</strong>, with Scanner, Shop dashboard, and
                Pickup routes available based on your tier and account type.
                Pull to refresh on supported screens reloads server-backed data.
              </p>
            </Section>

            <Section id="home" title="2. Home tab">
              <p>
                <strong>Portfolio</strong> shows collection value and gain/loss (scope may follow folder filters). Pull to refresh updates figures. A <strong>value-over-time chart</strong> tracks your collection&rsquo;s total worth day by day, so you can watch your portfolio grow over weeks and months instead of seeing only today&rsquo;s number.
              </p>
              <p>
                <strong>Product search:</strong> While typing, search is <strong>database / catalog only</strong> — fast, without live TCG API on every keystroke. When you submit (Search / Enter), the app runs a <strong>hybrid</strong> search path that may call external APIs when appropriate, then merges and caches results.
              </p>
              <p>
                <strong>Listings search:</strong> Switch to listings mode when available; use filters (price, condition, distance, etc.). Distance may require location permission.
              </p>
              <p>
                <strong>Map:</strong> Browse nearby listings on an interactive map to see what&rsquo;s for sale around you, then meet up in person.
              </p>
              <p>
                <strong>Wishlist &amp; price alerts:</strong> Add cards to your wishlist and get notified when a match is listed near you. Set price alerts (Plus and up) to watch the market and hear about moves on items you care about.
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
                <strong>Import scans</strong> (browser): on desktop, Collection →
                Import scans opens the{" "}
                <a href="#scan-station" className="text-primary-600 font-medium hover:underline">
                  Desktop Scan Station
                </a>{" "}
                for bulk-importing card scans.
              </p>
              <p>
                <strong>List for sale</strong> from a collection item — listing is prefilled from condition, variant, and catalog links; fixed price vs offer-only where supported.
              </p>
              <p>
                <strong>Export CSV</strong> (Plus / Pro): download your full
                collection — or a single folder — as a spreadsheet with product
                name, set, card number, condition, variant, quantity, purchase
                price, current market value, gain/loss, notes, and date added.
              </p>
            </Section>

            <Section id="scanner" title="5. Card scanner (TCG)">
              <p className="rounded-lg bg-amber-50 border border-amber-200/80 px-4 py-3 text-amber-950 text-sm">
                <strong>Requires</strong> a physical iOS or Android device with a dev client or store build that includes <strong>camera + on-device OCR</strong>. Scanning with a camera is not available in the browser — on desktop, use the{" "}
                <a href="#scan-station" className="text-primary-700 font-semibold underline underline-offset-2">
                  Desktop Scan Station
                </a>{" "}
                instead.{" "}
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
                <strong>Photo mode:</strong> tap the shutter instead of holding
                the card steady. One tap takes a short burst and cross-checks
                the reads across the frames, so the match is steadier than a
                single shot.
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

            <Section id="scan-station" title="6. Desktop Scan Station (browser)">
              <p>
                Got a flatbed or feed scanner and a stack of cards? Open{" "}
                <a
                  href="https://app.lootscout.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:underline"
                >
                  app.lootscout.io
                </a>{" "}
                on a computer and go to <strong>Collection → Import scans</strong>.
                Drop in your scan images — fronts, or fronts and backs together —
                and LootScout reads every card <strong>in your browser</strong>.
                Images are only uploaded when you list a card for sale. Up to 150
                scans per import.
              </p>
              <p>
                Each scan is matched to the catalog and lands in a{" "}
                <strong>review grid</strong>: confirm the match or search for a
                different one, set printing and condition (including graded), see
                the market price next to the price you are asking, and pick a
                folder. Then <strong>add to collection</strong> or{" "}
                <strong>add and list for sale</strong> in one pass — listings from
                the station go out under your shop profile, and the front and back
                scans attach to each listing automatically.
              </p>
              <p>
                <strong>eBay &amp; TCGplayer CSV export</strong> (Pro Shop /
                Enterprise): export the same reviewed batch as a ready-to-upload{" "}
                <strong>eBay File Exchange</strong> file or a{" "}
                <strong>TCGplayer</strong> seller file, with your own scan photos
                attached. The shop dashboard can export your existing inventory to
                the same two formats. It replaces the manual work of bulk listing —
                no retyping a card into another tool.
              </p>
            </Section>

            <Section id="listings" title="7. Listings & selling">
              <p>Create listings from collection or listing flows. Fixed vs offer types; auto-price tracks catalog prices until you manually override.</p>
              <p>
                <strong>Sale confirmations:</strong> in-person deals are
                confirmed by both parties; either side can propose a final
                price, and unresolved confirmations auto-time-out after 72
                hours to keep your listings unblocked.
              </p>
              <p>
                <strong>Reviews:</strong> after a confirmed sale or trade,
                each party can leave a 1-5 star review. Reviews show on the
                counterparty&rsquo;s public profile and on shop pages.
              </p>
              <p>
                <strong>Transaction disputes:</strong> if something goes wrong
                with a confirmed deal, open a dispute. Both parties exchange
                messages; if you can&rsquo;t resolve it together, escalate to
                LootScout and a moderator will mediate.
              </p>
              <p>
                <strong>Longer trendlines:</strong> product and listing
                sparklines now plot a persistent price history that extends
                beyond the trend window the source APIs report — so you can
                see how a card actually moved over weeks and months, not just
                the last seven days.
              </p>
            </Section>

            <Section id="shops" title="8. Shops, trades & pickup">
              <p>
                <strong>Events:</strong> find local card shows and meetups on
                the Events tab. Vendors can place themselves on an event so
                buyers browsing the show see their listed inventory and can
                find them in person.
              </p>
              <p>
                Shop-scoped pickup cart on device; Pickup hub and checkout
                routes; kiosk tablet flow with QR listings; trade and sale
                drafts from a scanned listing QR.
              </p>
              <p>
                <strong>Tap to Pay:</strong> accept in-person contactless card
                payments with just your phone — no reader hardware. It&rsquo;s
                powered by Stripe, and you&rsquo;re paid <strong>directly to
                your own bank</strong> through Stripe Connect; LootScout never
                holds your funds and takes only a small per-transaction platform
                fee. Stripe&rsquo;s card processing fee applies on top, and the
                app shows the full breakdown before each sale.
                Card payments <strong>settle trades and sales instantly</strong>{" "}
                (no separate confirm step), and refunds run in-app if a deal is
                disputed. <strong>Available on Android, and as Tap to Pay on
                iPhone on iOS.</strong>
              </p>
              <p>
                <strong>Trade-in cart:</strong> any shop can run walk-in
                trade-ins. Search the full product catalog for what a customer
                brings in — any grading company, including <strong>ACE and
                TAG</strong>, plus half grades — set a per-item agreed price,
                take card payment for any remaining balance on the spot, and the
                items file automatically into your collection folders. Custom
                catalog entries (including custom grading slabs) and per-line
                quantity adjustments are supported.
              </p>
              <p>
                <strong>Transactions CSV export</strong> (Pro Shop /
                Enterprise): from the shop dashboard, export your
                transactions for any date range with date, type, counterparty,
                line items, revenue, cost basis, gross profit, discount, cash
                difference, and event name — for accounting, taxes, or just
                clean records.
              </p>
              <p>
                <strong>Inventory export to eBay / TCGplayer</strong> (Pro Shop /
                Enterprise): from the shop dashboard in a browser, export your
                inventory as an eBay File Exchange or TCGplayer seller file —
                the same exporters the{" "}
                <a href="#scan-station" className="text-primary-600 font-medium hover:underline">
                  Desktop Scan Station
                </a>{" "}
                uses.
              </p>
            </Section>

            <Section id="profile" title="9. Profile & subscription">
              <p>
                Profile shows public info, shop entry points, usage, and
                settings. <strong>Two payment paths</strong>: on iOS, the in-app
                upgrade flow uses Apple In-App Purchase (auto-renewable
                subscriptions with a 14-day free trial); on Android and on{" "}
                <Link href="/pricing" className="text-primary-600 hover:underline">
                  lootscout.io/pricing
                </Link>{" "}
                subscriptions go through Stripe. Restore Purchases is one tap
                away on iOS for users coming back after reinstall. Promo codes
                redeem via Apple&rsquo;s native sheet on iOS (offer codes) or
                through the in-app promo input on Android / web.
              </p>
              <p>
                <strong>Manage</strong> opens the App Store subscription
                screen for IAP customers, or the Stripe customer portal for
                everyone else.
              </p>
              <p>
                <strong>Follow &amp; discover collectors:</strong> Search for
                other collectors and shops by name and follow the ones you want
                to keep up with, so their new listings and activity stay on your
                radar. Public profiles show reviews and ratings from completed
                deals.
              </p>
            </Section>

            <Section id="safety" title="10. Safety: reports, blocking & moderation">
              <p>
                LootScout has zero tolerance for objectionable content or
                abusive behavior. Every user, listing, and message thread has
                a <strong>Report</strong> option from the menu &mdash; pick a
                reason, write a 30+ character summary, and optionally attach up
                to four evidence photos. Moderators triage open reports within
                24 hours and act on them by removing content and, when
                warranted, suspending the account responsible.
              </p>
              <p>
                Need someone gone from your feed immediately? Tap{" "}
                <strong>Block user</strong> from the profile menu. Their
                listings, reviews, and messages disappear from your view the
                moment you confirm — and the block also files an automatic
                moderation report so we see the signal. Manage your block
                list any time from <strong>Profile → Privacy &amp; safety →
                Blocked users</strong>.
              </p>
            </Section>

            <Section id="ai" title="11. AI & analytics (where enabled)">
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
