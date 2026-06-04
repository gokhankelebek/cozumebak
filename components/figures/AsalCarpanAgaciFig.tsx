// Figures for the 10th-grade "Asal Çarpanlar ve Bölenler" lesson.
// Factor tree (çarpan ağacı) for 360 = 2^3 · 3^2 · 5.
// Coordinates hand-computed for a faithful binary-style splitting tree.
// Conventions: axis/branch #8a93a6, accent (prime leaves) #e5492b,
// dark text/composite nodes #0e1b33, leaf-circle fill #fbf9f4.

// Splitting used (left branch always a prime, right branch the remaining factor):
//   360 -> 2 , 180
//   180 -> 2 , 90
//    90 -> 2 , 45
//    45 -> 3 , 15
//    15 -> 3 , 5
// Leaves (primes, left to right then final): 2, 2, 2, 3, 3, 5  => 2^3·3^2·5.
export function CarpanAgaci360() {
  // Node pixel positions. Tree descends down-right; primes drop to the left.
  const composite = [
    { x: 150, y: 24, t: "360" },
    { x: 180, y: 70, t: "180" },
    { x: 210, y: 116, t: "90" },
    { x: 240, y: 162, t: "45" },
    { x: 270, y: 208, t: "15" },
  ];
  const primes = [
    { x: 96, y: 70, t: "2" },
    { x: 126, y: 116, t: "2" },
    { x: 156, y: 162, t: "2" },
    { x: 186, y: 208, t: "3" },
    { x: 216, y: 254, t: "3" },
    { x: 300, y: 254, t: "5" }, // final right leaf
  ];
  // Branches: from each composite to its two children.
  const edges = [
    [150, 24, 96, 70],
    [150, 24, 180, 70],
    [180, 70, 126, 116],
    [180, 70, 210, 116],
    [210, 116, 156, 162],
    [210, 116, 240, 162],
    [240, 162, 186, 208],
    [240, 162, 270, 208],
    [270, 208, 216, 254],
    [270, 208, 300, 254],
  ];
  return (
    <svg viewBox="0 0 360 290" role="img" aria-label="360 sayısının asal çarpan ağacı: 360 sırayla 2, 2, 2, 3, 3 ve 5 asallarına ayrılır; sonuç 2 üzeri 3 çarpı 3 üzeri 2 çarpı 5">
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8a93a6" strokeWidth="1.5" />
      ))}
      {composite.map((n, i) => (
        <g key={`c${i}`}>
          <circle cx={n.x} cy={n.y} r="15" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fontSize="12" textAnchor="middle" fill="#0e1b33">{n.t}</text>
        </g>
      ))}
      {primes.map((n, i) => (
        <g key={`p${i}`}>
          <circle cx={n.x} cy={n.y} r="13" fill="#e5492b" stroke="#e5492b" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fontSize="12" textAnchor="middle" fill="#fbf9f4">{n.t}</text>
        </g>
      ))}
    </svg>
  );
}
