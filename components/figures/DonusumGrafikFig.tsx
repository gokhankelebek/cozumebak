// Figures for the 11th-grade "Fonksiyonların Dönüşümleri" lesson.
// Function-GRAPH transformations on the coordinate plane (not point isometries).
// Conventions: axis #8a93a6, accent (transformed/image) #e5492b, dark (base) #0e1b33,
// fill #fbf9f4. All pixel coordinates hand-computed and documented.

// (1) Vertical translation: base y = x^2 (dark) and y = x^2 + 2 (accent, shifted UP 2).
// Pixel scale: origin O at (130,250); 28 px per x-unit (horizontal),
//              22 px per y-unit (vertical, +y is UP so pixel_y = 250 - 22*y).
// Base y=x^2 sampled points: x in {-2.4..2.4}
//   x=-2.4 y=5.76 -> (130-67.2, 250-126.7)=(62.8,123.3)
//   x= 0   y=0    -> (130,250) (vertex)
//   x= 2.4 y=5.76 -> (130+67.2,250-126.7)=(197.2,123.3)
//   We draw via quadratic-ish polyline through hand-computed samples.
// Shifted y=x^2+2 is the base curve moved UP by 2*22 = 44 px (vertex (130,206)).
export function DikeyOteleme() {
  // base samples (x, pixelX, pixelY) for y=x^2
  // x:-2.4 -> px62.8, py123.3 ; -1.6 -> px(130-44.8=85.2), y=2.56 py(250-56.3=193.7)
  // -0.8 -> px(130-22.4=107.6), y=0.64 py(250-14.1=235.9) ; 0 -> (130,250)
  // 0.8 -> (152.4,235.9) ; 1.6 -> (174.8,193.7) ; 2.4 -> (197.2,123.3)
  const base =
    "62.8,123.3 85.2,193.7 107.6,235.9 130,250 152.4,235.9 174.8,193.7 197.2,123.3";
  // shifted up 44 px:
  const up =
    "62.8,79.3 85.2,149.7 107.6,191.9 130,206 152.4,191.9 174.8,149.7 197.2,79.3";
  return (
    <svg viewBox="0 0 270 290" role="img" aria-label="y eşittir x kare grafiği ile yukarı 2 birim ötelenmiş y eşittir x kare artı 2 grafiği">
      <line x1="20" y1="250" x2="255" y2="250" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="130" y1="30" x2="130" y2="275" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="244" y="245" fontSize="12" fill="#8a93a6">x</text>
      <text x="136" y="40" fontSize="12" fill="#8a93a6">y</text>
      <polyline points={base} fill="none" stroke="#0e1b33" strokeWidth="2.4" />
      <polyline points={up} fill="none" stroke="#e5492b" strokeWidth="2.4" />
      {/* vertices */}
      <circle cx="130" cy="250" r="4" fill="#0e1b33" />
      <circle cx="130" cy="206" r="4" fill="#e5492b" />
      {/* shift arrow */}
      <line x1="148" y1="250" x2="148" y2="206" stroke="#e5492b" strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="152" y="232" fontSize="11" fill="#e5492b">+2</text>
      <text x="60" y="115" fontSize="12" fill="#e5492b">y = x² + 2</text>
      <text x="172" y="248" fontSize="12" fill="#0e1b33">y = x²</text>
    </svg>
  );
}

// (2) Reflection across the x-axis: base y = x^2 (dark, opens up) and
//     y = -x^2 (accent, opens down). Same scale as above; origin O at (130,150).
//     28 px per x-unit, 22 px per y-unit.
//  y=x^2 samples (UP):  vertex (130,150)
//   x=-2.0 y=4 -> (130-56, 150-88)=(74,62) ; x=-1 y=1 ->(102,128)
//   x=1 y=1 ->(158,128) ; x=2 y=4 ->(186,62)
//  y=-x^2 samples (DOWN): mirror in x-axis -> pixel_y reflected about 150
//   x=-2 y=-4 ->(74,238) ; x=-1 ->(102,172) ; vertex (130,150) ; x=1 ->(158,172) ; x=2 ->(186,238)
export function YansimaXEkseni() {
  const up = "74,62 102,128 130,150 158,128 186,62";
  const down = "74,238 102,172 130,150 158,172 186,238";
  return (
    <svg viewBox="0 0 270 300" role="img" aria-label="y eşittir x kare grafiği ve onun x eksenine göre yansıması y eşittir eksi x kare grafiği">
      <line x1="20" y1="150" x2="255" y2="150" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="130" y1="30" x2="130" y2="270" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="244" y="145" fontSize="12" fill="#8a93a6">x</text>
      <text x="136" y="40" fontSize="12" fill="#8a93a6">y</text>
      <polyline points={up} fill="none" stroke="#0e1b33" strokeWidth="2.4" />
      <polyline points={down} fill="none" stroke="#e5492b" strokeWidth="2.4" />
      <circle cx="130" cy="150" r="4" fill="#0e1b33" />
      <text x="190" y="58" fontSize="12" fill="#0e1b33">y = x²</text>
      <text x="190" y="246" fontSize="12" fill="#e5492b">y = −x²</text>
    </svg>
  );
}
