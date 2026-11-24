import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Algoritma: geçti-kaldı ve döngü akış şemaları.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function GectiKaldiAkis() {
  return <SoruSekli sekil={DERS_SEKILLERI.GectiKaldiAkis} />;
}

export function DonguAkis() {
  return <SoruSekli sekil={DERS_SEKILLERI.DonguAkis} />;
}
