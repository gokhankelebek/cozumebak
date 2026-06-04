// Figures for the 9th-grade "Gerçek Sayılarda İşlemler ve Aralıklar" lesson.
// Number-line diagrams for intervals. Filled dot (●) = endpoint included,
// hollow dot (○) = endpoint excluded. Coordinates hand-computed.
// Conventions: axis #8a93a6, accent segment/dot #e5492b, dark text #0e1b33,
// hollow-dot fill #fbf9f4.

// (1) Half-open interval [-2, 5): left endpoint included, right excluded.
// Axis y=70, x runs 20..300. Scale: 20 px per unit, x=0 at px 140.
// -2 -> 100, 5 -> 240.
export function YariAcikAralik() {
  return (
    <svg viewBox="0 0 320 110" role="img" aria-label="Sayı doğrusunda [-2, 5) yarı açık aralığı: sol uç -2 dolu nokta (dahil), sağ uç 5 boş nokta (hariç)">
      <line x1="20" y1="70" x2="300" y2="70" stroke="#8a93a6" strokeWidth="1.5" />
      {/* tick marks at -2..6 */}
      <line x1="100" y1="65" x2="100" y2="75" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="140" y1="65" x2="140" y2="75" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="240" y1="65" x2="240" y2="75" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="94" y="90" fontSize="12" fill="#0e1b33">−2</text>
      <text x="136" y="90" fontSize="12" fill="#0e1b33">0</text>
      <text x="236" y="90" fontSize="12" fill="#0e1b33">5</text>
      {/* segment */}
      <line x1="100" y1="50" x2="240" y2="50" stroke="#e5492b" strokeWidth="3" />
      {/* left endpoint: filled (included) */}
      <circle cx="100" cy="50" r="5" fill="#e5492b" stroke="#e5492b" strokeWidth="2" />
      {/* right endpoint: hollow (excluded) */}
      <circle cx="240" cy="50" r="5" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2" />
      <text x="150" y="35" fontSize="13" fill="#e5492b">[−2, 5)</text>
    </svg>
  );
}

// (2) Intersection of A=[1,6] and B=(4,9]. Two stacked bars; A∩B=(4,6].
// Scale: 20 px per unit, x=0 at px 60. 1->80, 4->140, 6->180, 9->240.
export function AralikKesisim() {
  return (
    <svg viewBox="0 0 320 150" role="img" aria-label="A=[1,6] ve B=(4,9] aralıklarının sayı doğrusunda kesişimi; ortak bölge (4,6] yarı açık aralığıdır">
      <line x1="30" y1="115" x2="300" y2="115" stroke="#8a93a6" strokeWidth="1.5" />
      {[80, 140, 180, 240].map((x, i) => (
        <line key={i} x1={x} y1="110" x2={x} y2="120" stroke="#8a93a6" strokeWidth="1.5" />
      ))}
      <text x="76" y="134" fontSize="12" fill="#0e1b33">1</text>
      <text x="136" y="134" fontSize="12" fill="#0e1b33">4</text>
      <text x="176" y="134" fontSize="12" fill="#0e1b33">6</text>
      <text x="236" y="134" fontSize="12" fill="#0e1b33">9</text>
      {/* A = [1,6] : both filled */}
      <line x1="80" y1="40" x2="180" y2="40" stroke="#0e1b33" strokeWidth="3" />
      <circle cx="80" cy="40" r="5" fill="#0e1b33" />
      <circle cx="180" cy="40" r="5" fill="#0e1b33" />
      <text x="40" y="44" fontSize="12" fill="#0e1b33">A</text>
      {/* B = (4,9] : left hollow, right filled */}
      <line x1="140" y1="70" x2="240" y2="70" stroke="#0e1b33" strokeWidth="3" />
      <circle cx="140" cy="70" r="5" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="240" cy="70" r="5" fill="#0e1b33" />
      <text x="40" y="74" fontSize="12" fill="#0e1b33">B</text>
      {/* A∩B = (4,6] : accent */}
      <line x1="140" y1="95" x2="180" y2="95" stroke="#e5492b" strokeWidth="3.5" />
      <circle cx="140" cy="95" r="5" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2" />
      <circle cx="180" cy="95" r="5" fill="#e5492b" />
      <text x="190" y="99" fontSize="12" fill="#e5492b">A ∩ B = (4, 6]</text>
    </svg>
  );
}
