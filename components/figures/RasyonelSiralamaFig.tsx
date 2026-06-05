// Figure for the TYT "Rasyonel Sayılar" lesson.
// Places the fractions 2/3, 3/4 and 5/6 on a [0,1] number line so the
// ordering 2/3 < 3/4 < 5/6 becomes visible. All three share the common
// denominator 12, so positions are computed as value*scale on a unit segment.
//
// Number line: y=70, x=40 (value 0) to x=300 (value 1); length 260 px.
// scale = 260 px per unit. value v -> 40 + 260*v.
//   0    -> 40
//   2/3  = 0.6667 -> 40 + 173.3 = 213.3
//   3/4  = 0.75   -> 40 + 195   = 235
//   5/6  = 0.8333 -> 40 + 216.7 = 256.7
//   1    -> 300
// Conventions: axis #8a93a6, accent (marked fractions) #e5492b,
// dark text #0e1b33, fill #fbf9f4.
export function RasyonelSiralama() {
  const x0 = 40; // value 0
  const len = 260; // px for one unit
  const pos = (v: number) => x0 + len * v;
  const marks = [
    { v: 2 / 3, label: "2/3", lx: pos(2 / 3) },
    { v: 3 / 4, label: "3/4", lx: pos(3 / 4) },
    { v: 5 / 6, label: "5/6", lx: pos(5 / 6) },
  ];
  return (
    <svg viewBox="0 0 320 120" role="img" aria-label="Sayı doğrusu üzerinde 0 ile 1 arasında 2 bölü 3, 3 bölü 4 ve 5 bölü 6 kesirleri; soldan sağa 2 bölü 3 küçük, 5 bölü 6 büyük olacak biçimde sıralanır">
      {/* main line */}
      <line x1="20" y1="70" x2="310" y2="70" stroke="#8a93a6" strokeWidth="1.5" />

      {/* 0 and 1 ticks */}
      <line x1={pos(0)} y1="64" x2={pos(0)} y2="76" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1={pos(1)} y1="64" x2={pos(1)} y2="76" stroke="#8a93a6" strokeWidth="1.5" />
      <text x={pos(0)} y="92" fontSize="12" fill="#0e1b33" textAnchor="middle">0</text>
      <text x={pos(1)} y="92" fontSize="12" fill="#0e1b33" textAnchor="middle">1</text>

      {/* fraction marks */}
      {marks.map((m, i) => (
        <g key={i}>
          <line x1={m.lx} y1="62" x2={m.lx} y2="78" stroke="#e5492b" strokeWidth="1.8" />
          <circle cx={m.lx} cy="70" r="3.5" fill="#e5492b" />
          <text x={m.lx} y={i === 1 ? 38 : 50} fontSize="12" fill="#e5492b" textAnchor="middle">{m.label}</text>
        </g>
      ))}
    </svg>
  );
}
