import Link from "next/link";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";
import GalleryCarousel from "./components/GalleryCarousel";
import BetaEmailSignup from "./components/BetaEmailSignup";
import ComingSoonIcon from "./components/ComingSoonIcon";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Connect with Local Collectors & Shops
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-xl">
                The collectibles marketplace powered by real transaction data. Track your collection, price with
                confidence, and trade locally.
              </p>
              <p className="mt-3 text-sm text-primary-200/90 max-w-xl">
                Built for the Raleigh–Durham, NC area — hybrid pricing (live TCG + catalog baselines + local sales over
                time) and in-person meetups.{" "}
                <Link href="/features" className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  Features &amp; guides →
                </Link>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                  aria-label="Download Beta for Android"
                >
                  <span className="text-2xl" aria-hidden>
                    ▶
                  </span>
                  Download Beta (Android)
                </a>
                <a
                  href="#beta"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800/80 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-primary-800 transition-colors"
                  aria-label="Join the Beta"
                >
                  <span className="text-2xl" aria-hidden>
                    📱
                  </span>
                  Join the Beta
                </a>
              </div>
              <div id="download" className="scroll-mt-24 mt-6 space-y-4">
                <p className="text-sm text-primary-200">Now in beta — Android APK available. iOS coming soon.</p>
                <p className="text-base text-primary-100 max-w-xl">
                  Contact{" "}
                  <a
                    href="mailto:support@lootscout.io"
                    className="font-semibold text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
                  >
                    support@lootscout.io
                  </a>{" "}
                  to join the beta, or enter your email below.
                </p>
                <BetaEmailSignup />
              </div>
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
                  Discover listings near you in the Triangle. Home search stays <strong>catalog-first while you type</strong> for speed; a{" "}
                  <strong>full hybrid search</strong> runs when you submit for deeper product discovery. Message sellers and meet in person — cards, games, comics, and more.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Sellers</h3>
                <p className="mt-2 text-slate-600">
                  <strong>Collection-first:</strong> track what you own, then list in one tap. Add cards with the <strong>in-app scanner</strong> (single or batch) or search — pricing blends live TCG data, catalog baselines, and local transaction signals over time. Offer discovery helps you learn what the market will pay.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Shops</h3>
                <p className="mt-2 text-slate-600">
                  QR-forward kiosk flows, shop-scoped pickup cart, POS checkout, and trade-in tools — same hybrid pricing philosophy, tuned for the sales floor. Staff-friendly builds add inventory and analytics where enabled.
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
                  Every completed transaction on LootScout—whether it matches, exceeds, or comes in below the estimate—gets recorded. Our algorithm tracks what people actually pay, not just what sellers ask for.
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
              Everything you need to buy and sell collectibles locally — with a native app built for binders, shops, and in-person trades.
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
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">In the app (beta)</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">In-app card scanner (TCG)</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  <strong>Single</strong> or <strong>batch</strong> scanning with the phone camera and on-device OCR. Matches land in the
                  LootScout catalog; pick alternates, open a full match list, or fall back to manual search (catalog-first while typing;
                  broader hybrid search only on explicit Search / Enter, and only if the catalog returned no rows). Batch review: condition
                  (including graded grades), variant, folder, approximate prices per row, change match from the thumbnail, remove rows, then
                  add all to collection. Scanner pauses while sheets are open; Review sits above the thumbnail strip so controls do not
                  overlap. <strong>Free for every account</strong> — no separate scanner fee.
                </p>
                <p className="mt-3 text-sm">
                  <Link href="/faq#scanner-build" className="font-medium text-primary-600 hover:text-primary-700 hover:underline">
                    Device &amp; build requirements (FAQ) →
                  </Link>
                </p>
              </div>
            </FadeInSection>
            {[
              {
                title: "Collection Tracker",
                desc: "Add items from the scanner, product pages, or search / image lookup where supported. Safe-area and scroll fixes keep primary actions clear of the home indicator. Track conditions, purchase vs market value, and gain/loss per item.",
              },
              {
                title: "Smart Marketplace",
                desc: "List from your collection with one tap. Fixed price or open to offers. Auto-reprice when market moves.",
              },
              {
                title: "In-Person Trade System",
                desc: "Cart-based trades with dual confirmation. Items transfer between collections when both sides agree.",
              },
              {
                title: "AI Market Intelligence",
                desc: "Price trend predictions, optimal sell timing alerts, and portfolio analytics powered by real market data (where enabled in your build).",
              },
              {
                title: "CSV Import",
                desc: "Import collections from TCGPlayer, Collectr, Deckbox, or PriceCharting. Automatic product matching.",
              },
              {
                title: "Shop Tools",
                desc: "POS checkout, trade-in calculator with custom buy percentages, kiosk mode with QR codes for in-store pickup browsing, and a shop-scoped pickup cart.",
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

          <FadeInSection>
            <div
              id="scanner"
              className="mt-16 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">Scan your binder</h3>
              <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
                Built for collectors who want to log a box or a binder without retyping names. Shop staff can use the same flow for intake
                during buylist or trade events. Scanning requires a <strong>native build</strong> with camera + OCR — not the marketing site
                in a browser.{" "}
                <Link href="/faq#scanner-web" className="font-medium text-primary-600 hover:underline">
                  Website vs app (FAQ) →
                </Link>
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col aspect-[4/3] rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 items-center justify-center p-4 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Placeholder</span>
                  <p className="mt-2 text-sm font-medium text-slate-700">Beta UI — batch review</p>
                  <p className="mt-1 text-xs text-slate-500">Replace with product screenshot when approved.</p>
                </div>
                <div className="flex flex-col aspect-[4/3] rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 items-center justify-center p-4 text-center">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Placeholder</span>
                  <p className="mt-2 text-sm font-medium text-slate-700">Beta UI — single match sheet</p>
                  <p className="mt-1 text-xs text-slate-500">Replace with product screenshot when approved.</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Full walkthrough:{" "}
                <Link href="/features#scanner" className="text-primary-600 font-medium hover:underline">
                  Features &amp; guides — Card scanner
                </Link>
                .
              </p>
            </div>
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
                  icon: "map" as const,
                  title: "Map View",
                  desc: "Browse local listings on an interactive map",
                },
                {
                  icon: "bell" as const,
                  title: "Push Notifications",
                  desc: "Price drop alerts, trade updates, and wishlist matches",
                },
                {
                  icon: "sports" as const,
                  title: "Sports Card Pricing",
                  desc: "Expanded sports card pricing and catalog coverage (roadmap)",
                },
                {
                  icon: "barcode" as const,
                  title: "Barcode Scanning",
                  desc: "Scan sealed products and graded slabs for instant lookup",
                },
                {
                  icon: "analytics" as const,
                  title: "Show Analytics",
                  desc: "Track profit by card show. Know which events make you money.",
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

          {/* Beta launch banner */}
          <FadeInSection>
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shadow-lg animate-fade-in">
              <span className="text-2xl sm:text-3xl" aria-hidden>
                🎉
              </span>
              <div className="text-center sm:text-left">
                <p className="font-semibold">
                  Beta Launch Pricing - Lock in these rates forever!
                </p>
                <p className="text-sm text-primary-100">
                  Limited-time pricing while we&apos;re in beta. Keep your rate as long as you stay subscribed.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div
              id="beta"
              className="mt-4 rounded-xl bg-slate-900 text-white px-6 py-4 text-center scroll-mt-24"
            >
              <p className="font-semibold text-lg">Join the LootScout beta</p>
              <p className="text-sm text-slate-300 mt-1">
                Request access with your email above, or write{" "}
                <a href="mailto:support@lootscout.io" className="text-white font-medium underline underline-offset-2 hover:text-primary-200">
                  support@lootscout.io
                </a>
                . In the app, use code <span className="font-mono font-semibold text-white">BETAPIONEER</span> for a free{" "}
                <strong className="text-white">7-day</strong> trial of <strong className="text-white">Pro Shop</strong> features (enter the
                code where the app prompts; subject to availability and account eligibility).
              </p>
            </div>
          </FadeInSection>

          {/* Individual Plans */}
          <FadeInSection>
            <h3 className="mt-14 sm:mt-16 text-2xl font-semibold text-slate-900">
              Individual Plans
            </h3>
            <div className="mt-8 grid gap-6 lg:gap-8 md:grid-cols-3">
              {/* Free */}
              <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-900">Free</h4>
                  <p className="mt-1 text-sm text-slate-500">Perfect for getting started</p>
                  <div className="mt-4">
                    <span className="block text-4xl font-bold text-slate-900">$0</span>
                    <span className="text-sm text-slate-600">/month</span>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {[
                      "Browse marketplace",
                      "Message buyers and sellers",
                      "Up to 10 active listings",
                      "In-app card scanner (single & batch) — included for every account",
                      "Basic pricing data",
                      "Collection tracking",
                      "Accept offers on your listings",
                    ].map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-0.5 text-emerald-500" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Plus - Most Popular */}
              <div className="relative flex flex-col rounded-2xl border-2 border-primary-500 bg-primary-50/80 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1">
                <div className="absolute -top-3 right-4 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  Most Popular
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-900">LootScout Plus</h4>
                  <p className="mt-1 text-sm text-slate-600">For active collectors</p>
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="text-gray-400 line-through text-sm">$9.99</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary-600">$4.99</span>
                      <span className="text-sm text-slate-700">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-800">
                    {[
                      "Everything in Free, plus:",
                      "Up to 25 active listings",
                      "CSV collection import",
                      "Price alerts",
                      "Full transaction analytics",
                      "Priority support",
                      "Early access to new features",
                    ].map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-0.5 text-emerald-500" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors">
                    Start Plus
                  </button>
                </div>
              </div>

              {/* Pro */}
              <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-900">LootScout Pro</h4>
                  <p className="mt-1 text-sm text-slate-500">For serious collectors and traders</p>
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="text-gray-400 line-through text-sm">$19.99</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary-600">$14.99</span>
                      <span className="text-sm text-slate-700">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {[
                      "Everything in Plus, plus:",
                      "Up to 50 active listings",
                      "Bulk listing tools",
                      "Advanced analytics dashboard",
                      "Featured listings (boost visibility)",
                      "Collection portfolio tracking",
                    ].map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-0.5 text-emerald-500" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                    Start Pro
                  </button>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Shop Plans */}
          <FadeInSection>
            <h3 className="mt-16 text-2xl font-semibold text-slate-900">
              Shop Plans
            </h3>
            <div className="mt-8 grid gap-6 lg:gap-8 md:grid-cols-2">
              {/* Pro Shop */}
              <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-900">LootScout Pro Shop</h4>
                  <p className="mt-1 text-sm text-slate-500">For card vendors and small businesses</p>
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="text-gray-400 line-through text-sm">$44.99</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary-600">$29</span>
                      <span className="text-sm text-slate-700">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {[
                      "Everything in Pro, plus:",
                      "Unlimited listings",
                      "Shop profile with custom branding",
                      "POS checkout & trade-in tools",
                      "Kiosk mode for in-store displays",
                      "Up to 3 staff accounts",
                      "Inventory management",
                      "Sales analytics dashboard",
                      "Shop verification badge",
                    ].map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-0.5 text-emerald-500" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors">
                    Start Pro Shop
                  </button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-900">LootScout Enterprise</h4>
                  <p className="mt-1 text-sm text-slate-500">For established collectible shops and chains</p>
                  <p className="mt-2 text-xs text-amber-900 bg-amber-50 border border-amber-200/80 rounded-lg px-2.5 py-1.5 leading-snug">
                    Roadmap: some capabilities below are rolling out over time; availability may vary during beta.
                  </p>
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="text-gray-400 line-through text-sm">$149.99</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary-600">$99</span>
                      <span className="text-sm text-slate-700">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {[
                      "Everything in Pro Shop, plus:",
                      "Unlimited staff accounts",
                      "Multi-location support",
                      "API access",
                      "Customer rewards program",
                      "Priority support",
                      "Custom integrations",
                    ].map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-0.5 text-emerald-500" aria-hidden>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </FadeInSection>

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
                    <h4 className="font-semibold text-slate-900">Why the discount?</h4>
                    <p className="mt-1">
                      We&apos;re in beta! Help us build the best collectibles marketplace and lock in this pricing forever—even after we raise
                      prices for new users.
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
                      We accept all major credit cards and debit cards via Stripe. Payments are secure and simple.
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
                    <h4 className="font-semibold text-slate-900">Is this really beta pricing forever?</h4>
                    <p className="mt-1">
                      Yes. If you subscribe during beta, you keep this price as long as you stay subscribed. When we launch publicly, new users will
                      pay the higher prices.
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
                    <h4 className="font-semibold text-slate-900">Does scanning work on the website?</h4>
                    <p className="mt-1">
                      No. This site is for marketing and support; scanning and batch review run in the mobile app.{" "}
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
                      Yes — single and batch scanning are included for every account during beta; there is no separate scanner subscription.{" "}
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
              <li><strong>Subscription refunds:</strong> Stripe subscriptions can be canceled anytime. No refunds for partial months.</li>
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
