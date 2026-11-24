import SoruSekli from "@/components/quiz/SoruSekli";
import { DERS_SEKILLERI } from "@/lib/dersSekilleri";

// Figures for the "Dahil Etme–Hariç Tutma" page (TYT sayma ve olasılık).
// Every export is prefixed "Deht" so names never collide with other pages.
// Conventions: dark #0e1b33 for strokes and text, accent #e5492b, muted #8a93a6,
// faint fill #fbf9f4. Coordinates are hand-computed; no external libraries.

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function DehtIkiVenn() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtIkiVenn} />;
}

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function DehtUcVennSayim() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtUcVennSayim} />;
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

// Drawn from lib/dersSekilleri.ts by the quiz figure engine.
export function DehtYuvarlakMasa() {
  return <SoruSekli sekil={DERS_SEKILLERI.DehtYuvarlakMasa} />;
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
