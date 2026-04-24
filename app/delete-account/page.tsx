import Link from "next/link";

export const metadata = {
  title: "Delete account — LootScout",
  description: "How to delete your LootScout account from the mobile app.",
  alternates: {
    canonical: "https://lootscout.io/delete-account",
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link href="/" className="text-primary-600 font-semibold hover:underline">
            ← Back to LootScout
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Delete account</h1>
        <p className="mt-6 text-lg text-slate-700 leading-relaxed">
          To delete your account, open the LootScout app → Profile → Delete Account
        </p>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-primary-600 font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
