import AppReturnPage from "../components/AppReturnPage";

export const metadata = {
  title: "Returning to LootScout",
  robots: { index: false, follow: false },
};

export default function ProfileReturnPage() {
  return (
    <AppReturnPage
      title="All set"
      description="Returning you to LootScout."
      buttonLabel="Open LootScout"
      deepLinkPath="profile"
      variant="success"
    />
  );
}
