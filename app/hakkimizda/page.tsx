import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "çözümebak; 9-12. sınıf, TYT ve AYT matematiğini MEB müfredatına uygun konu anlatımları ve adım adım çözümlü sorularla ücretsiz sunan bir öğrenme platformudur.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    type: "website",
    title: "Hakkımızda | çözümebak",
    description:
      "MEB müfredatına uygun lise matematiği konu anlatımları ve çözümlü sorular.",
    url: "/hakkimizda",
    siteName: "çözümebak",
    locale: "tr_TR",
  },
};

export default function HakkimizdaPage() {
  return (
    <article className="konu container">
      <header className="konu-head">
        <p className="eyebrow">Kurumsal</p>
        <h1>Hakkımızda</h1>
      </header>

      <p className="lead">
        çözümebak, lise matematiğini herkes için anlaşılır kılmak için kurulmuş ücretsiz
        bir öğrenme platformudur. Amacımız; öğrencinin takıldığı her soruda, ezber değil,
        anlamaya dayalı bir çözüm yolu sunmaktır.
      </p>

      <h2>Ne sunuyoruz?</h2>
      <p>
        9, 10, 11 ve 12. sınıf matematiğinin tamamını; ayrıca TYT ve AYT sınavlarına
        yönelik konuları kapsayan anlatımlar hazırlıyoruz. Her konu; net bir konu
        anlatımı, adım adım çözümlü örnek sorular ve kavramı sezgisel olarak gösteren
        interaktif grafiklerle destekleniyor.
      </p>

      <h2>Müfredata uygunluk</h2>
      <p>
        İçeriklerimiz MEB matematik müfredatıyla uyumludur. 9 ve 10. sınıf konuları
        güncel öğretim programının ünite ve kazanım sıralamasını; 11 ve 12. sınıf konuları
        ise yürürlükteki programı takip eder. Konular, sınıf düzeyi ve ünite mantığıyla
        düzenlenmiştir; böylece bir konudan diğerine doğal bir akışla ilerleyebilirsin.
      </p>

      <h2>Kimler için?</h2>
      <p>
        Konuyu ilk kez öğrenen, eksiğini kapatmak isteyen ya da TYT/AYT&apos;ye hazırlanan
        her lise öğrencisi için. Tüm içerikler tamamen ücretsizdir ve üyelik
        gerektirmez.
      </p>

      <p>
        Tüm konulara{" "}
        <Link href="/konular">konular sayfasından</Link> ulaşabilir, aklındaki bir konuyu{" "}
        <Link href="/ara">arama</Link> ile hızlıca bulabilirsin. Görüş ve önerilerin için{" "}
        <Link href="/iletisim">iletişim</Link> sayfasını kullanabilirsin.
      </p>
    </article>
  );
}
