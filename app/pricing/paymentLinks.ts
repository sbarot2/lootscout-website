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
  plus: 'https://buy.stripe.com/eVqeVfctb0gRaWz1xf2Nq00',
  pro: 'https://buy.stripe.com/7sY14p78RgfP9Svfo52Nq03',
  pro_shop: 'https://buy.stripe.com/dRmaEZbp7aVvc0Da3L2Nq04',
  enterprise: 'https://buy.stripe.com/28E3cx78RaVvaWz0tb2Nq05',
} as const;

export type PaidTierKey = keyof typeof paymentLinks;
https://lootscout.io/subscription-success?session_id={CHECKOUT_SESSION_ID}