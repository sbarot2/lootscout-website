import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LootScout - Local Marketplace for Collectibles",
  description:
    "Buy and sell trading cards, comics, vinyl records, and collectibles locally. Connect with collectors and shops in your area.",
  keywords: ["collectibles", "trading cards", "comics", "vinyl", "local marketplace", "buy", "sell"],
  authors: [{ name: "LootScout", url: "https://lootscout.io" }],
  openGraph: {
    title: "LootScout - Local Marketplace for Collectibles",
    description:
      "Buy and sell trading cards, comics, vinyl records, and collectibles locally. Connect with collectors and shops in your area.",
    url: "https://lootscout.io",
    siteName: "LootScout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LootScout - Local Marketplace for Collectibles",
    description: "Buy and sell trading cards, comics, vinyl, and collectibles locally.",
  },
  robots: "index, follow",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
