import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Sayı doğrusunda aralıklar.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function YariAcikAralik() {
  return <SoruSekli sekil={DERS_SEKILLERI.YariAcikAralik} />;
}

export function AralikKesisim() {
  return <SoruSekli sekil={DERS_SEKILLERI.AralikKesisim} />;
}
