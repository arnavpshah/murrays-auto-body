import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationContact() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Visit the Shop</h2>
          <p className="mt-3 text-base text-neutral-600">
            Easy to find on Concord Rd in Westford. Call ahead or stop by for an estimate.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <iframe
              title="Map of Murray's Auto Body, 147 Concord Rd, Westford, MA"
              src="https://www.google.com/maps?q=147+Concord+Rd+Westford+MA+01886&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full md:h-full"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-red-600 ring-1 ring-neutral-200">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">Address</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  147 Concord Rd
                  <br />
                  Westford, MA 01886
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-red-600 ring-1 ring-neutral-200">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">Phone</h3>
                <a href="tel:+19786922471" className="mt-1 block text-sm text-neutral-600 hover:text-red-600">
                  (978) 692-2471
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-red-600 ring-1 ring-neutral-200">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">Hours</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Mon&ndash;Fri: 8:00 AM &ndash; 5:00 PM
                  <br />
                  Sat &amp; Sun: Closed
                  <br />
                  <span className="text-xs text-neutral-500">(Hours pending confirmation)</span>
                </p>
              </div>
            </div>

            <a
              href="tel:+19786922471"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call (978) 692-2471
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
