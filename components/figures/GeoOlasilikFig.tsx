// Figures for the TYT "Geometrik Olasılık" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// Coordinates hand-computed (SVG y axis points down). No external libraries.

const INK = "#0e1b33";
const ACCENT = "#e5492b";
const MUTED = "#8a93a6";
const ACCENT_SOFT = "#fbd5cb";
const ACCENT_MID = "#f29a85";
const INK_SOFT = "#eef0f4";

// ---------------------------------------------------------------------------
// GeoOlDogruParcasi — |AB| = 12, 25 px per unit: A x=30, B x=330.
// Ticks at 3 (x=105) and 9 (x=255); the favourable middle part is accent.
// ---------------------------------------------------------------------------
export function GeoOlDogruParcasi() {
  return (
    <svg
      viewBox="0 0 360 100"
      role="img"
      aria-label="Uzunluğu 12 olan AB doğru parçası. C noktası A'dan ve B'den en az 3 birim uzakta olmalıysa yalnız ortadaki 6 birimlik kısma düşebilir"
    >
      <line x1="30" y1="50" x2="330" y2="50" stroke={INK} strokeWidth="2" />
      <line x1="105" y1="50" x2="255" y2="50" stroke={ACCENT} strokeWidth="6" />
      {[30, 105, 255, 330].map((x) => (
        <line key={x} x1={x} y1="42" x2={x} y2="58" stroke={INK} strokeWidth="1.6" />
      ))}
      <text x="24" y="34" fontSize="13" fontWeight="700" fill={INK}>A</text>
      <text x="324" y="34" fontSize="13" fontWeight="700" fill={INK}>B</text>
      <text x="62" y="78" fontSize="12" fill={MUTED}>3</text>
      <text x="172" y="78" fontSize="12" fontWeight="700" fill={ACCENT}>6</text>
      <text x="288" y="78" fontSize="12" fill={MUTED}>3</text>
      <text x="140" y="34" fontSize="11" fill={ACCENT}>uygun kısım</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlKareDaire — left: square 20..180 (side 160) with inscribed circle
// r = 80 at (100,100). Right: target with radii 30, 60, 90 at (300,100);
// the middle ring (between r1 = 30 and r2 = 60) is accent.
// ---------------------------------------------------------------------------
export function GeoOlKareDaire() {
  return (
    <svg
      viewBox="0 0 400 225"
      role="img"
      aria-label="Solda bir kare ve içine teğet çizilmiş daire; dairenin alanı karenin alanının pi bölü 4'üdür. Sağda eş merkezli üç daireden oluşan hedef tahtası; iki daire arasındaki halkanın alanı pi çarpı r2 kare eksi r1 karedir"
    >
      <rect x="20" y="20" width="160" height="160" fill="none" stroke={INK} strokeWidth="1.8" />
      <circle cx="100" cy="100" r="80" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="1.8" />
      <line x1="100" y1="100" x2="180" y2="100" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
      <text x="134" y="94" fontSize="12" fontWeight="700" fill={INK}>r</text>
      <text x="92" y="200" fontSize="12" fill={INK}>2r</text>
      <text x="62" y="218" fontSize="12" fontWeight="700" fill={ACCENT}>daire / kare = π/4</text>

      <circle cx="300" cy="100" r="90" fill="#ffffff" stroke={INK} strokeWidth="1.6" />
      <circle cx="300" cy="100" r="60" fill={ACCENT_SOFT} stroke={INK} strokeWidth="1.6" />
      <circle cx="300" cy="100" r="30" fill="#ffffff" stroke={INK} strokeWidth="1.6" />
      <circle cx="300" cy="100" r="2.5" fill={INK} />
      <line x1="300" y1="100" x2="330" y2="100" stroke={INK} strokeWidth="1.2" />
      <line x1="300" y1="100" x2="300" y2="40" stroke={INK} strokeWidth="1.2" />
      <text x="308" y="94" fontSize="11" fontWeight="700" fill={INK}>r₁</text>
      <text x="304" y="66" fontSize="11" fontWeight="700" fill={INK}>r₂</text>
      <text x="252" y="218" fontSize="12" fontWeight="700" fill={ACCENT}>halka = π(r₂² − r₁²)</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlBolgeler — three squares of side 100.
// Panel 1 (15..115): quarter circle r = 50 at corner (15,115).
// Panel 2 (135..235): strip of height 25 along the bottom side.
// Panel 3 (255..355): rhombus through the side midpoints = points closer to
// the centre than to every vertex.
// ---------------------------------------------------------------------------
export function GeoOlBolgeler() {
  return (
    <svg
      viewBox="0 0 370 160"
      role="img"
      aria-label="Üç kare. Birincide bir köşeye uzaklığı r'den az olan noktalar o köşede çeyrek daire oluşturur. İkincide bir kenara uzaklığı d'den az olan noktalar o kenar boyunca bir şerit oluşturur. Üçüncüde merkeze, köşelerin hepsinden daha yakın olan noktalar, kenarların orta noktalarını birleştiren kareyi oluşturur"
    >
      <rect x="15" y="15" width="100" height="100" fill="none" stroke={INK} strokeWidth="1.6" />
      <path d="M15,115 L65,115 A50,50 0 0 0 15,65 Z" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="1.6" />
      <text x="22" y="108" fontSize="11" fontWeight="700" fill={ACCENT}>r</text>

      <rect x="135" y="15" width="100" height="100" fill="none" stroke={INK} strokeWidth="1.6" />
      <rect x="135" y="90" width="100" height="25" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="1.6" />
      <text x="240" y="107" fontSize="11" fontWeight="700" fill={ACCENT}>d</text>

      <rect x="255" y="15" width="100" height="100" fill="none" stroke={INK} strokeWidth="1.6" />
      <polygon points="305,15 355,65 305,115 255,65" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="1.6" />
      <circle cx="305" cy="65" r="3" fill={INK} />
      <text x="309" y="62" fontSize="10" fontWeight="700" fill={INK}>O</text>

      <text x="14" y="138" fontSize="10.5" fill={INK}>köşeye uzaklık &lt; r</text>
      <text x="134" y="138" fontSize="10.5" fill={INK}>kenara uzaklık &lt; d</text>
      <text x="250" y="138" fontSize="10.5" fill={INK}>O'ya köşelerden yakın</text>
      <text x="290" y="153" fontSize="10.5" fontWeight="700" fill={ACCENT}>oran = 1/2</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlBenzerUcgen — A(180,20), B(40,200), C(320,200). D and E at 2/3 of the
// way from A: D(86.67,140), E(273.33,140), DE ∥ BC. Triangle ADE soft ink,
// trapezoid DBCE soft accent.
// ---------------------------------------------------------------------------
export function GeoOlBenzerUcgen() {
  return (
    <svg
      viewBox="0 0 360 235"
      role="img"
      aria-label="ABC üçgeninde BC'ye paralel DE doğru parçası. ADE üçgeni ABC'ye benzerdir; benzerlik oranı k ise alanlar oranı k karedir. Altta DBCE yamuğu kalır"
    >
      <polygon points="86.67,140 273.33,140 320,200 40,200" fill={ACCENT_SOFT} />
      <polygon points="180,20 86.67,140 273.33,140" fill={INK_SOFT} />
      <polygon points="180,20 40,200 320,200" fill="none" stroke={INK} strokeWidth="1.8" />
      <line x1="86.67" y1="140" x2="273.33" y2="140" stroke={ACCENT} strokeWidth="2" />
      <text x="174" y="14" fontSize="13" fontWeight="700" fill={INK}>A</text>
      <text x="26" y="214" fontSize="13" fontWeight="700" fill={INK}>B</text>
      <text x="324" y="214" fontSize="13" fontWeight="700" fill={INK}>C</text>
      <text x="68" y="140" fontSize="13" fontWeight="700" fill={ACCENT}>D</text>
      <text x="280" y="140" fontSize="13" fontWeight="700" fill={ACCENT}>E</text>
      <text x="150" y="110" fontSize="11" fill={INK}>alan: k²·S</text>
      <text x="134" y="180" fontSize="11" fill={ACCENT}>alan: (1 − k²)·S</text>
      <text x="200" y="232" fontSize="10.5" fill={MUTED}>|AD| = k·|AB|, S = Alan(ABC)</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlCark — spinner centre (110,110), r = 90, pointer at the top.
// Sector "1": 180° (right half, from -90° to 90°).
// Sector "2": 120° (90° to 210°), end point (32.06, 65).
// Sector "3": 60° (210° to 270°).
// ---------------------------------------------------------------------------
export function GeoOlCark() {
  return (
    <svg
      viewBox="0 0 360 215"
      role="img"
      aria-label="Üç dilimli çark: 1 yazan dilimin merkez açısı 180 derece, 2 yazanın 120 derece, 3 yazanın 60 derece. Olasılıklar sırasıyla 1 bölü 2, 1 bölü 3 ve 1 bölü 6'dır; dilimler eş olasılıklı değildir"
    >
      <path d="M110,110 L110,20 A90,90 0 0 1 110,200 Z" fill={INK_SOFT} stroke={INK} strokeWidth="1.6" />
      <path d="M110,110 L110,200 A90,90 0 0 1 32.06,65 Z" fill={ACCENT_SOFT} stroke={INK} strokeWidth="1.6" />
      <path d="M110,110 L32.06,65 A90,90 0 0 1 110,20 Z" fill={ACCENT_MID} stroke={INK} strokeWidth="1.6" />
      <polygon points="104,4 116,4 110,18" fill={INK} />
      <circle cx="110" cy="110" r="3" fill={INK} />
      <text x="150" y="105" fontSize="18" fontWeight="700" fill={INK}>1</text>
      <text x="142" y="124" fontSize="10.5" fill={MUTED}>180°</text>
      <text x="62" y="140" fontSize="18" fontWeight="700" fill={INK}>2</text>
      <text x="56" y="158" fontSize="10.5" fill={MUTED}>120°</text>
      <text x="80" y="68" fontSize="18" fontWeight="700" fill={INK}>3</text>
      <text x="76" y="84" fontSize="10.5" fill={MUTED}>60°</text>

      <text x="225" y="70" fontSize="12" fontWeight="700" fill={INK}>P(1) = 180/360 = 1/2</text>
      <text x="225" y="100" fontSize="12" fontWeight="700" fill={INK}>P(2) = 120/360 = 1/3</text>
      <text x="225" y="130" fontSize="12" fontWeight="700" fill={INK}>P(3) = 60/360 = 1/6</text>
      <text x="225" y="160" fontSize="11" fill={ACCENT}>toplam: 1</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlBoyaliKup — isometric 3×3×3 cube. A point (x, y, z), 0 ≤ x, y, z ≤ 3,
// maps to X = 180 + (x − y)·34.64, Y = 130 + (x + y)·20 − z·40.
// Visible faces: top (z = 3), right (x = 3), left (y = 3).
// Highlighted: corner cube at (3,3,3) — 3 squares; edge cube on the vertical
// edge x = y = 3, 1 ≤ z ≤ 2 — 2 squares; centre of the top face — 1 square.
// ---------------------------------------------------------------------------
function iso(x: number, y: number, z: number): string {
  const X = 180 + (x - y) * 34.64;
  const Y = 130 + (x + y) * 20 - z * 40;
  return `${X.toFixed(2)},${Y.toFixed(2)}`;
}

function topCell(i: number, j: number) {
  return [iso(i, j, 3), iso(i + 1, j, 3), iso(i + 1, j + 1, 3), iso(i, j + 1, 3)].join(" ");
}
function rightCell(j: number, k: number) {
  return [iso(3, j, k), iso(3, j + 1, k), iso(3, j + 1, k + 1), iso(3, j, k + 1)].join(" ");
}
function leftCell(i: number, k: number) {
  return [iso(i, 3, k), iso(i + 1, 3, k), iso(i + 1, 3, k + 1), iso(i, 3, k + 1)].join(" ");
}

export function GeoOlBoyaliKup() {
  const cells = [0, 1, 2];
  const fillTop = (i: number, j: number) => (i === 2 && j === 2 ? ACCENT : i === 1 && j === 1 ? ACCENT_SOFT : "#ffffff");
  const fillRight = (j: number, k: number) => (j === 2 && k === 2 ? ACCENT : j === 2 && k === 1 ? ACCENT_MID : "#ffffff");
  const fillLeft = (i: number, k: number) => (i === 2 && k === 2 ? ACCENT : i === 2 && k === 1 ? ACCENT_MID : "#ffffff");
  return (
    <svg
      viewBox="0 0 360 305"
      role="img"
      aria-label="Dış yüzeyi boyanmış 3'e 3'e 3 küp. Köşedeki birim küpün 3 yüzü, köşeler arasındaki ayrıt küpünün 2 yüzü, yüzün ortasındaki birim küpün 1 yüzü boyalıdır; en içteki küpün hiç boyalı yüzü yoktur"
    >
      {cells.map((i) =>
        cells.map((j) => (
          <polygon key={`t${i}${j}`} points={topCell(i, j)} fill={fillTop(i, j)} stroke={INK} strokeWidth="1.2" />
        )),
      )}
      {cells.map((j) =>
        cells.map((k) => (
          <polygon key={`r${j}${k}`} points={rightCell(j, k)} fill={fillRight(j, k)} stroke={INK} strokeWidth="1.2" />
        )),
      )}
      {cells.map((i) =>
        cells.map((k) => (
          <polygon key={`l${i}${k}`} points={leftCell(i, k)} fill={fillLeft(i, k)} stroke={INK} strokeWidth="1.2" />
        )),
      )}
      <rect x="14" y="268" width="12" height="12" fill={ACCENT} />
      <text x="30" y="278" fontSize="11" fill={INK}>köşe: 3 yüz</text>
      <rect x="120" y="268" width="12" height="12" fill={ACCENT_MID} />
      <text x="136" y="278" fontSize="11" fill={INK}>ayrıt: 2 yüz</text>
      <rect x="230" y="268" width="12" height="12" fill={ACCENT_SOFT} stroke={INK} strokeWidth="0.6" />
      <text x="246" y="278" fontSize="11" fill={INK}>yüz ortası: 1 yüz</text>
      <text x="96" y="298" fontSize="10.5" fill={MUTED}>en içteki küp görünmez: 0 yüz</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlPrizma — triangular prism. Bottom A(50,190), B(170,215), C(230,170);
// top D(50,60), E(170,85), F(230,40). Hidden edge: AC (dashed).
// Face ABED shaded; the triple A, B, E marked in accent.
// ---------------------------------------------------------------------------
export function GeoOlPrizma() {
  const pts: [string, number, number, number, number, boolean][] = [
    ["A", 50, 190, -16, 6, true],
    ["B", 170, 215, -4, 18, true],
    ["C", 230, 170, 8, 6, false],
    ["D", 50, 60, -16, 0, false],
    ["E", 170, 85, -4, 20, true],
    ["F", 230, 40, 8, 0, false],
  ];
  return (
    <svg
      viewBox="0 0 300 235"
      role="img"
      aria-label="Üçgen prizma: alt taban ABC, üst taban DEF. Yan yüzlerden ABED taralı; A, B ve E köşeleri bu yüz üzerindedir. Prizmanın 2 üçgen ve 3 dikdörtgen yüzü vardır"
    >
      <polygon points="50,190 170,215 170,85 50,60" fill={ACCENT_SOFT} />
      <line x1="50" y1="190" x2="230" y2="170" stroke={MUTED} strokeWidth="1.4" strokeDasharray="5 4" />
      <polyline points="50,190 170,215 230,170 230,40 50,60 50,190" fill="none" stroke={INK} strokeWidth="1.8" />
      <polyline points="50,60 170,85 230,40" fill="none" stroke={INK} strokeWidth="1.8" />
      <line x1="170" y1="85" x2="170" y2="215" stroke={INK} strokeWidth="1.8" />
      {pts.map(([label, x, y, dx, dy, hot]) => (
        <g key={label}>
          <circle cx={x} cy={y} r={hot ? 5 : 3.5} fill={hot ? ACCENT : INK} />
          <text x={x + dx} y={y + dy} fontSize="13" fontWeight="700" fill={hot ? ACCENT : INK}>{label}</text>
        </g>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlKareBolge — x, y in [0, 2], 80 px per unit, origin (50,190).
// Line x + y = 1 from (130,190) to (50,110); region x + y < 1 shaded.
// ---------------------------------------------------------------------------
export function GeoOlKareBolge() {
  return (
    <svg
      viewBox="0 0 260 225"
      role="img"
      aria-label="Kenarı 2 olan kare örnek uzay: x ve y 0 ile 2 arasında. x artı y eşittir 1 doğrusunun altında kalan küçük üçgen, x artı y küçüktür 1 bölgesidir; alanı 1 bölü 2, karenin alanı 4'tür"
    >
      <rect x="50" y="30" width="160" height="160" fill="none" stroke={INK} strokeWidth="1.6" />
      <polygon points="50,190 130,190 50,110" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="1.6" />
      <line x1="40" y1="190" x2="230" y2="190" stroke={MUTED} strokeWidth="1.2" />
      <line x1="50" y1="200" x2="50" y2="15" stroke={MUTED} strokeWidth="1.2" />
      <text x="234" y="194" fontSize="12" fontWeight="700" fill={INK}>x</text>
      <text x="46" y="12" fontSize="12" fontWeight="700" fill={INK}>y</text>
      <text x="38" y="204" fontSize="11" fill={MUTED}>0</text>
      <text x="126" y="206" fontSize="11" fill={MUTED}>1</text>
      <text x="206" y="206" fontSize="11" fill={MUTED}>2</text>
      <text x="38" y="114" fontSize="11" fill={MUTED}>1</text>
      <text x="38" y="34" fontSize="11" fill={MUTED}>2</text>
      <text x="96" y="132" fontSize="11" fontWeight="700" fill={ACCENT}>x + y = 1</text>
      <text x="60" y="180" fontSize="10.5" fill={ACCENT}>x + y &lt; 1</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoOlBulusma — arrival minutes x (Ali), y (Bora) in [0, 40], 4 px per unit,
// origin (50,190). Band |x − y| ≤ 10:
// (0,0) (10,0) (40,30) (40,40) (30,40) (0,10)
// → (50,190) (90,190) (210,70) (210,30) (170,30) (50,150).
// The two corner triangles (legs 30) are the "no meeting" region.
// ---------------------------------------------------------------------------
export function GeoOlBulusma() {
  return (
    <svg
      viewBox="0 0 270 235"
      role="img"
      aria-label="Kenarı 40 dakika olan kare: yatay eksen Ali'nin, dikey eksen Bora'nın geliş dakikası. Köşegen boyunca uzanan taralı şerit, iki geliş arasındaki farkın en çok 10 dakika olduğu bölgedir. Sağ alt ve sol üst köşedeki dik kenarları 30 olan iki üçgen buluşmanın olmadığı bölgedir"
    >
      <rect x="50" y="30" width="160" height="160" fill="none" stroke={INK} strokeWidth="1.6" />
      <polygon points="50,190 90,190 210,70 210,30 170,30 50,150" fill={ACCENT_SOFT} stroke={ACCENT} strokeWidth="1.6" />
      <line x1="50" y1="190" x2="210" y2="30" stroke={MUTED} strokeWidth="1" strokeDasharray="4 3" />
      <text x="145" y="182" fontSize="11" fill={INK}>buluşma yok</text>
      <text x="56" y="50" fontSize="11" fill={INK}>buluşma yok</text>
      <text x="38" y="204" fontSize="11" fill={MUTED}>0</text>
      <text x="84" y="204" fontSize="11" fill={MUTED}>10</text>
      <text x="202" y="204" fontSize="11" fill={MUTED}>40</text>
      <text x="30" y="154" fontSize="11" fill={MUTED}>10</text>
      <text x="30" y="34" fontSize="11" fill={MUTED}>40</text>
      <text x="96" y="222" fontSize="11" fontWeight="700" fill={INK}>Ali (dakika)</text>
      <text x="4" y="20" fontSize="11" fontWeight="700" fill={INK}>Bora (dakika)</text>
      <text x="118" y="126" fontSize="10.5" fontWeight="700" fill={ACCENT}>|x − y| ≤ 10</text>
    </svg>
  );
}
