// Figures for the TYT "Tekrarlı Permütasyon" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, grid/axis grey #8a93a6.
// All coordinates are hand-computed; no external libraries.

// ---------------------------------------------------------------------------
// 1) Etiketleri silmek: two labelled strips collapse to one unlabelled strip.
// Box size 28, gap 4 -> box x-positions 20, 52, 84, 116 (left block)
// and 222, 254, 286, 318 (result block). Rows: 18 & 58 (group 1, result at 38),
// 100 & 140 (group 2, result at 120). Arrows converge at x=205.
const SOL_X = [20, 52, 84, 116];
const SAG_X = [222, 254, 286, 318];

function Serit({ xs, y, harfler, vurgu }: { xs: number[]; y: number; harfler: string[]; vurgu: boolean }) {
  return (
    <g>
      {harfler.map((h, i) => (
        <g key={i}>
          <rect
            x={xs[i]}
            y={y}
            width="28"
            height="28"
            rx="3"
            fill="none"
            stroke={vurgu ? "#e5492b" : "#0e1b33"}
            strokeWidth={vurgu ? 1.8 : 1.2}
          />
          <text
            x={xs[i] + 14}
            y={y + 19}
            fontSize="13"
            textAnchor="middle"
            fill={h.startsWith("A") ? "#e5492b" : "#0e1b33"}
            fontWeight="700"
          >
            {h}
          </text>
        </g>
      ))}
    </g>
  );
}

export function TekrarliPermutasyonEtiketSilme() {
  return (
    <svg
      viewBox="0 0 370 180"
      role="img"
      aria-label="Etiketleri silmek: A1 A2 B C ile A2 A1 B C dizilişleri, etiketler silinince aynı A A B C dizilişine dönüşür; B A1 C A2 ile B A2 C A1 de aynı B A C A dizilişine dönüşür"
    >
      {/* group 1 */}
      <Serit xs={SOL_X} y={18} harfler={["A₁", "A₂", "B", "C"]} vurgu={false} />
      <Serit xs={SOL_X} y={58} harfler={["A₂", "A₁", "B", "C"]} vurgu={false} />
      <line x1="150" y1="32" x2="203" y2="52" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="150" y1="72" x2="203" y2="52" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="214,52 203,47 203,57" fill="#8a93a6" />
      <Serit xs={SAG_X} y={38} harfler={["A", "A", "B", "C"]} vurgu={true} />

      {/* group 2 */}
      <Serit xs={SOL_X} y={100} harfler={["B", "A₁", "C", "A₂"]} vurgu={false} />
      <Serit xs={SOL_X} y={140} harfler={["B", "A₂", "C", "A₁"]} vurgu={false} />
      <line x1="150" y1="114" x2="203" y2="134" stroke="#8a93a6" strokeWidth="1.4" />
      <line x1="150" y1="154" x2="203" y2="134" stroke="#8a93a6" strokeWidth="1.4" />
      <polygon points="214,134 203,129 203,139" fill="#8a93a6" />
      <Serit xs={SAG_X} y={120} harfler={["B", "A", "C", "A"]} vurgu={true} />

      <text x="160" y="96" fontSize="10" fill="#8a93a6">2 etiketli diziliş → 1 diziliş</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 2) Boşluk yöntemi (KAPAK): K P K is placed, leaving 4 gaps; the two identical
// A's go into 2 different gaps. Gaps (dashed boxes) at x = 20, 100, 180, 260;
// letters at x = 60, 140, 220 (box width 28, centre +14). Row y = 40.
const BOSLUK_X = [20, 100, 180, 260];
const HARF_X = [60, 140, 220];

export function TekrarliPermutasyonBosluk() {
  const harfler = ["K", "P", "K"];
  const dolu = [true, false, true, false]; // A's in gap 1 and gap 3
  return (
    <svg
      viewBox="0 0 310 110"
      role="img"
      aria-label="Boşluk yöntemi: K P K harfleri dizilmiş, aralarında ve uçlarda 4 boşluk var; iki özdeş A harfi bu boşluklardan farklı ikisine yerleştiriliyor, böylece A'lar yan yana gelmiyor"
    >
      {BOSLUK_X.map((x, i) => (
        <g key={`b${i}`}>
          <rect
            x={x}
            y="40"
            width="28"
            height="28"
            rx="3"
            fill="none"
            stroke={dolu[i] ? "#e5492b" : "#8a93a6"}
            strokeWidth={dolu[i] ? 1.8 : 1.2}
            strokeDasharray={dolu[i] ? undefined : "4 3"}
          />
          {dolu[i] && (
            <text x={x + 14} y="59" fontSize="13" textAnchor="middle" fill="#e5492b" fontWeight="700">
              A
            </text>
          )}
          <text x={x + 14} y="30" fontSize="10" textAnchor="middle" fill="#8a93a6">
            {i + 1}. boşluk
          </text>
        </g>
      ))}
      {HARF_X.map((x, i) => (
        <g key={`h${i}`}>
          <rect x={x} y="40" width="28" height="28" rx="3" fill="none" stroke="#0e1b33" strokeWidth="1.2" />
          <text x={x + 14} y="59" fontSize="13" textAnchor="middle" fill="#0e1b33" fontWeight="700">
            {harfler[i]}
          </text>
        </g>
      ))}
      <text x="155" y="96" fontSize="11" textAnchor="middle" fill="#0e1b33">
        Bu yerleşimin sonucu: A K P A K
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 3) Izgarada en kısa yol: 4 birim sağa, 3 birim yukarı.
// Unit 45, origin A=(40,170). Point (i,j) -> (40+45i, 170-45j).
// Red path S S Y S Y Y S: (0,0)(1,0)(2,0)(2,1)(3,1)(3,2)(3,3)(4,3).
// C=(1,2) -> (85,80). B=(4,3) -> (220,35).
export function TekrarliPermutasyonIzgara() {
  const dikey = [40, 85, 130, 175, 220];
  const yatay = [170, 125, 80, 35];
  return (
    <svg
      viewBox="0 0 270 210"
      role="img"
      aria-label="4 birim genişliğinde ve 3 birim yüksekliğinde sokak ızgarası; A sol altta, B sağ üstte. Kırmızı yol sağ, sağ, yukarı, sağ, yukarı, yukarı, sağ adımlarından oluşuyor. C noktası A'nın 1 birim sağında ve 2 birim yukarısında"
    >
      {dikey.map((x) => (
        <line key={`v${x}`} x1={x} y1="35" x2={x} y2="170" stroke="#8a93a6" strokeWidth="1" />
      ))}
      {yatay.map((y) => (
        <line key={`h${y}`} x1="40" y1={y} x2="220" y2={y} stroke="#8a93a6" strokeWidth="1" />
      ))}
      <polyline
        points="40,170 85,170 130,170 130,125 175,125 175,80 175,35 220,35"
        fill="none"
        stroke="#e5492b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="170" r="4" fill="#0e1b33" />
      <circle cx="220" cy="35" r="4" fill="#0e1b33" />
      <circle cx="85" cy="80" r="3.5" fill="#0e1b33" />
      <text x="24" y="188" fontSize="13" fill="#0e1b33" fontWeight="700">A</text>
      <text x="226" y="28" fontSize="13" fill="#0e1b33" fontWeight="700">B</text>
      <text x="70" y="74" fontSize="12" fill="#0e1b33" fontWeight="700">C</text>
      <text x="130" y="202" fontSize="12" textAnchor="middle" fill="#e5492b" fontWeight="700">
        S S Y S Y Y S
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// 4) Kapalı yollu ızgara: 5 birim sağa, 3 birim yukarı.
// Unit 45, origin A=(40,170). Point (i,j) -> (40+45i, 170-45j).
// C=(2,1) -> (130,125). B=(5,3) -> (265,35).
// Closed edge between (3,2) and (4,2): (175,80)-(220,80), cross at (197.5,80).
export function TekrarliPermutasyonKapaliYol() {
  const dikey = [40, 85, 130, 175, 220, 265];
  const yatay = [170, 125, 80, 35];
  return (
    <svg
      viewBox="0 0 310 205"
      role="img"
      aria-label="5 birim genişliğinde ve 3 birim yüksekliğinde sokak ızgarası; A sol altta, B sağ üstte. C noktası A'nın 2 birim sağında ve 1 birim yukarısında. Üstten ikinci yatay sokağın dördüncü birim parçası kapalı, çarpı ile işaretli"
    >
      {dikey.map((x) => (
        <line key={`v${x}`} x1={x} y1="35" x2={x} y2="170" stroke="#8a93a6" strokeWidth="1" />
      ))}
      {yatay.map((y) => (
        <line key={`h${y}`} x1="40" y1={y} x2="265" y2={y} stroke="#8a93a6" strokeWidth="1" />
      ))}
      {/* closed edge */}
      <line x1="175" y1="80" x2="220" y2="80" stroke="#e5492b" strokeWidth="3" strokeDasharray="5 4" />
      <line x1="191.5" y1="74" x2="203.5" y2="86" stroke="#e5492b" strokeWidth="2.2" />
      <line x1="203.5" y1="74" x2="191.5" y2="86" stroke="#e5492b" strokeWidth="2.2" />
      <text x="197.5" y="68" fontSize="10" textAnchor="middle" fill="#e5492b">kapalı</text>

      <circle cx="40" cy="170" r="4" fill="#0e1b33" />
      <circle cx="265" cy="35" r="4" fill="#0e1b33" />
      <circle cx="130" cy="125" r="4" fill="#e5492b" />
      <text x="24" y="188" fontSize="13" fill="#0e1b33" fontWeight="700">A</text>
      <text x="271" y="28" fontSize="13" fill="#0e1b33" fontWeight="700">B</text>
      <text x="136" y="141" fontSize="12" fill="#e5492b" fontWeight="700">C</text>
    </svg>
  );
}
