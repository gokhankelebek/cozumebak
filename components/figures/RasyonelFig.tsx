// Figures for the 10th-grade "Karekök ve Rasyonel Fonksiyonlar" lesson.
// Coordinates are pre-computed so each curve is faithful. Conventions match the
// other figure files: axes #8a93a6, curve #e5492b, labels/points #0e1b33.

// (1) y = √x : domain x ≥ 0, starts at origin, concave (flattening) increase.
// Origin (40,170); x-scale 20 px/unit, y-scale 38 px/unit.
// Points x=0,0.25,1,2.25,4,6.25,9 → y=0,0.5,1,1.5,2,2.5,3.
export function KarekokGrafik() {
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label="y eşittir karekök x grafiği; orijinden başlayıp gittikçe yatıklaşarak artan eğri">
      <line x1="30" y1="170" x2="235" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="40" x2="40" y2="185" stroke="#8a93a6" strokeWidth="1.5" />
      <polyline points="40,170 45,151 60,132 85,113 120,94 165,75 220,56" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="170" r="4" fill="#0e1b33" />
      <text x="223" y="166" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="50" fontSize="12" fill="#0e1b33">y</text>
      <text x="150" y="60" fontSize="13" fill="#e5492b">y = √x</text>
    </svg>
  );
}

// (2) y = 1/x : rectangular hyperbola, two branches, axes are the asymptotes.
// Origin (130,110); scale 30 px/unit. 1st-quadrant + 3rd-quadrant branches.
export function Hiperbol() {
  return (
    <svg viewBox="0 0 260 220" role="img" aria-label="y eşittir 1 bölü x grafiği; eksenleri asimptot alan iki kollu hiperbol">
      <line x1="20" y1="110" x2="245" y2="110" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="130" y1="20" x2="130" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <polyline points="142,35 145,50 160,80 190,95 220,100" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="40,120 70,125 100,140 115,170 118,185" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="233" y="106" fontSize="12" fill="#0e1b33">x</text>
      <text x="136" y="30" fontSize="12" fill="#0e1b33">y</text>
      <text x="168" y="52" fontSize="13" fill="#e5492b">y = 1/x</text>
    </svg>
  );
}
