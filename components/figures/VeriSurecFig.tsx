// Figure for the 10th-grade "İstatistiksel Araştırma Süreci" lesson.
// A 4-step cycle: Soru -> Veri toplama -> Bulgular -> Değerlendirme -> (loops back).
// Four rounded boxes in a row with connecting arrows; a return arrow from the
// last box back to the first shows the cyclic nature of the process.
// Coordinates hand-computed. viewBox 360x170. Boxes width 70, height 40,
// vertical centre y=55, tops y=35. x-starts: 10, 100, 190, 280 (gap 20).
// Conventions: axis/arrow #8a93a6, accent box stroke #e5492b, dark text #0e1b33,
// box fill #fbf9f4.
export function SurecDongusu() {
  const boxes = [
    { x: 10, l1: "1. Soru", l2: "belirleme" },
    { x: 100, l1: "2. Veri", l2: "toplama" },
    { x: 190, l1: "3. Bulgu", l2: "(özetleme)" },
    { x: 280, l1: "4. Değer-", l2: "lendirme" },
  ];
  return (
    <svg viewBox="0 0 360 170" role="img" aria-label="İstatistiksel araştırma süreci döngüsü: soru belirleme, veri toplama, bulgulara ulaşma, değerlendirme; son adımdan ilk adıma dönen ok döngüyü gösterir">
      <defs>
        <marker id="okVeriSurec" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8a93a6" />
        </marker>
      </defs>

      {/* boxes */}
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y="35" width="70" height="40" rx="8" fill="#fbf9f4" stroke="#e5492b" strokeWidth="1.5" />
          <text x={b.x + 35} y="52" fontSize="11" fill="#0e1b33" textAnchor="middle">{b.l1}</text>
          <text x={b.x + 35} y="66" fontSize="11" fill="#0e1b33" textAnchor="middle">{b.l2}</text>
        </g>
      ))}

      {/* forward arrows between boxes (gap 20: x=80->100, 170->190, 260->280) */}
      <line x1="80" y1="55" x2="98" y2="55" stroke="#8a93a6" strokeWidth="1.5" markerEnd="url(#okVeriSurec)" />
      <line x1="170" y1="55" x2="188" y2="55" stroke="#8a93a6" strokeWidth="1.5" markerEnd="url(#okVeriSurec)" />
      <line x1="260" y1="55" x2="278" y2="55" stroke="#8a93a6" strokeWidth="1.5" markerEnd="url(#okVeriSurec)" />

      {/* return arrow: from box4 bottom (x=315,y=75) down, left, up to box1 bottom (x=45,y=75) */}
      <path d="M315 75 L315 120 L45 120 L45 77" fill="none" stroke="#8a93a6" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#okVeriSurec)" />
      <text x="180" y="138" fontSize="11" fill="#8a93a6" textAnchor="middle">yeni soruyla döngü sürer</text>
    </svg>
  );
}
