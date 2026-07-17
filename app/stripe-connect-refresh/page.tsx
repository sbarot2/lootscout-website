import AppReturnPage from "../components/AppReturnPage";

export const metadata = {
  title: "Resume Stripe setup — LootScout",
  robots: { index: false, follow: false },
};

// Stripe hits refresh_url when an onboarding link expires or the user
// backs out before finishing. We bounce them straight back into the app,
// which re-invokes create-connect-account for a fresh onboarding link.
export default function StripeConnectRefreshPage() {
  return (
    <AppReturnPage
      title="Let's pick up where you left off"
      description="Your Stripe setup link expired. We're opening LootScout so you can resume connecting card payments."
      buttonLabel="Open LootScout"
      deepLinkPath="stripe-connect-refresh"
      variant="info"
    />
  );
}
