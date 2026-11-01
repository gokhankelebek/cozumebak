// Figures for the "Koşullu Olasılık Soruları" page (slug: kosullu-olasilik-sorulari).
// Three tree diagrams (ağaç şeması); all coordinates hand-computed, no libraries.
// Conventions: dark #0e1b33, accent #e5492b, muted #8a93a6.
// Why not reuse OlasilikAgaci (Agac) / KosulluOlasilikFig (CaprazTablo)? Both are
// prop-less components hard-wired to the 10th-grade lesson's own example (A/A'
// tree, gözlük-cinsiyet table), so they cannot show this page's three-level tree,
// the unequal torba branches or the 1000-person counts. The Örnek 10 table stays
// a markdown table for the same reason.
import type { ReactElement } from "react";

// --- Şekil: 3 atışlık ağaç, tam 2 isabet -------------------------------------
// V: hedefi vurdu (0,8), V': vuramadı (0,2). Leaves y = 18 + 35k (k = 0..7);
// level-2 nodes at pair midpoints (35.5, 105.5, 175.5, 245.5);
// level-1 nodes at 70.5 and 210.5; root at 140.5. x: 20 / 110 / 200 / 290.
// Paths with exactly two hits (VVV', VV'V, V'VV) are drawn in accent.
const HEDEF = ["VVV'", "VV'V", "V'VV"];

function seq(bits: number[]): string {
  return bits.map((b) => (b ? "V" : "V'")).join("");
}

export function KsUcAtisAgaci() {
  const xs = [20, 110, 200, 290];
  // node y for a prefix of length d (0..3) whose index among 2^d prefixes is i
  const nodeY = (d: number, i: number) => {
    const span = 8 / 2 ** d; // number of leaves under the node
    const first = 18 + 35 * i * span;
    const last = first + 35 * (span - 1);
    return (first + last) / 2;
  };
  const lines: ReactElement[] = [];
  const nodes: ReactElement[] = [];
  const leaves: ReactElement[] = [];
  for (let d = 1; d <= 3; d++) {
    for (let i = 0; i < 2 ** d; i++) {
      // bits of prefix i (most significant first); bit 1 = V (upper branch)
      const bits: number[] = [];
      for (let k = d - 1; k >= 0; k--) bits.push(((i >> k) & 1) === 0 ? 1 : 0);
      const s = seq(bits);
      const onPath = HEDEF.some((h) => h.startsWith(s) && (h.length === s.length || !h.slice(s.length).startsWith("'")));
      const px = xs[d - 1];
      const py = nodeY(d - 1, i >> 1);
      const x = xs[d];
      const y = nodeY(d, i);
      lines.push(
        <line
          key={`l${d}-${i}`}
          x1={px}
          y1={py}
          x2={x}
          y2={y}
          stroke={onPath ? "#e5492b" : "#0e1b33"}
          strokeWidth={onPath ? 2.2 : 1.2}
          strokeOpacity={onPath ? 1 : 0.7}
        />
      );
      const up = (i & 1) === 0;
      lines.push(
        <text
          key={`t${d}-${i}`}
          x={(px + x) / 2 - 4}
          y={(py + y) / 2 + (up ? -5 : 13)}
          fontSize="9.5"
          fill="#8a93a6"
          textAnchor="middle"
        >
          {up ? "0,8" : "0,2"}
        </text>
      );
      if (d < 3) {
        nodes.push(
          <text key={`n${d}-${i}`} x={x} y={y - 7} fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="middle">
            {bits[bits.length - 1] ? "V" : "V'"}
          </text>
        );
      } else {
        const hit = HEDEF.includes(s);
        const prod = bits.map((b) => (b ? "0,8" : "0,2")).join("·");
        leaves.push(
          <g key={`f${i}`}>
            <circle cx={x} cy={y} r="3" fill={hit ? "#e5492b" : "#0e1b33"} />
            <text x={x + 10} y={y + 4} fontSize="11" fill={hit ? "#e5492b" : "#0e1b33"} fontWeight={hit ? "700" : "400"}>
              {s}
            </text>
            <text x={x + 52} y={y + 4} fontSize="10.5" fill={hit ? "#e5492b" : "#8a93a6"}>
              {prod}
            </text>
          </g>
        );
      }
    }
  }
  return (
    <svg
      viewBox="0 0 420 300"
      role="img"
      aria-label="Üç atışlık ağaç şeması. Her atışta vurma olasılığı 0,8, vuramama olasılığı 0,2. Sekiz dal ucundan tam iki isabet içeren üçü, V V V üssü, V V üssü V ve V üssü V V, kırmızıyla işaretli; her birinin olasılığı 0,8 çarpı 0,8 çarpı 0,2"
    >
      <text x="110" y="10" fontSize="10" fill="#8a93a6" textAnchor="middle">1. atış</text>
      <text x="200" y="10" fontSize="10" fill="#8a93a6" textAnchor="middle">2. atış</text>
      <text x="290" y="10" fontSize="10" fill="#8a93a6" textAnchor="middle">3. atış</text>
      {lines}
      <circle cx="20" cy="140.5" r="3.5" fill="#0e1b33" />
      {nodes}
      {leaves}
      <text x="20" y="292" fontSize="10" fill="#8a93a6">V: vurdu, V': vuramadı. Her dalda V için 0,8, V' için 0,2.</text>
    </svg>
  );
}

// --- Şekil: önce torba, sonra top (dallar eş olasılıklı değil) ---------------
// Zar 1 veya 2 → I. torba (3K, 1B), olasılık 1/3; aksi hâlde II. torba (1K, 5B), 2/3.
// Root (20,120). Level 1 x = 140: I at y = 62, II at y = 178. Torba labels end at
// x = 134 (left of the node) so they clear the level-2 edges.
// Leaves x = 280: I-K 30, I-B 94, II-K 146, II-B 210.
export function KsTorbaAgaci() {
  const edges: [number, number, number, number, string, number, number, boolean][] = [
    [20, 120, 140, 62, "1/3", 72, 82, false],
    [20, 120, 140, 178, "2/3", 72, 168, false],
    [140, 62, 280, 30, "3/4", 205, 38, true],
    [140, 62, 280, 94, "1/4", 205, 94, false],
    [140, 178, 280, 146, "1/6", 205, 152, true],
    [140, 178, 280, 210, "5/6", 205, 209, false],
  ];
  const leaves: [number, string, boolean][] = [
    [30, "K:  1/3 · 3/4 = 1/4", true],
    [94, "B:  1/3 · 1/4 = 1/12", false],
    [146, "K:  2/3 · 1/6 = 1/9", true],
    [210, "B:  2/3 · 5/6 = 5/9", false],
  ];
  return (
    <svg
      viewBox="0 0 420 245"
      role="img"
      aria-label="Ağaç şeması: zar 1 veya 2 gelirse 1/3 olasılıkla 3 kırmızı 1 beyaz toplu I. torba, aksi hâlde 2/3 olasılıkla 1 kırmızı 5 beyaz toplu II. torba seçiliyor. I. torbadan kırmızı 3/4, II. torbadan kırmızı 1/6. Kırmızı dal uçları 1/4 ve 1/9"
    >
      <text x="20" y="12" fontSize="10" fill="#8a93a6">zar</text>
      <text x="140" y="12" fontSize="10" fill="#8a93a6" textAnchor="middle">torba</text>
      <text x="280" y="12" fontSize="10" fill="#8a93a6" textAnchor="middle">top</text>
      {edges.map(([x1, y1, x2, y2, t, tx, ty, red], i) => (
        <g key={`e${i}`}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={red ? "#e5492b" : "#0e1b33"} strokeWidth={red ? 2 : 1.3} />
          <text x={tx} y={ty} fontSize="10.5" fill="#8a93a6" textAnchor="middle">{t}</text>
        </g>
      ))}
      <circle cx="20" cy="120" r="3.5" fill="#0e1b33" />
      <circle cx="140" cy="62" r="3.5" fill="#0e1b33" />
      <circle cx="140" cy="178" r="3.5" fill="#0e1b33" />
      <text x="134" y="50" fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="end">I. torba (3K, 1B)</text>
      <text x="134" y="198" fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="end">II. torba (1K, 5B)</text>
      {leaves.map(([y, t, red]) => (
        <g key={t}>
          <circle cx="280" cy={y} r="3" fill={red ? "#e5492b" : "#0e1b33"} />
          <text x="290" y={y + 4} fontSize="11" fill={red ? "#e5492b" : "#0e1b33"} fontWeight={red ? "700" : "400"}>{t}</text>
        </g>
      ))}
      <text x="20" y="238" fontSize="10" fill="#8a93a6">K: kırmızı, B: beyaz. P(K) = 1/4 + 1/9 = 13/36</text>
    </svg>
  );
}

// --- Şekil: sıklık ağacı, 1000 kişi -----------------------------------------
// Yaygınlık %4, hastaya pozitif %75, sağlama yanlış pozitif %5.
// Boxes: root 15..95 (y 108..136); level 1 x 150..250 at y 48..76 and 168..196;
// leaves x 305..405 at y 18..42, 82..106, 138..162, 202..226.
export function KsTestAgaci() {
  const box = (x: number, y: number, w: number, h: number, t: string, red: boolean, key: string) => (
    <g key={key}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="5"
        fill={red ? "#e5492b" : "#ffffff"}
        fillOpacity={red ? 0.15 : 1}
        stroke={red ? "#e5492b" : "#0e1b33"}
        strokeWidth={red ? 1.8 : 1.3}
      />
      <text x={x + w / 2} y={y + h / 2 + 4} fontSize="11.5" fill={red ? "#e5492b" : "#0e1b33"} fontWeight="700" textAnchor="middle">
        {t}
      </text>
    </g>
  );
  const edges: [number, number, number, number, string, number, number][] = [
    [95, 122, 150, 62, "%4", 114, 86],
    [95, 122, 150, 182, "%96", 112, 166],
    [250, 62, 305, 30, "%75", 272, 38],
    [250, 62, 305, 94, "%25", 272, 90],
    [250, 182, 305, 150, "%5", 272, 158],
    [250, 182, 305, 214, "%95", 272, 210],
  ];
  return (
    <svg
      viewBox="0 0 420 280"
      role="img"
      aria-label="Sıklık ağacı: 1000 kişinin yüzde 4'ü yani 40 kişi hasta, 960 kişi sağlam. 40 hastanın 30'unun testi pozitif, 10'unun negatif. 960 sağlam kişinin 48'inin testi pozitif, 912'sinin negatif. Pozitif çıkan toplam 78 kişinin 30'u hasta"
    >
      {edges.map(([x1, y1, x2, y2, t, tx, ty], i) => (
        <g key={`e${i}`}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0e1b33" strokeWidth="1.3" />
          <text x={tx} y={ty} fontSize="10" fill="#8a93a6" textAnchor="middle">{t}</text>
        </g>
      ))}
      {box(15, 108, 80, 28, "1000 kişi", false, "r")}
      {box(150, 48, 100, 28, "40 hasta", false, "h")}
      {box(150, 168, 100, 28, "960 sağlam", false, "s")}
      {box(305, 18, 100, 24, "30 pozitif", true, "hp")}
      {box(305, 82, 100, 24, "10 negatif", false, "hn")}
      {box(305, 138, 100, 24, "48 pozitif", true, "sp")}
      {box(305, 202, 100, 24, "912 negatif", false, "sn")}
      <text x="15" y="250" fontSize="11" fill="#0e1b33">Pozitif çıkan: 30 + 48 = 78 kişi.</text>
      <text x="15" y="268" fontSize="11" fill="#e5492b" fontWeight="700">P(hasta | pozitif) = 30/78 = 5/13</text>
    </svg>
  );
}
