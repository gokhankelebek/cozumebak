// Figures for the TYT "Permütasyon ve Faktöriyel" (permutasyon-siralama) page.
// Conventions: text/lines dark #0e1b33, accent #e5492b, secondary #8a93a6.
// All coordinates are hand-computed; no external libraries.

// 1) Listing tree for the 3! = 6 orderings of A, B, C.
// Root (24,130). Level-1 nodes at x=110, y = 45 / 130 / 215.
// Level-2 nodes at x=200, two per level-1 node (y0 − 20, y0 + 20).
// Level-3 (leaf) nodes at x=280 on the same rows; the finished words at x=300.
export function PermSiralamaAgac() {
  const l1 = [
    { y: 45, t: "A" },
    { y: 130, t: "B" },
    { y: 215, t: "C" },
  ];
  // [level-2 letter, level-3 letter, y] for each child of a level-1 node
  const l2 = [
    [["B", "C", 25], ["C", "B", 65]],
    [["A", "C", 110], ["C", "A", 150]],
    [["A", "B", 195], ["B", "A", 235]],
  ] as const;
  return (
    <svg viewBox="0 0 380 280" role="img" aria-label="A, B, C harflerinin bütün dizilişlerini gösteren ağaç şeması: ilk yer için 3, ikinci yer için 2, son yer için 1 seçenek var; toplam 6 diziliş">
      {/* branches root -> level 1 */}
      {l1.map((n) => (
        <line key={`r${n.t}`} x1="24" y1="130" x2="110" y2={n.y} stroke="#0e1b33" strokeWidth="1.4" />
      ))}
      {/* branches level 1 -> level 2 -> level 3 */}
      {l1.map((n, i) =>
        l2[i].map(([, , y]) => (
          <g key={`b${i}-${y}`}>
            <line x1="110" y1={n.y} x2="200" y2={y} stroke="#0e1b33" strokeWidth="1.4" />
            <line x1="200" y1={y} x2="280" y2={y} stroke="#e5492b" strokeWidth="1.4" />
          </g>
        ))
      )}

      {/* root */}
      <circle cx="24" cy="130" r="4" fill="#0e1b33" />

      {/* level-1 nodes */}
      {l1.map((n) => (
        <g key={`n1${n.t}`}>
          <circle cx="110" cy={n.y} r="11" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.6" />
          <text x="110" y={n.y + 4.5} fontSize="13" fontWeight="700" fill="#0e1b33" textAnchor="middle">{n.t}</text>
        </g>
      ))}

      {/* level-2 and level-3 nodes, finished words */}
      {l1.map((n, i) =>
        l2[i].map(([a, b, y]) => (
          <g key={`n2${i}-${y}`}>
            <circle cx="200" cy={y} r="10" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.4" />
            <text x="200" y={y + 4.5} fontSize="12" fontWeight="700" fill="#0e1b33" textAnchor="middle">{a}</text>
            <circle cx="280" cy={y} r="10" fill="#ffffff" stroke="#e5492b" strokeWidth="1.4" />
            <text x="280" y={y + 4.5} fontSize="12" fontWeight="700" fill="#e5492b" textAnchor="middle">{b}</text>
            <text x="302" y={y + 4.5} fontSize="13" fontWeight="700" fill="#0e1b33">{`${n.t}${a}${b}`}</text>
          </g>
        ))
      )}

      {/* headers and level counts */}
      <text x="322" y="10" fontSize="11" fill="#e5492b" textAnchor="middle">6 diziliş</text>
      <text x="110" y="268" fontSize="11" fill="#8a93a6" textAnchor="middle">1. yer: 3 seçenek</text>
      <text x="200" y="268" fontSize="11" fill="#8a93a6" textAnchor="middle">2. yer: 2</text>
      <text x="280" y="268" fontSize="11" fill="#8a93a6" textAnchor="middle">3. yer: 1</text>
    </svg>
  );
}

// 2) Slot (kutu) diagram: 5 kişiden 3'ü numaralı 3 sandalyeye → 5·4·3 = 60.
// Boxes 80×56 at x = 40 / 140 / 240, y = 40.
export function PermSiralamaKutu() {
  const boxes = [
    { x: 40, n: "5", head: "1. sandalye", sub: "5 kişiden biri" },
    { x: 140, n: "4", head: "2. sandalye", sub: "kalan 4 kişiden" },
    { x: 240, n: "3", head: "3. sandalye", sub: "kalan 3 kişiden" },
  ];
  return (
    <svg viewBox="0 0 360 160" role="img" aria-label="Kutu yöntemi: 5 kişiden 3'ü 3 numaralı sandalyeye oturuyor; birinci sandalye için 5, ikinci için 4, üçüncü için 3 seçenek; 5 çarpı 4 çarpı 3 eşittir 60">
      {boxes.map((b) => (
        <g key={b.x}>
          <text x={b.x + 40} y="28" fontSize="11" fill="#8a93a6" textAnchor="middle">{b.head}</text>
          <rect x={b.x} y="40" width="80" height="56" rx="6" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.6" />
          <text x={b.x + 40} y="78" fontSize="26" fontWeight="700" fill="#e5492b" textAnchor="middle">{b.n}</text>
          <text x={b.x + 40} y="114" fontSize="10.5" fill="#8a93a6" textAnchor="middle">{b.sub}</text>
        </g>
      ))}
      <text x="130" y="75" fontSize="22" fill="#0e1b33" textAnchor="middle">·</text>
      <text x="230" y="75" fontSize="22" fill="#0e1b33" textAnchor="middle">·</text>
      <text x="180" y="146" fontSize="14" fontWeight="700" fill="#0e1b33" textAnchor="middle">5 · 4 · 3 = 60 = P(5, 3)</text>
    </svg>
  );
}

// 3) Blok yöntemi: 7 kişi, Ece (E) ile Fırat (F) yan yana.
// Row 1 (y=24, h=32): A | [E F] | B | C | D | G  → 6 birim.
// Row 2 (y=110): block interior orders EF and FE → 2!.
export function PermSiralamaBlok() {
  const singles = [
    { x: 16, t: "A" },
    { x: 154, t: "B" },
    { x: 200, t: "C" },
    { x: 246, t: "D" },
    { x: 292, t: "G" },
  ];
  const block = (x: number, y: number, a: string, b: string) => (
    <g>
      <rect x={x} y={y} width="84" height="32" rx="6" fill="none" stroke="#e5492b" strokeWidth="2" />
      <rect x={x + 4} y={y + 3} width="36" height="26" rx="4" fill="#e5492b" />
      <rect x={x + 44} y={y + 3} width="36" height="26" rx="4" fill="#e5492b" />
      <text x={x + 22} y={y + 21} fontSize="13" fontWeight="700" fill="#ffffff" textAnchor="middle">{a}</text>
      <text x={x + 62} y={y + 21} fontSize="13" fontWeight="700" fill="#ffffff" textAnchor="middle">{b}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 380 180" role="img" aria-label="Blok yöntemi: yan yana olması gereken Ece ile Fırat tek bir blok sayılıyor; blok ve diğer 5 kişi 6 birim olarak 6 faktöriyel biçimde, blok içi ise 2 faktöriyel biçimde dizilir; toplam 1440">
      {singles.map((s) => (
        <g key={s.t}>
          <rect x={s.x} y="24" width="36" height="32" rx="6" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.6" />
          <text x={s.x + 18} y="45" fontSize="13" fontWeight="700" fill="#0e1b33" textAnchor="middle">{s.t}</text>
        </g>
      ))}
      {block(62, 24, "E", "F")}
      <text x="190" y="80" fontSize="12" fill="#0e1b33" textAnchor="middle">Blok + 5 kişi = 6 birim → 6! sıralanış</text>

      <text x="16" y="131" fontSize="12" fill="#8a93a6">Blok içi:</text>
      {block(90, 110, "E", "F")}
      {block(196, 110, "F", "E")}
      <text x="296" y="131" fontSize="12" fill="#0e1b33">→ 2!</text>

      <text x="190" y="168" fontSize="13" fontWeight="700" fill="#0e1b33" textAnchor="middle">Toplam: 6! · 2! = 1440</text>
    </svg>
  );
}

// 4) Boşluk yöntemi: 5 erkek dizilince 6 boşluk (4 ara + 2 uç).
// Boys centred at x = 70,130,190,250,310 (box 36×32, y=40); gaps at x = 40,…,340.
export function PermSiralamaBosluk() {
  const boys = [70, 130, 190, 250, 310];
  const gaps = [40, 100, 160, 220, 280, 340];
  return (
    <svg viewBox="0 0 380 130" role="img" aria-label="Boşluk yöntemi: 5 erkek bir sıraya dizildiğinde aralarında 4, iki uçta 2 olmak üzere 6 boşluk oluşur; kızlar bu boşluklara birer birer yerleştirilir">
      {gaps.map((x, i) => (
        <g key={`g${x}`}>
          <line x1={x} y1="34" x2={x} y2="78" stroke="#e5492b" strokeWidth="1.6" strokeDasharray="4 3" />
          <circle cx={x} cy="94" r="9" fill="#ffffff" stroke="#e5492b" strokeWidth="1.4" />
          <text x={x} y="98" fontSize="11" fontWeight="700" fill="#e5492b" textAnchor="middle">{i + 1}</text>
        </g>
      ))}
      {boys.map((x, i) => (
        <g key={`e${x}`}>
          <rect x={x - 18} y="40" width="36" height="32" rx="6" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.6" />
          <text x={x} y="61" fontSize="12" fontWeight="700" fill="#0e1b33" textAnchor="middle">{`E${i + 1}`}</text>
        </g>
      ))}
      <text x="190" y="18" fontSize="11" fill="#8a93a6" textAnchor="middle">kırmızı çizgiler: kızların konabileceği yerler</text>
      <text x="190" y="122" fontSize="12" fill="#0e1b33" textAnchor="middle">5 erkek dizilince 6 boşluk oluşur (4 ara + 2 uç)</text>
    </svg>
  );
}

// 5) "Arasında tam 1 kişi": 6 yer, A ile B arasında tam 1 yer olan konum çiftleri.
// Cells 38×28 at x = 80 + 44j (j = 0..5); rows at y = 34 + 36i (i = 0..3).
// Row i: A at column i, the middle cell at i+1, B at i+2.
export function PermSiralamaArasinda() {
  const cols = [0, 1, 2, 3, 4, 5];
  const rows = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 380 200" role="img" aria-label="Altı yerlik bir sırada A ile B arasında tam bir kişi olacak biçimdeki dört konum çifti: 1 ve 3, 2 ve 4, 3 ve 5, 4 ve 6">
      {cols.map((j) => (
        <text key={`h${j}`} x={99 + 44 * j} y="24" fontSize="11" fill="#8a93a6" textAnchor="middle">{j + 1}</text>
      ))}
      {rows.map((i) => {
        const y = 34 + 36 * i;
        return (
          <g key={`r${i}`}>
            <text x="40" y={y + 19} fontSize="11" fill="#0e1b33" textAnchor="middle">{`(${i + 1}, ${i + 3})`}</text>
            {cols.map((j) => {
              const x = 80 + 44 * j;
              if (j === i)
                return (
                  <g key={j}>
                    <rect x={x} y={y} width="38" height="28" rx="4" fill="#e5492b" />
                    <text x={x + 19} y={y + 19} fontSize="13" fontWeight="700" fill="#ffffff" textAnchor="middle">A</text>
                  </g>
                );
              if (j === i + 2)
                return (
                  <g key={j}>
                    <rect x={x} y={y} width="38" height="28" rx="4" fill="#0e1b33" />
                    <text x={x + 19} y={y + 19} fontSize="13" fontWeight="700" fill="#ffffff" textAnchor="middle">B</text>
                  </g>
                );
              if (j === i + 1)
                return (
                  <g key={j}>
                    <rect x={x} y={y} width="38" height="28" rx="4" fill="#8a93a6" fillOpacity="0.3" stroke="#8a93a6" strokeWidth="1.2" />
                    <text x={x + 19} y={y + 19} fontSize="12" fill="#0e1b33" textAnchor="middle">?</text>
                  </g>
                );
              return <rect key={j} x={x} y={y} width="38" height="28" rx="4" fill="#ffffff" stroke="#8a93a6" strokeWidth="1.2" />;
            })}
          </g>
        );
      })}
      <text x="190" y="190" fontSize="12" fontWeight="700" fill="#0e1b33" textAnchor="middle">4 konum çifti · 2 (A–B yer değişimi) · 4! = 192</text>
    </svg>
  );
}
