// Figure for the derivative-definition lesson: f(x)=x^2 on the curve, with a
// secant line through A(1,1) and B(3,9) and the tangent at A(1,1) (slope 2).
// Illustrates how the secant slope (ortalama değişim oranı) approaches the
// tangent slope (anlık değişim oranı = türev) as B → A.
//
// Coordinate system (hand-computed):
//   x-axis: math x in [-0.5, 3.5] maps to svg X = 60 + (x + 0.5)*110
//           so x=0 -> 115, x=1 -> 225, x=3 -> 445
//   y-axis: math y in [0, 10]   maps to svg Y = 300 - y*26
//           so y=0 -> 300, y=1 -> 274, y=9 -> 66
// Curve f(x)=x^2 sampled at x = -0.5..3.3:
//   x=-0.5 y=0.25 -> (60, 293.5)
//   x=0.0  y=0    -> (115, 300)
//   x=0.5  y=0.25 -> (170, 293.5)
//   x=1.0  y=1    -> (225, 274)
//   x=1.5  y=2.25 -> (280, 241.5)
//   x=2.0  y=4    -> (335, 196)
//   x=2.5  y=6.25 -> (390, 137.5)
//   x=3.0  y=9    -> (445, 66)
//   x=3.3  y=10.89 -> capped; use x=3.25 y=10.5625 -> (472.5, 25.4)
// Tangent at A(1,1): slope 2  ->  y = 2x - 1
//   at x=0.2 -> y=-0.6 (off, clamp); draw from x=0.4 (y=-0.2->305) to x=1.8 (y=2.6->232.4)
//   svg: x=0.4 -> 159, y=-0.2 -> 305.2 ; x=1.8 -> 313, y=2.6 -> 232.4
// Secant through A(1,1) and B(3,9): slope 4  ->  y = 4x - 3
//   at x=0.6 -> y=-0.6 ; clamp start x=0.85 (y=0.4->289.6) ; end x=3.25 (y=10->40)
//   svg: x=0.85 -> 208.5, y=0.4 -> 289.6 ; x=3.25 -> 472.5, y=10 -> 40
export default function TurevTanimFig() {
  return (
    <svg
      viewBox="0 0 520 360"
      role="img"
      aria-label="f(x)=x kare eğrisi üzerinde A ve B noktalarından geçen kesen doğru ve A noktasındaki teğet doğru; kesenin eğimi ortalama değişim oranını, teğetin eğimi türevi gösterir"
    >
      {/* Axes */}
      <line x1="60" y1="300" x2="500" y2="300" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="115" y1="30" x2="115" y2="320" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="500,300 490,296 490,304" fill="#8a93a6" />
      <polygon points="115,30 111,40 119,40" fill="#8a93a6" />
      <text x="490" y="318" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">x</text>
      <text x="98" y="42" fontFamily="ui-monospace, monospace" fontSize="13" fill="#8a93a6">y</text>

      {/* Secant line through A(1,1) and B(3,9): slope 4 */}
      <line x1="208.5" y1="289.6" x2="472.5" y2="40" stroke="#8a93a6" strokeWidth="1.6" strokeDasharray="6 5" />
      <text x="430" y="60" fontFamily="ui-monospace, monospace" fontSize="12" fill="#8a93a6">kesen</text>

      {/* Tangent at A(1,1): slope 2 */}
      <line x1="159" y1="305.2" x2="313" y2="232.4" stroke="#0e1b33" strokeWidth="1.8" />
      <text x="300" y="228" fontFamily="ui-monospace, monospace" fontSize="12" fill="#0e1b33">teğet</text>

      {/* Curve f(x) = x^2 */}
      <path
        d="M 60 293.5 Q 115 300 170 293.5 Q 197.5 287 225 274 Q 252.5 261 280 241.5 Q 307.5 222 335 196 Q 362.5 170 390 137.5 Q 417.5 105 445 66 L 472.5 25.4"
        fill="none"
        stroke="#e5492b"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Point A(1,1) */}
      <circle cx="225" cy="274" r="5" fill="#e5492b" stroke="#fff" strokeWidth="2" />
      <text x="200" y="291" fontFamily="ui-monospace, monospace" fontSize="13" fill="#e5492b" fontWeight="700">A(1, 1)</text>

      {/* Point B(3,9) */}
      <circle cx="445" cy="66" r="5" fill="#0e1b33" stroke="#fff" strokeWidth="2" />
      <text x="452" y="70" fontFamily="ui-monospace, monospace" fontSize="13" fill="#0e1b33" fontWeight="700">B(3, 9)</text>
    </svg>
  );
}
