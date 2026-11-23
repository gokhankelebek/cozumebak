import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Tree diagrams for the "Koşullu Olasılık Soruları" page: three shots, the
// two-stage bag draw and the 1000-person frequency tree.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function KsUcAtisAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.KsUcAtisAgaci} />;
}

export function KsTorbaAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.KsTorbaAgaci} />;
}

export function KsTestAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.KsTestAgaci} />;
}
