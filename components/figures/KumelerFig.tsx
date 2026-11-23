import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Kümeler: birleşim, kesişim, fark (Venn).
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function Birlesim() {
  return <SoruSekli sekil={DERS_SEKILLERI.Birlesim} />;
}

export function Kesisim() {
  return <SoruSekli sekil={DERS_SEKILLERI.Kesisim} />;
}

export function Fark() {
  return <SoruSekli sekil={DERS_SEKILLERI.Fark} />;
}
