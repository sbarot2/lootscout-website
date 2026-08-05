/**
 * Official App Store / Google Play download badges.
 *
 * These render under the stores' brand rules — please don't "tidy" the markup:
 *
 * - **Equal height is mandatory.** Google requires their badge be the same size
 *   or larger than a competing badge; Apple requires theirs be no smaller than
 *   an adjacent badge. Rendering both from this one component with one shared
 *   size class satisfies both rules at once and stops the two from drifting.
 * - **The artwork is never altered** — no recolor, rotation, crop, filter, or
 *   opacity on the image. The rendered height is the only thing we set, and it
 *   scales the SVG uniformly.
 * - **Clear space** (Apple: >=10% of badge height on every side) is the caller's
 *   job: wrap each badge in padding/margin rather than shrinking the artwork.
 * - `width`/`height` are the intrinsic-ratio hint the browser uses to reserve
 *   the box before the SVG loads, so there is no layout shift. The rendered size
 *   comes from the class below; `w-auto` keeps the SVG's true ratio, so the
 *   ~0.3% rounding in the App Store hint never reaches the drawn artwork.
 *
 * Asset choice: this is Apple's US-UK **white** lockup. Every surface that uses
 * these badges is the indigo -> violet gradient (#4f46e5 -> #7c3aed), where the
 * black lockup would land near 2.8:1 against the background. Google ships a
 * single official badge — a near-black plate with a white outline, built to sit
 * on dark backgrounds — so it needs no variant swap.
 */

type Store = "app-store" | "google-play";

/** One height for both badges. Never override this per-badge. */
const BADGE_SIZE_CLASS = "h-10 w-auto sm:h-12";

const BADGES: Record<Store, { src: string; alt: string; width: number; height: number }> = {
  "app-store": {
    src: "/badges/app-store-white.svg",
    alt: "Download on the App Store",
    width: 120,
    height: 40,
  },
  "google-play": {
    src: "/badges/google-play.svg",
    alt: "Get it on Google Play",
    width: 135,
    height: 40,
  },
};

export default function StoreBadge({ store }: { store: Store }) {
  const badge = BADGES[store];

  return (
    // eslint-disable-next-line @next/next/no-img-element -- next/image would need
    // dangerouslyAllowSVG; a static SVG with explicit dimensions is the safer path.
    <img
      src={badge.src}
      alt={badge.alt}
      width={badge.width}
      height={badge.height}
      className={BADGE_SIZE_CLASS}
    />
  );
}
