import { Car, Hammer, Paintbrush, Wrench, Sparkles, FileText } from "lucide-react";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    icon: Car,
    title: "Collision Repair",
    description: "Full-service collision repair to restore your vehicle to pre-accident condition.",
  },
  {
    icon: Hammer,
    title: "Dent Repair",
    description: "Precise dent removal that preserves your factory paint whenever possible.",
  },
  {
    icon: Paintbrush,
    title: "Paint Matching",
    description: "Computerized paint matching for a seamless, factory-quality finish.",
  },
  {
    icon: Wrench,
    title: "Frame Repair",
    description: "Computer-measured frame straightening to manufacturer specifications.",
  },
  {
    icon: Sparkles,
    title: "Scratch Removal",
    description: "Buff out scuffs and scratches and restore the original shine of your finish.",
  },
  {
    icon: FileText,
    title: "Insurance Claims Assistance",
    description: "We work directly with your insurance company to make the process easy.",
  },
];

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
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
