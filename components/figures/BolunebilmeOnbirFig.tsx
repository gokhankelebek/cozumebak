// Figure for the 10th-grade "Bölünebilme Kuralları" lesson.
// Visualises the 11-divisibility rule (alternating sum) on 8294.
// From the units digit: +4 -9 +2 -8 = -11, a multiple of 11 -> divisible.
// Conventions: axis #8a93a6, accent (+) #e5492b, dark text/(-) #0e1b33,
// box fill #fbf9f4. Coordinates hand-placed; digits evenly spaced.
export function OnbirKurali() {
  // Digit boxes left-to-right: 8 2 9 4. Signs assigned from the RIGHT:
  // 4:+, 9:-, 2:+, 8:- . So 8:-, 2:+, 9:-, 4:+ reading left-to-right.
  const cells = [
    { x: 40, d: "8", sign: "−", accent: false },
    { x: 120, d: "2", sign: "+", accent: true },
    { x: 200, d: "9", sign: "−", accent: false },
    { x: 280, d: "4", sign: "+", accent: true },
  ];
  return (
    <svg viewBox="0 0 360 170" role="img" aria-label="8294 sayısında 11 ile bölünebilme kuralı: birler basamağından başlayarak işaretler artı eksi artı eksi; 4 eksi 9 artı 2 eksi 8 eşittir eksi 11, 11'in katı olduğundan sayı 11'e bölünür">
      <text x="180" y="24" fontSize="13" fill="#0e1b33" textAnchor="middle">Birler basamağından başla → işaretler dönüşümlü</text>
      {cells.map((c, i) => {
        const col = c.accent ? "#e5492b" : "#0e1b33";
        return (
          <g key={i}>
            <rect x={c.x} y="50" width="40" height="40" rx="6" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1.5" />
            <text x={c.x + 20} y="77" fontSize="18" fill="#0e1b33" textAnchor="middle">{c.d}</text>
            <text x={c.x + 20} y="112" fontSize="16" fill={col} textAnchor="middle">{c.sign}</text>
          </g>
        );
      })}
      {/* arrow showing direction from the right */}
      <text x="335" y="77" fontSize="14" fill="#8a93a6" textAnchor="middle">←</text>
      <text x="180" y="150" fontSize="14" fill="#e5492b" textAnchor="middle">4 − 9 + 2 − 8 = −11  (11'in katı ✓)</text>
    </svg>
  );
}
