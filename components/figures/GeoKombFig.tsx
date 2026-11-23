import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Geometrik kombinasyon.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function GeoKombDogrusal() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombDogrusal} />;
}

export function GeoKombParalel() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombParalel} />;
}

export function GeoKombKosegen() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombKosegen} />;
}

export function GeoKombBolge() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombBolge} />;
}

export function GeoKombIzgara() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombIzgara} />;
}

export function GeoKombKiris() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombKiris} />;
}

export function GeoKombAltigen() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombAltigen} />;
}

export function GeoKombKup() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombKup} />;
}

export function GeoKombBoyaliKup() {
  return <SoruSekli sekil={DERS_SEKILLERI.GeoKombBoyaliKup} />;
}
