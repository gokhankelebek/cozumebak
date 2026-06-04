// Figure for the 9th-grade "Üslü İfadeler" lesson.
// Bar chart of powers of two: 2^0..2^5 = 1,2,4,8,16,32. Each step DOUBLES the
// previous bar, making exponential growth visible. Coordinates hand-computed.
// Conventions: axis #8a93a6, bars #e5492b, labels #0e1b33, fill #fbf9f4.
//
// Baseline y=170. Heights scaled 4 px per unit (max 32 -> 128 px, top y=42).
// Bars width 26, gap 12, starting x=30. 1->4,2->8,4->16,8->32,16->64,32->128 px.
export function UsluBuyume() {
  const data = [
    { label: "2⁰", val: 1, h: 4 },
    { label: "2¹", val: 2, h: 8 },
    { label: "2²", val: 4, h: 16 },
    { label: "2³", val: 8, h: 32 },
    { label: "2⁴", val: 16, h: 64 },
    { label: "2⁵", val: 32, h: 128 },
  ];
  return (
    <svg viewBox="0 0 280 200" role="img" aria-label="2'nin kuvvetlerinin sütun grafiği: 2 üzeri 0'dan 2 üzeri 5'e değerler 1, 2, 4, 8, 16, 32; her adımda sütun bir öncekinin iki katı olur">
      <line x1="24" y1="170" x2="264" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="24" y1="30" x2="24" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      {data.map((d, i) => {
        const x = 36 + i * 38;
        const y = 170 - d.h;
        return (
          <g key={i}>
            <rect x={x} y={y} width="26" height={d.h} fill="#e5492b" rx="2" />
            <text x={x + 13} y={y - 5} fontSize="11" fill="#0e1b33" textAnchor="middle">{d.val}</text>
            <text x={x + 13} y="185" fontSize="12" fill="#0e1b33" textAnchor="middle">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}
