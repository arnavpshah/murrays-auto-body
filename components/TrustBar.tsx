import { MapPin, Wrench, Shield, Clock } from "lucide-react";

const ITEMS = [
  { icon: MapPin, label: "Local Shop" },
  { icon: Wrench, label: "Collision Repair" },
  { icon: Shield, label: "Insurance Assistance" },
  { icon: Clock, label: "Fast Turnaround" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-red-600 ring-1 ring-neutral-200">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-medium text-neutral-800">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
