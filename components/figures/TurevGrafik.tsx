import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Türev: yerel maksimumda yatay teğet.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export default function TurevGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.TurevGrafik} />;
}
