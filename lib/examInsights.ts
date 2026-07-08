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

/** Short chip text, e.g. "AYT · Türev: ~6 soru/yıl (çok yüksek ağırlık)". */
export function weightChip(unitSlug: string): string | null {
  const i = AYT_UNIT_INSIGHT[unitSlug];
  if (!i) return null;
  return `AYT'de ~${i.aytAvg} soru/yıl · ${WEIGHT_LABEL[i.weight]}`;
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
