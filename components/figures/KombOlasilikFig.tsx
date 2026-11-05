// Figures for the TYT "Kombinasyonla Olasılık" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// All coordinates hand-computed (SVG y axis pointing down). No external libraries.

const INK = "#0e1b33";
const ACCENT = "#e5492b";
const MUTED = "#8a93a6";

// ---------------------------------------------------------------------------
// KombOlasilikEtiket — 2 balls into 2 boxes, each ball independently.
// Balls are labelled T1, T2 so the 4 equally likely outcomes are visible.
// Panels centred at x = 60, 180, 300, 420. In each panel box 1 spans
// x = cx−45 … cx−5 and box 2 spans x = cx+5 … cx+45, both y = 40 … 90.
// Ball slots: upper (y = 54) and lower (y = 77), horizontally centred in the box.
// Brackets at y = 118 group the panels into the 3 "unlabelled" outcomes.
// ---------------------------------------------------------------------------
type Yer = [number, number]; // [box index for T1, box index for T2]

function EtiketPanel({ cx, yer }: { cx: number; yer: Yer }) {
  const boxX = [cx - 45, cx + 5];
  const used = [0, 0];
  const balls = (["T1", "T2"] as const).map((ad, i) => {
    const kutu = yer[i];
    const slot = used[kutu]++;
    return { ad, x: boxX[kutu] + 20, y: slot === 0 ? 54 : 77 };
  });
  return (
    <g>
      {boxX.map((x, k) => (
        <g key={k}>
          <rect x={x} y="40" width="40" height="50" fill="none" stroke={INK} strokeWidth="1.4" />
          <text x={x + 20} y="104" fontSize="10" textAnchor="middle" fill={MUTED}>
            {k === 0 ? "Kutu 1" : "Kutu 2"}
          </text>
        </g>
      ))}
      {balls.map((b) => (
        <g key={b.ad}>
          <circle cx={b.x} cy={b.y} r="10" fill="#fff" stroke={ACCENT} strokeWidth="1.5" />
          <text x={b.x} y={b.y + 4} fontSize="9.5" fontWeight="700" textAnchor="middle" fill={INK}>
            {b.ad}
          </text>
        </g>
      ))}
    </g>
  );
}

export function KombOlasilikEtiket() {
  return (
    <svg
      viewBox="0 0 480 200"
      role="img"
      aria-label="İki top iki kutuya atılıyor. Toplar etiketlenince dört eş olasılıklı sonuç çıkıyor: ikisi birinci kutuda, T1 birinci T2 ikinci kutuda, T2 birinci T1 ikinci kutuda, ikisi ikinci kutuda. Etiketler silinince üç sonuç görünüyor; bunların olasılıkları dörtte bir, dörtte iki ve dörtte bir."
    >
      <text x="240" y="22" fontSize="12" textAnchor="middle" fill={INK} fontWeight="700">
        Etiketli 4 sonuç, her biri 1/4
      </text>
      <EtiketPanel cx={60} yer={[0, 0]} />
      <EtiketPanel cx={180} yer={[0, 1]} />
      <EtiketPanel cx={300} yer={[1, 0]} />
      <EtiketPanel cx={420} yer={[1, 1]} />

      {/* brackets */}
      <path d="M20 116 V122 H100 V116" fill="none" stroke={MUTED} strokeWidth="1.3" />
      <path d="M140 116 V122 H340 V116" fill="none" stroke={MUTED} strokeWidth="1.3" />
      <path d="M380 116 V122 H460 V116" fill="none" stroke={MUTED} strokeWidth="1.3" />

      <text x="60" y="146" fontSize="12" textAnchor="middle" fill={ACCENT} fontWeight="700">(2, 0): 1/4</text>
      <text x="240" y="146" fontSize="12" textAnchor="middle" fill={ACCENT} fontWeight="700">(1, 1): 2/4</text>
      <text x="420" y="146" fontSize="12" textAnchor="middle" fill={ACCENT} fontWeight="700">(0, 2): 1/4</text>

      <text x="240" y="182" fontSize="11" textAnchor="middle" fill={MUTED}>
        Etiketler silinince 3 sonuç görünür, ama bu 3 sonuç eş olasılıklı değildir.
      </text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// KombOlasilikSiraliTablo — bag K1, K2, M1, M2; two balls drawn without
// replacement. Rows = 1st draw, columns = 2nd draw. Cell size 40, grid
// origin (90, 50): column j spans x = 90+40j … 130+40j, row i spans
// y = 50+40i … 90+40i. Diagonal cells are impossible (grey, ×).
// Same-colour cells are tinted accent. Cells above the diagonal (j > i)
// get a thick border: these 6 cells are the 6 unordered choices.
// ---------------------------------------------------------------------------
export function KombOlasilikSiraliTablo() {
  const ad = ["K1", "K2", "M1", "M2"];
  const cells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const x = 90 + 40 * j;
      const y = 50 + 40 * i;
      const kosegen = i === j;
      const ayniRenk = !kosegen && ad[i][0] === ad[j][0];
      cells.push(
        <g key={`${i}-${j}`}>
          <rect
            x={x}
            y={y}
            width="40"
            height="40"
            fill={kosegen ? "#e3e6ec" : ayniRenk ? "rgba(229,73,43,0.22)" : "#fff"}
            stroke={MUTED}
            strokeWidth="1"
          />
          {kosegen ? (
            <text x={x + 20} y={y + 25} fontSize="14" textAnchor="middle" fill={MUTED}>×</text>
          ) : (
            <text x={x + 20} y={y + 24} fontSize="9.5" textAnchor="middle" fill={INK}>
              {ad[i]}
              {ad[j]}
            </text>
          )}
        </g>,
      );
    }
  }
  // thick borders on the 6 cells above the diagonal
  const ust = [];
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      ust.push(
        <rect key={`u${i}-${j}`} x={90 + 40 * j + 2} y={50 + 40 * i + 2} width="36" height="36" fill="none" stroke={INK} strokeWidth="2" />,
      );
    }
  }
  return (
    <svg
      viewBox="0 0 470 230"
      role="img"
      aria-label="İki kırmızı ve iki mavi toptan iadesiz iki top çekilişinin sıralı sonuç tablosu. On altı hücreden köşegendeki dördü imkânsız, kalan on iki sıralı sonucun dördü aynı renk. Köşegenin üstündeki altı hücre altı sırasız seçimi gösteriyor; bunların ikisi aynı renk."
    >
      <text x="170" y="20" fontSize="11" textAnchor="middle" fill={MUTED}>2. çekiş</text>
      {ad.map((a, j) => (
        <text key={`c${a}`} x={110 + 40 * j} y="42" fontSize="11" fontWeight="700" textAnchor="middle" fill={INK}>{a}</text>
      ))}
      {ad.map((a, i) => (
        <text key={`r${a}`} x="80" y={74 + 40 * i} fontSize="11" fontWeight="700" textAnchor="end" fill={INK}>{a}</text>
      ))}
      <text x="30" y="130" fontSize="11" textAnchor="middle" fill={MUTED} transform="rotate(-90 30 130)">1. çekiş</text>
      {cells}
      {ust}

      {/* legend */}
      <rect x="290" y="62" width="16" height="16" fill="rgba(229,73,43,0.22)" stroke={MUTED} strokeWidth="1" />
      <text x="314" y="74" fontSize="11" fill={INK}>aynı renk: 4 sıralı sonuç</text>
      <rect x="290" y="96" width="16" height="16" fill="#e3e6ec" stroke={MUTED} strokeWidth="1" />
      <text x="314" y="108" fontSize="11" fill={INK}>aynı top iki kez çekilemez</text>
      <rect x="290" y="130" width="16" height="16" fill="none" stroke={INK} strokeWidth="2" />
      <text x="314" y="142" fontSize="11" fill={INK}>köşegenin üstü: 6 seçim</text>
      <text x="290" y="180" fontSize="11" fill={ACCENT} fontWeight="700">sıralı: 4/12 = 1/3</text>
      <text x="290" y="200" fontSize="11" fill={ACCENT} fontWeight="700">sırasız: 2/6 = 1/3</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// KombOlasilikIzgaraYol — 3 × 3 street grid, unit 60. Lattice point (i, j)
// is drawn at (60 + 60i, 230 − 60j). A = (0,0) → (60,230); B = (3,3) →
// (240,50); C = (2,1) → (180,170). Highlighted path R R U R U U:
// (60,230) → (120,230) → (180,230) → (180,170) → (240,170) → (240,110) → (240,50).
// ---------------------------------------------------------------------------
export function KombOlasilikIzgaraYol() {
  const xs = [60, 120, 180, 240];
  const ys = [230, 170, 110, 50];
  return (
    <svg
      viewBox="0 0 430 270"
      role="img"
      aria-label="Üçe üç sokak ızgarası. A sol alt köşede, B sağ üst köşede, C ise A'nın iki birim sağında ve bir birim yukarısında. Kırmızı çizgi C'den geçen bir en kısa yolu gösteriyor. Toplam yirmi en kısa yolun dokuzu C'den geçer."
    >
      {xs.map((x) => (
        <line key={`v${x}`} x1={x} y1="50" x2={x} y2="230" stroke={MUTED} strokeWidth="1.2" />
      ))}
      {ys.map((y) => (
        <line key={`h${y}`} x1="60" y1={y} x2="240" y2={y} stroke={MUTED} strokeWidth="1.2" />
      ))}
      <polyline
        points="60,230 120,230 180,230 180,170 240,170 240,110 240,50"
        fill="none"
        stroke={ACCENT}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="230" r="5" fill={INK} />
      <circle cx="240" cy="50" r="5" fill={INK} />
      <circle cx="180" cy="170" r="5.5" fill={ACCENT} />
      <text x="44" y="250" fontSize="14" fontWeight="700" fill={INK}>A</text>
      <text x="248" y="44" fontSize="14" fontWeight="700" fill={INK}>B</text>
      <text x="164" y="162" fontSize="14" fontWeight="700" fill={ACCENT}>C</text>

      <text x="280" y="100" fontSize="12" fill={INK}>Tüm en kısa yollar:</text>
      <text x="280" y="118" fontSize="12" fill={INK} fontWeight="700">6! / (3!·3!) = 20</text>
      <text x="280" y="150" fontSize="12" fill={INK}>C'den geçenler:</text>
      <text x="280" y="168" fontSize="12" fill={INK} fontWeight="700">3 · 3 = 9</text>
      <text x="280" y="200" fontSize="12" fill={ACCENT} fontWeight="700">P = 9/20</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// KombOlasilikZarEnBuyuk — 6 × 6 table of two dice. Cell size 28, origin
// (70, 40): column b (2nd die, 1…6) spans x = 70+28(b−1) … 98+28(b−1);
// row a (1st die) spans y = 40+28(a−1) … 68+28(a−1). Grid ends at
// x = 238, y = 208. Cells with max ≤ 4 grey (16), max = 5 accent (9),
// max = 6 white (11).
// ---------------------------------------------------------------------------
export function KombOlasilikZarEnBuyuk() {
  const cells = [];
  for (let a = 1; a <= 6; a++) {
    for (let b = 1; b <= 6; b++) {
      const m = Math.max(a, b);
      const fill = m <= 4 ? "#e3e6ec" : m === 5 ? "rgba(229,73,43,0.35)" : "#fff";
      cells.push(
        <rect key={`${a}-${b}`} x={70 + 28 * (b - 1)} y={40 + 28 * (a - 1)} width="28" height="28" fill={fill} stroke={MUTED} strokeWidth="1" />,
      );
    }
  }
  const n = [1, 2, 3, 4, 5, 6];
  return (
    <svg
      viewBox="0 0 470 230"
      role="img"
      aria-label="İki zarın otuz altı sonucunu gösteren altıya altı tablo. En büyük değeri en çok dört olan on altı hücre gri bir kare oluşturuyor. En büyük değeri tam beş olan dokuz hücre, bu karenin çevresinde kırmızı bir L biçimi oluşturuyor."
    >
      <text x="154" y="18" fontSize="11" textAnchor="middle" fill={MUTED}>2. zar</text>
      {n.map((b) => (
        <text key={`c${b}`} x={84 + 28 * (b - 1)} y="34" fontSize="11" fontWeight="700" textAnchor="middle" fill={INK}>{b}</text>
      ))}
      {n.map((a) => (
        <text key={`r${a}`} x="60" y={58 + 28 * (a - 1)} fontSize="11" fontWeight="700" textAnchor="end" fill={INK}>{a}</text>
      ))}
      <text x="26" y="124" fontSize="11" textAnchor="middle" fill={MUTED} transform="rotate(-90 26 124)">1. zar</text>
      {cells}

      <rect x="262" y="60" width="16" height="16" fill="#e3e6ec" stroke={MUTED} strokeWidth="1" />
      <text x="286" y="72" fontSize="11" fill={INK}>en büyük ≤ 4: 4² = 16</text>
      <rect x="262" y="94" width="16" height="16" fill="rgba(229,73,43,0.35)" stroke={MUTED} strokeWidth="1" />
      <text x="286" y="106" fontSize="11" fill={INK}>en büyük = 5: 5² − 4² = 9</text>
      <rect x="262" y="128" width="16" height="16" fill="#fff" stroke={MUTED} strokeWidth="1" />
      <text x="286" y="140" fontSize="11" fill={INK}>en büyük = 6: 6² − 5² = 11</text>
      <text x="262" y="182" fontSize="12" fill={ACCENT} fontWeight="700">P(en büyük = 5) = 9/36 = 1/4</text>
    </svg>
  );
}
