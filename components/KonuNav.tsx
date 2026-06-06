import Link from "next/link";
import { getTopic, getUnit, trackMeta, siblings, topicsByUnit } from "@/lib/curriculum";

// Manifest-driven lesson navigation. Author writes only <KonuNav slug="..."/>
// at the bottom of the MDX. Renders a "related topics in this unit" list (for
// crawl depth + topical clustering) followed by prev/next. Prev/next are
// published-only (lessons never link to a stub). When a side is missing, falls
// back to a "back to unit" link so the reader never hits a dead end. Reuses the
// existing .konu-nav CSS plus .konu-related.
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

  return (
    <>
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
