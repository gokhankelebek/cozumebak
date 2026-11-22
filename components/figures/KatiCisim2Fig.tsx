import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Katı cisimler: piramit ve küre.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function Piramit() {
  return <SoruSekli sekil={DERS_SEKILLERI.Piramit} />;
}

export function Kure() {
  return <SoruSekli sekil={DERS_SEKILLERI.Kure} />;
}
