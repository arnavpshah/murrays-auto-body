import Link from "next/link";
import { Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900">
          <span className="inline-block h-3 w-3 rounded-sm bg-red-600" aria-hidden />
          <span className="text-base sm:text-lg tracking-tight">Murray&apos;s Auto Body</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-red-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+19786922471"
          className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">(978) 692-2471</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
