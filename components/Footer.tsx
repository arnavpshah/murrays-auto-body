import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-600" aria-hidden />
            <span className="text-base font-semibold text-neutral-900">Murray&apos;s Auto Body</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600">
            Trusted collision and auto body repair serving Westford, MA and surrounding towns.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Visit</h3>
          <address className="mt-3 not-italic text-sm leading-relaxed text-neutral-600">
            147 Concord Rd
            <br />
            Westford, MA 01886
            <br />
            <a href="tel:+19786922471" className="hover:text-red-600">(978) 692-2471</a>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Site</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><Link href="/" className="hover:text-red-600">Home</Link></li>
            <li><Link href="/services" className="hover:text-red-600">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-red-600">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-red-600">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} Murray&apos;s Auto Body. All rights reserved.
      </div>
    </footer>
  );
}
