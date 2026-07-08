import Link from "next/link";
import { getTopic, getUnit, trackMeta, breadcrumb } from "@/lib/curriculum";
import { getQuizCount } from "@/lib/sorular";
import { weightChip, isMaarifLeaving, MAARIF_NOTE } from "@/lib/examInsights";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, learningResourceLd } from "@/lib/jsonLd";

// Manifest-driven lesson header. The author writes only <Konu slug="..."/> at
// the top of the MDX; breadcrumb, eyebrow, title and chips all come from
// lib/curriculum.ts. Reuses the existing .crumb / .konu-head / .chips CSS.
export default function Konu({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;

  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const crumbs = breadcrumb(slug);
  const eyebrow = unit ? `${tm.label} · ${unit.title}` : tm.label;

  // Prefer the real question-bank size over the manifest estimate, so the
  // chip is truthful on topics whose interactive quiz has shipped.
  const questionCount = getQuizCount(slug) ?? topic.questionCount;

  const examChip = weightChip(topic.unit);
  const maarifLeaving = isMaarifLeaving(slug, topic.unit);

  const chips = [
    topic.minutes ? `~${topic.minutes} dk okuma` : null,
    topic.difficulty ? `Zorluk: ${topic.difficulty}` : null,
    questionCount ? `${questionCount} çözümlü soru` : null,
    examChip,
  ].filter(Boolean) as string[];

  return (
    <>
      <JsonLd data={breadcrumbLd(slug)} />
      <JsonLd data={learningResourceLd(slug)} />
      <nav className="crumb">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <span key={i}>
              {i > 0 && " › "}
              {c.href && !last ? (
                <Link href={c.href}>{c.label}</Link>
              ) : last ? (
                <strong>{c.label}</strong>
              ) : (
                c.label
              )}
            </span>
          );
        })}
      </nav>
      <header className="konu-head">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{topic.title}</h1>
        {chips.length > 0 && (
          <div className="chips">
            {chips.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </div>
        )}
        {maarifLeaving && <p className="maarif-note">{MAARIF_NOTE}</p>}
      </header>
    </>
  );
}
