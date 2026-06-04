// Figure for the 10th-grade "İki Kategorik Değişken" lesson.
// Clustered (grouped) bar chart visualising a two-way table:
//   Kız:   Futbol 20, Basketbol 30
//   Erkek: Futbol 35, Basketbol 15
// Bars grouped by cinsiyet; colour encodes spor. Comparing the bar
// heights within / across groups is exactly how we read "is there a
// relationship": Kız leans Basketbol, Erkek leans Futbol -> relationship.
// Coordinates hand-computed.
// Plot area: x-axis y=170 (px), y-axis x=45. Bars 0..40 mapped to 150 px,
// so scale = 150/40 = 3.75 px per unit. Bar top y = 170 - value*3.75.
//   20 -> 170-75  = 95
//   30 -> 170-112.5 = 57.5
//   35 -> 170-131.25 = 38.75
//   15 -> 170-56.25 = 113.75
// Conventions: axis #8a93a6, accent (Futbol) #e5492b, dark (Basketbol) #0e1b33,
// fill #fbf9f4.
export function KumelenmisSutun() {
  return (
    <svg viewBox="0 0 320 210" role="img" aria-label="Cinsiyete göre kümelenmiş sütun grafiği: kızlarda futbol 20 basketbol 30, erkeklerde futbol 35 basketbol 15">
      {/* axes */}
      <line x1="45" y1="170" x2="305" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="45" y1="20" x2="45" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      {/* y gridline labels: 10,20,30,40 -> y = 170 - v*3.75 */}
      {[10, 20, 30, 40].map((v) => {
        const y = 170 - v * 3.75;
        return (
          <g key={v}>
            <line x1="42" y1={y} x2="45" y2={y} stroke="#8a93a6" strokeWidth="1.5" />
            <text x="38" y={y + 4} fontSize="10" fill="#8a93a6" textAnchor="end">{v}</text>
          </g>
        );
      })}

      {/* Kız grubu: Futbol 20 (accent), Basketbol 30 (dark) */}
      <rect x="80" y="95" width="34" height="75" fill="#e5492b" />
      <rect x="118" y="57.5" width="34" height="112.5" fill="#0e1b33" />
      <text x="97" y="89" fontSize="11" fill="#0e1b33" textAnchor="middle">20</text>
      <text x="135" y="51.5" fontSize="11" fill="#0e1b33" textAnchor="middle">30</text>
      <text x="116" y="186" fontSize="12" fill="#0e1b33" textAnchor="middle">Kız</text>

      {/* Erkek grubu: Futbol 35 (accent), Basketbol 15 (dark) */}
      <rect x="200" y="38.75" width="34" height="131.25" fill="#e5492b" />
      <rect x="238" y="113.75" width="34" height="56.25" fill="#0e1b33" />
      <text x="217" y="32.75" fontSize="11" fill="#0e1b33" textAnchor="middle">35</text>
      <text x="255" y="107.75" fontSize="11" fill="#0e1b33" textAnchor="middle">15</text>
      <text x="236" y="186" fontSize="12" fill="#0e1b33" textAnchor="middle">Erkek</text>

      {/* legend */}
      <rect x="250" y="18" width="12" height="12" fill="#e5492b" />
      <text x="266" y="28" fontSize="11" fill="#0e1b33" textAnchor="start">Futbol</text>
      <rect x="250" y="34" width="12" height="12" fill="#0e1b33" />
      <text x="266" y="44" fontSize="11" fill="#0e1b33" textAnchor="start">Basketbol</text>
    </svg>
  );
}
