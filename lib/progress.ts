// ─────────────────────────────────────────────────────────────────────────────
// Device-local progress, read from the cb-quiz:<slug> entries QuizClient
// persists. Client-only (touches localStorage) and import-free, so the /durumum
// and homepage islands can share it without pulling in the curriculum manifest.
// ─────────────────────────────────────────────────────────────────────────────

export interface Attempt {
  slug: string;
  answered: number;
  score: number | null; // null → legacy entry, self-heals on next quiz visit
  total: number | null;
  t: number;
}

/** Accuracy over what the student actually answered (not the whole set). */
export function accuracy(a: Attempt): number | null {
  if (a.score === null || a.answered === 0) return null;
  return a.score / a.answered;
}

export function readAttempts(): Map<string, Attempt> {
  const map = new Map<string, Attempt>();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith("cb-quiz:")) continue;
    try {
      const raw = JSON.parse(localStorage.getItem(key) ?? "");
      if (!Array.isArray(raw.picks)) continue;
      const answered = raw.picks.filter((p: unknown) => p !== null).length;
      if (answered === 0) continue;
      map.set(key.slice("cb-quiz:".length), {
        slug: key.slice("cb-quiz:".length),
        answered,
        score: typeof raw.score === "number" ? raw.score : null,
        total: typeof raw.total === "number" ? raw.total : raw.picks.length,
        t: typeof raw.t === "number" ? raw.t : 0,
      });
    } catch {
      /* corrupt entry → skip */
    }
  }
  return map;
}
