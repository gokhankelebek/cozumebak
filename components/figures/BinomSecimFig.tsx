// Figure for the "Binom Açılımı" page (binom-acilimi).
// (a+b)^3 = (a+b)(a+b)(a+b): each of the 2^3 = 8 products picks a or b from
// every bracket. The 8 choice words are grouped by how many b's they contain;
// group sizes 1, 3, 3, 1 are the coefficients C(3,k).
// Conventions: dark #0e1b33, accent #e5492b (letter b, results), grey #8a93a6.
// Layout: four columns centred at x = 75, 205, 335, 465. Header y = 70,
// words at y = 100, 124, 148, result y = 186, C(3,k) y = 208.

const COLS = [
  { x: 75, k: 0, words: ["aaa"], result: "1 · a³" },
  { x: 205, k: 1, words: ["baa", "aba", "aab"], result: "3 · a²b" },
  { x: 335, k: 2, words: ["bba", "bab", "abb"], result: "3 · ab²" },
  { x: 465, k: 3, words: ["bbb"], result: "1 · b³" },
];

function Word({ w, x, y }: { w: string; x: number; y: number }) {
  return (
    <text x={x} y={y} fontSize="15" textAnchor="middle" fontFamily="monospace" letterSpacing="2">
      {w.split("").map((ch, i) => (
        <tspan key={i} fill={ch === "b" ? "#e5492b" : "#0e1b33"} fontWeight={ch === "b" ? 700 : 400}>
          {ch}
        </tspan>
      ))}
    </text>
  );
}

export function BinomSecim() {
  return (
    <svg
      viewBox="0 0 540 226"
      role="img"
      aria-label="(a+b) üzeri 3 açılımında her parantezden a ya da b seçilir. 8 seçim, içerdikleri b sayısına göre gruplanır: b'siz 1 seçim (aaa), bir b'li 3 seçim, iki b'li 3 seçim, üç b'li 1 seçim. Grup büyüklükleri 1, 3, 3, 1 katsayılardır."
    >
      {/* top: the three brackets */}
      <text x="270" y="26" fontSize="16" textAnchor="middle" fill="#0e1b33" fontWeight="700">
        (a + b) · (a + b) · (a + b)
      </text>
      <text x="270" y="44" fontSize="11" textAnchor="middle" fill="#8a93a6">
        1. parantez · 2. parantez · 3. parantez — her birinden bir harf seçilir
      </text>

      {/* column separators */}
      {[140, 270, 400].map((x) => (
        <line key={x} x1={x} y1="58" x2={x} y2="214" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="3 3" />
      ))}

      {COLS.map((c) => (
        <g key={c.k}>
          <text x={c.x} y="72" fontSize="12" textAnchor="middle" fill="#8a93a6">
            {c.k} tane b
          </text>
          {c.words.map((w, i) => (
            <Word key={w} w={w} x={c.x} y={100 + 24 * i} />
          ))}
          <text x={c.x} y="188" fontSize="14" textAnchor="middle" fill="#e5492b" fontWeight="700">
            {c.result}
          </text>
          <text x={c.x} y="208" fontSize="11" textAnchor="middle" fill="#8a93a6">
            {`C(3, ${c.k}) = ${c.words.length}`}
          </text>
        </g>
      ))}

      <line x1="20" y1="166" x2="520" y2="166" stroke="#8a93a6" strokeWidth="0.8" />
    </svg>
  );
}
