import type { Metadata } from "next";
import Link from "next/link";
import { coveredTopics, getSoruTipleri } from "@/lib/soru-tipleri";
import { getTopic, TRACKS, type Track } from "@/lib/curriculum";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Soru Tipleri ve Tuzaklar",
  description:
    "ÖSYM'nin her konuyu sorma biçimleri: soru tipleri, adım adım çözüm yöntemleri ve öğrencilerin düştüğü tuzaklar. TYT ve AYT matematik.",
  alternates: { canonical: "/soru-tipleri" },
};

interface Row {
  slug: string;
  title: string;
  count: number;
}

export default function SoruTipleriHub() {
  // Group covered topics by track, preserving the KB (curriculum) order.
  const groups = new Map<Track, Row[]>();
  for (const slug of coveredTopics()) {
    const topic = getTopic(slug);
    const kb = getSoruTipleri(slug);
    if (!topic || !kb) continue;
    const row: Row = { slug, title: topic.title, count: kb.tipler.length };
    const arr = groups.get(topic.track) ?? [];
    arr.push(row);
    groups.set(topic.track, arr);
  }

  const orderedTracks = [...TRACKS].sort((a, b) => a.order - b.order);
  const totalTypes = [...groups.values()]
    .flat()
    .reduce((s, r) => s + r.count, 0);

  return (
    <main className="container">
      <header className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow">{SITE_NAME}</p>
        <h1 className="hero-title">Soru Tipleri ve Tuzaklar</h1>
        <p className="hero-sub">
          Bir konuyu bilmek ayrı, o konudan gelen soruyu tanımak ayrı. Burada
          ÖSYM'nin her konuyu sorma biçimlerini topladık: {totalTypes} soru
          tipi, çözüm yöntemleriyle ve öğrencilerin düştüğü tuzaklarla birlikte.
        </p>
      </header>

      <div className="st-hub">
        {orderedTracks.map((tm) => {
          const rows = groups.get(tm.key);
          if (!rows || rows.length === 0) return null;
          return (
            <section key={tm.key} className="st-hub-group">
              <h2>{tm.label}</h2>
              <ul>
                {rows.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/soru-tipleri/${r.slug}`}>
                      <span className="st-hub-title">{r.title}</span>
                      <span className="st-hub-count">{r.count} tip</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
