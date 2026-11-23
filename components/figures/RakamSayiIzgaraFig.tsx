import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Rakamlarla iki basamaklı sayılar tablosu.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function RakamSayiArtanIzgara() {
  return <SoruSekli sekil={DERS_SEKILLERI.RakamSayiArtanIzgara} />;
}
