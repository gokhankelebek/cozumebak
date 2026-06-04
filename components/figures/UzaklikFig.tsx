// Figure for the 10th-grade "İki Nokta Arası Uzaklık" lesson.
// Shows the distance |AB| as the hypotenuse of a right triangle whose legs
// are the horizontal (Δx) and vertical (Δy) differences. Coordinates
// hand-computed so the figure is faithful.
// Conventions: axis #8a93a6, accent (hypotenuse/points) #e5492b, dark #0e1b33.

// A(1,2) ve B(4,6): Δx = 3, Δy = 4, |AB| = 5. Dik üçgenin dik köşesi C(4,2).
// Ölçek: 1 birim = 30 px; orijin (40, 200). px x = 40 + 30*x, py = 200 - 30*y.
// A(1,2) -> (70,140);  B(4,6) -> (160,20);  C(4,2) -> (160,140).
export function UzaklikPisagor() {
  return (
    <svg viewBox="0 0 250 220" role="img" aria-label="A(1,2) ve B(4,6) arasındaki uzaklık, yatay fark 3 ve dikey fark 4 olan dik üçgenin hipotenüsü; uzaklık 5">
      <line x1="20" y1="200" x2="240" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="14" x2="40" y2="210" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="230" y="214" fontSize="12" fill="#0e1b33">x</text>
      <text x="26" y="24" fontSize="12" fill="#0e1b33">y</text>
      <text x="30" y="213" fontSize="11" fill="#8a93a6">O</text>
      {/* yatay dik kenar A -> C (Δx = 3) */}
      <line x1="70" y1="140" x2="160" y2="140" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* dikey dik kenar C -> B (Δy = 4) */}
      <line x1="160" y1="140" x2="160" y2="20" stroke="#0e1b33" strokeWidth="1.5" strokeDasharray="5 4" />
      {/* hipotenüs A -> B (uzaklık) */}
      <line x1="70" y1="140" x2="160" y2="20" stroke="#e5492b" strokeWidth="2.5" />
      {/* dik açı işareti C köşesinde */}
      <polyline points="148,140 148,128 160,128" fill="none" stroke="#8a93a6" strokeWidth="1.2" />
      <circle cx="70" cy="140" r="3.5" fill="#e5492b" />
      <circle cx="160" cy="20" r="3.5" fill="#e5492b" />
      <circle cx="160" cy="140" r="3" fill="#0e1b33" />
      <text x="48" y="156" fontSize="12" fill="#0e1b33">A(1,2)</text>
      <text x="166" y="22" fontSize="12" fill="#0e1b33">B(4,6)</text>
      <text x="164" y="156" fontSize="11" fill="#8a93a6">C(4,2)</text>
      <text x="100" y="156" fontSize="12" fill="#0e1b33">Δx=3</text>
      <text x="166" y="86" fontSize="12" fill="#0e1b33">Δy=4</text>
      <text x="96" y="74" fontSize="12" fill="#e5492b">|AB|=5</text>
    </svg>
  );
}
