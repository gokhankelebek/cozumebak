import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Noktaların dönüşümü: x eksenine göre yansıma, 90° dönme.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function YansimaXEkseni() {
  return <SoruSekli sekil={DERS_SEKILLERI.NoktaYansimaX} />;
}

export function Donme90() {
  return <SoruSekli sekil={DERS_SEKILLERI.Donme90} />;
}
