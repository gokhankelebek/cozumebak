import type { Metadata } from "next";
import { getTopic, trackMeta, getUnit, type Track } from "@/lib/curriculum";
import { getPost, getTag } from "@/lib/blog";

export const SITE_URL = "https://cozumebak.com";
export const SITE_NAME = "çözümebak";

/** Metadata for a track (grade/exam) listing page, from the manifest. */
export function trackMetadata(track: Track): Metadata {
  const tm = trackMeta(track);
  const title = `${tm.label} Konuları`;
  const url = tm.route;
  return {
    title,
    description: tm.blurb,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description: tm.blurb,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
    },
  };
}

/**
 * Per-topic metadata, derived from the manifest. Author writes one line in MDX:
 *   export const metadata = topicMetadata("turevin-tanimi");
 */
export function topicMetadata(slug: string): Metadata {
  const topic = getTopic(slug);
  if (!topic) {
    return { title: "Konu", robots: { index: false, follow: true } };
  }
  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const title = `${topic.title} — ${tm.label}`;
  const description =
    topic.summary ??
    `${topic.title} konu anlatımı ve adım adım çözümlü sorular. ${tm.label}${unit ? " · " + unit.title : ""}.`;
  const url = `/konular/${slug}`;
  const isSoon = topic.status === "soon";
  // Distinct per-topic share card, generated on the fly by app/api/og.
  const ogImage = {
    url: `/api/og?slug=${slug}`,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title: topic.title,
    description,
    keywords: [topic.title, tm.label, unit?.title, ...(topic.keywords ?? [])].filter(
      Boolean,
    ) as string[],
    alternates: { canonical: url },
    robots: isSoon ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/**
 * Per-post metadata, derived from the blog manifest. Author writes one line:
 *   export const metadata = postMetadata("maarif-modeli-matematik-mufredati");
 */
export function postMetadata(slug: string): Metadata {
  const post = getPost(slug);
  if (!post) {
    return { title: "Yazı", robots: { index: false, follow: true } };
  }
  const url = `/blog/${slug}`;
  const isDraft = post.status === "draft";
  const ogImage = {
    url: `/api/og?slug=${slug}&type=blog`,
    width: 1200,
    height: 630,
    alt: post.title,
  };

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: url,
      types: { "application/rss+xml": `${SITE_URL}/blog/rss.xml` },
    },
    robots: isDraft ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [SITE_NAME],
      tags: post.tags,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage.url],
    },
  };
}

/** Metadata for a blog tag listing page. */
export function tagMetadata(tagSlug: string): Metadata {
  const tag = getTag(tagSlug);
  const label = tag?.label ?? tagSlug;
  const title = `${label} yazıları`;
  const description = `${label} etiketli tüm çözümebak blog yazıları.`;
  const url = `/blog/etiket/${tagSlug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
    },
  };
}
