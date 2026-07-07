// ─────────────────────────────────────────────────────────────────────────────
// çözümebak — SORU TİPLERİ (question-type knowledge base)
//
// This is the "brain" of the math expert. It does NOT render on the site; it is
// the structured expertise that a 25-year dershane+okul teacher carries in their
// head, written down so the content engine can use it:
//
//   • QUIZ GENERATION — generate on-pattern quiz questions (lib/sorular) that
//     match how ÖSYM actually asks, with distractors that map to real mistakes.
//   • VERIFICATION — every generated question is checked against the archetype:
//     is the method right? does each wrong option correspond to a known error?
//   • LESSON AWARENESS — konu anlatımı can reference which archetypes a topic
//     produces and warn against the exact traps students fall for.
//
// The expertise lives HERE (correctable data), not in model weights. Every
// archetype added makes the engine permanently smarter. One file per curriculum
// topic slug; authored by the model, reviewed and corrected by the teacher.
// ─────────────────────────────────────────────────────────────────────────────

import type { Difficulty } from "@/lib/curriculum";

/** A distractor pattern: the wrong answer a specific student mistake produces. */
export interface Celdirici {
  /** The mistake, in the student's terms — e.g. "iç türevi unutmak". */
  hata: string;
  /** What wrong result that mistake yields, so quiz options can encode it. */
  uretir: string;
}

/** One recurring ÖSYM question archetype within a topic. */
export interface SoruTipi {
  /** Stable id, e.g. "turev-alma-04-zincir". */
  id: string;
  /** Short teacher name for the pattern — "Zincir kuralı (bileşke fonksiyon)". */
  ad: string;
  /** What makes a question THIS type — the recognizable signature. */
  aciklama: string;
  /** The solution method, step by step (the "how a teacher does it fast"). */
  yontem: string[];
  /** The classic wrong answers and the mistakes behind them. */
  celdiriciler: Celdirici[];
  zorluk: Difficulty;
  /** Typical difficulty band as it appears on the real exam. */
  sikCikar: boolean; // true = high-frequency on ÖSYM; prioritize in banks
  /** Other topic slugs this archetype commonly combines with in exam questions. */
  kombinasyon?: string[];
  /** A representative worked example (prompt + hand-verified answer). */
  ornek?: { soru: string; cevap: string };
}

export interface TopicSoruTipleri {
  /** Curriculum topic slug (lib/curriculum.ts). */
  slug: string;
  /** Ordered easy→hard; the teacher's mental catalogue for this topic. */
  tipler: SoruTipi[];
  /** Review state — "verified" once the teacher has signed off the math. */
  durum: "taslak" | "verified";
}
