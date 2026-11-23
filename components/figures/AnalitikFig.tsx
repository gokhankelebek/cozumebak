import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Analitik geometri: iki nokta ve eğim üçgeni.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function IkiNokta() {
  return <SoruSekli sekil={DERS_SEKILLERI.IkiNokta} />;
}

export function Egim() {
  return <SoruSekli sekil={DERS_SEKILLERI.Egim} />;
}
