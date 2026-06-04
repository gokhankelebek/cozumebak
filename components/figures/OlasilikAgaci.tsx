// Figure for the 10th-grade probability lessons: a two-level probability tree
// (ağaç şeması). Root branches to A / A', each branching to B / B'. Branch
// labels are conditional probabilities. Schematic; colors match site convention.
export function Agac() {
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label="İki aşamalı olasılık ağaç şeması: kökten A ve A' dallarına, her biri B ve B' dallarına ayrılıyor">
      {/* level-1 branches */}
      <line x1="30" y1="120" x2="160" y2="60" stroke="#0e1b33" strokeWidth="1.6" />
      <line x1="30" y1="120" x2="160" y2="180" stroke="#0e1b33" strokeWidth="1.6" />
      {/* level-2 branches from A */}
      <line x1="160" y1="60" x2="300" y2="30" stroke="#0e1b33" strokeWidth="1.6" />
      <line x1="160" y1="60" x2="300" y2="95" stroke="#0e1b33" strokeWidth="1.6" />
      {/* level-2 branches from A' */}
      <line x1="160" y1="180" x2="300" y2="150" stroke="#0e1b33" strokeWidth="1.6" />
      <line x1="160" y1="180" x2="300" y2="210" stroke="#0e1b33" strokeWidth="1.6" />

      {/* nodes */}
      <circle cx="30" cy="120" r="3.5" fill="#0e1b33" />
      <circle cx="160" cy="60" r="3.5" fill="#e5492b" />
      <circle cx="160" cy="180" r="3.5" fill="#e5492b" />
      <circle cx="300" cy="30" r="3.5" fill="#0e1b33" />
      <circle cx="300" cy="95" r="3.5" fill="#0e1b33" />
      <circle cx="300" cy="150" r="3.5" fill="#0e1b33" />
      <circle cx="300" cy="210" r="3.5" fill="#0e1b33" />

      {/* node labels */}
      <text x="166" y="56" fontSize="13" fill="#e5492b" fontWeight="700">A</text>
      <text x="166" y="194" fontSize="13" fill="#e5492b" fontWeight="700">A'</text>
      <text x="308" y="34" fontSize="12" fill="#0e1b33">B</text>
      <text x="308" y="99" fontSize="12" fill="#0e1b33">B'</text>
      <text x="308" y="154" fontSize="12" fill="#0e1b33">B</text>
      <text x="308" y="214" fontSize="12" fill="#0e1b33">B'</text>

      {/* branch (conditional) probability labels */}
      <text x="78" y="82" fontSize="10" fill="#8a93a6">P(A)</text>
      <text x="74" y="158" fontSize="10" fill="#8a93a6">P(A')</text>
      <text x="212" y="38" fontSize="10" fill="#8a93a6">P(B|A)</text>
      <text x="212" y="86" fontSize="10" fill="#8a93a6">P(B'|A)</text>
      <text x="212" y="160" fontSize="10" fill="#8a93a6">P(B|A')</text>
      <text x="212" y="206" fontSize="10" fill="#8a93a6">P(B'|A')</text>
    </svg>
  );
}
