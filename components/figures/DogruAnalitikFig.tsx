import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Doğrunun eğimi: eğim üçgeni.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DogruEgim() {
  return <SoruSekli sekil={DERS_SEKILLERI.DogruEgim} />;
}
