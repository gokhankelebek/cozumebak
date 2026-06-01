// Figures for the "Dörtgenler ve Çokgenler" (dortgenler-tyt) lesson.
// Schematic, exam-style figures. Each export returns a self-contained <svg>.
// Colors: main #0e1b33, accent #e5492b, faint #8a93a6, fills #fbf9f4/none.

export function Paralelkenar() {
  return (
    <svg viewBox="0 0 260 180" role="img" aria-label="Paralelkenar, tabanı ve yüksekliği işaretli">
      <polygon points="60,40 240,40 200,140 20,140" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="60" y1="40" x2="60" y2="140" stroke="#e5492b" strokeWidth="2" strokeDasharray="4 3" />
      <polyline points="68,132 68,140 60,140" fill="none" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="110" y="158" fontSize="14" fill="#0e1b33" textAnchor="middle">taban</text>
      <text x="68" y="95" fontSize="14" fill="#e5492b">h</text>
    </svg>
  );
}

export function Yamuk() {
  return (
    <svg viewBox="0 0 280 180" role="img" aria-label="Yamuk, paralel kenarları a ve c ile yüksekliği h">
      <polygon points="40,40 200,40 240,140 20,140" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="120" y1="40" x2="120" y2="140" stroke="#e5492b" strokeWidth="2" strokeDasharray="4 3" />
      <polyline points="128,132 128,140 120,140" fill="none" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="120" y="32" fontSize="14" fill="#0e1b33" textAnchor="middle">a</text>
      <text x="130" y="158" fontSize="14" fill="#0e1b33" textAnchor="middle">c</text>
      <text x="128" y="95" fontSize="14" fill="#e5492b">h</text>
    </svg>
  );
}

export function EskenarDortgen() {
  return (
    <svg viewBox="0 0 220 200" role="img" aria-label="Eşkenar dörtgen, köşegenleri e ve f çizili">
      <polygon points="110,30 190,100 110,170 30,100" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="30" y1="100" x2="190" y2="100" stroke="#e5492b" strokeWidth="2" />
      <line x1="110" y1="30" x2="110" y2="170" stroke="#e5492b" strokeWidth="2" />
      <text x="165" y="92" fontSize="14" fill="#e5492b" textAnchor="middle">e</text>
      <text x="122" y="62" fontSize="14" fill="#e5492b" textAnchor="middle">f</text>
    </svg>
  );
}
