import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the TYT "Kombinasyonla Olasılık" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// All coordinates hand-computed (SVG y axis pointing down). No external libraries.

const INK = "#0e1b33";
const ACCENT = "#e5492b";
const MUTED = "#8a93a6";

// ---------------------------------------------------------------------------
// KombOlasilikEtiket — 2 balls into 2 boxes, each ball independently.
// Balls are labelled T1, T2 so the 4 equally likely outcomes are visible.
// Panels centred at x = 60, 180, 300, 420. In each panel box 1 spans
// x = cx−45 … cx−5 and box 2 spans x = cx+5 … cx+45, both y = 40 … 90.
// Ball slots: upper (y = 54) and lower (y = 77), horizontally centred in the box.
// Brackets at y = 118 group the panels into the 3 "unlabelled" outcomes.
// ---------------------------------------------------------------------------
type Yer = [number, number]; // [box index for T1, box index for T2]

function EtiketPanel({ cx, yer }: { cx: number; yer: Yer }) {
  const boxX = [cx - 45, cx + 5];
  const used = [0, 0];
  const balls = (["T1", "T2"] as const).map((ad, i) => {
    const kutu = yer[i];
    const slot = used[kutu]++;
    return { ad, x: boxX[kutu] + 20, y: slot === 0 ? 54 : 77 };
  });
  return (
    <g>
      {boxX.map((x, k) => (
        <g key={k}>
          <rect x={x} y="40" width="40" height="50" fill="none" stroke={INK} strokeWidth="1.4" />
          <text x={x + 20} y="104" fontSize="10" textAnchor="middle" fill={MUTED}>
            {k === 0 ? "Kutu 1" : "Kutu 2"}
          </text>
        </g>
      ))}
      {balls.map((b) => (
        <g key={b.ad}>
          <circle cx={b.x} cy={b.y} r="10" fill="#fff" stroke={ACCENT} strokeWidth="1.5" />
          <text x={b.x} y={b.y + 4} fontSize="9.5" fontWeight="700" textAnchor="middle" fill={INK}>
            {b.ad}
          </text>
        </g>
      ))}
    </g>
  );
}

export function KombOlasilikEtiket() {
  return (
    <svg
      viewBox="0 0 480 200"
      role="img"
      aria-label="İki top iki kutuya atılıyor. Toplar etiketlenince dört eş olasılıklı sonuç çıkıyor: ikisi birinci kutuda, T1 birinci T2 ikinci kutuda, T2 birinci T1 ikinci kutuda, ikisi ikinci kutuda. Etiketler silinince üç sonuç görünüyor; bunların olasılıkları dörtte bir, dörtte iki ve dörtte bir."
    >
      <text x="240" y="22" fontSize="12" textAnchor="middle" fill={INK} fontWeight="700">
        Etiketli 4 sonuç, her biri 1/4
      </text>
      <EtiketPanel cx={60} yer={[0, 0]} />
      <EtiketPanel cx={180} yer={[0, 1]} />
      <EtiketPanel cx={300} yer={[1, 0]} />
      <EtiketPanel cx={420} yer={[1, 1]} />

      {/* brackets */}
      <path d="M20 116 V122 H100 V116" fill="none" stroke={MUTED} strokeWidth="1.3" />
      <path d="M140 116 V122 H340 V116" fill="none" stroke={MUTED} strokeWidth="1.3" />
      <path d="M380 116 V122 H460 V116" fill="none" stroke={MUTED} strokeWidth="1.3" />

      <text x="60" y="146" fontSize="12" textAnchor="middle" fill={ACCENT} fontWeight="700">(2, 0): 1/4</text>
      <text x="240" y="146" fontSize="12" textAnchor="middle" fill={ACCENT} fontWeight="700">(1, 1): 2/4</text>
      <text x="420" y="146" fontSize="12" textAnchor="middle" fill={ACCENT} fontWeight="700">(0, 2): 1/4</text>

      <text x="240" y="182" fontSize="11" textAnchor="middle" fill={MUTED}>
        Etiketler silinince 3 sonuç görünür, ama bu 3 sonuç eş olasılıklı değildir.
      </text>
    </svg>
  );
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function KombOlasilikSiraliTablo() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikSiraliTablo} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function KombOlasilikIzgaraYol() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikIzgaraYol} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function KombOlasilikZarEnBuyuk() {
  return <SoruSekli sekil={DERS_SEKILLERI.KombOlasilikZarEnBuyuk} />;
}
