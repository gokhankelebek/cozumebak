// ─────────────────────────────────────────────────────────────────────────────
// YKS exam intelligence — grounded in REAL released ÖSYM exams (2018–2025), not
// assumptions. This is what makes the site coach like a veteran: it knows how
// heavily each topic actually appears, and which content the Maarif Modeli is
// phasing out. Sources: rehberpanda (AYT çıkmış trend analizi), unikazan,
// pervinkaplan, tymm.meb.gov.tr. See memory/yks-exam-system.md.
//
// Weights are at the topic-CLUSTER level (that's how ÖSYM frequency is reported);
// per-lesson we surface the cluster's tier, not a fake per-lesson integer.
// ─────────────────────────────────────────────────────────────────────────────

export type ExamWeight = "çok-yüksek" | "yüksek" | "orta" | "düşük";

export interface UnitInsight {
  /** Average questions this cluster brings to the 40-question AYT math test. */
  aytAvg: number;
  weight: ExamWeight;
  /** Human label for the ÖSYM reporting cluster this unit belongs to. */
  cluster: string;
}

export interface TytUnitInsight {
  /** Average questions this cluster brings to the 40-question TYT math test. */
  tytAvg: number;
  weight: ExamWeight;
  cluster: string;
}

// Keyed by Unit.slug (see lib/curriculum.ts). AYT units only for now.
export const AYT_UNIT_INSIGHT: Record<string, UnitInsight> = {
  "analitik-ayt": { aytAvg: 9, weight: "çok-yüksek", cluster: "İleri Geometri" },
  "turev-ayt": { aytAvg: 6, weight: "çok-yüksek", cluster: "Türev" },
  "integral-ayt": { aytAvg: 5.5, weight: "çok-yüksek", cluster: "İntegral" },
  "limit-ayt": { aytAvg: 4, weight: "yüksek", cluster: "Limit ve Süreklilik" },
  "trigonometri-ayt": { aytAvg: 3.5, weight: "yüksek", cluster: "Trigonometri" },
  "fonksiyonlar-ayt": { aytAvg: 2, weight: "orta", cluster: "İleri Cebir" },
  "polinomlar-ayt": { aytAvg: 2, weight: "orta", cluster: "İleri Cebir" },
  "ikinci-derece-ayt": { aytAvg: 2, weight: "orta", cluster: "İleri Cebir" },
  "diziler-ayt": { aytAvg: 2.5, weight: "orta", cluster: "Diziler" },
  "logaritma-ayt": { aytAvg: 2.5, weight: "orta", cluster: "Üstel ve Logaritma" },
};

// TYT weights, aggregated from released-exam topic tables (2018–2025) published
// by matematikonline.com and ozeldersalani.com — the two sources agree year by
// year (Problemler: 11,12,13,11,13,10,11,11 → ~11.5/yıl; köklü 1/yıl sabit vb).
// The 30 "matematik" questions are covered per-topic by those tables; the 10
// geometry questions are reported coarser (üçgenler 3-5, dörtgenler 2-3, katı
// cisimler ~2, analitik ~1), so the two geometry clusters carry approximate
// splits (~7 plane / ~2.5 analitik+katı). Cluster sums ≈ 39-40 ✓.
export const TYT_UNIT_INSIGHT: Record<string, TytUnitInsight> = {
  "oran-problem-tyt": { tytAvg: 12, weight: "çok-yüksek", cluster: "Problemler" },
  "geometri-tyt": { tytAvg: 7, weight: "çok-yüksek", cluster: "Temel Geometri" },
  "temel-kavramlar-tyt": { tytAvg: 4, weight: "yüksek", cluster: "Temel Kavramlar ve Basamak" },
  "cebir-tyt": { tytAvg: 3, weight: "yüksek", cluster: "Denklem, Eşitsizlik, Mutlak Değer" },
  "sayma-olasilik-tyt": { tytAvg: 3, weight: "yüksek", cluster: "Sayma, Olasılık ve Veri" },
  "sayilar-tyt": { tytAvg: 2.5, weight: "orta", cluster: "Bölünebilme ve Rasyonel Sayılar" },
  "analitik-kati-tyt": { tytAvg: 2.5, weight: "orta", cluster: "Analitik ve Katı Cisimler" },
  "uslu-koklu-tyt": { tytAvg: 2, weight: "orta", cluster: "Üslü ve Köklü İfadeler" },
  "kumeler-mantik-tyt": { tytAvg: 2, weight: "orta", cluster: "Kümeler ve Mantık" },
  "fonksiyonlar-tyt": { tytAvg: 1, weight: "düşük", cluster: "Fonksiyonlar" },
};

const WEIGHT_LABEL: Record<ExamWeight, string> = {
  "çok-yüksek": "Sınavda çok yüksek ağırlık",
  "yüksek": "Sınavda yüksek ağırlık",
  "orta": "Sınavda orta ağırlık",
  "düşük": "Sınavda düşük ağırlık",
};

/** Insight for a topic, by its unit slug. Returns null if we have no data. */
export function insightForUnit(unitSlug: string): UnitInsight | null {
  return AYT_UNIT_INSIGHT[unitSlug] ?? null;
}

/** Short chip text, e.g. "AYT'de ~6 soru/yıl · Sınavda çok yüksek ağırlık".
 *  Unit slugs are unique site-wide, so one lookup covers both exams. */
export function weightChip(unitSlug: string): string | null {
  const ayt = AYT_UNIT_INSIGHT[unitSlug];
  if (ayt) return `AYT'de ~${ayt.aytAvg} soru/yıl · ${WEIGHT_LABEL[ayt.weight]}`;
  const tyt = TYT_UNIT_INSIGHT[unitSlug];
  if (tyt) return `TYT'de ~${tyt.tytAvg} soru/yıl · ${WEIGHT_LABEL[tyt.weight]}`;
  return null;
}

// ── Maarif Modeli transition ────────────────────────────────────────────────
// Removed from the new curriculum but STILL on the YKS through the ~2027 exam;
// the first fully-Maarif cohort sits YKS ~2028. Content stays; we just flag it.
const MAARIF_LEAVING_UNITS = new Set(["integral-ayt", "integral-12"]);
const MAARIF_LEAVING_TOPICS = new Set([
  "toplam-fark-formulleri",
  "yarim-aci-donusum-12",
  "trigonometrik-ozdeslikler-ayt",
]);

/** True if this topic's content is being phased out by the Maarif Modeli. */
export function isMaarifLeaving(slug: string, unitSlug: string): boolean {
  return MAARIF_LEAVING_UNITS.has(unitSlug) || MAARIF_LEAVING_TOPICS.has(slug);
}

export const MAARIF_NOTE =
  "Bu konu yeni müfredattan (Türkiye Yüzyılı Maarif Modeli) kaldırıldı; " +
  "ancak geçiş dönemi nedeniyle ~2027 YKS'ye kadar sınavda çıkmaya devam ediyor.";
