// Figures for the TYT "Sayma Kuralları" page (slug: sayma-kurallari).
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// All coordinates hand-computed; no external libraries.
import type { ReactElement } from "react";

// --- Şekil: kutu (slot) diyagramı -------------------------------------------
// Two rows of three slots, 5 symbols available.
// Row 1 (tekrar serbest): 5·5·5 = 125. Row 2 (tekrar yok): 5·4·3 = 60.
// Slots: x = 130, 185, 240 (width 40), row 1 y = 28..68, row 2 y = 92..132.
export function SkKutuDiyagrami() {
  const xs = [130, 185, 240];
  const rows = [
    { y: 28, label: "Tekrar serbest", nums: ["5", "5", "5"], total: "= 125" },
    { y: 92, label: "Tekrar yok", nums: ["5", "4", "3"], total: "= 60" },
  ];
  return (
    <svg viewBox="0 0 360 150" role="img" aria-label="Kutu diyagramı: beş sembolden üç haneli dizi. Tekrar serbestse her kutuya 5 seçenek, 5 çarpı 5 çarpı 5 eşittir 125. Tekrar yoksa kutulara 5, 4 ve 3 seçenek, çarpım 60">
      {xs.map((x, i) => (
        <text key={`h${i}`} x={x + 20} y="18" fontSize="10" fill="#8a93a6" textAnchor="middle">{`${i + 1}. hane`}</text>
      ))}
      {rows.map((r, ri) => (
        <g key={`r${ri}`}>
          <text x="10" y={r.y + 25} fontSize="12" fill="#0e1b33" fontWeight="700">{r.label}</text>
          {xs.map((x, i) => (
            <g key={`b${ri}${i}`}>
              <rect x={x} y={r.y} width="40" height="40" fill="none" stroke="#0e1b33" strokeWidth="1.6" rx="3" />
              <text x={x + 20} y={r.y + 26} fontSize="16" fill="#e5492b" fontWeight="700" textAnchor="middle">{r.nums[i]}</text>
            </g>
          ))}
          <text x="176" y={r.y + 25} fontSize="14" fill="#0e1b33" textAnchor="middle">·</text>
          <text x="231" y={r.y + 25} fontSize="14" fill="#0e1b33" textAnchor="middle">·</text>
          <text x="290" y={r.y + 25} fontSize="14" fill="#0e1b33" fontWeight="700">{r.total}</text>
        </g>
      ))}
    </svg>
  );
}

// --- Şekil: iki galibiyete ulaşan kazanır (eşit olmayan dallar) --------------
// Root (20,130). Set 1: E (100,65), M (100,195).
// E -> E (180,30) [leaf EE], E -> M (180,100).
// (180,100) -> E (260,76) [EME], M (260,116) [EMM].
// M -> E (180,160), M -> M (180,230) [leaf MM].
// (180,160) -> E (260,144) [MEE], M (260,184) [MEM].
export function SkGalibiyetAgaci() {
  const edges: [number, number, number, number][] = [
    [20, 130, 100, 65], [20, 130, 100, 195],
    [100, 65, 180, 30], [100, 65, 180, 100],
    [180, 100, 260, 76], [180, 100, 260, 116],
    [100, 195, 180, 160], [100, 195, 180, 230],
    [180, 160, 260, 144], [180, 160, 260, 184],
  ];
  const inner: [number, number, string][] = [
    [100, 65, "E"], [100, 195, "M"], [180, 100, "M"], [180, 160, "E"],
  ];
  const leaves: [number, number, string, string][] = [
    [180, 30, "E", "EE"], [180, 230, "M", "MM"],
    [260, 76, "E", "EME"], [260, 116, "M", "EMM"],
    [260, 144, "E", "MEE"], [260, 184, "M", "MEM"],
  ];
  return (
    <svg viewBox="0 0 360 260" role="img" aria-label="Ağaç şeması: ilk iki seti kazananın maçı aldığı bir maçta set dizileri. EE ve MM iki sette biter, EME, EMM, MEE ve MEM üç sette biter; toplam 6 dal ucu">
      <text x="100" y="12" fontSize="10" fill="#8a93a6" textAnchor="middle">1. set</text>
      <text x="180" y="12" fontSize="10" fill="#8a93a6" textAnchor="middle">2. set</text>
      <text x="260" y="12" fontSize="10" fill="#8a93a6" textAnchor="middle">3. set</text>
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={`e${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0e1b33" strokeWidth="1.4" />
      ))}
      <circle cx="20" cy="130" r="4" fill="#0e1b33" />
      {inner.map(([x, y, t], i) => (
        <g key={`n${i}`}>
          <circle cx={x} cy={y} r="10" fill="#0e1b33" />
          <text x={x} y={y + 4} fontSize="11" fill="#ffffff" fontWeight="700" textAnchor="middle">{t}</text>
        </g>
      ))}
      {leaves.map(([x, y, t, s], i) => (
        <g key={`l${i}`}>
          <circle cx={x} cy={y} r="10" fill="#e5492b" />
          <text x={x} y={y + 4} fontSize="11" fill="#ffffff" fontWeight="700" textAnchor="middle">{t}</text>
          <text x={x + 16} y={y + 4} fontSize="11" fill="#e5492b" fontWeight="700">{s}</text>
        </g>
      ))}
      <text x="20" y="252" fontSize="10" fill="#8a93a6">Kırmızı uç: maç biter, dal uzamaz.</text>
    </svg>
  );
}

// --- Şekil: iki zar sonuç tablosu ------------------------------------------
// Grid origin (70,40), cell 30 → columns x = 70..250, rows y = 40..220.
// Row = kırmızı zar (r), column = mavi zar (b).
// Navy overlay: r = b (6 cells). Red overlay: r + b = 8 (5 cells). (4,4) gets both.
export function SkZarTablosu() {
  const n = [1, 2, 3, 4, 5, 6];
  const cells: ReactElement[] = [];
  for (const r of n) {
    for (const b of n) {
      const x = 70 + (b - 1) * 30;
      const y = 40 + (r - 1) * 30;
      const same = r === b;
      const eight = r + b === 8;
      cells.push(
        <g key={`c${r}${b}`}>
          <rect x={x} y={y} width="30" height="30" fill="#ffffff" stroke="#8a93a6" strokeWidth="0.8" />
          {same && <rect x={x} y={y} width="30" height="30" fill="#0e1b33" fillOpacity="0.18" />}
          {eight && <rect x={x} y={y} width="30" height="30" fill="#e5492b" fillOpacity="0.3" />}
          {(same || eight) && (
            <text x={x + 15} y={y + 19} fontSize="10" fill="#0e1b33" textAnchor="middle">{`${r},${b}`}</text>
          )}
        </g>
      );
    }
  }
  return (
    <svg viewBox="0 0 300 270" role="img" aria-label="İki zarın 36 sıralı sonucunu gösteren 6'ya 6 tablo. Köşegendeki 6 hücrede iki zar aynı sayıyı gösteriyor; toplamı 8 olan 5 hücre ayrıca işaretli; 4,4 hücresi iki gruba da giriyor">
      <text x="160" y="14" fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="middle">mavi zar</text>
      <text x="22" y="130" fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="middle" transform="rotate(-90 22 130)">kırmızı zar</text>
      {n.map((v) => (
        <text key={`ch${v}`} x={70 + (v - 1) * 30 + 15} y="33" fontSize="11" fill="#8a93a6" textAnchor="middle">{v}</text>
      ))}
      {n.map((v) => (
        <text key={`rh${v}`} x="56" y={40 + (v - 1) * 30 + 19} fontSize="11" fill="#8a93a6" textAnchor="middle">{v}</text>
      ))}
      {cells}
      <rect x="40" y="236" width="12" height="12" fill="#0e1b33" fillOpacity="0.18" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="58" y="246" fontSize="10" fill="#0e1b33">aynı sayı (6)</text>
      <rect x="150" y="236" width="12" height="12" fill="#e5492b" fillOpacity="0.3" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="168" y="246" fontSize="10" fill="#0e1b33">toplam 8 (5)</text>
      <text x="40" y="264" fontSize="10" fill="#8a93a6">4,4 hücresi iki grupta da var.</text>
    </svg>
  );
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
