import Link from "next/link";

export default function SitePageHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-primary-600 transition-colors">
          <img src="/logo.svg" alt="" className="h-8 w-8" width={32} height={32} aria-hidden />
          LootScout
        </Link>
        <nav className="flex flex-wrap gap-6 text-sm font-medium" aria-label="Site">
          <Link href="/" className="text-slate-600 hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-slate-600 hover:text-primary-600 transition-colors">
            Features &amp; guides
          </Link>
          <Link href="/faq" className="text-slate-600 hover:text-primary-600 transition-colors">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
