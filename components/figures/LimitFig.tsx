// Figures for the AYT "Limit ve Süreklilik" unit.
// Conventions match the other figure files: axes #8a93a6, curve #e5492b,
// labels/points #0e1b33, fill #fbf9f4. All coordinates are pre-computed so each
// curve is mathematically faithful. Turkish aria-labels.

// (1) Jump discontinuity / one-sided limits.
// A piecewise graph that jumps at x = a: left branch approaches height 2,
// right branch approaches height 5; the filled dot marks f(a)=2, the open
// circle marks the right-side value (5) that is NOT attained.
// Origin (40,210); x-scale 40 px/unit (a at x=3 → px 160), y from bottom 210,
// 32 px/unit so y=2 → 210-64=146, y=5 → 210-160=50.
export function SicramaFig() {
  return (
    <svg viewBox="0 0 280 240" role="img" aria-label="x eşittir a noktasında sıçrama yapan parçalı fonksiyon grafiği; soldan limit 2, sağdan limit 5">
      <line x1="30" y1="210" x2="265" y2="210" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="225" stroke="#8a93a6" strokeWidth="1.5" />
      {/* vertical dashed line at x = a (px 160) */}
      <line x1="160" y1="40" x2="160" y2="210" stroke="#8a93a6" strokeWidth="1" strokeDasharray="4 4" />
      {/* left branch: rises toward (a, 2) */}
      <polyline points="55,186 90,170 125,156 158,146" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* right branch: starts high near (a, 5), descends */}
      <polyline points="162,50 200,70 235,90 258,102" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* filled dot f(a)=2 (soldan, attained) */}
      <circle cx="160" cy="146" r="4.5" fill="#e5492b" />
      {/* open circle: right limit 5, not attained */}
      <circle cx="160" cy="50" r="4.5" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2" />
      <text x="166" y="152" fontSize="12" fill="#0e1b33">2</text>
      <text x="166" y="48" fontSize="12" fill="#0e1b33">5</text>
      <text x="155" y="226" fontSize="12" fill="#0e1b33">a</text>
      <text x="253" y="206" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="32" fontSize="12" fill="#0e1b33">y</text>
    </svg>
  );
}

// (2) Removable discontinuity ("hole"): the line y = x+2 with an open circle
// at (2,4) — graph of (x²-4)/(x-2). Limit exists (=4) but point is undefined.
// Origin at (40,180); x-scale 36 px/unit (x=2 → px 112), y-scale 22 px/unit
// (y=4 → 180-88=92).
export function DelikFig() {
  return (
    <svg viewBox="0 0 260 210" role="img" aria-label="y eşittir x artı 2 doğrusu; x eşittir 2 noktasında içi boş daire ile gösterilen delik (kaldırılabilir süreksizlik)">
      <line x1="30" y1="180" x2="245" y2="180" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="195" stroke="#8a93a6" strokeWidth="1.5" />
      {/* line y = x+2 drawn across, with a gap at x=2 (px 112) */}
      <line x1="48" y1="136" x2="106" y2="98" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="118" y1="86" x2="220" y2="24" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" />
      {/* open circle at the hole (2,4) → px (112,92) */}
      <circle cx="112" cy="92" r="4.5" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2" />
      {/* dashed guides */}
      <line x1="112" y1="92" x2="112" y2="180" stroke="#8a93a6" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="40" y1="92" x2="112" y2="92" stroke="#8a93a6" strokeWidth="1" strokeDasharray="4 4" />
      <text x="106" y="194" fontSize="12" fill="#0e1b33">2</text>
      <text x="26" y="96" fontSize="12" fill="#0e1b33">4</text>
      <text x="233" y="176" fontSize="12" fill="#0e1b33">x</text>
      <text x="46" y="32" fontSize="12" fill="#0e1b33">y</text>
    </svg>
  );
}

// (3) Rational function with one vertical asymptote x = a and one horizontal
// asymptote y = L. Generic shape of f(x)=(2x+1)/(x-3): VA at x=3, HA at y=2.
// Origin (130,115); x-scale 24 px/unit (x=3 → px 130+72=202), y from 115,
// 22 px/unit (y=2 → 115-44=71).
export function AsimptotFig() {
  return (
    <svg viewBox="0 0 300 230" role="img" aria-label="Düşey asimptotu x eşittir a, yatay asimptotu y eşittir L olan rasyonel fonksiyon grafiği; iki kollu eğri">
      <line x1="20" y1="115" x2="285" y2="115" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="50" y1="15" x2="50" y2="215" stroke="#8a93a6" strokeWidth="1.5" />
      {/* vertical asymptote x=a (px 202) */}
      <line x1="202" y1="20" x2="202" y2="210" stroke="#8a93a6" strokeWidth="1.2" strokeDasharray="5 4" />
      {/* horizontal asymptote y=L (px 71) */}
      <line x1="30" y1="71" x2="285" y2="71" stroke="#8a93a6" strokeWidth="1.2" strokeDasharray="5 4" />
      {/* left branch: comes from below the HA, dives to -inf near x=a^- */}
      <polyline points="60,100 110,92 150,80 178,55 192,28" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* right branch: from +inf near x=a^+, descends toward HA from above */}
      <polyline points="212,205 224,150 244,110 265,92 282,84" fill="none" stroke="#e5492b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="206" y="208" fontSize="12" fill="#0e1b33">x = a</text>
      <text x="55" y="66" fontSize="12" fill="#0e1b33">y = L</text>
      <text x="273" y="111" fontSize="12" fill="#0e1b33">x</text>
      <text x="56" y="26" fontSize="12" fill="#0e1b33">y</text>
    </svg>
  );
}
