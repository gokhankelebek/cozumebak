// Figure for the "Binom Açılımı" page (binom-acilimi).
// Pascal triangle, rows n = 0..6. Row n, entry k sits at
//   x = 250 + (k − n/2)·44,  y = 40 + n·28.
// Highlighted: row 5 entries k = 2, 3 (10 and 10) add up to row 6 entry k = 3 (20),
// i.e. C(5,2) + C(5,3) = C(6,3). Right column: row sums 2^n.
// Conventions: dark #0e1b33, accent #e5492b, grey #8a93a6.

const ROWS = Array.from({ length: 7 }, (_, n) => {
  const row = [1];
  for (let k = 1; k <= n; k++) row.push((row[k - 1] * (n - k + 1)) / k);
  return row;
});

const px = (n: number, k: number) => 250 + (k - n / 2) * 44;
const py = (n: number) => 40 + n * 28;

const isHot = (n: number, k: number) => (n === 5 && (k === 2 || k === 3)) || (n === 6 && k === 3);

export function BinomPascal() {
  return (
    <svg
      viewBox="0 0 540 246"
      role="img"
      aria-label="Pascal üçgeninin 0'dan 6'ya kadar satırları. Her sayı, üstündeki iki sayının toplamıdır; vurgulanan örnek: 5. satırdaki 10 ile 10'un toplamı 6. satırdaki 20'dir. Sağda satır toplamları: 1, 2, 4, 8, 16, 32, 64."
    >
      <text x="20" y="18" fontSize="11" fill="#8a93a6">satır</text>
      <text x="500" y="18" fontSize="11" textAnchor="middle" fill="#8a93a6">satır toplamı</text>

      {/* addition arrows for the highlighted triple */}
      <line x1={px(5, 2) + 6} y1={py(5) + 6} x2={px(6, 3) - 6} y2={py(6) - 12} stroke="#e5492b" strokeWidth="1.4" />
      <line x1={px(5, 3) - 6} y1={py(5) + 6} x2={px(6, 3) + 6} y2={py(6) - 12} stroke="#e5492b" strokeWidth="1.4" />

      {ROWS.map((row, n) => (
        <g key={n}>
          <text x="20" y={py(n) + 4} fontSize="12" fill="#8a93a6">{`n = ${n}`}</text>
          {row.map((v, k) => (
            <g key={k}>
              {isHot(n, k) && <circle cx={px(n, k)} cy={py(n)} r="13" fill="#e5492b" fillOpacity="0.12" />}
              <text
                x={px(n, k)}
                y={py(n) + 5}
                fontSize="14"
                textAnchor="middle"
                fill={isHot(n, k) ? "#e5492b" : "#0e1b33"}
                fontWeight={isHot(n, k) ? 700 : 400}
              >
                {v}
              </text>
            </g>
          ))}
          <text x="500" y={py(n) + 5} fontSize="13" textAnchor="middle" fill="#0e1b33">
            {2 ** n}
          </text>
        </g>
      ))}

      <text x="250" y="238" fontSize="12" textAnchor="middle" fill="#e5492b">
        10 + 10 = 20, yani C(5, 2) + C(5, 3) = C(6, 3)
      </text>
    </svg>
  );
}
