import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Olasılık skalası ve deneysel olasılığın yakınsaması.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function OlasilikSkalasi() {
  return <SoruSekli sekil={DERS_SEKILLERI.OlasilikSkalasi} />;
}

export function OlasilikYakinsama() {
  return <SoruSekli sekil={DERS_SEKILLERI.OlasilikYakinsama} />;
}
