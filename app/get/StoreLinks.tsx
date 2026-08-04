"use client";

import { useEffect, useState } from "react";

const IOS_URL = "https://apps.apple.com/us/app/lootscout-collectibles/id6765471016";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.lootscout.app&pcampaignid=web_share";

type Platform = "ios" | "android" | null;

interface StoreLink {
  key: Exclude<Platform, null>;
  href: string;
  label: string;
  icon: string;
  ariaLabel: string;
}

const links: StoreLink[] = [
  {
    key: "ios",
    href: IOS_URL,
    label: "Download (iOS)",
    icon: "\u{1F34E}",
    ariaLabel: "Download LootScout for iOS on the App Store",
  },
  {
    key: "android",
    href: ANDROID_URL,
    label: "Download (Android)",
    icon: "▶",
    ariaLabel: "Download LootScout for Android on Google Play",
  },
];

/**
 * Both store links are always rendered — a /get link is often opened on
 * desktop (QR code, link in bio). Detection only reorders and highlights the
 * link matching the visitor's device; it never redirects or hides a platform.
 */
export default function StoreLinks() {
  const [platform, setPlatform] = useState<Platform>(null);

  useEffect(() => {
    const ua = typeof navigator === "undefined" ? "" : navigator.userAgent;
    if (/android/i.test(ua)) {
      setPlatform("android");
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      setPlatform("ios");
    }
  }, []);

  const ordered = platform ? [...links].sort((a) => (a.key === platform ? -1 : 1)) : links;

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
      {ordered.map((link) => {
        const isMatch = platform === link.key;
        return (
          <a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className={
              isMatch
                ? "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg ring-2 ring-white/70 shadow-lg hover:bg-primary-50 transition-colors"
                : "inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            }
          >
            <span className="text-2xl" aria-hidden>
              {link.icon}
            </span>
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
