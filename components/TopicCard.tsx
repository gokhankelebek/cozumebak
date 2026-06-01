import Link from "next/link";
import { trackMeta, type Topic } from "@/lib/curriculum";

// One topic card, matching the homepage .ccard markup. Published topics link to
// their lesson; "soon" topics link to a lightweight stub and render muted.
export default function TopicCard({ topic }: { topic: Topic }) {
  const tm = trackMeta(topic.track);
  const isExam = tm.kind === "exam";
  const isSoon = topic.status === "soon";

  const count =
    topic.questionCount != null
      ? `${topic.questionCount} soru`
      : topic.minutes != null
        ? `~${topic.minutes} dk`
        : "";

  return (
    <Link
      href={`/konular/${topic.slug}`}
      className={`ccard${isExam ? " exam" : ""}${isSoon ? " soon" : ""}`}
    >
      <div className="ccard-top">
        <span className="ccard-badge">{tm.shortLabel}</span>
        {isSoon ? (
          <span className="ccard-soon-tag">Yakında</span>
        ) : (
          count && <span className="ccard-count">{count}</span>
        )}
      </div>
      <h3>{topic.title}</h3>
      {topic.summary && <p className="ccard-topics">{topic.summary}</p>}
      <span className="ccard-link">{isSoon ? "Önizle →" : "Konuyu aç →"}</span>
    </Link>
  );
}
