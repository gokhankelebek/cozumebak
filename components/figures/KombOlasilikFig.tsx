import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Kombinasyonla olasılık: etiketli toplar, sıralı tablo, ızgara yolu, en büyük zar.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function KombOlasilikEtiket() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikEtiket} />;
}

export function KombOlasilikSiraliTablo() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikSiraliTablo} />;
}

export function KombOlasilikIzgaraYol() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikIzgaraYol} />;
}

export function KombOlasilikZarEnBuyuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikZarEnBuyuk} />;
}
