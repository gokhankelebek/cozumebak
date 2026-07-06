"use client";

import { useEffect, useState, type ReactNode } from "react";

const LETTERS = ["A", "B", "C", "D", "E"];

interface ClientQuestion {
  id: string;
  correct: number;
  difficulty: string | null;
  prompt: ReactNode;
  options: ReactNode[];
  solution: ReactNode;
}

// Interaction-only island: option picking, verdicts, "Çözüme Bak" reveals and
// the score line. All visible content arrives pre-rendered from the server.
// Answers persist in localStorage (key cb-quiz:<slug>) — the seed for the
// upcoming progress-tracking feature.
export default function QuizClient({
  slug,
  questions,
}: {
  slug: string;
  questions: ClientQuestion[];
}) {
  const [picks, setPicks] = useState<(number | null)[]>(() =>
    questions.map(() => null),
  );
  const [open, setOpen] = useState<boolean[]>(() => questions.map(() => false));

  // Restore a previous run after mount (avoids hydration mismatch).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(`cb-quiz:${slug}`);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.picks) && saved.picks.length === questions.length) {
        setPicks(saved.picks);
      }
    } catch {
      /* corrupt/blocked storage → start fresh */
    }
  }, [slug, questions.length]);

  // Persist after commit; functional updates in pick() keep rapid taps on
  // different questions from clobbering each other (stale-closure hazard).
  useEffect(() => {
    if (!picks.some((p) => p !== null)) return; // don't persist a blank sheet
    try {
      localStorage.setItem(
        `cb-quiz:${slug}`,
        JSON.stringify({ picks, t: Date.now() }),
      );
    } catch {
      /* private mode etc. — quiz still works, just not persisted */
    }
  }, [slug, picks]);

  const pick = (qi: number, oi: number) => {
    setPicks((prev) =>
      prev[qi] !== null // one shot per question, ÖSYM style
        ? prev
        : prev.map((p, i) => (i === qi ? oi : p)),
    );
  };

  const reset = () => {
    const blank = questions.map(() => null);
    setPicks(blank);
    setOpen(questions.map(() => false));
    try {
      localStorage.removeItem(`cb-quiz:${slug}`);
    } catch {}
  };

  const answered = picks.filter((p) => p !== null).length;
  const correctCount = picks.filter((p, i) => p === questions[i].correct).length;

  return (
    <div className="quiz-list">
      {questions.map((q, qi) => {
        const picked = picks[qi];
        return (
          <article className="quiz-q" key={q.id}>
            <div className="quiz-q-head">
              <span className="quiz-q-num">Soru {qi + 1}</span>
              {q.difficulty && (
                <span
                  className={`quiz-diff ${q.difficulty.toLocaleLowerCase("tr")}`}
                >
                  {q.difficulty}
                </span>
              )}
            </div>
            <div className="quiz-q-prompt">{q.prompt}</div>
            <div className="quiz-opts" role="group" aria-label={`Soru ${qi + 1} şıkları`}>
              {q.options.map((opt, oi) => {
                const state =
                  picked === null
                    ? ""
                    : oi === q.correct
                      ? " is-correct"
                      : oi === picked
                        ? " is-wrong"
                        : " is-muted";
                return (
                  <button
                    key={oi}
                    type="button"
                    className={`quiz-opt${state}`}
                    disabled={picked !== null}
                    onClick={() => pick(qi, oi)}
                  >
                    <span className="quiz-letter" aria-hidden="true">
                      {LETTERS[oi]}
                    </span>
                    <span className="quiz-opt-text">{opt}</span>
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <p
                className={`quiz-verdict ${picked === q.correct ? "ok" : "no"}`}
                aria-live="polite"
              >
                {picked === q.correct
                  ? "Doğru! 🎉"
                  : `Yanlış — doğru cevap ${LETTERS[q.correct]}.`}
              </p>
            )}
            <div className="reveal">
              <button
                type="button"
                className="reveal-btn solve"
                aria-expanded={open[qi]}
                onClick={() =>
                  setOpen((o) => o.map((v, i) => (i === qi ? !v : v)))
                }
              >
                <span className="lbl">
                  {open[qi] ? "Çözümü Gizle" : "Çözüme Bak"}
                </span>
                <span className="chev">↓</span>
              </button>
              <div
                className={`reveal-panel solve-panel${open[qi] ? " open" : ""}`}
              >
                <div className="inner">{q.solution}</div>
              </div>
            </div>
          </article>
        );
      })}
      <div className="quiz-score" aria-live="polite">
        {answered === questions.length ? (
          <>
            <span>
              Skorun: <strong>{correctCount}/{questions.length}</strong>
              {correctCount === questions.length
                ? " — mükemmel! 🏆"
                : correctCount >= questions.length / 2
                  ? " — iyi gidiyorsun!"
                  : " — çözümleri incele, tekrar dene!"}
            </span>
            <button type="button" className="quiz-reset" onClick={reset}>
              Baştan Çöz
            </button>
          </>
        ) : (
          <span>
            {answered}/{questions.length} soru cevaplandı
          </span>
        )}
      </div>
    </div>
  );
}
