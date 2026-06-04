// Figure for the 10th-grade "Ters Fonksiyon" lesson.
// Shows f(x) = 2x - 1 and its inverse f^{-1}(x) = (x+1)/2 as reflections of
// each other across the line y = x. A sample point (1,1) maps to its mirror;
// the pair (2,3) on f mirrors to (3,2) on f^{-1}.
// Coordinates hand-computed. Conventions: axis #8a93a6, accent #e5492b (f),
// dark #0e1b33 (f^{-1}), mirror line dashed grey, fill #fbf9f4.
//
// Pixel scale: origin (110,200), 22 px per unit on both axes (square grid so
// the y=x reflection looks correct). x-pixel = 110 + 22*x, y-pixel = 200 - 22*y.
// f: y=2x-1. At x=-1 -> y=-3 : px(-1)=88, py(-3)=266 (clip) ; use x in [0,4].
//   x=0 -> (110,222 -> clip), use x=0.5 -> y=0 -> (121,200); x=4 -> y=7 -> (198,46).
// f^{-1}: y=(x+1)/2. x=0 -> y=0.5 (110,189); x=7 -> y=4 (264,112).
export function TersSimetri() {
  return (
    <svg viewBox="0 0 320 260" role="img" aria-label="f(x)=2x-1 doğrusu ve tersi f üzeri eksi 1 doğrusunun y eşittir x doğrusuna göre simetrisi; (2,3) noktası (3,2) noktasına yansır">
      {/* axes */}
      <line x1="20" y1="200" x2="305" y2="200" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="110" y1="30" x2="110" y2="245" stroke="#8a93a6" strokeWidth="1.4" />
      <text x="296" y="216" fontSize="12" fill="#8a93a6">x</text>
      <text x="116" y="40" fontSize="12" fill="#8a93a6">y</text>

      {/* mirror line y = x (dashed): through origin (110,200) slope -1 in pixels */}
      <line x1="50" y1="260" x2="240" y2="70" stroke="#8a93a6" strokeWidth="1.3" strokeDasharray="5 4" />
      <text x="226" y="78" fontSize="11" fill="#8a93a6">y = x</text>

      {/* f(x)=2x-1 : from (0.5,0)=(121,200) to (3.5,6)=(187,68) */}
      <line x1="121" y1="200" x2="187" y2="68" stroke="#e5492b" strokeWidth="2.4" />
      <text x="150" y="58" fontSize="12" fill="#e5492b">f</text>

      {/* f^{-1}(x)=(x+1)/2 : from (-1,0)=(88,200) to (6,3.5)=(242,123) */}
      <line x1="88" y1="200" x2="242" y2="123" stroke="#0e1b33" strokeWidth="2.4" />
      <text x="246" y="120" fontSize="12" fill="#0e1b33">f⁻¹</text>

      {/* point (2,3) on f -> (154,134) ; mirror (3,2) on f^{-1} -> (176,156) */}
      <circle cx="154" cy="134" r="4" fill="#e5492b" />
      <text x="158" y="130" fontSize="11" fill="#e5492b">(2, 3)</text>
      <circle cx="176" cy="156" r="4" fill="#0e1b33" />
      <text x="180" y="168" fontSize="11" fill="#0e1b33">(3, 2)</text>
    </svg>
  );
}
