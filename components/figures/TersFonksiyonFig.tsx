import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Ters fonksiyon: y = x doğrusuna göre simetri.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function TersSimetri() {
  return <SoruSekli sekil={DERS_SEKILLERI.TersSimetri} />;
}
