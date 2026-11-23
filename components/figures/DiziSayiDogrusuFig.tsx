import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Aritmetik dizi sayı doğrusunda.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DiziSayiDogrusu() {
  return <SoruSekli sekil={DERS_SEKILLERI.DiziSayiDogrusu} />;
}
