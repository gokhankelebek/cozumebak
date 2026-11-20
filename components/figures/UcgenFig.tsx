import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Üçgende açılar: iç açılar, dış açı, ikizkenar üçgen.
// The figures are specs in lib/dersSekilleri.ts, drawn by the quiz figure
// engine so lessons and questions share one style.

export function IcAcilar() {
  return <SoruSekli sekil={DERS_SEKILLERI.IcAcilar} />;
}

export function DisAci() {
  return <SoruSekli sekil={DERS_SEKILLERI.DisAci} />;
}

export function Ikizkenar() {
  return <SoruSekli sekil={DERS_SEKILLERI.Ikizkenar} />;
}
