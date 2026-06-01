// Figure for the parabola lesson: y = x^2 - 4x + 3, with vertex (tepe noktası)
// at (2, -1), roots at x = 1 and x = 3, y-intercept (0, 3), and the dashed
// axis of symmetry x = 2. All coordinates are pre-computed so the curve is
// mathematically faithful. One-off figures like this live next to where they
// are used and are imported directly in the MDX.
export function Parabol() {
  return (
    <svg
      viewBox="0 0 520 360"
      role="img"
      aria-label="Yukarı doğru açılan bir parabol; tepe noktası, kökleri, y eksenini kestiği nokta ve kesik çizgili simetri ekseni gösterilmiş"
    >
      {/* Axes */}
      <line x1="40" y1="245.9" x2="500" y2="245.9" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="93.1" y1="40" x2="93.1" y2="332" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="500,245.9 490,241.9 490,249.9" fill="#8a93a6" />
      <polygon points="93.1,40 89.1,50 97.1,50" fill="#8a93a6" />
      <text x="488" y="263" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">x</text>
      <text x="76" y="50" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">y</text>

      {/* Axis of symmetry x = 2 (dashed) */}
      <line x1="270" y1="40" x2="270" y2="320" stroke="#8a93a6" strokeWidth="1.4" strokeDasharray="6 5" />

      {/* Parabola y = x^2 - 4x + 3 */}
      <path
        d="M 57 48.2 Q 163.5 287.1 270 287.1 Q 376.5 287.1 483 48.2"
        fill="none"
        stroke="#e5492b"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Roots on x-axis */}
      <circle cx="181.5" cy="245.9" r="4.5" fill="#0e1b33" />
      <circle cx="358.5" cy="245.9" r="4.5" fill="#0e1b33" />
      <text x="170" y="237" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">1</text>
      <text x="350" y="237" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">3</text>

      {/* y-intercept (0, 3) */}
      <circle cx="93.1" cy="122.4" r="4.5" fill="#0e1b33" />
      <text x="44" y="126" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33">(0,3)</text>

      {/* Vertex (tepe noktası) */}
      <circle cx="270" cy="287.1" r="5.5" fill="#e5492b" stroke="#fff" strokeWidth="2.5" />
      <text x="282" y="304" fontFamily="ui-monospace, monospace" fontSize="13" fill="#e5492b" fontWeight="700">T(2, −1)</text>

      {/* Symmetry-axis label */}
      <text x="276" y="56" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">x = 2</text>
    </svg>
  );
}
