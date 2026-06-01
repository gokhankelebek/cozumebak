// Figures for the "Katı Cisimler (Uzay Geometri)" lesson.
// Schematic 3D solids, exam-style. Colors follow the site convention:
// main stroke #0e1b33, accent #e5492b, faint #8a93a6, faces #fbf9f4.
// Hidden edges drawn with strokeDasharray="4 3".

// (1) Dikdörtgenler prizması: kenarlar a, b, c.
export function Prizma() {
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label="Dikdörtgenler prizması: kenarlar a, b ve c">
      <polygon points="50,80 170,80 170,160 50,160" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <polygon points="50,80 100,40 220,40 170,80" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <polygon points="170,80 220,40 220,120 170,160" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="50" y1="160" x2="100" y2="120" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="100" y1="120" x2="220" y2="120" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="100" y1="120" x2="100" y2="40" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="110" y="178" fontSize="15" fill="#e5492b" textAnchor="middle">a</text>
      <text x="34" y="124" fontSize="15" fill="#e5492b" textAnchor="middle">b</text>
      <text x="205" y="68" fontSize="15" fill="#e5492b" textAnchor="middle">c</text>
    </svg>
  );
}

// (2) Silindir: üst-alt elips + yan yüzey, yarıçap r ve yükseklik h.
export function Silindir() {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label="Silindir: yarıçap r ve yükseklik h">
      <line x1="50" y1="55" x2="50" y2="165" stroke="#0e1b33" strokeWidth="2" />
      <line x1="170" y1="55" x2="170" y2="165" stroke="#0e1b33" strokeWidth="2" />
      <path d="M 50 165 A 60 20 0 0 0 170 165" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <path d="M 50 165 A 60 20 0 0 1 170 165" fill="none" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      <ellipse cx="110" cy="55" rx="60" ry="20" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="110" y1="55" x2="170" y2="55" stroke="#e5492b" strokeWidth="1.5" />
      <text x="138" y="48" fontSize="15" fill="#e5492b" textAnchor="middle">r</text>
      <line x1="186" y1="55" x2="186" y2="165" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="198" y="115" fontSize="15" fill="#e5492b" textAnchor="middle">h</text>
    </svg>
  );
}

// (3) Koni: taban elips + tepe noktası, yarıçap r ve yükseklik h.
export function Koni() {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label="Koni: yarıçap r ve yükseklik h">
      <path d="M 50 165 A 60 20 0 0 0 170 165" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <path d="M 50 165 A 60 20 0 0 1 170 165" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="50" y1="165" x2="110" y2="40" stroke="#0e1b33" strokeWidth="2" />
      <line x1="170" y1="165" x2="110" y2="40" stroke="#0e1b33" strokeWidth="2" />
      <line x1="110" y1="40" x2="110" y2="165" stroke="#8a93a6" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="100" y="108" fontSize="15" fill="#e5492b" textAnchor="middle">h</text>
      <line x1="110" y1="165" x2="170" y2="165" stroke="#e5492b" strokeWidth="1.5" />
      <text x="140" y="158" fontSize="15" fill="#e5492b" textAnchor="middle">r</text>
    </svg>
  );
}
