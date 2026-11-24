import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Koşullu olasılık: iki çocuk problemi.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function KsIkiCocuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.KsIkiCocuk} />;
}
