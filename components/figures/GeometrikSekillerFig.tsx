// Figures for the 9th-grade "Geometrik Şekiller" unit lessons
// (Üçgende Açılar / Kenar-Açı Bağıntıları).
// Hand-computed coordinates. Site colors: axis/faint #8a93a6, accent #e5492b,
// dark #0e1b33, fill #fbf9f4.

// (1) Dış açılar toplamı: bir üçgenin her köşesinden bir dış açı alınır;
// üç dış açının toplamı 360°'dir.
// Triangle vertices (matching IcAcilar style): A(40,180), B(260,180), C(150,40).
// At each vertex one side is extended (dashed) and the exterior angle marked.
//  - A: side AB along the base extended to the LEFT (toward x<40) -> exterior at A.
//  - B: side AB extended to the RIGHT (x>260) -> exterior at B.
//  - C: side BC extended beyond C upward-left -> exterior at C.
// Extensions drawn just far enough to make the exterior angle legible.
export function DisAcilarToplam() {
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label="Bir üçgenin üç köşesinden alınan dış açılar; toplamları 360 derecedir">
      {/* triangle */}
      <polygon points="60,190 280,190 170,60" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      {/* base AB extended both ways (dashed) */}
      <line x1="60" y1="190" x2="20" y2="190" stroke="#8a93a6" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="280" y1="190" x2="340" y2="190" stroke="#8a93a6" strokeWidth="2" strokeDasharray="5 4" />
      {/* side CB extended beyond C: direction from B(280,190) to C(170,60),
          continue past C with same slope. Δ=(-110,-130); unit*55 ≈ (-35,-41).
          C + that = (135,19). */}
      <line x1="170" y1="60" x2="135" y2="19" stroke="#8a93a6" strokeWidth="2" strokeDasharray="5 4" />
      {/* exterior-angle arcs (accent) */}
      {/* at A(60,190): between AC (up-right) and the left extension (toward x<60) */}
      <path d="M 36 190 A 24 24 0 0 0 50 168" fill="none" stroke="#e5492b" strokeWidth="2" />
      <text x="30" y="178" fontSize="13" fill="#e5492b" fontWeight="bold">x</text>
      {/* at B(280,190): between BC (up-left) and the right extension (toward x>280) */}
      <path d="M 304 190 A 24 24 0 0 0 292 168" fill="none" stroke="#e5492b" strokeWidth="2" />
      <text x="302" y="178" fontSize="13" fill="#e5492b" fontWeight="bold">y</text>
      {/* at C(170,60): between CA (down-left) and the upper extension (toward (135,19)) */}
      <path d="M 152 78 A 22 22 0 0 0 158 47" fill="none" stroke="#e5492b" strokeWidth="2" />
      <text x="160" y="44" fontSize="13" fill="#e5492b" fontWeight="bold">z</text>
      {/* vertex labels */}
      <text x="46" y="206" fontSize="14" fill="#0e1b33" fontWeight="bold">A</text>
      <text x="282" y="206" fontSize="14" fill="#0e1b33" fontWeight="bold">B</text>
      <text x="176" y="56" fontSize="14" fill="#0e1b33" fontWeight="bold">C</text>
      {/* caption inside */}
      <text x="180" y="150" fontSize="13" fill="#0e1b33" textAnchor="middle">x + y + z = 360°</text>
    </svg>
  );
}

// (2) Üçgen eşitsizliği: tabanı a olan bir köşeden çıkan iki kenar (b ve c).
// b + c > a olmalı; aksi halde iki kenar tabanın iki ucunu birleştiremez.
// Base from P(40,170) to Q(240,170) (length a). Apex R at (150,60).
// PR = c (left), QR = b (right). The dashed arcs hint the "reach" of each side.
export function UcgenEsitsizligi() {
  return (
    <svg viewBox="0 0 300 210" role="img" aria-label="Tabanı a olan üçgen; b ve c kenarlarının toplamı a'dan büyük olmalı">
      {/* triangle */}
      <polygon points="40,170 240,170 150,60" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      {/* base label a */}
      <text x="140" y="190" fontSize="15" fill="#0e1b33" textAnchor="middle">a</text>
      {/* left side c: midpoint of (40,170)-(150,60) = (95,115) */}
      <text x="82" y="112" fontSize="15" fill="#e5492b" textAnchor="middle">c</text>
      {/* right side b: midpoint of (240,170)-(150,60) = (195,115) */}
      <text x="206" y="112" fontSize="15" fill="#e5492b" textAnchor="middle">b</text>
      {/* condition */}
      <text x="150" y="150" fontSize="13" fill="#0e1b33" textAnchor="middle">b + c &gt; a</text>
    </svg>
  );
}
