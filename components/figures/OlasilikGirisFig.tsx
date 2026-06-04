// Figures for the 9th-grade "Veriden Olasılığa" lessons.
// Coordinates hand-computed; site colors: axis #8a93a6, accent #e5492b,
// dark #0e1b33, hollow/light fill #fbf9f4.

// (1) Probability scale: a number line from 0 to 1 showing that every
// probability lives in [0,1]; 0 = imkânsız, 1/2 = eşit şans, 1 = kesin.
// Axis y=70, x runs 30..290 → 260 px for one unit (0..1). Scale 260 px/unit.
// 0 -> 30, 1/4 -> 95, 1/2 -> 160, 3/4 -> 225, 1 -> 290.
export function OlasilikSkalasi() {
  return (
    <svg viewBox="0 0 320 120" role="img" aria-label="Olasılık skalası: 0 (imkânsız) ile 1 (kesin) arasında bir sayı doğrusu; ortada 1 bölü 2 eşit şans">
      {/* gradient-free shaded bar to suggest increasing likelihood */}
      <line x1="30" y1="70" x2="290" y2="70" stroke="#8a93a6" strokeWidth="1.5" />
      {/* accent overlay across the whole valid range */}
      <line x1="30" y1="70" x2="290" y2="70" stroke="#e5492b" strokeWidth="3" />
      {/* tick marks at 0, 1/4, 1/2, 3/4, 1 */}
      {[30, 95, 160, 225, 290].map((x, i) => (
        <line key={i} x1={x} y1="64" x2={x} y2="76" stroke="#0e1b33" strokeWidth="1.5" />
      ))}
      {/* endpoints */}
      <circle cx="30" cy="70" r="5" fill="#e5492b" stroke="#e5492b" strokeWidth="2" />
      <circle cx="290" cy="70" r="5" fill="#e5492b" stroke="#e5492b" strokeWidth="2" />
      <circle cx="160" cy="70" r="5" fill="#fbf9f4" stroke="#e5492b" strokeWidth="2" />
      {/* value labels */}
      <text x="26" y="92" fontSize="12" fill="#0e1b33">0</text>
      <text x="86" y="92" fontSize="12" fill="#0e1b33">1/4</text>
      <text x="151" y="92" fontSize="12" fill="#0e1b33">1/2</text>
      <text x="216" y="92" fontSize="12" fill="#0e1b33">3/4</text>
      <text x="286" y="92" fontSize="12" fill="#0e1b33">1</text>
      {/* word labels */}
      <text x="14" y="40" fontSize="11" fill="#0e1b33">imkânsız</text>
      <text x="130" y="40" fontSize="11" fill="#0e1b33">eşit şans</text>
      <text x="262" y="40" fontSize="11" fill="#0e1b33">kesin</text>
      <text x="14" y="112" fontSize="11" fill="#8a93a6">az olası</text>
      <text x="244" y="112" fontSize="11" fill="#8a93a6">çok olası</text>
    </svg>
  );
}

// (2) Convergence: experimental probability vs number of trials, settling on
// the theoretical value 0.5 (dashed). Axes #8a93a6, theoretical line #8a93a6
// dashed, experimental polyline #e5492b.
// Plot box: x 50..300 (deneme sayısı), y 30..170.
// y maps probability: P=1 -> y=30, P=0 -> y=170 → 140 px for one unit.
// Theoretical 0.5 -> y = 170 - 0.5*140 = 100.
// Experimental sample points (trial -> P), x evenly spaced across 60..295:
//   n small: 0.80, 0.20, 0.65, 0.40, 0.58, 0.46, 0.53, 0.49, 0.51, 0.50
// y = 170 - P*140:
//   0.80->58, 0.20->142, 0.65->79, 0.40->114, 0.58->88.8≈89,
//   0.46->105.6≈106, 0.53->95.8≈96, 0.49->101.4≈101, 0.51->98.6≈99, 0.50->100
// x positions (10 points across 60..295, step 26.1 ≈): 60,86,112,138,164,190,216,242,268,295
export function OlasilikYakinsama() {
  return (
    <svg viewBox="0 0 320 210" role="img" aria-label="Deneme sayısı arttıkça deneysel olasılığın teorik değer olan 0,5'e yakınsaması grafiği">
      {/* axes */}
      <line x1="50" y1="170" x2="305" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="50" y1="25" x2="50" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      {/* y reference ticks 0, 0.5, 1 */}
      <line x1="46" y1="30" x2="50" y2="30" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="46" y1="100" x2="50" y2="100" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="46" y1="170" x2="50" y2="170" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="30" y="34" fontSize="11" fill="#0e1b33">1</text>
      <text x="20" y="104" fontSize="11" fill="#0e1b33">0,5</text>
      <text x="30" y="174" fontSize="11" fill="#0e1b33">0</text>
      {/* theoretical line at 0.5 (dashed) */}
      <line x1="50" y1="100" x2="305" y2="100" stroke="#8a93a6" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="250" y="94" fontSize="10" fill="#8a93a6">teorik 0,5</text>
      {/* experimental polyline converging toward 0.5 */}
      <polyline
        points="60,58 86,142 112,79 138,114 164,89 190,106 216,96 242,101 268,99 295,100"
        fill="none" stroke="#e5492b" strokeWidth="2" />
      {/* a few sample dots */}
      <circle cx="60" cy="58" r="3" fill="#e5492b" />
      <circle cx="86" cy="142" r="3" fill="#e5492b" />
      <circle cx="295" cy="100" r="3" fill="#e5492b" />
      {/* axis labels */}
      <text x="150" y="198" fontSize="11" fill="#0e1b33">deneme sayısı →</text>
      <text x="56" y="22" fontSize="11" fill="#0e1b33">deneysel olasılık</text>
    </svg>
  );
}
