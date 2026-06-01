// Figures for the "Çember ve Daire" (TYT) lesson. Schematic SVGs with
// pre-computed coordinates; correct labels matter more than exact scale.
// Named exports, imported directly in the MDX.

// (1) Aynı yayı gören merkez açı (merkezden) ve çevre açı (çember üzerinden).
export function MerkezCevreAci() {
  return (
    <svg viewBox="0 0 320 280" role="img" aria-label="Aynı AB yayını gören merkez açı ve çevre açı">
      <circle cx="160" cy="150" r="100" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="160" cy="150" r="3" fill="#0e1b33" />
      <text x="160" y="168" fontSize="14" fill="#0e1b33" textAnchor="middle">O</text>

      <line x1="160" y1="150" x2="68" y2="111" stroke="#e5492b" strokeWidth="2" />
      <line x1="160" y1="150" x2="252" y2="111" stroke="#e5492b" strokeWidth="2" />

      <line x1="160" y1="50" x2="68" y2="111" stroke="#0e1b33" strokeWidth="2" />
      <line x1="160" y1="50" x2="252" y2="111" stroke="#0e1b33" strokeWidth="2" />

      <circle cx="68" cy="111" r="3" fill="#0e1b33" />
      <circle cx="252" cy="111" r="3" fill="#0e1b33" />
      <circle cx="160" cy="50" r="3" fill="#0e1b33" />

      <text x="54" y="108" fontSize="14" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="266" y="108" fontSize="14" fill="#0e1b33" textAnchor="middle">B</text>
      <text x="160" y="42" fontSize="14" fill="#0e1b33" textAnchor="middle">C</text>

      <text x="160" y="135" fontSize="13" fill="#e5492b" textAnchor="middle">2α</text>
      <text x="160" y="78" fontSize="13" fill="#0e1b33" textAnchor="middle">α</text>

      <path d="M 68 251 A 100 100 0 0 0 252 251" fill="none" stroke="#8a93a6" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="160" y="270" fontSize="13" fill="#8a93a6" textAnchor="middle">AB yayı</text>
    </svg>
  );
}

// (2) Çembere bir noktadan teğet; teğet değme noktasındaki yarıçapa diktir.
export function Teget() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Çembere T noktasında çizilen teğet ve değme noktasındaki yarıçapa dikliği">
      <circle cx="120" cy="130" r="80" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="120" cy="130" r="3" fill="#0e1b33" />
      <text x="112" y="146" fontSize="14" fill="#0e1b33" textAnchor="middle">O</text>

      <line x1="120" y1="130" x2="200" y2="130" stroke="#e5492b" strokeWidth="2" />
      <text x="160" y="124" fontSize="13" fill="#e5492b" textAnchor="middle">r</text>

      <circle cx="200" cy="130" r="3" fill="#0e1b33" />
      <text x="210" y="124" fontSize="14" fill="#0e1b33" textAnchor="middle">T</text>

      <line x1="200" y1="40" x2="200" y2="220" stroke="#0e1b33" strokeWidth="2" />
      <text x="222" y="56" fontSize="13" fill="#0e1b33" textAnchor="middle">teğet</text>

      <path d="M 200 146 L 184 146 L 184 130" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
    </svg>
  );
}

// (3) Merkez açısı α olan daire dilimi (sektör), taranmış.
export function DaireDilimi() {
  return (
    <svg viewBox="0 0 280 260" role="img" aria-label="Merkez açısı alfa olan taranmış daire dilimi (sektör)">
      <circle cx="120" cy="150" r="100" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />

      <path d="M 120 150 L 220 150 A 100 100 0 0 0 170.4 63.4 Z" fill="#fbe9e3" stroke="#e5492b" strokeWidth="2" />

      <circle cx="120" cy="150" r="3" fill="#0e1b33" />
      <text x="112" y="166" fontSize="14" fill="#0e1b33" textAnchor="middle">O</text>

      <text x="178" y="144" fontSize="13" fill="#e5492b" textAnchor="middle">r</text>
      <text x="150" y="128" fontSize="13" fill="#0e1b33" textAnchor="middle">α</text>

      <circle cx="220" cy="150" r="3" fill="#0e1b33" />
      <circle cx="170.4" cy="63.4" r="3" fill="#0e1b33" />
      <text x="234" y="154" fontSize="14" fill="#0e1b33" textAnchor="middle">A</text>
      <text x="182" y="58" fontSize="14" fill="#0e1b33" textAnchor="middle">B</text>
    </svg>
  );
}
