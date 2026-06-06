// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD builders. Each returns a plain object that JsonLd renders into a
// <script type="application/ld+json"> tag. All data is app-controlled (derived
// from the curriculum manifest), never user input.
// ─────────────────────────────────────────────────────────────────────────────
import { getTopic, getUnit, trackMeta, breadcrumb } from "@/lib/curriculum";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/** Stable @id for the site's Organization node, referenced by other nodes. */
const ORG_ID = `${SITE_URL}/#organization`;

/** Organization — brand identity, logo. Rendered once site-wide. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: abs("/logo-mark.svg"),
    description:
      "9-12. sınıf, TYT ve AYT matematiği: konu anlatımları ve adım adım çözümlü sorular.",
  };
}

/** WebSite + SearchAction → enables the sitelinks search box in Google. */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "tr-TR",
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/ara?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** BreadcrumbList for a lesson, derived from the existing breadcrumb() helper. */
export function breadcrumbLd(slug: string) {
  const crumbs = breadcrumb(slug);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      // Keep anchors so each crumb resolves to a distinct URL (the unit crumb
      // points to /<track>#<unit>); omit item on the last (current) crumb.
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };
}

/** LearningResource for a published lesson. Returns null for "soon" stubs. */
export function learningResourceLd(slug: string) {
  const topic = getTopic(slug);
  if (!topic || topic.status !== "published") return null;
  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const url = abs(`/konular/${slug}`);
  const description =
    topic.summary ??
    `${topic.title} konu anlatımı ve adım adım çözümlü sorular. ${tm.label}${unit ? " · " + unit.title : ""}.`;

  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": url,
    name: topic.title,
    description,
    url,
    inLanguage: "tr-TR",
    learningResourceType: "Konu anlatımı",
    educationalLevel: tm.label,
    educationalUse: "Konu anlatımı, sınava hazırlık",
    teaches: topic.title,
    ...(unit ? { about: unit.title } : {}),
    isAccessibleForFree: true,
    inDefinedTermSet: "MEB Matematik Müfredatı",
    provider: { "@id": ORG_ID },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage for the /sss page → eligible for FAQ rich results. */
export function faqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}
