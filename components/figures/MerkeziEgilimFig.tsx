// Figure for the 9th-grade "Tek Değişkenli Veri" lesson.
// A number-line dot plot of the sorted data 3,4,6,7,9,10 that visually shows
// how the MEDIAN splits an even-sized data set between its two middle values.
// Conventions: axis #8a93a6, accent (data dots + median marker) #e5492b,
// dark text/labels #0e1b33, hollow fill #fbf9f4.
//
// Coordinate math (hand-computed):
//   Axis y = 90, x runs 20..300. Data range shown: values 2..11.
//   Scale: 26 px per unit, value v -> px = 20 + (v - 2) * 26.
//     v=2 ->  20   v=3 ->  46   v=4 ->  72   v=6 -> 124
//     v=7 -> 150   v=9 -> 202   v=10 -> 228  v=11 -> 254
//   Sorted data: 3,4,6,7,9,10 -> dots at px 46,72,124,150,202,228.
//   Median = (6+7)/2 = 6.5 -> px = 20 + (6.5 - 2)*26 = 20 + 117 = 137.
export function MerkeziEgilim() {
  return (
    <svg viewBox="0 0 320 130" role="img" aria-label="Sıralı 3,4,6,7,9,10 verisinin sayı doğrusunda nokta grafiği; ortanca (medyan) 6 ile 7 değerlerinin tam ortasında, 6,5 noktasında">
      {/* number line */}
      <line x1="20" y1="90" x2="300" y2="90" stroke="#8a93a6" strokeWidth="1.5" />
      {/* tick marks + labels at 3,4,6,7,9,10 */}
      {[
        { v: 3, x: 46 },
        { v: 4, x: 72 },
        { v: 6, x: 124 },
        { v: 7, x: 150 },
        { v: 9, x: 202 },
        { v: 10, x: 228 },
      ].map(({ v, x }) => (
        <g key={v}>
          <line x1={x} y1="85" x2={x} y2="95" stroke="#8a93a6" strokeWidth="1.5" />
          <text x={x} y="110" fontSize="12" fill="#0e1b33" textAnchor="middle">{v}</text>
          {/* data dot above the axis */}
          <circle cx={x} cy="70" r="5" fill="#e5492b" />
        </g>
      ))}
      {/* median marker at px 137 (value 6,5) */}
      <line x1="137" y1="40" x2="137" y2="98" stroke="#e5492b" strokeWidth="2" strokeDasharray="4 3" />
      <text x="137" y="32" fontSize="12" fill="#e5492b" textAnchor="middle">medyan 6,5</text>
    </svg>
  );
}
