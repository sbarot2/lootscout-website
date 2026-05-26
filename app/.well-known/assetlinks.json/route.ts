import { NextResponse } from "next/server";

/**
 * Android assetlinks.json for App Links (autoVerify).
 *
 * Served at https://lootscout.io/.well-known/assetlinks.json.
 * Must be:
 *   - HTTPS, no redirects
 *   - Content-Type: application/json
 *
 * Verify after deploy:
 *   1. https://developers.google.com/digital-asset-links/tools/generator
 *   2. After install: `adb shell pm get-app-links com.lootscout.app`
 *      → expect "verified" for lootscout.io
 *
 * To get the SHA-256 fingerprint:
 *   Google Play Console → your app → Setup → App integrity →
 *     App signing key certificate → SHA-256 certificate fingerprint
 *   Copy the colon-separated value (e.g. "AA:BB:CC:...")
 */

// Play Store app signing cert fingerprint.
// From Google Play Console → LootScout → Setup → App integrity →
//   App signing key certificate → SHA-256 certificate fingerprint.
// On Play app transfer, the signing key + this fingerprint stay the
// same (Play App Signing keeps the cert with Google) — no update needed
// when the LLC takes ownership.
const PLAY_SIGNING_SHA256 =
  "A6:87:08:EC:B3:D2:D0:6C:F3:43:91:B5:A7:B0:94:DC:12:32:28:C7:80:CF:BA:EF:2C:42:4C:F6:45:9E:E9:81";

// If you sign locally with a different upload key for dev builds (EAS does
// this for development profiles), add it here too. The Play Store signing
// key is the only one that matters for production App Links verification.
const ADDITIONAL_FINGERPRINTS: string[] = [];

const PACKAGE_NAME = "com.lootscout.app";

export async function GET() {
  const body = [
    {
      relation: [
        "delegate_permission/common.handle_all_urls",
      ],
      target: {
        namespace: "android_app",
        package_name: PACKAGE_NAME,
        sha256_cert_fingerprints: [
          PLAY_SIGNING_SHA256,
          ...ADDITIONAL_FINGERPRINTS,
        ],
      },
    },
  ];

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
