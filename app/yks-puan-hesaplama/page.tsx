import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PuanHesaplama from "@/components/PuanHesaplama";
import { faqLd, type FaqItem } from "@/lib/jsonLd";
import { AGIRLIK, KILAVUZ_YILI, PUAN_TURLERI, TESTS, katsayi, type PuanTuru } from "@/lib/yksPuan";
import { SITE_NAME } from "@/lib/seo";

const TITLE = `YKS Puan Hesaplama ${KILAVUZ_YILI + 1} — TYT, SAY, EA, SÖZ, DİL`;
const DESCRIPTION =
  "Doğru ve yanlışlarını gir; TYT, Sayısal, Eşit Ağırlık, Sözel ve Dil puanını OBP dahil anında hesapla. Hangi dersteki netin daha çok puan getirdiğini de gör.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/yks-puan-hesaplama" },
  openGraph: {
    type: "website",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/yks-puan-hesaplama",
    siteName: SITE_NAME,
    locale: "tr_TR",
  },
};

// Visible on the page AND fed to FAQPage JSON-LD (markup must mirror content).
const SSS: FaqItem[] = [
  {
    question: "YKS puanı nasıl hesaplanır?",
    answer:
      "Her testte net = doğru − yanlış ÷ 4 bulunur. Netler, ÖSYM'nin puan türüne göre belirlediği test ağırlıklarıyla çarpılıp 100 taban puana eklenir; böylece 100 ile 500 arasında ham puan çıkar. Lisans puan türlerinde (SAY, EA, SÖZ, DİL) TYT'nin payı %40, AYT'nin (DİL'de YDT'nin) payı %60'tır. Yerleştirme puanı için ham puana OBP × 0,12 eklenir.",
  },
  {
    question: "OBP puana nasıl eklenir?",
    answer:
      "OBP, diploma notunun 5 ile çarpılmasıyla bulunur (50–100 arası not → 250–500 OBP). Yerleştirme puanına OBP × 0,12 eklenir; yani en fazla 60 puan. Önceki yıl bir programa yerleşen adaylarda katsayı 0,06'dır.",
  },
  {
    question: "Bu hesaplama kesin sonuç verir mi?",
    answer:
      "Hayır, tahmindir. ÖSYM puanları o yılki tüm adayların ortalama ve standart sapmasına göre standart puan olarak hesaplar; bu yüzden aynı net farklı yıllarda farklı puan getirebilir. Araç, ÖSYM'nin yayımladığı test ağırlıklarını kullanarak yakın bir tahmin verir.",
  },
  {
    question: "YKS'de baraj puanı var mı?",
    answer:
      "Eskiden uygulanan 150 ve 180 puanlık genel barajlar kaldırıldı. Bugün TYT puanının hesaplanması için Türkçe veya Temel Matematik testinden en az 0,5 net, bir lisans puan türünün hesaplanması için o türün AYT (veya YDT) testlerinden en az birinde 0,5 net gerekir. Bazı lisans programlarında ayrıca başarı sırası şartı vardır.",
  },
  {
    question: "4 yanlış 1 doğruyu götürür mü?",
    answer:
      "Evet. YKS'de net, doğru sayısından yanlış sayısının dörtte birinin çıkarılmasıyla bulunur. Boş bırakılan sorular neti etkilemez.",
  },
];

const TUR_SIRASI: PuanTuru[] = ["TYT", "SAY", "EA", "SÖZ", "DİL"];

function katsayiMetni(n: number) {
  return n ? n.toLocaleString("tr-TR", { maximumFractionDigits: 2 }) : "–";
}

export default function YksPuanHesaplamaPage() {
  return (
    <main className="container">
      <JsonLd data={faqLd(SSS)} />
      <section className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow">Araç · YKS {KILAVUZ_YILI + 1}</p>
        <h1 className="hero-title">
          YKS <em>puan</em> hesaplama
        </h1>
        <p className="hero-sub">
          Deneme ya da sınav sonrası doğru ve yanlışlarını gir; TYT, Sayısal, Eşit Ağırlık, Sözel ve Dil
          puanını OBP dahil anında gör. Hangi dersteki bir netin daha çok puan getirdiğini de gösteriyoruz.
        </p>
      </section>

      <PuanHesaplama />

      <section className="ph-bilgi">
        <h2>YKS puanı nasıl hesaplanır?</h2>
        <ol>
          <li>
            <b>Net:</b> Her testte <code>Net = Doğru − Yanlış ÷ 4</code>. Boş bırakılan soru neti etkilemez.
          </li>
          <li>
            <b>Ham puan:</b> <code>100 + Σ (katsayı × net)</code>. Katsayılar, ÖSYM'nin her puan türü için
            yayımladığı test ağırlıklarından gelir; tüm testleri tam yapan aday 500 ham puana ulaşır.
          </li>
          <li>
            <b>Yerleştirme puanı:</b> <code>Ham puan + OBP × 0,12</code>. OBP = diploma notu × 5. Önceki
            yıl bir programa yerleştiysen katsayı 0,06 olur.
          </li>
        </ol>

        <h3>Net başına puan katsayıları</h3>
        <p>
          Tablodaki sayılar, ilgili testteki bir netin o puan türüne yaklaşık kaç puan eklediğini gösterir.
          Matematiğin ağırlığı en büyük olanlardan; Sayısal ve Eşit Ağırlık'ta AYT Matematik'teki her net
          yaklaşık 3 puan değerinde.
        </p>
        <div className="ph-tablo-kap">
          <table className="ph-tablo">
            <thead>
              <tr>
                <th scope="col">Test</th>
                {TUR_SIRASI.map((t) => (
                  <th scope="col" key={t}>
                    {PUAN_TURLERI.find((p) => p.key === t)!.key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TESTS.map((t) => (
                <tr key={t.key}>
                  <th scope="row">
                    {t.oturum} {t.label}
                  </th>
                  {TUR_SIRASI.map((tur) => (
                    <td key={tur}>{AGIRLIK[tur][t.key] ? katsayiMetni(katsayi(tur, t.key)) : "–"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ph-kaynak">
          Kaynak: ÖSYM {KILAVUZ_YILI} YKS Kılavuzu'ndaki test ağırlıkları. ÖSYM puanları standart puanla
          hesapladığı için sonuçlar tahminidir; kesin bilgi için{" "}
          <a href="https://www.osym.gov.tr" target="_blank" rel="noopener noreferrer">
            osym.gov.tr
          </a>
          'yi esas al.
        </p>

        <h2>Matematik netini artırmak için</h2>
        <p>
          Puan türlerinin çoğunda en büyük pay matematikte. Eksik konularını kapatmak için{" "}
          <Link href="/tyt">TYT Matematik</Link> ve <Link href="/ayt">AYT Matematik</Link> konu
          anlatımlarına, çözdüğün sorulara göre sıradaki adımı görmek için <Link href="/durumum">Durumum</Link>{" "}
          sayfasına bak.
        </p>

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
