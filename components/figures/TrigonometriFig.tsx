import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Trigonometri: radyan, sinüs ve kosinüs grafikleri, bölgelerde işaret.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function RadyanTanim() {
  return <SoruSekli sekil={DERS_SEKILLERI.RadyanTanim} />;
}

export function SinusGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.SinusGrafik} />;
}

export function KosinusGrafik() {
  return <SoruSekli sekil={DERS_SEKILLERI.KosinusGrafik} />;
}

export function BolgeIsaret() {
  return <SoruSekli sekil={DERS_SEKILLERI.BolgeIsaret} />;
}
