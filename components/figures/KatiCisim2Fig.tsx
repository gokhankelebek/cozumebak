// Additional figures for the "Uzay Geometri (Katı Cisimler)" unit.
// Schematic 3D solids, exam-style. Colors follow the site convention:
// main stroke #0e1b33, accent #e5492b, faint #8a93a6, faces #fbf9f4.
// Hidden edges drawn with strokeDasharray="4 3".
// Coordinates are hand-computed in a 220x220 viewBox.

// (1) Kare dik piramit: kare taban (köşegen görünümlü) + tepe noktası.
// Taban köşeleri (saat yönü): ön-sol A(60,160), ön-sağ B(160,160),
// arka-sağ C(190,120), arka-sol D(90,120). Tepe T(125,30).
// Taban merkezi M = ((60+160+90+190)/4, (160+160+120+120)/4) = (125,140).
// Yükseklik h: M(125,140) -> T(125,30) düşey çizgi (kesik, gizli).
export function Piramit() {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label="Kare tabanlı dik piramit: taban kenarı a ve yükseklik h">
      {/* Görünen taban kenarları */}
      <line x1="60" y1="160" x2="160" y2="160" stroke="#0e1b33" strokeWidth="2" />
      <line x1="160" y1="160" x2="190" y2="120" stroke="#0e1b33" strokeWidth="2" />
      <line x1="90" y1="120" x2="60" y2="160" stroke="#0e1b33" strokeWidth="2" />
      {/* Gizli taban kenarları (arka) */}
      <line x1="90" y1="120" x2="190" y2="120" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Yan ayrıtlar */}
      <line x1="60" y1="160" x2="125" y2="30" stroke="#0e1b33" strokeWidth="2" />
      <line x1="160" y1="160" x2="125" y2="30" stroke="#0e1b33" strokeWidth="2" />
      <line x1="190" y1="120" x2="125" y2="30" stroke="#0e1b33" strokeWidth="2" />
      <line x1="90" y1="120" x2="125" y2="30" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Yükseklik: merkez M(125,140) -> tepe T(125,30) */}
      <line x1="125" y1="140" x2="125" y2="30" stroke="#8a93a6" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="116" y="92" fontSize="15" fill="#e5492b" textAnchor="middle">h</text>
      <text x="108" y="178" fontSize="15" fill="#e5492b" textAnchor="middle">a</text>
    </svg>
  );
}

// (2) Küre: daire + ekvator elipsi (perspektif) + yarıçap.
// Merkez O(110,110), yarıçap R=70 (ekrandaki büyük daire).
// Yarıçap çizgisi O(110,110) -> sağ uç (180,110).
export function Kure() {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label="Küre: yarıçap r">
      <circle cx="110" cy="110" r="70" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      {/* Ekvator (görünen ön yarısı düz, arka yarısı kesik) */}
      <path d="M 40 110 A 70 22 0 0 0 180 110" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <path d="M 40 110 A 70 22 0 0 1 180 110" fill="none" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Yarıçap */}
      <line x1="110" y1="110" x2="180" y2="110" stroke="#e5492b" strokeWidth="1.5" />
      <circle cx="110" cy="110" r="2.5" fill="#0e1b33" />
      <text x="145" y="103" fontSize="15" fill="#e5492b" textAnchor="middle">r</text>
    </svg>
  );
}
