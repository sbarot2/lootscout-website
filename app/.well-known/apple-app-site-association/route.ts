import { NextResponse } from "next/server";

/**
 * Apple App Site Association (AASA) file for Universal Links.
 *
 * Served at https://lootscout.io/.well-known/apple-app-site-association.
 * Must be:
 *   - HTTPS, no redirects
 *   - Content-Type: application/json
 *   - No file extension on the URL
 *
 * Verify after deploy:
 *   1. https://branch.io/resources/aasa-validator/
 *   2. On a real device: `swcutil dl --verbose` after install
 *
 * To update the app's allowed paths or appID, change the constants below
 * and redeploy. Apple caches AASA aggressively; force refresh by reinstalling
 * the app or running `xcrun simctl openurl` after the cache window passes.
 */

// Apple Team IDs (10-char alphanumeric).
// LISTING MULTIPLE entries lets installed builds from different Apple
// Developer teams (e.g. personal account today, LLC org later) both
// resolve Universal Links without re-deploying this file at transfer time.
// Apple matches the user's currently-installed app against the appID it
// shipped under, and ignores the others.
const APPLE_TEAM_IDS: readonly string[] = [
  "62T66ZFY6N", // Shriji Barot (personal account — current beta builds)
  // Add LLC Team ID here after Apple Developer org enrollment lands.
  // Until then, builds shipped from LLC org won't deep-link until this
  // file is updated + redeployed (Apple CDN refresh ~24h).
];

const BUNDLE_ID = "com.lootscout.app";

const APP_PATHS = [
  // Stripe Checkout / Customer Portal return URLs (bridge pages serve as
  // fallback when app isn't installed).
  "/subscription-success",
  "/subscription-success/*",
  "/subscription-cancel",
  "/profile-return",
  // Supabase auth password recovery — link in the reset email lands here
  // and is intercepted by the app. Bridge page is the install-the-app
  // fallback.
  "/password-reset",
  "/password-reset/*",
  // Deep-link surfaces inside the app (shareable links open the app
  // directly when installed, fall back to website pages otherwise).
  "/listing/*",
  "/product/*",
  "/profile/*",
  "/shop/*",
  // INTENTIONALLY OUT (must open in browser, not the app):
  //   /email-confirmed         — Supabase auth confirmation lives on web
  //   /terms /privacy /faq /support  — marketing/legal pages
  //   /                        — homepage
  //
  // Future routes can be added here without an app rebuild — AASA changes
  // take effect after Apple's CDN cache refreshes (usually within 24h).
];

export async function GET() {
  const body = {
    applinks: {
      apps: [],
      details: APPLE_TEAM_IDS.map((teamId) => ({
        appID: `${teamId}.${BUNDLE_ID}`,
        paths: APP_PATHS,
      })),
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
