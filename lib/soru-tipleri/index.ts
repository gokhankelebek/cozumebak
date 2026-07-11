// ─────────────────────────────────────────────────────────────────────────────
// Soru-tipleri registry. One knowledge file per topic slug; the content engine
// reads these to generate on-pattern quiz questions and to verify them. To add
// a topic's knowledge:
//   1. create lib/soru-tipleri/<slug>.ts exporting a TopicSoruTipleri,
//   2. register it in KB below.
// ─────────────────────────────────────────────────────────────────────────────

import type { TopicSoruTipleri } from "./types";
import limitKavrami from "./limit-kavrami";
import limitHesaplama from "./limit-hesaplama";
import sonsuzdaLimitAsimptot from "./sonsuzda-limit-asimptot";
import sureklilik from "./sureklilik";
import turevinTanimi from "./turevin-tanimi";
import turevAlmaKurallari from "./turev-alma-kurallari";
import ozelFonksiyonTurevleri from "./ozel-fonksiyon-turevleri";
import ardisikTurev from "./ardisik-turev";
import tegetNormal from "./teget-normal";
import artanAzalanEkstremum from "./artan-azalan-ekstremum";
import ikinciTurevKonkavlik from "./ikinci-turev-konkavlik";
import optimizasyon from "./optimizasyon";

// Curriculum order (limit → türev), matching the AYT ünite flow.
const KB: Record<string, TopicSoruTipleri> = {
  [limitKavrami.slug]: limitKavrami,
  [limitHesaplama.slug]: limitHesaplama,
  [sonsuzdaLimitAsimptot.slug]: sonsuzdaLimitAsimptot,
  [sureklilik.slug]: sureklilik,
  [turevinTanimi.slug]: turevinTanimi,
  [turevAlmaKurallari.slug]: turevAlmaKurallari,
  [ozelFonksiyonTurevleri.slug]: ozelFonksiyonTurevleri,
  [ardisikTurev.slug]: ardisikTurev,
  [tegetNormal.slug]: tegetNormal,
  [artanAzalanEkstremum.slug]: artanAzalanEkstremum,
  [ikinciTurevKonkavlik.slug]: ikinciTurevKonkavlik,
  [optimizasyon.slug]: optimizasyon,
};

export function getSoruTipleri(slug: string): TopicSoruTipleri | undefined {
  return KB[slug];
}

/** Slugs that have a knowledge base yet (for coverage reporting). */
export function coveredTopics(): string[] {
  return Object.keys(KB);
}

export type { TopicSoruTipleri, SoruTipi, Celdirici } from "./types";
