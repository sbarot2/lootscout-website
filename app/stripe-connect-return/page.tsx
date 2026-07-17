import AppReturnPage from "../components/AppReturnPage";

export const metadata = {
  title: "Stripe setup complete — LootScout",
  robots: { index: false, follow: false },
};

export default function StripeConnectReturnPage() {
  return (
    <AppReturnPage
      title="Stripe setup complete"
      description="Thanks for connecting Stripe. We're opening LootScout to finish enabling card payments for your shop."
      buttonLabel="Open LootScout"
      deepLinkPath="stripe-connect-return"
      variant="success"
    />
  );
}
