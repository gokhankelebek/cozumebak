// ─────────────────────────────────────────────────────────────────────────────
// Quiz registry. To give a topic a quiz:
//   1. create lib/sorular/<slug>.ts exporting a TopicQuiz (see types.ts),
//   2. import + register it in BANKS below,
//   3. drop <Sorular slug="<slug>" /> into the topic's MDX (before <KonuNav>).
// The <Konu> header chip automatically shows the real question count.
// ─────────────────────────────────────────────────────────────────────────────

import type { TopicQuiz } from "./types";
import turevinTanimi from "./turevin-tanimi";
import limitKavrami from "./limit-kavrami";

const BANKS: Record<string, TopicQuiz> = {
  [turevinTanimi.slug]: turevinTanimi,
  [limitKavrami.slug]: limitKavrami,
};

export function getQuiz(slug: string): TopicQuiz | undefined {
  return BANKS[slug];
}

/** Real question count for a topic, or undefined if it has no bank yet. */
export function getQuizCount(slug: string): number | undefined {
  return BANKS[slug]?.questions.length;
}

export type { TopicQuiz, QuizQuestion } from "./types";
