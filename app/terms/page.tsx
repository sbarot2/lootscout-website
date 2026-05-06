import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "Terms of Service — LootScout",
  description:
    "LootScout terms of service. Marketplace rules, subscription policies, dispute resolution, and limitation of liability.",
};

// TODO: Replace "LootScout" with the registered LLC name (e.g. "LootScout LLC")
// once the NC Articles are stamped and the company has a final legal name.
// Also update the mailing address in the contact section.
const COMPANY_LEGAL_NAME = "LootScout LLC";
const COMPANY_MAILING_ADDRESS = "4030 Wake Forest Road STE 349, Raleigh, WAKE COUNTY, NC 27609 USA";
const SUPPORT_EMAIL = "support@lootscout.io";
const LAST_UPDATED = "May 6, 2026";
const EFFECTIVE_DATE = "May 6, 2026";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-slate-600">
            Last updated: {LAST_UPDATED} · Effective: {EFFECTIVE_DATE}
          </p>

          <div className="mt-10 space-y-10 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                1. Acceptance of these Terms
              </h2>
              <p className="mt-2">
                These Terms of Service (the &ldquo;Terms&rdquo;) form a binding
                agreement between you and {COMPANY_LEGAL_NAME} (&ldquo;LootScout,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing
                your use of the LootScout mobile application, the website at
                https://lootscout.io, and any related services we provide
                (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p className="mt-3">
                By creating an account, accessing the Service, or otherwise using
                LootScout, you agree to these Terms and to our{" "}
                <Link href="/privacy" className="text-primary-600 hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                2. Eligibility
              </h2>
              <p className="mt-2">
                You must be at least 18 years old to create an account, list
                items, or transact through the Service. By registering you
                represent that you are 18 or older and that you have the legal
                capacity to enter into these Terms in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                3. The Service: a peer-to-peer marketplace
              </h2>
              <p className="mt-2">
                LootScout is a platform that helps users discover, list, value,
                and arrange in-person buy/sell/trade transactions for
                collectibles, including trading cards, video games, comics, and
                related items. The Service includes pricing intelligence
                aggregated from third-party sources and from confirmed user
                transactions (&ldquo;Local Sales Data&rdquo;).
              </p>
              <p className="mt-3 border-l-4 border-primary-500 pl-4 py-1 text-slate-800">
                <strong>LootScout is not a party to any transaction between users.</strong>{" "}
                We do not buy, sell, or trade items. We do not take possession of
                items. We do not act as escrow, broker, or guarantor. Any
                disputes about items, condition, payment, or delivery are between
                the buyer and seller. You agree to deal directly with other
                users at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                4. Accounts
              </h2>
              <p className="mt-2">
                <strong>4.1 Registration.</strong> You may register using an
                email and password or via supported third-party sign-in (e.g.,
                Google, Apple). You agree to provide accurate, current, and
                complete information and to keep it updated.
              </p>
              <p className="mt-3">
                <strong>4.2 Account security.</strong> You are responsible for
                maintaining the confidentiality of your credentials and for all
                activity under your account. Notify us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                of any unauthorized use.
              </p>
              <p className="mt-3">
                <strong>4.3 One account per user.</strong> You may not create or
                maintain multiple accounts to circumvent listing limits,
                suspensions, or other Terms enforcement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                5. User content and listings
              </h2>
              <p className="mt-2">
                <strong>5.1</strong> You retain ownership of the listings,
                photos, descriptions, messages, reviews, and other content you
                submit (&ldquo;User Content&rdquo;). You grant LootScout a
                worldwide, non-exclusive, royalty-free, sublicensable license to
                host, store, reproduce, modify (for technical purposes such as
                resizing), display, and distribute your User Content in
                connection with operating and promoting the Service.
              </p>
              <p className="mt-3">
                <strong>5.2</strong> You represent and warrant that (a) you own
                the items you list and have the right to sell or trade them; (b)
                your descriptions, conditions, grades, and prices are accurate;
                (c) your User Content does not infringe third-party rights or
                violate applicable law; and (d) item images you upload are taken
                by you or properly licensed.
              </p>
              <p className="mt-3">
                <strong>5.3</strong> We may remove User Content that we believe
                violates these Terms, applicable law, or our content policies,
                with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                6. In-person transactions and personal safety
              </h2>
              <p className="mt-2">
                <strong>6.1 In-person trades and sales.</strong> LootScout
                facilitates discovery and communication; the actual exchange of
                money and goods happens between users in person. <strong>You
                are solely responsible for your physical safety.</strong> We
                strongly recommend (a) meeting in well-trafficked public
                locations such as designated police-station &ldquo;safe
                exchange&rdquo; zones, (b) bringing a friend, (c) verifying
                authenticity and condition before exchanging payment, and (d)
                using payment methods with buyer/seller protection where
                feasible.
              </p>
              <p className="mt-3">
                <strong>6.2 LootScout is not liable for in-person harms.</strong>{" "}
                To the maximum extent permitted by law, LootScout disclaims
                liability for any injury, theft, fraud, misrepresentation,
                breach, or damage arising from in-person interactions between
                users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                7. Subscriptions and fees
              </h2>
              <p className="mt-2">
                <strong>7.1 Free and paid tiers.</strong> LootScout offers a
                free tier and paid tiers (Plus, Pro, Pro Shop, Enterprise).
                Pricing, listing limits, and feature differences are described
                at{" "}
                <Link href="/" className="text-primary-600 hover:underline">
                  lootscout.io
                </Link>
                .
              </p>
              <p className="mt-3">
                <strong>7.2 Billing.</strong> Paid tiers are billed in advance
                on a recurring monthly basis through Stripe, Inc. By subscribing
                you authorize LootScout (via Stripe) to charge your payment
                method for the recurring fee until you cancel.
              </p>
              <p className="mt-3">
                <strong>7.3 Cancellation and refunds.</strong> You may cancel at
                any time via the in-app billing portal or by signing in at
                lootscout.io. Cancellation is effective at the end of the
                current billing period; you retain access until then. We do not
                provide pro-rata refunds for partial periods, except where
                required by law.
              </p>
              <p className="mt-3">
                <strong>7.4 Promo codes and beta pricing.</strong> Beta pricing
                and promotional codes are subject to the specific terms shown at
                the time of offer and may change.
              </p>
              <p className="mt-3">
                <strong>7.5 Taxes.</strong> You are responsible for any sales,
                use, or other taxes applicable to your transactions. LootScout&apos;s
                subscription fees are exclusive of taxes unless explicitly
                stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                8. Pricing data and Local Sales Data
              </h2>
              <p className="mt-2">
                <strong>8.1 Pricing intelligence.</strong> LootScout displays
                pricing from third-party sources (including JustTCG,
                PriceCharting, Pokémon TCG API, Scryfall, and others) and from
                Local Sales Data. <strong>Pricing data is informational only.</strong>{" "}
                Actual market value, transaction price, and authenticity are
                determined by the parties to a given transaction.
              </p>
              <p className="mt-3">
                <strong>8.2 Local Sales Data license.</strong> When you record
                a confirmed sale through LootScout, you grant LootScout a
                perpetual, worldwide, royalty-free license to use the resulting
                transaction data — in aggregated, de-identified form — to
                improve pricing intelligence and other Service features. We do
                not publish your individual transaction prices in a manner that
                personally identifies you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                9. Acceptable use
              </h2>
              <p className="mt-2">You agree not to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>violate any law, regulation, or third-party right;</li>
                <li>
                  list, sell, or trade counterfeit, stolen, recalled, or
                  otherwise illegal items;
                </li>
                <li>impersonate another person or misrepresent your affiliation;</li>
                <li>harass, threaten, defraud, or stalk other users;</li>
                <li>
                  attempt to circumvent listing limits, subscription tiers, or
                  other Service controls;
                </li>
                <li>
                  reverse engineer, decompile, scrape, or attempt to extract
                  source code or non-public APIs from the Service;
                </li>
                <li>
                  use the Service to send spam, unsolicited messages, or
                  marketing not directly related to a listing;
                </li>
                <li>interfere with the operation of the Service or servers;</li>
                <li>
                  collect User Content for any purpose other than your own use
                  of the Service (e.g., training machine-learning models or
                  building a competing product);
                </li>
                <li>
                  use automation (bots, scrapers, scripts) without our prior
                  written consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                10. Suspension and termination
              </h2>
              <p className="mt-2">
                <strong>10.1 By you.</strong> You may stop using the Service or
                delete your account at any time via the in-app account settings
                or at{" "}
                <Link
                  href="/delete-account"
                  className="text-primary-600 hover:underline"
                >
                  lootscout.io/delete-account
                </Link>
                .
              </p>
              <p className="mt-3">
                <strong>10.2 By LootScout.</strong> We may suspend or terminate
                your account, with or without notice, if we reasonably believe
                you have violated these Terms, engaged in fraud, harmed other
                users, or created legal risk for LootScout. Where practical we
                will give notice and an opportunity to cure.
              </p>
              <p className="mt-3">
                <strong>10.3 Effect of termination.</strong> Upon termination,
                your right to use the Service ceases. Sections of these Terms
                that by their nature should survive (including ownership,
                disclaimers, limitation of liability, indemnification, dispute
                resolution) shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                11. Disclaimers
              </h2>
              <p className="mt-2">
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW,
                LOOTSCOUT DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM COURSE OF
                DEALING OR USAGE OF TRADE.
              </p>
              <p className="mt-3">
                WITHOUT LIMITING THE FOREGOING, LOOTSCOUT DOES NOT WARRANT THAT
                (A) THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE;
                (B) ANY USER CONTENT, LISTING, OR ITEM IS ACCURATE, AUTHENTIC,
                OR LAWFUL; (C) PRICING DATA IS ACCURATE OR COMPLETE; OR (D) ANY
                USER WILL FULFILL THEIR OBLIGATIONS IN A TRANSACTION.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                12. Limitation of liability
              </h2>
              <p className="mt-2">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
              </p>
              <p className="mt-3">
                (a) LootScout shall not be liable for any indirect, incidental,
                special, consequential, exemplary, or punitive damages, including
                without limitation damages for lost profits, lost revenue, loss
                of goodwill, business interruption, loss of data, or cost of
                substitute goods or services, arising from or relating to the
                Service or these Terms.
              </p>
              <p className="mt-3">
                (b) LootScout&apos;s total aggregate liability arising from or
                relating to the Service or these Terms shall not exceed the
                greater of (i) one hundred U.S. dollars ($100) or (ii) the total
                amount you paid LootScout in the twelve (12) months preceding
                the event giving rise to the claim.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Some jurisdictions do not allow the exclusion or limitation of
                certain damages; in such jurisdictions our liability is limited
                to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                13. Indemnification
              </h2>
              <p className="mt-2">
                You agree to defend, indemnify, and hold harmless LootScout, its
                members, officers, employees, agents, and licensors from and
                against any claims, damages, losses, liabilities, and expenses
                (including reasonable attorneys&apos; fees) arising from (a)
                your use of the Service, (b) your User Content, (c) your
                transactions with other users, (d) your violation of these
                Terms, or (e) your violation of any law or third-party right.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                14. Dispute resolution
              </h2>
              <p className="mt-2">
                <strong>14.1 Governing law.</strong> These Terms are governed by
                the laws of the State of North Carolina, without regard to
                conflict-of-laws principles.
              </p>
              <p className="mt-3">
                <strong>14.2 Informal resolution.</strong> Before filing any
                formal claim, you agree to contact us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                and attempt in good faith to resolve the dispute.
              </p>
              <p className="mt-3">
                <strong>14.3 Venue.</strong> Any lawsuit shall be brought in the
                state or federal courts located in Wake County, North Carolina,
                and you consent to personal jurisdiction in those courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                15. Changes to these Terms
              </h2>
              <p className="mt-2">
                We may revise these Terms from time to time. If we make material
                changes we will notify you via the app, email, or a notice on{" "}
                <Link href="/" className="text-primary-600 hover:underline">
                  lootscout.io
                </Link>
                . Continued use of the Service after the effective date of the
                updated Terms constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                16. Miscellaneous
              </h2>
              <p className="mt-2">
                <strong>16.1 Entire agreement.</strong> These Terms (with the
                Privacy Policy) are the entire agreement between you and
                LootScout and supersede prior agreements.
              </p>
              <p className="mt-3">
                <strong>16.2 Severability.</strong> If any provision is held
                unenforceable, the remaining provisions remain in effect.
              </p>
              <p className="mt-3">
                <strong>16.3 No waiver.</strong> Our failure to enforce any
                provision is not a waiver of our right to enforce it later.
              </p>
              <p className="mt-3">
                <strong>16.4 Assignment.</strong> You may not assign these
                Terms. We may assign these Terms in connection with a merger,
                acquisition, or sale of assets.
              </p>
              <p className="mt-3">
                <strong>16.5 Notices.</strong> Notices to you may be sent via
                the app or to your registered email. Notices to LootScout must
                be sent to {COMPANY_MAILING_ADDRESS} and emailed to{" "}
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
                17. Contact
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
