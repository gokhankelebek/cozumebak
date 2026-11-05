// Figures for the TYT "Geometrik Kombinasyon" lesson.
// Conventions: text/lines dark #0e1b33, accent #e5492b, muted #8a93a6.
// All coordinates hand-computed (regular polygons: centre + r·(cos θ, sin θ),
// SVG y axis pointing down). No external libraries.

const INK = "#0e1b33";
const ACCENT = "#e5492b";
const MUTED = "#8a93a6";

function Nokta({ x, y, label, dx = 8, dy = -8, color = INK }: { x: number; y: number; label: string; dx?: number; dy?: number; color?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="4" fill={color} />
      <text x={x + dx} y={y + dy} fontSize="12" fontWeight="700" fill={color}>
        {label}
      </text>
    </g>
  );
}

// ---------------------------------------------------------------------------
// GeoKombDogrusal — 5 points, A, B, C collinear on d (y = 170); D, E off d.
// Lines: d itself (accent) + AD, AE, BD, BE, CD, CE, DE (ink) = 8 lines.
// ---------------------------------------------------------------------------
export function GeoKombDogrusal() {
  const A: [number, number] = [70, 170];
  const B: [number, number] = [160, 170];
  const Cc: [number, number] = [250, 170];
  const D: [number, number] = [115, 60];
  const E: [number, number] = [265, 72];
  const segs: [number, number][][] = [
    [A, D], [A, E], [B, D], [B, E], [Cc, D], [Cc, E], [D, E],
  ];
  return (
    <svg
      viewBox="0 0 360 215"
      role="img"
      aria-label="Beş nokta: A, B ve C aynı d doğrusu üzerinde, D ile E bu doğrunun dışında. A, B, C tek bir doğru belirler; diğer yedi doğru parçasıyla birlikte toplam sekiz doğru vardır"
    >
      <line x1="25" y1="170" x2="335" y2="170" stroke={ACCENT} strokeWidth="2.4" />
      <text x="320" y="190" fontSize="12" fontWeight="700" fill={ACCENT}>d</text>
      {segs.map(([p, q], i) => (
        <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={INK} strokeWidth="1.2" />
      ))}
      <Nokta x={A[0]} y={A[1]} label="A" dx={-6} dy={20} />
      <Nokta x={B[0]} y={B[1]} label="B" dx={-4} dy={20} />
      <Nokta x={Cc[0]} y={Cc[1]} label="C" dx={-4} dy={20} />
      <Nokta x={D[0]} y={D[1]} label="D" dx={-6} dy={-10} />
      <Nokta x={E[0]} y={E[1]} label="E" dx={6} dy={-8} />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombParalel — d1 (y = 50) with 3 points, d2 (y = 170) with 4 points.
// Highlighted: triangle K1 K2 L1 (2 from d1 + 1 from d2, accent fill) and
// quadrilateral K2 K3 L4 L3 (2 + 2), drawn dashed as a trapezoid.
// Top points x = 90, 180, 270; bottom points x = 60, 140, 220, 300.
// ---------------------------------------------------------------------------
export function GeoKombParalel() {
  const top = [90, 180, 270];
  const bot = [60, 140, 220, 300];
  return (
    <svg
      viewBox="0 0 360 215"
      role="img"
      aria-label="İki paralel doğru: üstte üç nokta, altta dört nokta. Üstten iki, alttan bir nokta seçilerek oluşan bir üçgen boyalı; her doğrudan ikişer nokta seçilerek oluşan bir dörtgen kesikli çizgiyle gösterilmiş"
    >
      <line x1="20" y1="50" x2="340" y2="50" stroke={MUTED} strokeWidth="1.6" />
      <line x1="20" y1="170" x2="340" y2="170" stroke={MUTED} strokeWidth="1.6" />
      <text x="325" y="42" fontSize="12" fontWeight="700" fill={MUTED}>d₁</text>
      <text x="325" y="192" fontSize="12" fontWeight="700" fill={MUTED}>d₂</text>
      {/* triangle: top 90, 180 + bottom 60 */}
      <polygon points="90,50 180,50 60,170" fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="1.8" />
      {/* quadrilateral: top 180, 270 + bottom 220, 300 */}
      <polygon points="180,50 270,50 300,170 220,170" fill="none" stroke={INK} strokeWidth="1.6" strokeDasharray="5 4" />
      {top.map((x, i) => (
        <Nokta key={`t${i}`} x={x} y={50} label={`K${i + 1}`} dx={-8} dy={-10} />
      ))}
      {bot.map((x, i) => (
        <Nokta key={`b${i}`} x={x} y={170} label={`L${i + 1}`} dx={-8} dy={22} />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombKosegen — regular hexagon, centre (180, 112), r = 90.
// Vertices (θ = −90° + 60°k): A(180,22) B(257.9,67) C(257.9,157)
// D(180,202) E(102.1,157) F(102.1,67). Diagonals from A: AC, AD, AE (accent);
// the other six diagonals muted and dashed.
// ---------------------------------------------------------------------------
export function GeoKombKosegen() {
  const V: [number, number][] = [
    [180, 22], [257.9, 67], [257.9, 157], [180, 202], [102.1, 157], [102.1, 67],
  ];
  const names = ["A", "B", "C", "D", "E", "F"];
  const offs: [number, number][] = [[-4, -9], [8, -4], [8, 12], [-4, 20], [-18, 12], [-18, -4]];
  const fromA = [2, 3, 4];
  const others: [number, number][] = [[1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 5]];
  return (
    <svg
      viewBox="0 0 360 222"
      role="img"
      aria-label="Düzgün altıgen ABCDEF. A köşesinden çizilen üç köşegen (AC, AD, AE) vurgulu; diğer altı köşegen kesikli. Toplam dokuz köşegen vardır"
    >
      {others.map(([i, j], k) => (
        <line key={k} x1={V[i][0]} y1={V[i][1]} x2={V[j][0]} y2={V[j][1]} stroke={MUTED} strokeWidth="1.2" strokeDasharray="4 4" />
      ))}
      {fromA.map((j) => (
        <line key={j} x1={V[0][0]} y1={V[0][1]} x2={V[j][0]} y2={V[j][1]} stroke={ACCENT} strokeWidth="2" />
      ))}
      <polygon points={V.map((p) => p.join(",")).join(" ")} fill="none" stroke={INK} strokeWidth="2" />
      {V.map(([x, y], i) => (
        <Nokta key={i} x={x} y={y} label={names[i]} dx={offs[i][0]} dy={offs[i][1]} color={i === 0 ? ACCENT : INK} />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombBolge — three lines in general position, 7 regions.
// Triangle T1(180,50) T2(110,170) T3(250,170). Line T2T3: y = 170.
// Line T1T2 extended: (204.5,8)–(82,218); line T1T3: (155.5,8)–(278,218).
// Region labels placed by checking sides of each line (see lesson notes).
// ---------------------------------------------------------------------------
export function GeoKombBolge() {
  const labels: [number, number, string][] = [
    [180, 145, "1"], [180, 32, "2"], [80, 100, "3"], [280, 100, "4"],
    [180, 205, "5"], [45, 205, "6"], [315, 205, "7"],
  ];
  return (
    <svg
      viewBox="0 0 360 225"
      role="img"
      aria-label="Herhangi ikisi paralel olmayan ve herhangi üçü aynı noktadan geçmeyen üç doğru düzlemi yedi bölgeye ayırır; bölgeler 1'den 7'ye numaralanmış"
    >
      <line x1="20" y1="170" x2="340" y2="170" stroke={INK} strokeWidth="1.8" />
      <line x1="204.5" y1="8" x2="82" y2="218" stroke={INK} strokeWidth="1.8" />
      <line x1="155.5" y1="8" x2="278" y2="218" stroke={INK} strokeWidth="1.8" />
      <polygon points="180,50 110,170 250,170" fill={ACCENT} fillOpacity="0.12" />
      {[[180, 50], [110, 170], [250, 170]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill={ACCENT} />
      ))}
      {labels.map(([x, y, t]) => (
        <text key={t} x={x} y={y} fontSize="14" fontWeight="700" textAnchor="middle" fill={ACCENT}>
          {t}
        </text>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombIzgara — 2×3 board of unit squares (cell = 60). Horizontal lines
// y = 40, 100, 160; vertical lines x = 90, 150, 210, 270. Chosen rectangle:
// vertical lines x = 150, 270 and horizontal lines y = 40, 100 (accent).
// ---------------------------------------------------------------------------
export function GeoKombIzgara() {
  const hs = [40, 100, 160];
  const vs = [90, 150, 210, 270];
  return (
    <svg
      viewBox="0 0 360 215"
      role="img"
      aria-label="2 satır 3 sütunluk birim kare ızgarası: 3 yatay ve 4 dikey çizgi var. 2 yatay ve 2 dikey çizgi seçilince bir dikdörtgen belirleniyor; seçilen çizgiler ve dikdörtgen vurgulu"
    >
      <rect x="150" y="40" width="120" height="60" fill={ACCENT} fillOpacity="0.15" />
      {hs.map((y, i) => (
        <line key={`h${i}`} x1="70" y1={y} x2="290" y2={y} stroke={y === 160 ? INK : ACCENT} strokeWidth={y === 160 ? 1.4 : 2.4} />
      ))}
      {vs.map((x, i) => (
        <line key={`v${i}`} x1={x} y1="25" x2={x} y2="175" stroke={x === 150 || x === 270 ? ACCENT : INK} strokeWidth={x === 150 || x === 270 ? 2.4 : 1.4} />
      ))}
      {hs.map((y, i) => (
        <text key={`hl${i}`} x="44" y={y + 4} fontSize="11" fill={MUTED}>{`y${i + 1}`}</text>
      ))}
      {vs.map((x, i) => (
        <text key={`vl${i}`} x={x - 6} y="196" fontSize="11" fill={MUTED}>{`x${i + 1}`}</text>
      ))}
      <text x="300" y="70" fontSize="11" fill={ACCENT}>2 yatay</text>
      <text x="300" y="84" fontSize="11" fill={ACCENT}>+ 2 dikey</text>
      <text x="300" y="98" fontSize="11" fill={ACCENT}>çizgi</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombKiris — left: 4 points on a circle (centre (100,110), r = 80) at
// θ = −110°, −10°, 80°, 170°: P(72.6,34.8) Q(178.8,96.1) R(113.9,188.8)
// S(21.2,123.9); chords PR and QS cross at (93.1,111.2).
// Right: regular pentagon on circle centre (270,110), r = 80; all 10 chords;
// the 5 interior crossings (one per 4-point choice) marked.
// ---------------------------------------------------------------------------
export function GeoKombKiris() {
  const Q4: [number, number][] = [[72.6, 34.8], [178.8, 96.1], [113.9, 188.8], [21.2, 123.9]];
  const P5: [number, number][] = [[270, 30], [346.1, 85.3], [317, 174.7], [223, 174.7], [193.9, 85.3]];
  const cross5: [number, number][] = [[299.1, 119.5], [288, 85.3], [252, 85.3], [240.9, 119.5], [270, 140.6]];
  const chords5: [number, number][] = [];
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) chords5.push([i, j]);
  return (
    <svg
      viewBox="0 0 370 225"
      role="img"
      aria-label="Solda çember üzerinde dört nokta: dörtgenin iki köşegeni olan kirişler çemberin içinde tek bir noktada kesişiyor. Sağda çember üzerinde beş nokta ve on kiriş: içte beş kesişim noktası var, her biri dört noktalı bir seçime karşılık gelir"
    >
      <circle cx="100" cy="110" r="80" fill="none" stroke={MUTED} strokeWidth="1.4" />
      <polygon points={Q4.map((p) => p.join(",")).join(" ")} fill="none" stroke={MUTED} strokeWidth="1.2" />
      <line x1={Q4[0][0]} y1={Q4[0][1]} x2={Q4[2][0]} y2={Q4[2][1]} stroke={INK} strokeWidth="1.8" />
      <line x1={Q4[1][0]} y1={Q4[1][1]} x2={Q4[3][0]} y2={Q4[3][1]} stroke={INK} strokeWidth="1.8" />
      {Q4.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={INK} />
      ))}
      <circle cx="93.1" cy="111.2" r="5" fill={ACCENT} />
      <text x="100" y="216" fontSize="11" textAnchor="middle" fill={MUTED}>4 nokta → 1 kesişim</text>

      <circle cx="270" cy="110" r="80" fill="none" stroke={MUTED} strokeWidth="1.4" />
      {chords5.map(([i, j], k) => (
        <line key={k} x1={P5[i][0]} y1={P5[i][1]} x2={P5[j][0]} y2={P5[j][1]} stroke={INK} strokeWidth="1.2" />
      ))}
      {P5.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={INK} />
      ))}
      {cross5.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="4.5" fill={ACCENT} />
      ))}
      <text x="270" y="216" fontSize="11" textAnchor="middle" fill={MUTED}>5 nokta → 10 kiriş, 5 kesişim</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombAltigen — two regular hexagons, centres (90,105) and (270,105),
// r = 75, vertices θ = −90° + 60°k. Left: right triangle A, D, B on the
// diameter AD (Thales). Right: equilateral triangle A, C, E.
// ---------------------------------------------------------------------------
export function GeoKombAltigen() {
  const L: [number, number][] = [[90, 30], [155, 67.5], [155, 142.5], [90, 180], [25, 142.5], [25, 67.5]];
  const R: [number, number][] = [[270, 30], [335, 67.5], [335, 142.5], [270, 180], [205, 142.5], [205, 67.5]];
  const names = ["A", "B", "C", "D", "E", "F"];
  const offs: [number, number][] = [[-4, -9], [8, -2], [8, 12], [-4, 20], [-18, 12], [-18, -2]];
  const pts = (P: [number, number][]) => P.map((p) => p.join(",")).join(" ");
  return (
    <svg
      viewBox="0 0 360 225"
      role="img"
      aria-label="İki düzgün altıgen. Solda bir kenarı AD çapı olan ABD dik üçgeni; sağda birer köşe atlanarak çizilen ACE eşkenar üçgeni"
    >
      <circle cx="90" cy="105" r="75" fill="none" stroke={MUTED} strokeWidth="1" strokeDasharray="3 4" />
      <polygon points={pts(L)} fill="none" stroke={INK} strokeWidth="1.8" />
      <polygon points={`${L[0].join(",")} ${L[3].join(",")} ${L[1].join(",")}`} fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="2" />
      <line x1={L[0][0]} y1={L[0][1]} x2={L[3][0]} y2={L[3][1]} stroke={ACCENT} strokeWidth="2.6" />
      {L.map(([x, y], i) => (
        <Nokta key={`l${i}`} x={x} y={y} label={names[i]} dx={offs[i][0]} dy={offs[i][1]} />
      ))}
      <text x="90" y="218" fontSize="11" textAnchor="middle" fill={MUTED}>çap üzerinde dik üçgen</text>

      <polygon points={pts(R)} fill="none" stroke={INK} strokeWidth="1.8" />
      <polygon points={`${R[0].join(",")} ${R[2].join(",")} ${R[4].join(",")}`} fill={ACCENT} fillOpacity="0.15" stroke={ACCENT} strokeWidth="2" />
      {R.map(([x, y], i) => (
        <Nokta key={`r${i}`} x={x} y={y} label={names[i]} dx={offs[i][0]} dy={offs[i][1]} />
      ))}
      <text x="270" y="218" fontSize="11" textAnchor="middle" fill={MUTED}>eşkenar üçgen</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombKup — oblique cube drawings. Front face A(60,200) B(180,200)
// C(180,80) D(60,80); back face shifted by (+50,−40): E(110,160) F(230,160)
// G(230,40) H(110,40). Hidden edges (at E) dashed.
// Left: face diagonal BD (ink) and space diagonal AG (accent); legends below.
// Right (shifted +190): diagonal plane D C F E (accent) and corner triangle
// A C F cut off around B (muted).
// ---------------------------------------------------------------------------
function KupIskelet({ ox }: { ox: number }) {
  const P = {
    A: [60 + ox, 200], B: [180 + ox, 200], C: [180 + ox, 80], D: [60 + ox, 80],
    E: [110 + ox, 160], F: [230 + ox, 160], G: [230 + ox, 40], H: [110 + ox, 40],
  } as Record<string, number[]>;
  const solid = ["AB", "BC", "CD", "DA", "BF", "FG", "GH", "HD", "CG"];
  const hidden = ["AE", "EF", "EH"];
  return (
    <g>
      {solid.map((s) => (
        <line key={s} x1={P[s[0]][0]} y1={P[s[0]][1]} x2={P[s[1]][0]} y2={P[s[1]][1]} stroke={INK} strokeWidth="1.6" />
      ))}
      {hidden.map((s) => (
        <line key={s} x1={P[s[0]][0]} y1={P[s[0]][1]} x2={P[s[1]][0]} y2={P[s[1]][1]} stroke={MUTED} strokeWidth="1.3" strokeDasharray="4 4" />
      ))}
      {Object.entries(P).map(([k, [x, y]]) => {
        const dx = k === "A" || k === "D" || k === "E" || k === "H" || k === "C" ? -14 : 6;
        const dy = k === "A" || k === "B" ? 16 : k === "G" || k === "H" || k === "C" ? -6 : k === "E" ? 14 : -4;
        return (
          <g key={k}>
            <circle cx={x} cy={y} r="3" fill={INK} />
            <text x={x + dx} y={y + dy} fontSize="11" fontWeight="700" fill={INK}>{k}</text>
          </g>
        );
      })}
    </g>
  );
}

export function GeoKombKup() {
  return (
    <svg
      viewBox="0 0 440 262"
      role="img"
      aria-label="İki küp çizimi. Solda ön yüzde BD yüz köşegeni ve küpün içinden geçen AG cisim köşegeni. Sağda karşılıklı iki ayrıttan geçen DCFE köşegen düzlemi ve B köşesinin üç komşusundan geçen ACF üçgeni"
    >
      <KupIskelet ox={0} />
      <line x1="180" y1="200" x2="60" y2="80" stroke={INK} strokeWidth="2.4" />
      <line x1="60" y1="200" x2="230" y2="40" stroke={ACCENT} strokeWidth="2.6" />

      <polygon points="250,80 370,80 420,160 300,160" fill={ACCENT} fillOpacity="0.18" stroke={ACCENT} strokeWidth="1.8" />
      <polygon points="250,200 370,80 420,160" fill={MUTED} fillOpacity="0.25" stroke={MUTED} strokeWidth="1.6" />
      <KupIskelet ox={190} />

      {/* legends under each drawing */}
      <line x1="40" y1="232" x2="62" y2="232" stroke={INK} strokeWidth="2.4" />
      <text x="68" y="236" fontSize="11" fill={INK}>yüz köşegeni BD</text>
      <line x1="40" y1="250" x2="62" y2="250" stroke={ACCENT} strokeWidth="2.6" />
      <text x="68" y="254" fontSize="11" fill={ACCENT}>cisim köşegeni AG</text>
      <rect x="240" y="225" width="22" height="12" fill={ACCENT} fillOpacity="0.18" stroke={ACCENT} strokeWidth="1.4" />
      <text x="268" y="236" fontSize="11" fill={INK}>köşegen düzlemi DCFE</text>
      <rect x="240" y="243" width="22" height="12" fill={MUTED} fillOpacity="0.25" stroke={MUTED} strokeWidth="1.4" />
      <text x="268" y="254" fontSize="11" fill={INK}>ACF üçgeni</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GeoKombBoyaliKup — isometric 6×6×6 painted cube. 3D point (x, y, z) maps to
// X = 130 + (x − y)·s·0.866, Y = 130 + (x + y)·s·0.5 − z·s with s = 20.
// Visible faces: top z = 6, right x = 6, left y = 6. Each visible cell belongs
// to the unit cube (a, b, c); its painted-face count = number of coordinates
// equal to 0 or 5. Fill: 3 → accent, 2 → accent 45 %, 1 → accent 12 %.
// ---------------------------------------------------------------------------
export function GeoKombBoyaliKup() {
  const n = 6;
  const s = 20;
  const pr = (x: number, y: number, z: number) =>
    `${(130 + (x - y) * s * 0.866).toFixed(1)},${(130 + (x + y) * s * 0.5 - z * s).toFixed(1)}`;
  const kat = (a: number, b: number, c: number) =>
    [a, b, c].filter((v) => v === 0 || v === n - 1).length;
  const op = (k: number) => (k === 3 ? 1 : k === 2 ? 0.45 : 0.12);
  const cells: { pts: string; k: number }[] = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      cells.push({ pts: [pr(i, j, n), pr(i + 1, j, n), pr(i + 1, j + 1, n), pr(i, j + 1, n)].join(" "), k: kat(i, j, n - 1) });
      cells.push({ pts: [pr(n, i, j), pr(n, i + 1, j), pr(n, i + 1, j + 1), pr(n, i, j + 1)].join(" "), k: kat(n - 1, i, j) });
      cells.push({ pts: [pr(i, n, j), pr(i + 1, n, j), pr(i + 1, n, j + 1), pr(i, n, j + 1)].join(" "), k: kat(i, n - 1, j) });
    }
  const legend: [number, string, string][] = [
    [3, "3 yüzü boyalı", "köşeler: 8"],
    [2, "2 yüzü boyalı", "ayrıtlar: 12·(n−2)"],
    [1, "1 yüzü boyalı", "yüzler: 6·(n−2)²"],
  ];
  return (
    <svg
      viewBox="0 0 400 262"
      role="img"
      aria-label="Dış yüzeyi boyanmış 6'ya 6'ya 6'lık küp. Köşedeki birim küplerin 3 yüzü, ayrıtlar üzerindeki köşe olmayan birim küplerin 2 yüzü, yüzlerin ortasındaki birim küplerin 1 yüzü boyalıdır; içteki 4'e 4'e 4'lük küp boyasızdır"
    >
      {cells.map((c, i) => (
        <polygon key={i} points={c.pts} fill={ACCENT} fillOpacity={op(c.k)} stroke={INK} strokeWidth="0.8" strokeLinejoin="round" />
      ))}
      {legend.map(([k, t1, t2], i) => (
        <g key={k}>
          <rect x="262" y={40 + i * 46} width="18" height="18" fill={ACCENT} fillOpacity={op(k)} stroke={INK} strokeWidth="0.8" />
          <text x="288" y={52 + i * 46} fontSize="11" fontWeight="700" fill={INK}>{t1}</text>
          <text x="288" y={66 + i * 46} fontSize="10.5" fill={MUTED}>{t2}</text>
        </g>
      ))}
      <rect x="262" y="178" width="18" height="18" fill="#fff" stroke={MUTED} strokeWidth="0.8" strokeDasharray="3 2" />
      <text x="288" y="190" fontSize="11" fontWeight="700" fill={INK}>boyasız (içte)</text>
      <text x="288" y="204" fontSize="10.5" fill={MUTED}>(n−2)³</text>
    </svg>
  );
}
