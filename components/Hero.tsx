import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
            Westford, MA
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Murray&apos;s Auto Body — Trusted Collision Repair in Westford
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Serving the Westford community with professional auto body and collision repair services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              Request an Estimate
            </Link>
            <a
              href="tel:+19786922471"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-base font-semibold text-neutral-900 shadow-sm hover:border-neutral-400 transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=147+Concord+Rd+Westford+MA+01886"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-base font-semibold text-neutral-900 shadow-sm hover:border-neutral-400 transition-colors"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              Directions
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
              </svg>
            </div>
            <p className="text-lg font-semibold">Auto Body & Collision Repair</p>
            <p className="mt-1 text-sm text-neutral-300">Replace with your shop photo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
