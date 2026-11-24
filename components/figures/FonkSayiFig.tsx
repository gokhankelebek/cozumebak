import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Fonksiyon sayısı: seçimler, örten fonksiyon, çift sayım.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function FonkSayiSecim() {
  return <SoruSekli sekil={DERS_SEKILLERI.FonkSayiSecim} />;
}

export function FonkSayiOrtenGrup() {
  return <SoruSekli sekil={DERS_SEKILLERI.FonkSayiOrtenGrup} />;
}

export function FonkSayiCiftSayim() {
  return <SoruSekli sekil={DERS_SEKILLERI.FonkSayiCiftSayim} />;
}
