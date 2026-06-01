// Figure for the AYT unit-circle lesson (birim-cember-ayt): a unit circle
// centred at the origin O, the x and y axes, the four quadrants labelled
// I–IV, and one example angle whose terminal side (a radius) is drawn to the
// circle. Coordinates are pre-computed; the example angle is 60° so the
// terminal point lands at (cos60°, sin60°) = (0.5, √3/2 ≈ 0.866).
export function BirimCember() {
  return (
    <svg viewBox="0 0 360 360" role="img" aria-label="Merkezi orijinde olan birim çember; x ve y eksenleri, I, II, III, IV bölgeleri ve 60 derecelik örnek açının yarıçapı">
      <circle cx="180" cy="180" r="120" stroke="#0e1b33" strokeWidth="2" fill="#fbf9f4" />
      <line x1="36" y1="180" x2="324" y2="180" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="180" y1="36" x2="180" y2="324" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="324,180 314,175 314,185" fill="#8a93a6" />
      <polygon points="180,36 175,46 185,46" fill="#8a93a6" />
      <text x="316" y="200" fontSize="14" fill="#8a93a6" textAnchor="middle">x</text>
      <text x="164" y="44" fontSize="14" fill="#8a93a6" textAnchor="middle">y</text>
      <text x="250" y="118" fontSize="16" fill="#0e1b33" textAnchor="middle">I</text>
      <text x="110" y="118" fontSize="16" fill="#0e1b33" textAnchor="middle">II</text>
      <text x="110" y="252" fontSize="16" fill="#0e1b33" textAnchor="middle">III</text>
      <text x="250" y="252" fontSize="16" fill="#0e1b33" textAnchor="middle">IV</text>
      <path d="M 210 180 A 30 30 0 0 0 195 154" stroke="#e5492b" strokeWidth="2" fill="none" />
      <text x="216" y="166" fontSize="13" fill="#e5492b" textAnchor="middle">α</text>
      <line x1="180" y1="180" x2="240" y2="76" stroke="#e5492b" strokeWidth="2.5" />
      <circle cx="240" cy="76" r="4" fill="#e5492b" />
      <text x="252" y="70" fontSize="13" fill="#0e1b33" textAnchor="start">P</text>
      <circle cx="180" cy="180" r="3.5" fill="#0e1b33" />
      <text x="168" y="196" fontSize="14" fill="#0e1b33" textAnchor="middle">O</text>
    </svg>
  );
}
