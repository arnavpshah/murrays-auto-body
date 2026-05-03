import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/";
const INSTAGRAM_URL = "https://www.instagram.com/";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.8V14h2.7v8h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-600" aria-hidden />
            <span className="text-base font-semibold text-neutral-900">Murray&apos;s Auto Body</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-neutral-600">
            Trusted collision and auto body repair serving Westford, MA and the surrounding towns.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Murray's Auto Body on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:text-red-600 hover:border-red-200 transition-colors"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Murray's Auto Body on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:text-red-600 hover:border-red-200 transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
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
            <li><Link href="/about" className="hover:text-red-600">About</Link></li>
            <li><Link href="/faq" className="hover:text-red-600">FAQ</Link></li>
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
