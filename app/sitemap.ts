import type { MetadataRoute } from "next";

const SITE_URL = "https://www.murraysautobody.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, priority: 0.8 },
  ];
}
