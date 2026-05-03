import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Collision repair, dent repair, paint matching, frame repair, scratch removal, and insurance claims assistance in Westford, MA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-base text-neutral-600">
            From small dents to full collision repair, Murray&apos;s Auto Body handles it with care.
            Below are the services we offer at our Westford shop.
          </p>
        </div>
      </section>

      <ServicesGrid />

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Need an estimate?
          </h2>
          <p className="mt-2 text-base text-neutral-600">
            Give us a call or send a message and we&apos;ll get right back to you.
          </p>
          <a
            href="tel:+19786922471"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call (978) 692-2471
          </a>
        </div>
      </section>
    </>
  );
}
