import AppReturnPage from "../components/AppReturnPage";

/**
 * Supabase password-reset link target.
 *
 * Happy path: Universal Links / App Links intercept this URL before the
 * browser loads it, opening the LootScout app at app/password-reset.tsx
 * with the recovery token in hand.
 *
 * Fallback (this page is rendered): user does not have the app installed,
 * or the OS didn't intercept the link for some reason. We auto-attempt
 * lootscout://password-reset with the URL fragment forwarded so the app
 * still receives the access_token / refresh_token / type=recovery params.
 */
export const metadata = {
  title: "Reset your password — LootScout",
  robots: { index: false, follow: false },
};

export default function PasswordResetPage() {
  return (
    <AppReturnPage
      title="Reset your password"
      description="We're opening LootScout to finish resetting your password. If the app doesn't open, install it from the App Store or Play Store and tap the link again."
      buttonLabel="Open LootScout"
      deepLinkPath="password-reset"
      forwardQuery
      forwardHash
      variant="info"
    />
  );
}
