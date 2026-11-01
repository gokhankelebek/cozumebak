// Figures for the "Dahil Etme–Hariç Tutma" page (TYT sayma ve olasılık).
// Every export is prefixed "Deht" so names never collide with other pages.
// Conventions: dark #0e1b33 for strokes and text, accent #e5492b, muted #8a93a6,
// faint fill #fbf9f4. Coordinates are hand-computed; no external libraries.

// Şekil 1 — 1..12 içinde 2'nin katları (A) ve 3'ün katları (B).
// Universe rect (10,10)-(350,240). Circles r = 80, centers A (140,130), B (220,130).
// Lens (both) spans x 140..220 at y = 130; 6 and 12 sit at x = 180.
// Only-A points (100,100) (125,88) (95,150) (120,178): distance to B center > 80.
// Only-B points (258,110) (252,160): distance to A center > 80.
export function DehtIkiVenn() {
  return (
    <svg
      viewBox="0 0 360 250"
      role="img"
      aria-label="İki kümeli Venn şeması: 1'den 12'ye kadar sayılarda 2'nin katları 2, 4, 6, 8, 10, 12; 3'ün katları 3, 6, 9, 12. Ortak bölgede 6 ve 12 var; hiçbirinde olmayanlar 1, 5, 7, 11."
    >
      <rect x="10" y="10" width="340" height="230" rx="8" fill="#ffffff" stroke="#8a93a6" strokeWidth="1.4" />
      <circle cx="140" cy="130" r="80" fill="#fbf9f4" fillOpacity="0.7" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="220" cy="130" r="80" fill="#e5492b" fillOpacity="0.06" stroke="#0e1b33" strokeWidth="2" />

      {/* küme adları */}
      <text x="105" y="40" fontSize="12" fill="#0e1b33" textAnchor="middle" fontWeight="700">A: 2'nin katları</text>
      <text x="255" y="40" fontSize="12" fill="#0e1b33" textAnchor="middle" fontWeight="700">B: 3'ün katları</text>

      {/* yalnız A */}
      <text x="100" y="105" fontSize="15" fill="#0e1b33" textAnchor="middle">2</text>
      <text x="125" y="93" fontSize="15" fill="#0e1b33" textAnchor="middle">4</text>
      <text x="95" y="155" fontSize="15" fill="#0e1b33" textAnchor="middle">8</text>
      <text x="120" y="183" fontSize="15" fill="#0e1b33" textAnchor="middle">10</text>

      {/* ortak bölge */}
      <text x="180" y="117" fontSize="16" fill="#e5492b" textAnchor="middle" fontWeight="700">6</text>
      <text x="180" y="157" fontSize="16" fill="#e5492b" textAnchor="middle" fontWeight="700">12</text>

      {/* yalnız B */}
      <text x="258" y="115" fontSize="15" fill="#0e1b33" textAnchor="middle">3</text>
      <text x="252" y="165" fontSize="15" fill="#0e1b33" textAnchor="middle">9</text>

      {/* hiçbirinde */}
      <text x="28" y="66" fontSize="14" fill="#8a93a6" textAnchor="middle">1</text>
      <text x="334" y="66" fontSize="14" fill="#8a93a6" textAnchor="middle">5</text>
      <text x="28" y="206" fontSize="14" fill="#8a93a6" textAnchor="middle">7</text>
      <text x="332" y="206" fontSize="14" fill="#8a93a6" textAnchor="middle">11</text>

      <text x="180" y="233" fontSize="11" fill="#8a93a6" textAnchor="middle">evrensel küme: 1, 2, …, 12</text>
    </svg>
  );
}

// Şekil 2 — Üç kümede her bölgenin kaç kez sayıldığı.
// Circles r = 72, centers A (150,95), B (110,160), C (190,160).
// Region label points (each checked against the three centers):
//   yalnız A (150,52), yalnız B (74,190), yalnız C (226,190)
//   A∩B only (110,118), A∩C only (190,118), B∩C only (150,200), triple (150,145).
export function DehtUcVennSayim() {
  return (
    <svg
      viewBox="0 0 300 262"
      role="img"
      aria-label="Üç kümeli Venn şeması: tek kümedeki bir eleman 1 kez, iki kümedeki bir eleman 2 eksi 1 kez, üç kümedeki bir eleman 3 eksi 3 artı 1 kez sayılır; sonuçta her bölge tam 1 kez sayılır."
    >
      <circle cx="150" cy="95" r="72" fill="#fbf9f4" fillOpacity="0.6" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="110" cy="160" r="72" fill="#fbf9f4" fillOpacity="0.6" stroke="#0e1b33" strokeWidth="2" />
      <circle cx="190" cy="160" r="72" fill="#fbf9f4" fillOpacity="0.6" stroke="#0e1b33" strokeWidth="2" />

      <text x="150" y="16" fontSize="15" fill="#e5492b" textAnchor="middle" fontWeight="700">A</text>
      <text x="26" y="242" fontSize="15" fill="#e5492b" textAnchor="middle" fontWeight="700">B</text>
      <text x="274" y="242" fontSize="15" fill="#e5492b" textAnchor="middle" fontWeight="700">C</text>

      {/* tek kümeli bölgeler: 1 */}
      <text x="150" y="56" fontSize="13" fill="#0e1b33" textAnchor="middle">1</text>
      <text x="74" y="194" fontSize="13" fill="#0e1b33" textAnchor="middle">1</text>
      <text x="226" y="194" fontSize="13" fill="#0e1b33" textAnchor="middle">1</text>

      {/* ikili bölgeler: 2 − 1 */}
      <text x="110" y="122" fontSize="12" fill="#0e1b33" textAnchor="middle">2−1</text>
      <text x="190" y="122" fontSize="12" fill="#0e1b33" textAnchor="middle">2−1</text>
      <text x="150" y="204" fontSize="12" fill="#0e1b33" textAnchor="middle">2−1</text>

      {/* üçlü bölge: 3 − 3 + 1 */}
      <text x="150" y="150" fontSize="12" fill="#e5492b" textAnchor="middle" fontWeight="700">3−3+1</text>

      <text x="150" y="258" fontSize="11" fill="#8a93a6" textAnchor="middle">her bölge sonunda tam 1 kez sayılır</text>
    </svg>
  );
}

// Şekil 3 — 4 kişinin düzensiz dağıtımları (D4 = 9), birinci kişinin aldığı eşyaya göre.
// Three columns centered at x = 70, 200, 330 (spacing 130); boxes 84×30 at y = 52, 97, 142.
// Two-line headers: "1. kişi" (y = 18) and "k'nin eşyasını alır" (y = 34).
// In each column the "karşılıklı takas" (2143, 3412, 4321) is drawn in the accent color.
export function DehtDuzensizListe() {
  const cols = [
    { x: 70, head: "2'nin eşyasını alır", rows: ["2143", "2341", "2413"] },
    { x: 200, head: "3'ün eşyasını alır", rows: ["3412", "3142", "3421"] },
    { x: 330, head: "4'ün eşyasını alır", rows: ["4321", "4123", "4312"] },
  ];
  const ys = [52, 97, 142];
  return (
    <svg
      viewBox="0 0 400 200"
      role="img"
      aria-label="Dört kişinin hiçbirinin kendi eşyasını almadığı 9 dağıtım, birinci kişinin aldığı eşyaya göre üç sütunda. Birinci kişi 2'nin eşyasını alırsa: 2143, 2341, 2413; 3'ün eşyasını alırsa: 3412, 3142, 3421; 4'ün eşyasını alırsa: 4321, 4123, 4312."
    >
      {cols.map((c) => (
        <g key={c.x}>
          <text x={c.x} y="18" fontSize="12" fill="#0e1b33" textAnchor="middle" fontWeight="700">
            1. kişi
          </text>
          <text x={c.x} y="34" fontSize="11" fill="#0e1b33" textAnchor="middle">
            {c.head}
          </text>
          {c.rows.map((r, i) => (
            <g key={r}>
              <rect
                x={c.x - 42}
                y={ys[i]}
                width="84"
                height="30"
                rx="5"
                fill={i === 0 ? "#e5492b" : "#fbf9f4"}
                fillOpacity={i === 0 ? 0.1 : 1}
                stroke={i === 0 ? "#e5492b" : "#0e1b33"}
                strokeWidth="1.4"
              />
              <text
                x={c.x}
                y={ys[i] + 21}
                fontSize="16"
                fill={i === 0 ? "#e5492b" : "#0e1b33"}
                textAnchor="middle"
                letterSpacing="3"
              >
                {r}
              </text>
            </g>
          ))}
        </g>
      ))}
      <text x="200" y="192" fontSize="11" fill="#8a93a6" textAnchor="middle">
        Her sütunda 3 dağıtım var: 3 · 3 = 9
      </text>
    </svg>
  );
}

// Şekil 5 — 6 sandalyeli yuvarlak masa, A sabit (en üst sandalye).
// Table center (180,122), seat ring radius 82, seat radius 15.
// Seat k at angle −90° + 60°·k: (180,40) (251,81) (251,163) (180,204) (109,163) (109,81).
// Forbidden for B: k = 1, 5 (komşu) and k = 3 (tam karşı); allowed: k = 2, 4.
export function DehtYuvarlakMasa() {
  const seats: [number, number][] = [
    [180, 40], [251, 81], [251, 163], [180, 204], [109, 163], [109, 81],
  ];
  const forbidden = new Set([1, 3, 5]);
  return (
    <svg
      viewBox="0 0 420 244"
      role="img"
      aria-label="Altı sandalyeli yuvarlak masa. A en üstteki sandalyeye sabitlenmiş. A'nın iki yanındaki sandalyeler ve tam karşısındaki sandalye B için yasak; kalan iki sandalye B için uygun."
    >
      <circle cx="180" cy="122" r="56" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.6" />
      <text x="180" y="126" fontSize="11" fill="#8a93a6" textAnchor="middle">masa</text>
      {/* A ile karşısı arasındaki çap */}
      <line x1="180" y1="55" x2="180" y2="189" stroke="#8a93a6" strokeWidth="1" strokeDasharray="4 4" />
      {seats.map(([x, y], k) => {
        if (k === 0) {
          return (
            <g key={k}>
              <circle cx={x} cy={y} r="15" fill="#0e1b33" />
              <text x={x} y={y + 5} fontSize="14" fill="#ffffff" textAnchor="middle" fontWeight="700">A</text>
            </g>
          );
        }
        if (forbidden.has(k)) {
          return (
            <g key={k}>
              <circle cx={x} cy={y} r="15" fill="#ffffff" stroke="#e5492b" strokeWidth="2" />
              <line x1={x - 7} y1={y - 7} x2={x + 7} y2={y + 7} stroke="#e5492b" strokeWidth="2.2" />
              <line x1={x - 7} y1={y + 7} x2={x + 7} y2={y - 7} stroke="#e5492b" strokeWidth="2.2" />
            </g>
          );
        }
        return (
          <g key={k}>
            <circle cx={x} cy={y} r="15" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.6" />
            <text x={x} y={y + 5} fontSize="13" fill="#0e1b33" textAnchor="middle">B?</text>
          </g>
        );
      })}

      {/* açıklama */}
      <circle cx="300" cy="80" r="9" fill="#ffffff" stroke="#e5492b" strokeWidth="2" />
      <line x1="295" y1="75" x2="305" y2="85" stroke="#e5492b" strokeWidth="2" />
      <line x1="295" y1="85" x2="305" y2="75" stroke="#e5492b" strokeWidth="2" />
      <text x="316" y="84" fontSize="11" fill="#0e1b33">B için yasak (3)</text>
      <circle cx="300" cy="112" r="9" fill="#ffffff" stroke="#0e1b33" strokeWidth="1.6" />
      <text x="316" y="116" fontSize="11" fill="#0e1b33">B için uygun (2)</text>
      <text x="292" y="150" fontSize="11" fill="#8a93a6">kalan 4 kişi:</text>
      <text x="292" y="166" fontSize="11" fill="#8a93a6">4! biçimde oturur</text>
    </svg>
  );
}

// Şekil 4 — Torbada 7 kırmızı, 4 mavi, 1 yeşil top; "aynı renkten 3 top" için en kötü durum.
// Jars (yuvalar) at x = 40, 145, 250, width 70, from y = 70 to y = 190.
// Balls r = 13, stacked from the bottom: centers y = 175, 147.
// The sixth ball (+1) sits above at (180,30) with dashed arrows to the red and blue jars.
export function DehtGuvercinTorba() {
  const jars = [
    { x: 40, label: "kırmızı (7)", balls: ["K", "K"], full: false },
    { x: 145, label: "mavi (4)", balls: ["M", "M"], full: false },
    { x: 250, label: "yeşil (1)", balls: ["Y"], full: true },
  ];
  const ballY = [175, 147];
  return (
    <svg
      viewBox="0 0 360 228"
      role="img"
      aria-label="Aynı renkten 3 top için en kötü durum: 2 kırmızı, 2 mavi ve torbadaki tek yeşil top çekilmiş, toplam 5 top. Altıncı top kırmızı ya da mavi olmak zorundadır ve o renkte 3 top tamamlanır."
    >
      {jars.map((j) => (
        <g key={j.x}>
          <path
            d={`M ${j.x} 70 L ${j.x} 190 L ${j.x + 70} 190 L ${j.x + 70} 70`}
            fill="none"
            stroke="#0e1b33"
            strokeWidth="1.8"
          />
          {j.balls.map((b, i) => (
            <g key={i}>
              <circle cx={j.x + 35} cy={ballY[i]} r="13" fill="#fbf9f4" stroke="#0e1b33" strokeWidth="1.6" />
              <text x={j.x + 35} y={ballY[i] + 5} fontSize="13" fill="#0e1b33" textAnchor="middle">{b}</text>
            </g>
          ))}
          {j.full ? (
            <text x={j.x + 35} y="120" fontSize="10" fill="#8a93a6" textAnchor="middle">tükendi</text>
          ) : null}
          <text x={j.x + 35} y="210" fontSize="12" fill="#0e1b33" textAnchor="middle">{j.label}</text>
        </g>
      ))}

      {/* altıncı top */}
      <circle cx="180" cy="30" r="14" fill="#ffffff" stroke="#e5492b" strokeWidth="2" />
      <text x="180" y="35" fontSize="12" fill="#e5492b" textAnchor="middle" fontWeight="700">6.</text>
      <line x1="168" y1="40" x2="88" y2="118" stroke="#e5492b" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1="180" y1="44" x2="180" y2="118" stroke="#e5492b" strokeWidth="1.4" strokeDasharray="5 4" />
      <text x="204" y="34" fontSize="11" fill="#e5492b">ilk 5 top: en kötü durum</text>
      <text x="204" y="50" fontSize="11" fill="#e5492b">6. top 3'lüyü tamamlar</text>
    </svg>
  );
}
