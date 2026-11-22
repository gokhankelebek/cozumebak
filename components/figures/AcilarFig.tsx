import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Açılar ve doğrular: tümler/bütünler, ters açılar, paralel iki doğru ve kesen.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function TumlerButunler() {
  return <SoruSekli sekil={DERS_SEKILLERI.TumlerButunler} />;
}

export function TersAcilar() {
  return <SoruSekli sekil={DERS_SEKILLERI.TersAcilar} />;
}

export function ParalelKesen() {
  return <SoruSekli sekil={DERS_SEKILLERI.ParalelKesen} />;
}
