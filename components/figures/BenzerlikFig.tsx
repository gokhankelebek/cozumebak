import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Üçgende benzerlik ve alan: benzer üçgenler, Tales, taban-yükseklik.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function BenzerUcgenler() {
  return <SoruSekli sekil={DERS_SEKILLERI.BenzerUcgenler} />;
}

export function Thales() {
  return <SoruSekli sekil={DERS_SEKILLERI.Thales} />;
}

export function AlanTabanYukseklik() {
  return <SoruSekli sekil={DERS_SEKILLERI.AlanTabanYukseklik} />;
}
