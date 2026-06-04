// Figure for the 9th-grade "Veri Yorumlama" lesson.
// Two bar charts of the SAME two values (A=24, B=22) shown side by side:
//  - LEFT: truncated y-axis starting at 20 -> A looks twice as tall as B (misleading)
//  - RIGHT: honest y-axis starting at 0 -> bars are nearly the same height
// Conventions: axis #8a93a6, accent bars #e5492b, dark bars/text #0e1b33.
//
// Coordinate math (hand-computed):
//  Both panels: baseline y = 130, bar tops measured upward from baseline.
//  LEFT panel (axis starts at 20): plot value (v-20) with 50 px per unit.
//     A: (24-20)*50 = 200 px ... too tall; we instead use a compressed
//     visual scale of 22 px/unit so it fits: A->(24-20)*22=88, B->(22-20)*22=44.
//     A top y = 130-88 = 42 ; B top y = 130-44 = 86.  => A is 2x B. (4 vs 2 units)
//  RIGHT panel (axis starts at 0): 4.7 px per unit so 24 -> ~113 px tall.
//     A: 24*4.7 = 112.8 -> top y = 130-113 = 17.
//     B: 22*4.7 = 103.4 -> top y = 130-103 = 27.  => bars almost equal.
export function KesikEksen() {
  return (
    <svg viewBox="0 0 360 170" role="img" aria-label="Aynı A=24 ve B=22 sıcaklıklarının iki sütun grafiği: solda eksen 20'den başladığı için A sütunu B'nin iki katı görünür (yanıltıcı), sağda eksen 0'dan başladığı için sütunlar neredeyse eşittir (dürüst)">
      {/* ---- LEFT panel: truncated axis ---- */}
      <line x1="35" y1="130" x2="165" y2="130" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="35" y1="20" x2="35" y2="130" stroke="#8a93a6" strokeWidth="1.5" />
      {/* axis-start label 20 (truncated) */}
      <text x="30" y="134" fontSize="10" fill="#8a93a6" textAnchor="end">20</text>
      {/* A bar */}
      <rect x="60" y="42" width="36" height="88" fill="#e5492b" />
      <text x="78" y="36" fontSize="11" fill="#0e1b33" textAnchor="middle">24</text>
      <text x="78" y="145" fontSize="12" fill="#0e1b33" textAnchor="middle">A</text>
      {/* B bar */}
      <rect x="110" y="86" width="36" height="44" fill="#0e1b33" />
      <text x="128" y="80" fontSize="11" fill="#0e1b33" textAnchor="middle">22</text>
      <text x="128" y="145" fontSize="12" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="100" y="162" fontSize="11" fill="#e5492b" textAnchor="middle">Eksen 20'den — yanıltıcı</text>

      {/* ---- RIGHT panel: honest axis from 0 ---- */}
      <line x1="215" y1="130" x2="345" y2="130" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="215" y1="20" x2="215" y2="130" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="210" y="134" fontSize="10" fill="#8a93a6" textAnchor="end">0</text>
      {/* A bar */}
      <rect x="240" y="17" width="36" height="113" fill="#e5492b" />
      <text x="258" y="12" fontSize="11" fill="#0e1b33" textAnchor="middle">24</text>
      <text x="258" y="145" fontSize="12" fill="#0e1b33" textAnchor="middle">A</text>
      {/* B bar */}
      <rect x="290" y="27" width="36" height="103" fill="#0e1b33" />
      <text x="308" y="22" fontSize="11" fill="#0e1b33" textAnchor="middle">22</text>
      <text x="308" y="145" fontSize="12" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="280" y="162" fontSize="11" fill="#0e1b33" textAnchor="middle">Eksen 0'dan — dürüst</text>
    </svg>
  );
}
