import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Veri: sütun ve daire grafiği.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function SutunGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.SutunGrafik} />;
}

export function DaireGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireGrafik} />;
}
