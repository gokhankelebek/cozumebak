import type { Metadata } from "next";
import Link from "next/link";
import HedefNet from "@/components/HedefNet";
import JsonLd from "@/components/JsonLd";
import { faqLd, type FaqItem } from "@/lib/jsonLd";
import { TERCIH_VERI_YILI } from "@/lib/tercih";
import { SITE_NAME } from "@/lib/seo";

const TITLE = `Hedef Net Hesaplama ${TERCIH_VERI_YILI + 1} — Bölüm İçin Kaç Net Gerekir?`;
const DESCRIPTION = `Hedeflediğin üniversite ve bölümü seç; ${TERCIH_VERI_YILI} ÖSYM taban sıralarına göre TYT ve AYT'de ders ders kaç net yapman gerektiğini gör. Emin olduğun dersleri sabitle, gerisini robot dağıtsın.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hedef-net" },
  openGraph: {
    type: "website",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/hedef-net",
    siteName: SITE_NAME,
    locale: "tr_TR",
  },
};

const SSS: FaqItem[] = [
  {
    question: "Bir bölüm için kaç net gerektiği nasıl hesaplanıyor?",
    answer: `Önce programın taban başarı sırası alınır (${TERCIH_VERI_YILI - 1} resmî sıra ile ${TERCIH_VERI_YILI} tahmini sıradan zor olanı). ÖSYM'nin puan dağılımı tersine okunarak bu sıraya karşılık gelen puan bulunur, OBP katkısı çıkarılır ve kalan puan, ÖSYM test ağırlıklarına göre netlere çevrilir.`,
  },
  {
    question: "Aynı puan için bir sürü net kombinasyonu yok mu?",
    answer:
      "Var. Bu yüzden kaydırıcılar senin planın: planı son deneme netlerinden ya da sıfırdan başlatırsın, istediğin dersi istediğin nete çekersin ve hedefe ne kadar kaldığını anında görürsün. Her dersin yanında o dersten tek başına kaç net daha yapsan hedefin kapanacağı yazar. İstersen 'Kalanı robot dağıtsın' düğmesiyle robot, dokunmadığın derslere dengeli bir öneri ekler.",
  },
  {
    question: "Hangi dersteki net daha çok puan getirir?",
    answer:
      "Her testin yanında 1 netin yaklaşık kaç puan ettiği yazar. Sayısalda AYT Matematik ve Fen testleri, TYT testlerinden daha değerlidir; ama 40 soruluk bir testte 35'ten 40'a çıkmak, 15'ten 20'ye çıkmaktan çok daha zordur. En verimli plan genellikle henüz boşluğu çok olan derslere yüklenmektir.",
  },
  {
    question: "Hesap ne kadar kesin?",
    answer:
      "Bir tahmindir. Gerçek puanlar o yılki adayların ortalama ve standart sapmalarına göre hesaplanır ve taban sıralar yıldan yıla değişir. Bu yüzden 'Güvenli bölgeye gir' seçeneğine ya da hedefin birkaç puan üstüne çalışmak daha güvenlidir.",
  },
];

export default function HedefNetPage() {
  return (
    <main className="container">
      <JsonLd data={faqLd(SSS)} />
      <section className="hero" style={{ paddingBottom: 20 }}>
        <p className="eyebrow">Araç · YKS {TERCIH_VERI_YILI + 1}</p>
        <h1 className="hero-title">
          Hedef <em>net</em>
        </h1>
        <p className="hero-sub">
          Hayalindeki bölümü seç; o bölüme girmek için hangi derste kaç net yapman gerektiğini gör. Planını kendin
          kur ya da robottan dengeli bir öneri al. Netlerin{" "}
          <Link href="/yks-puan-hesaplama" style={{ color: "var(--solve-deep)", fontWeight: 600 }}>
            puan hesaplama
          </Link>{" "}
          aracından otomatik gelir.
        </p>
      </section>

      <HedefNet />

      <section className="ph-bilgi">
        <h2>Sıkça sorulan sorular</h2>
        <div className="ph-sss">
          {SSS.map((s) => (
            <details key={s.question}>
              <summary>{s.question}</summary>
              <p>{s.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
