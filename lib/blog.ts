// ─────────────────────────────────────────────────────────────────────────────
// çözümebak — BLOG MANIFEST (single source of truth)
//
// Index, tag pages, breadcrumbs, prev/next, sitemap, RSS, cross-links and meta
// all derive from this ONE file. To add a post:
//   1. add a BlogPost entry below (status: "published"),
//   2. drop app/blog/<slug>/page.mdx with <BlogPost slug="<slug>"/> at the top
//      and <BlogPostFooter slug="<slug>"/> at the bottom.
// Everything else (card, breadcrumb, prev/next, tags, sitemap, RSS) is automatic.
// ─────────────────────────────────────────────────────────────────────────────

export type PostStatus = "published" | "draft";

export interface Tag {
  slug: string; // unique → /blog/etiket/<slug>
  label: string;
}

export interface BlogPost {
  slug: string; // unique → /blog/<slug>
  title: string;
  description: string; // meta description + card + RSS summary (1–2 sentences)
  date: string; // ISO published date (YYYY-MM-DD)
  updated?: string; // ISO last-updated date
  tags: string[]; // references Tag.slug
  readingMinutes?: number;
  relatedTopics?: string[]; // curriculum topic slugs → konu↔blog cross-linking
  status: PostStatus;
}

// ── Tags ─────────────────────────────────────────────────────────────────────

export const TAGS: Tag[] = [
  { slug: "maarif-modeli", label: "Maarif Modeli" },
  { slug: "mufredat", label: "Müfredat" },
  { slug: "meb", label: "MEB" },
  { slug: "egitim", label: "Eğitim" },
];

// ── Posts (newest first by convention; helpers also sort defensively) ──────────

export const POSTS: BlogPost[] = [
  {
    slug: "maarif-modeli-matematik-mufredati",
    title: "Çıkararak Derinleşmek: Maarif Modeli Matematik Müfredatında Ne Değişti?",
    description:
      "Türkiye Yüzyılı Maarif Modeli ile matematik programı içerik temelli yapıdan beceri temelli yapıya geçti: beş alan becerisi, %35 sadeleştirme, integralin çıkarılması ve 'değişimin matematiği'.",
    date: "2026-06-05",
    tags: ["maarif-modeli", "mufredat", "meb", "egitim"],
    readingMinutes: 8,
    relatedTopics: [
      "limit-kavrami",
      "turevin-tanimi",
      "belirsiz-integral",
      "integralde-alan",
      "polinom-kavrami-ayt",
      "trigonometrik-fonksiyonlar",
    ],
    status: "published",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

const byDateDesc = (a: BlogPost, b: BlogPost) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** All published posts, newest first. */
export function publishedPosts(): BlogPost[] {
  return POSTS.filter((p) => p.status === "published").sort(byDateDesc);
}

export function getTag(slug: string): Tag | undefined {
  return TAGS.find((t) => t.slug === slug);
}

export function postsByTag(tagSlug: string): BlogPost[] {
  return publishedPosts().filter((p) => p.tags.includes(tagSlug));
}

/** Tags that have at least one published post, with their post counts. */
export function allTagsWithCounts(): { tag: Tag; count: number }[] {
  return TAGS.map((tag) => ({ tag, count: postsByTag(tag.slug).length })).filter(
    (t) => t.count > 0,
  );
}

/** Published posts that explicitly reference the given lesson slug. */
export function postsForTopic(topicSlug: string): BlogPost[] {
  return publishedPosts().filter((p) => p.relatedTopics?.includes(topicSlug));
}

/** Prev/next within the published timeline (newest first). */
export function siblingPosts(slug: string): { prev?: BlogPost; next?: BlogPost } {
  const list = publishedPosts();
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  // "prev" = older (further down the list), "next" = newer (further up).
  return { prev: list[i + 1], next: list[i - 1] };
}

/** Tag objects for a post (skips unknown slugs). */
export function tagsOf(post: BlogPost): Tag[] {
  return post.tags.map(getTag).filter(Boolean) as Tag[];
}
