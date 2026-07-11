"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape; lock body scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("nav-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-locked");
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " nav-open" : ""}`}>
      <div className="container head-inner">
        <Link className="brand" href="/" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" width={32} height={32} />
          </span>
          <span className="brand-word">
            çözüme<span className="brand-accent">bak</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className="nav" id="site-nav">
          <Link href="/" onClick={close}>
            Anasayfa
          </Link>
          <Link href="/konular" onClick={close}>
            Konular
          </Link>
          <Link href="/tyt" onClick={close}>
            TYT
          </Link>
          <Link href="/ayt" onClick={close}>
            AYT
          </Link>
          <Link href="/blog" onClick={close}>
            Blog
          </Link>
          <Link href="/durumum" onClick={close}>
            Durumum
          </Link>
          <Link href="/ara" className="nav-search" aria-label="Ara" onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <span className="nav-search-label">Ara</span>
          </Link>
          <Link className="nav-cta" href="/konular/turevin-tanimi" onClick={close}>
            Örnek Konu →
          </Link>
        </nav>
      </div>

      {/* Backdrop closes the menu on tap (mobile only). */}
      <button
        type="button"
        className="nav-backdrop"
        aria-hidden="true"
        tabIndex={-1}
        onClick={close}
      />
    </header>
  );
}
