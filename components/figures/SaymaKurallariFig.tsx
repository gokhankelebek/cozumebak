import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the TYT "Sayma Kuralları" page (slug: sayma-kurallari).
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// All coordinates hand-computed; no external libraries.
import type { ReactElement } from "react";

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function SkKutuDiyagrami() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkKutuDiyagrami} />;
}

// --- Şekil: iki galibiyete ulaşan kazanır (eşit olmayan dallar) --------------
// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function SkGalibiyetAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkGalibiyetAgaci} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function SkZarTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkZarTablosu} />;
}

// --- Şekil: yol ağı -------------------------------------------------------
// Towns: A (40,120), B (180,40), C (320,120), circles r = 14.
// A–B: 3 roads (straight + quadratic curves with controls (96,55.6), (124,104.4)).
// B–C: 4 roads (controls (271,43.5), (257,67.8), (243,92.2), (229,116.5)).
// A–C: 2 roads below (controls (180,180), (180,220)).
export function SkYolAgi() {
  return (
    <svg viewBox="0 0 360 200" role="img" aria-label="Yol ağı: A ile B kasabası arasında 3, B ile C arasında 4 yol var; ayrıca A ile C arasında B'ye uğramayan 2 doğrudan yol var">
      {/* A–B */}
      <path d="M40 120 Q96 55.6 180 40" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <line x1="40" y1="120" x2="180" y2="40" stroke="#0e1b33" strokeWidth="1.6" />
      <path d="M40 120 Q124 104.4 180 40" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      {/* B–C */}
      <path d="M180 40 Q271 43.5 320 120" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <path d="M180 40 Q257 67.8 320 120" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <path d="M180 40 Q243 92.2 320 120" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      <path d="M180 40 Q229 116.5 320 120" fill="none" stroke="#0e1b33" strokeWidth="1.6" />
      {/* A–C */}
      <path d="M40 120 Q180 180 320 120" fill="none" stroke="#e5492b" strokeWidth="1.6" />
      <path d="M40 120 Q180 220 320 120" fill="none" stroke="#e5492b" strokeWidth="1.6" />
      {/* towns */}
      {([[40, 120, "A"], [180, 40, "B"], [320, 120, "C"]] as [number, number, string][]).map(([x, y, t]) => (
        <g key={t}>
          <circle cx={x} cy={y} r="14" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.8" />
          <text x={x} y={y + 5} fontSize="13" fill="#0e1b33" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
      <text x="56" y="66" fontSize="11" fill="#8a93a6">3 yol</text>
      <text x="282" y="62" fontSize="11" fill="#8a93a6">4 yol</text>
      <text x="180" y="194" fontSize="11" fill="#e5492b" textAnchor="middle">2 doğrudan yol</text>
    </svg>
  );
}

// --- Şekil: üç şeritli bayraklar (listele, sonra say) -----------------------
// 3 colors: K (kırmızı #e5492b), L (lacivert #0e1b33), G (gri #8a93a6).
// Adjacent stripes differ → 3·2·2 = 12 flags. Row = first stripe color.
// Flag (42×40) at x = 24 + 80·col, y = 16 + 62·row; letters below at y + 54.
export function SkBayrakListesi() {
  const col: Record<string, string> = { K: "#e5492b", L: "#0e1b33", G: "#8a93a6" };
  const letters = ["K", "L", "G"];
  const flags: string[][] = [];
  for (const a of letters)
    for (const b of letters)
      for (const c of letters) if (a !== b && b !== c) flags.push([a, b, c]);
  return (
    <svg viewBox="0 0 330 200" role="img" aria-label="Üç dikey şeritli 12 bayrağın listesi: kırmızı, lacivert ve gri renkleriyle komşu şeritler farklı renkte. Her satır ilk şeridin rengine göre 4 bayrak içeriyor">
      {flags.map((f, i) => {
        const x = 24 + 80 * (i % 4);
        const y = 16 + 62 * Math.floor(i / 4);
        return (
          <g key={`f${i}`}>
            {f.map((c, j) => (
              <rect key={j} x={x + 14 * j} y={y} width="14" height="40" fill={col[c]} />
            ))}
            <rect x={x} y={y} width="42" height="40" fill="none" stroke="#0e1b33" strokeWidth="1" />
            <text x={x + 21} y={y + 54} fontSize="10" fill="#0e1b33" textAnchor="middle">{f.join(" ")}</text>
          </g>
        );
      })}
    </svg>
  );
}
