import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Üçgende yardımcı elemanlar: kenarortay ve açıortay.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function Kenarortay() {
  return <SoruSekli sekil={DERS_SEKILLERI.Kenarortay} />;
}

export function Aciortay() {
  return <SoruSekli sekil={DERS_SEKILLERI.Aciortay} />;
}
