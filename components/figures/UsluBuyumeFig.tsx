import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// 2'nin kuvvetleri sütun grafiği.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function UsluBuyume() {
  return <SoruSekli sekil={DERS_SEKILLERI.UsluBuyume} />;
}
