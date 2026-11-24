import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the "Olasılıkta Temel Kavramlar" (olasilik-temel-kavramlar) page.
// All exports carry the page-unique prefix "Otk".
// Conventions: dark #0e1b33, accent #e5492b, axis/grey #8a93a6, light fill #fbf9f4.
// Coordinates hand-computed (see the comment above each figure).

// (1) Ağaç şeması: üç madenî para art arda atılıyor → 2·2·2 = 8 çıktı.
// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function OtkParaAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkParaAgaci} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function OtkVennBolgeleri() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkVennBolgeleri} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function OtkZarTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkZarTablosu} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function OtkHileliZarCubuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkHileliZarCubuk} />;
}
