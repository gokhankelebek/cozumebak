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

// (2) Venn şeması: örnek uzay S içinde A ve B olayları, dört bölge.
// S: rect (10,20)–(330,200). A: center (130,110) r=70; B: center (210,110) r=70.
// Centers 80 apart → circles meet at x=170, y = 110 ± √(70²−40²) = 110 ± 57.45.
// Lens (A∩B): from (170,52.55) along A's right arc to (170,167.45), back along
// B's left arc; both arcs are small (large-arc 0) and clockwise (sweep 1).
export function OtkVennBolgeleri() {
  return (
    <svg viewBox="0 0 340 210" role="img" aria-label="Venn şeması: örnek uzay S içinde kesişen A ve B olayları; bölgeler yalnız A, A kesişim B, yalnız B ve ikisinin de dışında kalan hiçbiri bölgesi">
      <rect x="10" y="20" width="320" height="180" fill="#fbf9f4" stroke="#8a93a6" strokeWidth="1.5" />
      <text x="20" y="40" fontSize="13" fontWeight="700" fill="#8a93a6">S</text>

      {/* intersection lens */}
      <path d="M170,52.55 A70,70 0 0,1 170,167.45 A70,70 0 0,1 170,52.55 Z" fill="#e5492b" fillOpacity="0.15" />

      <circle cx="130" cy="110" r="70" fill="none" stroke="#0e1b33" strokeWidth="1.8" />
      <circle cx="210" cy="110" r="70" fill="none" stroke="#e5492b" strokeWidth="1.8" />

      <text x="60" y="48" fontSize="14" fontWeight="700" fill="#0e1b33">A</text>
      <text x="272" y="48" fontSize="14" fontWeight="700" fill="#e5492b">B</text>

      <text x="74" y="114" fontSize="12" fill="#0e1b33">yalnız A</text>
      <text x="152" y="114" fontSize="12" fill="#0e1b33">A ∩ B</text>
      <text x="220" y="114" fontSize="12" fill="#0e1b33">yalnız B</text>
      <text x="196" y="193" fontSize="11" fill="#8a93a6">hiçbiri: (A ∪ B)′</text>
    </svg>
  );
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function OtkZarTablosu() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkZarTablosu} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function OtkHileliZarCubuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.OtkHileliZarCubuk} />;
}
