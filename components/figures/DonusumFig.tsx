// Figures for the 9th-grade "Geometrik Dönüşümler" lesson.
// Coordinate-plane diagrams. All pixel coordinates hand-computed.
// Conventions: axis #8a93a6, accent (image/point) #e5492b, dark #0e1b33,
// fill #fbf9f4.

// (1) Reflection of A(3,2) across the x-axis -> A'(3,-2).
// Pixel scale: origin O at (110,90); 20 px per unit. +y is UP (so pixel y = 90 - 20*y).
//  A(3,2)  -> (110+60, 90-40) = (170, 50)
//  A'(3,-2)-> (110+60, 90+40) = (170,130)
// Axis x: px 20..200 ; Axis y: px 15..165.
export function YansimaXEkseni() {
  return (
    <svg viewBox="0 0 220 180" role="img" aria-label="A(3,2) noktasının x eksenine göre yansıması A'(3,-2); nokta x ekseninin diğer tarafına simetrik düşer">
      {/* axes */}
      <line x1="20" y1="90" x2="200" y2="90" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="110" y1="15" x2="110" y2="165" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="202" y="94" fontSize="11" fill="#8a93a6">x</text>
      <text x="114" y="20" fontSize="11" fill="#8a93a6">y</text>
      {/* dashed mirror link */}
      <line x1="170" y1="50" x2="170" y2="130" stroke="#e5492b" strokeWidth="1" strokeDasharray="4 3" />
      {/* original A(3,2) */}
      <circle cx="170" cy="50" r="4.5" fill="#0e1b33" />
      <text x="176" y="48" fontSize="12" fill="#0e1b33">A(3, 2)</text>
      {/* image A'(3,-2) */}
      <circle cx="170" cy="130" r="4.5" fill="#e5492b" />
      <text x="176" y="138" fontSize="12" fill="#e5492b">A′(3, −2)</text>
    </svg>
  );
}

// (2) 90° rotation (counter-clockwise) of P(4,1) about the origin -> P'(-1,4).
// Pixel scale: origin O at (110,110); 18 px per unit. +y is UP.
//  P(4,1)  -> (110+72, 110-18)  = (182, 92)
//  P'(-1,4)-> (110-18, 110-72)  = (92, 38)
export function Donme90() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="P(4,1) noktasının orijin etrafında 90 derece saat yönü tersine dönmesi P'(-1,4)">
      {/* axes */}
      <line x1="20" y1="110" x2="220" y2="110" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="110" y1="20" x2="110" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="222" y="114" fontSize="11" fill="#8a93a6">x</text>
      <text x="114" y="26" fontSize="11" fill="#8a93a6">y</text>
      {/* radius lines from origin */}
      <line x1="110" y1="110" x2="182" y2="92" stroke="#0e1b33" strokeWidth="1.3" />
      <line x1="110" y1="110" x2="92" y2="38" stroke="#e5492b" strokeWidth="1.3" />
      {/* rotation arc: from P toward P' (CCW) */}
      <path d="M 152 102 A 44 44 0 0 1 100 70" fill="none" stroke="#8a93a6" strokeWidth="1.2" strokeDasharray="3 3" />
      {/* original P(4,1) */}
      <circle cx="182" cy="92" r="4.5" fill="#0e1b33" />
      <text x="186" y="90" fontSize="12" fill="#0e1b33">P(4, 1)</text>
      {/* image P'(-1,4) */}
      <circle cx="92" cy="38" r="4.5" fill="#e5492b" />
      <text x="34" y="34" fontSize="12" fill="#e5492b">P′(−1, 4)</text>
      <text x="120" y="78" fontSize="11" fill="#8a93a6">90°</text>
    </svg>
  );
}
