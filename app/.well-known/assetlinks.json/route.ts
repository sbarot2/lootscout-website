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

// Play Console explicitly lists BOTH the app signing key AND the upload key
// as required fingerprints for App Links verification. Some install paths
// (Play Store distribution) check the app signing cert; others (internal
// testing tracks, sideload of unsigned-by-Google builds) check the upload
// cert. Listing both is the standard Google-recommended setup.
//
// Upload cert SHA-256 from Google Play Console -> Setup -> App integrity ->
//   Upload key certificate -> SHA-256 certificate fingerprint.
const UPLOAD_KEY_SHA256 =
  "6A:6B:E6:0D:C3:BA:C0:16:DE:D5:19:D0:61:D9:00:CC:50:7A:10:9F:AF:F3:43:B3:7E:90:43:97:C3:17:D7:FC";

const ADDITIONAL_FINGERPRINTS: string[] = [UPLOAD_KEY_SHA256];

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
