// Figure for the "Kombinasyon: Seçme Problemleri" deep page (kombinasyon-secme).
// Why we divide by r!: the P(4,3) = 24 ordered lists of 3 letters from A, B, C, D
// are grouped by the SET they use. Each row is one 3-element selection; its
// 6 cells are the 3! orderings of that same set. 4 rows × 6 cells = 24, so
// 24 ÷ 6 = 4 = C(4,3).
// Conventions: text/borders dark #0e1b33, set labels accent #e5492b, grid #8a93a6.
// Layout (hand-computed): label box x=10..96; ordering cells start at x=110,
// step 52, width 46, height 26. Row centres y = 56, 92, 128, 164.

const SETS = ["ABC", "ABD", "ACD", "BCD"];
// The 3! = 6 orderings of positions (0,1,2) in a fixed, readable order.
const ORDERS: [number, number, number][] = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];
const ROW_Y = [56, 92, 128, 164];
const CELL_X0 = 110;
const CELL_STEP = 52;
const CELL_W = 46;
const CELL_H = 26;

export function SiralamaGruplari() {
  return (
    <svg
      viewBox="0 0 430 214"
      role="img"
      aria-label="A, B, C, D harflerinden 3'ünün 24 sıralı dizilişi, kullandıkları harf kümesine göre 4 satırda toplanmış; her satırda aynı üç harfin 6 sıralanışı var, bu yüzden 24 bölü 6 eşittir 4 seçim"
    >
      {/* column headers */}
      <text x="53" y="26" fontSize="11" fill="#e5492b" fontWeight="700" textAnchor="middle">
        Seçim
      </text>
      <text x="53" y="38" fontSize="10" fill="#8a93a6" textAnchor="middle">
        (sırasız)
      </text>
      <text x="263" y="30" fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="middle">
        Aynı seçimin 3! = 6 sıralanışı
      </text>

      {SETS.map((s, r) => {
        const y = ROW_Y[r];
        return (
          <g key={s}>
            {/* set label box */}
            <rect x="10" y={y - CELL_H / 2} width="86" height={CELL_H} rx="5" fill="#fff" stroke="#e5492b" strokeWidth="1.6" />
            <text x="53" y={y + 4} fontSize="12" fill="#e5492b" fontWeight="700" textAnchor="middle">
              {`{${s[0]}, ${s[1]}, ${s[2]}}`}
            </text>
            {/* arrow from label to the orderings */}
            <line x1="97" y1={y} x2="106" y2={y} stroke="#8a93a6" strokeWidth="1.2" />
            {/* six ordering cells */}
            {ORDERS.map((o, c) => {
              const x = CELL_X0 + c * CELL_STEP;
              return (
                <g key={c}>
                  <rect x={x} y={y - CELL_H / 2} width={CELL_W} height={CELL_H} rx="4" fill="#fff" stroke="#8a93a6" strokeWidth="1" />
                  <text x={x + CELL_W / 2} y={y + 4} fontSize="12" fill="#0e1b33" textAnchor="middle" letterSpacing="1">
                    {s[o[0]] + s[o[1]] + s[o[2]]}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* summary line */}
      <text x="215" y="204" fontSize="11" fill="#0e1b33" textAnchor="middle">
        4 × 6 = 24 = P(4, 3)  ⇒  24 ÷ 3! = 4 = C(4, 3)
      </text>
    </svg>
  );
}
