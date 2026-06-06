import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "çözümebak ile iletişime geç: konu önerileri, hata bildirimleri ve geri bildirimlerin için e-posta adresimiz.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    type: "website",
    title: "İletişim | çözümebak",
    description: "Konu önerileri, hata bildirimleri ve geri bildirimlerin için bize ulaş.",
    url: "/iletisim",
    siteName: "çözümebak",
    locale: "tr_TR",
  },
};

export default function IletisimPage() {
  return (
    <article className="konu container">
      <header className="konu-head">
        <p className="eyebrow">Kurumsal</p>
        <h1>İletişim</h1>
      </header>

      <p className="lead">
        Sorularını, konu önerilerini veya bir anlatımda fark ettiğin hatayı bize iletmek
        her zaman değerli. Geri bildirimlerin, içerikleri daha iyi hale getirmemize
        doğrudan yardımcı oluyor.
      </p>

      <h2>E-posta</h2>
      <p>
        Bize{" "}
        <a href="mailto:gokhankelebek@gmail.com">gokhankelebek@gmail.com</a>{" "}
        adresinden ulaşabilirsin. Konu önerileri, hata bildirimleri ve iş birliği
        talepleri için bu adresi kullanabilirsin.
      </p>

      <h2>Bir konu mu arıyorsun?</h2>
      <p>
        Aradığın konu sitede yoksa veya bir konunun anlatımının yakında eklenmesini
        istiyorsan, e-posta ile bildirebilirsin. Mevcut konulara{" "}
        <Link href="/konular">konular sayfasından</Link> göz atabilir,{" "}
        <Link href="/ara">arama</Link> ile hızlıca ulaşabilirsin.
      </p>
    </article>
  );
}
