import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}
