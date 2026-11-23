import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Doğrusal fonksiyon grafiği ve grafikten değer okuma.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DogruGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.DogruGrafik} />;
}

export function GrafikOkuma() {
  return <SoruSekli sekil={DERS_SEKILLERI.GrafikOkuma} />;
}
