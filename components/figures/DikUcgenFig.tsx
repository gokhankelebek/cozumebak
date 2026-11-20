import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Dik üçgen: Pisagor, 30-60-90 ve 45-45-90 üçgenleri.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function Pisagor() {
  return <SoruSekli sekil={DERS_SEKILLERI.Pisagor} />;
}

export function Ucgen304560() {
  return <SoruSekli sekil={DERS_SEKILLERI.Ucgen304560} />;
}

export function Ucgen454590() {
  return <SoruSekli sekil={DERS_SEKILLERI.Ucgen454590} />;
}
