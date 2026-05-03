import { SERVICES } from "@/lib/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-base text-neutral-600">
            Quality repair work backed by experience and the right tools for every job.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.slug}`}
              icon={service.icon}
              title={service.title}
              description={service.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
