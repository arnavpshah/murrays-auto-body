import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before-and-after photos of collision repair, dent removal, and paint work completed at Murray's Auto Body in Westford, MA.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Before &amp; After</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600">
          Every car that comes through the shop is a chance to make something right. Here are a few examples of recent
          collision, dent, and paint work.
        </p>

        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
