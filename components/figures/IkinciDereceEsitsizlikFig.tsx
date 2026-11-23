import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// İkinci derece eşitsizlik: işaret tablosu.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function IsaretTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.IsaretTablosu} />;
}
