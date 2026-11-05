// Figures for the "Olasılıkta Temel Kavramlar" (olasilik-temel-kavramlar) page.
// All exports carry the page-unique prefix "Otk".
// Conventions: dark #0e1b33, accent #e5492b, axis/grey #8a93a6, light fill #fbf9f4.
// Coordinates hand-computed (see the comment above each figure).

// (1) Ağaç şeması: üç madenî para art arda atılıyor → 2·2·2 = 8 çıktı.
// Root (30,145). Level 1 (x=110): Y (110,85), T (110,205).
// Level 2 (x=200): YY (200,55), YT (200,115), TY (200,175), TT (200,235).
// Leaves (x=290): y = 40,70 | 100,130 | 160,190 | 220,250 (each level-2 node ±15).
export function OtkParaAgaci() {
  const l1 = [
    { y: 85, t: "Y" },
    { y: 205, t: "T" },
  ];
  const l2 = [
    { y: 55, p: 85, t: "Y" },
    { y: 115, p: 85, t: "T" },
    { y: 175, p: 205, t: "Y" },
    { y: 235, p: 205, t: "T" },
  ];
  const leaves = [
    { y: 40, p: 55, t: "Y", s: "YYY" },
    { y: 70, p: 55, t: "T", s: "YYT" },
    { y: 100, p: 115, t: "Y", s: "YTY" },
    { y: 130, p: 115, t: "T", s: "YTT" },
    { y: 160, p: 175, t: "Y", s: "TYY" },
    { y: 190, p: 175, t: "T", s: "TYT" },
    { y: 220, p: 235, t: "Y", s: "TTY" },
    { y: 250, p: 235, t: "T", s: "TTT" },
  ];
  return (
    <svg viewBox="0 0 380 265" role="img" aria-label="Üç madenî paranın art arda atılması için ağaç şeması: her para yazı ya da tura gelir, dalların uçlarında YYY'den TTT'ye kadar 8 çıktı vardır">
      {/* column headers */}
      <text x="88" y="16" fontSize="11" fill="#8a93a6">1. para</text>
      <text x="178" y="16" fontSize="11" fill="#8a93a6">2. para</text>
      <text x="268" y="16" fontSize="11" fill="#8a93a6">3. para</text>

      {/* branches */}
      {l1.map((n, i) => (
        <line key={`a${i}`} x1="30" y1="145" x2="110" y2={n.y} stroke="#0e1b33" strokeWidth="1.5" />
      ))}
      {l2.map((n, i) => (
        <line key={`b${i}`} x1="110" y1={n.p} x2="200" y2={n.y} stroke="#0e1b33" strokeWidth="1.4" />
      ))}
      {leaves.map((n, i) => (
        <line key={`c${i}`} x1="200" y1={n.p} x2="290" y2={n.y} stroke="#e5492b" strokeWidth="1.3" />
      ))}

      {/* nodes and their letters */}
      <circle cx="30" cy="145" r="3.5" fill="#0e1b33" />
      {l1.map((n, i) => (
        <g key={`na${i}`}>
          <circle cx="110" cy={n.y} r="3.5" fill="#0e1b33" />
          <text x="104" y={n.y - 8} fontSize="12" fontWeight="700" fill="#0e1b33">{n.t}</text>
        </g>
      ))}
      {l2.map((n, i) => (
        <g key={`nb${i}`}>
          <circle cx="200" cy={n.y} r="3.5" fill="#0e1b33" />
          <text x="194" y={n.y - 8} fontSize="12" fontWeight="700" fill="#0e1b33">{n.t}</text>
        </g>
      ))}
      {leaves.map((n, i) => (
        <g key={`nc${i}`}>
          <circle cx="290" cy={n.y} r="3.5" fill="#e5492b" />
          <text x="300" y={n.y + 4} fontSize="12" fill="#e5492b">{n.s}</text>
        </g>
      ))}
      <text x="340" y="149" fontSize="11" fill="#8a93a6">8 çıktı</text>
    </svg>
  );
}

// (2) Venn şeması: örnek uzay S içinde A ve B olayları, dört bölge.
// S: rect (10,20)–(330,200). A: center (130,110) r=70; B: center (210,110) r=70.
// Centers 80 apart → circles meet at x=170, y = 110 ± √(70²−40²) = 110 ± 57.45.
// Lens (A∩B): from (170,52.55) along A's right arc to (170,167.45), back along
// B's left arc; both arcs are small (large-arc 0) and clockwise (sweep 1).
export function OtkVennBolgeleri() {
  return (
    <svg viewBox="0 0 340 210" role="img" aria-label="Venn şeması: örnek uzay S içinde kesişen A ve B olayları; bölgeler yalnız A, A kesişim B, yalnız B ve ikisinin de dışında kalan hiçbiri bölgesi">
      <rect x="10" y="20" width="320" height="180" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="20" y="40" fontSize="13" fontWeight="700" fill="#8a93a6">S</text>

      {/* intersection lens */}
      <path d="M170,52.55 A70,70 0 0,1 170,167.45 A70,70 0 0,1 170,52.55 Z" fill="#e5492b" fillOpacity="0.15" />

      <circle cx="130" cy="110" r="70" fill="none" stroke="#0e1b33" strokeWidth="1.8" />
      <circle cx="210" cy="110" r="70" fill="none" stroke="#e5492b" strokeWidth="1.8" />

      <text x="60" y="48" fontSize="14" fontWeight="700" fill="#0e1b33">A</text>
      <text x="272" y="48" fontSize="14" fontWeight="700" fill="#e5492b">B</text>

      <text x="74" y="114" fontSize="12" fill="#0e1b33">yalnız A</text>
      <text x="152" y="114" fontSize="12" fill="#0e1b33">A ∩ B</text>
      <text x="220" y="114" fontSize="12" fill="#0e1b33">yalnız B</text>
      <text x="196" y="193" fontSize="11" fill="#8a93a6">hiçbiri: (A ∪ B)′</text>
    </svg>
  );
}

// (3) İki zar tablosu: satır = 1. zar (a), sütun = 2. zar (b), hücrede a+b.
// Grid origin (60,60), cell 36 px → grid spans 60..276.
// Cell (a,b) top-left: x = 60 + 36(b−1), y = 60 + 36(a−1); text at center (+18, +23).
// Highlighted: the three cells with sum 10 → (4,6), (5,5), (6,4).
export function OtkZarTablosu() {
  const n = [1, 2, 3, 4, 5, 6];
  return (
    <svg viewBox="0 0 300 290" role="img" aria-label="İki zarın 6'ya 6 tablosu: 36 hücrenin her birinde iki zarın toplamı yazılı; toplamı 10 olan üç hücre vurgulanmış">
      <text x="140" y="24" fontSize="11" fill="#8a93a6">2. zar →</text>
      <text x="6" y="54" fontSize="11" fill="#8a93a6">1. zar ↓</text>

      {/* column headers */}
      {n.map((b) => (
        <text key={`h${b}`} x={60 + 36 * (b - 1) + 14} y="50" fontSize="12" fontWeight="700" fill="#0e1b33">{b}</text>
      ))}
      {/* row headers */}
      {n.map((a) => (
        <text key={`r${a}`} x="42" y={60 + 36 * (a - 1) + 23} fontSize="12" fontWeight="700" fill="#0e1b33">{a}</text>
      ))}

      {/* cells */}
      {n.map((a) =>
        n.map((b) => {
          const hot = a + b === 10;
          return (
            <g key={`c${a}${b}`}>
              <rect
                x={60 + 36 * (b - 1)}
                y={60 + 36 * (a - 1)}
                width="36"
                height="36"
                fill={hot ? "#e5492b" : "#fbf9f4"}
                fillOpacity={hot ? 0.2 : 1}
                stroke="#8a93a6"
                strokeWidth="1"
              />
              <text
                x={60 + 36 * (b - 1) + (a + b >= 10 ? 11 : 14)}
                y={60 + 36 * (a - 1) + 23}
                fontSize="12"
                fontWeight={hot ? 700 : 400}
                fill={hot ? "#e5492b" : "#0e1b33"}
              >
                {a + b}
              </text>
            </g>
          );
        })
      )}
    </svg>
  );
}

// (4) Hileli zar çubuk grafiği: 6 gelme olasılığı diğer her yüzün 3 katı.
// 3p + 5p = 1 → p = 1/8. Scale: 1/8 ↔ 40 px, baseline y = 170.
// Bars (width 26) centered at x = 70, 110, ..., 270 → left edge x = center − 13.
// Faces 1–5: height 40 (top y=130). Face 6: height 120 (top y=50).
// Fair-die reference 1/6 → 40·(8/6) = 53.3 px → y = 116.7 (dashed).
export function OtkHileliZarCubuk() {
  const faces = [1, 2, 3, 4, 5, 6];
  // 1/10 olasılık = 28 birim; eksen y=170
  return (
    <svg viewBox="0 0 310 200" role="img" aria-label="Hileli zar çubuk grafiği: 1'den 5'e kadar her yüzün olasılığı 1 bölü 10, 6'nın olasılığı 5 bölü 10; kesik çizgi hilesiz zardaki 1 bölü 6 değerini gösterir">
      {/* axes */}
      <line x1="45" y1="170" x2="295" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="45" y1="20" x2="45" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      {/* y ticks 1/10, 3/10, 5/10 */}
      {[142, 86, 30].map((y) => (
        <line key={`t${y}`} x1="41" y1={y} x2="45" y2={y} stroke="#8a93a6" strokeWidth="1.5" />
      ))}
      <text x="10" y="146" fontSize="11" fill="#0e1b33">1/10</text>
      <text x="10" y="90" fontSize="11" fill="#0e1b33">3/10</text>
      <text x="10" y="34" fontSize="11" fill="#0e1b33">5/10</text>

      {/* bars */}
      {faces.map((f, i) => {
        const cx = 70 + 40 * i;
        const h = f === 6 ? 140 : 28;
        return (
          <g key={`b${f}`}>
            <rect x={cx - 13} y={170 - h} width="26" height={h} fill={f === 6 ? "#e5492b" : "#0e1b33"} fillOpacity={f === 6 ? 0.85 : 0.75} />
            <text x={cx - 4} y="186" fontSize="12" fill="#0e1b33">{f}</text>
          </g>
        );
      })}

      {/* fair-die reference: 1/6 -> 170 - 280/6 */}
      <line x1="45" y1="123.3" x2="295" y2="123.3" stroke="#8a93a6" strokeWidth="1.3" strokeDasharray="5 4" />
      <text x="150" y="117" fontSize="10" fill="#8a93a6">hilesiz zar: 1/6</text>
      <text x="230" y="198" fontSize="10" fill="#8a93a6">zarın yüzü</text>
    </svg>
  );
}
