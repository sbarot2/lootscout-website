import AppReturnPage from "../components/AppReturnPage";

export const metadata = {
  title: "Checkout canceled — LootScout",
  robots: { index: false, follow: false },
};

export default function SubscriptionCancelPage() {
  return (
    <AppReturnPage
      title="Checkout canceled"
      description="No charges were made. You can pick a plan any time from your Profile."
      buttonLabel="Back to LootScout"
      deepLinkPath="subscription-cancel"
      variant="info"
    />
  );
}
