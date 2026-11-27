import Link from "next/link";
import { getYazili, digerYazili, SEASON, SINAVLAR } from "@/lib/yazili";
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
  const sinav = SINAVLAR[y.sinav ?? 1];
  const diger = digerYazili(y);
  const yeniVar = y.kapsam.some((k) => k.yeni);

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
        <strong>{y.gradeLabel} {sinav.kisa}</strong>
      </nav>

      <header className="konu-head">
        <p className="eyebrow">{SEASON.year} · {y.tema}</p>
        <h1>{y.gradeLabel} Matematik {sinav.term} Konuları</h1>
        <div className="chips">
          <span>{sinav.term}</span>
          <span>{y.windowLabel ?? sinav.windowLabel}</span>
          <Link href={`/${y.track}-sinif`}>{y.gradeLabel} tüm konular →</Link>
        </div>
      </header>

      <p className="lead">{y.lead}</p>

      <section aria-label="Sınav takvimi" className="yazili-takvim">
        <h2>Sınav ne zaman?</h2>
        <p>{y.takvimNotu}</p>
        <p className="yazili-mazeret">{sinav.mazeret}</p>
      </section>

      <section aria-label="Konu kapsamı">
        <h2>{sinav.kisa} konu kapsamı</h2>
        <p className="yazili-kapsam-note">
          {y.kapsamNotu ??
            "Aşağıdaki başlıklar bu yazılının çekirdeğini oluşturur. Kesin kapsam okulunuzun yıllık planına göre biraz değişebilir."}
          {yeniVar &&
            " Kapsam birikimlidir: “Yeni” etiketli başlıklar bu sınavla geliyor, diğerleri 1. yazılıda da sorulmuştu."}
        </p>
        <ul className="yazili-kapsam">
          {y.kapsam.map((k, i) => {
            const topic = k.topic ? getTopic(k.topic) : undefined;
            return (
              <li key={i}>
                {topic ? (
                  <span className="yk-title">
                    <Link href={`/konular/${k.topic}`}>{topic.title}</Link>
                    {k.yeni && <span className="yk-soon-badge yk-yeni-badge">Yeni</span>}
                  </span>
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

      {y.ekAnlatim && y.ekAnlatim.length > 0 && (
        <section aria-label="Yeni konular — kısa anlatım" className="yazili-ekanlatim">
          <h2>Yeni konular — kısa anlatım</h2>
          <p className="yazili-kapsam-note">
            Bu başlıklar Maarif Modeli&apos;yle yeni geldi ve ayrıntılı konu
            anlatımları hazırlanıyor. Yazılıya kadar işini görecek kısa anlatımı
            aşağıda bulabilirsin.
          </p>
          {y.ekAnlatim.map((e, i) => (
            <div key={i} className="yazili-ekanlatim-item">
              <h3>{e.baslik}</h3>
              <p>{e.icerik}</p>
            </div>
          ))}
        </section>
      )}

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
        <h2>{sinav.planBaslik}</h2>
        <ol className="yazili-plan">
          {y.plan.map((p, i) => (
            <li key={i}>
              <span className="yp-aralik">{p.aralik}</span>
              <span className="yp-is">{p.is}</span>
            </li>
          ))}
        </ol>
        <p className="yazili-plan-note">
          Pratik için her konunun kendi sayfasındaki çözümlü soru bankasını kullan —
          yukarıdaki kapsam başlıklarına tıklayarak ulaşabilirsin.
        </p>
      </section>

      {y.soruTipleri && y.soruTipleri.some((s) => getSoruTipleri(s)) && (
        <section aria-label="Soru tipleri" className="konu-related">
          <h2>Bu konuların soru tipleri</h2>
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

      {diger && (
        <section aria-label="Diğer yazılı" className="yazili-blogcta">
          <p>
            {(y.sinav ?? 1) === 1 ? "Sırada ikinci yazılı mı var? " : "Birinci yazılının konularına dönmek için: "}
            <Link href={`/yazili-sinavlar/${diger.slug}`}>
              {diger.gradeLabel} matematik {SINAVLAR[diger.sinav ?? 1].kisa.toLocaleLowerCase("tr")} konuları →
            </Link>
          </p>
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
