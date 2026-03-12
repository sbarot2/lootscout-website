import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund", label: "Refund Policy" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-white font-semibold text-lg">
              <img src="/logo.svg" alt="LootScout" className="h-8 w-8" />
              LootScout
            </Link>
            <p className="mt-3 text-sm max-w-sm">
              Local marketplace for trading cards, comics, vinyl, and collectibles. Connect with buyers and sellers in your area.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Customer Service</h3>
            <p className="text-sm">
              <a href="mailto:support@lootscout.io" className="hover:text-white transition-colors">
                support@lootscout.io
              </a>
            </p>
            <p className="text-sm mt-1">Raleigh, NC</p>
            <p className="text-sm mt-1 text-slate-400">Response within 24 hours</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2025 LootScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
