import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LootScout - Local Marketplace for Collectibles",
  description:
    "The collectibles marketplace powered by real transaction pricing. Native app with in-app TCG card scanner (single & batch), hybrid catalog search, local trading, and collection-first workflows. Pokemon, Magic, Yu-Gi-Oh, video games, comics, and more.",
  keywords: ["collectibles", "trading cards", "comics", "vinyl", "local marketplace", "buy", "sell"],
  authors: [{ name: "LootScout", url: "https://lootscout.io" }],
  openGraph: {
    title: "LootScout - Local Marketplace for Collectibles",
    description:
      "The collectibles marketplace powered by real transaction pricing. Native app with in-app TCG card scanner (single & batch), hybrid catalog search, local trading, and collection-first workflows. Pokemon, Magic, Yu-Gi-Oh, video games, comics, and more.",
    url: "https://lootscout.io",
    siteName: "LootScout",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LootScout - Local Marketplace for Collectibles",
    description:
      "The collectibles marketplace powered by real transaction pricing. Native app with in-app TCG card scanner (single & batch), hybrid catalog search, local trading, and collection-first workflows. Pokemon, Magic, Yu-Gi-Oh, video games, comics, and more.",
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
