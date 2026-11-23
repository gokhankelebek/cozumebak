import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Koşullu olasılık soruları: cinsiyet–sporcu tablosu.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function KsSporTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.KsSporTablosu} />;
}
