import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://murrays-auto-body.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, priority: 0.8 },
  ];
  const services = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    priority: 0.7,
  }));
  return [...base, ...services];
}
