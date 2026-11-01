// Figure for the "Koşullu Olasılık Soruları" page (slug: kosullu-olasilik-sorulari).
// Two-way table (iki yönlü tablo) with row and column totals.
//   Kız:   sporcu 18, değil 54, toplam 72
//   Erkek: sporcu 32, değil 56, toplam 88
//   Toplam: 50, 110, 160
// The "Kız" row is tinted (condition "kız" → denominator 72);
// the "Sporcu" column is outlined dashed (condition "sporcu" → denominator 50).
// Columns: header 20..120, then 120..205, 205..290, 290..370.
// Rows: header 30..62, Kız 62..102, Erkek 102..142, Toplam 142..178.
// Conventions: dark #0e1b33, accent #e5492b, muted #8a93a6.
export function KsSporTablosu() {
  const colX = [120, 205, 290, 370];
  const rowY = [30, 62, 102, 142, 178];
  const colMid = [162.5, 247.5, 330];
  const rows: { label: string; vals: string[]; y: number }[] = [
    { label: "Kız", vals: ["18", "54", "72"], y: 87 },
    { label: "Erkek", vals: ["32", "56", "88"], y: 127 },
    { label: "Toplam", vals: ["50", "110", "160"], y: 165 },
  ];
  return (
    <svg
      viewBox="0 0 390 215"
      role="img"
      aria-label="İki yönlü tablo: 160 öğrenci cinsiyete ve lisanslı sporcu olup olmamaya göre ayrılmış. Kızlar: 18 sporcu, 54 sporcu değil, toplam 72. Erkekler: 32 sporcu, 56 sporcu değil, toplam 88. Sporcu toplamı 50, sporcu olmayan toplamı 110. Kız satırı ve sporcu sütunu işaretli"
    >
      {/* Kız satırı vurgusu (koşul: kız) */}
      <rect x="20" y="62" width="350" height="40" fill="#e5492b" fillOpacity="0.12" />

      {/* grid */}
      <rect x="20" y="30" width="350" height="148" fill="none" stroke="#8a93a6" strokeWidth="1.4" />
      {colX.slice(0, 3).map((x) => (
        <line key={`v${x}`} x1={x} y1="30" x2={x} y2="178" stroke="#8a93a6" strokeWidth="1.1" />
      ))}
      {rowY.slice(1, 4).map((y) => (
        <line key={`h${y}`} x1="20" y1={y} x2="370" y2={y} stroke="#8a93a6" strokeWidth="1.1" />
      ))}
      {/* toplam satırı ve sütunu için kalın ayraç */}
      <line x1="20" y1="142" x2="370" y2="142" stroke="#0e1b33" strokeWidth="1.4" />
      <line x1="290" y1="30" x2="290" y2="178" stroke="#0e1b33" strokeWidth="1.4" />

      {/* Sporcu sütunu çerçevesi (koşul: sporcu) */}
      <rect x="122" y="32" width="81" height="144" fill="none" stroke="#0e1b33" strokeWidth="1.6" strokeDasharray="5 3" />

      {/* column headers */}
      <text x={colMid[0]} y="51" fontSize="11" fill="#0e1b33" fontWeight="700" textAnchor="middle">Sporcu</text>
      <text x={colMid[1]} y="51" fontSize="11" fill="#0e1b33" textAnchor="middle">Sporcu değil</text>
      <text x={colMid[2]} y="51" fontSize="11" fill="#0e1b33" textAnchor="middle">Toplam</text>

      {rows.map((r) => (
        <g key={r.label}>
          <text
            x="70"
            y={r.y}
            fontSize="11"
            fill={r.label === "Kız" ? "#e5492b" : "#0e1b33"}
            fontWeight={r.label === "Kız" ? "700" : "400"}
            textAnchor="middle"
          >
            {r.label}
          </text>
          {r.vals.map((v, i) => (
            <text
              key={`${r.label}${i}`}
              x={colMid[i]}
              y={r.y}
              fontSize="13"
              fill={r.label === "Kız" ? "#e5492b" : "#0e1b33"}
              fontWeight={r.label === "Kız" || (i === 0 && r.label === "Toplam") ? "700" : "400"}
              textAnchor="middle"
            >
              {v}
            </text>
          ))}
        </g>
      ))}

      {/* legend */}
      <rect x="20" y="192" width="12" height="12" fill="#e5492b" fillOpacity="0.12" stroke="#8a93a6" strokeWidth="0.8" />
      <text x="38" y="202" fontSize="10" fill="#0e1b33">koşul "kız": payda 72</text>
      <rect x="190" y="192" width="12" height="12" fill="none" stroke="#0e1b33" strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="208" y="202" fontSize="10" fill="#0e1b33">koşul "sporcu": payda 50</text>
    </svg>
  );
}
