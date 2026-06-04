// Figure for the 10th-grade "Kombinasyon" lesson.
// Six points (no three collinear) with every pair joined by a segment.
// A segment is decided by a 2-point SUBSET (order irrelevant) -> C(6,2)=15
// segments. This visualises why "kaç doğru?" is a combination, not a
// permutation. Points placed on a circle of radius 80 about centre (130,110).
// Angles 90,150,210,270,330,30 degrees -> hand-computed pixel coordinates.
// Conventions: points accent #e5492b, segments axis #8a93a6, labels dark #0e1b33.

// cx=130, cy=110, r=80. p = (cx + r cosθ, cy - r sinθ).
// θ=90: (130,30)  θ=150: (61.0,70)  θ=210: (61.0,150)
// θ=270: (130,190) θ=330: (199.3,150) θ=30: (199.3,70)
const PTS: [number, number][] = [
  [130, 30],
  [61, 70],
  [61, 150],
  [130, 190],
  [199, 150],
  [199, 70],
];

export function NoktalardanDogrular() {
  // all unordered pairs (i<j): 15 segments
  const segs: [number, number][] = [];
  for (let i = 0; i < PTS.length; i++) {
    for (let j = i + 1; j < PTS.length; j++) segs.push([i, j]);
  }
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Üçü doğrusal olmayan 6 nokta ve her ikisini birleştiren 15 doğru parçası; bir doğru iki noktalı sırasız bir seçimle belirlenir">
      {segs.map(([a, b], k) => (
        <line
          key={k}
          x1={PTS[a][0]}
          y1={PTS[a][1]}
          x2={PTS[b][0]}
          y2={PTS[b][1]}
          stroke="#8a93a6"
          strokeWidth="1"
        />
      ))}
      {PTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="#e5492b" />
      ))}
      <text x="245" y="40" fontSize="13" fill="#0e1b33" fontWeight="700">C(6, 2) = 15</text>
    </svg>
  );
}
