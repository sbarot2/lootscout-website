import Link from "next/link";

export const metadata = {
  title: "Terms of Service - LootScout",
  description: "LootScout terms of service. Rules and policies for using the marketplace.",
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-slate-600">Last updated: March 2025</p>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Acceptance</h2>
            <p className="mt-2">
              By accessing or using LootScout ("Platform"), you agree to these Terms of Service. If you do not agree, do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Description of Service</h2>
            <p className="mt-2">
              LootScout is a marketplace platform that connects buyers and sellers of collectibles (trading cards, comics, vinyl, and related items). We provide the technology and venue for listings, messaging, and discovery. We do not take ownership of items, guarantee transactions, or act as a party to any sale between users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. User Responsibilities</h2>
            <p className="mt-2">
              Users are responsible for:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>The accuracy of listings and communications</li>
              <li>Their own transactions, including payment and delivery arrangements</li>
              <li>Compliance with applicable laws (e.g., taxes, prohibited items)</li>
              <li>Maintaining the security of their account credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Age Requirement</h2>
            <p className="mt-2">
              You must be at least 18 years old to use LootScout. By using the Platform, you represent that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Prohibited Items & Conduct</h2>
            <p className="mt-2">
              You may not list, sell, or promote:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Counterfeit or replica items presented as authentic</li>
              <li>Illegal goods or items that violate any law</li>
              <li>Stolen property</li>
              <li>Items that infringe intellectual property rights</li>
            </ul>
            <p className="mt-2">
              You may not harass other users, spam, manipulate search or rankings, or use the Platform for fraud. We may suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Subscriptions & Payments</h2>
            <p className="mt-2">
              Paid subscriptions (Plus, Pro, Pro Shop, Enterprise) are billed via Stripe. By subscribing, you agree to Stripe's terms and our subscription and cancellation policies. Subscription fees are non-refundable for partial periods unless otherwise required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Dispute Resolution</h2>
            <p className="mt-2">
              Disputes between buyers and sellers should be resolved directly between the parties. LootScout may facilitate communication but is not obligated to resolve disputes or provide refunds for user-to-user transactions. For subscription or account disputes, contact <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, LootScout and its operators are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform or any transactions between users. Our total liability shall not exceed the amount you paid us in the twelve (12) months preceding the claim. We do not guarantee the quality, legality, or accuracy of user content or transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Changes</h2>
            <p className="mt-2">
              We may update these Terms from time to time. We will post the updated Terms on this page and update the "Last updated" date. Continued use after changes constitutes acceptance. Material changes may be communicated via email or in-app notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Contact</h2>
            <p className="mt-2">
              Questions about these Terms: <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a>. Raleigh, NC. We aim to respond within 24 hours.
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
