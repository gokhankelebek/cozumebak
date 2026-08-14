import Link from "next/link";
import { getSoruTipleri } from "@/lib/soru-tipleri";
import { getQuizCount } from "@/lib/sorular";
import { getTopic } from "@/lib/curriculum";

// ─────────────────────────────────────────────────────────────────────────────
// /soru-tipleri/<slug> body — renders the teacher's full archetype catalogue
// for one topic: how ÖSYM asks it, the method, and EVERY trap (çeldirici).
// Unlike the lesson-page Tuzaklar teaser (capped at 6 archetypes / 1 trap
// each), this page shows the whole thing — it is the destination the teaser
// links to. The KB is plain-unicode math (x²−x), so no KaTeX pass is needed.
// ─────────────────────────────────────────────────────────────────────────────

const ZORLUK_TONE: Record<string, string> = {
  Kolay: "st-easy",
  Orta: "st-mid",
  Zor: "st-hard",
};

export default function SoruTipleri({ slug }: { slug: string }) {
  const kb = getSoruTipleri(slug);
  if (!kb || kb.tipler.length === 0) return null;

  // High-frequency archetypes first, matching the lesson teaser's ordering.
  const tipler = [...kb.tipler].sort(
    (a, b) => Number(b.sikCikar) - Number(a.sikCikar),
  );

  const topic = getTopic(slug);
  const quizCount = getQuizCount(slug);

  return (
    <div className="st">
      <p className="st-intro">
        Aşağıda ÖSYM'nin bu konuyu sorma biçimleri var: her tipin nasıl
        tanınacağı, adım adım çözüm yolu ve öğrencilerin düştüğü tuzaklar. Önce
        oku, sonra{" "}
        {quizCount ? (
          <Link href={`/konular/${slug}`}>{quizCount} çözümlü soruyla</Link>
        ) : (
          <Link href={`/konular/${slug}`}>konunun sorularıyla</Link>
        )}{" "}
        kendini dene.
      </p>

      <ol className="st-list">
        {tipler.map((t, i) => (
          <li key={t.id} className="st-tip">
            <div className="st-tip-head">
              <span className="st-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2>{t.ad}</h2>
              <span className={`st-badge ${ZORLUK_TONE[t.zorluk] ?? ""}`}>
                {t.zorluk}
              </span>
              {t.sikCikar && (
                <span className="st-badge st-freq">Sık çıkar</span>
              )}
            </div>

            <p className="st-aciklama">{t.aciklama}</p>

            {t.yontem.length > 0 && (
              <div className="st-yontem">
                <p className="st-label">Nasıl çözülür</p>
                <ol>
                  {t.yontem.map((step, j) => (
                    <li key={j}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {t.celdiriciler.length > 0 && (
              <div className="st-tuzak">
                <p className="st-label">ÖSYM'nin kurduğu tuzaklar</p>
                <ul>
                  {t.celdiriciler.map((c, j) => (
                    <li key={j}>
                      <span className="st-hata">{c.hata}</span>
                      <span className="st-arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="st-uretir">
                        {c.uretir.toLocaleLowerCase("tr")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {t.ornek && (
              <div className="st-ornek">
                <p className="st-label">Örnek</p>
                <p className="st-ornek-soru">{t.ornek.soru}</p>
                <p className="st-ornek-cevap">{t.ornek.cevap}</p>
              </div>
            )}

            {t.kombinasyon && t.kombinasyon.length > 0 && (
              <p className="st-kombinasyon">
                Sık birleştiği konular:{" "}
                {t.kombinasyon.map((k, j) => {
                  const kt = getTopic(k);
                  return (
                    <span key={k}>
                      {j > 0 && ", "}
                      {kt ? <Link href={`/konular/${k}`}>{kt.title}</Link> : k}
                    </span>
                  );
                })}
              </p>
            )}
          </li>
        ))}
      </ol>

      <div className="st-cta">
        <p>
          {tipler.length} soru tipini gördün. Şimdi{" "}
          <Link href={`/konular/${slug}`}>
            {topic ? topic.title : "konunun"} sorularını çöz →
          </Link>
        </p>
      </div>
    </div>
  );
}
