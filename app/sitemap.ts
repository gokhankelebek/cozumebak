import type { MetadataRoute } from "next";
import { TRACKS, publishedTopics, soonTopics } from "@/lib/curriculum";
import { SITE_URL } from "@/lib/seo";

// Manifest-derived sitemap. Published lessons get a high priority; "soon" stubs
// are included at low priority so crawlers discover the URL structure (their
// pages carry robots: noindex until content lands).
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/konular`, changeFrequency: "weekly", priority: 0.9 },
    ...TRACKS.map((t) => ({
      url: `${SITE_URL}${t.route}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const published = publishedTopics().map((t) => ({
    url: `${SITE_URL}/konular/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const soon = soonTopics().map((t) => ({
    url: `${SITE_URL}/konular/${t.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.2,
  }));

  return [...staticRoutes, ...published, ...soon];
}
