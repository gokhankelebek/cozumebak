import type { Metadata } from "next";
import Link from "next/link";
import { YAZILILAR, SEASON } from "@/lib/yazili";
import { yaziliHubMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { faqLd, type FaqItem } from "@/lib/jsonLd";

export const metadata: Metadata = yaziliHubMetadata();

// Hub-level SSS → also fed into FAQPage JSON-LD (visible twin below).
const HUB_FAQ: FaqItem[] = [
  {
    question: "1. dönem 2. yazılı sınavları ne zaman?",
    answer:
      "9. sınıfta matematik 2. yazılısı ülke geneli ortak sınavdır ve 6 Ocak 2027 Çarşamba günü yapılır. 10, 11 ve 12. sınıflarda tarihi okul belirler; genellikle aralık sonu ile ocak ayının ilk yarısındadır. Birinci dönem 22 Ocak 2027'de biter.",
  },
  {
    question: "2. yazılıda 1. yazılının konuları da çıkar mı?",
    answer:
      "Evet. MEB'in konu–soru dağılım tablolarında 2. yazılı, dönem başından sınav gününe kadar işlenen bütün konuları kapsar. Yeni konuların ağırlığı daha fazladır, ama 1. yazılının konularından da soru gelir.",
  },
  {
    question: "1. dönem 1. yazılı sınavları ne zaman?",
    answer:
      "Lise matematik 1. yazılıları kasım ayının ilk yarısında yapılır. Matematik sınavı okul düzeyinde ortak sınav olduğu için kesin tarihi her okul kendi belirler ve en az bir hafta önceden duyurur; e-Okul'dan ve okulunun duyurularından takip et.",
  },
  {
    question: "Yazılı sınav ile ülke geneli ortak sınav aynı şey mi?",
    answer:
      "Hayır. Okul düzeyinde ortak yazılılar her sınıfta ve her dönem yapılır. Ülke geneli ortak sınavlar ise MEB'in belirlediği az sayıda ders ve tarihle sınırlıdır; lise matematiğinde bu yıl yalnızca 9. sınıf (6 Ocak 2027) ve 10. sınıf (9 Haziran 2027) ülke geneli matematik sınavına girer. Kasımdaki 1. yazılılar okul düzeyindedir.",
  },
  {
    question: "1. yazılıda hangi sınıf hangi konulardan sorumlu?",
    answer:
      "9. sınıf: kümeler, gerçek sayılar, üslü ve köklü ifadeler. 10. sınıf: Geometrik Şekiller (dik üçgende trigonometri, alan, sinüs–kosinüs teoremleri). 11. sınıf: İstatistiksel Araştırma Süreci ve Dörtgenler. 12. sınıf: üstel ve logaritmik fonksiyonlar.",
  },
  {
    question: "11. sınıfta neden trigonometri değil de istatistik çıkıyor?",
    answer:
      "Maarif Modeli'yle 11. sınıfın tema sırası değişti. Yıl artık İstatistiksel Araştırma Süreci ve Geometrik Şekiller (dörtgenler) ile başlıyor; trigonometri ve üstel–logaritma bu yılın sonraki temalarında, yani ilk yazılıdan sonra geliyor.",
  },
];

export default function YaziliHubPage() {
  return (
    <main className="konu container yazili-hub">
      <JsonLd data={faqLd(HUB_FAQ)} />

      <nav className="crumb">
        <Link href="/">Anasayfa</Link>
        {" › "}
        <strong>Yazılı Sınavlar</strong>
      </nav>

      <header className="konu-head">
        <p className="eyebrow">Sınava Hazırlık · {SEASON.year}</p>
        <h1>Yazılı Sınavlar: Sınıf Sınıf Matematik 1. ve 2. Yazılı Konuları</h1>
      </header>

      <p className="lead">
        Ara tatil bitti, sırada dönemin ikinci yazılıları var. İkinci yazılıda
        kapsam birikimli: 1. yazılının konuları da soruluyor, 9. sınıfta ise sınav
        ülke geneli. Aşağıda her sınıf için iki yazılının da konu listesi, nasıl
        sorulduğu, sık yapılan hatalar ve çalışma planı var.
      </p>

      <section aria-label="Yazılı sistemi" className="yazili-takvim">
        <h2>Önce sistemi netleştirelim</h2>
        <p>
          Lise matematiğinde yazılıların çoğu <strong>okul düzeyinde ortak sınavdır</strong>:
          tarihini ve biçimini okulun zümresi belirler, en az bir hafta önceden
          duyurur. MEB'in <strong>ülke geneli ortak sınavları</strong> ise az
          sayıda ders ve tarihle sınırlıdır. Lise matematiğinde bu yıl iki tane var:
          9. sınıfın 1. dönem 2. yazılısı (<strong>6 Ocak 2027</strong>) ve 10. sınıfın
          2. dönem 2. yazılısı (9 Haziran 2027). Diğer bütün matematik yazılıları
          okul düzeyindedir.
        </p>
      </section>

      {([2, 1] as const).map((no) => (
        <section key={no} aria-label={`${no}. yazılı`} className="yazili-grid">
          <h2>{no === 2 ? "2. yazılı: sınıfını seç" : "1. yazılı: sınıfını seç"}</h2>
          <div className="yazili-cards">
            {YAZILILAR.filter((y) => (y.sinav ?? 1) === no).map((y) => (
              <Link key={y.slug} href={`/yazili-sinavlar/${y.slug}`} className="yazili-card">
                <span className="yc-grade">{y.gradeLabel}</span>
                <span className="yc-tema">{y.tema}</span>
                <span className="yc-cta">{no}. yazılı konuları →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section aria-label="Blog" className="yazili-blogcta">
        <p>
          Bütün sınıfları tek rehberde topladık:{" "}
          <Link href="/blog/ikinci-yazililar-matematik">
            İkinci Yazılılar: Sınıf Sınıf Matematik Rehberi →
          </Link>
          {" · "}
          <Link href="/blog/birinci-yazililar-matematik">
            Birinci Yazılılar Rehberi →
          </Link>
        </p>
      </section>

      <section aria-label="Sıkça sorulan sorular" className="yazili-sss">
        <h2>Sıkça sorulan sorular</h2>
        {HUB_FAQ.map((f, i) => (
          <div key={i} className="yazili-sss-item">
            <h3>{f.question}</h3>
            <p>{f.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
