import Link from "next/link";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection";

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
                Buy and sell trading cards, comics, vinyl, and more in your area.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                  aria-label="Download on App Store (coming soon)"
                >
                  <span className="text-2xl" aria-hidden>📱</span>
                  Download on App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800/80 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-primary-800 transition-colors"
                  aria-label="Get it on Google Play (coming soon)"
                >
                  <span className="text-2xl" aria-hidden>▶</span>
                  Get it on Google Play
                </a>
              </div>
              <p className="mt-4 text-sm text-primary-200">App Store & Google Play — coming soon</p>
            </FadeInSection>
            <FadeInSection className="lg:pl-8">
              <div className="aspect-square max-w-md mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <svg
                  className="w-3/4 h-3/4 text-white/90"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect x="40" y="50" width="50" height="70" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
                  <rect x="110" y="50" width="50" height="70" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M65 90h30M65 110h20M125 90h30M125 110h20" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="140" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M95 140l5 5 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                  Browse local listings, message sellers, and meet in person. Find trading cards, comics, vinyl, and more near you.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Sellers</h3>
                <p className="mt-2 text-slate-600">
                  List items quickly, reach local collectors, and sell with confidence. Real-time market pricing helps you price fairly.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="p-6 rounded-xl bg-primary-50 border border-primary-100">
                <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">For Shops</h3>
                <p className="mt-2 text-slate-600">
                  Manage inventory, connect with customers, and grow your business. Shop profiles and kiosk mode for in-store use.
                </p>
              </div>
            </FadeInSection>
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
                  We pull pricing from trusted sources like PriceCharting to establish baseline values for cards, games, and collectibles.
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
              Everything you need to buy and sell collectibles locally.
            </p>
          </FadeInSection>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Real-time market pricing",
              "In-app messaging",
              "Location-based search",
              "Secure transactions",
              "Shop profiles & kiosk mode",
            ].map((feature, i) => (
              <FadeInSection key={feature}>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">{i + 1}</span>
                  <span className="font-medium text-slate-800">{feature}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Simple Pricing</h2>
            <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
              Start free. Upgrade when you need more listings or shop tools.
            </p>
          </FadeInSection>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { name: "Free", price: "$0", listings: "5 listings", highlight: false },
              { name: "Plus", price: "$4.99/mo", listings: "25 listings", highlight: true },
              { name: "Pro", price: "$9.99/mo", listings: "Unlimited", highlight: false },
              { name: "Pro Shop", price: "$29/mo", listings: "For shops", highlight: false },
              { name: "Enterprise", price: "$99/mo", listings: "Premium shops", highlight: false },
            ].map((tier) => (
              <FadeInSection key={tier.name}>
                <div
                  className={`p-6 rounded-xl border-2 ${
                    tier.highlight ? "border-primary-500 bg-primary-50" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <h3 className="font-semibold text-slate-900">{tier.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-1 text-sm text-slate-600">{tier.listings}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
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
