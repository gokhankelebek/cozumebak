// Figure for the "Rakamlarla Sayı Oluşturma" lesson.
// Basamak kutuları for Örnek 3: {0,1,3,4,6,7} rakamlarıyla, rakamları farklı,
// üç basamaklı çift sayılar. Birler basamağı (kısıtlı) önce doldurulur ve iki
// duruma ayrılır: birler = 0 → 5·4·1 = 20; birler ∈ {4,6} → 4·4·2 = 32.
// Conventions: text/box dark #0e1b33, first-filled box accent #e5492b,
// helper text grey #8a93a6. Coordinates hand-computed.

// Boxes: width 54, height 40, x = 150, 214, 278 (gap 10).
// Row 1 boxes y = 46..86, row 2 boxes y = 128..168.
const XS = [150, 214, 278];
const W = 54;
const H = 40;

function Row({
  y,
  title,
  sub,
  vals,
  total,
  notes,
}: {
  y: number;
  title: string;
  sub: string;
  vals: string[];
  total: string;
  notes: string[];
}) {
  return (
    <g>
      <text x="12" y={y + 17} fontSize="13" fontWeight="700" fill="#0e1b33">
        {title}
      </text>
      <text x="12" y={y + 34} fontSize="11" fill="#8a93a6">
        {sub}
      </text>
      {XS.map((x, i) => {
        const first = i === 2;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={W}
              height={H}
              rx="4"
              fill={first ? "#e5492b" : "none"}
              fillOpacity={first ? 0.12 : 0}
              stroke={first ? "#e5492b" : "#0e1b33"}
              strokeWidth="1.6"
            />
            <text
              x={x + W / 2}
              y={y + 27}
              fontSize="18"
              fontWeight="700"
              textAnchor="middle"
              fill={first ? "#e5492b" : "#0e1b33"}
            >
              {vals[i]}
            </text>
            <text x={x + W / 2} y={y + H + 14} fontSize="10" textAnchor="middle" fill="#8a93a6">
              {notes[i]}
            </text>
          </g>
        );
      })}
      <text x="344" y={y + 27} fontSize="16" fontWeight="700" fill="#0e1b33">
        {total}
      </text>
    </g>
  );
}

export function RakamSayiCiftDurum() {
  return (
    <svg
      viewBox="0 0 420 200"
      role="img"
      aria-label="Basamak kutuları: birler basamağı önce doldurulur. Birinci durumda birler 0, yüzler 5, onlar 4 seçenek, toplam 20. İkinci durumda birler 4 veya 6, yüzler 4, onlar 4 seçenek, toplam 32."
    >
      {/* column headers */}
      {["yüzler", "onlar", "birler"].map((t, i) => (
        <text
          key={t}
          x={XS[i] + W / 2}
          y="30"
          fontSize="11"
          textAnchor="middle"
          fill={i === 2 ? "#e5492b" : "#8a93a6"}
          fontWeight={i === 2 ? "700" : "400"}
        >
          {t}
        </text>
      ))}
      <Row
        y={46}
        title="Durum 1"
        sub="birler = 0"
        vals={["5", "4", "1"]}
        total="= 20"
        notes={["kalan 5", "kalan 4", "yalnız 0"]}
      />
      <Row
        y={128}
        title="Durum 2"
        sub="birler = 4 veya 6"
        vals={["4", "4", "2"]}
        total="= 32"
        notes={["0 hariç", "0 dahil", "4 ya da 6"]}
      />
    </svg>
  );
}
