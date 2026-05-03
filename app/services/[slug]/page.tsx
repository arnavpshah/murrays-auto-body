import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <article>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <Link href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">{service.title}</h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">{service.hero}</p>
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
              Call (978) 692-2471
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Process</h2>
          <ol className="mt-8 space-y-6">
            {service.process.map((step, idx) => (
              <li key={step.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{step.step}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-4xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Why It Matters</h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Expertise</h2>
            <p className="mt-6 text-sm leading-relaxed text-neutral-700">{service.expertise}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Ready to get started?</h2>
          <p className="mt-3 text-base text-neutral-600">
            Send us a message with photos of the damage or call the shop directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
              Call (978) 692-2471
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
