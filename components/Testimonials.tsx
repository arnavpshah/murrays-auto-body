import { Star, ExternalLink } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Murray's took care of everything after I got rear-ended. They handled the insurance company directly and my car looked like new when it came back.",
    name: "Sarah M.",
    detail: "Westford, MA",
  },
  {
    quote:
      "Honest people. They told me a small dent could be polished out instead of pushing me into a full repaint. Saved me a few hundred bucks.",
    name: "Dave K.",
    detail: "Chelmsford, MA",
  },
  {
    quote:
      "Best body shop in the area. Quick turnaround on a fender repair and the paint match is perfect.",
    name: "Lisa R.",
    detail: "Acton, MA",
  },
];

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=Murray%27s+Auto+Body+Westford+MA+reviews";
const YELP_REVIEW_URL =
  "https://www.yelp.com/search?find_desc=Murray%27s+Auto+Body&find_loc=Westford%2C+MA";

export default function Testimonials() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            What customers say
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Real feedback from drivers in Westford and the surrounding towns.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-red-600">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 grow text-sm leading-relaxed text-neutral-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-neutral-100 pt-4 text-sm">
                <span className="font-semibold text-neutral-900">{t.name}</span>
                <span className="text-neutral-500"> &middot; {t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <span className="text-sm font-medium text-neutral-700">Read more reviews:</span>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:border-neutral-400 transition-colors"
          >
            Google Reviews
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={YELP_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:border-neutral-400 transition-colors"
          >
            Yelp
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
