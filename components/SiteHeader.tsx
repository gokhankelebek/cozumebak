"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container head-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" width={32} height={32} />
          </span>
          <span className="brand-word">
            çözüme<span className="brand-accent">bak</span>
          </span>
        </Link>
        <nav className="nav">
          <Link href="/">Anasayfa</Link>
          <Link href="/konular">Konular</Link>
          <Link href="/tyt">TYT</Link>
          <Link href="/ayt">AYT</Link>
          <Link href="/ara" className="nav-search" aria-label="Ara">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </Link>
          <Link className="nav-cta" href="/konular/turevin-tanimi">
            Örnek Konu →
          </Link>
        </nav>
      </div>
    </header>
  );
}
