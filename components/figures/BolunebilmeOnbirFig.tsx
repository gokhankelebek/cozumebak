import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// 11 ile bölünebilme kuralı.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function OnbirKurali() {
  return <SoruSekli sekil={DERS_SEKILLERI.OnbirKurali} />;
}
