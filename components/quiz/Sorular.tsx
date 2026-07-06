import { getQuiz } from "@/lib/sorular";
import MathText from "./MathText";
import QuizClient from "./QuizClient";

// Manifest-driven quiz section. The author writes one line in the topic MDX:
//   <Sorular slug="turevin-tanimi" />
// All question content (prompt, options, step-by-step solution) is rendered
// on the SERVER — math included — and passed to the client island as
// ReactNode props. The client only manages selection/reveal state, so the
// full quiz text is static, indexable HTML.
export default function Sorular({ slug }: { slug: string }) {
  const quiz = getQuiz(slug);
  if (!quiz || quiz.questions.length === 0) return null;

  const questions = quiz.questions.map((q) => ({
    id: q.id,
    correct: q.correct,
    difficulty: q.difficulty ?? null,
    prompt: <MathText text={q.prompt} />,
    options: q.options.map((opt, i) => <MathText key={i} text={opt} />),
    solution: (
      <>
        <ol>
          {q.solution.map((step, i) => (
            <li key={i}>
              <MathText text={step} />
            </li>
          ))}
        </ol>
        <div className="answer">
          <span className="answer-pre">Sonuç:</span> <MathText text={q.answer} />
        </div>
      </>
    ),
  }));

  return (
    <section className="quiz" id="sorular">
      <h2>Çözümlü Sorular</h2>
      <p className="quiz-sub">
        Her soruyu önce kendin dene; takıldığında <strong>Çözüme Bak</strong>.
      </p>
      <QuizClient slug={slug} questions={questions} />
    </section>
  );
}
