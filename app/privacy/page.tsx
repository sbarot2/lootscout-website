import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — LootScout",
  description:
    "LootScout privacy policy. What data we collect, how it's used, who we share it with, and your rights.",
};

// TODO: Replace "LootScout" with the registered LLC name (e.g. "LootScout LLC")
// once the NC Articles are stamped and the company has a final legal name.
const COMPANY_LEGAL_NAME = "LootScout LLC";
const COMPANY_MAILING_ADDRESS = "4030 Wake Forest Road STE 349, Raleigh, WAKE COUNTY, NC 27609 USA";
const SUPPORT_EMAIL = "support@lootscout.io";
const LAST_UPDATED = "May 6, 2026";
const EFFECTIVE_DATE = "May 6, 2026";

export default function PrivacyPage() {
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
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-600">
            Last updated: {LAST_UPDATED} · Effective: {EFFECTIVE_DATE}
          </p>

          <div className="mt-10 space-y-10 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                1. Who we are
              </h2>
              <p className="mt-2">
                LootScout is operated by {COMPANY_LEGAL_NAME} (&ldquo;LootScout,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This
                Privacy Policy explains how we collect, use, disclose, and
                protect personal information when you use the LootScout mobile
                application, the website at https://lootscout.io, and related
                services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="mt-3">
                Questions? Contact us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                2. Information we collect
              </h2>
              <p className="mt-3">
                <strong>2.1 Information you provide.</strong>
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Account info:</strong> name, email address, password
                  (hashed), and (if you sign in with Google or Apple) your
                  third-party account profile data.
                </li>
                <li>
                  <strong>Profile info:</strong> display name, avatar, bio, and
                  other content you choose to add.
                </li>
                <li>
                  <strong>Listings and transactions:</strong> items you list,
                  prices, photos, condition, location of meetup, messages with
                  other users.
                </li>
                <li>
                  <strong>Subscription and payment info:</strong> processed by
                  Stripe, Inc. We receive metadata about subscription tier and
                  status; we do not store your full payment card number.
                </li>
                <li>
                  <strong>Support and feedback:</strong> messages you send us.
                </li>
              </ul>

              <p className="mt-4">
                <strong>2.2 Information collected automatically.</strong>
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Device info:</strong> device model, OS version, IP
                  address, app version, language, time zone.
                </li>
                <li>
                  <strong>Usage data:</strong> screens viewed, actions taken,
                  search queries, error logs.
                </li>
                <li>
                  <strong>Approximate or precise location:</strong> when you
                  grant location permission, we use your device&apos;s location to
                  power radius-based listing search. Background location is{" "}
                  <strong>not</strong> collected.
                </li>
                <li>
                  <strong>Push notification tokens:</strong> to deliver in-app
                  notifications you&apos;ve subscribed to.
                </li>
                <li>
                  <strong>Camera and photo library:</strong> when you scan cards
                  or upload listing photos. Images stay on-device until you
                  explicitly upload.
                </li>
              </ul>

              <p className="mt-4">
                <strong>2.3 Information from third parties.</strong>
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Pricing data</strong> from JustTCG, PriceCharting,
                  Pokémon TCG API, and Scryfall. Not personal data about you.
                </li>
                <li>
                  <strong>Single sign-on:</strong> when you sign in via Google
                  or Apple, we receive your name and email address from that
                  provider.
                </li>
                <li>
                  <strong>Stripe:</strong> subscription status, invoice
                  history, payment failures.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                3. How we use information
              </h2>
              <p className="mt-2">We use the information we collect to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>provide, maintain, and improve the Service;</li>
                <li>authenticate you and secure your account;</li>
                <li>display listings and pricing intelligence;</li>
                <li>facilitate communication and meetups between users;</li>
                <li>process subscriptions, payments, and refunds via Stripe;</li>
                <li>
                  send transactional messages (sale confirmations, account
                  alerts, password resets, beta updates);
                </li>
                <li>prevent fraud, abuse, and Terms violations;</li>
                <li>
                  develop new features and improve existing ones, including
                  aggregate Local Sales Data analytics;
                </li>
                <li>comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                4. How we share information
              </h2>
              <p className="mt-2">
                <strong>We do not sell your personal information.</strong>
              </p>
              <p className="mt-3">We share information with:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Other users</strong>, when you list an item, message a
                  user, or arrange a transaction. Public profile info, listings,
                  and meetup locations are visible to other users as you
                  configure them.
                </li>
                <li>
                  <strong>Service providers</strong> that operate the Service on
                  our behalf:
                  <ul className="mt-2 list-disc list-inside ml-5 space-y-1">
                    <li>
                      <strong>Supabase, Inc.</strong> — database,
                      authentication, edge functions, file storage.
                    </li>
                    <li>
                      <strong>Stripe, Inc.</strong> — payment processing.
                    </li>
                    <li>
                      <strong>Google LLC</strong> — single sign-on (when used)
                      and Maps/Places (when used).
                    </li>
                    <li>
                      <strong>Apple, Inc.</strong> — Sign in with Apple, App
                      Store distribution.
                    </li>
                    <li>
                      <strong>Pricing data providers</strong> — JustTCG,
                      PriceCharting, Pokémon TCG API, Scryfall (we send queries;
                      they do not receive personal info about you).
                    </li>
                    <li>
                      <strong>Push notification services</strong> — Apple Push
                      Notification Service, Firebase Cloud Messaging.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Legal and safety:</strong> to comply with applicable
                  law, respond to valid legal process, enforce our Terms,
                  protect users&apos; rights and safety, or investigate fraud.
                </li>
                <li>
                  <strong>Business transfers:</strong> to an acquirer or
                  successor in connection with a merger, acquisition, or sale of
                  all or substantially all of our assets, with notice to you.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                5. Your choices
              </h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Account info:</strong> edit your profile in-app at any
                  time.
                </li>
                <li>
                  <strong>Location:</strong> disable location permission in your
                  device settings; radius search will not work until re-enabled.
                </li>
                <li>
                  <strong>Push notifications:</strong> disable in your device
                  settings or in-app notification preferences.
                </li>
                <li>
                  <strong>Camera/photo:</strong> disable in your device
                  settings; you will not be able to scan cards or upload listing
                  photos.
                </li>
                <li>
                  <strong>Marketing emails:</strong> unsubscribe via the link in
                  any marketing email or by emailing{" "}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-primary-600 hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                  . Transactional emails (account, payment, sale confirmations)
                  cannot be opted out of while your account is active.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                6. Data retention and deletion
              </h2>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  We retain personal information for as long as your account is
                  active or as needed to provide the Service.
                </li>
                <li>
                  <strong>Account deletion:</strong> you can delete your account
                  in-app or at{" "}
                  <Link
                    href="/delete-account"
                    className="text-primary-600 hover:underline"
                  >
                    lootscout.io/delete-account
                  </Link>
                  . Once you confirm, we delete or anonymize your personal
                  information within 30 days, except where we must retain
                  certain records to comply with law (e.g., tax records, fraud
                  investigations) or to enforce our Terms.
                </li>
                <li>
                  <strong>Aggregated/de-identified data</strong> (such as
                  aggregated Local Sales Data with no personal identifiers) may
                  be retained indefinitely.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                7. Security
              </h2>
              <p className="mt-2">
                We use industry-standard safeguards to protect your information,
                including TLS for data in transit, encryption at rest for
                sensitive fields, password hashing, role-based access controls,
                and audit logging. <strong>No system is perfectly secure.</strong>{" "}
                Notify us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                if you suspect unauthorized access to your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                8. Children
              </h2>
              <p className="mt-2 border-l-4 border-primary-500 pl-4 py-1 text-slate-800">
                LootScout is not directed to children under 13, and we do not
                knowingly collect personal information from children under 13.
                The Service is intended for users 18 and older. If we learn we
                have collected information from a child under 13, we will
                delete it. Contact us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                with concerns.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                9. International users
              </h2>
              <p className="mt-2">
                LootScout is operated from the United States. If you access the
                Service from outside the U.S., you understand that your
                information will be transferred to, stored in, and processed in
                the United States, where data protection laws may differ from
                those in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                10. California Privacy Rights (CCPA / CPRA)
              </h2>
              <p className="mt-2">
                If you are a California resident, you have the right to:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Know</strong> what personal information we collect,
                  use, disclose, and share.
                </li>
                <li>
                  <strong>Delete</strong> personal information we have
                  collected, subject to legal exceptions.
                </li>
                <li>
                  <strong>Correct</strong> inaccurate personal information.
                </li>
                <li>
                  <strong>Opt out</strong> of &ldquo;sale&rdquo; or
                  &ldquo;sharing&rdquo; of personal information.{" "}
                  <strong>
                    We do not sell or share personal information for
                    cross-context behavioral advertising.
                  </strong>
                </li>
                <li>
                  <strong>Non-discrimination</strong> for exercising any of the
                  above.
                </li>
              </ul>
              <p className="mt-3">
                To exercise these rights, email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                from the email associated with your account. We will verify
                your identity and respond within 45 days.
              </p>
              <p className="mt-3">
                We do not knowingly process the personal information of
                California residents under 16 for sale or sharing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                11. Other state-specific rights (Virginia, Colorado, Connecticut, Utah, etc.)
              </h2>
              <p className="mt-2">
                Residents of certain other U.S. states have rights similar to
                those described above. Contact{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                to exercise them. We will respond as required by applicable
                law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                12. EU/UK users
              </h2>
              <p className="mt-2">
                If you are in the European Union or United Kingdom, the legal
                bases on which we process your information include performance
                of the contract (providing the Service), legitimate interests
                (improving and securing the Service), consent (where applicable,
                e.g., marketing emails or location data), and compliance with
                legal obligations. You have rights of access, rectification,
                erasure, restriction, portability, and objection. Contact{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                to exercise them. You also have the right to lodge a complaint
                with your local data protection authority.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                13. Changes to this Privacy Policy
              </h2>
              <p className="mt-2">
                We may update this Privacy Policy from time to time. If we make
                material changes we will notify you via the app, email, or a
                prominent notice on the website. The &ldquo;Last updated&rdquo;
                date at the top reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                14. Contact
              </h2>
              <p className="mt-2">
                {COMPANY_LEGAL_NAME}
                <br />
                {COMPANY_MAILING_ADDRESS}
                <br />
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="text-primary-600 font-medium hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
