// Three-set Venn diagram for the "Kümeler" (TYT) lesson.
// Three mutually overlapping circles A, B, C arranged in the standard
// equilateral layout so that every region (yalnız A/B/C, ikili kesişimler,
// üçlü kesişim) is visible. Used to teach how multi-set counting problems are
// decomposed into 7 disjoint regions.
//
// Coordinates (viewBox 0 0 260 230), hand-computed:
//   - Circle radius r = 70.
//   - Top circle A:   center (130, 88)
//   - Left circle B:  center (95, 148)
//   - Right circle C: center (165, 148)
//   The two lower centers are 70 apart horizontally; the top center sits
//   ~60 above their midpoint, giving a near-equilateral triangle of centers
//   so all three pairwise lenses and the central triple region appear.
//
// Site colors: stroke dark #0e1b33, faint fill #fbf9f4, accent labels #e5492b.

export function UcVenn() {
  return (
    <svg viewBox="0 0 260 230" role="img" aria-label="Üç kümeli Venn şeması: A, B ve C dairelerinin yedi ayrık bölgesi">
      <circle cx="130" cy="88" r="70" fill="#fbf9f4" fillOpacity="0.6" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="95" cy="148" r="70" fill="#fbf9f4" fillOpacity="0.6" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="165" cy="148" r="70" fill="#fbf9f4" fillOpacity="0.6" stroke="#0e1b33" strokeWidth="2" />

      {/* küme adları (dış köşeler) */}
      <text x="130" y="32" fontSize="16" fill="#e5492b" textAnchor="middle">A</text>
      <text x="34" y="200" fontSize="16" fill="#e5492b" textAnchor="middle">B</text>
      <text x="226" y="200" fontSize="16" fill="#e5492b" textAnchor="middle">C</text>

      {/* yalnız bölgeler */}
      <text x="130" y="70" fontSize="12" fill="#0e1b33" textAnchor="middle">yalnız A</text>
      <text x="78" y="168" fontSize="12" fill="#0e1b33" textAnchor="middle">yalnız B</text>
      <text x="182" y="168" fontSize="12" fill="#0e1b33" textAnchor="middle">yalnız C</text>

      {/* üçlü kesişim */}
      <text x="130" y="135" fontSize="12" fill="#e5492b" textAnchor="middle">A∩B∩C</text>
    </svg>
  );
}
