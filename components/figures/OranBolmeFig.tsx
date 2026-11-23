import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Doğru parçasını oranla bölme.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function OrtaNokta() {
  return <SoruSekli sekil={DERS_SEKILLERI.OrtaNokta} />;
}

export function OranlaBolme() {
  return <SoruSekli sekil={DERS_SEKILLERI.OranlaBolme} />;
}
