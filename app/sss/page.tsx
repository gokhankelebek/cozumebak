import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { faqLd, type FaqItem } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "çözümebak hakkında sıkça sorulan sorular: içerikler ücretsiz mi, hangi sınıflar var, MEB müfredatına uygun mu, TYT ve AYT kapsanıyor mu?",
  alternates: { canonical: "/sss" },
  openGraph: {
    type: "website",
    title: "Sıkça Sorulan Sorular | çözümebak",
    description: "çözümebak hakkında merak edilenler.",
    url: "/sss",
    siteName: "çözümebak",
    locale: "tr_TR",
  },
};

// Q&A pairs — also fed into FAQPage JSON-LD below for rich results.
const FAQ: FaqItem[] = [
  {
    question: "çözümebak ücretsiz mi?",
    answer:
      "Evet. Tüm konu anlatımları ve çözümlü sorular tamamen ücretsizdir; üyelik veya ödeme gerektirmez.",
  },
  {
    question: "Hangi sınıf ve sınavları kapsıyor?",
    answer:
      "9, 10, 11 ve 12. sınıf matematiğinin tamamını; ayrıca TYT ve AYT matematiğini kapsar.",
  },
  {
    question: "İçerikler MEB müfredatına uygun mu?",
    answer:
      "Evet. Konular MEB matematik müfredatıyla uyumlu olarak, sınıf düzeyi ve ünite sıralamasına göre düzenlenmiştir.",
  },
  {
    question: "Sorular adım adım mı çözülüyor?",
    answer:
      "Her konuda örnek sorular adım adım, gerekçeleriyle birlikte çözülür; amaç ezber değil, çözüm yolunu anlamaktır.",
  },
  {
    question: "Üye olmam gerekiyor mu?",
    answer:
      "Hayır. Siteyi kullanmak için herhangi bir üyelik veya giriş gerekmez; tüm içeriklere doğrudan erişebilirsin.",
  },
  {
    question: "Aradığım konu yoksa ne yapmalıyım?",
    answer:
      "Bazı konular hazırlanma aşamasındadır ve 'yakında' olarak işaretlenir. Eklenmesini istediğin bir konuyu iletişim sayfasındaki e-posta adresinden bize bildirebilirsin.",
  },
];

export default function SssPage() {
  return (
    <article className="konu container">
      <JsonLd data={faqLd(FAQ)} />
      <header className="konu-head">
        <p className="eyebrow">Kurumsal</p>
        <h1>Sıkça Sorulan Sorular</h1>
      </header>

      <p className="lead">
        çözümebak hakkında en çok merak edilenleri burada topladık. Cevabını
        bulamadığın bir soru varsa <Link href="/iletisim">bize yazabilirsin</Link>.
      </p>

      {FAQ.map((item) => (
        <section key={item.question}>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </section>
      ))}
    </article>
  );
}
