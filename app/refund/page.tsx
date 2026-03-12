import Link from "next/link";

export const metadata = {
  title: "Refund Policy - LootScout",
  description: "LootScout refund and cancellation policy for subscriptions and marketplace transactions.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link href="/" className="text-primary-600 font-semibold hover:underline">
            ← Back to LootScout
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Refund Policy</h1>
        <p className="mt-2 text-slate-600">Last updated: March 2025</p>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-2">
              LootScout is a marketplace platform connecting buyers and sellers. We do not process transactions directly — all sales occur between users. This policy covers subscription refunds and how we handle transaction-related issues.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Subscription Refunds</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Stripe subscriptions (Plus, Pro, Pro Shop, Enterprise) can be canceled anytime from your account settings or via the billing portal.</li>
              <li>No refunds for partial months. If you cancel mid-cycle, you retain access until the end of the current billing period.</li>
              <li>We do not provide prorated refunds for unused time in a billing period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Transaction Disputes</h2>
            <p className="mt-2">
              Because sales happen directly between users, refunds for items must be resolved with the seller. LootScout can facilitate communication and, where appropriate, provide account history to support resolution. We do not hold or release funds between users; any payment arrangements are between buyer and seller.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Subscription Cancellation</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Cancel anytime from account settings or the billing portal (link available in account or via support).</li>
              <li>No cancellation fees.</li>
              <li>Access continues until the end of the current billing period.</li>
              <li>No refunds for partial periods.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              For refund or billing questions: <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a>. We respond within 24 hours.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-primary-600 font-medium hover:underline">← Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
