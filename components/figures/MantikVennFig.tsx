import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Mantık: ve / veya bağlaçlarının Venn şemaları.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function VeVenn() {
  return <SoruSekli sekil={DERS_SEKILLERI.VeVenn} />;
}

export function VeyaVenn() {
  return <SoruSekli sekil={DERS_SEKILLERI.VeyaVenn} />;
}
