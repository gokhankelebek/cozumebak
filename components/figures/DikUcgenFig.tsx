// Figures for the "Dik Üçgen ve Pisagor Teoremi" lesson.
// Schematic, exam-style right triangles. Colors follow the site convention:
// main stroke #0e1b33, accent #e5492b, faint #8a93a6, fills #fbf9f4 / none.

// (1) Pisagor: dik üçgen, dik kenarlar a ve b, hipotenüs c, dik açı kareli.
export function Pisagor() {
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label="Dik üçgen: dik kenarlar a ve b, hipotenüs c">
      <polygon points="50,160 220,160 50,40" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <rect x="50" y="142" width="18" height="18" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="135" y="180" fontSize="15" fill="#e5492b" textAnchor="middle">a</text>
      <text x="32" y="104" fontSize="15" fill="#e5492b" textAnchor="middle">b</text>
      <text x="146" y="92" fontSize="15" fill="#0e1b33" textAnchor="middle">c</text>
    </svg>
  );
}

// (2) 30-60-90 üçgeni: kenar oranları x : x√3 : 2x.
export function Ucgen304560() {
  return (
    <svg viewBox="0 0 280 210" role="img" aria-label="30-60-90 üçgeni, kenar oranları x, x kök 3 ve 2x">
      <polygon points="50,170 240,170 50,50" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <rect x="50" y="152" width="18" height="18" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="218" y="164" fontSize="13" fill="#8a93a6" textAnchor="middle">30°</text>
      <text x="64" y="68" fontSize="13" fill="#8a93a6" textAnchor="middle">60°</text>
      <text x="145" y="190" fontSize="15" fill="#e5492b" textAnchor="middle">x√3</text>
      <text x="32" y="116" fontSize="15" fill="#e5492b" textAnchor="middle">x</text>
      <text x="156" y="100" fontSize="15" fill="#0e1b33" textAnchor="middle">2x</text>
    </svg>
  );
}

// (3) 45-45-90 üçgeni (ikizkenar dik): kenarlar x : x : x√2.
export function Ucgen454590() {
  return (
    <svg viewBox="0 0 240 210" role="img" aria-label="45-45-90 üçgeni, kenarlar x, x ve x kök 2">
      <polygon points="50,170 200,170 50,20" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="2" />
      <rect x="50" y="152" width="18" height="18" fill="none" stroke="#0e1b33" strokeWidth="1.5" />
      <text x="178" y="162" fontSize="13" fill="#8a93a6" textAnchor="middle">45°</text>
      <text x="66" y="40" fontSize="13" fill="#8a93a6" textAnchor="middle">45°</text>
      <text x="125" y="190" fontSize="15" fill="#e5492b" textAnchor="middle">x</text>
      <text x="32" y="100" fontSize="15" fill="#e5492b" textAnchor="middle">x</text>
      <text x="140" y="92" fontSize="15" fill="#0e1b33" textAnchor="middle">x√2</text>
    </svg>
  );
}
