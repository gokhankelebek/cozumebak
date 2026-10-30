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
    question: "Hangi sınıf hangi konulardan sorumlu?",
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
        <h1>Birinci Yazılılar: Sınıf Sınıf Matematik 1. Yazılı Konuları</h1>
      </header>

      <p className="lead">
        Kasım geldi, ilk yazılılar kapıda. Lise matematiğinin 1. dönem 1. yazılısı
        her sınıfta farklı bir konudan başlıyor — ve Maarif Modeli'yle birlikte bu
        yılın kapsamı önceki yıllardan farklı. Aşağıda her sınıf için tam konu
        listesi, nasıl sorulduğu, sık yapılan hatalar ve iki haftalık çalışma planı
        var.
      </p>

      <section aria-label="Yazılı sistemi" className="yazili-takvim">
        <h2>Önce sistemi netleştirelim</h2>
        <p>
          Lise matematiğinde 1. yazılı, <strong>okul düzeyinde ortak sınavdır</strong>:
          tarihini ve biçimini okulun zümresi belirler, en az bir hafta önceden
          duyurur. Bunu MEB'in{" "}
          <strong>ülke geneli ortak sınavlarıyla</strong> karıştırma — onlar az
          sayıda ders ve tarihle sınırlıdır. Lise matematiğinde
          bu yıl ülke geneli sınava yalnızca 9 ve 10. sınıflar, hem de daha sonraki
          yazılılarda giriyor. Kasımdaki ilk yazılılar tamamen okul düzeyinde.
        </p>
      </section>

      <section aria-label="Sınıflar" className="yazili-grid">
        <h2>Sınıfını seç</h2>
        <div className="yazili-cards">
          {YAZILILAR.map((y) => (
            <Link key={y.slug} href={`/yazili-sinavlar/${y.slug}`} className="yazili-card">
              <span className="yc-grade">{y.gradeLabel}</span>
              <span className="yc-tema">{y.tema}</span>
              <span className="yc-cta">1. yazılı konuları →</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Blog" className="yazili-blogcta">
        <p>
          Tüm sınıfların ilk yazılılarını, çalışma sırasını ve son hafta taktiklerini
          tek bir rehberde topladık:{" "}
          <Link href="/blog/birinci-yazililar-matematik">
            Birinci Yazılılar: Sınıf Sınıf Matematik Rehberi →
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
