import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Pascal üçgeni.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function BinomPascal() {
  return <SoruSekli sekil={DERS_SEKILLERI.BinomPascal} />;
}
