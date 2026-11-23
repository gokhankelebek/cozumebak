import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Kök 2'nin sayı doğrusunda inşası.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function KokSayiDogrusu() {
  return <SoruSekli sekil={DERS_SEKILLERI.KokSayiDogrusu} />;
}
