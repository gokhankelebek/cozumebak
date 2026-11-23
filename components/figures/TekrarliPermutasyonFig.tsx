import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the TYT "Tekrarlı Permütasyon" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, grid/axis grey #8a93a6.
// All coordinates are hand-computed; no external libraries.

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function TekrarliPermutasyonEtiketSilme() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonEtiketSilme} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function TekrarliPermutasyonBosluk() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonBosluk} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function TekrarliPermutasyonIzgara() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonIzgara} />;
}

// ---------------------------------------------------------------------------
// 4) Kapalı yollu ızgara: 5 birim sağa, 3 birim yukarı.
// Unit 45, origin A=(40,170). Point (i,j) -> (40+45i, 170-45j).
// C=(2,1) -> (130,125). B=(5,3) -> (265,35).
// Closed edge between (3,2) and (4,2): (175,80)-(220,80), cross at (197.5,80).
export function TekrarliPermutasyonKapaliYol() {
  const dikey = [40, 85, 130, 175, 220, 265];
  const yatay = [170, 125, 80, 35];
  return (
    <svg
      viewBox="0 0 310 205"
      role="img"
      aria-label="5 birim genişliğinde ve 3 birim yüksekliğinde sokak ızgarası; A sol altta, B sağ üstte. C noktası A'nın 2 birim sağında ve 1 birim yukarısında. Üstten ikinci yatay sokağın dördüncü birim parçası kapalı, çarpı ile işaretli"
    >
      {dikey.map((x) => (
        <line key={`v${x}`} x1={x} y1="35" x2={x} y2="170" stroke="#8a93a6" strokeWidth="1" />
      ))}
      {yatay.map((y) => (
        <line key={`h${y}`} x1="40" y1={y} x2="265" y2={y} stroke="#8a93a6" strokeWidth="1" />
      ))}
      {/* closed edge */}
      <line x1="175" y1="80" x2="220" y2="80" stroke="#e5492b" strokeWidth="3" strokeDasharray="5 4" />
      <line x1="191.5" y1="74" x2="203.5" y2="86" stroke="#e5492b" strokeWidth="2.2" />
      <line x1="203.5" y1="74" x2="191.5" y2="86" stroke="#e5492b" strokeWidth="2.2" />
      <text x="197.5" y="68" fontSize="10" textAnchor="middle" fill="#e5492b">kapalı</text>

      <circle cx="40" cy="170" r="4" fill="#0e1b33" />
      <circle cx="265" cy="35" r="4" fill="#0e1b33" />
      <circle cx="130" cy="125" r="4" fill="#e5492b" />
      <text x="24" y="188" fontSize="13" fill="#0e1b33" fontWeight="700">A</text>
      <text x="271" y="28" fontSize="13" fill="#0e1b33" fontWeight="700">B</text>
      <text x="136" y="141" fontSize="12" fill="#e5492b" fontWeight="700">C</text>
    </svg>
  );
}
