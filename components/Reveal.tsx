"use client";

import { useState, type ReactNode } from "react";

function Reveal({
  variant,
  openLabel,
  closedLabel,
  children,
}: {
  variant: "hint" | "solve";
  openLabel: string;
  closedLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal">
      <button
        className={`reveal-btn ${variant}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="lbl">{open ? openLabel : closedLabel}</span>
        <span className="chev">↓</span>
      </button>
      <div className={`reveal-panel ${variant}-panel${open ? " open" : ""}`}>
        <div className="inner">{children}</div>
      </div>
    </div>
  );
}

export function Ipucu({ children }: { children: ReactNode }) {
  return (
    <Reveal variant="hint" closedLabel="İpucu" openLabel="İpucu">
      {children}
    </Reveal>
  );
}

export function Cozum({ children }: { children: ReactNode }) {
  return (
    <Reveal variant="solve" closedLabel="Çözüme Bak" openLabel="Çözümü Gizle">
      {children}
    </Reveal>
  );
}
