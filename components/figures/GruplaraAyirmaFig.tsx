import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Gruplara ayırma ve dağıtma: dört durum, adlı/adsız gruplar, bayrak yerleri, çubuk–yıldız.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function GadDortDurum() {
  return <SoruSekli sekil={DERS_SEKILLERI.GadDortDurum} />;
}

export function GadAdliAdsiz() {
  return <SoruSekli sekil={DERS_SEKILLERI.GadAdliAdsiz} />;
}

export function GadBayrakYerleri() {
  return <SoruSekli sekil={DERS_SEKILLERI.GadBayrakYerleri} />;
}

export function GadCubukYildiz() {
  return <SoruSekli sekil={DERS_SEKILLERI.GadCubukYildiz} />;
}
