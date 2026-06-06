import Link from "next/link";
import { getPost, tagsOf } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { blogPostingLd, blogBreadcrumbLd } from "@/lib/jsonLd";

const MONTHS_TR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

/** ISO "2026-06-05" → "5 Haziran 2026" (no locale dependency). */
export function formatDateTR(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS_TR[m - 1]} ${y}`;
}

// Manifest-driven post header. Author writes only <BlogPost slug="..."/> at the
// top of the MDX; breadcrumb, eyebrow, title, tags and JSON-LD all derive from
// lib/blog.ts. Reuses the existing .crumb / .konu-head / .chips CSS plus .post-*.
export default function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return null;

  const tags = tagsOf(post);

  return (
    <>
      <JsonLd data={blogBreadcrumbLd(slug)} />
      <JsonLd data={blogPostingLd(slug)} />

      <nav className="crumb">
        <span>
          <Link href="/">Anasayfa</Link>
        </span>
        <span>
          {" › "}
          <Link href="/blog">Blog</Link>
        </span>
        <span>
          {" › "}
          <strong>{post.title}</strong>
        </span>
      </nav>

      <header className="konu-head">
        <p className="eyebrow">
          Blog · <time dateTime={post.date}>{formatDateTR(post.date)}</time>
          {post.readingMinutes ? ` · ~${post.readingMinutes} dk okuma` : ""}
        </p>
        <h1>{post.title}</h1>
        {tags.length > 0 && (
          <div className="post-tags">
            {tags.map((t) => (
              <Link key={t.slug} href={`/blog/etiket/${t.slug}`} className="tag-chip">
                {t.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
