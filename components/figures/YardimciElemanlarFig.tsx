// Figures for the 10th-grade "Üçgende Yardımcı Elemanlar" lesson.
// Schematic triangles. Colors follow the site convention:
// main stroke #0e1b33, accent (cevian) #e5492b, faint #8a93a6.

// (1) Kenarortay: A köşesinden BC kenarının orta noktası D'ye çizilen doğru.
// BD = DC eş işaretlerle gösterilmiş.
export function Kenarortay() {
  return (
    <svg viewBox="0 0 280 200" role="img" aria-label="Üçgende kenarortay: A köşesinden BC kenarının orta noktası D'ye çizilen doğru, BD ve DC eşit">
      <polygon points="140,38 45,165 235,165" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="140" y1="38" x2="140" y2="165" stroke="#e5492b" strokeWidth="2" />
      <circle cx="140" cy="165" r="3.5" fill="#0e1b33" />
      <line x1="92" y1="159" x2="92" y2="171" stroke="#8a93a6" strokeWidth="2" />
      <line x1="188" y1="159" x2="188" y2="171" stroke="#8a93a6" strokeWidth="2" />
      <text x="133" y="32" fontSize="14" fill="#0e1b33">A</text>
      <text x="32" y="179" fontSize="14" fill="#0e1b33">B</text>
      <text x="240" y="179" fontSize="14" fill="#0e1b33">C</text>
      <text x="146" y="183" fontSize="14" fill="#0e1b33">D</text>
    </svg>
  );
}

// (2) Açıortay: A açısını iki eş açıya bölen, E noktasında BC'yi kesen doğru.
export function Aciortay() {
  return (
    <svg viewBox="0 0 280 200" role="img" aria-label="Üçgende açıortay: A açısını iki eşit açıya bölen ve BC kenarını E'de kesen doğru">
      <polygon points="120,40 40,165 245,165" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <line x1="120" y1="40" x2="140" y2="165" stroke="#e5492b" strokeWidth="2" />
      <circle cx="140" cy="165" r="3.5" fill="#0e1b33" />
      <text x="101" y="74" fontSize="13" fill="#e5492b">α</text>
      <text x="126" y="74" fontSize="13" fill="#e5492b">α</text>
      <text x="113" y="34" fontSize="14" fill="#0e1b33">A</text>
      <text x="28" y="179" fontSize="14" fill="#0e1b33">B</text>
      <text x="250" y="179" fontSize="14" fill="#0e1b33">C</text>
      <text x="138" y="183" fontSize="14" fill="#0e1b33">E</text>
    </svg>
  );
}
