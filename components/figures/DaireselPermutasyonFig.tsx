import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the TYT "Dairesel Permütasyon" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// All coordinates hand-computed (seat positions = centre + r·(cos θ, sin θ),
// SVG y axis pointing down). No external libraries.

const INK = "#0e1b33";
const ACCENT = "#e5492b";
const MUTED = "#8a93a6";

// ---------------------------------------------------------------------------
// DaireselDonme — 3 people, 6 linear orders, 2 circular arrangements.
// Each row shows one circular arrangement in its 3 rotations. Table centres
// x = 60, 150, 240; row centres y = 62 and 167. Seats on radius 32 at
// θ = −90° (top), 30° (lower right), 150° (lower left):
// top (cx, cy−32), lower right (cx+27.7, cy+16), lower left (cx−27.7, cy+16).
// Reading clockwise from the top seat gives the linear label under each table.
// ---------------------------------------------------------------------------
function Masa3({ cx, cy, seats, label }: { cx: number; cy: number; seats: [string, string, string]; label: string }) {
  const pos: [number, number][] = [
    [cx, cy - 32],
    [cx + 27.7, cy + 16],
    [cx - 27.7, cy + 16],
  ];
  return (
    <g>
      <circle cx={cx} cy={cy} r="20" fill="none" stroke={MUTED} strokeWidth="1.4" />
      {pos.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="#fff" stroke={i === 0 ? ACCENT : INK} strokeWidth="1.4" />
          <text x={x} y={y + 4} fontSize="11" fontWeight="700" textAnchor="middle" fill={INK}>
            {seats[i]}
          </text>
        </g>
      ))}
      <text x={cx} y={cy + 46} fontSize="11" textAnchor="middle" fill={MUTED}>
        {label}
      </text>
    </g>
  );
}

export function DaireselDonme() {
  return (
    <svg
      viewBox="0 0 430 225"
      role="img"
      aria-label="Üç kişinin yuvarlak masaya oturuşu: altı doğrusal sıralama, her satırda birbirinin döndürülmüşü olan üç masa olarak gruplanıyor; yalnızca iki farklı dairesel diziliş var"
    >
      <Masa3 cx={60} cy={62} seats={["A", "B", "C"]} label="ABC" />
      <Masa3 cx={150} cy={62} seats={["C", "A", "B"]} label="CAB" />
      <Masa3 cx={240} cy={62} seats={["B", "C", "A"]} label="BCA" />
      <Masa3 cx={60} cy={167} seats={["A", "C", "B"]} label="ACB" />
      <Masa3 cx={150} cy={167} seats={["B", "A", "C"]} label="BAC" />
      <Masa3 cx={240} cy={167} seats={["C", "B", "A"]} label="CBA" />
      {/* row braces */}
      <line x1="290" y1="30" x2="290" y2="110" stroke={ACCENT} strokeWidth="1.6" />
      <line x1="290" y1="135" x2="290" y2="215" stroke={ACCENT} strokeWidth="1.6" />
      <text x="300" y="66" fontSize="12" fontWeight="700" fill={ACCENT}>1. diziliş</text>
      <text x="300" y="82" fontSize="10" fill={MUTED}>(A'nın hemen sağında C)</text>
      <text x="300" y="171" fontSize="12" fontWeight="700" fill={ACCENT}>2. diziliş</text>
      <text x="300" y="187" fontSize="10" fill={MUTED}>(A'nın hemen sağında B)</text>
    </svg>
  );
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function DaireselBosluk() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselBosluk} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function DaireselKomsu() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselKomsu} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function DaireselKolye() {
  return <SoruSekli sekil={DERS_SEKILLERI.DaireselKolye} />;
}
