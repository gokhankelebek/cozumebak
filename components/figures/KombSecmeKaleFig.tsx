// Figure for the "Kombinasyon: Seçme Problemleri" deep page (kombinasyon-secme).
// Birbirini tehdit etmeyen kaleler: 5×5 tahtada 3 özdeş kale. Önce kalelerin
// satırları (2, 4, 5) ve sütunları (a, c, e) seçilir; sonra satırlar sütunlarla
// eşlenir (burada 2–c, 4–a, 5–e). Seçilen satır/sütunlar açık vurgulu.
// Board: origin (40,36), cell 34 → spans x 40..210, y 36..206.
// Row r (1..5, top to bottom) centre y = 36 + 34·(r−1) + 17; column j (a..e) centre x = 40 + 34·j + 17.
// Conventions: dark #0e1b33, accent #e5492b, grid/grey #8a93a6.

const N = 5;
const X0 = 40;
const Y0 = 36;
const S = 34;
const COLS = ["a", "b", "c", "d", "e"];
const ROWS_CHOSEN = [1, 3, 4]; // 0-based → rows 2, 4, 5
const COLS_CHOSEN = [0, 2, 4]; // a, c, e
const ROOKS: [number, number][] = [
  [1, 2], // row 2, column c
  [3, 0], // row 4, column a
  [4, 4], // row 5, column e
];

export function KaleYerlesimi() {
  return (
    <svg
      viewBox="0 0 420 226"
      role="img"
      aria-label="5 satır 5 sütunluk tahtada birbirini tehdit etmeyen 3 kale: 2, 4 ve 5. satırlar ile a, c ve e sütunları seçilmiş; kaleler 2c, 4a ve 5e karelerinde"
    >
      {/* chosen rows and columns, light accent bands */}
      {ROWS_CHOSEN.map((r) => (
        <rect key={`r${r}`} x={X0} y={Y0 + S * r} width={S * N} height={S} fill="#e5492b" fillOpacity="0.08" />
      ))}
      {COLS_CHOSEN.map((c) => (
        <rect key={`c${c}`} x={X0 + S * c} y={Y0} width={S} height={S * N} fill="#e5492b" fillOpacity="0.08" />
      ))}

      {/* grid */}
      {Array.from({ length: N + 1 }, (_, i) => (
        <g key={`l${i}`}>
          <line x1={X0} y1={Y0 + S * i} x2={X0 + S * N} y2={Y0 + S * i} stroke="#8a93a6" strokeWidth="1" />
          <line x1={X0 + S * i} y1={Y0} x2={X0 + S * i} y2={Y0 + S * N} stroke="#8a93a6" strokeWidth="1" />
        </g>
      ))}
      <rect x={X0} y={Y0} width={S * N} height={S * N} fill="none" stroke="#0e1b33" strokeWidth="1.6" />

      {/* column letters and row numbers */}
      {COLS.map((c, j) => (
        <text
          key={c}
          x={X0 + S * j + S / 2}
          y={Y0 - 8}
          fontSize="11"
          textAnchor="middle"
          fill={COLS_CHOSEN.includes(j) ? "#e5492b" : "#8a93a6"}
          fontWeight={COLS_CHOSEN.includes(j) ? 700 : 400}
        >
          {c}
        </text>
      ))}
      {Array.from({ length: N }, (_, r) => (
        <text
          key={`n${r}`}
          x={X0 - 10}
          y={Y0 + S * r + S / 2 + 4}
          fontSize="11"
          textAnchor="middle"
          fill={ROWS_CHOSEN.includes(r) ? "#e5492b" : "#8a93a6"}
          fontWeight={ROWS_CHOSEN.includes(r) ? 700 : 400}
        >
          {r + 1}
        </text>
      ))}

      {/* rooks: accent disc with letter K */}
      {ROOKS.map(([r, c]) => {
        const cx = X0 + S * c + S / 2;
        const cy = Y0 + S * r + S / 2;
        return (
          <g key={`k${r}${c}`}>
            <circle cx={cx} cy={cy} r="11" fill="#e5492b" />
            <text x={cx} y={cy + 4} fontSize="11" fill="#fff" fontWeight="700" textAnchor="middle">
              K
            </text>
          </g>
        );
      })}

      {/* steps on the right */}
      <text x="232" y="62" fontSize="11" fill="#0e1b33" fontWeight="700">1) Satırları seç</text>
      <text x="246" y="78" fontSize="10" fill="#8a93a6">burada 2, 4, 5</text>
      <text x="232" y="106" fontSize="11" fill="#0e1b33" fontWeight="700">2) Sütunları seç</text>
      <text x="246" y="122" fontSize="10" fill="#8a93a6">burada a, c, e</text>
      <text x="232" y="150" fontSize="11" fill="#0e1b33" fontWeight="700">3) Satır–sütun eşle</text>
      <text x="246" y="166" fontSize="10" fill="#8a93a6">burada 2–c, 4–a, 5–e</text>
      <text x="232" y="196" fontSize="11" fill="#e5492b" fontWeight="700">C(n,k) · C(n,k) · k!</text>
    </svg>
  );
}
