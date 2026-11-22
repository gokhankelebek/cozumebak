import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Çember: merkez ve çevre açı, teğet, daire dilimi.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function MerkezCevreAci() {
  return <SoruSekli sekil={DERS_SEKILLERI.MerkezCevreAci} />;
}

export function Teget() {
  return <SoruSekli sekil={DERS_SEKILLERI.Teget} />;
}

export function DaireDilimi() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireDilimi} />;
}
