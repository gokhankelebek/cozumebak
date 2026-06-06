import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "çözümebak gizlilik politikası: hangi verileri topluyoruz, çerezleri ve Google Analytics'i nasıl kullanıyoruz.",
  alternates: { canonical: "/gizlilik" },
  openGraph: {
    type: "website",
    title: "Gizlilik Politikası | çözümebak",
    description: "Hangi verileri topladığımız, çerezler ve analitik kullanımı hakkında.",
    url: "/gizlilik",
    siteName: "çözümebak",
    locale: "tr_TR",
  },
};

export default function GizlilikPage() {
  return (
    <article className="konu container">
      <header className="konu-head">
        <p className="eyebrow">Kurumsal</p>
        <h1>Gizlilik Politikası</h1>
      </header>

      <p className="lead">
        çözümebak olarak gizliliğine önem veriyoruz. Bu sayfa; siteyi kullanırken hangi
        verilerin işlendiğini, çerezlerin ve analitik araçların nasıl kullanıldığını sade
        bir dille açıklar.
      </p>

      <h2>Topladığımız veriler</h2>
      <p>
        Siteyi kullanmak için üyelik gerekmez ve sana ait kişisel bilgileri (ad, e-posta,
        telefon vb.) bizimle paylaşman istenmez. Yalnızca bize e-posta gönderdiğinde,
        paylaştığın bilgiler yazışma süresince işlenir.
      </p>

      <h2>Çerezler ve analitik</h2>
      <p>
        Sitenin nasıl kullanıldığını anlamak ve içerikleri geliştirmek için{" "}
        <strong>Google Analytics 4</strong> kullanıyoruz. Bu araç; ziyaret edilen
        sayfalar, ziyaret süresi ve cihaz/tarayıcı türü gibi anonimleştirilmiş kullanım
        verilerini toplar ve bunun için çerezlerden yararlanabilir. Bu verilerle tek bir
        kişiyi tanımlamayı amaçlamayız.
      </p>
      <p>
        Çerezleri tarayıcı ayarlarından dilediğin zaman engelleyebilir veya
        silebilirsin; bu, sitenin temel işlevlerini etkilemez.
      </p>

      <h2>Üçüncü taraf hizmetler</h2>
      <p>
        Site; Google Analytics ve yazı tiplerinin sunulması gibi üçüncü taraf hizmetlerini
        kullanır. Bu hizmetlerin kendi gizlilik politikaları geçerlidir.
      </p>

      <h2>İletişim</h2>
      <p>
        Gizlilikle ilgili sorularını{" "}
        <Link href="/iletisim">iletişim</Link> sayfasındaki e-posta adresinden bize
        iletebilirsin.
      </p>
    </article>
  );
}
