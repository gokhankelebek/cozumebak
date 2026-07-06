// ─────────────────────────────────────────────────────────────────────────────
// Quiz engine — data model. Question banks live in lib/sorular/<slug>.ts and
// are registered in lib/sorular/index.ts. All strings may mix Turkish text
// with inline math delimited by $...$ (rendered server-side by <MathText>).
// Author with String.raw`...` so LaTeX backslashes survive.
// ─────────────────────────────────────────────────────────────────────────────

import type { Difficulty } from "@/lib/curriculum";

export interface QuizQuestion {
  /** Stable id, e.g. "turevin-tanimi-01" — used as React key + analytics. */
  id: string;
  prompt: string;
  /** Exactly 5 options (A–E), ÖSYM format. */
  options: string[];
  /** 0-based index of the correct option. */
  correct: number;
  /** Step-by-step solution; each entry becomes a numbered step circle. */
  solution: string[];
  /** Final result line, shown in the green answer box. */
  answer: string;
  difficulty?: Difficulty;
}

export interface TopicQuiz {
  /** Topic slug from lib/curriculum.ts. */
  slug: string;
  questions: QuizQuestion[];
}
