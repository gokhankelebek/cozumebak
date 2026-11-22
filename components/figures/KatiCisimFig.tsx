import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Katı cisimler: prizma, silindir, koni.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function Prizma() {
  return <SoruSekli sekil={DERS_SEKILLERI.Prizma} />;
}

export function Silindir() {
  return <SoruSekli sekil={DERS_SEKILLERI.Silindir} />;
}

export function Koni() {
  return <SoruSekli sekil={DERS_SEKILLERI.Koni} />;
}
