import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// 360'ın çarpan ağacı.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function CarpanAgaci360() {
  return <SoruSekli sekil={DERS_SEKILLERI.CarpanAgaci360} />;
}
