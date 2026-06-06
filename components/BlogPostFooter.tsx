import Link from "next/link";
import { getPost, siblingPosts } from "@/lib/blog";
import { getTopic, trackMeta } from "@/lib/curriculum";

// Manifest-driven post footer. Author writes only <BlogPostFooter slug="..."/>
// at the bottom of the MDX. Renders related lessons (konu↔blog cross-link) and
// prev/next posts. Reuses the existing .konu-related / .konu-nav CSS.
export default function BlogPostFooter({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return null;

  const related = (post.relatedTopics ?? [])
    .map((s) => getTopic(s))
    .filter((t) => t && t.status === "published");

  const { prev, next } = siblingPosts(slug);

  return (
    <>
      {related.length > 0 && (
        <section className="konu-related" aria-label="İlgili konular">
          <h2>İlgili konu anlatımları</h2>
          <ul>
            {related.map((t) => {
              const tm = trackMeta(t!.track);
              return (
                <li key={t!.slug}>
                  <Link href={`/konular/${t!.slug}`}>
                    {t!.title} <span className="rel-track">· {tm.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <nav className="konu-nav">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="prev">
            <span className="kn-dir">← Önceki yazı</span>
            <span className="kn-title">{prev.title}</span>
          </Link>
        ) : (
          <Link href="/blog" className="prev">
            <span className="kn-dir">← Geri</span>
            <span className="kn-title">Tüm yazılar</span>
          </Link>
        )}
        {next && (
          <Link href={`/blog/${next.slug}`} className="next">
            <span className="kn-dir">Sonraki yazı →</span>
            <span className="kn-title">{next.title}</span>
          </Link>
        )}
      </nav>
    </>
  );
}
