import Link from "next/link";
import { getTopic, getUnit, trackMeta, siblings } from "@/lib/curriculum";

// Manifest-driven prev/next navigation. Author writes only <KonuNav slug="..."/>
// at the bottom of the MDX. Prev/next are published-only (lessons never link to
// a stub). When a side is missing, falls back to a "back to unit" link so the
// reader never hits a dead end. Reuses the existing .konu-nav CSS.
export default function KonuNav({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;

  const { prev, next } = siblings(slug);
  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const unitHref = unit ? `${tm.route}#${unit.slug}` : tm.route;

  return (
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
  );
}
