// ============================================================================
// Plan ladder shown on the website (home page + /pricing).
// ============================================================================
//
// Mirrors the app's single source of truth:
//   LootScout/lib/subscription/tierRank.ts  (QUOTAS + tierDisplayName)
//   LootScout/components/subscription/UpgradeSheet.tsx  (rows the app lists)
// Ladder as of 2026-11-13: Free / Collector / Shop / Enterprise.
// Internal ids are kept from the app: 'pro' IS Collector, 'pro_shop' IS Shop.
// When the app's quotas change, change the numbers here too.

import type { PaidTierKey } from "./paymentLinks";

export type PlanId = "free" | "pro" | "pro_shop" | "enterprise";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  /** Monthly price, USD. */
  price: string;
  group: "personal" | "shop";
  highlight?: boolean;
  /** Stripe payment link key; absent for Free. */
  paidTier?: PaidTierKey;
}

export const PLANS: readonly Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Everything in the app, at a starter volume",
    price: "$0",
    group: "personal",
  },
  {
    id: "pro",
    name: "Collector",
    tagline: "For active collectors and sellers",
    price: "$14.99",
    group: "personal",
    highlight: true,
    paidTier: "pro",
  },
  {
    id: "pro_shop",
    name: "Shop",
    tagline: "Higher-volume inventory plus shop tools",
    price: "$29",
    group: "shop",
    highlight: true,
    paidTier: "pro_shop",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "No monthly limits",
    price: "$99",
    group: "shop",
    paidTier: "enterprise",
  },
];

export interface ComparisonRow {
  label: string;
  /** Short clarifier shown under the label. */
  note?: string;
  values: Readonly<Record<PlanId, string>>;
}

const NO = "—";
const YES = "Included";
const UNLIMITED = "Unlimited";

const everyPlan = (value: string): Record<PlanId, string> => ({
  free: value,
  pro: value,
  pro_shop: value,
  enterprise: value,
});

export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    label: "Active listings",
    values: { free: "5", pro: "50", pro_shop: "150", enterprise: UNLIMITED },
  },
  {
    label: "Peer trades / month",
    values: { free: "5", pro: "10", pro_shop: "20", enterprise: UNLIMITED },
  },
  { label: "Trade-ins", values: everyPlan(YES) },
  { label: "Price alerts", values: everyPlan(UNLIMITED) },
  { label: "Catalog search", values: everyPlan(UNLIMITED) },
  { label: "Live camera card scanning", values: everyPlan(UNLIMITED) },
  {
    label: "Photo-upload scans / month",
    note: "Uploaded or picked images, including the Desktop Scan Station",
    values: { free: "10", pro: "100", pro_shop: "10,000", enterprise: UNLIMITED },
  },
  {
    label: "CSV imports / month",
    values: { free: "2", pro: "5", pro_shop: "10", enterprise: UNLIMITED },
  },
  {
    label: "Exports / month",
    note: "One monthly allowance shared by every export you run",
    values: { free: "2", pro: "5", pro_shop: "10", enterprise: UNLIMITED },
  },
  {
    label: "AI price insights",
    values: { free: NO, pro: YES, pro_shop: YES, enterprise: YES },
  },
  {
    label: "In-person POS sales",
    values: { free: NO, pro: NO, pro_shop: YES, enterprise: YES },
  },
  {
    label: "Vendor show mode",
    values: { free: NO, pro: NO, pro_shop: YES, enterprise: YES },
  },
  {
    label: "Transaction + eBay / TCGplayer exports",
    values: { free: NO, pro: NO, pro_shop: YES, enterprise: YES },
  },
  {
    label: "Custom default buy rates",
    values: { free: NO, pro: NO, pro_shop: NO, enterprise: "With 100+ listings" },
  },
];

export const PLAN_CHANGE_NOTE =
  "Prices, limits and plan features may change. Monthly allowances reset on the 1st (UTC).";
