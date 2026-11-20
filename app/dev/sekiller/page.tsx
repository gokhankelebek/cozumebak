import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allQuizzes } from "@/lib/sorular";
import { sekilKontrol, sekilYerlesim } from "@/lib/sorular/sekilYerlesim";
import SoruSekli from "@/components/quiz/SoruSekli";
import MathText from "@/components/quiz/MathText";

// Development-only review page: every quiz figure, its question, and the
// checker's findings. Not available in production builds.

export const metadata: Metadata = { title: "Şekil inceleme", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default function SekilInceleme() {
  if (process.env.NODE_ENV === "production") notFound();
  const kayitlar = allQuizzes().flatMap((q) =>
    q.questions.filter((s) => s.sekil).map((s) => ({ slug: q.slug, soru: s, sorunlar: sekilKontrol(sekilYerlesim(s.sekil!)) })),
  );
  const sorunlu = kayitlar.filter((k) => k.sorunlar.length).length;
  return (
    <main className="container" style={{ paddingTop: 32, paddingBottom: 64 }}>
      <h1>Şekil inceleme</h1>
      <p id="sekil-ozet">
        {kayitlar.length} şekil · {sorunlu} sorunlu
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))", gap: 20 }}>
        {kayitlar.map((k) => (
          <article key={k.soru.id} className="quiz-q" data-sekil={k.soru.id} data-sorun={k.sorunlar.length}>
            <p style={{ fontFamily: "var(--mono)", fontSize: ".75rem", margin: "0 0 6px" }}>{k.soru.id}</p>
            <div className="quiz-q-prompt" style={{ fontSize: ".9rem" }}>
              <MathText text={k.soru.prompt} />
            </div>
            <figure className="quiz-sekil">
              <SoruSekli sekil={k.soru.sekil!} />
            </figure>
            {k.sorunlar.length > 0 && (
              <ul className="sekil-sorunlar" style={{ color: "#b42318", fontSize: ".8rem", margin: 0 }}>
                {k.sorunlar.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
