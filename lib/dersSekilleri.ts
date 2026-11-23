import type { Sekil } from "@/lib/sorular/sekil";

// ─────────────────────────────────────────────────────────────────────────────
// Lesson figures (konu anlatımı) drawn with the quiz figure engine, so lessons
// and questions share one house style. components/figures/*Fig.tsx wrap these
// specs under their old export names; the MDX pages are unchanged.
//
// Figures carry no prose: explanations live in the <Altyazi> caption. Every
// spec here is listed on /dev/sekiller with the checker's findings.
// ─────────────────────────────────────────────────────────────────────────────

const DERS: [number, number] = [320, 230];
const EKSENLI: [number, number] = [290, 270];

// Shared by the TYT and AYT line lessons: the slope triangle of A(1, 2)–B(4, 8).
const EGIM: Sekil = {
  aciklama: "A(1, 2) ve B(4, 8) noktalarından geçen doğru; kesik çizgili eğim üçgeninde Δx = 3 ve Δy = 6",
  boyut: EKSENLI,
  eksen: { x: [-0.9, 5.6], y: [-0.9, 9.4] },
  noktalar: { A: [1, 2], B: [4, 8], C: [4, 2], P1: [0.4, 0.8], P2: [4.5, 9] },
  dogrular: [{ p: ["P1", "P2"] }, { p: ["A", "C"], kesik: true }, { p: ["C", "B"], kesik: true }],
  dikler: [["A", "C", "B"]],
  kenarlar: [
    { p: ["A", "C"], metin: "Δx", vurgu: true, ic: true },
    { p: ["C", "B"], metin: "Δy", vurgu: true },
  ],
  isaretli: ["A", "B"],
  etiketMetni: { A: "A(1, 2)", B: "B(4, 8)" },
  etiketYonu: { A: 305 },
  gizli: ["C", "P1", "P2"],
};

// ── Graph helpers ───────────────────────────────────────────────────────────
const parabol = (x: number) => x * x - 4 * x + 3;
const kubik = (x: number) => x ** 3 - 6 * x ** 2 + 9 * x + 1;
const alanF = (x: number) => 0.15 * x * x + 1;
// Left-endpoint Riemann strips under alanF on [1.2, 4.6]: corner points and edges.
const SERIT = { a: 1.2, b: 4.6, n: 4 };
const seritNoktalari: Record<string, [number, number]> = {};
const seritKenarlari: { p: [string, string]; kesik: true }[] = [];
for (let i = 0; i < SERIT.n; i++) {
  const w = (SERIT.b - SERIT.a) / SERIT.n;
  const x0 = SERIT.a + i * w;
  const h = alanF(x0);
  seritNoktalari[`R${i}a`] = [x0, h];
  seritNoktalari[`R${i}b`] = [x0 + w, h];
  seritNoktalari[`R${i}c`] = [x0 + w, 0];
  seritKenarlari.push({ p: [`R${i}a`, `R${i}b`], kesik: true }, { p: [`R${i}b`, `R${i}c`], kesik: true });
}
// Trig graphs are drawn with y stretched by 1.6 so the wave is legible; the
// tick labels still read 1 and −1.
const TRIG_K = 1.6;
const trigTikler = {
  noktalar: {
    X1: [Math.PI / 2, 0], X2: [Math.PI, 0], X3: [(3 * Math.PI) / 2, 0], X4: [2 * Math.PI, 0],
    Y1: [0, TRIG_K], Y2: [0, -TRIG_K], Y1b: [2 * Math.PI, TRIG_K], Y2b: [2 * Math.PI, -TRIG_K],
  } as Record<string, [number, number]>,
  etiketMetni: { X1: "π/2", X2: "π", X3: "3π/2", X4: "2π", Y1: "1", Y2: "−1" },
  dogrular: [{ p: ["Y1", "Y1b"] as [string, string], kesik: true }, { p: ["Y2", "Y2b"] as [string, string], kesik: true }],
  gizli: ["Y1b", "Y2b"],
};

// ── Diagram helpers (geometric probability / combinatorics) ────────────────
type Nk = [number, number];
const kutupsal = (cx: number, cy: number, r: number, derece: number): Nk => [
  cx + r * Math.cos((derece * Math.PI) / 180),
  cy + r * Math.sin((derece * Math.PI) / 180),
];
/** Intersection of lines p1p2 and p3p4. */
function kesisim([x1, y1]: Nk, [x2, y2]: Nk, [x3, y3]: Nk, [x4, y4]: Nk): Nk {
  const d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  const a = x1 * y2 - y1 * x2;
  const b = x3 * y4 - y3 * x4;
  return [(a * (x3 - x4) - (x1 - x2) * b) / d, (a * (y3 - y4) - (y1 - y2) * b) / d];
}
/** A ring between radii r1 < r2 as one polygon (outer one way, inner back), for shading. */
function halka(on: string, merkez: Nk, r1: number, r2: number, n = 72) {
  const noktalar: Record<string, Nk> = {};
  const dis: string[] = [];
  const ic: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = (360 * i) / n;
    noktalar[`${on}d${i}`] = kutupsal(merkez[0], merkez[1], r2, t);
    noktalar[`${on}i${i}`] = kutupsal(merkez[0], merkez[1], r1, -t);
    dis.push(`${on}d${i}`);
    ic.push(`${on}i${i}`);
  }
  return { noktalar, poligon: [...dis, ...ic], adlar: [...dis, ...ic] };
}
/**
 * An n×n×n cube painted outside, in oblique view, with its unit grid on the
 * three visible faces (front, top, right). One corner, one edge and one face-
 * centre unit cube are shaded and marked with their painted-face counts.
 */
function boyaliKup(n: number): Sekil {
  const P: Record<string, [number, number, number]> = {};
  const ad = (x: number, y: number, z: number) => {
    const k = `k${x}_${y}_${z}`.replace(/\./g, "p");
    P[k] = [x, y, z];
    return k;
  };
  const dogrular: { p: [string, string] }[] = [];
  for (let i = 0; i <= n; i++) {
    dogrular.push({ p: [ad(i, 0, 0), ad(i, n, 0)] }, { p: [ad(0, i, 0), ad(n, i, 0)] }); // front
    dogrular.push({ p: [ad(i, n, 0), ad(i, n, n)] }, { p: [ad(0, n, i), ad(n, n, i)] }); // top
    dogrular.push({ p: [ad(n, i, 0), ad(n, i, n)] }, { p: [ad(n, 0, i), ad(n, n, i)] }); // right
  }
  const on = (x: number, y: number) => [ad(x, y, 0), ad(x + 1, y, 0), ad(x + 1, y + 1, 0), ad(x, y + 1, 0)];
  const ust = (x: number, z: number) => [ad(x, n, z), ad(x + 1, n, z), ad(x + 1, n, z + 1), ad(x, n, z + 1)];
  const sag = (y: number, z: number) => [ad(n, y, z), ad(n, y + 1, z), ad(n, y + 1, z + 1), ad(n, y, z + 1)];
  const m = Math.floor((n - 1) / 2);
  const boyali = [on(n - 1, n - 1), ust(n - 1, 0), sag(n - 1, 0), on(n - 2, n - 1), ust(n - 2, 0), on(m, m)];
  const yazilar = [
    { nokta: ad(n - 0.5, n - 0.5, 0), metin: "3", vurgu: true },
    { nokta: ad(n - 1.5, n - 0.5, 0), metin: "2", vurgu: true },
    { nokta: ad(m + 0.5, m + 0.5, 0), metin: "1", vurgu: true },
  ];
  return {
    aciklama: "",
    boyut: [300, 260],
    noktalar: {},
    noktalar3d: P,
    dogrular,
    boyali,
    yazilar,
    gizli: Object.keys(P),
  };
}
// Regular hexagon A–F (A at the top, clockwise) around a centre.
const altigen = (cx: number, cy: number, r: number, son = "") =>
  Object.fromEntries(["A", "B", "C", "D", "E", "F"].map((h, i) => [h + son, kutupsal(cx, cy, r, 90 - 60 * i)])) as Record<string, Nk>;
const BES = [90, 18, -54, -126, 162].map((t) => kutupsal(7.5, 0, 3, t));
const BES_KESISIM = [0, 1, 2, 3, 4].map((i) => kesisim(BES[i], BES[(i + 2) % 5], BES[(i + 1) % 5], BES[(i + 4) % 5]));
const DORT = [110, 10, -80, -170].map((t) => kutupsal(0, 0, 3, t));
const HEDEF = halka("H", [8, 2], 0.9, 1.55);
const KUP3 = boyaliKup(3);
const KUP6 = boyaliKup(6);
const kupIskelet = (dx: number, son: string) => ({
  noktalar3d: Object.fromEntries(
    Object.entries({ A: [0, 0, 0], B: [4, 0, 0], C: [4, 4, 0], D: [0, 4, 0], E: [0, 0, 4], F: [4, 0, 4], G: [4, 4, 4], H: [0, 4, 4] }).map(
      ([k, [x, y, z]]) => [k + son, [x + dx, y, z]],
    ),
  ) as Record<string, [number, number, number]>,
  dogrular: [
    ...["AB", "BC", "CD", "DA", "BF", "FG", "GH", "HD", "CG"].map((e) => ({ p: [e[0] + son, e[1] + son] as [string, string] })),
    ...["AE", "EF", "EH"].map((e) => ({ p: [e[0] + son, e[1] + son] as [string, string], kesik: true })),
  ],
  etiketMetni: Object.fromEntries("ABCDEFGH".split("").map((h) => [h + son, h])),
});
const KUP_SOL = kupIskelet(0, "");
const KUP_SAG = kupIskelet(9, "2");

// ── Venn helpers ────────────────────────────────────────────────────────────
// Two sets A, B: centres 1.8 apart, radius 2; set names outside, upper left/right.
const IKI_KUME = {
  boyut: [300, 200] as [number, number],
  noktalar: { A: [0, 0], B: [1.8, 0], RA: [2, 0], RB: [3.8, 0], YA: [-1.85, 1.75], YB: [3.65, 1.75] } as Record<string, Nk>,
  cemberler: [{ merkez: "A", nokta: "RA" }, { merkez: "B", nokta: "RB" }],
  gizli: ["A", "B", "RA", "RB", "YA", "YB"],
};
const ikiKume = (aciklama: string, bolgeler: { ic: string[]; dis?: string[] }[], adlar: [string, string] = ["A", "B"]): Sekil => ({
  aciklama,
  ...IKI_KUME,
  bolgeler,
  yazilar: [
    { nokta: "YA", metin: adlar[0] },
    { nokta: "YB", metin: adlar[1] },
  ],
});

export const DERS_SEKILLERI = {
  // ── UcgenFig ──────────────────────────────────────────────────────────────
  IcAcilar: {
    aciklama: "İç açıları A, B ve C köşelerinde işaretli bir üçgen",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [6, 0], C: [2.4, 3.6] },
    cokgenler: [["A", "B", "C"]],
    acilar: [{ p: ["C", "A", "B"] }, { p: ["A", "B", "C"] }, { p: ["B", "C", "A"] }],
  },
  DisAci: {
    aciklama: "AB kenarı B'den uzatılmış üçgen; B'deki dış açı d, A ve C iç açılarının toplamına eşit",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [5, 0], C: [2, 3.4], D: [7.6, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["B", "D"] }],
    acilar: [{ p: ["C", "A", "B"] }, { p: ["B", "C", "A"] }, { p: ["D", "B", "C"], metin: "d", vurgu: true }],
    gizli: ["D"],
  },
  Ikizkenar: {
    aciklama: "İkizkenar üçgen: AB ve AC kenarları eşit, B ve C taban açıları eşit",
    boyut: DERS,
    noktalar: { A: [3, 4.2], B: [0, 0], C: [6, 0] },
    cokgenler: [["A", "B", "C"]],
    esitler: [{ p: ["A", "B"] }, { p: ["A", "C"] }],
    acilar: [{ p: ["A", "B", "C"] }, { p: ["B", "C", "A"] }],
  },

  // ── AcilarFig ─────────────────────────────────────────────────────────────
  TumlerButunler: {
    aciklama: "Solda toplamı 90 derece olan tümler açılar α ve β, sağda toplamı 180 derece olan bütünler açılar α ve β",
    boyut: [420, 200],
    noktalar: {
      O: [0, 0], P: [0, 3], Q: [3, 0], R: [2.457, 1.721], T1: [1.5, -1.1],
      O2: [8, 0], L: [5.2, 0], K: [10.8, 0], S: [6.5, 2.598], T2: [8, -1.1],
    },
    dogrular: [{ p: ["O", "P"] }, { p: ["O", "Q"] }, { p: ["O", "R"] }, { p: ["L", "K"] }, { p: ["O2", "S"] }],
    acilar: [
      { p: ["Q", "O", "R"], metin: "α", vurgu: true },
      { p: ["R", "O", "P"], metin: "β", yaricap: 46 },
      { p: ["S", "O2", "L"], metin: "α", vurgu: true },
      { p: ["K", "O2", "S"], metin: "β" },
    ],
    yazilar: [
      { nokta: "T1", metin: "α + β = 90°" },
      { nokta: "T2", metin: "α + β = 180°" },
    ],
    gizli: ["O", "P", "Q", "R", "T1", "O2", "L", "K", "S", "T2"],
  },
  TersAcilar: {
    aciklama: "Kesişen iki doğru: karşılıklı ters açılar a ve a, b ve b eşit",
    boyut: DERS,
    noktalar: { O: [0, 0], P1: [3, 1.6], P2: [-3, 1.6], P3: [-3, -1.6], P4: [3, -1.6] },
    dogrular: [{ p: ["P3", "P1"] }, { p: ["P2", "P4"] }],
    acilar: [
      { p: ["P1", "O", "P2"], metin: "a", yaricap: 18 },
      { p: ["P3", "O", "P4"], metin: "a", yaricap: 18 },
      { p: ["P2", "O", "P3"], metin: "b", vurgu: true, cift: true, yaricap: 30 },
      { p: ["P4", "O", "P1"], metin: "b", vurgu: true, cift: true, yaricap: 30 },
    ],
    gizli: ["O", "P1", "P2", "P3", "P4"],
  },
  ParalelKesen: {
    aciklama: "Paralel d1 ve d2 doğrularını bir kesen kesiyor; yöndeş α açıları eşit, iç ters β açıları eşit",
    boyut: DERS,
    noktalar: {
      d1: [0, 2], R1: [8, 2], d2: [0, 0], R2: [8, 0],
      T1: [5.5, 3.5], T2: [2.5, -1.5], P: [4.6, 2], Q: [3.4, 0],
    },
    dogrular: [{ p: ["d1", "R1"] }, { p: ["d2", "R2"] }, { p: ["T1", "T2"] }],
    acilar: [
      { p: ["R1", "P", "T1"], metin: "α" },
      { p: ["T2", "P", "R1"], metin: "β", cift: true },
      { p: ["R2", "Q", "T1"], metin: "α", vurgu: true },
      { p: ["T1", "Q", "d2"], metin: "β", vurgu: true, cift: true },
    ],
    gizli: ["R1", "R2", "T1", "T2", "P", "Q"],
  },

  // ── DikUcgenFig ───────────────────────────────────────────────────────────
  Pisagor: {
    aciklama: "C köşesi dik olan ABC dik üçgeni: dik kenarlar a ve b, hipotenüs c",
    boyut: DERS,
    noktalar: { C: [0, 0], B: [4, 0], A: [0, 3] },
    cokgenler: [["A", "B", "C"]],
    dikler: [["A", "C", "B"]],
    kenarlar: [
      { p: ["C", "B"], metin: "a" },
      { p: ["C", "A"], metin: "b" },
      { p: ["A", "B"], metin: "c" },
    ],
  },
  Ucgen304560: {
    aciklama: "30-60-90 üçgeni: 30 derecenin karşısı x, 60 derecenin karşısı x kök 3, hipotenüs 2x",
    boyut: DERS,
    noktalar: { P: [0, 0], Q: [3.464, 0], R: [0, 2] },
    cokgenler: [["P", "Q", "R"]],
    dikler: [["R", "P", "Q"]],
    acilar: [
      { p: ["R", "Q", "P"], metin: "30°" },
      { p: ["P", "R", "Q"], metin: "60°" },
    ],
    kenarlar: [
      { p: ["P", "Q"], metin: "x√3" },
      { p: ["P", "R"], metin: "x" },
      { p: ["Q", "R"], metin: "2x" },
    ],
    gizli: ["P", "Q", "R"],
  },
  Ucgen454590: {
    aciklama: "45-45-90 üçgeni: dik kenarlar x ve x, hipotenüs x kök 2",
    boyut: DERS,
    noktalar: { P: [0, 0], Q: [3, 0], R: [0, 3] },
    cokgenler: [["P", "Q", "R"]],
    dikler: [["R", "P", "Q"]],
    acilar: [
      { p: ["R", "Q", "P"], metin: "45°" },
      { p: ["P", "R", "Q"], metin: "45°" },
    ],
    kenarlar: [
      { p: ["P", "Q"], metin: "x" },
      { p: ["P", "R"], metin: "x" },
      { p: ["Q", "R"], metin: "x√2" },
    ],
    gizli: ["P", "Q", "R"],
  },

  // ── BenzerlikFig ──────────────────────────────────────────────────────────
  BenzerUcgenler: {
    aciklama: "Benzer ABC ve A'B'C' üçgenleri: karşılıklı açılar eşit, AB = 6 ve A'B' = 4",
    boyut: [420, 200],
    noktalar: { A: [0, 0], B: [6, 0], C: [1.8, 3.6], "A'": [8, 0], "B'": [12, 0], "C'": [9.2, 2.4] },
    cokgenler: [["A", "B", "C"], ["A'", "B'", "C'"]],
    acilar: [
      { p: ["B", "A", "C"] },
      { p: ["C", "B", "A"], cift: true },
      { p: ["B'", "A'", "C'"] },
      { p: ["C'", "B'", "A'"], cift: true },
    ],
    kenarlar: [
      { p: ["A", "B"], metin: "6", vurgu: true },
      { p: ["A'", "B'"], metin: "4", vurgu: true },
    ],
  },
  Thales: {
    aciklama: "ABC üçgeninde BC'ye paralel DE doğru parçası; AD = 3, DB = 6, AE = 4, EC = x",
    boyut: DERS,
    noktalar: { A: [3, 5], B: [0, 0], C: [7, 0], D: [2, 3.333], E: [4.333, 3.333] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["D", "E"] }],
    kenarlar: [
      { p: ["A", "D"], metin: "3" },
      { p: ["D", "B"], metin: "6" },
      { p: ["A", "E"], metin: "4" },
      { p: ["E", "C"], metin: "x", vurgu: true },
    ],
  },
  AlanTabanYukseklik: {
    aciklama: "Tabanı a olan üçgen ve tepeden tabana dik inen h yüksekliği (kesik çizgi)",
    boyut: DERS,
    noktalar: { A: [2, 3.5], B: [0, 0], C: [6, 0], H: [2, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "H"], kesik: true }],
    dikler: [["A", "H", "C"]],
    kenarlar: [
      { p: ["A", "H"], metin: "h", vurgu: true },
      { p: ["B", "C"], metin: "a", konum: 0.7 },
    ],
    gizli: ["H"],
  },

  // ── DortgenFig ────────────────────────────────────────────────────────────
  Paralelkenar: {
    aciklama: "ABCD paralelkenarı: AB tabanı a, D'den tabana inen yükseklik h (kesik çizgi)",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [5, 0], C: [6.5, 3], D: [1.5, 3], H: [1.5, 0] },
    cokgenler: [["A", "B", "C", "D"]],
    dogrular: [{ p: ["D", "H"], kesik: true }],
    dikler: [["D", "H", "B"]],
    kenarlar: [
      { p: ["D", "H"], metin: "h", vurgu: true },
      { p: ["A", "B"], metin: "a" },
    ],
    gizli: ["H"],
  },
  Yamuk: {
    aciklama: "ABCD yamuğu: paralel kenarlar DC = a ve AB = c, aralarındaki uzaklık h (kesik çizgi)",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [7, 0], C: [5, 3], D: [1.5, 3], H: [1.5, 0] },
    cokgenler: [["A", "B", "C", "D"]],
    dogrular: [{ p: ["D", "H"], kesik: true }],
    dikler: [["D", "H", "B"]],
    kenarlar: [
      { p: ["D", "C"], metin: "a" },
      { p: ["A", "B"], metin: "c" },
      { p: ["D", "H"], metin: "h", vurgu: true },
    ],
    gizli: ["H"],
  },
  EskenarDortgen: {
    aciklama: "ABCD eşkenar dörtgeni: kenarları eşit, köşegenleri e ve f birbirini dik ortalıyor",
    boyut: DERS,
    noktalar: { A: [-3, 0], B: [0, -2], C: [3, 0], D: [0, 2], O: [0, 0] },
    cokgenler: [["A", "B", "C", "D"]],
    dogrular: [{ p: ["A", "C"] }, { p: ["B", "D"] }],
    dikler: [["C", "O", "D"]],
    esitler: [{ p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["C", "D"] }, { p: ["D", "A"] }],
    kenarlar: [
      { p: ["A", "O"], metin: "e", vurgu: true, konum: 0.5 },
      { p: ["O", "D"], metin: "f", vurgu: true, konum: 0.5 },
    ],
    gizli: ["O"],
  },

  // ── EskenarAlanFig ────────────────────────────────────────────────────────
  EskenarAlan: {
    aciklama: "Kenarı a olan eşkenar ABC üçgeni ve tabana inen h yüksekliği",
    boyut: DERS,
    noktalar: { B: [0, 0], C: [4, 0], A: [2, 3.464], H: [2, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "H"], kesik: true }],
    dikler: [["A", "H", "C"]],
    kenarlar: [
      { p: ["A", "B"], metin: "a" },
      { p: ["A", "C"], metin: "a" },
      { p: ["B", "C"], metin: "a", konum: 0.75 },
      { p: ["A", "H"], metin: "h", vurgu: true },
    ],
    gizli: ["H"],
  },

  // ── YardimciElemanlarFig ──────────────────────────────────────────────────
  Kenarortay: {
    aciklama: "ABC üçgeninde A köşesinden BC'nin orta noktası D'ye çizilen kenarortay; BD ve DC eşit",
    boyut: DERS,
    noktalar: { A: [2, 4], B: [0, 0], C: [7, 0], D: [3.5, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "D"] }],
    esitler: [{ p: ["B", "D"] }, { p: ["D", "C"] }],
  },
  Aciortay: {
    aciklama: "ABC üçgeninde A açısını iki eşit α açısına bölen ve BC'yi E'de kesen açıortay",
    boyut: DERS,
    noktalar: { A: [1.5, 4], B: [0, 0], C: [7, 0], E: [2.702, 0] },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["A", "E"] }],
    acilar: [
      { p: ["B", "A", "E"], metin: "α", vurgu: true, yaricap: 40 },
      { p: ["E", "A", "C"], metin: "α", vurgu: true, yaricap: 40 },
    ],
  },

  // ── KosinusTeoremiFig ─────────────────────────────────────────────────────
  KosinusTeoremi: {
    aciklama: "ABC üçgeni: A köşesinde buluşan b ve c kenarları ve aralarındaki A açısı, karşı kenar a",
    boyut: DERS,
    noktalar: { A: [1, 3.6], B: [0, 0], C: [6, 0] },
    cokgenler: [["A", "B", "C"]],
    acilar: [{ p: ["B", "A", "C"] }],
    kenarlar: [
      { p: ["B", "C"], metin: "a", vurgu: true },
      { p: ["A", "C"], metin: "b" },
      { p: ["A", "B"], metin: "c" },
    ],
  },

  // ── CemberFig ─────────────────────────────────────────────────────────────
  MerkezCevreAci: {
    aciklama: "O merkezli çemberde aynı AB yayını gören merkez açı 2α ve çevre açı α",
    boyut: DERS,
    noktalar: { O: [0, 0], A: [-2.298, -1.928], B: [2.298, -1.928], C: [-0.521, 2.954] },
    cemberler: [{ merkez: "O", nokta: "A" }],
    cemberYaylari: [{ merkez: "O", bas: "A", son: "B", vurgu: true }],
    dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }, { p: ["C", "A"] }, { p: ["C", "B"] }],
    acilar: [
      { p: ["A", "O", "B"], metin: "2α", vurgu: true },
      { p: ["A", "C", "B"], metin: "α", yaricap: 44 },
    ],
    isaretli: ["O"],
  },
  Teget: {
    aciklama: "O merkezli çembere T noktasında çizilen teğet; teğet OT yarıçapına dik",
    boyut: DERS,
    noktalar: { O: [0, 0], T: [2.165, 1.25], P1: [1.065, 3.155], P2: [3.265, -0.655] },
    cemberler: [{ merkez: "O", nokta: "T" }],
    dogrular: [{ p: ["O", "T"] }, { p: ["P1", "P2"] }],
    dikler: [["O", "T", "P2"]],
    kenarlar: [{ p: ["O", "T"], metin: "r" }],
    isaretli: ["O", "T"],
    gizli: ["P1", "P2"],
  },
  DaireDilimi: {
    aciklama: "O merkezli, r yarıçaplı dairede merkez açısı α olan taranmış AOB daire dilimi",
    boyut: DERS,
    noktalar: { O: [0, 0], A: [3, 0], B: [1.026, 2.819] },
    cemberler: [{ merkez: "O", nokta: "A" }],
    dilimler: [{ merkez: "O", bas: "A", son: "B" }],
    dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }],
    acilar: [{ p: ["A", "O", "B"], metin: "α" }],
    kenarlar: [{ p: ["O", "A"], metin: "r", ic: true }],
    isaretli: ["O"],
  },

  // ── GeometrikSekillerFig ──────────────────────────────────────────────────
  DisAcilarToplam: {
    aciklama: "ABC üçgeninin her köşesinde bir kenar uzatılmış; A, B ve C'deki dış açılar x, y ve z",
    boyut: DERS,
    noktalar: {
      A: [0, 0], B: [6, 0], C: [2.2, 3.6],
      D: [8, 0], E: [0.893, 4.838], F: [-0.938, -1.536],
    },
    cokgenler: [["A", "B", "C"]],
    dogrular: [{ p: ["B", "D"] }, { p: ["C", "E"] }, { p: ["A", "F"] }],
    acilar: [
      { p: ["B", "A", "F"], metin: "x", vurgu: true },
      { p: ["C", "B", "D"], metin: "y", vurgu: true },
      { p: ["A", "C", "E"], metin: "z", vurgu: true },
    ],
    gizli: ["D", "E", "F"],
  },
  UcgenEsitsizligi: {
    aciklama: "ABC üçgeni: taban BC = a, diğer kenarlar AB = c ve AC = b",
    boyut: DERS,
    noktalar: { B: [0, 0], C: [6, 0], A: [2.4, 2.6] },
    cokgenler: [["A", "B", "C"]],
    kenarlar: [
      { p: ["B", "C"], metin: "a" },
      { p: ["A", "B"], metin: "c", vurgu: true },
      { p: ["A", "C"], metin: "b", vurgu: true },
    ],
  },
  // ── AnalitikFig / DogruAnalitikFig / UzaklikFig ──────────────────────────
  IkiNokta: {
    aciklama: "Koordinat düzleminde A(1, 2) ve B(4, 6) noktaları ve aralarındaki doğru parçası",
    boyut: EKSENLI,
    eksen: { x: [-0.9, 5.6], y: [-0.9, 7.2] },
    noktalar: { A: [1, 2], B: [4, 6] },
    dogrular: [{ p: ["A", "B"] }],
    isaretli: ["A", "B"],
    etiketMetni: { A: "A(1, 2)", B: "B(4, 6)" },
  },
  Egim: EGIM,
  DogruEgim: EGIM,
  UzaklikPisagor: {
    aciklama: "A(1, 2) ve B(4, 6) arasındaki uzaklık: dik kenarları Δx = 3 ve Δy = 4 olan dik üçgenin hipotenüsü, |AB| = 5; dik köşe C(4, 2)",
    boyut: EKSENLI,
    eksen: { x: [-0.9, 5.8], y: [-0.9, 7.2] },
    noktalar: { A: [1, 2], B: [4, 6], C: [4, 2] },
    dogrular: [{ p: ["A", "B"] }, { p: ["A", "C"], kesik: true }, { p: ["C", "B"], kesik: true }],
    dikler: [["A", "C", "B"]],
    kenarlar: [
      { p: ["A", "C"], metin: "Δx = 3", ic: true },
      { p: ["C", "B"], metin: "Δy = 4" },
      { p: ["A", "B"], metin: "|AB| = 5", vurgu: true },
    ],
    isaretli: ["A", "B", "C"],
    etiketMetni: { A: "A(1, 2)", B: "B(4, 6)", C: "C(4, 2)" },
    etiketYonu: { A: 305 },
  },

  // ── CemberAnalitikFig ─────────────────────────────────────────────────────
  CemberMerkez: {
    aciklama: "Koordinat düzleminde merkezi M(a, b), yarıçapı r olan çember ve merkezden çembere çizilen r yarıçapı",
    boyut: EKSENLI,
    eksen: { x: [-1.8, 6], y: [-4.6, 3] },
    noktalar: { M: [2, -1], R: [4.298, 0.928] },
    cemberler: [{ merkez: "M", nokta: "R" }],
    dogrular: [{ p: ["M", "R"] }],
    kenarlar: [{ p: ["M", "R"], metin: "r", vurgu: true }],
    isaretli: ["M"],
    etiketMetni: { M: "M(a, b)" },
    gizli: ["R"],
  },

  // ── BirimCemberFig / TrigonometriFig ──────────────────────────────────────
  BirimCember: {
    aciklama: "Merkezi orijinde olan birim çember; I, II, III, IV bölgeleri ve α açısının bitim kenarının çemberi kestiği P noktası",
    boyut: [280, 280],
    eksen: { x: [-1.45, 1.45], y: [-1.45, 1.45] },
    noktalar: { O: [0, 0], E: [1, 0], P: [0.5, 0.866], Y1: [1.08, 1.08], Y2: [-1.08, 1.08], Y3: [-1.08, -1.08], Y4: [1.08, -1.08] },
    cemberler: [{ merkez: "O", nokta: "E" }],
    dogrular: [{ p: ["O", "P"] }],
    acilar: [{ p: ["E", "O", "P"], metin: "α", vurgu: true }],
    yazilar: [
      { nokta: "Y1", metin: "I", duz: true },
      { nokta: "Y2", metin: "II", duz: true },
      { nokta: "Y3", metin: "III", duz: true },
      { nokta: "Y4", metin: "IV", duz: true },
    ],
    isaretli: ["P"],
    gizli: ["O", "E", "Y1", "Y2", "Y3", "Y4"],
  },
  BolgeIsaret: {
    aciklama: "Birim çemberin dört bölgesinde pozitif olan trigonometrik fonksiyonlar: I'de hepsi, II'de sin, III'te tan, IV'te cos",
    boyut: [280, 280],
    eksen: { x: [-1.45, 1.45], y: [-1.45, 1.45] },
    noktalar: {
      O: [0, 0], E: [1, 0],
      N1: [0.5, 0.62], N2: [-0.5, 0.62], N3: [-0.5, -0.62], N4: [0.5, -0.62],
      S1: [0.5, 0.36], S2: [-0.5, 0.36], S3: [-0.5, -0.36], S4: [0.5, -0.36],
    },
    cemberler: [{ merkez: "O", nokta: "E" }],
    yazilar: [
      { nokta: "N1", metin: "I", duz: true },
      { nokta: "N2", metin: "II", duz: true },
      { nokta: "N3", metin: "III", duz: true },
      { nokta: "N4", metin: "IV", duz: true },
      { nokta: "S1", metin: "hepsi +", duz: true, vurgu: true },
      { nokta: "S2", metin: "sin +", duz: true, vurgu: true },
      { nokta: "S3", metin: "tan +", duz: true, vurgu: true },
      { nokta: "S4", metin: "cos +", duz: true, vurgu: true },
    ],
    gizli: ["O", "E", "N1", "N2", "N3", "N4", "S1", "S2", "S3", "S4"],
  },
  RadyanTanim: {
    aciklama: "O merkezli, r yarıçaplı çemberde uzunluğu r olan AB yayı merkezde 1 radyanlık açı görür",
    boyut: DERS,
    noktalar: { O: [0, 0], A: [3, 0], B: [1.621, 2.524] },
    cemberler: [{ merkez: "O", nokta: "A" }],
    cemberYaylari: [{ merkez: "O", bas: "A", son: "B", vurgu: true, metin: "r" }],
    dogrular: [{ p: ["O", "A"] }, { p: ["O", "B"] }],
    acilar: [{ p: ["A", "O", "B"], metin: "1 rad", yaricap: 30 }],
    kenarlar: [
      { p: ["O", "A"], metin: "r" },
    ],
    isaretli: ["O"],
  },

  // ── KatiCisimFig / KatiCisim2Fig ──────────────────────────────────────────
  Prizma: {
    aciklama: "Dikdörtgenler prizması: ayrıtları a, b ve c",
    boyut: DERS,
    noktalar: {},
    noktalar3d: { A: [0, 0, 0], B: [6, 0, 0], C: [6, 0, 4], D: [0, 0, 4], E: [0, 3.5, 0], F: [6, 3.5, 0], G: [6, 3.5, 4], H: [0, 3.5, 4] },
    dogrular: [
      { p: ["A", "B"] }, { p: ["B", "F"] }, { p: ["F", "E"] }, { p: ["E", "A"] }, { p: ["E", "H"] }, { p: ["H", "G"] },
      { p: ["G", "F"] }, { p: ["B", "C"] }, { p: ["C", "G"] },
      { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["D", "H"], kesik: true },
    ],
    kenarlar: [
      { p: ["A", "B"], metin: "a" },
      { p: ["A", "E"], metin: "b" },
      { p: ["B", "C"], metin: "c" },
    ],
    gizli: ["A", "B", "C", "D", "E", "F", "G", "H"],
  },
  Silindir: {
    aciklama: "Dik dairesel silindir: taban yarıçapı r, yüksekliği h",
    boyut: DERS,
    noktalar: { O: [0, 0], O2: [0, 5], L: [-3, 0], R: [3, 0], L2: [-3, 5], R2: [3, 5] },
    elipsler: [{ merkez: "O", rx: 3, ry: 1.08, arkaKesik: true }, { merkez: "O2", rx: 3, ry: 1.08 }],
    dogrular: [{ p: ["L", "L2"] }, { p: ["R", "R2"] }, { p: ["O2", "R2"] }],
    isaretli: ["O2"],
    kenarlar: [
      { p: ["O2", "R2"], metin: "r" },
      { p: ["R", "R2"], metin: "h" },
    ],
    gizli: ["O", "O2", "L", "R", "L2", "R2"],
  },
  Koni: {
    aciklama: "Dik koni: taban yarıçapı r, yüksekliği h",
    boyut: DERS,
    noktalar: { O: [0, 0], T: [0, 5.5], L: [-3.5, 0], R: [3.5, 0] },
    elipsler: [{ merkez: "O", rx: 3.5, ry: 1.05, arkaKesik: true, tepe: "T" }],
    dogrular: [{ p: ["T", "O"], kesik: true }, { p: ["O", "R"], kesik: true }],
    dikler: [["T", "O", "R"]],
    isaretli: ["O"],
    kenarlar: [
      { p: ["O", "R"], metin: "r" },
      { p: ["T", "O"], metin: "h", ic: true },
    ],
    gizli: ["O", "T", "L", "R"],
  },
  Piramit: {
    aciklama: "Kare tabanlı dik piramit: taban ayrıtı a, tepeden taban merkezine inen yükseklik h",
    boyut: DERS,
    noktalar: {},
    noktalar3d: { A: [0, 0, 0], B: [6, 0, 0], C: [6, 0, 6], D: [0, 0, 6], T: [3, 7, 3], O: [3, 0, 3], M: [3, 0, 0] },
    dogrular: [
      { p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["T", "A"] }, { p: ["T", "B"] }, { p: ["T", "C"] },
      { p: ["A", "D"], kesik: true }, { p: ["D", "C"], kesik: true }, { p: ["T", "D"], kesik: true },
      { p: ["T", "O"], kesik: true }, { p: ["O", "M"], kesik: true },
    ],
    dikler: [["T", "O", "M"]],
    kenarlar: [
      { p: ["A", "B"], metin: "a" },
      { p: ["T", "O"], metin: "h" },
    ],
    gizli: ["A", "B", "C", "D", "T", "O", "M"],
  },
  Kure: {
    aciklama: "Yarıçapı r olan küre; ekvator çemberi ve merkezden çizilen yarıçap",
    boyut: DERS,
    noktalar: { O: [0, 0], R: [3, 0] },
    cemberler: [{ merkez: "O", nokta: "R" }],
    elipsler: [{ merkez: "O", rx: 3, ry: 0.9, arkaKesik: true }],
    dogrular: [{ p: ["O", "R"] }],
    kenarlar: [{ p: ["O", "R"], metin: "r" }],
    isaretli: ["O"],
    gizli: ["O", "R"],
  },
  // ── ParabolFig ────────────────────────────────────────────────────────────
  Parabol: {
    aciklama: "y = x² − 4x + 3 parabolü: kökleri x = 1 ve x = 3, tepe noktası T(2, −1), y eksenini 3'te kesiyor, simetri ekseni x = 2 kesik çizgi",
    boyut: EKSENLI,
    eksen: { x: [-0.9, 5.3], y: [-1.9, 5.8] },
    noktalar: { T: [2, -1], K1: [1, 0], K3: [3, 0], Y: [0, 3], S1: [2, -1.7], S2: [2, 5.4] },
    egriler: [{ f: parabol, x: [-0.45, 4.45] }],
    dogrular: [{ p: ["S1", "S2"], kesik: true }],
    isaretli: ["T", "K1", "K3", "Y"],
    etiketMetni: { T: "T(2, −1)", K1: "1", K3: "3", Y: "3", S2: "x = 2" },
    vurguluNoktalar: ["T"],
    etiketYonu: { K1: 135, K3: 45, S2: 90 },
    gizli: ["S1"],
  },

  // ── UstelLogFig ───────────────────────────────────────────────────────────
  UstelGrafik: {
    aciklama: "y = 2 üzeri x grafiği: artan, y eksenini 1'de kesiyor, solda x eksenine yaklaşıyor",
    boyut: EKSENLI,
    eksen: { x: [-3.6, 3.4], y: [-0.9, 6.8] },
    noktalar: { Y: [0, 1] },
    egriler: [{ f: (x) => 2 ** x, x: [-3.5, 2.7], vurgu: true, metin: "y = 2^x", metinX: 2.3, metinYonu: 0 }],
    isaretli: ["Y"],
    etiketMetni: { Y: "1" },
    etiketYonu: { Y: 145 },
  },
  UstelAzalan: {
    aciklama: "y = (1/2) üzeri x grafiği: azalan, y eksenini 1'de kesiyor, sağda x eksenine yaklaşıyor",
    boyut: EKSENLI,
    eksen: { x: [-3.4, 3.6], y: [-0.9, 6.8] },
    noktalar: { Y: [0, 1] },
    egriler: [{ f: (x) => 0.5 ** x, x: [-2.7, 3.5], vurgu: true, metin: "y = (1/2)^x", metinX: -2.3, metinYonu: 180 }],
    isaretli: ["Y"],
    etiketMetni: { Y: "1" },
    etiketYonu: { Y: 35 },
  },
  UstelLogSimetri: {
    aciklama: "y = 2 üzeri x ile y = log tabanı 2 x eğrileri y = x doğrusuna göre simetrik; (0, 1) ve (1, 0) noktaları",
    boyut: [290, 290],
    eksen: { x: [-3, 6.6], y: [-3, 6.6], o: false },
    noktalar: { A: [0, 1], B: [1, 0] },
    egriler: [
      { f: (x) => 2 ** x, x: [-3, 2.7], vurgu: true, metin: "y = 2^x", metinX: 2.4, metinYonu: 180 },
      { f: (x) => Math.log2(x), x: [0.125, 6.4], metin: "y = log_2 x", metinX: 5.6, metinYonu: 270 },
      { f: (x) => x, x: [-2.6, 6.2], kesik: true, metin: "y = x", metinX: 5.6, metinYonu: 180 },
    ],
    isaretli: ["A", "B"],
    etiketMetni: { A: "(0, 1)", B: "(1, 0)" },
    etiketYonu: { A: 160, B: 290 },
  },

  // ── TurevGrafik / TurevTanimFig ───────────────────────────────────────────
  TurevGrafik: {
    aciklama: "f(x) = x³ − 6x² + 9x + 1 eğrisi ve yerel maksimumu (1, 5) noktasındaki yatay teğet",
    boyut: EKSENLI,
    eksen: { x: [-0.8, 4.9], y: [-1.2, 7] },
    noktalar: { M: [1, 5], K: [1, 0] },
    egriler: [
      { f: kubik, x: [-0.4, 4.4], metin: "y = f(x)", metinX: 4.15, metinYonu: 0 },
      { f: () => 5, x: [0.05, 2.1], vurgu: true },
    ],
    dogrular: [{ p: ["M", "K"], kesik: true }],
    isaretli: ["M"],
    etiketMetni: { M: "(1, 5)", K: "1" },
    etiketYonu: { M: 90 },
  },
  TurevTanimFig: {
    aciklama: "f(x) = x² eğrisinde A(1, 1) ve B(3, 9) noktalarından geçen kesen ve A noktasındaki teğet",
    boyut: EKSENLI,
    // y is drawn at 0.4 scale so the parabola fits; labels give the true values.
    eksen: { x: [-0.9, 3.9], y: [-0.6, 4.5] },
    noktalar: { A: [1, 0.4], B: [3, 3.6] },
    egriler: [
      { f: (x) => 0.4 * x * x, x: [-0.7, 3.3], metin: "y = x^2", metinX: -0.5, metinYonu: 90 },
      { f: (x) => 0.4 * (4 * x - 3), x: [0.65, 3.5], vurgu: true, metin: "kesen", duz: true, metinX: 3.45, metinYonu: 0 },
      { f: (x) => 0.4 * (2 * x - 1), x: [0.3, 2.6], metin: "teğet", duz: true, metinX: 2.5, metinYonu: 0 },
    ],
    isaretli: ["A", "B"],
    etiketMetni: { A: "A(1, 1)", B: "B(3, 9)" },
    etiketYonu: { B: 160 },
  },

  // ── IntegralAlanFig / IntegralIkiEgriFig ──────────────────────────────────
  IntegralAlan: {
    aciklama: "y = f(x) eğrisi ile x ekseni arasında, x = a ile x = b arasındaki taranmış A alanı ve alanı yaklaşık veren dört dikdörtgen şerit",
    boyut: EKSENLI,
    eksen: { x: [-0.6, 6.2], y: [-0.6, 6.2] },
    noktalar: { Ka: [SERIT.a, 0], Kb: [SERIT.b, 0], Fa: [SERIT.a, alanF(SERIT.a)], Fb: [SERIT.b, alanF(SERIT.b)], Y: [2.475, 0.9], ...seritNoktalari },
    alanlar: [{ ust: alanF, x: [SERIT.a, SERIT.b] }],
    egriler: [{ f: alanF, x: [0, 5.6], vurgu: true, metin: "y = f(x)", metinX: 5.3, metinYonu: 180 }],
    dogrular: [{ p: ["Ka", "Fa"] }, { p: ["Kb", "Fb"] }, ...seritKenarlari],
    yazilar: [{ nokta: "Y", metin: "A", vurgu: true }],
    etiketMetni: { Ka: "a", Kb: "b" },
    etiketYonu: { Ka: 270, Kb: 270 },
    gizli: ["Fa", "Fb", "Y", ...Object.keys(seritNoktalari)],
  },
  IntegralIkiEgri: {
    aciklama: "y = x doğrusu üstte, y = x² parabolü altta; x = 0 ile x = 1 arasında aralarında kalan taranmış bölge",
    boyut: EKSENLI,
    eksen: { x: [-0.25, 1.5], y: [-0.25, 1.55] },
    noktalar: { K: [1, 1], K1: [1, 0], Y: [0.5, 0.375] },
    alanlar: [{ ust: (x) => x, alt: (x) => x * x, x: [0, 1] }],
    egriler: [
      { f: (x) => x, x: [-0.15, 1.4], metin: "y = x", metinX: 1.35, metinYonu: 180 },
      { f: (x) => x * x, x: [-0.2, 1.22], vurgu: true, metin: "y = x^2", metinX: 1.2, metinYonu: 0 },
    ],
    dogrular: [{ p: ["K", "K1"], kesik: true }],
    yazilar: [{ nokta: "Y", metin: "A", vurgu: true }],
    isaretli: ["K"],
    etiketMetni: { K1: "1" },
    etiketYonu: { K1: 270 },
    gizli: ["K", "Y"],
  },

  // ── LimitFig ──────────────────────────────────────────────────────────────
  SicramaFig: {
    aciklama: "x = 3'te sıçrayan parçalı fonksiyon: soldan limit 1 (dolu nokta), sağdan limit 5 (içi boş nokta)",
    boyut: EKSENLI,
    eksen: { x: [-0.6, 6.2], y: [-0.6, 7] },
    noktalar: { D: [3, 1], B: [3, 5], K: [3, 0], Y1: [0, 1], Y5: [0, 5] },
    egriler: [
      { f: (x) => 0.5 + x / 6, x: [0, 3] },
      { f: (x) => 5 + 0.4 * (x - 3), x: [3, 5.8] },
    ],
    dogrular: [{ p: ["K", "B"], kesik: true }, { p: ["Y1", "D"], kesik: true }, { p: ["Y5", "B"], kesik: true }],
    isaretli: ["D"],
    bosNoktalar: ["B"],
    etiketMetni: { K: "3", Y1: "1", Y5: "5" },
    etiketYonu: { K: 270, Y1: 180, Y5: 180 },
    gizli: ["D", "B"],
  },
  DelikFig: {
    aciklama: "y = x + 2 doğrusu; x = 2 noktasında içi boş daireyle gösterilen delik, limit 4",
    boyut: EKSENLI,
    eksen: { x: [-2.4, 4.6], y: [-0.8, 6.8] },
    noktalar: { H: [2, 4], K: [2, 0], Y: [0, 4] },
    egriler: [{ f: (x) => x + 2, x: [-2.2, 4.4], vurgu: true, metin: "y = x + 2", metinX: 4, metinYonu: 0 }],
    dogrular: [{ p: ["K", "H"], kesik: true }, { p: ["Y", "H"], kesik: true }],
    bosNoktalar: ["H"],
    etiketMetni: { K: "2", Y: "4" },
    etiketYonu: { K: 270, Y: 180 },
    gizli: ["H"],
  },
  AsimptotFig: {
    aciklama: "Düşey asimptotu x = a, yatay asimptotu y = L olan iki kollu rasyonel fonksiyon grafiği",
    boyut: EKSENLI,
    eksen: { x: [-3.6, 10], y: [-4.6, 9.4] },
    noktalar: { V1: [3, -4.4], V2: [3, 9.2], H1: [-3.4, 2], H2: [9.8, 2] },
    egriler: [
      { f: (x) => (2 * x + 1) / (x - 3), x: [-3.4, 2.99], vurgu: true },
      { f: (x) => (2 * x + 1) / (x - 3), x: [3.01, 9.8], vurgu: true },
    ],
    dogrular: [{ p: ["V1", "V2"], kesik: true }, { p: ["H1", "H2"], kesik: true }],
    etiketMetni: { V1: "x = a", H2: "y = L" },
    etiketYonu: { V1: 0, H2: 270 },
    gizli: ["V2", "H1"],
  },

  // ── FonksiyonFig ──────────────────────────────────────────────────────────
  DogruGrafik: {
    aciklama: "y = 2x + 1 doğrusal fonksiyon grafiği, y eksenini (0, 1) noktasında kesiyor",
    boyut: EKSENLI,
    eksen: { x: [-2.2, 3.4], y: [-2.4, 6.8] },
    noktalar: { Y: [0, 1] },
    egriler: [{ f: (x) => 2 * x + 1, x: [-1.6, 2.7], vurgu: true, metin: "y = 2x + 1", metinX: 2.5, metinYonu: 0 }],
    isaretli: ["Y"],
    etiketMetni: { Y: "(0, 1)" },
    etiketYonu: { Y: 0 },
  },
  GrafikOkuma: {
    aciklama: "y = 2x + 1 doğrusunda x = 2'den dikey, oradan yatay gidilerek f(2) = 5 değerinin okunması",
    boyut: EKSENLI,
    eksen: { x: [-2.2, 3.4], y: [-2.4, 6.8] },
    noktalar: { P: [2, 5], K: [2, 0], Y: [0, 5] },
    egriler: [{ f: (x) => 2 * x + 1, x: [-1.6, 2.7] }],
    dogrular: [{ p: ["K", "P"], kesik: true }, { p: ["P", "Y"], kesik: true }],
    isaretli: ["P"],
    etiketMetni: { P: "f(2) = 5", K: "2", Y: "5" },
    vurguluNoktalar: ["P"],
    etiketYonu: { P: 0, K: 270, Y: 180 },
  },

  // ── TersFonksiyonFig ──────────────────────────────────────────────────────
  TersSimetri: {
    aciklama: "f(x) = 2x − 1 ve tersi f⁻¹(x) = (x + 1)/2 doğruları y = x doğrusuna göre simetrik; (2, 3) noktası (3, 2) noktasına yansıyor",
    boyut: [290, 290],
    eksen: { x: [-1.6, 7.6], y: [-1.6, 7.6], o: false },
    noktalar: { P: [2, 3], Q: [3, 2] },
    egriler: [
      { f: (x) => 2 * x - 1, x: [-0.3, 4.2], vurgu: true, metin: "f", metinX: 4, metinYonu: 180 },
      { f: (x) => (x + 1) / 2, x: [-1.4, 7.4], metin: "f^{−1}", metinX: 7, metinYonu: 90 },
      { f: (x) => x, x: [-1.3, 7], kesik: true, metin: "y = x", metinX: 6.8, metinYonu: 180 },
    ],
    dogrular: [{ p: ["P", "Q"], kesik: true }],
    isaretli: ["P", "Q"],
    etiketMetni: { P: "(2, 3)", Q: "(3, 2)" },
    etiketYonu: { P: 160, Q: 300 },
  },

  // ── MutlakDegerFig ────────────────────────────────────────────────────────
  TemelV: {
    aciklama: "y = |x| grafiği, tepe noktası orijin",
    boyut: EKSENLI,
    eksen: { x: [-4.6, 4.8], y: [-1, 4.8] },
    noktalar: {},
    egriler: [{ f: Math.abs, x: [-4.2, 4.2], vurgu: true, metin: "y = |x|", metinX: 3.6, metinYonu: 0 }],
  },
  OtelenmisV: {
    aciklama: "y = |x − 2| − 1 grafiği, tepe noktası (2, −1)",
    boyut: EKSENLI,
    eksen: { x: [-2, 6.4], y: [-1.9, 4.6] },
    noktalar: { T: [2, -1] },
    egriler: [{ f: (x) => Math.abs(x - 2) - 1, x: [-1.4, 5.5], vurgu: true, metin: "y = |x − 2| − 1", metinX: 5.3, metinYonu: 0 }],
    isaretli: ["T"],
    etiketMetni: { T: "(2, −1)" },
    etiketYonu: { T: 270 },
  },

  // ── DonusumGrafikFig ──────────────────────────────────────────────────────
  DikeyOteleme: {
    aciklama: "y = x² grafiği ile 2 birim yukarı ötelenmiş y = x² + 2 grafiği",
    boyut: EKSENLI,
    eksen: { x: [-3, 3.2], y: [-0.8, 7.4] },
    noktalar: { T: [0, 2] },
    egriler: [
      { f: (x) => x * x, x: [-2.5, 2.5], metin: "y = x^2", metinX: 2.4, metinYonu: 0 },
      { f: (x) => x * x + 2, x: [-2.2, 2.2], vurgu: true, metin: "y = x^2 + 2", metinX: -2.1, metinYonu: 180 },
    ],
    isaretli: ["T"],
    etiketMetni: { T: "2" },
    etiketYonu: { T: 0 },
  },
  YansimaXEkseni: {
    aciklama: "y = x² grafiği ve x eksenine göre yansıması y = −x² grafiği",
    boyut: EKSENLI,
    eksen: { x: [-3, 3.2], y: [-4.8, 4.8], o: false },
    noktalar: {},
    egriler: [
      { f: (x) => x * x, x: [-2.1, 2.1], metin: "y = x^2", metinX: 2, metinYonu: 0 },
      { f: (x) => -x * x, x: [-2.1, 2.1], vurgu: true, metin: "y = −x^2", metinX: 2, metinYonu: 0 },
    ],
  },

  // ── TrigonometriFig ───────────────────────────────────────────────────────
  SinusGrafik: {
    aciklama: "y = sin x grafiği, 0'dan 2π'ye bir tam periyot; en büyük değer 1, en küçük değer −1",
    boyut: [340, 200],
    eksen: { x: [-0.7, 7.3], y: [-2.5, 2.5] },
    noktalar: trigTikler.noktalar,
    egriler: [{ f: (x) => TRIG_K * Math.sin(x), x: [0, 2 * Math.PI], vurgu: true, metin: "y = sin x", metinX: 0.9, metinYonu: 120 }],
    dogrular: trigTikler.dogrular,
    etiketMetni: trigTikler.etiketMetni,
    etiketYonu: { X1: 270, X2: 90, X3: 90, X4: 270, Y1: 180, Y2: 180 },
    gizli: trigTikler.gizli,
  },
  KosinusGrafik: {
    aciklama: "y = cos x grafiği, 0'dan 2π'ye bir tam periyot; 1'den başlıyor",
    boyut: [340, 200],
    eksen: { x: [-0.7, 7.3], y: [-2.5, 2.5] },
    noktalar: trigTikler.noktalar,
    egriler: [{ f: (x) => TRIG_K * Math.cos(x), x: [0, 2 * Math.PI], vurgu: true, metin: "y = cos x", metinX: 2.4, metinYonu: 0 }],
    dogrular: trigTikler.dogrular,
    etiketMetni: trigTikler.etiketMetni,
    etiketYonu: { X2: 270, X4: 90, Y1: 180, Y2: 180 },
    gizli: trigTikler.gizli,
  },
  // ── RasyonelFig ───────────────────────────────────────────────────────────
  KarekokGrafik: {
    aciklama: "y = karekök x grafiği; orijinden başlayıp giderek yatıklaşarak artan eğri",
    boyut: [300, 200],
    eksen: { x: [-0.8, 9.8], y: [-0.8, 3.9] },
    noktalar: {},
    egriler: [{ f: Math.sqrt, x: [0, 9.3], vurgu: true, metin: "y = √x", metinX: 7.5, metinYonu: 90 }],
  },
  Hiperbol: {
    aciklama: "y = 1/x grafiği; eksenleri asimptot alan iki kollu hiperbol",
    boyut: EKSENLI,
    eksen: { x: [-4.3, 4.5], y: [-4.3, 4.5] },
    noktalar: {},
    egriler: [
      { f: (x) => 1 / x, x: [-4.1, -0.22], vurgu: true },
      { f: (x) => 1 / x, x: [0.22, 4.1], vurgu: true, metin: "y = 1/x", metinX: 1.2, metinYonu: 30 },
    ],
  },

  // ── DonusumFig (noktaların dönüşümü) ──────────────────────────────────────
  NoktaYansimaX: {
    aciklama: "A(3, 2) noktasının x eksenine göre yansıması A'(3, −2)",
    boyut: [280, 250],
    eksen: { x: [-1.2, 5], y: [-3.2, 3.2] },
    noktalar: { A: [3, 2], "A'": [3, -2], K: [3, 0] },
    dogrular: [{ p: ["A", "A'"], kesik: true }],
    esitler: [{ p: ["A", "K"] }, { p: ["K", "A'"] }],
    isaretli: ["A", "A'"],
    etiketMetni: { A: "A(3, 2)", "A'": "A'(3, −2)" },
    vurguluNoktalar: ["A'"],
    etiketYonu: { A: 0, "A'": 0 },
    gizli: ["K"],
  },
  Donme90: {
    aciklama: "P(4, 1) noktasının orijin etrafında saat yönünün tersine 90 derece dönmesiyle oluşan P'(−1, 4)",
    boyut: [280, 250],
    eksen: { x: [-2.6, 5.4], y: [-1, 5.4] },
    noktalar: { O: [0, 0], P: [4, 1], "P'": [-1, 4] },
    dogrular: [{ p: ["O", "P"], kesik: true }, { p: ["O", "P'"], kesik: true }],
    acilar: [{ p: ["P", "O", "P'"], metin: "90°", vurgu: true, yaricap: 26 }],
    isaretli: ["P", "P'"],
    etiketMetni: { P: "P(4, 1)", "P'": "P'(−1, 4)" },
    vurguluNoktalar: ["P'"],
    gizli: ["O"],
  },

  // ── OranBolmeFig ──────────────────────────────────────────────────────────
  OrtaNokta: {
    aciklama: "A(2, 1) ve B(8, 7) noktaları ile orta noktaları M(5, 4); M parçayı iki eşit kısma böler",
    boyut: EKSENLI,
    eksen: { x: [-0.8, 9.6], y: [-0.8, 8.6] },
    noktalar: { A: [2, 1], B: [8, 7], M: [5, 4] },
    dogrular: [{ p: ["A", "B"] }],
    esitler: [{ p: ["A", "M"] }, { p: ["M", "B"] }],
    isaretli: ["A", "B", "M"],
    etiketMetni: { A: "A(2, 1)", B: "B(8, 7)", M: "M(5, 4)" },
    vurguluNoktalar: ["M"],
  },
  OranlaBolme: {
    aciklama: "A(2, 1) ve B(8, 7) parçasını A'dan 1:2 oranında bölen P(4, 3) noktası; AP kısa, PB iki katı",
    boyut: EKSENLI,
    eksen: { x: [-0.8, 9.6], y: [-0.8, 8.6] },
    noktalar: { A: [2, 1], B: [8, 7], P: [4, 3] },
    dogrular: [{ p: ["A", "P"], vurgu: true }, { p: ["P", "B"] }],
    kenarlar: [
      { p: ["A", "P"], metin: "1", vurgu: true, ic: true },
      { p: ["P", "B"], metin: "2", ic: true },
    ],
    isaretli: ["A", "B", "P"],
    etiketMetni: { A: "A(2, 1)", B: "B(8, 7)", P: "P(4, 3)" },
    vurguluNoktalar: ["P"],
  },

  // ── KombinasyonFig ────────────────────────────────────────────────────────
  NoktalardanDogrular: {
    aciklama: "Üçü doğrusal olmayan 6 nokta ve her ikisini birleştiren 15 doğru parçası",
    boyut: DERS,
    noktalar: Object.fromEntries(["A", "B", "C", "D", "E", "F"].map((h, i) => [h, kutupsal(0, 0, 3, 90 + 60 * i + (i % 2 ? 8 : 0))])),
    dogrular: ["AB", "AC", "AD", "AE", "AF", "BC", "BD", "BE", "BF", "CD", "CE", "CF", "DE", "DF", "EF"].map((e) => ({ p: [e[0], e[1]] as [string, string] })),
    isaretli: ["A", "B", "C", "D", "E", "F"],
  },

  // ── GeoOlasilikFig ────────────────────────────────────────────────────────
  GeoOlDogruParcasi: {
    aciklama: "Uzunluğu 12 olan AB doğru parçası; uçlardan en az 3 birim uzak noktalar ortadaki 6 birimlik kısımdadır",
    boyut: [340, 120],
    noktalar: { A: [0, 0], K1: [3, 0], K2: [9, 0], B: [12, 0] },
    dogrular: [{ p: ["A", "K1"] }, { p: ["K1", "K2"], vurgu: true }, { p: ["K2", "B"] }],
    kenarlar: [
      { p: ["A", "K1"], metin: "3" },
      { p: ["K1", "K2"], metin: "6", vurgu: true },
      { p: ["K2", "B"], metin: "3" },
    ],
    isaretli: ["A", "K1", "K2", "B"],
    etiketYonu: { A: 90, B: 90 },
    gizli: ["K1", "K2"],
  },
  GeoOlKareDaire: {
    aciklama: "Solda kareye içten teğet daire; sağda eş merkezli üç daireden oluşan hedef tahtası, r1 ile r2 arasındaki halka taralı",
    boyut: [420, 210],
    noktalar: {
      S0: [0, 0], S1: [4, 0], S2: [4, 4], S3: [0, 4], M: [2, 2], R: [4, 2], L: [0, 2],
      H: [8, 2], H1: [8.9, 2], H2: [8, 3.55], H3: [10, 2],
      ...HEDEF.noktalar,
    },
    cokgenler: [["S0", "S1", "S2", "S3"]],
    cemberler: [{ merkez: "M", nokta: "R" }, { merkez: "H", nokta: "H1" }, { merkez: "H", nokta: "H2" }, { merkez: "H", nokta: "H3" }],
    dilimler: [{ merkez: "M", bas: "R", son: "L" }, { merkez: "M", bas: "L", son: "R" }],
    boyali: [HEDEF.poligon],
    dogrular: [{ p: ["M", "R"], kesik: true }, { p: ["H", "H1"] }, { p: ["H", "H2"] }],
    kenarlar: [
      { p: ["M", "R"], metin: "r" },
      { p: ["S0", "S1"], metin: "2r" },
      { p: ["H", "H1"], metin: "r_1", konum: 0.5, ic: true },
      { p: ["H", "H2"], metin: "r_2", konum: 0.78 },
    ],
    isaretli: ["M", "H"],
    gizli: ["S0", "S1", "S2", "S3", "M", "R", "L", "H", "H1", "H2", "H3", ...HEDEF.adlar],
  },
  GeoOlBolgeler: {
    aciklama: "Üç kare: köşeye uzaklığı r'den az noktalar çeyrek daire; kenara uzaklığı d'den az noktalar şerit; merkeze köşelerden yakın noktalar iç kare",
    boyut: [400, 150],
    noktalar: {
      a0: [0, 0], a1: [4, 0], a2: [4, 4], a3: [0, 4], aR: [2, 0], aU: [0, 2],
      b0: [5.5, 0], b1: [9.5, 0], b2: [9.5, 4], b3: [5.5, 4], b4: [9.5, 1], b5: [5.5, 1],
      c0: [11, 0], c1: [15, 0], c2: [15, 4], c3: [11, 4], m1: [13, 0], m2: [15, 2], m3: [13, 4], m4: [11, 2], O: [13, 2],
    },
    cokgenler: [["a0", "a1", "a2", "a3"], ["b0", "b1", "b2", "b3"], ["c0", "c1", "c2", "c3"]],
    dilimler: [{ merkez: "a0", bas: "aR", son: "aU" }],
    cemberYaylari: [{ merkez: "a0", bas: "aR", son: "aU" }],
    boyali: [["b0", "b1", "b4", "b5"], ["m1", "m2", "m3", "m4"]],
    dogrular: [{ p: ["b5", "b4"], kesik: true }, { p: ["m1", "m2"] }, { p: ["m2", "m3"] }, { p: ["m3", "m4"] }, { p: ["m4", "m1"] }],
    kenarlar: [
      { p: ["a0", "aR"], metin: "r", ic: true },
      { p: ["b1", "b4"], metin: "d" },
    ],
    isaretli: ["O"],
    etiketYonu: { O: 0 },
    gizli: ["a0", "a1", "a2", "a3", "aR", "aU", "b0", "b1", "b2", "b3", "b4", "b5", "c0", "c1", "c2", "c3", "m1", "m2", "m3", "m4"],
  },
  GeoOlBenzerUcgen: {
    aciklama: "ABC üçgeninde BC'ye paralel DE; ADE üçgeni taralı ve ABC'ye benzer, altta DBCE yamuğu kalır",
    boyut: DERS,
    noktalar: { A: [3.5, 5], B: [0, 0], C: [7, 0], D: [1.633, 2.333], E: [5.367, 2.333] },
    cokgenler: [["A", "B", "C"]],
    boyali: [["A", "D", "E"]],
    dogrular: [{ p: ["D", "E"], vurgu: true }],
  },
  GeoOlCark: {
    aciklama: "Üç dilimli çark: 1 yazan dilim 180 derece, 2 yazan 120 derece, 3 yazan 60 derece",
    boyut: [240, 240],
    noktalar: {
      O: [0, 0], U: [0, 3], D: [0, -3], K: kutupsal(0, 0, 3, 150),
      Y1: [1.5, 0], Y2: kutupsal(0, 0, 2.2, 215), Y3: kutupsal(0, 0, 1.9, 120),
      I1: [-0.25, 3.55], I2: [0.25, 3.55], I3: [0, 3.05],
    },
    cemberler: [{ merkez: "O", nokta: "U" }],
    dogrular: [{ p: ["O", "U"] }, { p: ["O", "D"] }, { p: ["O", "K"] }],
    cokgenler: [["I1", "I2", "I3"]],
    acilar: [
      { p: ["D", "O", "K"], metin: "120°", yaricap: 22 },
      { p: ["K", "O", "U"], metin: "60°", yaricap: 30 },
    ],
    yazilar: [
      { nokta: "Y1", metin: "1", vurgu: true },
      { nokta: "Y2", metin: "2", vurgu: true },
      { nokta: "Y3", metin: "3", vurgu: true },
    ],
    isaretli: ["O"],
    gizli: ["O", "U", "D", "K", "Y1", "Y2", "Y3", "I1", "I2", "I3"],
  },
  GeoOlBoyaliKup: { ...KUP3, aciklama: "Dış yüzeyi boyanmış 3×3×3 küp: köşedeki birim küpün 3, ayrıttakinin 2, yüz ortasındakinin 1 yüzü boyalı" },
  GeoOlPrizma: {
    aciklama: "Üçgen prizma: alt taban ABC, üst taban DEF; ABED yan yüzü taralı, A, B ve E köşeleri işaretli",
    boyut: DERS,
    noktalar: {},
    noktalar3d: { A: [0, 0, 0], B: [4.5, 0, 0], C: [6, 0, 3], D: [0, 4.5, 0], E: [4.5, 4.5, 0], F: [6, 4.5, 3] },
    boyali: [["A", "B", "E", "D"]],
    dogrular: [
      { p: ["A", "B"] }, { p: ["B", "C"] }, { p: ["D", "E"] }, { p: ["E", "F"] }, { p: ["F", "D"] },
      { p: ["A", "D"] }, { p: ["B", "E"] }, { p: ["C", "F"] }, { p: ["A", "C"], kesik: true },
    ],
    isaretli: ["A", "B", "E"],
    vurguluNoktalar: ["A", "B", "E"],
  },
  GeoOlKareBolge: {
    aciklama: "Kenarı 2 olan kare örnek uzay; x + y = 1 doğrusunun altındaki taralı küçük üçgen x + y < 1 bölgesi",
    boyut: [260, 260],
    eksen: { x: [-0.4, 2.7], y: [-0.4, 2.7] },
    noktalar: { S0: [0, 0], S1: [2, 0], S2: [2, 2], S3: [0, 2], K1: [1, 0], Y1: [0, 1] },
    cokgenler: [["S0", "S1", "S2", "S3"]],
    boyali: [["S0", "K1", "Y1"]],
    dogrular: [{ p: ["K1", "Y1"], vurgu: true }],
    kenarlar: [{ p: ["K1", "Y1"], metin: "x + y = 1", vurgu: true, ic: true }],
    etiketMetni: { S1: "2", S3: "2", K1: "1", Y1: "1" },
    etiketYonu: { S1: 290, S3: 160, K1: 270, Y1: 180 },
    gizli: ["S0", "S2"],
  },
  GeoOlBulusma: {
    aciklama: "Kenarı 40 dakika olan kare; x Ali'nin, y Bora'nın geliş dakikası. Köşegen boyunca taralı şerit |x − y| ≤ 10 bölgesi",
    boyut: [310, 310],
    eksen: { x: [-4, 47], y: [-4, 47] },
    noktalar: { S0: [0, 0], S1: [40, 0], S2: [40, 40], S3: [0, 40], P1: [10, 0], P2: [40, 30], P3: [30, 40], P4: [0, 10], Y: [20, 20] },
    cokgenler: [["S0", "S1", "S2", "S3"]],
    boyali: [["S0", "P1", "P2", "S2", "P3", "P4"]],
    dogrular: [{ p: ["P1", "P2"], vurgu: true }, { p: ["P4", "P3"], vurgu: true }],
    yazilar: [{ nokta: "Y", metin: "|x − y| ≤ 10", vurgu: true }],
    etiketMetni: { P1: "10", P4: "10", S1: "40", S3: "40" },
    etiketYonu: { P1: 270, S1: 270, P4: 180, S3: 180 },
    gizli: ["S0", "S2", "P2", "P3", "Y"],
  },

  // ── GeoKombFig ────────────────────────────────────────────────────────────
  GeoKombDogrusal: {
    aciklama: "Beş nokta: A, B, C aynı d doğrusu üzerinde, D ile E dışında; toplam 8 doğru",
    boyut: DERS,
    noktalar: { A: [0, 0], B: [3, 0], C: [6, 0], D: [1.5, 3.7], E: [6.6, 3.3], L: [-1.5, 0], d: [8.5, 0] },
    dogrular: [
      { p: ["L", "d"], vurgu: true },
      ...["AD", "AE", "BD", "BE", "CD", "CE", "DE"].map((e) => ({ p: [e[0], e[1]] as [string, string] })),
    ],
    isaretli: ["A", "B", "C", "D", "E"],
    etiketYonu: { A: 270, B: 270, C: 270, d: 270 },
    gizli: ["L"],
  },
  GeoKombParalel: {
    aciklama: "d1 üzerinde 3, d2 üzerinde 4 nokta; d1'den 2, d2'den 1 nokta kullanan üçgen taralı, her doğrudan 2 nokta kullanan dörtgen kesikli",
    boyut: DERS,
    noktalar: {
      K1: [1, 4], K2: [4, 4], K3: [7, 4], L1: [0, 0], L2: [2.7, 0], L3: [5.3, 0], L4: [8, 0],
      d1: [-1.2, 4], R1: [9.2, 4], d2: [-1.2, 0], R2: [9.2, 0],
    },
    dogrular: [
      { p: ["d1", "R1"] }, { p: ["d2", "R2"] },
      { p: ["K1", "L1"], vurgu: true }, { p: ["K2", "L1"], vurgu: true },
      { p: ["K2", "L3"], kesik: true }, { p: ["K3", "L4"], kesik: true },
    ],
    boyali: [["K1", "K2", "L1"]],
    isaretli: ["K1", "K2", "K3", "L1", "L2", "L3", "L4"],
    etiketYonu: { K1: 90, K2: 90, K3: 90, L1: 270, L2: 270, L3: 270, L4: 270, d1: 180, d2: 180 },
    gizli: ["R1", "R2"],
  },
  GeoKombKosegen: {
    aciklama: "Düzgün altıgen ABCDEF; A köşesinden çıkan AC, AD, AE köşegenleri vurgulu, diğer altı köşegen kesikli",
    boyut: DERS,
    noktalar: altigen(0, 0, 3),
    cokgenler: [["A", "B", "C", "D", "E", "F"]],
    dogrular: [
      { p: ["A", "C"], vurgu: true }, { p: ["A", "D"], vurgu: true }, { p: ["A", "E"], vurgu: true },
      ...["BD", "BE", "BF", "CE", "CF", "DF"].map((e) => ({ p: [e[0], e[1]] as [string, string], kesik: true })),
    ],
    vurguluNoktalar: ["A"],
  },
  GeoKombBolge: {
    aciklama: "Herhangi ikisi paralel olmayan, üçü bir noktadan geçmeyen üç doğru düzlemi 7 bölgeye ayırır",
    boyut: DERS,
    noktalar: {
      T1: [0, 3.4], T2: [-2, 0], T3: [2, 0], U1: [0.6, 4.42], A1: [-2.7, -1.19], U2: [-0.6, 4.42], A2: [2.7, -1.19],
      Z1: [-3.7, 0], Z2: [3.7, 0],
      Y1: [0, 1.1], Y2: [0, 4.05], Y3: [-2.5, 1.7], Y4: [2.5, 1.7], Y5: [0, -0.75], Y6: [-3.3, -0.75], Y7: [3.3, -0.75],
    },
    dogrular: [{ p: ["Z1", "Z2"] }, { p: ["U1", "A1"] }, { p: ["U2", "A2"] }],
    boyali: [["T1", "T2", "T3"]],
    yazilar: [1, 2, 3, 4, 5, 6, 7].map((i) => ({ nokta: `Y${i}`, metin: String(i), vurgu: true })),
    isaretli: ["T1", "T2", "T3"],
    gizli: ["T1", "T2", "T3", "U1", "A1", "U2", "A2", "Z1", "Z2", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7"],
  },
  GeoKombIzgara: {
    aciklama: "2×3 birim kare ızgarası: 3 yatay, 4 dikey çizgi; y1, y2 ile x2, x4 çizgileri seçilince vurgulu dikdörtgen belirlenir",
    boyut: DERS,
    noktalar: {
      y1: [-0.35, 2], y2: [-0.35, 1], y3: [-0.35, 0], Ry1: [3.35, 2], Ry2: [3.35, 1], Ry3: [3.35, 0],
      x1: [0, -0.35], x2: [1, -0.35], x3: [2, -0.35], x4: [3, -0.35], Tx1: [0, 2.35], Tx2: [1, 2.35], Tx3: [2, 2.35], Tx4: [3, 2.35],
      Q1: [1, 1], Q2: [3, 1], Q3: [3, 2], Q4: [1, 2],
    },
    boyali: [["Q1", "Q2", "Q3", "Q4"]],
    dogrular: [
      { p: ["y1", "Ry1"], vurgu: true }, { p: ["y2", "Ry2"], vurgu: true }, { p: ["y3", "Ry3"] },
      { p: ["x1", "Tx1"] }, { p: ["x2", "Tx2"], vurgu: true }, { p: ["x3", "Tx3"] }, { p: ["x4", "Tx4"], vurgu: true },
    ],
    etiketYonu: { y1: 180, y2: 180, y3: 180, x1: 270, x2: 270, x3: 270, x4: 270 },
    gizli: ["Ry1", "Ry2", "Ry3", "Tx1", "Tx2", "Tx3", "Tx4", "Q1", "Q2", "Q3", "Q4"],
  },
  GeoKombKiris: {
    aciklama: "Solda çember üzerinde 4 nokta: iki köşegen kiriş içte tek noktada kesişir. Sağda 5 nokta, 10 kiriş ve 5 iç kesişim noktası",
    boyut: [400, 200],
    noktalar: {
      O1: [0, 0], P: DORT[0], Q: DORT[1], R: DORT[2], S: DORT[3], X: kesisim(DORT[0], DORT[2], DORT[1], DORT[3]),
      O2: [7.5, 0], ...Object.fromEntries(BES.map((p, i) => [`B${i}`, p])), ...Object.fromEntries(BES_KESISIM.map((p, i) => [`X${i}`, p])),
    },
    cemberler: [{ merkez: "O1", nokta: "P" }, { merkez: "O2", nokta: "B0" }],
    dogrular: [
      { p: ["P", "R"] }, { p: ["Q", "S"] },
      { p: ["P", "Q"], kesik: true }, { p: ["Q", "R"], kesik: true }, { p: ["R", "S"], kesik: true }, { p: ["S", "P"], kesik: true },
      ...[[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]].map(([i, j]) => ({ p: [`B${i}`, `B${j}`] as [string, string] })),
    ],
    isaretli: ["P", "Q", "R", "S", "X", "B0", "B1", "B2", "B3", "B4", "X0", "X1", "X2", "X3", "X4"],
    gizli: ["O1", "P", "Q", "R", "S", "X", "O2", "B0", "B1", "B2", "B3", "B4", "X0", "X1", "X2", "X3", "X4"],
  },
  GeoKombAltigen: {
    aciklama: "İki düzgün altıgen: solda AD çapı üzerinde kurulan ABD dik üçgeni, sağda birer köşe atlanarak çizilen ACE eşkenar üçgeni",
    boyut: [420, 210],
    noktalar: { ...altigen(0, 0, 2.6), ...altigen(6.6, 0, 2.6, "2"), M: [0, 0] },
    cemberler: [{ merkez: "M", nokta: "A" }],
    cokgenler: [["A", "B", "C", "D", "E", "F"], ["A2", "B2", "C2", "D2", "E2", "F2"]],
    boyali: [["A", "B", "D"], ["A2", "C2", "E2"]],
    dogrular: [
      { p: ["A", "D"], vurgu: true }, { p: ["B", "D"], vurgu: true },
      { p: ["A2", "C2"], vurgu: true }, { p: ["C2", "E2"], vurgu: true }, { p: ["E2", "A2"], vurgu: true },
    ],
    dikler: [["A", "B", "D"]],
    etiketMetni: { A2: "A", B2: "B", C2: "C", D2: "D", E2: "E", F2: "F" },
    gizli: ["M"],
  },
  GeoKombKup: {
    aciklama: "İki küp: solda BD yüz köşegeni ve AG cisim köşegeni; sağda DCFE köşegen düzlemi ve ACF üçgeni",
    boyut: [420, 230],
    noktalar: {},
    noktalar3d: { ...KUP_SOL.noktalar3d, ...KUP_SAG.noktalar3d },
    dogrular: [
      ...KUP_SOL.dogrular, ...KUP_SAG.dogrular,
      { p: ["B", "D"] }, { p: ["A", "G"], vurgu: true },
      { p: ["E2", "D2"], kesik: true },
      { p: ["A2", "C2"], vurgu: true }, { p: ["C2", "F2"], vurgu: true }, { p: ["F2", "A2"], kesik: true },
    ],
    boyali: [["D2", "C2", "F2", "E2"]],
    etiketMetni: { ...KUP_SOL.etiketMetni, ...KUP_SAG.etiketMetni },
  },
  GeoKombBoyaliKup: { ...KUP6, aciklama: "Dış yüzeyi boyanmış 6×6×6 küp: köşedeki birim küplerin 3, ayrıttakilerin 2, yüz ortasındakilerin 1 yüzü boyalı" },
  // ── KumelerFig / KumelerUcVennFig / MantikVennFig / EbobEkokVennFig ───────
  Birlesim: ikiKume("A birleşim B taranmış: her iki dairenin tamamı", [{ ic: ["A"] }, { ic: ["B"] }]),
  Kesisim: ikiKume("A kesişim B taranmış: yalnız ortak bölge", [{ ic: ["A", "B"] }]),
  Fark: ikiKume("A fark B taranmış: A'nın B dışında kalan kısmı", [{ ic: ["A"], dis: ["B"] }]),
  UcVenn: {
    aciklama: "Üç kümeli Venn şeması: A, B ve C dairelerinin yedi ayrık bölgesi; en içteki A∩B∩C taranmış",
    boyut: [260, 250],
    noktalar: {
      A: [0, 0.577], B: [-0.5, -0.289], C: [0.5, -0.289], RA: [1, 0.577], RB: [0.5, -0.289], RC: [1.5, -0.289],
      YA: [0, 1.82], YB: [-1.55, -1.2], YC: [1.55, -1.2],
    },
    cemberler: [{ merkez: "A", nokta: "RA" }, { merkez: "B", nokta: "RB" }, { merkez: "C", nokta: "RC" }],
    bolgeler: [{ ic: ["A", "B", "C"] }],
    yazilar: [
      { nokta: "YA", metin: "A" },
      { nokta: "YB", metin: "B" },
      { nokta: "YC", metin: "C" },
    ],
    gizli: ["A", "B", "C", "RA", "RB", "RC", "YA", "YB", "YC"],
  },
  VeVenn: {
    ...ikiKume("p ve q bağlacının Venn şeması: yalnız iki dairenin ortak bölgesi taranmış", [{ ic: ["A", "B"] }], ["p", "q"]),
    noktalar: { ...IKI_KUME.noktalar, U0: [-2.6, -2.5], U1: [4.4, -2.5], U2: [4.4, 2.5], U3: [-2.6, 2.5] },
    cokgenler: [["U0", "U1", "U2", "U3"]],
    gizli: [...IKI_KUME.gizli, "U0", "U1", "U2", "U3"],
  },
  VeyaVenn: {
    ...ikiKume("p veya q bağlacının Venn şeması: iki dairenin birleşimi taranmış", [{ ic: ["A"] }, { ic: ["B"] }], ["p", "q"]),
    noktalar: { ...IKI_KUME.noktalar, U0: [-2.6, -2.5], U1: [4.4, -2.5], U2: [4.4, 2.5], U3: [-2.6, 2.5] },
    cokgenler: [["U0", "U1", "U2", "U3"]],
    gizli: [...IKI_KUME.gizli, "U0", "U1", "U2", "U3"],
  },
  EbobEkokVenn: {
    aciklama: "48 ve 72'nin asal çarpanlarının Venn şeması: yalnız 48'de 2, ortak kısımda 2³·3 (EBOB), yalnız 72'de 3",
    boyut: [340, 220],
    noktalar: {
      A: [0, 0], B: [2.2, 0], RA: [2.2, 0], RB: [4.4, 0],
      YA: [-1.2, 2.55], YB: [3.4, 2.55], T1: [-1.15, 0], T2: [1.1, 0], T3: [3.35, 0],
    },
    cemberler: [{ merkez: "A", nokta: "RA" }, { merkez: "B", nokta: "RB" }],
    bolgeler: [{ ic: ["A", "B"] }],
    yazilar: [
      { nokta: "YA", metin: "48 = 2^4·3" },
      { nokta: "YB", metin: "72 = 2^3·3^2" },
      { nokta: "T1", metin: "2" },
      { nokta: "T2", metin: "2^3·3", vurgu: true },
      { nokta: "T3", metin: "3" },
    ],
    gizli: ["A", "B", "RA", "RB", "YA", "YB", "T1", "T2", "T3"],
  },

  // ── AralikFig / EsitsizlikCozumFig / DiziSayiDogrusuFig / KokSayiDogrusuFig / RasyonelSiralamaFig ──
  YariAcikAralik: {
    aciklama: "Sayı doğrusunda [−2, 5) yarı açık aralığı: −2 dolu nokta (dahil), 5 boş nokta (hariç)",
    boyut: [320, 80],
    noktalar: { P: [-2, 0], Q: [5, 0] },
    sayiDogrusu: { x: [-4.5, 7.5], tikler: [-2, 0, 5] },
    dogrular: [{ p: ["P", "Q"], vurgu: true }],
    isaretli: ["P"],
    bosNoktalar: ["Q"],
    gizli: ["P", "Q"],
  },
  AralikKesisim: {
    aciklama: "A = [1, 6] ve B = (4, 9] aralıkları; kesişimleri (4, 6] sayı doğrusunda taralı",
    boyut: [320, 150],
    noktalar: {
      A1: [1, 2.2], A2: [6, 2.2], B1: [4, 1.2], B2: [9, 1.2], K1: [4, 0], K2: [6, 0],
      YA: [-0.2, 2.2], YB: [-0.2, 1.2],
    },
    sayiDogrusu: { x: [-0.8, 10.6], tikler: [1, 4, 6, 9] },
    dogrular: [{ p: ["A1", "A2"] }, { p: ["B1", "B2"] }, { p: ["K1", "K2"], vurgu: true }],
    isaretli: ["A1", "A2", "B2", "K2"],
    bosNoktalar: ["B1", "K1"],
    yazilar: [
      { nokta: "YA", metin: "A" },
      { nokta: "YB", metin: "B" },
    ],
    gizli: ["A1", "A2", "B1", "B2", "K1", "K2", "YA", "YB"],
  },
  EsitsizlikCozum: {
    aciklama: "x < −2 eşitsizliğinin çözüm kümesi: −2 boş nokta, sol tarafa doğru işaretli ışın",
    boyut: [320, 80],
    noktalar: { P: [-2, 0], L: [-5.6, 0] },
    sayiDogrusu: { x: [-6, 3.2], tikler: [-4, -2, 0, 2] },
    dogrular: [{ p: ["P", "L"], vurgu: true, ok: true }],
    bosNoktalar: ["P"],
    gizli: ["P", "L"],
  },
  DiziSayiDogrusu: {
    aciklama: "Sayı doğrusunda 2, 5, 8, 11, 14 aritmetik dizisinin terimleri; ardışık terimler arası fark 3",
    boyut: [330, 120],
    noktalar: Object.fromEntries([2, 5, 8, 11, 14].flatMap((v, i) => [[`a${i + 1}`, [v, 0]], [`m${i}`, [v + 1.5, 0]]])) as Record<string, Nk>,
    sayiDogrusu: { x: [0, 16], tikler: [2, 5, 8, 11, 14] },
    cemberYaylari: [0, 1, 2, 3].map((i) => ({ merkez: `m${i}`, bas: `a${i + 2}`, son: `a${i + 1}`, vurgu: true, ince: true, metin: "+3" })),
    isaretli: ["a1", "a2", "a3", "a4", "a5"],
    gizli: ["a1", "a2", "a3", "a4", "a5", "m0", "m1", "m2", "m3", "m4"],
  },
  KokSayiDogrusu: {
    aciklama: "Kök 2'nin sayı doğrusunda inşası: dik kenarları 1 olan dik üçgenin hipotenüsü kök 2, pergelle eksene yatırılıyor",
    boyut: [280, 190],
    noktalar: { O: [0, 0], K: [1, 0], T: [1, 1], S: [Math.SQRT2, 0] },
    sayiDogrusu: { x: [-0.5, 2.5], tikler: [0, 1, 2] },
    cokgenler: [["O", "K", "T"]],
    dikler: [["O", "K", "T"]],
    dogrular: [{ p: ["O", "T"], vurgu: true }],
    cemberYaylari: [{ merkez: "O", bas: "S", son: "T" }],
    kenarlar: [
      { p: ["K", "T"], metin: "1" },
      { p: ["O", "T"], metin: "√2", vurgu: true },
    ],
    isaretli: ["S"],
    etiketMetni: { S: "√2" },
    vurguluNoktalar: ["S"],
    etiketYonu: { S: 60 },
    gizli: ["O", "K", "T"],
  },
  RasyonelSiralama: {
    aciklama: "0 ile 1 arasındaki sayı doğrusunda 2/3, 3/4 ve 5/6 kesirleri; soldan sağa 2/3 < 3/4 < 5/6",
    boyut: [330, 100],
    noktalar: { P: [2 / 3, 0], Q: [3 / 4, 0], R: [5 / 6, 0] },
    sayiDogrusu: { x: [-0.12, 1.14], tikler: [0, 1] },
    isaretli: ["P", "Q", "R"],
    etiketMetni: { P: "2/3", Q: "3/4", R: "5/6" },
    vurguluNoktalar: ["P", "Q", "R"],
    etiketYonu: { P: 120, Q: 270, R: 60 },
  },
} satisfies Record<string, Sekil>;

export type DersSekliAdi = keyof typeof DERS_SEKILLERI;
