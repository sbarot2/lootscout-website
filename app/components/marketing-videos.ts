/**
 * Marketing clips served from the public Supabase storage bucket `marketing-videos`.
 *
 * Adding a video is a one-line append to MARKETING_VIDEOS below â€” upload
 * `<slug>.mp4` to the bucket first, then add `{ slug, title }`.
 *
 * Set `web: true` once a compressed `<slug>-web.mp4` variant exists in the same
 * bucket (720x1280, CRF ~26, +faststart); the gallery will point at that file
 * instead of the full-quality social export.
 */

const MARKETING_VIDEO_BUCKET_URL =
  "https://skpjyyxwudjteoomfazu.supabase.co/storage/v1/object/public/marketing-videos";

export type MarketingVideo = {
  /** Object name in the bucket, without extension. */
  slug: string;
  /** Visible caption under the card. */
  title: string;
  /** True when a compressed `<slug>-web.mp4` has been uploaded. */
  web?: boolean;
  /** Optional poster image URL (bucket object or /images path). */
  poster?: string;
};

export const MARKETING_VIDEOS: readonly MarketingVideo[] = [
  { slug: "d1-card-scan", title: "Scan cards straight into your collection", web: true },
  { slug: "d12-import-scan", title: "Bulk list your inventory from scans", web: true },
  { slug: "d11-founder-story", title: "Why we built LootScout", web: true },
  { slug: "d2-vendor-maps", title: "Find vendors at live events", web: true },
  { slug: "d3-kiosk-qr", title: "Kiosk and QR pickup", web: true },
  { slug: "d4-tap-to-pay", title: "Take card payments in person", web: true },
  { slug: "d5-digital-trade", title: "Trade cards without the guesswork", web: true },
  { slug: "d7-list-market-local", title: "List at the real market price", web: true },
  { slug: "d8-csv-import", title: "Import your whole collection by CSV", web: true },
  { slug: "d9-trust-safety", title: "Trust and safety built in", web: true },
];

/** Public URL for a clip â€” the `-web` variant when one has been uploaded. */
export function marketingVideoUrl(video: MarketingVideo): string {
  return `${MARKETING_VIDEO_BUCKET_URL}/${video.slug}${video.web ? "-web" : ""}.mp4`;
}

