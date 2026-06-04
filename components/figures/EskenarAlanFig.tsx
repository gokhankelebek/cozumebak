// Figure for the 10th-grade "Üçgende Alan" lesson, section "Eşkenar üçgende alan".
// Equilateral triangle of side a with its height h = a*sqrt(3)/2 dropped to the
// base midpoint, illustrating Alan = a^2*sqrt(3)/4.
// Colors follow the site convention: main stroke #0e1b33, accent #e5492b,
// faint #8a93a6, fill #fbf9f4.

// Geometry (hand-computed). Equilateral triangle, base 180 px (px units, not
// math units): for a true equilateral the height is 180*sqrt(3)/2 ≈ 155.9 px.
// Place base from B=(40,180) to C=(220,180); apex A above base midpoint
// x=130 at y = 180 - 156 = 24, so A=(130,24). Foot of height H=(130,180).
export function EskenarAlan() {
  return (
    <svg viewBox="0 0 260 210" role="img" aria-label="Kenarı a olan eşkenar üçgen ve tabana inen a kök 3 bölü 2 yüksekliği; alan a kare kök 3 bölü 4">
      <polygon points="130,24 40,180 220,180" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      {/* height from apex A to base midpoint H */}
      <line x1="130" y1="24" x2="130" y2="180" stroke="#e5492b" strokeWidth="2" strokeDasharray="6 4" />
      {/* right-angle mark at the foot */}
      <polyline points="118,180 118,168 130,168" fill="none" stroke="#8a93a6" strokeWidth="1.5" />
      {/* side labels: all sides = a */}
      <text x="78" y="98" fontSize="14" fill="#0e1b33">a</text>
      <text x="180" y="98" fontSize="14" fill="#0e1b33">a</text>
      <text x="125" y="196" fontSize="14" fill="#0e1b33">a</text>
      {/* height label */}
      <text x="136" y="110" fontSize="13" fill="#e5492b">h = a√3/2</text>
    </svg>
  );
}
