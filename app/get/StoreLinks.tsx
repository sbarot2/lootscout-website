"use client";

import { useEffect, useState } from "react";

import StoreBadge from "../components/StoreBadge";

const IOS_URL = "https://apps.apple.com/us/app/lootscout-collectibles/id6765471016";
const ANDROID_BASE_URL = "https://play.google.com/store/apps/details?id=com.lootscout.app";
/** Organic / untracked link — unchanged from before UTM forwarding existed. */
const ANDROID_URL = `${ANDROID_BASE_URL}&pcampaignid=web_share`;

/**
 * Campaign params Google Play surfaces in Play Console → Acquisition reports
 * when they arrive inside the install-referrer string.
 */
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/**
 * Builds the Google Play URL for the current visit.
 *
 * When the page was opened with utm_* params (paid traffic), they are forwarded
 * through Play's install-referrer mechanism: `&referrer=<url-encoded utm string>`.
 * Play decodes that once and reports the UTMs as the install source instead of
 * bucketing the install as Organic.
 *
 * `pcampaignid=web_share` is dropped on tracked links: it is Google's own
 * generic "shared from the web" tag, carries no campaign information, and only
 * muddies the acquisition channel once a real referrer is present. Untracked
 * visits keep it so organic behaviour is byte-identical to before.
 */
export function buildAndroidUrl(search: string): string {
  const params = new URLSearchParams(search);
  const pairs: string[] = [];

  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (value) {
      pairs.push(`${key}=${value}`);
    }
  }

  if (pairs.length === 0) {
    return ANDROID_URL;
  }

  // Single encode of the whole "a=1&b=2" string — Play decodes it exactly once.
  return `${ANDROID_BASE_URL}&referrer=${encodeURIComponent(pairs.join("&"))}`;
}

type Platform = "ios" | "android" | null;

interface StoreLink {
  key: Exclude<Platform, null>;
  href: string;
  /** Which official badge fronts this link. Both render at the same height. */
  store: "app-store" | "google-play";
}

function buildLinks(androidHref: string): StoreLink[] {
  return [
    { key: "ios", href: IOS_URL, store: "app-store" },
    { key: "android", href: androidHref, store: "google-play" },
  ];
}

/**
 * Both store links are always rendered — a /get link is often opened on
 * desktop (QR code, link in bio). Detection only reorders and highlights the
 * link matching the visitor's device; it never redirects or hides a platform.
 *
 * Platform detection and UTM forwarding both run in an effect (rather than
 * from `useSearchParams`) so this route stays statically rendered and needs no
 * Suspense boundary; the server HTML is always the plain organic markup.
 */
export default function StoreLinks() {
  const [platform, setPlatform] = useState<Platform>(null);
  const [androidHref, setAndroidHref] = useState<string>(ANDROID_URL);

  useEffect(() => {
    const ua = typeof navigator === "undefined" ? "" : navigator.userAgent;
    if (/android/i.test(ua)) {
      setPlatform("android");
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      setPlatform("ios");
    }

    if (typeof window !== "undefined") {
      setAndroidHref(buildAndroidUrl(window.location.search));
    }
  }, []);

  const links = buildLinks(androidHref);
  const ordered = platform ? [...links].sort((a) => (a.key === platform ? -1 : 1)) : links;

  return (
    // gap-4 plus each link's p-1.5 keeps well clear of the 10%-of-badge-height
    // clear space both stores require around their artwork.
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      {ordered.map((link) => {
        const isMatch = platform === link.key;
        return (
          // The device-match highlight rides on the wrapper, never on the badge:
          // the artwork itself takes no ring, tint, or transform.
          <a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isMatch
                ? "inline-flex rounded-xl p-1.5 ring-2 ring-white/70 bg-white/10 transition-colors"
                : "inline-flex rounded-xl p-1.5 hover:bg-white/10 transition-colors"
            }
          >
            <StoreBadge store={link.store} />
          </a>
        );
      })}
    </div>
  );
}
