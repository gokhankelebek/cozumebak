// Figure for the 10th-grade "Koşullu Olasılık" lesson.
// A 2x2 contingency (çapraz) table that visualizes how P(A|B) narrows the
// sample space to a single row/column. Uses the gözlük örneği from the lesson:
//   toplam 100 kişi; gözlük takan 60 (kadın 25, erkek 35), takmayan 40.
// The "gözlük takan" column is highlighted accent — that is the new sample
// space when we condition on "gözlük takıyor".
// Conventions: outline #8a93a6, accent #e5492b, dark text #0e1b33, fill #fbf9f4.
// Layout (px): table x 40..300, y 30..150. Three columns of width ~80, three rows.
//   col borders at x = 120, 200, 280 ; header col 40..120
//   row borders at y = 60, 100, 140 ; header row 30..60
export function CaprazTablo() {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="Gözlük takma ve cinsiyet için çapraz tablo; gözlük takan sütunu vurgulanmış, koşullu olasılıkta örnek uzayın bu sütuna daraldığını gösteriyor">
      {/* highlight the "gözlük takan" column (örnek uzay daralması) */}
      <rect x="120" y="30" width="80" height="120" fill="#e5492b" fillOpacity="0.12" />

      {/* outer + inner grid lines */}
      <rect x="40" y="30" width="240" height="120" fill="none" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="120" y1="30" x2="120" y2="150" stroke="#8a93a6" strokeWidth="1.2" />
      <line x1="200" y1="30" x2="200" y2="150" stroke="#8a93a6" strokeWidth="1.2" />
      <line x1="40" y1="70" x2="280" y2="70" stroke="#8a93a6" strokeWidth="1.2" />
      <line x1="40" y1="110" x2="280" y2="110" stroke="#8a93a6" strokeWidth="1.2" />

      {/* column headers */}
      <text x="160" y="54" fontSize="11" fill="#e5492b" fontWeight="700" textAnchor="middle">Gözlük +</text>
      <text x="240" y="54" fontSize="11" fill="#0e1b33" textAnchor="middle">Gözlük −</text>

      {/* row headers */}
      <text x="80" y="94" fontSize="11" fill="#0e1b33" textAnchor="middle">Kadın</text>
      <text x="80" y="134" fontSize="11" fill="#0e1b33" textAnchor="middle">Erkek</text>

      {/* cell values */}
      <text x="160" y="94" fontSize="13" fill="#e5492b" fontWeight="700" textAnchor="middle">25</text>
      <text x="240" y="94" fontSize="13" fill="#0e1b33" textAnchor="middle">15</text>
      <text x="160" y="134" fontSize="13" fill="#e5492b" fontWeight="700" textAnchor="middle">35</text>
      <text x="240" y="134" fontSize="13" fill="#0e1b33" textAnchor="middle">25</text>

      {/* caption under the highlighted column */}
      <text x="160" y="170" fontSize="11" fill="#e5492b" textAnchor="middle">örnek uzay: 60 kişi</text>
    </svg>
  );
}
