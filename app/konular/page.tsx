import type { Metadata } from "next";
import Link from "next/link";
import { TRACKS, unitsByTrack, topicsByUnit } from "@/lib/curriculum";
import TopicCard from "@/components/TopicCard";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tüm Konular",
  description:
    "9, 10, 11, 12. sınıf, TYT ve AYT matematiğinin tüm konuları — ünite ünite, çözümlü sorularla.",
  alternates: { canonical: "/konular" },
  openGraph: {
    type: "website",
    title: `Tüm Konular | ${SITE_NAME}`,
    description: "Lise matematiğinin tüm konuları, ünite ünite.",
    url: "/konular",
    siteName: SITE_NAME,
    locale: "tr_TR",
  },
};

export default function KonularDizini() {
  return (
    <main>
      <section className="hero container">
        <p className="eyebrow">Konu Dizini</p>
        <h1 className="hero-title">Tüm Konular</h1>
        <p className="hero-sub">
          Sınıf düzeyine ve sınavlara göre tüm üniteler ve konular tek sayfada. Aradığın
          konuyu seç, çözüme bak.
        </p>
      </section>

      {TRACKS.map((tm) => {
        const units = unitsByTrack(tm.key);
        if (units.length === 0) return null;
        return (
          <section key={tm.key} className="section container">
            <div className="section-head">
              <p className="eyebrow">{tm.kind === "exam" ? "Sınav" : "Sınıf"}</p>
              <h2>
                <Link href={tm.route}>{tm.label}</Link>
              </h2>
            </div>
            {units.map((unit) => {
              const topics = topicsByUnit(unit.slug);
              if (topics.length === 0) return null;
              return (
                <div key={unit.slug} id={unit.slug} className="unit-block">
                  <h3 className="unit-title">{unit.title}</h3>
                  <div className="grid-cards">
                    {topics.map((topic) => (
                      <TopicCard key={topic.slug} topic={topic} />
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}
    </main>
  );
}
