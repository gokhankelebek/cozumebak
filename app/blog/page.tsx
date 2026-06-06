import type { Metadata } from "next";
import Link from "next/link";
import { publishedPosts, allTagsWithCounts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "çözümebak blog: matematik müfredatı, MEB güncellemeleri, sınav stratejileri ve öğrenme üzerine yazılar.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": `${SITE_URL}/blog/rss.xml` },
  },
  openGraph: {
    type: "website",
    title: `Blog | ${SITE_NAME}`,
    description: "Matematik müfredatı, MEB güncellemeleri ve öğrenme üzerine yazılar.",
    url: "/blog",
    siteName: SITE_NAME,
    locale: "tr_TR",
  },
};

export default function BlogIndex() {
  const posts = publishedPosts();
  const tags = allTagsWithCounts();

  return (
    <main>
      <header className="konu-head">
        <p className="eyebrow">Blog</p>
        <h1>Yazılar</h1>
        <p className="lead">
          Matematik müfredatı, MEB güncellemeleri, sınav stratejileri ve öğrenmenin
          kendisi üzerine — öğretmen gözüyle, sayılarla.
        </p>
      </header>

      {tags.length > 0 && (
        <div className="blog-taglist">
          {tags.map(({ tag, count }) => (
            <Link key={tag.slug} href={`/blog/etiket/${tag.slug}`} className="tag-chip">
              {tag.label} <span className="tag-count">{count}</span>
            </Link>
          ))}
        </div>
      )}

      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
