import type { Metadata } from "next";
import { TRACKS, publishedTopics, getUnit } from "@/lib/curriculum";
import { AYT_UNIT_INSIGHT } from "@/lib/examInsights";
import DurumClient, {
  type DurumTopic,
  type DurumTrack,
} from "@/components/DurumClient";

// Personal progress page — computed entirely client-side from the quiz answers
// QuizClient stores in localStorage. Server's only job: a compact manifest of
// published topics + ÖSYM unit weights for the "next topic" suggestion.
export const metadata: Metadata = {
  title: "Durumum",
  description:
    "Çözdüğün sorulardan hesaplanan kişisel ilerleme haritan: kapsam, tekrar isteyen konular ve sıradaki adım.",
  alternates: { canonical: "/durumum" },
  robots: { index: false, follow: true },
};

export default function DurumumPage() {
  const topics: DurumTopic[] = publishedTopics().map((t) => ({
    slug: t.slug,
    title: t.title,
    track: t.track,
    unitSlug: t.unit,
    unitTitle: getUnit(t.unit)?.title ?? "",
  }));

  const tracks: DurumTrack[] = TRACKS.map((tr) => ({
    key: tr.key,
    label: tr.label,
    route: tr.route,
    total: topics.filter((t) => t.track === tr.key).length,
  }));

  const aytUnitWeight = Object.fromEntries(
    Object.entries(AYT_UNIT_INSIGHT).map(([slug, i]) => [slug, i.aytAvg]),
  );

  return (
    <main className="container">
      <section className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow">Kişisel</p>
        <h1 className="hero-title">Durumum</h1>
        <p className="hero-sub">
          Çözdüğün her soru bu haritayı işler: neyi kapattın, neresi tekrar
          istiyor, sıradaki en değerli adımın ne.
        </p>
      </section>
      <DurumClient topics={topics} tracks={tracks} aytUnitWeight={aytUnitWeight} />
    </main>
  );
}
