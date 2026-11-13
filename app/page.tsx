import Link from "next/link";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import GalleryCarousel from "./components/GalleryCarousel";
import MarketingVideoGallery from "./components/MarketingVideoGallery";
import ComingSoonIcon from "./components/ComingSoonIcon";
import StoreBadge from "./components/StoreBadge";
import InstagramLink from "./components/InstagramLink";
import { COMPARISON_ROWS, PLAN_CHANGE_NOTE, PLANS } from "./pricing/plans";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary-700 shadow-sm">
                  <span aria-hidden>🎉</span>
                  Intro offer: 30 days of Enterprise, free
                </span>
                <a
                  href="https://discord.gg/CKWz5E3kP9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white border border-white/30 hover:bg-white/25 transition-colors"
                  aria-label="Join our Discord community"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.3 4.37A17.6 17.6 0 0015.9 3c-.2.36-.43.84-.59 1.22a16.2 16.2 0 00-4.63 0A12.2 12.2 0 0010.1 3a17.6 17.6 0 00-4.4 1.37C2.9 8.62 2.1 12.76 2.5 16.84A17.8 17.8 0 007.9 19.5c.43-.59.82-1.22 1.16-1.88-.64-.25-1.25-.56-1.82-.92.15-.11.29-.22.43-.34 3.52 1.63 7.34 1.63 10.82 0 .14.12.28.23.43.34-.57.36-1.18.67-1.82.92.34.66.73 1.29 1.16 1.88a17.7 17.7 0 005.4-2.66c.47-4.73-.8-8.83-3.36-12.47zM9.5 14.3c-1.04 0-1.9-.96-1.9-2.15s.84-2.15 1.9-2.15c1.06 0 1.92.97 1.9 2.15 0 1.19-.84 2.15-1.9 2.15zm5 0c-1.05 0-1.9-.96-1.9-2.15s.84-2.15 1.9-2.15c1.07 0 1.92.97 1.9 2.15 0 1.19-.84 2.15-1.9 2.15z" />
                  </svg>
                  Join our Discord
                </a>
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                The local marketplace for collectors
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-xl">
                Real prices, no marketplace fees. Buy, sell, and trade the collectibles you actually own — cards, sports
                cards, video games, comics, Funko, coins, and more — in person, near you.
              </p>
              <p className="mt-3 text-sm text-primary-200/90 max-w-xl">
                Every new account gets <strong className="font-semibold text-white">Enterprise free for its first 30 days</strong>{" "}
                during our intro period.{" "}
                <Link href="/features" className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Features &amp; guides →
                </Link>
              </p>
              {/* Official store badges. gap-4 plus each link's p-1.5 keeps well
                  clear of the 10%-of-badge-height clear space both stores
                  require, and StoreBadge renders the two at one shared height. */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/lootscout-collectibles/id6765471016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl p-1.5 hover:bg-white/10 transition-colors"
                >
                  <StoreBadge store="app-store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.lootscout.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl p-1.5 hover:bg-white/10 transition-colors"
                >
                  <StoreBadge store="google-play" />
                </a>
                <InstagramLink />
              </div>
              <p id="download" className="scroll-mt-24 mt-6 text-sm text-primary-200">
                Available on the App Store and Google Play — or use it right in your browser:{" "}
                <a
                  href="https://app.lootscout.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
                >
                  View desktop version →
                </a>
              </p>
            </FadeInSection>
            <FadeInSection className="lg:pl-8">
              <div className="max-w-md mx-auto rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm">
                <GalleryCarousel />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">How It Works</h2>
            <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
              Whether you buy, sell, or run a shop — LootScout connects you locally.
            </p>
          </FadeInSection>
          <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Buyers</h3>
                <p className="mt-2 text-slate-600">
                  Discover listings near you. Home search stays <strong>catalog-first while you type</strong> for speed; a{" "}
                  <strong>full hybrid search</strong> runs when you submit for deeper product discovery. Message sellers and meet in person — cards, games, comics, and more.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Sellers</h3>
                <p className="mt-2 text-slate-600">
                  <strong>Collection-first:</strong> track what you own, then list in one tap. Add cards with the <strong>in-app scanner</strong>{" "}
                  (single or batch), a desktop scanner and the <strong>Scan Station</strong> in your browser, search, or{" "}
                  <strong>CSV import</strong> from other platforms so you don&apos;t start from scratch — pricing
                  blends live TCG data, catalog baselines, and local transaction signals over time. Offer discovery helps you learn what the market
                  will pay.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Shops</h3>
                <p className="mt-2 text-slate-600">
                  Your shop page is <strong>public</strong> — share the link and anyone can browse your inventory without an account.
                  QR-forward kiosk flows, buyer pickup orders that open as a prefilled POS sale, and trade-in tools — same hybrid pricing philosophy, tuned for the sales floor. Accept cards right on your phone with <strong>Tap to Pay</strong> and get <strong>paid directly to your own bank</strong> — we never hold your money. Staff-friendly builds add inventory and analytics where enabled.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* What's Supported */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
              What Can You Trade on LootScout?
            </h2>
            <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
              From tabletop TCGs to sealed collectibles — list and discover locally.
            </p>
          </FadeInSection>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {[
              "Pokemon Cards",
              "Magic: The Gathering",
              "Yu-Gi-Oh!",
              "One Piece TCG",
              "Video Games (all platforms)",
              "Comics",
              "Sports Cards",
              "Funko Pops",
              "Coins",
              "LEGO Sets",
              "Sealed Products",
              "And more...",
            ].map((label) => (
              <FadeInSection key={label}>
                <span className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium text-slate-800 shadow-sm min-h-[2.5rem]">
                  {label}
                </span>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real Transaction Pricing */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Real Transaction Pricing, Not Just Estimates
            </h2>
            <p className="mt-4 text-lg text-primary-100 text-center max-w-3xl mx-auto">
              Most pricing tools show you estimates based on national averages or asking prices.
              LootScout shows you what collectibles <strong>ACTUALLY</strong> sell for in real transactions.
            </p>
          </FadeInSection>

          {/* How It Works - subsection */}
          <FadeInSection>
            <h3 className="mt-14 sm:mt-16 text-xl sm:text-2xl font-semibold text-center">How It Works</h3>
            <div className="mt-8 grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-lg font-bold">1</div>
                <h4 className="mt-3 text-lg font-semibold">Starts with Market Data</h4>
                <p className="mt-2 text-sm text-primary-100">
                  We combine trusted catalog baselines with live TCG feeds, then let completed local sales refine what similar items are worth — without implying different rules by neighborhood.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-lg font-bold">2</div>
                <h4 className="mt-3 text-lg font-semibold">Learns from Real Sales</h4>
                <p className="mt-2 text-sm text-primary-100">
                  Every completed transaction on LootScout—whether it matches, exceeds, or comes in below the estimate—gets recorded. As in-person card payments settle deals on the spot, those real sales feed the pricing engine too, with sanity bounds so outliers don&apos;t skew the numbers. Our algorithm tracks what people actually pay, not just what sellers ask for.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-lg font-bold">3</div>
                <h4 className="mt-3 text-lg font-semibold">Discover True Value Through Offers</h4>
                <p className="mt-2 text-sm text-primary-100">
                  List without a fixed price and let buyers make offers. You might discover your item is worth more than you thought! Real marketplace activity reveals true value better than any algorithm.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Why This Matters */}
          <FadeInSection>
            <h3 className="mt-14 sm:mt-16 text-xl sm:text-2xl font-semibold text-center">Why This Matters</h3>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl" aria-hidden>💰</span>
                <h4 className="mt-2 font-semibold">Real Money, Not Estimates</h4>
                <p className="mt-1 text-sm text-primary-100">See what collectibles actually sell for, not theoretical values based on incomplete data.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl" aria-hidden>🔍</span>
                <h4 className="mt-2 font-semibold">Price Discovery</h4>
                <p className="mt-1 text-sm text-primary-100">List items and receive offers to find their true market value. You might be surprised by what buyers are willing to pay.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl" aria-hidden>📊</span>
                <h4 className="mt-2 font-semibold">Trust Real Data</h4>
                <p className="mt-1 text-sm text-primary-100">Our prices improve with every transaction. More sales = more accurate pricing for everyone.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl" aria-hidden>⚡</span>
                <h4 className="mt-2 font-semibold">No Guesswork</h4>
                <p className="mt-1 text-sm text-primary-100">Stop wondering if national averages apply to your specific item. See real transaction history.</p>
              </div>
            </div>
          </FadeInSection>

          {/* Visual: Comparison cards + chart */}
          <div className="mt-14 sm:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <FadeInSection className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10">
                <h4 className="text-lg font-semibold text-slate-300">Traditional Pricing Tools</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li><strong className="text-slate-300">Based on:</strong> Asking prices, estimates, aggregated data</li>
                  <li><strong className="text-slate-300">Problem:</strong> You never know what items ACTUALLY sell for</li>
                  <li><strong className="text-slate-300">Result:</strong> Guesswork when pricing your collection</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30">
                <h4 className="text-lg font-semibold text-white">LootScout Transaction Data</h4>
                <ul className="mt-3 space-y-2 text-sm text-primary-100">
                  <li><strong className="text-white">Based on:</strong> Real completed sales, actual offers accepted</li>
                  <li><strong className="text-white">Benefit:</strong> See what people actually paid</li>
                  <li><strong className="text-white">Result:</strong> Confidence in your pricing, potential for better offers</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10">
                <h4 className="text-sm font-semibold text-slate-300 mb-4">Actual sale price vs estimate</h4>
                <p className="text-xs text-slate-400 mb-4">Some sell for more, some for less—see real data.</p>
                <div className="space-y-3">
                  {[
                    { label: "Estimate", value: 100, isBaseline: true },
                    { label: "Sale -15%", value: 85, isHigher: false },
                    { label: "Sale +5%", value: 105, isHigher: true },
                    { label: "Sale +22%", value: 122, isHigher: true },
                    { label: "Sale -8%", value: 92, isHigher: false },
                  ].map((bar) => (
                    <div key={bar.label} className="flex items-center gap-3">
                      <span className="w-20 text-xs text-slate-400 shrink-0">{bar.label}</span>
                      <div className="flex-1 h-6 rounded bg-slate-700/60 overflow-hidden max-w-full">
                        <div
                          className={`h-full rounded ${bar.isBaseline ? "bg-primary-400" : bar.isHigher ? "bg-emerald-400" : "bg-amber-400/90"}`}
                          style={{ width: `${(bar.value / 130) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400 w-8 text-right">{bar.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Features</h2>
            <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
              Everything you need to buy and sell collectibles locally — with a native app built for collectors, shops, and in-person trades.
              Already have your collection in another tool? <strong>CSV import</strong> lets you bring it over so you don&apos;t have to start
              from scratch.
            </p>
          </FadeInSection>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInSection>
              <div className="h-full p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900">Real Transaction Pricing</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Hybrid signals: real-time TCG where wired in, broad catalog baselines (e.g. PriceCharting-scale coverage), and local
                  completed sales that sharpen estimates over time — not a single static sheet.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="h-full p-6 rounded-xl bg-white border-2 border-primary-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary-100/60">
                <h3 className="text-lg font-semibold text-slate-900">Tap to Pay — accept cards on your phone</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Take in-person contactless card payments with just your phone — <strong>no reader, no extra hardware</strong>. Powered by
                  Stripe. Other platforms hold your money and take a big cut; here you get paid <strong>directly to your own bank</strong> via
                  Stripe Connect — LootScout never holds your funds and takes only a <strong>small per-transaction platform fee</strong>.
                  Stripe&apos;s card processing fee applies on top — both seller-side, the buyer is never surcharged. You see an
                  estimate of what the card will cost you before you charge, and the real figure on the completed sale. Card payments
                  <strong> settle trades and sales instantly</strong> — no confirm dance — and refunds are handled in-app if a deal is disputed.{" "}
                  <strong>Available on Android, and as Tap to Pay on iPhone on iOS.</strong>
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/faq#tap-to-pay" className="font-medium text-primary-600 hover:text-primary-700 hover:underline">
                    How getting paid works (FAQ) →
                  </Link>
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="h-full p-6 rounded-xl bg-white border-2 border-primary-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary-100/60">
                <h3 className="text-lg font-semibold text-slate-900">In-app card scanner (TCG)</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>Single</strong> or <strong>batch</strong> scanning with the phone camera and on-device OCR. Matches land in the
                  LootScout catalog; pick alternates, open a full match list, or fall back to manual search (catalog-first while typing;
                  broader hybrid search only on explicit Search / Enter, and only if the catalog returned no rows). Batch review: condition
                  (including graded grades), variant, folder, approximate prices per row, change match from the thumbnail, remove rows, then
                  add all to collection. Scanner pauses while sheets are open; Review sits above the thumbnail strip so controls do not
                  overlap. Photo mode is one fast capture per tap, and in batch mode the camera stays live between shots so you can{" "}
                  <strong>capture and go</strong>. Matching leans on the card number as the dominant signal, keeps rank suffixes (V,
                  VMAX, ex, GX) as part of the card&apos;s identity, disambiguates sibling variants instead of guessing, and{" "}
                  <strong>excludes sealed products</strong> — a booster box returns <em>no match</em> rather than a confident wrong card.{" "}
                  <strong>Live camera scanning is free and unlimited on every plan</strong> — no separate scanner fee.
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/faq#scanner-build" className="font-medium text-primary-600 hover:text-primary-700 hover:underline">
                    Device &amp; build requirements (FAQ) →
                  </Link>
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="h-full p-6 rounded-xl bg-white border-2 border-primary-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary-100/60">
                <h3 className="text-lg font-semibold text-slate-900">Desktop Scan Station — bulk-list from a scanner</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Got a stack of cards and a flatbed scanner? Open{" "}
                  <a
                    href="https://app.lootscout.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    app.lootscout.io
                  </a>{" "}
                  on a computer and drop in your scans — fronts, or fronts and backs together. Every card is read{" "}
                  <strong>right in your browser</strong> and matched to the catalog, then a{" "}
                  <strong>review grid</strong> puts printing, condition, market price, and your price side by side.
                  Add the batch to your collection, or <strong>list it for sale in bulk</strong> under your shop profile with the
                  scans attached to each listing. Then <strong>export a ready-to-upload eBay File Exchange or TCGplayer file</strong>{" "}
                  (Shop and up) — the TCGplayer file carries <strong>real seller-portal SKUs</strong> resolved per product,
                  condition, and printing, so it lands on your existing portal rows instead of creating near-duplicates (strongest
                  coverage on Magic, Pok&eacute;mon, and Yu-Gi-Oh!). It replaces the manual bulk-listing work — no retyping a card into
                  another tool. <strong>Works on your phone too</strong>, not just a desktop. Uploaded scans count toward your
                  plan&apos;s monthly photo-upload allowance (10 a month on Free).
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/features#scan-station" className="font-medium text-primary-600 hover:text-primary-700 hover:underline">
                    How the Scan Station works →
                  </Link>
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="h-full p-6 rounded-xl bg-white border-2 border-primary-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary-100/60">
                <h3 className="text-lg font-semibold text-slate-900">Events — local shows &amp; meetups</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Local card shows and collector meetups live on the <strong>Events tab</strong> — discover what&apos;s
                  happening near you and see who&apos;s attending before you go. <strong>Vendors can claim a booth</strong>{" "}
                  on an event so buyers browsing the show see their listed inventory and can find them in person. Events
                  are how LootScout turns online listings into real local trades.
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/features#shops" className="font-medium text-primary-600 hover:text-primary-700 hover:underline">
                    How events work →
                  </Link>
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="h-full p-6 rounded-xl bg-white border-2 border-primary-200 shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary-100/60">
                <h3 className="text-lg font-semibold text-slate-900">Share your shop link anywhere</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Your shop page is <strong>public</strong>. Send the link to anyone — a bio, a group chat, a show flyer, a Facebook
                  post — and they can browse your whole inventory <strong>without making an account</strong>. No signup wall between a
                  customer and your cards. Signing in is only needed to actually do something: message you, start a pickup cart, or
                  follow the shop. Tap <strong>Share</strong> on your shop page to send it, or print your shop as a{" "}
                  <strong>QR sign</strong> for your table — any phone camera opens it.
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/features#public-shop" className="font-medium text-primary-600 hover:text-primary-700 hover:underline">
                    How public shop pages work →
                  </Link>
                </p>
              </div>
            </FadeInSection>
            {[
              {
                title: "Collection Tracker",
                desc: "Add items from the scanner, product pages, or search / image lookup where supported — or bulk-import a CSV so you pick up where you left off on another platform. Every item shows live market prices (sealed product included) and trend sparklines, plus purchase vs market value and gain/loss so you always know what your collection is worth. Own several copies? Edit each one's condition and purchase price on its own line.",
              },
              {
                title: "List for Sale — Set & Forget",
                desc: "List from your collection with one tap. Fixed price or open to offers. Turn on auto market-pricing and your listing re-prices itself as the market moves, until you set a price yourself.",
              },
              {
                title: "Digital Trades",
                desc: "Build a trade in person: pick what you give and what you get, both sides confirm, and the items transfer automatically between your two collections — no counting cards or doing the math by hand. Add a whole collection folder to your side in one go, and collapse either side down to its item count and running total so a twenty-card offer doesn't bury the controls. Scan cards straight into a trade or trade-in draft with your phone camera. Owe cash on a trade? Settle the difference with Tap to Pay on the spot and the deal closes instantly.",
              },
              {
                title: "Local Discovery & Map",
                desc: "Buyers near you find your listing. Browse nearby listings on an interactive map or filter the marketplace by distance to see what's for sale in your area, then meet up in person — no shipping a $5 card across the country.",
              },
              {
                title: "Reviews & Ratings",
                desc: "Build a reputation. After a confirmed sale or trade, both sides can leave a 1-5 star review. Ratings show on public profiles and shop pages, so you know who you're dealing with before you meet up.",
              },
              {
                title: "Follow Collectors",
                desc: "Search for other collectors and shops by name and follow the ones you want to keep up with — so you spot their new listings and can build your local trading network.",
              },
              {
                title: "Disputes & Refunds",
                desc: "If a deal goes sideways, open a dispute right in the app. Both parties exchange messages, and unresolved cases escalate to LootScout for moderator mediation. Card payments can be refunded in-app.",
              },
              {
                title: "Safety & Moderation",
                desc: "Your username is your public identity — the first and last name you sign up with is never shown to anyone. Slurs are rejected in usernames and messages, checked on the server and normalized first so lookalike characters don't sneak through. Report any user, listing, or message, and block anyone to instantly clear their listings and messages from your view. Moderators triage reports within 24 hours, and suspended accounts drop out of public search.",
              },
              {
                title: "AI Market Intelligence",
                desc: "Price trend predictions, optimal sell timing alerts, and portfolio analytics powered by real market data — including a portfolio value-over-time chart that tracks your collection's worth day by day, so you see your gains build, not just today's number.",
              },
              {
                title: "Push Notifications",
                desc: "Alerts for nearby listings, price changes, trade updates, and wishlist matches — add cards to your wishlist and get pinged the moment one is listed near you, so you never miss a deal in your area.",
              },
              {
                title: "CSV Import",
                desc: "You don't have to start your collection over. Import a spreadsheet from another app — automatic catalog matching pulls rows into LootScout, priced against real data, so you can track and list without retyping every card.",
              },
              {
                title: "Kiosk & Pickup",
                desc: "Turn a shop tablet or phone into a self-serve kiosk: customers scan a listing's QR code to add it to a pickup cart, then request pickup when they're ready. Buyers browsing your shop page from anywhere can do the same. Every request lands in your dashboard queue and opens as a fully prefilled POS sale — edit the items, apply a discount, take cash or card — then hit Notify buyer and they get a push the moment the order is ready.",
              },
              {
                title: "Inventory SKUs & QR Labels",
                desc: "Listings number themselves. Each one gets a sequential SKU built from its collection folder — a card filed under Pokemon Binder 3 lists as pokemon_binder_3-014, the next one -015 — visible only to you, on the listing, in shop inventory, and in your exports (it's the CustomLabel in the eBay file). Print matching QR labels: a 30-per-page sheet to cut by hand, or one-per-page presets sized for 2.25×1.25in, 1.5×1in, or 1×1in thermal labels — saved as a PDF or exported as images. The QR is an ordinary web link, so any phone camera can scan it, app or no app.",
              },
              {
                title: "Runs in Your Browser",
                desc: "The full app lives at app.lootscout.io — not a cut-down preview. Sign up, finish your profile, search, build your collection, list, trade, run pickup orders, subscribe, and manage billing all work on a desktop. Camera scanning is the one thing that stays on the phone; on a computer the Scan Station takes its place. Not signed up yet? Browse as a guest — search, listings, the map, and events, no account needed.",
              },
              {
                title: "Shop Tools",
                desc: "In-person POS checkout with Tap to Pay (accept cards on your phone, no reader), walk-in trade-ins any shop can run — search the full catalog for what a customer brings, any grading company including ACE and TAG plus half grades, set per-item agreed prices, and take card for any remainder on the spot while items auto-file into collection folders. Plus a trade-in credit calculator with a buy rate you set (e.g. 80%; saving a custom default rate is an Enterprise feature for shops with 100+ listings), kiosk mode with QR codes for in-store pickup browsing, a shop-scoped pickup cart, and sales analytics (including card-show profit tracking with vendor show mode on Shop and up).",
              },
              {
                title: "Vendor Show Mode",
                desc: "Working a card show? Start show mode from your shop dashboard or the event page, set an optional spending budget, and every sale, trade-in, and trade you make is filed under the show automatically — with a warning before a buy takes you over budget. End the show for the summary: cash vs card sales, spend vs budget, the cash that should be in your box, and what went out and came in. Shop plan and above.",
              },
              {
                title: "Grading Cert Verification",
                desc: "Store PSA, BGS, CGC, SGC cert numbers. One-tap verification links to grading company lookup pages.",
              },
            ].map((feature) => (
              <FadeInSection key={feature.title}>
                <div className="h-full p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* See LootScout in action */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">See LootScout in action</h2>
            <p className="mt-4 text-slate-400 text-center max-w-2xl mx-auto">
              Short clips straight from the app — scanning cards into your collection, finding vendors at a live event,
              and more.
            </p>
          </FadeInSection>
          <FadeInSection className="mt-10">
            <MarketingVideoGallery />
          </FadeInSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-center gap-3 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Coming Soon</h2>
              <span className="self-center sm:self-auto inline-flex items-center rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                On the roadmap
              </span>
            </div>
            <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
              We ship fast — here is what we are building next.
            </p>
          </FadeInSection>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(
              [
                {
                  icon: "loyalty" as const,
                  title: "Shop loyalty points",
                  desc: "Reward repeat buyers at participating shops with points and perks",
                },
                {
                  icon: "sportstack" as const,
                  title: "Expanded sports card support",
                  desc: "Deeper catalogs, pricing sources, and tooling for baseball, basketball, football, and beyond",
                },
                {
                  icon: "sparkles" as const,
                  title: "UI improvements",
                  desc: "Clearer flows, faster screens, and polish across collection, scanner, and marketplace",
                },
              ] as const
            ).map((item) => (
              <FadeInSection key={item.title}>
                <div className="relative h-full rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5 shadow-sm">
                  <span className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-600 ring-1 ring-primary-200">
                    Soon
                  </span>
                  <ComingSoonIcon name={item.icon} />
                  <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
              Whether you&apos;re a casual collector or running a shop, LootScout has a plan for you.
            </p>
          </FadeInSection>

          {/* Intro offer banner */}
          <FadeInSection>
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shadow-lg animate-fade-in">
              <span className="text-2xl sm:text-3xl" aria-hidden>
                🎉
              </span>
              <div className="text-center sm:text-left">
                <p className="font-semibold">
                  New accounts get Enterprise free for their first 30 days.
                </p>
                <p className="text-sm text-primary-100">
                  Every plan gets the full app — paid plans raise the monthly limits, and the Shop plans add the shop tools.
                </p>
              </div>
            </div>
          </FadeInSection>

          {[
            { group: "personal" as const, heading: "Personal Plans" },
            { group: "shop" as const, heading: "Shop Plans" },
          ].map(({ group, heading }) => (
            <FadeInSection key={group}>
              <h3 className="mt-14 sm:mt-16 text-2xl font-semibold text-slate-900">{heading}</h3>
              <div className="mt-8 grid gap-6 lg:gap-8 md:grid-cols-2">
                {PLANS.filter((plan) => plan.group === group).map((plan) => (
                  <div
                    key={plan.id}
                    className={[
                      "relative flex flex-col rounded-2xl shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1",
                      plan.highlight ? "border-2 border-primary-500 bg-primary-50/80" : "border border-slate-200 bg-white",
                    ].join(" ")}
                  >
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <h4 className="text-lg font-semibold text-slate-900">
                        {plan.id === "free" ? "Free" : `LootScout ${plan.name}`}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${plan.paidTier ? "text-primary-600" : "text-slate-900"}`}>
                          {plan.price}
                        </span>
                        <span className="text-sm text-slate-700">/month</span>
                      </div>
                      <ul className="mt-6 space-y-2 text-sm text-slate-700">
                        {COMPARISON_ROWS.filter((row) => row.values[plan.id] !== "—").map((row) => (
                          <li key={row.label} className="flex gap-2">
                            <span className="mt-0.5 text-emerald-500" aria-hidden>
                              ✓
                            </span>
                            <span>
                              {row.label}: <strong className="font-semibold">{row.values[plan.id]}</strong>
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/pricing"
                        className={`mt-6 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors ${
                          plan.highlight ? "bg-primary-600 hover:bg-primary-700" : "bg-slate-900 hover:bg-slate-800"
                        }`}
                      >
                        {plan.paidTier ? `Get ${plan.name}` : "Get Started"}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          ))}

          <p className="mt-8 text-center text-sm text-slate-500">{PLAN_CHANGE_NOTE}</p>

          {/* FAQ */}
          <FadeInSection>
            <div id="faq" className="scroll-mt-24">
              <h3 className="mt-16 text-2xl font-semibold text-slate-900">FAQ</h3>
              <p className="mt-2 text-sm text-slate-600">
                Short answers below — full detail on the{" "}
                <Link href="/faq" className="font-medium text-primary-600 hover:underline">
                  FAQ page
                </Link>
                .
              </p>
              <div className="mt-6 grid gap-8 lg:grid-cols-3 text-sm text-slate-700">
                <div className="space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pricing</h4>
                  <div>
                    <h4 className="font-semibold text-slate-900">What&apos;s the difference between plans?</h4>
                    <p className="mt-1">
                      Every plan gets the full app. Paid plans raise the monthly limits (listings, trades, photo-upload scans, CSV imports and
                      exports) and add AI price insights; the Shop plans add in-person POS sales, vendor show mode and shop exports.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Can I switch plans anytime?</h4>
                    <p className="mt-1">
                      Yes. Upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate the difference.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">What payment methods do you accept?</h4>
                    <p className="mt-1">
                      On Android and the web, subscriptions are paid with any major credit or debit card through Stripe. On iPhone and iPad, subscriptions are billed through your Apple account as an in-app purchase.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">What happens when I hit my listing limit?</h4>
                    <p className="mt-1">
                      You can still browse and buy, but you&apos;ll need to upgrade or remove old listings to create new ones. We&apos;ll notify you
                      before you hit your limit.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Can I try before I buy?</h4>
                    <p className="mt-1">
                      Start with our Free plan to explore LootScout. When you&apos;re ready for more listings and features, upgrade with one click.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Will prices or plans change?</h4>
                    <p className="mt-1">
                      They may. Plan prices, limits and features can change over time; we&apos;ll give notice before a change affects your
                      subscription.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 lg:col-span-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Scanner &amp; search (app)</h4>
                  <div>
                    <h4 className="font-semibold text-slate-900">Do I need a special app build to scan?</h4>
                    <p className="mt-1">
                      Yes — you need a native iOS/Android build that bundles camera + on-device OCR (not Expo Go or a generic web-only build).{" "}
                      <Link href="/faq#scanner-build" className="text-primary-600 font-medium hover:underline">
                        Details →
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Can I scan on a computer?</h4>
                    <p className="mt-1">
                      Yes — the Desktop Scan Station at app.lootscout.io reads desktop-scanner images in your browser. Camera scanning
                      stays in the mobile app.{" "}
                      <Link href="/faq#scanner-web" className="text-primary-600 font-medium hover:underline">
                        Details →
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Does manual search hit external APIs while I type?</h4>
                    <p className="mt-1">
                      No. Catalog-first suggestions while typing; broader hybrid / API search only after you tap Search or press Enter, and only if
                      the catalog returned no rows.{" "}
                      <Link href="/faq#search-api" className="text-primary-600 font-medium hover:underline">
                        Details →
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Is the card scanner free?</h4>
                    <p className="mt-1">
                      Yes — single and batch scanning with the live camera are free and unlimited on every plan; there is no separate
                      scanner subscription. Uploaded images (including the Desktop Scan Station) use a monthly allowance that depends on your plan.{" "}
                      <Link href="/faq#scanner-free" className="text-primary-600 font-medium hover:underline">
                        Details →
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stripe-required: Customer Service */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Customer Service</h2>
            <p className="mt-4 text-slate-600 max-w-2xl">
              We're here to help. Reach out anytime.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li><strong>Email:</strong> <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a></li>
              <li><strong>Address:</strong> Raleigh, NC</li>
              <li><strong>Response time:</strong> Within 24 hours</li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Refund Policy</h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              LootScout is a marketplace platform connecting buyers and sellers. We do not process transactions directly — all sales occur between users. As such:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 max-w-3xl">
              <li><strong>Subscription refunds:</strong> Subscriptions can be canceled anytime. No refunds for partial months. Subscriptions bought on iPhone or iPad are billed and refunded by Apple.</li>
              <li><strong>Transaction disputes:</strong> Resolve directly with the seller. LootScout can facilitate communication.</li>
              <li><strong>Subscription cancellation:</strong> Cancel anytime from your account settings. Access continues until period end.</li>
            </ul>
            <p className="mt-6">
              <Link href="/refund" className="text-primary-600 font-medium hover:underline">Full Refund Policy →</Link>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Return Policy */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Return Policy</h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              LootScout does not handle physical goods directly. Return policies are set by individual sellers. Buyers should:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 max-w-3xl">
              <li>Inspect items in person when possible</li>
              <li>Communicate with sellers about return options before purchase</li>
              <li>Report issues to <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a> if disputes cannot be resolved</li>
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Cancellation Policy</h2>
            <div className="mt-4 space-y-6 text-slate-700 max-w-3xl">
              <div>
                <h3 className="font-semibold text-slate-900">Subscriptions</h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Cancel anytime from account settings or billing portal</li>
                  <li>No cancellation fees</li>
                  <li>Access continues until end of billing period</li>
                  <li>No refunds for partial periods</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Listings</h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Sellers can delete listings anytime</li>
                  <li>Buyers can cancel messages/negotiations anytime</li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </>
  );
}


