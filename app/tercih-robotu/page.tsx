import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TercihRobotu from "@/components/TercihRobotu";
import { faqLd, type FaqItem } from "@/lib/jsonLd";
import { TERCIH_VERI_YILI } from "@/lib/tercih";
import { SITE_NAME } from "@/lib/seo";

const TITLE = `Tercih Robotu ${TERCIH_VERI_YILI + 1} — Sıralamana Göre Bölümler`;
const DESCRIPTION = `Başarı sıranı gir; ${TERCIH_VERI_YILI} ÖSYM yerleştirme sonuçlarına göre girebileceğin lisans ve ön lisans programlarını Güvenli, Hedef ve Hayal olarak gör. Şehir, devlet/vakıf ve burs filtresiyle.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tercih-robotu" },
  openGraph: {
    type: "website",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: "/tercih-robotu",
    siteName: SITE_NAME,
    locale: "tr_TR",
  },
};

const SSS: FaqItem[] = [
  {
    question: "Tercih robotu nasıl çalışır?",
    answer: `Her program için ÖSYM'nin ${TERCIH_VERI_YILI} yerleştirme sonuçlarındaki en küçük puandan hesaplanan taban sıralamasını ve ÖSYM kılavuzundaki ${TERCIH_VERI_YILI - 1} resmî taban başarı sırasını kullanır. Senin sıranı bu ikisinden zor olanla karşılaştırır: tabanın rahatça üstündeysen Güvenli, yakınındaysan Hedef, biraz altındaysan Hayal olarak gösterir.`,
  },
  {
    question: "Neden puan yerine sıralama kullanılıyor?",
    answer:
      "Puanlar sınavın zorluğuna göre her yıl değişir; aynı bölümün taban puanı bir yıldan diğerine 20–30 puan oynayabilir. Başarı sırası ise çok daha kararlıdır. Bu yüzden tercih yaparken sıralamaya bakmak daha güvenilirdir.",
  },
  {
    question: "Tercihlerimi hangi sırayla yazmalıyım?",
    answer:
      "Gerçekten en çok istediğin programı en üste yaz. ÖSYM yerleştirmesi seni, puanının yettiği en üst tercihine yerleştirir; üstte bir programa yerleşemezsen bu sonraki tercihlerine zarar vermez. 'Garanti' programları yukarı yazmak, sevdiğin ama biraz riskli programları kaçırmana yol açabilir. Listenin altına mutlaka birkaç Güvenli program koy.",
  },
  {
    question: "Kontenjanı dolmayan program ne demek?",
    answer:
      "Son yıl yerleşen sayısı kontenjanın altında kalan programlarda, şartları sağlayan ve tercih eden herkes yerleşmiştir; bu yüzden taban puanı bağlayıcı değildir. Robot bu programları Güvenli olarak gösterir, ancak kontenjanlar ve ilgi her yıl değişebilir.",
  },
  {
    question: "Robotun gösterdiği her programı tercih edebilir miyim?",
    answer:
      "Başarı sırası şartlarını robot senin yerine kontrol eder: Tıp (ilk 50.000), Diş Hekimliği (80.000), Eczacılık ve Hukuk (100.000), Mimarlık (250.000), Mühendislik ve Öğretmenlik (300.000) ile üniversitelerin koyduğu daha sıkı şartlar ÖSYM kılavuzundan okunur; sağlamadığın programlar varsayılan olarak gizlenir. Yaş, sağlık, cinsiyet, yabancı dil veya özel yetenek gibi diğer koşullar ise kontrol edilmez; bunlar için kılavuzdaki program açıklamalarını mutlaka oku.",
  },
];

export default function TercihRobotuPage() {
  return (
    <main className="container">
      <JsonLd data={faqLd(SSS)} />
      <section className="hero" style={{ paddingBottom: 20 }}>
        <p className="eyebrow">Araç · YKS {TERCIH_VERI_YILI + 1}</p>
        <h1 className="hero-title">
          Tercih <em>robotu</em>
        </h1>
        <p className="hero-sub">
          Başarı sıranı gir; {TERCIH_VERI_YILI} ÖSYM sonuçlarına göre girebileceğin programları Güvenli, Hedef ve
          Hayal olarak gör. Puanını henüz bilmiyorsan önce{" "}
          <Link href="/yks-puan-hesaplama" style={{ color: "var(--solve-deep)", fontWeight: 600 }}>
            puan ve sıralamanı hesapla
          </Link>
          .
        </p>
      </section>

      <TercihRobotu />

      <section className="ph-bilgi">
        <h2>Tercih listeni nasıl kurmalısın?</h2>
        <ol>
          <li>
            <b>Gerçek isteğine göre sırala.</b> ÖSYM seni puanının yettiği en üstteki tercihine yerleştirir. Üstteki
            bir programa yerleşemezsen bu, alttaki tercihlerine zarar vermez. Bu yüzden en çok istediğin program her
            zaman en üstte olmalı, &ldquo;garanti&rdquo; diye yukarı yazılan program seni hayalindekinden mahrum
            bırakabilir.
          </li>
          <li>
            <b>Karışık bir liste yap.</b> Birkaç <b>Hayal</b>, ağırlıklı olarak <b>Hedef</b> ve listenin sonunda
            mutlaka birkaç <b>Güvenli</b> program olsun. Yalnızca hayal programlardan oluşan bir liste, hiçbir yere
            yerleşememe riski taşır.
          </li>
          <li>
            <b>Yalnızca gerçekten okuyacağın programları yaz.</b> Yerleştiğin programa kayıt olmazsan, gelecek yıl
            OBP katsayın 0,12 yerine 0,06 olur.
          </li>
          <li>
            <b>Koşulları kılavuzdan doğrula.</b> Başarı sırası şartı, burs, ücret, dil ve sağlık koşulları için ÖSYM
            kılavuzundaki program açıklamalarını mutlaka oku.
          </li>
        </ol>

        <h2>Veriler nereden geliyor?</h2>
        <p>
          Programlar, kontenjanlar ve taban puanları ÖSYM&apos;nin {TERCIH_VERI_YILI}-YKS yerleştirme sonuçlarına
          ilişkin &ldquo;En Küçük ve En Büyük Puanlar&rdquo; tablolarından; {TERCIH_VERI_YILI - 1} taban başarı
          sıraları ÖSYM&apos;nin {TERCIH_VERI_YILI} Yükseköğretim Programları ve Kontenjanları Kılavuzu&apos;ndan
          alınmıştır. {TERCIH_VERI_YILI} taban sıraları, en küçük puanların ÖSYM&apos;nin yayımladığı puan dağılımına
          yerleştirilmesiyle <b>tahmin</b> edilir; üst sıralarda (ilk birkaç bin) bu tahmin kabadır. Gelecek yılın
          kontenjanları ve tabanları değişeceği için sonuçlar yol göstericidir, kesin değildir. Resmî bilgi için{" "}
          <a href="https://www.osym.gov.tr" target="_blank" rel="noopener noreferrer">
            osym.gov.tr
          </a>{" "}
          esas alınmalıdır.
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
