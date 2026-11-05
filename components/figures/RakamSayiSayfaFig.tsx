// Figure for the "Rakamlarla Sayı Oluşturma" lesson.
// Sayfa numaralama blokları: 1–9 (9 sayı × 1 rakam), 10–99 (90 × 2),
// 100–999 (900 × 3). Cumulative digit counts at block ends: 9, 189, 2889.
// Widths are schematic (not proportional). Conventions: blocks dark #0e1b33
// outline, cumulative marks accent #e5492b, helper text grey #8a93a6.

// Bar y = 50..86. Block borders x = 20, 90, 210, 400.
const B = [20, 90, 210, 400];
const BLOCKS = [
  { range: "1 – 9", calc: "9 × 1", res: "9 rakam" },
  { range: "10 – 99", calc: "90 × 2", res: "180 rakam" },
  { range: "100 – 999", calc: "900 × 3", res: "2700 rakam" },
];
const CUM = ["9", "189", "2889"];

export function RakamSayiSayfaBloklari() {
  return (
    <svg
      viewBox="0 0 420 160"
      role="img"
      aria-label="Sayfa numaralama blokları: 1'den 9'a 9 sayı, her biri 1 rakam, 9 rakam; 10'dan 99'a 90 sayı, her biri 2 rakam, 180 rakam; 100'den 999'a 900 sayı, her biri 3 rakam, 2700 rakam. Blok sonlarında toplam rakam sayısı 9, 189 ve 2889."
    >
      {BLOCKS.map((b, i) => {
        const x1 = B[i];
        const x2 = B[i + 1];
        const mid = (x1 + x2) / 2;
        return (
          <g key={i}>
            <rect
              x={x1}
              y="50"
              width={x2 - x1}
              height="36"
              fill={i === 1 ? "#e5492b" : "#0e1b33"}
              fillOpacity={i === 1 ? 0.1 : 0.06}
              stroke="#0e1b33"
              strokeWidth="1.4"
            />
            <text x={mid} y="40" fontSize="12" fontWeight="700" textAnchor="middle" fill="#0e1b33">
              {b.range}
            </text>
            <text x={mid} y="73" fontSize="13" textAnchor="middle" fill="#0e1b33">
              {b.calc}
            </text>
            <text x={mid} y="104" fontSize="11" textAnchor="middle" fill="#8a93a6">
              {b.res}
            </text>
          </g>
        );
      })}
      {/* cumulative marks at block ends */}
      {CUM.map((c, i) => {
        const x = B[i + 1];
        return (
          <g key={c}>
            <line x1={x} y1="86" x2={x} y2="124" stroke="#e5492b" strokeWidth="1.4" strokeDasharray="3 3" />
            <text
              x={i === 2 ? x - 2 : x}
              y="140"
              fontSize="13"
              fontWeight="700"
              textAnchor={i === 2 ? "end" : "middle"}
              fill="#e5492b"
            >
              {c}
            </text>
          </g>
        );
      })}
      <text x="20" y="140" fontSize="11" fill="#8a93a6">
        toplam:
      </text>
    </svg>
  );
}
