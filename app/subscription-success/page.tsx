import AppReturnPage from "../components/AppReturnPage";

export const metadata = {
  title: "Subscription confirmed — LootScout",
  robots: { index: false, follow: false },
};

export default function SubscriptionSuccessPage() {
  return (
    <AppReturnPage
      title="Subscription confirmed"
      description="Thanks for subscribing. We're opening LootScout to finish setting up your plan."
      buttonLabel="Open LootScout"
      deepLinkPath="subscription-success"
      forwardQuery
      variant="success"
    />
  );
}
