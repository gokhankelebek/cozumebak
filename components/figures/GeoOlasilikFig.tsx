import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Geometrik olasılık.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function GeoOlDogruParcasi() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlDogruParcasi} />;
}

export function GeoOlKareDaire() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlKareDaire} />;
}

export function GeoOlBolgeler() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlBolgeler} />;
}

export function GeoOlBenzerUcgen() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlBenzerUcgen} />;
}

export function GeoOlCark() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlCark} />;
}

export function GeoOlBoyaliKup() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlBoyaliKup} />;
}

export function GeoOlPrizma() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlPrizma} />;
}

export function GeoOlKareBolge() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlKareBolge} />;
}

export function GeoOlBulusma() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoOlBulusma} />;
}
