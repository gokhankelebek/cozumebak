import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Kombinasyon: 6 noktanın belirlediği doğrular.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function NoktalardanDogrular() {
  return <SoruSekli sekil={DERS_SEKILLERI.NoktalardanDogrular} />;
}
