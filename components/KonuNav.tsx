import Link from "next/link";
import { getTopic, getUnit, trackMeta, siblings, topicsByUnit } from "@/lib/curriculum";
import { postsForTopic } from "@/lib/blog";
import { getSoruTipleri, relatedBySoruTipi } from "@/lib/soru-tipleri";

// Manifest-driven lesson navigation. Author writes only <KonuNav slug="..."/>
// at the bottom of the MDX. Renders, in order: a link to this topic's
// /soru-tipleri page (when a KB exists — otherwise those high-intent pages are
// internally orphaned), related blog posts, same-unit topics, cross-unit topics
// from the soru-tipleri `kombinasyon` graph, then prev/next. Prev/next are
// published-only (lessons never link to a stub). When a side is missing, falls
// back to a "back to unit" link so the reader never hits a dead end. Reuses the
// existing .konu-nav CSS plus .konu-related / .rel-track.
export default function KonuNav({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;

  const { prev, next } = siblings(slug);
  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const unitHref = unit ? `${tm.route}#${unit.slug}` : tm.route;

  // Other published lessons in the same unit (current one excluded).
  const related = topicsByUnit(topic.unit).filter(
    (t) => t.status === "published" && t.slug !== slug,
  );
  const sameUnitSlugs = new Set(related.map((t) => t.slug));

  // Cross-unit topics that combine with this one on real ÖSYM questions, from
  // the soru-tipleri knowledge graph. Excludes same-unit topics (already listed
  // above) and keeps only published lessons. Capped so the block stays a
  // pointer, not a dump.
  const linkedTopics = relatedBySoruTipi(slug)
    .filter((s) => !sameUnitSlugs.has(s))
    .map((s) => getTopic(s))
    .filter((t): t is NonNullable<typeof t> => !!t && t.status === "published")
    .slice(0, 6);

  // This topic's own soru-tipleri page, when a knowledge base exists.
  const kb = getSoruTipleri(slug);

  // Blog posts that explicitly reference this lesson (konu↔blog cross-link).
  const relatedPosts = postsForTopic(slug);

  return (
    <>
      {kb && kb.tipler.length > 0 && (
        <section className="konu-related konu-soru-tipleri" aria-label="Soru tipleri">
          <h2>Sınavda nasıl sorulur?</h2>
          <ul>
            <li>
              <Link href={`/soru-tipleri/${slug}`}>
                {topic.title} — ÖSYM soru tipleri ve tuzakları ({kb.tipler.length} tip)
              </Link>
            </li>
          </ul>
        </section>
      )}
      {relatedPosts.length > 0 && (
        <section className="konu-related konu-posts" aria-label="İlgili yazılar">
          <h2>İlgili yazılar</h2>
          <ul>
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {related.length > 0 && (
        <section className="konu-related" aria-label="Bu ünitedeki diğer konular">
          <h2>{unit ? `${unit.title} — diğer konular` : "İlgili konular"}</h2>
          <ul>
            {related.map((t) => (
              <li key={t.slug}>
                <Link href={`/konular/${t.slug}`}>{t.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {linkedTopics.length > 0 && (
        <section className="konu-related" aria-label="Bağlantılı konular">
          <h2>Bu konuyla birlikte çıkan konular</h2>
          <ul>
            {linkedTopics.map((t) => {
              const ttm = trackMeta(t.track);
              return (
                <li key={t.slug}>
                  <Link href={`/konular/${t.slug}`}>
                    {t.title}
                    {t.track !== topic.track && (
                      <span className="rel-track"> · {ttm.label}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <nav className="konu-nav">
        {prev ? (
          <Link href={`/konular/${prev.slug}`} className="prev">
            <span className="kn-dir">← Önceki</span>
            <span className="kn-title">{prev.title}</span>
          </Link>
        ) : (
          <Link href={unitHref} className="prev">
            <span className="kn-dir">← Geri</span>
            <span className="kn-title">{unit ? unit.title : tm.label} konuları</span>
          </Link>
        )}
        {next && (
          <Link href={`/konular/${next.slug}`} className="next">
            <span className="kn-dir">Sonraki →</span>
            <span className="kn-title">{next.title}</span>
          </Link>
        )}
      </nav>
    </>
  );
}
