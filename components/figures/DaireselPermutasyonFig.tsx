import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Dairesel permütasyon: dönme, boşluk, komşuluk, bilezik.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function DaireselDonme() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselDonme} />;
}

export function DaireselBosluk() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselBosluk} />;
}

export function DaireselKomsu() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselKomsu} />;
}

export function DaireselKolye() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselKolye} />;
}
