import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import "katex/dist/katex.min.css";
import "./globals.css";

const SITE_DESCRIPTION =
  "9, 10, 11 ve 12. sınıf matematiğinin tamamı. TYT ve AYT için adım adım çözümlü sorular, net konu anlatımları ve interaktif grafikler.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cozumebak.com"),
  title: {
    default: "çözümebak — Lise Matematiği · Konu Anlatımı & Çözümlü Sorular",
    template: "%s | çözümebak",
  },
  description: SITE_DESCRIPTION,
  applicationName: "çözümebak",
  authors: [{ name: "çözümebak" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "çözümebak",
    locale: "tr_TR",
    url: "/",
    title: "çözümebak — Lise Matematiği · Konu Anlatımı & Çözümlü Sorular",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "çözümebak — Lise Matematiği",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Hanken+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="paper-bg" aria-hidden="true" />
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="container">
            <div className="foot-grid">
              <div>
                <div className="foot-brand">
                  çözüme<span className="brand-accent">bak</span>
                </div>
                <p className="foot-tag">
                  Türkiye&apos;nin en kapsamlı matematik konu anlatımı ve çözümlü soru
                  rehberi. Takıldığın her soruda, çözüme bak.
                </p>
              </div>
              <div className="foot-col">
                <h4>Sınıflar</h4>
                <Link href="/9-sinif">9. Sınıf</Link>
                <Link href="/10-sinif">10. Sınıf</Link>
                <Link href="/11-sinif">11. Sınıf</Link>
                <Link href="/12-sinif">12. Sınıf</Link>
              </div>
              <div className="foot-col">
                <h4>Sınavlar</h4>
                <Link href="/tyt">TYT Matematik</Link>
                <Link href="/ayt">AYT Matematik</Link>
                <Link href="/konular">Tüm Konular</Link>
                <Link href="/ara">Konu Ara</Link>
              </div>
              <div className="foot-col">
                <h4>Kurumsal</h4>
                <Link href="/">Hakkımızda</Link>
                <Link href="/">İletişim</Link>
                <Link href="/">Gizlilik</Link>
                <Link href="/">SSS</Link>
              </div>
            </div>
            <div className="foot-bottom">
              <span>© 2026 cozumebak.com</span>
              <span>MEB müfredatı · TYT · AYT</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
