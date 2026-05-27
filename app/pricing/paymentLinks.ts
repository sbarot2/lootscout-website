// ============================================================================
// Stripe Payment Link URLs — one per paid tier (Stripe live mode)
// ============================================================================
//
// To populate:
//   1. Stripe Dashboard → Payment Links → New
//   2. Product: pick the LootScout product matching the tier
//      (Plus, Pro, Pro Shop, Enterprise)
//   3. Price: pick the recurring monthly price matching
//      STRIPE_PRICE_ID_* in Supabase secrets
//   4. After Payment → Don't show confirmation page → Redirect to
//      https://lootscout.io/subscription-success?session_id={CHECKOUT_SESSION_ID}
//   5. Confirmation email: enabled
//   6. (Optional) Limit: leave unlimited
//   7. Save → copy the URL → paste below
//
// The stripe-webhook auto-links the resulting subscription to the LootScout
// profile by matching customer email → auth.users.email. Users should be
// instructed to checkout with the same email they use in the app.
//
// Leaving an entry as an empty string hides that tier's "Subscribe" button on
// the pricing page (falls back to "Email support" CTA for that tier only).

export const paymentLinks = {
  plus: '',
  pro: '',
  pro_shop: '',
  enterprise: '',
} as const;

export type PaidTierKey = keyof typeof paymentLinks;
