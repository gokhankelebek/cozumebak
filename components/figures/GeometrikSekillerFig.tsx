import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Üçgende dış açılar toplamı ve üçgen eşitsizliği.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DisAcilarToplam() {
  return <SoruSekli sekil={DERS_SEKILLERI.DisAcilarToplam} />;
}

export function UcgenEsitsizligi() {
  return <SoruSekli sekil={DERS_SEKILLERI.UcgenEsitsizligi} />;
}
