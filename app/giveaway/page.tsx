import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import SitePageHeader from "../components/SitePageHeader";

export const metadata: Metadata = {
  title: "Launch Giveaway — Official Rules — LootScout",
  description:
    "Official rules for the LootScout Launch Giveaway sweepstakes. No purchase necessary. Open to US residents 18+. One prize, awarded by random drawing.",
};

const COMPANY_LEGAL_NAME = "LootScout LLC";
const COMPANY_MAILING_ADDRESS =
  "4030 Wake Forest Road STE 349, Raleigh, WAKE COUNTY, NC 27609 USA";
const SUPPORT_EMAIL = "support@lootscout.io";

// ---------------------------------------------------------------------------
// FILL THESE IN BEFORE PUBLISHING. Every placeholder below is rendered on the
// page exactly as written, so a missed value is visible at a glance.
// ---------------------------------------------------------------------------
const ENTRY_START = "August 6, 2026";
const ENTRY_END = "September 5, 2026";
const DRAW_DATE = "on or about September 12, 2026";
const PRIZE_DESCRIPTION =
  "One (1) Pokémon Mega Greninja Special Illustration Rare (raw, ungraded) and one (1) Pitch Black booster box";
const PRIZE_ARV = "approximately $500 USD";
const LAST_UPDATED = "August 5, 2026";

export default function GiveawayPage() {
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
            LootScout Launch Giveaway
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Enter in the LootScout app between {ENTRY_START} and {ENTRY_END} for
            a chance to win one (1) prize, awarded by random drawing. Open to all
            registered LootScout users, including those who registered before{" "}
            {ENTRY_START}.
          </p>
          <p className="mt-4 border-l-4 border-primary-500 pl-4 py-2 font-semibold text-slate-900">
            NO PURCHASE NECESSARY. A purchase or payment of any kind will not
            increase your chances of winning. Void where prohibited.
          </p>
          <p className="mt-4 text-slate-600">
            Last updated: {LAST_UPDATED}
          </p>

          <h2 className="mt-12 text-2xl font-bold text-slate-900">
            Official Rules
          </h2>

          <div className="mt-8 space-y-10 text-slate-700 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                1. Sponsor
              </h3>
              <p className="mt-2">
                This sweepstakes (the &ldquo;Sweepstakes&rdquo;) is sponsored and
                administered by {COMPANY_LEGAL_NAME} (the &ldquo;Sponsor,&rdquo;
                &ldquo;LootScout,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;), {COMPANY_MAILING_ADDRESS}.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                2. No purchase necessary
              </h3>
              <p className="mt-2">
                <strong>
                  NO PURCHASE OR PAYMENT OF ANY KIND IS NECESSARY TO ENTER OR
                  WIN.
                </strong>{" "}
                A purchase or payment will not improve your chances of winning.
                The LootScout app is free to download and free to use, entering
                the Sweepstakes is free, and creating an account costs nothing.
                If you already have a LootScout account, you do not need to
                create anything or pay anything to enter &mdash; you only need to
                submit an entry in the app as described in Section 5. Purchasing
                a LootScout subscription is not an entry method, does not create
                an entry, and does not create additional entries.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                3. Entry period
              </h3>
              <p className="mt-2">
                The Sweepstakes begins on <strong>{ENTRY_START}</strong> and ends
                on <strong>{ENTRY_END} at 11:59 PM Eastern Time</strong> (the
                &ldquo;Entry Period&rdquo;). Entries submitted before or after
                the Entry Period are not eligible. Sponsor&apos;s computer is the
                official time-keeping device for the Sweepstakes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                4. Eligibility
              </h3>
              <p className="mt-2">
                The Sweepstakes is open only to legal residents of the fifty (50)
                United States and the District of Columbia who are eighteen (18)
                years of age or older at the time of entry. Void where
                prohibited or restricted by law.
              </p>
              <p className="mt-3">
                The Sweepstakes is open to <strong>all</strong> registered
                LootScout users who meet those requirements, including users who
                registered before the Entry Period began. The date on which your
                LootScout account was created does not affect your eligibility.
                An eligible entrant must have a LootScout account in order to
                submit an entry, and must submit that entry during the Entry
                Period as described in Section 5.
              </p>
              <p className="mt-3">
                Employees, officers, members, and contractors of the Sponsor, and
                the immediate family members and household members of each, are
                not eligible to enter or win.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                5. How to enter
              </h3>
              <p className="mt-2">
                To enter, open the LootScout mobile app during the Entry Period,
                sign in to your LootScout account, open the giveaway in the app,
                and tap the button to enter. Your entry is submitted at the
                moment you tap to enter. Entering is free.
              </p>
              <p className="mt-3">
                If you do not already have a LootScout account, you may create
                one at no cost in order to enter.{" "}
                <strong>Creating an account is not itself an entry</strong> and
                does not place you in the drawing. Whether your account is new or
                existing, you must still submit an entry in the app during the
                Entry Period as described above. This is the only method of
                entry.
              </p>
              <p className="mt-3">
                <strong>Limit one (1) entry per person.</strong> Entries beyond
                the first submitted by the same individual, entries submitted
                through duplicate or multiple accounts, entries submitted by
                automated means or through bot accounts, entries submitted with
                false or incomplete information, and any entry Sponsor reasonably
                believes is fraudulent will be disqualified. Sponsor may
                disqualify all entries associated with an individual found to
                have submitted multiple entries.
              </p>
              <p className="mt-3">
                Entries become the property of Sponsor and will not be returned.
                Entries that are incomplete, corrupted, or not received by
                Sponsor for any reason are void.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                6. Prize
              </h3>
              <p className="mt-2">
                One (1) prize will be awarded: {PRIZE_DESCRIPTION}. Approximate
                retail value ({PRIZE_ARV}). There is one (1) prize total and one
                (1) winner.
              </p>
              <p className="mt-3">
                <strong>No cash substitution.</strong> The prize is not
                transferable and may not be exchanged for cash, except that
                Sponsor may, in its sole discretion, substitute a prize of equal
                or greater value if the advertised prize becomes unavailable.
              </p>
              <p className="mt-3">
                <strong>Prize delivery.</strong> At the winner&apos;s choice, the
                prize will either be shipped to a valid United States mailing
                address provided by the winner, or handed over in person in the
                Raleigh&ndash;Durham, North Carolina area at a mutually agreed
                public location and time. Sponsor does not ship outside the
                United States.
              </p>
              <p className="mt-3">
                <strong>Taxes.</strong> All federal, state, and local taxes on
                the prize, and any other costs or expenses not expressly stated
                as included in the prize, are the sole responsibility of the
                winner. Where required by law, Sponsor will issue an IRS Form
                1099 and the winner must provide a completed IRS Form W-9 before
                the prize is awarded.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                7. Odds of winning
              </h3>
              <p className="mt-2">
                Odds of winning depend on the total number of eligible entries
                received during the Entry Period.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                8. Winner selection, notification, and claim deadline
              </h3>
              <p className="mt-2">
                <strong>8.1 Drawing.</strong> The winner will be selected in a
                random drawing from among all valid entries submitted through the
                LootScout app during the Entry Period. Accounts that did not
                submit an entry are not included in the drawing, regardless of
                when they were created. The drawing will be conducted by Sponsor
                on or about <strong>{DRAW_DATE}</strong>, within approximately
                seven (7) days after the Entry Period closes. The drawing is
                final and binding.
              </p>
              <p className="mt-3">
                <strong>8.2 Notification.</strong> The winner will be notified at
                the email address associated with their LootScout account.
                It is the entrant&apos;s responsibility to maintain a valid,
                monitored email address on their account.
              </p>
              <p className="mt-3">
                <strong>8.3 Claim deadline.</strong> The winner must respond to
                the notification within <strong>fourteen (14) days</strong> of
                the date it is sent and provide the information reasonably
                required to award the prize (including a shipping address or a
                confirmed in-person handoff, and any tax documentation required
                by Section 6). If the winner does not respond within that period,
                cannot be reached, is found ineligible, declines the prize, or
                fails to provide the required information, the prize will be
                forfeited and an alternate winner may be selected in a
                subsequent random drawing from the remaining eligible entries.
                Sponsor is under no obligation to award an unclaimed prize after
                a reasonable number of alternate-winner attempts.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                9. Conditions, cancellation, and modification
              </h3>
              <p className="mt-2">
                By entering, you agree to be bound by these Official Rules and by
                the decisions of the Sponsor, which are final and binding in all
                matters relating to the Sweepstakes.
              </p>
              <p className="mt-3">
                Sponsor reserves the right, in its sole discretion, to cancel,
                suspend, terminate, or modify the Sweepstakes, in whole or in
                part, if fraud, technical failure, tampering, unauthorized
                intervention, or any other cause beyond Sponsor&apos;s reasonable
                control corrupts or impairs the administration, security,
                fairness, or proper conduct of the Sweepstakes. In such an event,
                Sponsor may, in its sole discretion, award the prize by random
                drawing from among the eligible, non-suspect entries received up
                to the time of the impairment.
              </p>
              <p className="mt-3">
                Sponsor reserves the right to disqualify any individual who
                tampers with the entry process, violates these Official Rules,
                acts in a disruptive manner, or acts in violation of the
                LootScout{" "}
                <Link href="/terms" className="text-primary-600 hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
              <p className="mt-3">
                Sponsor is not responsible for lost, late, misdirected, garbled,
                or undeliverable entries or notifications; for technical,
                hardware, software, network, or telephone failures; or for any
                injury or damage to any person&apos;s device related to or
                resulting from participating in the Sweepstakes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                10. Release and limitation of liability
              </h3>
              <p className="mt-2">
                By entering, you release and hold harmless the Sponsor and its
                members, officers, employees, contractors, and agents from any
                and all liability, claims, injury, loss, or damage of any kind
                arising out of or in connection with the Sweepstakes or the
                acceptance, possession, use, or misuse of the prize, to the
                maximum extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                11. Privacy
              </h3>
              <p className="mt-2">
                Information you submit in connection with the Sweepstakes is
                collected by the Sponsor and handled in accordance with the
                LootScout{" "}
                <Link
                  href="/privacy"
                  className="text-primary-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                . Sponsor uses entrant account information (including email
                address) solely to administer the Sweepstakes, verify
                eligibility, contact the winner, and award and deliver the prize.
                Entering the Sweepstakes does not subscribe you to marketing
                email, and Sponsor does not sell entrant personal information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                12. Platform disclaimer and release
              </h3>
              <p className="mt-2 border-l-4 border-primary-500 pl-4 py-1 text-slate-800">
                This Sweepstakes is <strong>not</strong> sponsored, endorsed,
                administered by, or associated with Apple Inc., Google LLC,
                Instagram, Meta Platforms, Inc., TikTok, or YouTube. By entering,
                you completely release each of those platforms from any and all
                liability arising out of or in connection with the Sweepstakes.
                Any questions, comments, or complaints regarding the Sweepstakes
                must be directed to the Sponsor, not to any of those platforms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                13. Governing law and disputes
              </h3>
              <p className="mt-2">
                These Official Rules and any dispute arising out of or relating
                to the Sweepstakes are governed by the laws of the State of North
                Carolina, without regard to conflict-of-laws principles. Any
                lawsuit relating to the Sweepstakes shall be brought exclusively
                in the state or federal courts located in Wake County, North
                Carolina, and entrants consent to personal jurisdiction in those
                courts.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-slate-900">
                14. Winner list and questions
              </h3>
              <p className="mt-2">
                For the name of the winner (available after the prize is awarded)
                or for any question about the Sweepstakes, email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary-600 hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                or write to {COMPANY_LEGAL_NAME}, {COMPANY_MAILING_ADDRESS}.
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
