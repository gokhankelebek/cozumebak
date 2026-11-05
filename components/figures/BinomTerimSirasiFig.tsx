// Figure for the "Binom Açılımı" page (binom-acilimi).
// (a+b)^5 has 6 terms. Box i (i = 0..5) holds T_{i+1} = C(5,i)·a^(5−i)·b^i.
// Above each box: its position from the front (i+1) and k = i.
// Below: its position from the back (6 − i). Box 5 (baştan 5., sondan 2.) is highlighted.
// Box i: x = 84 + 72·i, width 64, y = 76, height 40.
// Conventions: dark #0e1b33, accent #e5492b, grey #8a93a6.

const TERMS = ["a⁵", "5a⁴b", "10a³b²", "10a²b³", "5ab⁴", "b⁵"];
const HOT = 4;
const bx = (i: number) => 84 + 72 * i;

export function BinomTerimSirasi() {
  return (
    <svg
      viewBox="0 0 520 170"
      role="img"
      aria-label="(a+b) üzeri 5 açılımının 6 terimi kutular hâlinde: a⁵, 5a⁴b, 10a³b², 10a²b³, 5ab⁴, b⁵. Her kutunun üstünde baştan sırası ve k değeri, altında sondan sırası yazılı. Baştan 5. terim olan 5ab⁴, sondan 2. terimdir ve k = 4'tür."
    >
      <text x="6" y="34" fontSize="12" fill="#8a93a6">baştan</text>
      <text x="6" y="60" fontSize="12" fill="#8a93a6">k</text>
      <text x="6" y="146" fontSize="12" fill="#8a93a6">sondan</text>

      {TERMS.map((t, i) => {
        const hot = i === HOT;
        const cx = bx(i) + 32;
        return (
          <g key={i}>
            <text x={cx} y="34" fontSize="12" textAnchor="middle" fill="#0e1b33">{`${i + 1}.`}</text>
            <text x={cx} y="60" fontSize="12" textAnchor="middle" fill={hot ? "#e5492b" : "#0e1b33"} fontWeight={hot ? 700 : 400}>
              {`k = ${i}`}
            </text>
            <rect
              x={bx(i)}
              y="76"
              width="64"
              height="40"
              rx="5"
              fill={hot ? "#e5492b" : "none"}
              fillOpacity={hot ? 0.12 : 0}
              stroke={hot ? "#e5492b" : "#0e1b33"}
              strokeWidth={hot ? 1.8 : 1.2}
            />
            <text x={cx} y="101" fontSize="14" textAnchor="middle" fill={hot ? "#e5492b" : "#0e1b33"} fontWeight={hot ? 700 : 400}>
              {t}
            </text>
            <text x={cx} y="146" fontSize="12" textAnchor="middle" fill="#0e1b33">{`${6 - i}.`}</text>
          </g>
        );
      })}

      <text x="296" y="166" fontSize="11" textAnchor="middle" fill="#8a93a6">
        baştan sıra + sondan sıra = 7 = n + 2
      </text>
    </svg>
  );
}
