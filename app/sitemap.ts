import type { MetadataRoute } from "next";
import { TRACKS, publishedTopics, soonTopics } from "@/lib/curriculum";
import { SITE_URL } from "@/lib/seo";

// Manifest-derived sitemap. Published lessons get a high priority; "soon" stubs
// are included at low priority so crawlers discover the URL structure (their
// pages carry robots: noindex until content lands). lastModified comes from the
// topic's `updated` field when set, otherwise the build date — so every
// redeploy refreshes the freshness signal.
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: buildDate, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/konular`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.9 },
    ...TRACKS.map((t) => ({
      url: `${SITE_URL}${t.route}`,
      lastModified: buildDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const corporate: MetadataRoute.Sitemap = [
    "/hakkimizda",
    "/iletisim",
    "/gizlilik",
    "/sss",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: buildDate,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  const published = publishedTopics().map((t) => ({
    url: `${SITE_URL}/konular/${t.slug}`,
    lastModified: t.updated ? new Date(t.updated) : buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const soon = soonTopics().map((t) => ({
    url: `${SITE_URL}/konular/${t.slug}`,
    lastModified: t.updated ? new Date(t.updated) : buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.2,
  }));

  return [...staticRoutes, ...corporate, ...published, ...soon];
}
