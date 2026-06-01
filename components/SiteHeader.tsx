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
            <svg viewBox="0 0 34 34" width="32" height="32">
              <rect x="1.6" y="1.6" width="30.8" height="30.8" rx="8.5" fill="#fff" stroke="var(--ink)" strokeWidth="1.8" />
              <path d="M5.5 24 C 11 6.5, 18 7, 28.5 21" fill="none" stroke="var(--coral)" strokeWidth="2.6" strokeLinecap="round" />
              <circle cx="16.6" cy="9.2" r="2.6" fill="var(--ink)" />
              <line x1="9" y1="9.2" x2="24.2" y2="9.2" stroke="var(--coral)" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.75" />
            </svg>
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
