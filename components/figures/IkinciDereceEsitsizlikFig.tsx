// Figure for the 10th-grade "İkinci Dereceden Denklem ve Eşitsizlikler" lesson.
// Sign chart (işaret tablosu) for f(x) = x^2 - x - 6 = (x+2)(x-3), a = 1 > 0.
// Roots at x = -2 and x = 3. Rule "ortada ters, dışta aynı": with a>0 the
// expression is + outside the roots and − between them.
// Coordinates hand-computed. Conventions: axis #8a93a6, accent #e5492b,
// dark text #0e1b33, hollow-dot fill #fbf9f4.
//
// Number line y = 70, x from 30..300. Roots placed at px 110 (x=-2) and
// px 220 (x=3). Sign labels sit above the three regions.
export function IsaretTablosu() {
  return (
    <svg viewBox="0 0 320 120" role="img" aria-label="f(x)=x kare eksi x eksi 6 ifadesinin işaret tablosu: kökler -2 ve 3; kökler dışında pozitif, kökler arasında negatif">
      {/* number line */}
      <line x1="30" y1="70" x2="300" y2="70" stroke="#8a93a6" strokeWidth="1.5" />
      {/* root ticks */}
      <line x1="110" y1="64" x2="110" y2="76" stroke="#0e1b33" strokeWidth="1.5" />
      <line x1="220" y1="64" x2="220" y2="76" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="100" y="92" fontSize="12" fill="#0e1b33">−2</text>
      <text x="214" y="92" fontSize="12" fill="#0e1b33">3</text>
      {/* sign labels: + outside, − between (a>0) */}
      <text x="62" y="50" fontSize="18" fill="#e5492b" fontWeight="700">+</text>
      <text x="160" y="50" fontSize="18" fill="#0e1b33" fontWeight="700">−</text>
      <text x="258" y="50" fontSize="18" fill="#e5492b" fontWeight="700">+</text>
      {/* caption helpers */}
      <text x="40" y="112" fontSize="11" fill="#8a93a6">x &lt; −2</text>
      <text x="138" y="112" fontSize="11" fill="#8a93a6">−2 &lt; x &lt; 3</text>
      <text x="244" y="112" fontSize="11" fill="#8a93a6">x &gt; 3</text>
    </svg>
  );
}
