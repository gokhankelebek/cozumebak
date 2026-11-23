import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Mutlak değer fonksiyonu grafikleri.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function TemelV() {
  return <SoruSekli sekil={DERS_SEKILLERI.TemelV} />;
}

export function OtelenmisV() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtelenmisV} />;
}
