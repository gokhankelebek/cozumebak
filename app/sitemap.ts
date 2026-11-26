import type { MetadataRoute } from "next";
import { TRACKS, publishedTopics, soonTopics } from "@/lib/curriculum";
import { publishedPosts, allTagsWithCounts } from "@/lib/blog";
import { coveredTopics } from "@/lib/soru-tipleri";
import { yaziliSlugs } from "@/lib/yazili";
import { SITE_URL } from "@/lib/seo";
import LASTMOD from "@/lib/lastmod.json";

// Manifest-derived sitemap. Published lessons get a high priority; "soon" stubs
// are included at low priority so crawlers discover the URL structure (their
// pages carry robots: noindex until content lands). lastModified is the date
// the page's own sources last changed (lib/lastmod.json, written by
// `npm run lastmod`), or the topic's `updated` field when that is later. Only
// pages missing from that file (new ones) and the hubs fall back to the build
// date: a lastmod that is "today" on every deploy gets ignored by Google.
const lastmod = LASTMOD as Record<string, string>;
function changed(path: string, fallback: Date, updated?: string): Date {
  const d = [lastmod[path], updated].filter(Boolean).sort().at(-1);
  return d ? new Date(d) : fallback;
}

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

  const tools: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/yks-puan-hesaplama`, lastModified: changed("/yks-puan-hesaplama", buildDate), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tercih-robotu`, lastModified: changed("/tercih-robotu", buildDate), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/hedef-net`, lastModified: changed("/hedef-net", buildDate), changeFrequency: "monthly", priority: 0.8 },
  ];

  const corporate: MetadataRoute.Sitemap = [
    "/hakkimizda",
    "/iletisim",
    "/gizlilik",
    "/sss",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: changed(path, buildDate),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  const blogIndex: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogPosts = publishedPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogTags = allTagsWithCounts().map(({ tag }) => ({
    url: `${SITE_URL}/blog/etiket/${tag.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.3,
  }));

  const published = publishedTopics().map((t) => ({
    url: `${SITE_URL}/konular/${t.slug}`,
    lastModified: changed(`/konular/${t.slug}`, buildDate, t.updated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const soon = soonTopics().map((t) => ({
    url: `${SITE_URL}/konular/${t.slug}`,
    lastModified: changed(`/konular/${t.slug}`, buildDate, t.updated),
    changeFrequency: "monthly" as const,
    priority: 0.2,
  }));

  // Soru-tipleri hub + one page per topic that has a knowledge base.
  const soruTipleriIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/soru-tipleri`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
  const soruTipleri = coveredTopics().map((slug) => ({
    url: `${SITE_URL}/soru-tipleri/${slug}`,
    lastModified: changed(`/soru-tipleri/${slug}`, buildDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Yazılı sınavlar hub + one page per grade. Seasonal, high-intent queries
  // ("9. sınıf matematik 1. yazılı konuları") — weekly during exam season.
  const yaziliIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/yazili-sinavlar`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
  const yazili = yaziliSlugs().map((slug) => ({
    url: `${SITE_URL}/yazili-sinavlar/${slug}`,
    lastModified: changed("/yazili-sinavlar", buildDate),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...tools,
    ...corporate,
    ...blogIndex,
    ...blogPosts,
    ...blogTags,
    ...published,
    ...soon,
    ...soruTipleriIndex,
    ...soruTipleri,
    ...yaziliIndex,
    ...yazili,
  ];
}
