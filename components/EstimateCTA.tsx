import Link from "next/link";
import { Phone } from "lucide-react";

type Props = {
  variant?: "section" | "compact";
  heading?: string;
  body?: string;
};

export default function EstimateCTA({
  variant = "section",
  heading = "Get a free estimate today",
  body = "Send us photos of the damage and we'll follow up with next steps.",
}: Props) {
  if (variant === "compact") {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">{heading}</h3>
            <p className="mt-1 text-sm text-neutral-700">{body}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
          >
            Request an Estimate
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="border-b border-neutral-200 bg-red-600">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm text-red-50">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-base font-semibold text-red-700 shadow-sm hover:bg-red-50 transition-colors"
          >
            Request an Estimate
          </Link>
          <a
            href="tel:+19786922471"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="h-5 w-5" aria-hidden />
            (978) 692-2471
          </a>
        </div>
      </div>
    </section>
  );
}
