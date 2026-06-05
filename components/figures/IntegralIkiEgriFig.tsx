// Figure for the integralde-alan lesson: the area BETWEEN two curves.
// Upper curve: line y = x. Lower curve: parabola y = x^2. On [0, 1] the line
// is above the parabola, so the enclosed region is ∫_0^1 (x - x^2) dx = 1/6.
//
// All coordinates hand-computed in screen units (viewBox 460 x 360):
//   origin O at (90, 290); x-axis baseline y = 290, y-axis x = 90.
//   Scale: 1 math unit = 200 screen px on x, 200 px on y.
//   So screen_x = 90 + 200*x, screen_y = 290 - 200*y.
//   x = 0   -> sx = 90,  line/parab y=0  -> sy = 290
//   x = 0.5 -> sx = 190, line y=0.5 -> sy=190 ; parab y=0.25 -> sy=240
//   x = 1   -> sx = 290, line/parab y=1 -> sy = 90  (intersection)
// Intersections: x=x^2 -> x=0 and x=1, the region's left/right bounds.
export function IntegralIkiEgri() {
  // sample points on [0,1] for the parabola y = x^2, step 0.1
  // sx = 90 + 200x, sy = 290 - 200x^2
  const parabPts = [
    "90,290", "110,288", "130,282", "150,272", "170,258", "190,240",
    "210,218", "230,192", "250,162", "270,128", "290,90",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 460 360"
      role="img"
      aria-label="y eşittir x doğrusu üstte, y eşittir x kare parabolü altta; sıfır ile bir arasında ikisi arasında kalan taranmış bölge"
    >
      {/* Shaded region between line (top) and parabola (bottom) on [0,1].
          Boundary: up the line from (0,0) to (1,1), then back down the
          parabola from (1,1) to (0,0). */}
      <polygon
        points="90,290 110,288 130,282 150,272 170,258 190,240 210,218 230,192 250,162 270,128 290,90 270,110 250,130 230,150 210,170 190,190 170,210 150,230 130,250 110,270 90,290"
        fill="#e5492b"
        fillOpacity="0.14"
      />

      {/* Axes */}
      <line x1="50" y1="290" x2="430" y2="290" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="90" y1="40" x2="90" y2="330" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="430,290 420,286 420,294" fill="#8a93a6" />
      <polygon points="90,40 86,50 94,50" fill="#8a93a6" />
      <text x="418" y="308" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">x</text>
      <text x="72" y="50" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">y</text>

      {/* Line y = x (upper) from x=0 to x=1.1 */}
      <line x1="90" y1="290" x2="310" y2="70" stroke="#0e1b33" strokeWidth="2.4" strokeLinecap="round" />
      <text x="300" y="64" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33" fontWeight="700">y = x</text>

      {/* Parabola y = x^2 (lower) */}
      <polyline
        points={parabPts}
        fill="none"
        stroke="#e5492b"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="296" y="104" fontFamily="ui-monospace, monospace" fontSize="13" fill="#e5492b" fontWeight="700">y = x²</text>

      {/* Intersection points x=0 (origin) and x=1 */}
      <circle cx="90" cy="290" r="3.5" fill="#0e1b33" />
      <circle cx="290" cy="90" r="3.5" fill="#0e1b33" />
      <text x="86" y="308" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">0</text>
      <line x1="290" y1="290" x2="290" y2="90" stroke="#8a93a6" strokeWidth="1" strokeDasharray="4 4" />
      <text x="284" y="308" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">1</text>

      {/* Area label */}
      <text x="178" y="252" fontFamily="ui-monospace, monospace" fontSize="14" fill="#e5492b" fontWeight="700">A</text>
    </svg>
  );
}
