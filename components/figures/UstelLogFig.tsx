import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Üstel ve logaritmik fonksiyon grafikleri.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function UstelGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.UstelGrafik} />;
}

export function UstelAzalan() {
  return <SoruSekli sekil={DERS_SEKILLERI.UstelAzalan} />;
}

export function UstelLogSimetri() {
  return <SoruSekli sekil={DERS_SEKILLERI.UstelLogSimetri} />;
}
