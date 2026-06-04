// Figures for the 12th-grade "Üstel ve Logaritmik Fonksiyonlar" unit.
// All coordinates are hand-computed so each curve is faithful to its formula.
// Conventions match the other figure files:
//   axes #8a93a6, main curve #e5492b, second curve / y=x #0e1b33,
//   light fill #fbf9f4, Turkish aria-label.

// (1) y = 2^x : increasing exponential, y-intercept (0,1), x-axis (y=0) asymptote.
// Origin (40,157); x-scale 28 px/unit, y-scale ~18 px/unit.
// Hand-computed (x, 2^x) -> pixel (40+28x, 175-18·2^x), y-axis drawn through x=0:
//   x=-1   y=0.500 -> (12,166)
//   x=-0.5 y=0.707 -> (26,162)
//   x=0    y=1.000 -> (40,157)
//   x=0.5  y=1.414 -> (54,149)
//   x=1    y=2.000 -> (68,139)
//   x=1.5  y=2.828 -> (82,124)
//   x=2    y=4.000 -> (96,103)
//   x=2.5  y=5.657 -> (110,73)
//   x=3    y=8.000 -> (124,31)
export function UstelGrafik() {
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label="y eşittir 2 üzeri x grafiği; sürekli artan, y eksenini 1 noktasında kesen ve x eksenine soldan yaklaşan üstel eğri">
      <rect x="0" y="0" width="260" height="200" fill="#fbf9f4" />
      <line x1="8" y1="175" x2="235" y2="175" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <polyline points="12,166 26,162 40,157 54,149 68,139 82,124 96,103 110,73 124,31" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="157" r="4" fill="#0e1b33" />
      <text x="44" y="170" fontSize="11" fill="#0e1b33">1</text>
      <text x="223" y="171" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="30" fontSize="12" fill="#0e1b33">y</text>
      <text x="128" y="44" fontSize="13" fill="#e5492b">y = 2ˣ</text>
    </svg>
  );
}

// (2) y = (1/2)^x : decreasing exponential (base 0<a<1), y-intercept (0,1).
// Same scales/origin as above; uses 2^(-x):
//   x=-3 y=8.000 -> (-44,31)  (off-screen left, start at x=-2.5)
//   x=-2.5 y=5.657 -> (-30,73)  -> start visible at x=-2
//   x=-2 y=4.000 -> (-16,103)
//   x=-1.5 y=2.828 -> (-2,124)
//   x=-1 y=2.000 -> (12,139)
//   x=-0.5 y=1.414 -> (26,149)
//   x=0   y=1.000 -> (40,157)
//   x=0.5 y=0.707 -> (54,162)
//   x=1   y=0.500 -> (68,166)
//   x=2   y=0.250 -> (96,170)
//   x=3   y=0.125 -> (124,173)
export function UstelAzalan() {
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label="y eşittir yarım üzeri x grafiği; sürekli azalan, y eksenini 1 noktasında kesen ve x eksenine sağdan yaklaşan üstel eğri">
      <rect x="0" y="0" width="260" height="200" fill="#fbf9f4" />
      <line x1="8" y1="175" x2="235" y2="175" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="190" stroke="#8a93a6" strokeWidth="1.5" />
      <polyline points="0,113 12,139 26,149 40,157 54,162 68,166 96,170 124,173 200,174" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="157" r="4" fill="#0e1b33" />
      <text x="44" y="170" fontSize="11" fill="#0e1b33">1</text>
      <text x="223" y="171" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="30" fontSize="12" fill="#0e1b33">y</text>
      <text x="120" y="150" fontSize="12" fill="#e5492b">y = (1/2)ˣ</text>
    </svg>
  );
}

// (3) Symmetry of y = 2^x and y = log₂ x about the line y = x.
// Equal scales so the reflection is geometrically true.
// Origin (110,150); 22 px/unit on both axes -> pixel = (110+22·X, 150-22·Y).
// y = 2^x  (X, 2^X):
//   (-2,0.25)->(66,145)  (-1,0.5)->(88,139)  (0,1)->(110,128)
//   (1,2)->(132,106)     (2,4)->(154,62)     (2.6,6.06)->(167,17)
// y = log₂ x is the mirror (swap each pair):
//   (0.25,-2)->(116,194 off)  (0.5,-1)->(121,172)  (1,0)->(132,150)
//   (2,1)->(154,128)          (4,2)->(198,106)     (6.06,2.6)->(243,93)
// y = x line through origin: from (-2,-2)->(66,194) to (2.7,2.7)->(169,91).
export function UstelLogSimetri() {
  return (
    <svg viewBox="0 0 270 210" role="img" aria-label="y eşittir 2 üzeri x ile y eşittir 2 tabanında logaritma x eğrilerinin y eşittir x doğrusuna göre simetrisi">
      <rect x="0" y="0" width="270" height="210" fill="#fbf9f4" />
      <line x1="10" y1="150" x2="258" y2="150" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="110" y1="14" x2="110" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      {/* y = x referans doğrusu (kesik çizgi) */}
      <line x1="66" y1="194" x2="169" y2="91" stroke="#0e1b33" strokeWidth="1.3" strokeDasharray="5 4" />
      {/* y = 2^x */}
      <polyline points="66,145 88,139 110,128 132,106 154,62 167,17" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* y = log_2 x */}
      <polyline points="121,172 132,150 154,128 198,106 243,93" fill="none" stroke="#0e1b33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="110" cy="128" r="3.5" fill="#e5492b" />
      <circle cx="132" cy="150" r="3.5" fill="#0e1b33" />
      <text x="246" y="146" fontSize="12" fill="#0e1b33">x</text>
      <text x="115" y="24" fontSize="12" fill="#0e1b33">y</text>
      <text x="138" y="40" fontSize="12.5" fill="#e5492b">y = 2ˣ</text>
      <text x="200" y="88" fontSize="12.5" fill="#0e1b33">y = log₂x</text>
      <text x="160" y="118" fontSize="11" fill="#0e1b33">y = x</text>
    </svg>
  );
}
