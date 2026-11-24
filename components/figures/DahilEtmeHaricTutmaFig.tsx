import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Dahil etme–hariç tutma: Venn, düzensiz liste, yuvarlak masa, güvercin yuvası.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DehtIkiVenn() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtIkiVenn} />;
}

export function DehtUcVennSayim() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtUcVennSayim} />;
}

export function DehtDuzensizListe() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtDuzensizListe} />;
}

export function DehtYuvarlakMasa() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtYuvarlakMasa} />;
}

export function DehtGuvercinTorba() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtGuvercinTorba} />;
}
