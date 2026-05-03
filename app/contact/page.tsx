import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Murray's Auto Body in Westford, MA. Call (978) 692-2471 or request an estimate online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Send us a message about your vehicle and we&apos;ll follow up shortly. For fastest service, call the shop directly.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <iframe
                title="Map of Murray's Auto Body, 147 Concord Rd, Westford, MA"
                src="https://www.google.com/maps?q=147+Concord+Rd+Westford+MA+01886&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-red-600 ring-1 ring-neutral-200">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-neutral-900">Address</h2>
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
                <h2 className="text-sm font-semibold text-neutral-900">Phone</h2>
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
                <h2 className="text-sm font-semibold text-neutral-900">Hours</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Mon&ndash;Fri: 8:00 AM &ndash; 5:00 PM
                  <br />
                  Sat &amp; Sun: Closed
                  <br />
                  <span className="text-xs text-neutral-500">(Hours pending confirmation)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
