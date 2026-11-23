import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Fonksiyon grafiklerinin dönüşümleri.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DikeyOteleme() {
  return <SoruSekli sekil={DERS_SEKILLERI.DikeyOteleme} />;
}

export function YansimaXEkseni() {
  return <SoruSekli sekil={DERS_SEKILLERI.YansimaXEkseni} />;
}
