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

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function TekrarliPermutasyonKapaliYol() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonKapaliYol} />;
}
