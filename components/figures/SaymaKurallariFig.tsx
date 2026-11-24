import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Sayma kuralları: kutu, ağaç, zar tablosu, yol ağı, bayraklar.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function SkKutuDiyagrami() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkKutuDiyagrami} />;
}

export function SkGalibiyetAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkGalibiyetAgaci} />;
}

export function SkZarTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkZarTablosu} />;
}

export function SkYolAgi() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkYolAgi} />;
}

export function SkBayrakListesi() {
  return <SoruSekli sekil={DERS_SEKILLERI.SkBayrakListesi} />;
}
