import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the 11th-grade Trigonometri unit.
// Colors follow the site convention:
//   axis #8a93a6, accent #e5492b, dark #0e1b33, fill #fbf9f4.
// All coordinates are HAND-COMPUTED and documented inline.

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function RadyanTanim() {
  return <SoruSekli sekil={DERS_SEKILLERI.RadyanTanim} />;
}

// (2) Sinüs grafiği: y = sin x, bir tam periyot 0..2π.
// Eksen merkezi (sol): x ekseni y=110'da, 0 noktası x=40'ta.
// Ölçek: 2π -> 280px, yani π -> 140px. Genlik 1 -> 70px.
// Örnek noktalar (x_pix, y_pix), y_pix = 110 - 70·sin:
//   0:    (40,110)
//   π/2:  (110, 110-70 = 40)        sin=1
//   π:    (180,110)                 sin=0
//   3π/2: (250, 110+70 = 180)       sin=-1
//   2π:   (320,110)                 sin=0
export function SinusGrafik() {
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label="y eşittir sinüs x fonksiyonunun grafiği, sıfırdan iki pi'ye bir tam periyot">
      {/* eksenler */}
      <line x1="20" y1="110" x2="345" y2="110" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="345,110 335,105 335,115" fill="#8a93a6" />
      <polygon points="40,20 35,30 45,30" fill="#8a93a6" />
      <text x="338" y="128" fontSize="13" fill="#8a93a6" textAnchor="middle">x</text>
      <text x="26" y="30" fontSize="13" fill="#8a93a6" textAnchor="middle">y</text>
      {/* y = 1 ve y = -1 kılavuzları */}
      <line x1="40" y1="40" x2="320" y2="40" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="40" y1="180" x2="320" y2="180" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <text x="30" y="44" fontSize="12" fill="#8a93a6" textAnchor="middle">1</text>
      <text x="26" y="184" fontSize="12" fill="#8a93a6" textAnchor="middle">-1</text>
      {/* sinüs eğrisi: kübik Bézier yaklaşımıyla */}
      <path d="M 40 110 C 75 40, 145 40, 180 110 C 215 180, 285 180, 320 110"
            stroke="#e5492b" strokeWidth="2.5" fill="none" />
      {/* x ekseni işaretleri */}
      <text x="110" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">π/2</text>
      <text x="180" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">π</text>
      <text x="250" y="98" fontSize="12" fill="#0e1b33" textAnchor="middle">3π/2</text>
      <text x="320" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">2π</text>
    </svg>
  );
}

// (3) Kosinüs grafiği: y = cos x, bir tam periyot 0..2π.
// Aynı ölçek. y_pix = 110 - 70·cos:
//   0:    (40, 40)     cos=1
//   π/2:  (110,110)    cos=0
//   π:    (180,180)    cos=-1
//   3π/2: (250,110)    cos=0
//   2π:   (320, 40)    cos=1
export function KosinusGrafik() {
  return (
    <svg viewBox="0 0 360 220" role="img" aria-label="y eşittir kosinüs x fonksiyonunun grafiği, sıfırdan iki pi'ye bir tam periyot">
      <line x1="20" y1="110" x2="345" y2="110" stroke="#8a93a6" strokeWidth="1.5" />
      <line x1="40" y1="20" x2="40" y2="200" stroke="#8a93a6" strokeWidth="1.5" />
      <polygon points="345,110 335,105 335,115" fill="#8a93a6" />
      <polygon points="40,20 35,30 45,30" fill="#8a93a6" />
      <text x="338" y="128" fontSize="13" fill="#8a93a6" textAnchor="middle">x</text>
      <text x="26" y="30" fontSize="13" fill="#8a93a6" textAnchor="middle">y</text>
      <line x1="40" y1="40" x2="320" y2="40" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="40" y1="180" x2="320" y2="180" stroke="#8a93a6" strokeWidth="0.8" strokeDasharray="4 4" />
      <text x="30" y="44" fontSize="12" fill="#8a93a6" textAnchor="middle">1</text>
      <text x="26" y="184" fontSize="12" fill="#8a93a6" textAnchor="middle">-1</text>
      {/* kosinüs eğrisi: (40,40) tepe -> (180,180) dip -> (320,40) tepe */}
      <path d="M 40 40 C 75 40, 145 180, 180 180 C 215 180, 285 40, 320 40"
            stroke="#e5492b" strokeWidth="2.5" fill="none" />
      <text x="110" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">π/2</text>
      <text x="180" y="98" fontSize="12" fill="#0e1b33" textAnchor="middle">π</text>
      <text x="250" y="128" fontSize="12" fill="#0e1b33" textAnchor="middle">3π/2</text>
      <text x="320" y="98" fontSize="12" fill="#0e1b33" textAnchor="middle">2π</text>
    </svg>
  );
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function BolgeIsaret() {
  return <SoruSekli sekil={DERS_SEKILLERI.BolgeIsaret} />;
}
