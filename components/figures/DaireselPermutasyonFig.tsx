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

// ---------------------------------------------------------------------------
// DaireselBosluk — gaps on a circle vs gaps in a row.
// Circle: centre (110,110), r = 70. Five seated people at θ = −90° + 72°k:
// (110,40) (176.6,88.4) (151.1,166.6) (68.9,166.6) (43.4,88.4).
// Five gaps at θ = −54° + 72°k: (151.1,53.4) (176.6,131.6) (110,180)
// (43.4,131.6) (68.9,53.4).
// Row: people at x = 255..375 step 30 (y = 110), gaps at x = 240..390 step 30.
// ---------------------------------------------------------------------------
export function DaireselBosluk() {
  const people: [number, number][] = [
    [110, 40],
    [176.6, 88.4],
    [151.1, 166.6],
    [68.9, 166.6],
    [43.4, 88.4],
  ];
  const gaps: [number, number][] = [
    [151.1, 53.4],
    [176.6, 131.6],
    [110, 180],
    [43.4, 131.6],
    [68.9, 53.4],
  ];
  const rowPeople = [255, 285, 315, 345, 375];
  const rowGaps = [240, 270, 300, 330, 360, 390];
  return (
    <svg
      viewBox="0 0 410 230"
      role="img"
      aria-label="Boşluk sayısı: yuvarlak masada oturan beş kişinin arasında beş boşluk, düz bir sırada oturan beş kişinin arasında ve uçlarında altı boşluk vardır"
    >
      <circle cx="110" cy="110" r="70" fill="none" stroke={MUTED} strokeWidth="1.4" />
      {people.map(([x, y], i) => (
        <circle key={`p${i}`} cx={x} cy={y} r="9" fill={INK} />
      ))}
      {gaps.map(([x, y], i) => (
        <g key={`g${i}`}>
          <rect x={x - 6} y={y - 6} width="12" height="12" fill="#fff" stroke={ACCENT} strokeWidth="1.6" />
          <text x={x} y={y + 4} fontSize="9" fontWeight="700" textAnchor="middle" fill={ACCENT}>
            {i + 1}
          </text>
        </g>
      ))}
      <text x="110" y="214" fontSize="12" textAnchor="middle" fill={INK}>
        Dairede 5 kişi → <tspan fill={ACCENT} fontWeight="700">5 boşluk</tspan>
      </text>

      <line x1="232" y1="110" x2="398" y2="110" stroke={MUTED} strokeWidth="1.2" />
      {rowPeople.map((x, i) => (
        <circle key={`rp${i}`} cx={x} cy="110" r="9" fill={INK} />
      ))}
      {rowGaps.map((x, i) => (
        <g key={`rg${i}`}>
          <rect x={x - 6} y="129" width="12" height="12" fill="#fff" stroke={ACCENT} strokeWidth="1.6" />
          <text x={x} y="138" fontSize="9" fontWeight="700" textAnchor="middle" fill={ACCENT}>
            {i + 1}
          </text>
        </g>
      ))}
      <text x="315" y="214" fontSize="12" textAnchor="middle" fill={INK}>
        Sırada 5 kişi → <tspan fill={ACCENT} fontWeight="700">6 boşluk</tspan>
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// DaireselKomsu — 8-seat round table seen from above, B at the bottom seat
// facing the centre, so B's right hand points to the right of the picture.
// Centre (110,115), r = 75, seats at θ = 90° + 45°k:
// (110,190) B, (57,168) left neighbour, (35,115), (57,62), (110,40) opposite,
// (163,62), (185,115), (163,168) right neighbour.
// ---------------------------------------------------------------------------
export function DaireselKomsu() {
  const seats: [number, number][] = [
    [110, 190],
    [57, 168],
    [35, 115],
    [57, 62],
    [110, 40],
    [163, 62],
    [185, 115],
    [163, 168],
  ];
  return (
    <svg
      viewBox="0 0 400 230"
      role="img"
      aria-label="Sekiz sandalyeli yuvarlak masa: B en altta, yüzü masaya dönük. B'nin hemen sağında bir sandalye, hemen solunda bir sandalye, tam karşısında bir sandalye vardır; yan yana olmak iki sandalyeden birini, hemen sağında olmak tek bir sandalyeyi gösterir"
    >
      <circle cx="110" cy="115" r="58" fill="none" stroke={MUTED} strokeWidth="1.4" />
      {seats.map(([x, y], i) => {
        const isB = i === 0;
        const isRight = i === 7;
        const isLeft = i === 1;
        const isOpp = i === 4;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="11"
            fill={isB ? INK : isRight ? ACCENT : "#fff"}
            stroke={isB ? INK : isRight || isLeft || isOpp ? ACCENT : MUTED}
            strokeWidth="1.6"
            strokeDasharray={isOpp ? "3 2" : undefined}
          />
        );
      })}
      <text x="110" y="194" fontSize="11" fontWeight="700" textAnchor="middle" fill="#fff">B</text>
      {/* B faces the centre */}
      <line x1="110" y1="174" x2="110" y2="150" stroke={INK} strokeWidth="1.4" />
      <polygon points="110,144 106,152 114,152" fill={INK} />
      <text x="163" y="203" fontSize="10" textAnchor="middle" fill={ACCENT}>hemen sağı</text>
      <text x="57" y="203" fontSize="10" textAnchor="middle" fill={ACCENT}>hemen solu</text>
      <text x="110" y="22" fontSize="10" textAnchor="middle" fill={ACCENT}>tam karşısı</text>

      <text x="225" y="80" fontSize="12" fill={INK}>A, B ile yan yana:</text>
      <text x="225" y="96" fontSize="12" fontWeight="700" fill={ACCENT}>2 sandalye</text>
      <text x="225" y="124" fontSize="12" fill={INK}>A, B'nin hemen sağında:</text>
      <text x="225" y="140" fontSize="12" fontWeight="700" fill={ACCENT}>1 sandalye</text>
      <text x="225" y="168" fontSize="12" fill={INK}>A, B'nin tam karşısında:</text>
      <text x="225" y="184" fontSize="12" fontWeight="700" fill={ACCENT}>1 sandalye</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// DaireselKolye — a bracelet and its flip are the same object.
// Left bracelet centre (90,100), r = 50, beads clockwise from the top:
// A (90,50), B (140,100), C (90,150), D (40,100). Right bracelet centre
// (290,100): A (290,50), D (340,100), C (290,150), B (240,100).
// Dashed flip axis through A and C on the left bracelet.
// ---------------------------------------------------------------------------
function Bilezik({ cx, labels }: { cx: number; labels: [string, string, string, string] }) {
  const pos: [number, number][] = [
    [cx, 50],
    [cx + 50, 100],
    [cx, 150],
    [cx - 50, 100],
  ];
  return (
    <g>
      <circle cx={cx} cy="100" r="50" fill="none" stroke={MUTED} strokeWidth="2" />
      {pos.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="12" fill="#fff" stroke={i === 0 ? ACCENT : INK} strokeWidth="1.6" />
          <text x={x} y={y + 4} fontSize="12" fontWeight="700" textAnchor="middle" fill={INK}>
            {labels[i]}
          </text>
        </g>
      ))}
    </g>
  );
}

export function DaireselKolye() {
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="Bilezik ters çevrilince saat yönündeki ABCD dizilişi ADCB dizilişine dönüşür; masada bunlar iki farklı diziliştir, bilezikte aynı nesnedir"
    >
      <Bilezik cx={90} labels={["A", "B", "C", "D"]} />
      <line x1="90" y1="30" x2="90" y2="170" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="4 3" />
      <Bilezik cx={290} labels={["A", "D", "C", "B"]} />
      {/* flip arrow */}
      <path d="M 160 85 Q 190 60 220 85" fill="none" stroke={ACCENT} strokeWidth="1.6" />
      <polygon points="222,88 213,86 219,79" fill={ACCENT} />
      <text x="190" y="58" fontSize="11" textAnchor="middle" fill={ACCENT}>ters çevir</text>
      <text x="190" y="120" fontSize="20" fontWeight="700" textAnchor="middle" fill={INK}>=</text>
      <text x="90" y="192" fontSize="11" textAnchor="middle" fill={MUTED}>saat yönünde ABCD</text>
      <text x="290" y="192" fontSize="11" textAnchor="middle" fill={MUTED}>saat yönünde ADCB</text>
    </svg>
  );
}
