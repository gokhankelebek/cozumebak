// ─────────────────────────────────────────────────────────────────────────────
// Soru-tipleri registry. One knowledge file per topic slug; the content engine
// reads these to generate on-pattern quiz questions and to verify them. To add
// a topic's knowledge:
//   1. create lib/soru-tipleri/<slug>.ts exporting a TopicSoruTipleri,
//   2. register it in KB below.
// ─────────────────────────────────────────────────────────────────────────────

import type { TopicSoruTipleri } from "./types";
import turevAlmaKurallari from "./turev-alma-kurallari";
import ozelFonksiyonTurevleri from "./ozel-fonksiyon-turevleri";

const KB: Record<string, TopicSoruTipleri> = {
  [turevAlmaKurallari.slug]: turevAlmaKurallari,
  [ozelFonksiyonTurevleri.slug]: ozelFonksiyonTurevleri,
};

export function getSoruTipleri(slug: string): TopicSoruTipleri | undefined {
  return KB[slug];
}

/** Slugs that have a knowledge base yet (for coverage reporting). */
export function coveredTopics(): string[] {
  return Object.keys(KB);
}

export type { TopicSoruTipleri, SoruTipi, Celdirici } from "./types";
