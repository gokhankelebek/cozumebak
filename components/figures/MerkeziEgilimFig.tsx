import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Merkezi eğilim: medyan nokta grafiği.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function MerkeziEgilim() {
  return <SoruSekli sekil={DERS_SEKILLERI.MerkeziEgilim} />;
}
