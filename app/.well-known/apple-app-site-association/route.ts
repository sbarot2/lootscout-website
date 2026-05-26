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

// Apple Team ID (10-char alphanumeric, e.g. "ABC1234DEF").
// Get from: developer.apple.com → Account → Membership → Team ID.
// SET BEFORE DEPLOYING — placeholder will fail validation.
const APPLE_TEAM_ID = "REPLACE_WITH_APPLE_TEAM_ID";

const APP_ID = `${APPLE_TEAM_ID}.com.lootscout.app`;

const APP_PATHS = [
  // Stripe Checkout / Customer Portal return URLs (bridge pages serve as
  // fallback when app isn't installed).
  "/subscription-success",
  "/subscription-success/*",
  "/subscription-cancel",
  "/profile-return",
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
      details: [
        {
          appID: APP_ID,
          paths: APP_PATHS,
        },
      ],
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
