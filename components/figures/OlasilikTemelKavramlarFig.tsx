import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Olasılıkta temel kavramlar: ağaç, Venn, zar tablosu, hileli zar.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function OtkParaAgaci() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkParaAgaci} />;
}

export function OtkVennBolgeleri() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkVennBolgeleri} />;
}

export function OtkZarTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkZarTablosu} />;
}

export function OtkHileliZarCubuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkHileliZarCubuk} />;
}
