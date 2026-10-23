import Link from "next/link";
import { getYazili, SEASON } from "@/lib/yazili";
import { getTopic } from "@/lib/curriculum";
import { getSoruTipleri } from "@/lib/soru-tipleri";
import JsonLd from "@/components/JsonLd";
import { yaziliBreadcrumbLd, yaziliLd, yaziliFaqLd } from "@/lib/jsonLd";

// Manifest-driven first-term exam-prep page for one grade. All content comes
// from lib/yazili.ts; the page links its konu kapsamı to live lesson pages
// (and to /soru-tipleri where a KB exists) so every grade page feeds the rest
// of the site. JSON-LD: BreadcrumbList + LearningResource + FAQPage (the SSS
// block below is the FAQ's visible twin, as the guidelines require).
export default function YaziliSinav({ slug }: { slug: string }) {
  const y = getYazili(slug);
  if (!y) return null;

  return (
    <main className="konu container yazili">
      <JsonLd data={yaziliBreadcrumbLd(slug)} />
      <JsonLd data={yaziliLd(slug)} />
      <JsonLd data={yaziliFaqLd(slug)} />

      <nav className="crumb">
        <Link href="/">Anasayfa</Link>
        {" › "}
        <Link href="/yazili-sinavlar">Yazılı Sınavlar</Link>
        {" › "}
        <strong>{y.gradeLabel} 1. Yazılı</strong>
      </nav>

      <header className="konu-head">
        <p className="eyebrow">{SEASON.year} · {y.tema}</p>
        <h1>{y.gradeLabel} Matematik 1. Dönem 1. Yazılı Konuları</h1>
        <div className="chips">
          <span>{SEASON.term}</span>
          <span>{SEASON.windowLabel}</span>
          <Link href={`/${y.track}-sinif`}>{y.gradeLabel} tüm konular →</Link>
        </div>
      </header>

      <p className="lead">{y.lead}</p>

      <section aria-label="Sınav takvimi" className="yazili-takvim">
        <h2>Sınav ne zaman?</h2>
        <p>{y.takvimNotu}</p>
      </section>

      <section aria-label="Konu kapsamı">
        <h2>1. yazılı konu kapsamı</h2>
        <p className="yazili-kapsam-note">
          Aşağıdaki başlıklar bu yazılının çekirdeğini oluşturur. Kesin kapsam
          okulunuzun yıllık planına göre biraz değişebilir.
        </p>
        <ul className="yazili-kapsam">
          {y.kapsam.map((k, i) => {
            const topic = k.topic ? getTopic(k.topic) : undefined;
            return (
              <li key={i}>
                {topic ? (
                  <Link href={`/konular/${k.topic}`} className="yk-title">
                    {topic.title}
                  </Link>
                ) : (
                  <span className="yk-title yk-soon">
                    {k.label}
                    <span className="yk-soon-badge">Yakında</span>
                  </span>
                )}
                <span className="yk-not">{k.not}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-label="Nasıl sorulur">
        <h2>Sınavda nasıl sorulur?</h2>
        <ul className="yazili-list">
          {y.nasilSorulur.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </section>

      <section aria-label="Sık yapılan hatalar" className="yazili-tuzaklar">
        <h2>Sık yapılan hatalar ve tuzaklar</h2>
        <ul>
          {y.tuzaklar.map((t, i) => (
            <li key={i}>
              <strong>{t.baslik}.</strong> {t.aciklama}
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Çalışma planı">
        <h2>İki haftalık çalışma planı</h2>
        <ol className="yazili-plan">
          {y.plan.map((p, i) => (
            <li key={i}>
              <span className="yp-aralik">{p.aralik}</span>
              <span className="yp-is">{p.is}</span>
            </li>
          ))}
        </ol>
      </section>

      {y.soruTipleri && y.soruTipleri.some((s) => getSoruTipleri(s)) && (
        <section aria-label="Soru tipleri" className="konu-related">
          <h2>Bu konuların ÖSYM soru tipleri</h2>
          <ul>
            {y.soruTipleri
              .filter((s) => getSoruTipleri(s))
              .map((s) => {
                const t = getTopic(s);
                return (
                  <li key={s}>
                    <Link href={`/soru-tipleri/${s}`}>
                      {t ? t.title : s} — soru tipleri ve tuzakları
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>
      )}

      <section aria-label="Sıkça sorulan sorular" className="yazili-sss">
        <h2>Sıkça sorulan sorular</h2>
        {y.sss.map((s, i) => (
          <div key={i} className="yazili-sss-item">
            <h3>{s.soru}</h3>
            <p>{s.cevap}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
