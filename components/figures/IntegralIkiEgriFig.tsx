import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// İki eğri arasındaki alan.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function IntegralIkiEgri() {
  return <SoruSekli sekil={DERS_SEKILLERI.IntegralIkiEgri} />;
}
