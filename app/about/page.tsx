import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Award, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Murray's Auto Body has served Westford, MA and surrounding towns with honest collision repair and quality bodywork for years.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Award,
    title: "Quality without shortcuts",
    body: "Every repair is done to manufacturer specs with proper materials and proper time.",
  },
  {
    icon: Users,
    title: "Honest with our customers",
    body: "If a polish will do the job, we say so. If a panel needs to be replaced, we explain why.",
  },
  {
    icon: Heart,
    title: "Local and community-rooted",
    body: "We live in the towns we serve and stand behind our work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            About Murray&apos;s Auto Body
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-700">
            Murray&apos;s Auto Body has been repairing vehicles for the Westford community for years.
            What started as a small local shop on Concord Rd is still locally owned and locally
            operated &mdash; and that&apos;s the way we like it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            From minor dents and scratches to major collision and frame repair, every vehicle that
            comes through our shop gets the same attention to detail. Our reputation is built on
            quality work and treating customers the way we&apos;d want to be treated.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Our Team</h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-700">
            Our technicians have decades of combined experience in collision repair, refinishing,
            and frame work on domestic and import vehicles. We work directly with all major
            insurance carriers and stand behind our workmanship.
          </p>
          <p className="mt-4 max-w-2xl text-sm italic text-neutral-500">
            (Add team bios and photos here. Even short blurbs help customers connect with the
            people working on their car.)
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">In the Community</h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-700">
            We&apos;re proud to be part of Westford. Over the years we&apos;ve worked with local
            schools, sports teams, and neighbors on projects big and small &mdash; because doing
            right by your community is just good business.
          </p>
          <p className="mt-4 max-w-2xl text-sm italic text-neutral-500">
            (Customize this section with specific sponsorships, partnerships, or community
            involvement.)
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Ready to talk to us?
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Stop by the shop or send us a message about your vehicle.
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
    </>
  );
}
