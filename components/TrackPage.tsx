import { trackMeta, unitsByTrack, topicsByUnit, trackStats, type Track } from "@/lib/curriculum";
import TopicCard from "@/components/TopicCard";

// Generic listing page for one track (grade or exam). Renders a hero header from
// the manifest, then one .section per unit (anchored by unit slug so breadcrumb
// "#unit" jumps land here) with a .grid-cards of TopicCards.
export default function TrackPage({ track }: { track: Track }) {
  const tm = trackMeta(track);
  const units = unitsByTrack(track);
  const stats = trackStats(track);

  return (
    <main>
      <section className="hero container">
        <p className="eyebrow">{tm.kind === "exam" ? "Sınav Hazırlık" : "MEB Müfredatı"}</p>
        <h1 className="hero-title">{tm.label}</h1>
        <p className="hero-sub">{tm.blurb}</p>
        <div className="stats">
          <div className="stat">
            <strong>{stats.units}</strong>
            <span>ünite</span>
          </div>
          <div className="stat">
            <strong>{stats.topics}</strong>
            <span>konu</span>
          </div>
          <div className="stat">
            <strong>{stats.questions.toLocaleString("tr")}+</strong>
            <span>çözümlü soru</span>
          </div>
        </div>
      </section>

      {units.map((unit) => {
        const topics = topicsByUnit(unit.slug);
        if (topics.length === 0) return null;
        return (
          <section key={unit.slug} id={unit.slug} className="section container">
            <div className="section-head">
              <p className="eyebrow">{tm.label}</p>
              <h2>{unit.title}</h2>
            </div>
            <div className="grid-cards">
              {topics.map((topic) => (
                <TopicCard key={topic.slug} topic={topic} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
