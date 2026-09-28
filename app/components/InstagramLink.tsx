/**
 * Link to the LootScout Instagram profile.
 *
 * The glyph is an inline SVG (single path, `fill="currentColor"`) rather than an
 * icon font or CDN sprite so it costs no dependency, no extra request, and
 * inherits whatever text color the surrounding surface sets.
 *
 * Two variants, because the link appears on two very different surfaces:
 *
 * - `badge` — sits beside the App Store / Google Play badges on the indigo →
 *   violet gradient. `StoreBadge` renders its artwork at `h-10 sm:h-12`, so the
 *   button box matches that height exactly and the whole thing lines up on the
 *   badge row's baseline. It is deliberately a bordered circle, not a second
 *   rectangular plate: the store badges are the call to action and a matching
 *   plate would compete with them (and a badge-shaped tile next to official
 *   store artwork reads as a third store).
 * - `footer` — a plain text + glyph row matching the footer's other links
 *   (`text-sm hover:text-white transition-colors`).
 *
 * The URL is the clean profile URL on purpose. Instagram's share sheet appends
 * a `?stkn=` share token that is tied to one share event; it must not be baked
 * into the site.
 */

const INSTAGRAM_URL = "https://www.instagram.com/lootscoutcollectibles";

/** Instagram glyph, 24×24 viewBox, one path so it scales cleanly at any size. */
function InstagramGlyph({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.76 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function InstagramLink({ variant = "badge" }: { variant?: "badge" | "footer" }) {
  if (variant === "footer") {
    return (
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LootScout on Instagram"
        className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
      >
        <InstagramGlyph className="h-4 w-4" />
        Instagram
      </a>
    );
  }

  return (
    // p-1.5 mirrors the store-badge wrappers so this button's outer box is the
    // same height as theirs and the row stays optically level.
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LootScout on Instagram"
      className="inline-flex rounded-xl p-1.5 hover:bg-white/10 transition-colors"
    >
      <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white">
        <InstagramGlyph className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
    </a>
  );
}
