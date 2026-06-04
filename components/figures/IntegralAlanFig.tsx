// Figure for the belirli-integral lesson: the area under a continuous curve
// y = f(x) between x = a and x = b. The shaded region is the definite integral
// ∫_a^b f(x) dx, and four left-endpoint Riemann rectangles are overlaid to show
// that the integral is the limit of summed rectangle areas.
//
// All coordinates are hand-computed in screen units (viewBox 520 x 360):
//   x-axis baseline at y = 300, y-axis at x = 70.
//   The curve value above the baseline is v(xs) = 0.0007*(xs-40)^2 + 25, so the
//   plotted point is y = 300 - v(xs). This is a smooth, increasing, positive
//   curve standing in for a generic continuous f with f(x) >= 0 on [a, b].
//   Region of interest: a = 180, b = 420 on the x-axis.
//   Rectangles: 4 strips of width 60, height taken at each strip's LEFT edge.
// One-off figures like this live next to where they're used and are imported
// directly in the MDX.
export function IntegralAlan() {
  return (
    <svg
      viewBox="0 0 520 360"
      role="img"
      aria-label="y eşittir f(x) eğrisi ile x ekseni arasında, x eşittir a ve x eşittir b doğruları arasında kalan taranmış alan; alanı yaklaşık veren dört dikdörtgen şerit de gösterilmiş"
    >
      {/* Shaded region under the curve between a and b */}
      <polygon
        points="180,300 180,261.3 200,257.1 220,252.3 240,247.0 260,241.1 280,234.7 300,227.7 320,220.1 340,212.0 360,203.3 380,194.1 400,184.3 420,173.9 420,300"
        fill="#e5492b"
        fillOpacity="0.14"
      />

      {/* Left-endpoint Riemann rectangles (width 60) */}
      <g fill="#e5492b" fillOpacity="0.10" stroke="#e5492b" strokeWidth="1" strokeOpacity="0.5">
        <rect x="180" y="261.3" width="60" height="38.7" />
        <rect x="240" y="247.0" width="60" height="53.0" />
        <rect x="300" y="227.7" width="60" height="72.3" />
        <rect x="360" y="203.3" width="60" height="96.7" />
      </g>

      {/* Axes */}
      <line x1="40" y1="300" x2="500" y2="300" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="70" y1="40" x2="70" y2="332" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="500,300 490,296 490,304" fill="#8a93a6" />
      <polygon points="70,40 66,50 74,50" fill="#8a93a6" />
      <text x="488" y="318" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">x</text>
      <text x="52" y="50" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">y</text>

      {/* The curve y = f(x) */}
      <polyline
        points="80,273.9 90,273.2 100,272.5 110,271.6 120,270.5 130,269.3 140,268.0 150,266.5 160,264.9 170,263.2 180,261.3 190,259.2 200,257.1 210,254.8 220,252.3 230,249.7 240,247.0 250,244.1 260,241.1 270,238.0 280,234.7 290,231.2 300,227.7 310,224.0 320,220.1 330,216.1 340,212.0 350,207.7 360,203.3 370,198.8 380,194.1 390,189.2 400,184.3 410,179.2 420,173.9 430,168.5 440,163.0 450,157.3 460,151.5 470,145.6 480,139.5"
        fill="none"
        stroke="#e5492b"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Boundary verticals x = a and x = b */}
      <line x1="180" y1="261.3" x2="180" y2="300" stroke="#0e1b33" strokeWidth="1.4" />
      <line x1="420" y1="173.9" x2="420" y2="300" stroke="#0e1b33" strokeWidth="1.4" />

      {/* a and b tick labels */}
      <circle cx="180" cy="300" r="3.5" fill="#0e1b33" />
      <circle cx="420" cy="300" r="3.5" fill="#0e1b33" />
      <text x="176" y="318" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">a</text>
      <text x="416" y="318" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">b</text>

      {/* Curve label */}
      <text x="430" y="150" fontFamily="ui-monospace, monospace" fontSize="13" fill="#e5492b" fontWeight="700">y = f(x)</text>

      {/* Area label */}
      <text x="262" y="282" fontFamily="ui-monospace, monospace" fontSize="14" fill="#e5492b" fontWeight="700">A</text>
    </svg>
  );
}
