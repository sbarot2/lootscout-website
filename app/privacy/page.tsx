import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - LootScout",
  description: "LootScout privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-slate-600">Last updated: March 2025</p>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Data We Collect</h2>
            <p className="mt-2">
              We collect information necessary to operate the marketplace and provide our services:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li><strong>Account data:</strong> Email address, display name, and password (hashed)</li>
              <li><strong>Location data:</strong> Approximate or precise location (with your permission) to show local listings and distance</li>
              <li><strong>Listings:</strong> Item details, photos, prices, and condition you provide when listing items</li>
              <li><strong>Usage data:</strong> How you use the app (e.g., searches, views) to improve the product and analytics</li>
              <li><strong>Payment data:</strong> Processed by Stripe; we do not store full card numbers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Data</h2>
            <p className="mt-2">
              We use your data to:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Provide and operate the marketplace (listings, messaging, search)</li>
              <li>Process subscriptions and payments via Stripe</li>
              <li>Send transactional emails (e.g., password reset, order-related)</li>
              <li>Improve our services, fix bugs, and analyze usage</li>
              <li>Comply with legal obligations and enforce our Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Data Sharing</h2>
            <p className="mt-2">
              We do not sell your personal data. We share data only as necessary to run the service:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li><strong>Stripe:</strong> Payment processing and subscription management</li>
              <li><strong>Hosting & infrastructure:</strong> To run the app (e.g., Vercel, Supabase)</li>
              <li><strong>Other users:</strong> Your public profile and listings are visible to other users as intended by the marketplace</li>
              <li><strong>Legal:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Your Rights</h2>
            <p className="mt-2">
              You have the right to:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Update or correct your data in account settings</li>
              <li><strong>Deletion:</strong> Request account and data deletion (subject to legal retention)</li>
              <li><strong>Export:</strong> Request an export of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing emails; transactional emails may still be sent</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Security</h2>
            <p className="mt-2">
              We use industry-standard measures to protect your data, including encryption in transit and at rest, secure authentication, and access controls. No method of transmission over the internet is 100% secure; we strive to protect your data but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Changes</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. We will post the updated policy on this page and update the "Last updated" date. Continued use of the service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Contact</h2>
            <p className="mt-2">
              For privacy-related questions or requests: <a href="mailto:support@lootscout.io" className="text-primary-600 hover:underline">support@lootscout.io</a>. We respond within 24 hours.
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
