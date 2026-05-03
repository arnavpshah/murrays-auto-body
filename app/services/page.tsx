import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import EstimateCTA from "@/components/EstimateCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Collision repair, dent repair, paint matching, frame repair, scratch removal, and insurance claims assistance at Murray's Auto Body in Westford, MA.",
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
            Click a service to learn more about the process and what&apos;s included.
          </p>
        </div>
      </section>

      <ServicesGrid />

      <EstimateCTA />
    </>
  );
}
