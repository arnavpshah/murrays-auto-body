import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about collision repair, insurance claims, repair timelines, and warranties at Murray's Auto Body in Westford, MA.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-neutral-600">
            Quick answers about collision repair, insurance, and what to expect when you bring your
            vehicle to Murray&apos;s Auto Body.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-neutral-900 marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-red-600 transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-base font-semibold text-neutral-900">
              Don&apos;t see your question?
            </h2>
            <p className="mt-1 text-sm text-neutral-700">
              Give us a call or send a message and we&apos;ll get right back to you.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                Request an Estimate
              </Link>
              <a
                href="tel:+19786922471"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:border-neutral-400 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden />
                (978) 692-2471
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
