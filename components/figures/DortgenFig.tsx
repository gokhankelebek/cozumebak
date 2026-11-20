import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Dörtgenler: paralelkenar, yamuk, eşkenar dörtgen.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function Paralelkenar() {
  return <SoruSekli sekil={DERS_SEKILLERI.Paralelkenar} />;
}

export function Yamuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.Yamuk} />;
}

export function EskenarDortgen() {
  return <SoruSekli sekil={DERS_SEKILLERI.EskenarDortgen} />;
}
