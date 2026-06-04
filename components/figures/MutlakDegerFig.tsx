// Figures for the 9th-grade "Mutlak Değer Fonksiyonları" lesson.
// V-shaped graphs. Coordinates are pre-computed so each graph is faithful.
// Axes #8a93a6, curve #e5492b, labels/vertex #0e1b33 — matching FonksiyonFig.

// (1) y = |x| : vertex at origin (0,0).
// Pixel scale: origin (120,160); 25 px per x-unit, 20 px per y-unit.
// (-4,4)->(20,80); (0,0)->(120,160); (4,4)->(220,80).
export function TemelV() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="y eşittir mutlak değer x grafiği, tepe noktası orijin (0,0)">
      <line x1="15" y1="160" x2="225" y2="160" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="120" y1="20" x2="120" y2="185" stroke="#8a93a6" strokeWidth="1.5" />
      <polyline points="20,80 120,160 220,80" fill="none" stroke="#e5492b" strokeWidth="2.5" />
      <circle cx="120" cy="160" r="4" fill="#0e1b33" />
      <text x="126" y="176" fontSize="12" fill="#0e1b33">(0, 0)</text>
      <text x="212" y="155" fontSize="12" fill="#0e1b33">x</text>
      <text x="126" y="32" fontSize="12" fill="#0e1b33">y</text>
      <text x="150" y="70" fontSize="12" fill="#e5492b">y = |x|</text>
    </svg>
  );
}

// (2) y = |x - 2| - 1 : vertex translated to (2, -1).
// Pixel scale: origin (100,120); 22 px per x-unit, 18 px per y-unit.
// (-1,2)->(78,84); (2,-1)->(144,138); (5,2)->(210,84).
export function OtelenmisV() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="y eşittir mutlak değer x eksi 2 eksi 1 grafiği, tepe noktası (2, -1)">
      <line x1="55" y1="120" x2="225" y2="120" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="100" y1="25" x2="100" y2="180" stroke="#8a93a6" strokeWidth="1.5" />
      <polyline points="78,84 144,138 210,84" fill="none" stroke="#e5492b" strokeWidth="2.5" />
      <circle cx="144" cy="138" r="4" fill="#0e1b33" />
      <text x="150" y="153" fontSize="12" fill="#0e1b33">(2, -1)</text>
      <text x="212" y="115" fontSize="12" fill="#0e1b33">x</text>
      <text x="106" y="36" fontSize="12" fill="#0e1b33">y</text>
      <text x="150" y="74" fontSize="12" fill="#e5492b">y = |x - 2| - 1</text>
    </svg>
  );
}
