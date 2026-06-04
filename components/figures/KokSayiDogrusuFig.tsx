// Figure for the 9th-grade "Köklü İfadeler" lesson.
// Constructs √2 as a length on the number line: a unit right triangle with legs
// 1 and 1 has hypotenuse √2; swinging that hypotenuse down onto the axis marks
// the point √2 ≈ 1.41. Coordinates hand-computed.
// Conventions: axis #8a93a6, accent #e5492b, dark #0e1b33, fill #fbf9f4.
//
// Number line: y=150, x=0 at px 40, scale 70 px/unit.
// 0->40, 1->110, 2->180, √2≈1.414->139.
// Right triangle: vertices (0,0)=(40,150), (1,0)=(110,150), (1,1)=(110,80).
// Hypotenuse from (40,150) to (110,80) has length √(70²+70²)=70√2 px = √2 units. ✓
// Arc swings (110,80) [dist 70√2 from origin] down to (139,150) [dist 99 from origin].
// 70√2 ≈ 98.99 px ✓
export function KokSayiDogrusu() {
  return (
    <svg viewBox="0 0 240 180" role="img" aria-label="Sayı doğrusu üzerinde kök 2'nin inşası: dik kenarları 1 ve 1 olan dik üçgenin hipotenüsü kök 2'dir; bu uzunluk eksene yatırılınca yaklaşık 1,41 noktasını işaretler">
      {/* number line */}
      <line x1="20" y1="150" x2="220" y2="150" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="145" x2="40" y2="155" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="110" y1="145" x2="110" y2="155" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="180" y1="145" x2="180" y2="155" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="36" y="168" fontSize="12" fill="#0e1b33">0</text>
      <text x="106" y="168" fontSize="12" fill="#0e1b33">1</text>
      <text x="176" y="168" fontSize="12" fill="#0e1b33">2</text>
      {/* right triangle */}
      <polygon points="40,150 110,150 110,80" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      {/* right-angle marker at (110,150) */}
      <polyline points="98,150 98,138 110,138" fill="none" stroke="#0e1b33" strokeWidth="1.2" />
      {/* leg labels */}
      <text x="68" y="166" fontSize="11" fill="#0e1b33">1</text>
      <text x="114" y="118" fontSize="11" fill="#0e1b33">1</text>
      {/* hypotenuse = √2 */}
      <line x1="40" y1="150" x2="110" y2="80" stroke="#e5492b" strokeWidth="2.5" />
      <text x="56" y="106" fontSize="12" fill="#e5492b">√2</text>
      {/* swing arc from (110,80) to (139,150), radius 70√2≈99 about (40,150) */}
      <path d="M 110 80 A 99 99 0 0 1 139 150" fill="none" stroke="#8a93a6" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* marked point √2 */}
      <circle cx="139" cy="150" r="4" fill="#e5492b" />
      <text x="128" y="140" fontSize="11" fill="#e5492b">√2</text>
    </svg>
  );
}
