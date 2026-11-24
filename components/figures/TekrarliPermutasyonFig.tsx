import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Tekrarlı permütasyon: etiket silme, boşluk, ızgaralar.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function TekrarliPermutasyonEtiketSilme() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonEtiketSilme} />;
}

export function TekrarliPermutasyonBosluk() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonBosluk} />;
}

export function TekrarliPermutasyonIzgara() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonIzgara} />;
}

export function TekrarliPermutasyonKapaliYol() {
  return <SoruSekli sekil={DERS_SEKILLERI.TekrarliPermutasyonKapaliYol} />;
}
