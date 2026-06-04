// Figure for the 10th-grade "İşlemlerin Algoritması" lesson.
// A linear flow chart (akış şeması) of the trace example
//   a = x+1 ; b = 2a ; c = b-3 ; "c'yi yaz"
// shown for the input x = 4 with the running values 5, 10, 7.
// Boxes left-to-right joined by arrows; input/output rounded, steps square.
// Conventions: boxes outline dark #0e1b33, fill cream #fbf9f4, arrows axis
// #8a93a6, the live value highlighted accent #e5492b. Coordinates hand-set.

export function AkisSemasi() {
  const boxes = [
    { x: 8, label: "x = 4", val: "" },
    { x: 92, label: "a = x+1", val: "5" },
    { x: 176, label: "b = 2a", val: "10" },
    { x: 260, label: "c = b−3", val: "7" },
  ];
  const W = 70;
  const H = 36;
  const y = 40;
  return (
    <svg viewBox="0 0 360 110" role="img" aria-label="Akış şeması: x=4 girdisiyle a=x+1, b=2a, c=b-3 adımları izlenerek çıktının 7 bulunuşu">
      {/* connector arrows between boxes */}
      {[78, 162, 246].map((x, i) => (
        <line key={i} x1={x} y1={y + H / 2} x2={x + 14} y2={y + H / 2} stroke="#8a93a6" strokeWidth="1.5" markerEnd="url(#arrow)" />
      ))}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8a93a6" />
        </marker>
      </defs>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={y} width={W} height={H} rx={i === 0 ? 16 : 4} fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.4" />
          <text x={b.x + W / 2} y={y + 23} fontSize="12" fill="#0e1b33" textAnchor="middle">{b.label}</text>
          {b.val && (
            <text x={b.x + W / 2} y={y + H + 18} fontSize="13" fill="#e5492b" textAnchor="middle" fontWeight="700">{b.val}</text>
          )}
        </g>
      ))}
      <text x="294" y="22" fontSize="12" fill="#e5492b" textAnchor="middle" fontWeight="700">çıktı = 7</text>
    </svg>
  );
}
