import type { Metadata } from "next";
import { getTopic, trackMeta, getUnit, type Track } from "@/lib/curriculum";
import { getPost, getTag } from "@/lib/blog";
import { getYazili, SEASON, SINAVLAR } from "@/lib/yazili";
import { getQuizCount } from "@/lib/sorular";

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

// Google cuts titles at ~600px (≈65 chars) and snippets at ~160 chars.
const TITLE_MAX = 65;
const DESCRIPTION_MAX = 160;

/** "AYT" / "TYT" for exam tracks, "12. Sınıf" for grade tracks. */
function trackTag(track: Track): string {
  const tm = trackMeta(track);
  return tm.kind === "exam" ? tm.shortLabel : tm.label;
}

/**
 * Lesson <title> (before the "| çözümebak" template suffix). Leads with the
 * topic name, then the longest search-intent suffix that still fits — the
 * track tag also keeps same-named lessons (9. sınıf vs TYT) distinct.
 */
export function lessonTitle(slug: string): string {
  const topic = getTopic(slug);
  if (!topic) return "Konu";
  if (topic.seoTitle) return topic.seoTitle;
  const t = topic.title;
  // Avoid "(…) (AYT)" when the title already ends in a parenthetical.
  const tag = t.endsWith(")") ? `– ${trackTag(topic.track)}` : `(${trackTag(topic.track)})`;
  const candidates = [
    `${t} Konu Anlatımı ve Çözümlü Sorular ${tag}`,
    `${t} Konu Anlatımı ${tag}`,
    `${t} ${tag}`,
  ];
  const room = TITLE_MAX - ` | ${SITE_NAME}`.length;
  return candidates.find((c) => c.length <= room) ?? t;
}

/** Meta description: the topic summary plus what the page offers, ≤160 chars. */
export function lessonDescription(slug: string): string {
  const topic = getTopic(slug);
  if (!topic) return "";
  if (topic.seoDescription) return topic.seoDescription;
  const tag = trackTag(topic.track);
  // Manifest count = worked examples + quiz on the page; the bank alone is ~6.
  const n = topic.questionCount ?? getQuizCount(slug);
  const base = (topic.summary ?? `${topic.title} konu anlatımı.`).replace(/\.?\s*$/, ".");
  const tails = n
    ? [`${tag} için ${n} çözümlü soru ve sık yapılan hatalar.`, `${n} çözümlü soru.`]
    : [`${tag} için konu anlatımı ve sık yapılan hatalar.`];
  const tail = tails.find((s) => base.length + 1 + s.length <= DESCRIPTION_MAX);
  return tail ? `${base} ${tail}` : base;
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
  const pageTitle = lessonTitle(slug);
  const title = `${pageTitle} | ${SITE_NAME}`;
  const description = lessonDescription(slug);
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
    title: pageTitle,
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
 * Metadata for a /soru-tipleri/<slug> page. Targets the high-intent
 * "<konu> soru tipleri / tuzaklar" query family, which the lesson pages don't.
 */
export function soruTipleriMetadata(slug: string): Metadata {
  const topic = getTopic(slug);
  if (!topic) {
    return { title: "Soru Tipleri", robots: { index: false, follow: true } };
  }
  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const title =
    tm.kind === "grade"
      ? [
          `${topic.title} Soru Tipleri ve Çözümleri (${tm.label})`,
          `${topic.title} Soru Tipleri (${tm.label})`,
        ].find((c, i, a) => c.length <= TITLE_MAX - ` | ${SITE_NAME}`.length || i === a.length - 1)!
      : `${topic.title} — Soru Tipleri ve Tuzaklar`;
  const description =
    tm.kind === "grade"
      ? `${topic.title} konusunda yazılıda çıkan soru tipleri, adım adım çözüm yöntemleri ve sık yapılan hatalar. ${tm.label} matematik${unit ? " · " + unit.title : ""}.`
      : `${topic.title} konusunda ÖSYM'nin sorduğu soru tipleri, adım adım çözüm yöntemleri ve öğrencilerin düştüğü tuzaklar. ${tm.label}${unit ? " · " + unit.title : ""}.`;
  const url = `/soru-tipleri/${slug}`;
  const ogImage = { url: `/api/og?slug=${slug}`, width: 1200, height: 630, alt: title };

  return {
    title,
    description,
    keywords: [
      `${topic.title} soru tipleri`,
      `${topic.title} tuzaklar`,
      `${topic.title} çeldiriciler`,
      tm.label,
      unit?.title,
    ].filter(Boolean) as string[],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
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
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.description;
  const url = `/blog/${slug}`;
  const isDraft = post.status === "draft";
  const ogImage = {
    url: `/api/og?slug=${slug}&type=blog`,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title,
    description,
    keywords: post.tags,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: url,
      types: { "application/rss+xml": `${SITE_URL}/blog/rss.xml` },
    },
    robots: isDraft ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      title: `${title} | ${SITE_NAME}`,
      description,
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
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/** Metadata for the /yazili-sinavlar hub. */
export function yaziliHubMetadata(): Metadata {
  const title = "Yazılı Sınavlar — Matematik 1. ve 2. Yazılı Konuları";
  const description =
    "9, 10, 11 ve 12. sınıf matematik 1. dönem 1. ve 2. yazılı konuları, sınav tarihleri ve çalışma planı. Her sınıf için Maarif Modeli'ne uygun kapsam, tuzaklar ve çözümlü kaynaklar.";
  const url = "/yazili-sinavlar";
  return {
    title,
    description,
    keywords: [
      "yazılı sınav matematik",
      "1. dönem 1. yazılı konuları",
      "1. dönem 2. yazılı konuları",
      "matematik 2. yazılı",
      "matematik yazılı konuları",
      "birinci yazılı matematik",
      `${SEASON.year} yazılı konuları`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Metadata for a /yazili-sinavlar/<slug> grade page. */
export function yaziliMetadata(slug: string): Metadata {
  const y = getYazili(slug);
  if (!y) {
    return { title: "Yazılı Sınav", robots: { index: false, follow: true } };
  }
  const sinav = SINAVLAR[y.sinav ?? 1];
  const no = y.sinav ?? 1;
  const title = `${y.gradeLabel} Matematik ${sinav.term} Konuları`;
  const description = `${y.gradeLabel} matematik ${no}. yazılı konuları (${y.tema}), sınav tarihi, nasıl sorulur, sık yapılan hatalar ve ${sinav.planSure} çalışma planı. ${SEASON.year}${y.grade === "12" ? "" : " Maarif Modeli'ne uygun"}.`;
  const url = `/yazili-sinavlar/${slug}`;
  return {
    title,
    description,
    keywords: [
      `${y.gradeLabel} matematik ${no}. yazılı`,
      `${y.gradeLabel} matematik ${no}. yazılı konuları`,
      `${y.gradeLabel} 1. dönem ${no}. yazılı`,
      `${y.gradeLabel} matematik yazılı`,
      y.tema,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
    },
    twitter: { card: "summary_large_image", title, description },
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
