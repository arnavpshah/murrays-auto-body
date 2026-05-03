import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import GalleryGrid from "@/components/GalleryGrid";
import LocationContact from "@/components/LocationContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Before &amp; After</h2>
              <p className="mt-3 text-base text-neutral-600">
                A few examples of recent collision and paint repair work.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <LocationContact />
    </>
  );
}
