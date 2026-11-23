import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Permütasyon: ağaç, kutu, blok, boşluk ve arasında yöntemleri.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function PermSiralamaAgac() {
  return <SoruSekli sekil={DERS_SEKILLERI.PermSiralamaAgac} />;
}

export function PermSiralamaKutu() {
  return <SoruSekli sekil={DERS_SEKILLERI.PermSiralamaKutu} />;
}

export function PermSiralamaBlok() {
  return <SoruSekli sekil={DERS_SEKILLERI.PermSiralamaBlok} />;
}

export function PermSiralamaBosluk() {
  return <SoruSekli sekil={DERS_SEKILLERI.PermSiralamaBosluk} />;
}

export function PermSiralamaArasinda() {
  return <SoruSekli sekil={DERS_SEKILLERI.PermSiralamaArasinda} />;
}
