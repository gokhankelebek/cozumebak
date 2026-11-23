import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Limit ve süreklilik: sıçrama, delik, asimptot.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function SicramaFig() {
  return <SoruSekli sekil={DERS_SEKILLERI.SicramaFig} />;
}

export function DelikFig() {
  return <SoruSekli sekil={DERS_SEKILLERI.DelikFig} />;
}

export function AsimptotFig() {
  return <SoruSekli sekil={DERS_SEKILLERI.AsimptotFig} />;
}
