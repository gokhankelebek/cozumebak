import type { Sekil } from "@/lib/sorular/sekil";
import { metinGenisligi, YAZI } from "@/lib/sorular/sekilYerlesim";

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

// ── Tree diagrams ───────────────────────────────────────────────────────────
// A tree is laid out in pixels (the figure is then drawn 1:1): leaves evenly
// spaced, each parent centred on its children, edges running between the node
// labels. `o` is the branch label (a probability), written beside the branch;
// `s` is the text after a leaf (the outcome or the product of its path);
// `v` draws the branch and node in the accent colour.
interface Dugum {
  m: string;
  o?: string;
  v?: boolean;
  duz?: boolean;
  s?: string;
  sv?: boolean;
  c?: Dugum[];
}
function agacSekli(a: {
  aciklama: string;
  kok?: string;
  dallar: Dugum[];
  basliklar?: string[];
  adim?: number; // distance between levels
  ara?: number; // distance between leaves
  asagi?: boolean; // grow downwards (factor trees)
  halka?: boolean; // circle accent nodes (prime leaves)
}): Sekil {
  const adim = a.adim ?? 100;
  const ara = a.ara ?? 34;
  const noktalar: Record<string, Nk> = {};
  const dogrular: { p: [string, string]; vurgu?: boolean }[] = [];
  const yazilar: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[] = [];
  const cemberler: { merkez: string; nokta: string }[] = [];
  const gizli: string[] = [];
  const gen = (m: string) => (m ? metinGenisligi(m, YAZI.sayi) : 0);
  // Leaf texts start in one column, after the widest leaf label.
  const yapraklar = (n: Dugum): Dugum[] => (n.c?.length ? n.c.flatMap(yapraklar) : [n]);
  const enGenisYaprak = Math.max(0, ...a.dallar.flatMap(yapraklar).map((n) => gen(n.m)));
  // Screen-style coordinates (y down) → spec coordinates (y up).
  const yer = (derinlik: number, capraz: number): Nk => (a.asagi ? [capraz, -derinlik] : [derinlik, -capraz]);
  let yaprak = 0;
  let sayac = 0;
  const ekle = (ad: string, p: Nk) => {
    noktalar[ad] = p;
    gizli.push(ad);
    return ad;
  };
  type Yer = { ad: string; d: number; c: number; m: string };
  const kur = (n: Dugum, d: number): Yer => {
    const ad = `n${sayac++}`;
    let c: number;
    const cocuklar: [Dugum, Yer][] = [];
    if (n.c?.length) {
      for (const k of n.c) cocuklar.push([k, kur(k, d + 1)]);
      c = cocuklar.reduce((t, [, y]) => t + y.c, 0) / cocuklar.length;
    } else c = ara * yaprak++;
    ekle(ad, yer(d * adim, c));
    if (n.m) yazilar.push({ nokta: ad, metin: n.m, vurgu: n.v, duz: n.duz });
    if (n.m && n.v && a.halka) cemberler.push({ merkez: ad, nokta: ekle(`${ad}h`, yer(d * adim - 13, c)) });
    // Leaf text after the node.
    if (n.s && !n.c?.length) {
      const bosluk = (a.asagi ? 10 : enGenisYaprak / 2) + 10 + gen(n.s) / 2;
      yazilar.push({ nokta: ekle(`${ad}s`, yer(d * adim + bosluk, c)), metin: n.s, vurgu: n.sv });
    }
    // Edges to the children, between the labels.
    for (const [k, y] of cocuklar) {
      const yarim = (m: string) => (a.asagi ? (m ? 13 : 3) : m ? gen(m) / 2 + 6 : 3);
      const b0 = yer(d * adim + yarim(n.m), c);
      const b1 = yer((d + 1) * adim - yarim(k.m), y.c);
      dogrular.push({ p: [ekle(`${y.ad}a`, b0), ekle(`${y.ad}b`, b1)], vurgu: k.v });
      if (k.o) {
        // Beside the branch's midpoint, on the outer side (away from the middle row).
        const [x0, y0] = b0;
        const [x1, y1] = b1;
        const L = Math.hypot(x1 - x0, y1 - y0) || 1;
        // Left normal for a rising branch (label up-left), right normal for a falling one (down-left).
        const yukari = y1 >= y0;
        const nx = (yukari ? -(y1 - y0) : y1 - y0) / L;
        const ny = (yukari ? x1 - x0 : -(x1 - x0)) / L;
        const w = gen(k.o) / 2;
        const h = YAZI.sayi * 0.41;
        const t = 5 + Math.abs(nx) * w + Math.abs(ny) * h;
        yazilar.push({ nokta: ekle(`${y.ad}o`, [(x0 + x1) / 2 + nx * t, (y0 + y1) / 2 + ny * t]), metin: k.o, vurgu: k.v });
      }
    }
    return { ad, d, c, m: n.m };
  };
  const kok = kur({ m: a.kok ?? "", c: a.dallar }, 0);
  (a.basliklar ?? []).forEach((b, i) => {
    yazilar.push({ nokta: ekle(`b${i}`, yer((i + 1) * adim, -ara * 0.9)), metin: b, duz: true });
  });
  const xs = Object.values(noktalar).map((p) => p[0]);
  const ys = Object.values(noktalar).map((p) => p[1]);
  return {
    aciklama: a.aciklama,
    boyut: [Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)],
    noktalar,
    dogrular,
    yazilar,
    cemberler,
    isaretli: a.kok ? [] : [kok.ad],
    gizli,
  };
}
const ikili = (sol: string, sag: string, alt: (yol: string) => Dugum[] | undefined, yol = ""): Dugum[] =>
  [sol, sag].map((m) => ({ m, c: alt(yol + m) }));

// ── Tables and street grids ─────────────────────────────────────────────────
// A table laid out in pixels (drawn 1:1): a header row, a header column and a
// full grid of thin rules. Cells are addressed [row, column]; −1 is a header.
function tabloSekli(a: {
  aciklama: string;
  sutunlar: string[];
  satirlar: string[];
  hucre: (i: number, j: number) => string;
  w?: number;
  h?: number;
  ilkW?: number;
  kose?: string;
  ust?: string; // caption over the data columns
  yan?: string; // caption left of the row headers
  duz?: boolean; // upright header words
  hucreDuz?: boolean;
  boya?: (i: number, j: number) => boolean;
  vurgu?: (i: number, j: number) => boolean;
  kesikSutun?: number;
}): Sekil {
  const w = a.w ?? 34;
  const h = a.h ?? 30;
  const ilkW = a.ilkW ?? w;
  const R = a.satirlar.length;
  const C = a.sutunlar.length;
  const noktalar: Record<string, Nk> = {};
  const gizli: string[] = [];
  const ekle = (ad: string, p: Nk) => {
    noktalar[ad] = p;
    gizli.push(ad);
    return ad;
  };
  const X = (j: number) => (j < 0 ? 0 : ilkW + j * w); // left edge of column j (−1 = header)
  const Y = (i: number) => -(i < 0 ? 0 : h + i * h); // top edge of row i
  const sag = X(C);
  const alt = Y(R);
  const dogrular: { p: [string, string]; ince?: boolean; kesik?: boolean }[] = [];
  for (let i = -1; i <= R; i++) {
    const yy = i < 0 ? 0 : Y(i);
    dogrular.push({ p: [ekle(`ys${i}`, [0, yy]), ekle(`ye${i}`, [sag, yy])], ince: true });
  }
  for (let j = -1; j <= C; j++) {
    const xx = j < 0 ? 0 : X(j);
    dogrular.push({ p: [ekle(`xs${j}`, [xx, 0]), ekle(`xe${j}`, [xx, alt])], ince: true });
  }
  const yazilar: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[] = [];
  const boyali: string[][] = [];
  const hucreMerkezi = (i: number, j: number): Nk => {
    const x0 = X(j);
    const x1 = j < 0 ? ilkW : X(j) + w;
    const y0 = Y(i);
    const y1 = i < 0 ? -h : Y(i) - h;
    return [(x0 + x1) / 2, (y0 + y1) / 2];
  };
  const kutu = (i: number, j: number) => {
    const x0 = X(j);
    const x1 = j < 0 ? ilkW : X(j) + w;
    const y0 = Y(i);
    const y1 = i < 0 ? -h : Y(i) - h;
    return [ekle(`b${i}_${j}a`, [x0, y0]), ekle(`b${i}_${j}b`, [x1, y0]), ekle(`b${i}_${j}c`, [x1, y1]), ekle(`b${i}_${j}d`, [x0, y1])];
  };
  for (let i = -1; i < R; i++) {
    for (let j = -1; j < C; j++) {
      if (a.boya?.(i, j)) boyali.push(kutu(i, j));
      const metin = i < 0 && j < 0 ? a.kose ?? "" : i < 0 ? a.sutunlar[j] : j < 0 ? a.satirlar[i] : a.hucre(i, j);
      if (!metin) continue;
      const baslik = i < 0 || j < 0;
      yazilar.push({
        nokta: ekle(`t${i}_${j}`, hucreMerkezi(i, j)),
        metin,
        vurgu: a.vurgu?.(i, j),
        duz: baslik ? a.duz : a.hucreDuz,
      });
    }
  }
  if (a.kesikSutun != null) {
    const x0 = X(a.kesikSutun) + 3;
    const x1 = X(a.kesikSutun) + w - 3;
    const k = [ekle("k0", [x0, -3]), ekle("k1", [x1, -3]), ekle("k2", [x1, alt + 3]), ekle("k3", [x0, alt + 3])];
    for (let i = 0; i < 4; i++) dogrular.push({ p: [k[i], k[(i + 1) % 4]], kesik: true });
  }
  if (a.ust) yazilar.push({ nokta: ekle("ust", [(ilkW + sag) / 2, h * 0.8]), metin: a.ust, duz: true });
  if (a.yan) yazilar.push({ nokta: ekle("yan", [-metinGenisligi(a.yan, YAZI.sayi) / 2 - 10, (h + alt) / 2 - h / 2]), metin: a.yan, duz: true });
  const xs = Object.values(noktalar).map((p) => p[0]);
  const ys = Object.values(noktalar).map((p) => p[1]);
  return {
    aciklama: a.aciklama,
    boyut: [Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)],
    noktalar,
    dogrular,
    boyali,
    yazilar,
    gizli,
  };
}
const ZAR = ["1", "2", "3", "4", "5", "6"];
/** Street grid m × n with a highlighted path (list of lattice points). */
function izgaraSekli(a: { aciklama: string; m: number; n: number; yol: Nk[]; etiketler: Record<string, Nk>; vurgulu?: string[]; yonler?: Record<string, number> }): Sekil {
  const noktalar: Record<string, Nk> = { ...a.etiketler };
  const gizli: string[] = [];
  const dogrular: { p: [string, string]; vurgu?: boolean; ince?: boolean }[] = [];
  for (let j = 0; j <= a.m; j++) {
    noktalar[`v${j}a`] = [j, 0];
    noktalar[`v${j}b`] = [j, a.n];
    gizli.push(`v${j}a`, `v${j}b`);
    dogrular.push({ p: [`v${j}a`, `v${j}b`] });
  }
  for (let i = 0; i <= a.n; i++) {
    noktalar[`h${i}a`] = [0, i];
    noktalar[`h${i}b`] = [a.m, i];
    gizli.push(`h${i}a`, `h${i}b`);
    dogrular.push({ p: [`h${i}a`, `h${i}b`] });
  }
  a.yol.forEach((p, k) => {
    noktalar[`y${k}`] = p;
    gizli.push(`y${k}`);
    if (k) dogrular.push({ p: [`y${k - 1}`, `y${k}`], vurgu: true });
  });
  return {
    aciklama: a.aciklama,
    boyut: [40 * a.m, 40 * a.n],
    noktalar,
    dogrular,
    isaretli: Object.keys(a.etiketler),
    vurguluNoktalar: a.vurgulu,
    etiketYonu: a.yonler,
    gizli,
  };
}

// ── Box rows (counting: boxes, blocks, gaps) ────────────────────────────────
// Rows of boxes laid out in pixels (drawn 1:1). A box holds a number or a
// letter; `bosluk` is a narrow dashed slot (a gap between people), `yazi` is
// frameless text (an arrow), `daire` a lamp. `ust`/`alt` label a box above or
// below; `sol`/`sag` label the whole row.
interface Kutu {
  m?: string;
  v?: boolean;
  boya?: boolean;
  w?: number;
  yazi?: boolean;
  bosluk?: boolean;
  daire?: boolean;
  ust?: string;
  alt?: string;
  altV?: boolean;
}
interface KutuSatiri {
  k: Kutu[];
  sol?: string;
  sag?: string;
  ayrac?: string;
  x?: number;
}
function kutuSekli(a: { aciklama: string; satirlar: KutuSatiri[]; W?: number; H?: number; ara?: number; satirAra?: number; duz?: boolean }): Sekil {
  const W = a.W ?? 40;
  const H = a.H ?? 36;
  const ara = a.ara ?? 8;
  const satirAra = a.satirAra ?? 26;
  const gen = (m: string) => metinGenisligi(m, YAZI.sayi);
  const solW = Math.max(0, ...a.satirlar.map((r) => (r.sol ? gen(r.sol) + 14 : 0)));
  const noktalar: Record<string, Nk> = {};
  const gizli: string[] = [];
  const dogrular: { p: [string, string]; kesik?: boolean; ince?: boolean }[] = [];
  const yazilar: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[] = [];
  const boyali: string[][] = [];
  const cemberler: { merkez: string; nokta: string }[] = [];
  const bolgeler: { ic: string[] }[] = [];
  let sayac = 0;
  const ekle = (p: Nk) => {
    const ad = `q${sayac++}`;
    noktalar[ad] = p;
    gizli.push(ad);
    return ad;
  };
  const yaz = (p: Nk, metin: string, vurgu?: boolean, duz?: boolean) => yazilar.push({ nokta: ekle(p), metin, vurgu, duz });
  let ust = 0;
  a.satirlar.forEach((r) => {
    const ustVar = r.k.some((k) => k.ust);
    if (ustVar) ust -= 22;
    const y0 = ust; // top of the row
    const y1 = ust - H;
    const yc = (y0 + y1) / 2;
    let x = solW + (r.x ?? 0);
    // Row labels are words (upright); a single letter is a variable (italic).
    if (r.sol) yaz([solW - 12 - gen(r.sol) / 2, yc], r.sol, false, r.sol.length > 1);
    r.k.forEach((k, i) => {
      if (i > 0) {
        if (r.ayrac) {
          const g = gen(r.ayrac) + 12;
          yaz([x + g / 2, yc], r.ayrac);
          x += g;
        } else x += ara;
      }
      const w = k.yazi ? (k.w ? k.w * W : gen(k.m ?? "") + 8) : k.bosluk ? (k.m ? 28 : 16) : (k.w ?? 1) * W;
      const xc = x + w / 2;
      if (k.daire) {
        const r0 = Math.min(w, H) / 2 - 3;
        const m = ekle([xc, yc]);
        cemberler.push({ merkez: m, nokta: ekle([xc + r0, yc]) });
        // Keep the circle inside the figure's extent so it is drawn 1:1.
        ekle([xc - r0, yc + r0]);
        ekle([xc + r0, yc - r0]);
        if (k.boya) bolgeler.push({ ic: [m] });
      } else if (!k.yazi) {
        const yy0 = k.bosluk ? y0 - H * 0.15 : y0;
        const yy1 = k.bosluk ? y1 + H * 0.15 : y1;
        const c = [ekle([x, yy0]), ekle([x + w, yy0]), ekle([x + w, yy1]), ekle([x, yy1])];
        for (let j = 0; j < 4; j++) dogrular.push({ p: [c[j], c[(j + 1) % 4]], kesik: k.bosluk });
        if (k.boya) boyali.push(c);
      }
      if (k.m) yaz([xc, yc], k.m, k.v, a.duz);
      if (k.ust) yaz([xc, y0 + 12], k.ust, false, true);
      if (k.alt) yaz([xc, y1 - 13], k.alt, k.altV, true);
      x += w;
    });
    if (r.sag) yaz([x + 12 + gen(r.sag) / 2, yc], r.sag, false);
    ust = y1 - satirAra - (r.k.some((k) => k.alt) ? 18 : 0);
  });
  const xs = Object.values(noktalar).map((p) => p[0]);
  const ys = Object.values(noktalar).map((p) => p[1]);
  return {
    aciklama: a.aciklama,
    boyut: [Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)],
    noktalar,
    dogrular,
    yazilar,
    boyali,
    cemberler,
    bolgeler,
    gizli,
  };
}
const harfKutulari = (h: string[], v = false): Kutu[] => h.map((m) => ({ m, v }));

// ── Bar charts ──────────────────────────────────────────────────────────────
// A bar chart laid out in pixels (drawn 1:1): an arrowed value axis with
// ticks, a baseline, grouped bars (series 0 shaded, series 1 open, `vurgu`
// bars outlined in the accent colour), values over the bars, category labels
// under each group, optional dashed reference lines and a legend.
function sutunSekli(a: {
  on?: string;
  x0?: number;
  kategoriler: string[];
  seriler: { degerler: number[]; ad?: string; vurgu?: (i: number) => boolean }[];
  taban?: number; // value at the baseline (a truncated axis starts above 0)
  maks: number;
  tikler: (number | [number, string])[];
  yuk?: number;
  barW?: number;
  ara?: number;
  degerYaz?: (v: number) => string;
  eksenAdi?: string;
  referans?: { deger: number; metin: string }[];
  kategoriDuz?: boolean;
}) {
  const on = a.on ?? "";
  const x0 = a.x0 ?? 0;
  const taban = a.taban ?? 0;
  const yuk = a.yuk ?? 150;
  const barW = a.barW ?? 30;
  const ara = a.ara ?? 18;
  const S = a.seriler.length;
  const grupW = S * barW;
  const Y = (v: number) => ((v - taban) / (a.maks - taban)) * yuk;
  const genislik = 14 + a.kategoriler.length * (grupW + ara);
  const noktalar: Record<string, Nk> = {};
  const gizli: string[] = [];
  let sayac = 0;
  const ekle = (p: Nk) => {
    const ad = `${on}c${sayac++}`;
    noktalar[ad] = [p[0] + x0, p[1]];
    gizli.push(ad);
    return ad;
  };
  const dogrular: { p: [string, string]; vurgu?: boolean; kesik?: boolean; ince?: boolean; ok?: boolean }[] = [];
  const yazilar: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[] = [];
  const boyali: string[][] = [];
  const gen = (m: string) => metinGenisligi(m, YAZI.sayi);
  dogrular.push({ p: [ekle([0, 0]), ekle([0, yuk + 22])], ince: true, ok: true });
  dogrular.push({ p: [ekle([0, 0]), ekle([genislik, 0])], ince: true });
  for (const t of a.tikler) {
    const [v, m] = typeof t === "number" ? [t, String(t)] : t;
    const y = Y(v);
    dogrular.push({ p: [ekle([-4, y]), ekle([0, y])], ince: true });
    yazilar.push({ nokta: ekle([-9 - gen(m) / 2, y]), metin: m });
  }
  if (a.eksenAdi) yazilar.push({ nokta: ekle([gen(a.eksenAdi) / 2 + 8, yuk + 22]), metin: a.eksenAdi, duz: true });
  a.kategoriler.forEach((k, i) => {
    const gx = 14 + i * (grupW + ara);
    a.seriler.forEach((sr, j) => {
      const v = sr.degerler[i];
      const bx = gx + j * barW;
      const h = Y(v);
      const vurgu = sr.vurgu?.(i);
      const c = [ekle([bx, 0]), ekle([bx + barW, 0]), ekle([bx + barW, h]), ekle([bx, h])];
      dogrular.push({ p: [c[0], c[3]], vurgu }, { p: [c[3], c[2]], vurgu }, { p: [c[2], c[1]], vurgu });
      if (j === 0) boyali.push(c);
      if (a.degerYaz) yazilar.push({ nokta: ekle([bx + barW / 2, h + 12]), metin: a.degerYaz(v), vurgu });
    });
    yazilar.push({ nokta: ekle([gx + grupW / 2, -14]), metin: k, duz: a.kategoriDuz });
  });
  for (const r of a.referans ?? []) {
    const y = Y(r.deger);
    dogrular.push({ p: [ekle([0, y]), ekle([genislik, y])], kesik: true });
    yazilar.push({ nokta: ekle([genislik + 8 + gen(r.metin) / 2, y]), metin: r.metin });
  }
  // Legend for two series: a shaded and an open square.
  if (S > 1) {
    a.seriler.forEach((sr, j) => {
      const ly = yuk + 8 - j * 22;
      const lx = genislik + 10;
      const c = [ekle([lx, ly]), ekle([lx + 12, ly]), ekle([lx + 12, ly + 12]), ekle([lx, ly + 12])];
      for (let q = 0; q < 4; q++) dogrular.push({ p: [c[q], c[(q + 1) % 4]], ince: true });
      if (j === 0) boyali.push(c);
      yazilar.push({ nokta: ekle([lx + 20 + gen(sr.ad ?? "") / 2, ly + 6]), metin: sr.ad ?? "", duz: true });
    });
  }
  return { noktalar, dogrular, yazilar, boyali, gizli };
}
type SekilParcasi = ReturnType<typeof sutunSekli>;
const parcadanSekil = (aciklama: string, ...p: SekilParcasi[]): Sekil => {
  const noktalar = Object.assign({}, ...p.map((q) => q.noktalar)) as Record<string, Nk>;
  const xs = Object.values(noktalar).map((q) => q[0]);
  const ys = Object.values(noktalar).map((q) => q[1]);
  return {
    aciklama,
    boyut: [Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)],
    noktalar,
    dogrular: p.flatMap((q) => q.dogrular),
    yazilar: p.flatMap((q) => q.yazilar),
    boyali: p.flatMap((q) => q.boyali),
    gizli: p.flatMap((q) => q.gizli),
  };
};
// Pie chart: slices in order from the top, clockwise; percent inside, name outside.
function daireGrafigi(aciklama: string, dilimler: { ad: string; yuzde: number; vurgu?: boolean }[]): Sekil {
  const r = 3;
  const noktalar: Record<string, Nk> = { O: [0, 0] };
  const dogrular: { p: [string, string] }[] = [];
  const yazilar: { nokta: string; metin: string; vurgu?: boolean }[] = [];
  const boyalar: { merkez: string; bas: string; son: string }[] = [];
  let aci = 90;
  dilimler.forEach((d, i) => {
    const son = aci - (d.yuzde / 100) * 360;
    noktalar[`D${i}`] = kutupsal(0, 0, r, aci);
    noktalar[`E${i}`] = kutupsal(0, 0, r, son);
    dogrular.push({ p: ["O", `D${i}`] });
    const orta = (aci + son) / 2;
    noktalar[`Y${i}`] = kutupsal(0, 0, r * 0.58, orta);
    noktalar[`A${i}`] = kutupsal(0, 0, r * 1.22, orta);
    yazilar.push({ nokta: `Y${i}`, metin: `%${d.yuzde}`, vurgu: d.vurgu }, { nokta: `A${i}`, metin: d.ad, vurgu: d.vurgu });
    if (d.vurgu) boyalar.push({ merkez: "O", bas: `E${i}`, son: `D${i}` });
    aci = son;
  });
  return {
    aciklama,
    boyut: [230, 230],
    noktalar,
    cemberler: [{ merkez: "O", nokta: "D0" }],
    dilimler: boyalar,
    dogrular,
    yazilar,
    gizli: Object.keys(noktalar),
  };
}

// ── Round tables and Pascal's triangle ──────────────────────────────────────
// Seats around a round table, clockwise from the top; each seat is a small
// circle with its text inside (a letter, "×" for a forbidden seat).
function masaSekli(a: { aciklama: string; koltuk: { m?: string; v?: boolean; boya?: boolean }[]; notlar?: [number, string][] }): Sekil {
  const n = a.koltuk.length;
  const noktalar: Record<string, Nk> = { M: [0, 0], MR: [1.15, 0] };
  const cemberler = [{ merkez: "M", nokta: "MR" }];
  const yazilar: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[] = [];
  const bolgeler: { ic: string[] }[] = [];
  a.koltuk.forEach((k, i) => {
    const t = 90 - (360 * i) / n;
    noktalar[`K${i}`] = kutupsal(0, 0, 1.75, t);
    noktalar[`R${i}`] = kutupsal(noktalar[`K${i}`][0], noktalar[`K${i}`][1], 0.36, 0);
    cemberler.push({ merkez: `K${i}`, nokta: `R${i}` });
    if (k.boya) bolgeler.push({ ic: [`K${i}`] });
    if (k.m) yazilar.push({ nokta: `K${i}`, metin: k.m, vurgu: k.v });
  });
  (a.notlar ?? []).forEach(([i, m], j) => {
    const t = 90 - (360 * i) / n;
    noktalar[`N${j}`] = kutupsal(0, 0, 2.75, t);
    yazilar.push({ nokta: `N${j}`, metin: m, vurgu: true, duz: true });
  });
  return { aciklama: a.aciklama, boyut: [260, 230], noktalar, cemberler, bolgeler, yazilar, gizli: Object.keys(noktalar) };
}
function pascalSekli(): Sekil {
  const C = (n: number, k: number): number => (k === 0 || k === n ? 1 : C(n - 1, k - 1) + C(n - 1, k));
  const noktalar: Record<string, Nk> = {};
  const yazilar: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[] = [];
  const vurgulu = (n: number, k: number) => (n === 5 && (k === 2 || k === 3)) || (n === 6 && k === 3);
  for (let n = 0; n <= 6; n++) {
    for (let k = 0; k <= n; k++) {
      noktalar[`p${n}_${k}`] = [150 + (k - n / 2) * 44, -n * 30];
      yazilar.push({ nokta: `p${n}_${k}`, metin: String(C(n, k)), vurgu: vurgulu(n, k) });
    }
    noktalar[`n${n}`] = [-42, -n * 30];
    noktalar[`t${n}`] = [340, -n * 30];
    yazilar.push({ nokta: `n${n}`, metin: `n = ${n}` }, { nokta: `t${n}`, metin: String(2 ** n) });
  }
  noktalar.ust = [340, 30];
  yazilar.push({ nokta: "ust", metin: "toplam", duz: true });
  const xs = Object.values(noktalar).map((q) => q[0]);
  const ys = Object.values(noktalar).map((q) => q[1]);
  return {
    aciklama: "Pascal üçgeninin 0'dan 6'ya kadar satırları; her sayı üstündeki iki sayının toplamı, vurgulu örnek 10 + 10 = 20; sağda satır toplamları 1, 2, 4, …, 64",
    boyut: [Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)],
    noktalar,
    yazilar,
    gizli: Object.keys(noktalar),
  };
}
function bilezik(cx: number, son: string, harfler: string[]): Record<string, Nk> {
  return Object.fromEntries(harfler.map((h, i) => [h + son, kutupsal(cx, 0, 1.3, 90 - 90 * i)]));
}

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
  // ── Trees ─────────────────────────────────────────────────────────────────
  Agac: agacSekli({
    aciklama: "İki aşamalı olasılık ağacı: kökten A ve A' dallarına, her biri B ve B' dallarına ayrılıyor; dallarda koşullu olasılıklar",
    adim: 120,
    ara: 40,
    dallar: [
      { m: "A", o: "P(A)", c: [{ m: "B", o: "P(B|A)" }, { m: "B'", o: "P(B'|A)" }] },
      { m: "A'", o: "P(A')", c: [{ m: "B", o: "P(B|A')" }, { m: "B'", o: "P(B'|A')" }] },
    ],
  }),
  CarpmaAgaci: agacSekli({
    aciklama: "Çarpma kuralı ağacı: 2 çorbadan her biri 3 ana yemeğe dallanıyor; 2 · 3 = 6 menü",
    adim: 100,
    ara: 30,
    dallar: ["Ç_1", "Ç_2"].map((c) => ({
      m: c,
      c: ["A_1", "A_2", "A_3"].map((a) => ({ m: a, v: true, s: c + a })),
    })),
  }),
  CarpanAgaci360: agacSekli({
    aciklama: "360 sayısının çarpan ağacı: 360 sırayla 2, 2, 2, 3, 3 ve 5 asallarına ayrılıyor; 360 = 2³ · 3² · 5",
    asagi: true,
    halka: true,
    adim: 50,
    ara: 44,
    kok: "360",
    dallar: [
      { m: "2", v: true },
      { m: "180", c: [{ m: "2", v: true }, { m: "90", c: [{ m: "2", v: true }, { m: "45", c: [{ m: "3", v: true }, { m: "15", c: [{ m: "3", v: true }, { m: "5", v: true }] }] }] }] },
    ],
  }),
  KsUcAtisAgaci: agacSekli({
    aciklama: "Üç atışlık ağaç: her atışta vurma (V) 0,8, vuramama (V') 0,2; tam iki isabetli üç yol (VVV', VV'V, V'VV) vurgulu",
    adim: 76,
    ara: 30,
    basliklar: ["1. atış", "2. atış", "3. atış"],
    dallar: (() => {
      const hedef = ["VVV'", "VV'V", "V'VV"];
      const dal = (yol: string, d: number): Dugum[] =>
        ["V", "V'"].map((m) => {
          const y = yol + m;
          // Compare outcome by outcome: "VVV" is not on the path "VVV'".
          const parca = (t: string) => t.match(/V'?/g) ?? [];
          const yolda = hedef.some((h) => parca(y).every((t, i) => parca(h)[i] === t));
          if (d === 3) {
            const carpim = [...y.matchAll(/V'?/g)].map((t) => (t[0] === "V" ? "0,8" : "0,2")).join("·");
            return { m, v: yolda, s: carpim, sv: yolda };
          }
          return { m, v: yolda, c: dal(y, d + 1) };
        });
      return dal("", 1);
    })(),
  }),
  KsTorbaAgaci: agacSekli({
    aciklama: "Önce zar torbayı seçer: 1/3 olasılıkla I. torba (3K, 1B), 2/3 olasılıkla II. torba (1K, 5B); sonra torbadan top çekilir. Kırmızıya giden iki yol vurgulu",
    adim: 120,
    ara: 40,
    basliklar: ["torba", "top"],
    dallar: [
      { m: "I (3K, 1B)", duz: true, o: "1/3", c: [{ m: "K", o: "3/4", v: true, s: "1/3·3/4 = 1/4", sv: true }, { m: "B", o: "1/4", s: "1/3·1/4 = 1/12" }] },
      { m: "II (1K, 5B)", duz: true, o: "2/3", c: [{ m: "K", o: "1/6", v: true, s: "2/3·1/6 = 1/9", sv: true }, { m: "B", o: "5/6", s: "2/3·5/6 = 5/9" }] },
    ],
  }),
  KsTestAgaci: agacSekli({
    aciklama: "Sıklık ağacı: 1000 kişinin %4'ü (40) hasta, %96'sı (960) sağlam; hastaların %75'i (30), sağlamların %5'i (48) testte pozitif",
    adim: 128,
    ara: 40,
    kok: "1000",
    dallar: [
      { m: "40 hasta", duz: true, o: "%4", c: [{ m: "30 pozitif", duz: true, o: "%75", v: true }, { m: "10 negatif", duz: true, o: "%25" }] },
      { m: "960 sağlam", duz: true, o: "%96", c: [{ m: "48 pozitif", duz: true, o: "%5", v: true }, { m: "912 negatif", duz: true, o: "%95" }] },
    ],
  }),
  OtkParaAgaci: agacSekli({
    aciklama: "Üç madenî paranın art arda atılması: her para yazı (Y) ya da tura (T); dal uçlarında 8 çıktı",
    adim: 70,
    ara: 28,
    basliklar: ["1. para", "2. para", "3. para"],
    dallar: ikili("Y", "T", (y1) => ikili("Y", "T", (y2) => ikili("Y", "T", () => undefined, y2).map((d) => ({ ...d, s: y2 + d.m })), y1), ""),
  }),
  SkGalibiyetAgaci: agacSekli({
    aciklama: "İlk iki seti kazanan maçı alır: set dizileri EE ve MM iki sette, EME, EMM, MEE, MEM üç sette biter",
    adim: 80,
    ara: 32,
    basliklar: ["1. set", "2. set", "3. set"],
    dallar: [
      { m: "E", c: [{ m: "E", s: "EE", sv: true }, { m: "M", c: [{ m: "E", s: "EME", sv: true }, { m: "M", s: "EMM", sv: true }] }] },
      { m: "M", c: [{ m: "E", c: [{ m: "E", s: "MEE", sv: true }, { m: "M", s: "MEM", sv: true }] }, { m: "M", s: "MM", sv: true }] },
    ],
  }),
  PermSiralamaAgac: agacSekli({
    aciklama: "A, B, C harflerinin bütün dizilişleri: ilk yer için 3, ikinci için 2, sonuncu için 1 seçenek; 6 diziliş",
    adim: 70,
    ara: 30,
    dallar: ["A", "B", "C"].map((x) => ({
      m: x,
      c: ["A", "B", "C"].filter((y) => y !== x).map((y) => {
        const z = ["A", "B", "C"].find((t) => t !== x && t !== y)!;
        return { m: y, c: [{ m: z, v: true, s: x + y + z }] };
      }),
    })),
  }),
  // ── Tables ────────────────────────────────────────────────────────────────
  OtkZarTablosu: tabloSekli({
    aciklama: "İki zarın 6×6 tablosu: her hücrede iki zarın toplamı; toplamı 10 olan üç hücre vurgulu",
    sutunlar: ZAR,
    satirlar: ZAR,
    kose: "+",
    ust: "2. zar",
    yan: "1. zar",
    duz: true,
    hucre: (i, j) => String(i + j + 2),
    boya: (i, j) => i >= 0 && j >= 0 && i + j + 2 === 10,
    vurgu: (i, j) => i >= 0 && j >= 0 && i + j + 2 === 10,
  }),
  SkZarTablosu: tabloSekli({
    aciklama: "İki zarın 36 sıralı sonucu: köşegendeki 6 hücrede iki zar aynı (taralı), toplamı 8 olan 5 hücre vurgulu; (4, 4) iki grupta",
    sutunlar: ZAR,
    satirlar: ZAR,
    w: 40,
    ust: "mavi zar",
    yan: "kırmızı zar",
    duz: true,
    hucre: (i, j) => `${i + 1},${j + 1}`,
    boya: (i, j) => i >= 0 && i === j,
    vurgu: (i, j) => i >= 0 && j >= 0 && i + j + 2 === 8,
  }),
  KombOlasilikZarEnBuyuk: tabloSekli({
    aciklama: "İki zarın 36 sonucu, her hücrede büyük olan değer: en büyüğü en çok 4 olan 16 hücre taralı, en büyüğü tam 5 olan 9 hücre vurgulu",
    sutunlar: ZAR,
    satirlar: ZAR,
    ust: "2. zar",
    yan: "1. zar",
    duz: true,
    hucre: (i, j) => String(Math.max(i, j) + 1),
    boya: (i, j) => i >= 0 && j >= 0 && Math.max(i, j) < 4,
    vurgu: (i, j) => i >= 0 && j >= 0 && Math.max(i, j) === 4,
  }),
  KombOlasilikSiraliTablo: tabloSekli({
    aciklama: "K1, K2, M1, M2 toplarından iadesiz iki çekilişin sıralı sonuç tablosu: köşegen imkânsız, aynı renkli 4 sonuç vurgulu",
    sutunlar: ["K_1", "K_2", "M_1", "M_2"],
    satirlar: ["K_1", "K_2", "M_1", "M_2"],
    w: 54,
    ust: "2. çekiş",
    yan: "1. çekiş",
    hucre: (i, j) => (i === j ? "×" : ["K_1", "K_2", "M_1", "M_2"][i] + ["K_1", "K_2", "M_1", "M_2"][j]),
    boya: (i, j) => i >= 0 && i === j,
    vurgu: (i, j) => i >= 0 && j >= 0 && i !== j && (i < 2) === (j < 2),
  }),
  RakamSayiArtanIzgara: tabloSekli({
    aciklama: "1–5 rakamlarıyla yazılan iki basamaklı sayılar: rakamları kesin artan 10 hücre vurgulu, rakamları eşit 5 hücre taralı",
    sutunlar: ["1", "2", "3", "4", "5"],
    satirlar: ["1", "2", "3", "4", "5"],
    ust: "birler",
    yan: "onlar",
    duz: true,
    hucre: (i, j) => `${i + 1}${j + 1}`,
    boya: (i, j) => i >= 0 && i === j,
    vurgu: (i, j) => i >= 0 && j >= 0 && i < j,
  }),
  CaprazTablo: tabloSekli({
    aciklama: "Gözlük takma ve cinsiyet çapraz tablosu; gözlük takanlar sütunu (25 + 35 = 60 kişi) vurgulu",
    sutunlar: ["Gözlük +", "Gözlük −"],
    satirlar: ["Kadın", "Erkek"],
    w: 84,
    ilkW: 74,
    h: 34,
    duz: true,
    hucre: (i, j) => [["25", "15"], ["35", "25"]][i][j],
    boya: (i, j) => j === 0,
    vurgu: (i, j) => j === 0,
  }),
  KsSporTablosu: tabloSekli({
    aciklama: "160 öğrencinin cinsiyete ve lisanslı sporcu olup olmamaya göre dağılımı; Kız satırı (72) taralı, Sporcu sütunu (50) kesikli çerçeveli",
    sutunlar: ["Sporcu", "Sporcu değil", "Toplam"],
    satirlar: ["Kız", "Erkek", "Toplam"],
    w: 112,
    ilkW: 70,
    h: 34,
    duz: true,
    hucre: (i, j) => [["18", "54", "72"], ["32", "56", "88"], ["50", "110", "160"]][i][j],
    boya: (i) => i === 0,
    vurgu: (i, j) => (i === 0 && j === 2) || (i === 2 && j === 0),
    kesikSutun: 0,
  }),
  IsaretTablosu: {
    aciklama: "f(x) = x² − x − 6 ifadesinin işaret tablosu: kökler −2 ve 3; kökler dışında pozitif, kökler arasında negatif",
    boyut: [320, 90],
    noktalar: { S1: [-4.2, 0.55], S2: [0.5, 0.55], S3: [5.2, 0.55], K1: [-2, 0], K2: [3, 0], F: [-7.6, 0.55], X: [-7.6, -0.62] },
    sayiDogrusu: { x: [-6.8, 7.8], tikler: [[-2, "−2"], [3, "3"]] },
    yazilar: [
      { nokta: "S1", metin: "+", vurgu: true },
      { nokta: "S2", metin: "−" },
      { nokta: "S3", metin: "+", vurgu: true },
      { nokta: "F", metin: "f(x)" },
      { nokta: "X", metin: "x" },
    ],
    isaretli: ["K1", "K2"],
    gizli: ["S1", "S2", "S3", "K1", "K2", "F", "X"],
  },

  // ── Street grids ──────────────────────────────────────────────────────────
  KombOlasilikIzgaraYol: izgaraSekli({
    aciklama: "3×3 sokak ızgarası: A sol altta, B sağ üstte, C A'nın 2 birim sağında ve 1 birim yukarısında; vurgulu yol C'den geçiyor",
    m: 3,
    n: 3,
    yol: [[0, 0], [2, 0], [2, 1], [3, 1], [3, 3]],
    etiketler: { A: [0, 0], B: [3, 3], C: [2, 1] },
    vurgulu: ["C"],
    yonler: { A: 225, B: 45, C: 135 },
  }),
  TekrarliPermutasyonIzgara: izgaraSekli({
    aciklama: "4 birim sağa, 3 birim yukarı giden ızgara; A sol altta, B sağ üstte; vurgulu yol S S Y S Y Y S kelimesine karşılık gelir",
    m: 4,
    n: 3,
    yol: [[0, 0], [2, 0], [2, 1], [3, 1], [3, 3], [4, 3]],
    etiketler: { A: [0, 0], B: [4, 3], C: [1, 2] },
    yonler: { A: 225, B: 45, C: 135 },
  }),
  // ── Box rows ──────────────────────────────────────────────────────────────
  PermSiralamaKutu: kutuSekli({
    aciklama: "Kutu yöntemi: 5 kişiden 3'ü 3 sandalyeye oturuyor; seçenekler 5, 4, 3 ve çarpım 60",
    W: 70,
    H: 44,
    satirlar: [
      {
        k: [
          { m: "5", v: true, ust: "1. sandalye" },
          { m: "4", v: true, ust: "2. sandalye" },
          { m: "3", v: true, ust: "3. sandalye" },
        ],
        ayrac: "·",
        sag: "= 60",
      },
    ],
  }),
  SkKutuDiyagrami: kutuSekli({
    aciklama: "Kutu diyagramı: beş sembolden üç haneli dizi; tekrar serbestse 5 · 5 · 5 = 125, tekrar yoksa 5 · 4 · 3 = 60",
    satirlar: [
      { sol: "tekrar serbest", k: [{ m: "5", v: true, ust: "1. hane" }, { m: "5", v: true, ust: "2. hane" }, { m: "5", v: true, ust: "3. hane" }], ayrac: "·", sag: "= 125" },
      { sol: "tekrar yok", k: harfKutulari(["5", "4", "3"], true), ayrac: "·", sag: "= 60" },
    ],
  }),
  RakamSayiCiftDurum: kutuSekli({
    aciklama: "Basamak kutuları: birler önce doldurulur. Birler 0 ise yüzler 5, onlar 4 seçenek: 20; birler 4 ya da 6 ise yüzler 4, onlar 4, birler 2: 32",
    W: 48,
    satirlar: [
      { sol: "birler = 0", k: [{ m: "5", ust: "yüzler" }, { m: "4", ust: "onlar" }, { m: "1", v: true, boya: true, ust: "birler" }], ayrac: "·", sag: "= 20" },
      { sol: "birler = 4 veya 6", k: [{ m: "4" }, { m: "4" }, { m: "2", v: true, boya: true }], ayrac: "·", sag: "= 32" },
    ],
  }),
  PermSiralamaBlok: kutuSekli({
    aciklama: "Blok yöntemi: yan yana olması gereken Ece (E) ile Fırat (F) tek blok; blok ve diğer 5 kişi 6 birim (6!), blok içi EF ve FE (2!)",
    satirlar: [
      { k: [{ m: "A" }, { m: "EF", v: true, boya: true, w: 1.6 }, { m: "B" }, { m: "C" }, { m: "D" }, { m: "G" }], sag: "6!" },
      { sol: "blok içi", k: [{ m: "EF", v: true, w: 1.6 }, { m: "FE", v: true, w: 1.6 }], sag: "2!" },
    ],
  }),
  PermSiralamaBosluk: kutuSekli({
    aciklama: "Boşluk yöntemi: 5 erkek dizilince 4'ü arada, 2'si uçlarda 6 boşluk oluşur",
    satirlar: [
      {
        k: [1, 2, 3, 4, 5].flatMap((i) => [{ bosluk: true, alt: String(i), altV: true } as Kutu, { m: `E_${i}` }]).concat([{ bosluk: true, alt: "6", altV: true }]),
      },
    ],
  }),
  TekrarliPermutasyonBosluk: kutuSekli({
    aciklama: "Boşluk yöntemi: K P K harfleri dizilmiş, 4 boşluk var; iki özdeş A harfi 1. ve 3. boşluğa konmuş, A'lar yan yana gelmiyor",
    satirlar: [
      {
        k: [
          { bosluk: true, m: "A", v: true, alt: "1" }, { m: "K" },
          { bosluk: true, alt: "2" }, { m: "P" },
          { bosluk: true, m: "A", v: true, alt: "3" }, { m: "K" },
          { bosluk: true, alt: "4" },
        ],
      },
    ],
  }),
  PermSiralamaArasinda: kutuSekli({
    aciklama: "Altı yerlik sırada A ile B arasında tam bir kişi olan dört konum çifti: (1, 3), (2, 4), (3, 5), (4, 6)",
    W: 34,
    H: 30,
    satirAra: 10,
    satirlar: [0, 1, 2, 3].map((i) => ({
      sol: `(${i + 1}, ${i + 3})`,
      k: [0, 1, 2, 3, 4, 5].map((j) => ({
        m: j === i ? "A" : j === i + 2 ? "B" : "",
        v: j === i || j === i + 2,
        boya: j === i || j === i + 2,
        ust: i === 0 ? String(j + 1) : undefined,
      })),
    })),
  }),
  TekrarliPermutasyonEtiketSilme: kutuSekli({
    aciklama: "Etiketleri silmek: A1 A2 B C ile A2 A1 B C aynı A A B C dizilişine, B A1 C A2 ile B A2 C A1 aynı B A C A dizilişine dönüşür",
    W: 34,
    H: 30,
    satirAra: 8,
    satirlar: [
      { k: [...harfKutulari(["A_1", "A_2", "B", "C"]), { yazi: true, m: "→" }, ...harfKutulari(["A", "A", "B", "C"], true)] },
      { k: [...harfKutulari(["A_2", "A_1", "B", "C"]), { yazi: true, m: "→" }, ...harfKutulari(["A", "A", "B", "C"], true)] },
      { k: [...harfKutulari(["B", "A_1", "C", "A_2"]), { yazi: true, m: "→" }, ...harfKutulari(["B", "A", "C", "A"], true)] },
      { k: [...harfKutulari(["B", "A_2", "C", "A_1"]), { yazi: true, m: "→" }, ...harfKutulari(["B", "A", "C", "A"], true)] },
    ],
  }),
  BoslukYontemi: kutuSekli({
    aciklama: "Boşluk yöntemi: 4 sönük lamba arasında ve uçlarda 5 boşluk; yanacak 3 lamba 2, 3 ve 5 numaralı boşluklara konunca sönük, yanık, sönük, yanık, sönük, sönük, yanık dizilişi oluşur",
    W: 32,
    H: 32,
    satirlar: [
      {
        sol: "boşluklar",
        k: [1, 2, 3, 4].flatMap((i) => [{ bosluk: true, alt: String(i), altV: [2, 3].includes(i) } as Kutu, { daire: true }]).concat([{ bosluk: true, alt: "5", altV: true }]),
      },
      {
        sol: "sonuç",
        k: [false, true, false, true, false, false, true].map((y) => ({ daire: true, boya: y })),
      },
    ],
  }),
  // ── Charts ────────────────────────────────────────────────────────────────
  SutunGrafik: parcadanSekil(
    "Günlere göre satılan kitap sayısının sütun grafiği: Pazartesi 4, Salı 8, Çarşamba 6, Perşembe 10",
    sutunSekli({
      kategoriler: ["Pzt", "Sal", "Çar", "Per"],
      kategoriDuz: true,
      seriler: [{ degerler: [4, 8, 6, 10] }],
      maks: 10,
      tikler: [2, 4, 6, 8, 10],
      barW: 36,
      ara: 22,
      eksenAdi: "kitap",
      degerYaz: String,
    }),
  ),
  UsluBuyume: parcadanSekil(
    "2'nin kuvvetlerinin sütun grafiği: 2⁰'dan 2⁵'e değerler 1, 2, 4, 8, 16, 32; her adımda sütun iki katına çıkıyor",
    sutunSekli({
      kategoriler: ["2^0", "2^1", "2^2", "2^3", "2^4", "2^5"],
      seriler: [{ degerler: [1, 2, 4, 8, 16, 32] }],
      maks: 32,
      tikler: [8, 16, 24, 32],
      yuk: 160,
      barW: 28,
      ara: 12,
      degerYaz: String,
    }),
  ),
  KumelenmisSutun: parcadanSekil(
    "Cinsiyete göre kümelenmiş sütun grafiği: kızlarda futbol 20, basketbol 30; erkeklerde futbol 35, basketbol 15",
    sutunSekli({
      kategoriler: ["Kız", "Erkek"],
      kategoriDuz: true,
      seriler: [
        { degerler: [20, 35], ad: "Futbol" },
        { degerler: [30, 15], ad: "Basketbol" },
      ],
      maks: 40,
      tikler: [10, 20, 30, 40],
      barW: 36,
      ara: 34,
      degerYaz: String,
    }),
  ),
  OtkHileliZarCubuk: parcadanSekil(
    "Hileli zar çubuk grafiği: 1'den 5'e her yüzün olasılığı 1/10, 6'nın olasılığı 5/10; kesik çizgi hilesiz zardaki 1/6",
    sutunSekli({
      kategoriler: ["1", "2", "3", "4", "5", "6"],
      seriler: [{ degerler: [0.1, 0.1, 0.1, 0.1, 0.1, 0.5], vurgu: (i) => i === 5 }],
      maks: 0.5,
      tikler: [[0.1, "1/10"], [0.3, "3/10"], [0.5, "5/10"]],
      barW: 24,
      ara: 16,
      referans: [{ deger: 1 / 6, metin: "1/6" }],
    }),
  ),
  KesikEksen: parcadanSekil(
    "Aynı A = 24 ve B = 22 değerlerinin iki sütun grafiği: solda eksen 20'den başladığı için A, B'nin iki katı görünür; sağda eksen 0'dan başlayınca sütunlar neredeyse eşit",
    sutunSekli({
      on: "s",
      kategoriler: ["A", "B"],
      seriler: [{ degerler: [24, 22], vurgu: () => true }],
      taban: 20,
      maks: 24.5,
      tikler: [20, 22, 24],
      yuk: 130,
      barW: 32,
      ara: 20,
      degerYaz: String,
    }),
    sutunSekli({
      on: "d",
      x0: 190,
      kategoriler: ["A", "B"],
      seriler: [{ degerler: [24, 22] }],
      maks: 24.5,
      tikler: [0, 10, 20],
      yuk: 130,
      barW: 32,
      ara: 20,
      degerYaz: String,
    }),
  ),
  DaireGrafik: daireGrafigi("40 kişinin seçimlerini gösteren daire grafiği: A %25, B %25, C %30, D %20; A dilimi taralı", [
    { ad: "A", yuzde: 25, vurgu: true },
    { ad: "B", yuzde: 25 },
    { ad: "C", yuzde: 30 },
    { ad: "D", yuzde: 20 },
  ]),
  MerkeziEgilim: {
    aciklama: "Sıralı 3, 4, 6, 7, 9, 10 verisinin sayı doğrusunda nokta grafiği; medyan 6 ile 7'nin tam ortasında, 6,5'te",
    boyut: [320, 90],
    noktalar: { ...Object.fromEntries([3, 4, 6, 7, 9, 10].map((v) => [`v${v}`, [v, 0]])), M: [6.5, 0], Y: [6.5, 0.75] } as Record<string, Nk>,
    sayiDogrusu: { x: [1.8, 11.4], tikler: [3, 4, 6, 7, 9, 10] },
    isaretli: ["v3", "v4", "v6", "v7", "v9", "v10"],
    bosNoktalar: ["M"],
    yazilar: [{ nokta: "Y", metin: "medyan 6,5", vurgu: true, duz: true }],
    gizli: ["v3", "v4", "v6", "v7", "v9", "v10", "M", "Y"],
  },
  OlasilikSkalasi: {
    aciklama: "Olasılık skalası: 0 (imkânsız) ile 1 (kesin) arasında bir sayı doğrusu; ortada 1/2 eşit şans",
    boyut: [330, 90],
    noktalar: { P0: [0, 0], P1: [0.5, 0], P2: [1, 0], Y0: [0, 0.16], Y1: [0.5, 0.16], Y2: [1, 0.16] },
    sayiDogrusu: { x: [-0.12, 1.12], tikler: [[0, "0"], [0.25, "1/4"], [0.5, "1/2"], [0.75, "3/4"], [1, "1"]] },
    isaretli: ["P0", "P1", "P2"],
    yazilar: [
      { nokta: "Y0", metin: "imkânsız", duz: true },
      { nokta: "Y1", metin: "eşit şans", duz: true, vurgu: true },
      { nokta: "Y2", metin: "kesin", duz: true },
    ],
    gizli: ["P0", "P1", "P2", "Y0", "Y1", "Y2"],
  },
  OlasilikYakinsama: (() => {
    // P is drawn ×5 so the plot is not flat; tick labels give the true values.
    const P = [0.8, 0.2, 0.65, 0.4, 0.58, 0.46, 0.53, 0.49, 0.51, 0.5];
    const noktalar: Record<string, Nk> = { T0: [0, 2.5], T1: [10.6, 2.5], K1: [0, 5], K5: [0, 2.5] };
    P.forEach((p, i) => (noktalar[`p${i}`] = [i + 1, p * 5]));
    return {
      aciklama: "Deneme sayısı arttıkça deneysel olasılığın teorik değer 0,5'e (kesik çizgi) yakınsaması",
      boyut: [300, 200],
      eksen: { x: [-0.4, 11.2], y: [-0.4, 6.4], adlar: ["n", "P"] as [string, string] },
      noktalar,
      dogrular: [
        { p: ["T0", "T1"] as [string, string], kesik: true },
        ...P.slice(1).map((_, i) => ({ p: [`p${i}`, `p${i + 1}`] as [string, string], vurgu: true })),
      ],
      isaretli: P.map((_, i) => `p${i}`),
      etiketMetni: { K1: "1", K5: "0,5" },
      etiketYonu: { K1: 180, K5: 180 },
      gizli: ["T0", "T1", ...P.map((_, i) => `p${i}`)],
    } satisfies Sekil;
  })(),
  // ── Venn (sayma, olasılık) ────────────────────────────────────────────────
  DehtIkiVenn: {
    aciklama: "1'den 12'ye kadar sayılar: A 2'nin katları (2, 4, 6, 8, 10, 12), B 3'ün katları (3, 6, 9, 12); ortak bölgede 6 ve 12, dışarıda 1, 5, 7, 11",
    boyut: [340, 230],
    noktalar: {
      A: [0, 0], RA: [2, 0], B: [2.2, 0], RB: [4.2, 0],
      U0: [-2.8, -2.6], U1: [5, -2.6], U2: [5, 2.6], U3: [-2.8, 2.6],
      YA: [-1.3, 2.2], YB: [3.5, 2.2],
      n2: [-1.1, 0.7], n4: [-0.4, 1.3], n8: [-1.2, -0.6], n10: [-0.4, -1.3], n6: [1.1, 0.5], n12: [1.1, -0.5],
      n3: [3.2, 0.5], n9: [3.2, -0.6], n1: [-2.4, 2.2], n5: [4.6, 2.2], n7: [-2.4, -2.2], n11: [4.55, -2.2],
    },
    cokgenler: [["U0", "U1", "U2", "U3"]],
    cemberler: [{ merkez: "A", nokta: "RA" }, { merkez: "B", nokta: "RB" }],
    bolgeler: [{ ic: ["A", "B"] }],
    yazilar: [
      { nokta: "YA", metin: "A" },
      { nokta: "YB", metin: "B" },
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({ nokta: `n${n}`, metin: String(n), vurgu: n === 6 || n === 12 })),
    ],
    gizli: ["A", "RA", "B", "RB", "U0", "U1", "U2", "U3", "YA", "YB", ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => `n${n}`)],
  },
  DehtUcVennSayim: {
    aciklama: "Üç kümeli Venn: tek kümedeki eleman 1 kez, iki kümedeki 2 − 1 kez, üç kümedeki 3 − 3 + 1 kez sayılır; her bölge sonunda tam 1 kez",
    boyut: [300, 290],
    noktalar: {
      // Centres 1 apart, radius 1.25; labels at each region's most open point.
      A: [0, 0.577], B: [-0.5, -0.289], C: [0.5, -0.289], RA: [1.25, 0.577], RB: [0.75, -0.289], RC: [1.75, -0.289],
      YA: [0, 2.15], YB: [-1.9, -1.45], YC: [1.9, -1.45],
      t1: [0, 1.38], t2: [-1.18, -0.69], t3: [1.2, -0.64], t4: [-0.89, 0.49], t5: [0.89, 0.5], t6: [0, -1.02], t7: [0, 0],
    },
    cemberler: [{ merkez: "A", nokta: "RA" }, { merkez: "B", nokta: "RB" }, { merkez: "C", nokta: "RC" }],
    bolgeler: [{ ic: ["A", "B", "C"] }],
    yazilar: [
      { nokta: "YA", metin: "A" }, { nokta: "YB", metin: "B" }, { nokta: "YC", metin: "C" },
      { nokta: "t1", metin: "1" }, { nokta: "t2", metin: "1" }, { nokta: "t3", metin: "1" },
      { nokta: "t4", metin: "2−1" }, { nokta: "t5", metin: "2−1" }, { nokta: "t6", metin: "2−1" },
      { nokta: "t7", metin: "3−3+1", vurgu: true },
    ],
    gizli: ["A", "B", "C", "RA", "RB", "RC", "YA", "YB", "YC", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
  },
  OtkVennBolgeleri: {
    aciklama: "Örnek uzay S içinde kesişen A ve B olayları; dört ayrık bölge: yalnız A, A ∩ B, yalnız B ve hiçbiri",
    boyut: [340, 220],
    noktalar: {
      A: [0, 0], RA: [2, 0], B: [2.4, 0], RB: [4.4, 0],
      U0: [-2.6, -2.5], U1: [5, -2.5], U2: [5, 2.5], U3: [-2.6, 2.5],
      YS: [-2.25, 2.15], YA: [-1.5, 2.1], YB: [3.9, 2.1],
      r1: [-0.9, 0], r2: [1.2, 0], r3: [3.3, 0], r4: [3.9, -2.15],
    },
    cokgenler: [["U0", "U1", "U2", "U3"]],
    cemberler: [{ merkez: "A", nokta: "RA" }, { merkez: "B", nokta: "RB" }],
    bolgeler: [{ ic: ["A", "B"] }],
    yazilar: [
      { nokta: "YS", metin: "S" }, { nokta: "YA", metin: "A" }, { nokta: "YB", metin: "B" },
      { nokta: "r1", metin: "yalnız A", duz: true },
      { nokta: "r2", metin: "A ∩ B", vurgu: true },
      { nokta: "r3", metin: "yalnız B", duz: true },
      { nokta: "r4", metin: "hiçbiri", duz: true },
    ],
    gizli: ["A", "RA", "B", "RB", "U0", "U1", "U2", "U3", "YS", "YA", "YB", "r1", "r2", "r3", "r4"],
  },

  // ── Round tables ──────────────────────────────────────────────────────────
  DehtYuvarlakMasa: masaSekli({
    aciklama: "Altı sandalyeli yuvarlak masa: A en üstte sabit; A'nın iki yanı ve tam karşısı B için yasak (×), kalan iki sandalye B için uygun",
    koltuk: [{ m: "A", boya: true }, { m: "×", v: true }, { m: "B?" }, { m: "×", v: true }, { m: "B?" }, { m: "×", v: true }],
  }),
  DaireselKomsu: masaSekli({
    aciklama: "Sekiz sandalyeli yuvarlak masa: B en altta; hemen sağı ve hemen solu B'nin yanındaki iki sandalye, tam karşısı bir sandalye",
    koltuk: [{ m: "A?", v: true }, {}, {}, { m: "A?", v: true }, { m: "B", boya: true }, { m: "A?", v: true }, {}, {}],
    notlar: [[3, "hemen sağı"], [5, "hemen solu"], [0, "tam karşısı"]],
  }),
  DaireselBosluk: {
    aciklama: "Yuvarlak masadaki 5 kişinin arasında 5 boşluk; düz sırada oturan 5 kişinin arasında ve uçlarında 6 boşluk",
    boyut: [400, 180],
    noktalar: {
      M: [0, 0], ...Object.fromEntries([0, 1, 2, 3, 4].map((i) => [`k${i}`, kutupsal(0, 0, 1.4, 90 - 72 * i)])),
      ...Object.fromEntries([0, 1, 2, 3, 4].map((i) => [`b${i}`, kutupsal(0, 0, 1.85, 54 - 72 * i)])),
      ...Object.fromEntries([0, 1, 2, 3, 4].map((i) => [`s${i}`, [3.2 + i * 0.9, 0]])),
      ...Object.fromEntries([0, 1, 2, 3, 4, 5].map((i) => [`g${i}`, [2.75 + i * 0.9, -0.45]])),
    } as Record<string, Nk>,
    cemberler: [{ merkez: "M", nokta: "k0" }],
    isaretli: [0, 1, 2, 3, 4].flatMap((i) => [`k${i}`, `s${i}`]),
    yazilar: [
      ...[0, 1, 2, 3, 4].map((i) => ({ nokta: `b${i}`, metin: String(i + 1), vurgu: true })),
      ...[0, 1, 2, 3, 4, 5].map((i) => ({ nokta: `g${i}`, metin: String(i + 1), vurgu: true })),
    ],
    gizli: ["M", ...[0, 1, 2, 3, 4].flatMap((i) => [`k${i}`, `b${i}`, `s${i}`]), ...[0, 1, 2, 3, 4, 5].map((i) => `g${i}`)],
  },
  DaireselKolye: {
    aciklama: "Bilezik kesikli eksen çevresinde ters çevrilince saat yönündeki ABCD okuması ADCB olur; bilezikte ikisi aynı nesnedir",
    boyut: [380, 170],
    noktalar: {
      M1: [0, 0], M2: [5, 0], E1: [0, 1.75], E2: [0, -1.75], Q: [2.5, 0],
      ...bilezik(0, "", ["A", "B", "C", "D"]),
      ...bilezik(5, "2", ["A", "D", "C", "B"]),
    },
    cemberler: [{ merkez: "M1", nokta: "A" }, { merkez: "M2", nokta: "A2" }],
    dogrular: [{ p: ["E1", "E2"], kesik: true }],
    isaretli: ["A", "B", "C", "D", "A2", "B2", "C2", "D2"],
    yazilar: [{ nokta: "Q", metin: "=" }],
    etiketMetni: { A2: "A", B2: "B", C2: "C", D2: "D" },
    gizli: ["M1", "M2", "E1", "E2", "Q"],
  },

  // ── Grid with a closed street, Pascal, binomial terms ─────────────────────
  TekrarliPermutasyonKapaliYol: (() => {
    const t = izgaraSekli({
      aciklama: "5 birim sağa, 3 birim yukarı giden ızgara; A sol altta, B sağ üstte, C A'nın 2 birim sağında ve 1 birim yukarısında; (3, 2)–(4, 2) sokağı kapalı (×)",
      m: 5,
      n: 3,
      yol: [],
      etiketler: { A: [0, 0], B: [5, 3], C: [2, 1] },
      vurgulu: ["C"],
      yonler: { A: 225, B: 45, C: 315 },
    });
    // The closed street (3, 2)–(4, 2) is crossed out with a small accent ×.
    const d = 0.13;
    return {
      ...t,
      noktalar: { ...t.noktalar, X1: [3.5 - d, 2 - d], X2: [3.5 + d, 2 + d], X3: [3.5 - d, 2 + d], X4: [3.5 + d, 2 - d] },
      dogrular: [...(t.dogrular ?? []), { p: ["X1", "X2"], vurgu: true }, { p: ["X3", "X4"], vurgu: true }],
      gizli: [...(t.gizli ?? []), "X1", "X2", "X3", "X4"],
    } satisfies Sekil;
  })(),
  BinomPascal: pascalSekli(),
  BinomTerimSirasi: kutuSekli({
    aciklama: "(a + b)⁵ açılımının 6 terimi: a⁵, 5a⁴b, 10a³b², 10a²b³, 5ab⁴, b⁵; her kutunun üstünde baştan sırası ve k, altında sondan sırası; vurgulu kutu baştan 5., sondan 2. terim (k = 4)",
    W: 62,
    H: 34,
    satirAra: 4,
    satirlar: [
      { sol: "baştan", k: [0, 1, 2, 3, 4, 5].map((i) => ({ yazi: true, w: 1, m: `${i + 1}.` })) },
      { sol: "k", k: [0, 1, 2, 3, 4, 5].map((i) => ({ yazi: true, w: 1, m: String(i), v: i === 4 })) },
      { k: ["a^5", "5a^4b", "10a^3b^2", "10a^2b^3", "5ab^4", "b^5"].map((m, i) => ({ m, v: i === 4, boya: i === 4 })) },
      { sol: "sondan", k: [0, 1, 2, 3, 4, 5].map((i) => ({ yazi: true, w: 1, m: `${6 - i}.` })) },
    ],
  }),
  // ── Counting lists and tables ─────────────────────────────────────────────
  GadDortDurum: tabloSekli({
    aciklama: "3 nesne 2 kutuya, kutular boş kalabilir: nesneler ve kutular farklı 8, nesneler farklı kutular özdeş 4, nesneler özdeş kutular farklı 4, ikisi de özdeş 2 dağıtım",
    sutunlar: ["kutular farklı", "kutular özdeş"],
    satirlar: ["nesneler farklı", "nesneler özdeş"],
    w: 124,
    ilkW: 128,
    h: 36,
    duz: true,
    hucre: (i, j) => [["8", "4"], ["4", "2"]][i][j],
  }),
  GadAdliAdsiz: kutuSekli({
    aciklama: "Dört kişinin Mavi ve Kırmızı adlı iki takıma ikişer ayrılmasının 6 yolu; adlar silinince ikişer eşleşip 3 adsız ayırmaya iner",
    W: 44,
    H: 30,
    satirAra: 10,
    satirlar: [
      ["AB", "CD"],
      ["AC", "BD"],
      ["AD", "BC"],
    ].map(([x, y], i) => ({
      k: [
        { m: x, boya: true, ust: i === 0 ? "Mavi" : undefined },
        { m: y, ust: i === 0 ? "Kırmızı" : undefined },
        { yazi: true, m: "  " },
        { m: y, boya: true, ust: i === 0 ? "Mavi" : undefined },
        { m: x, ust: i === 0 ? "Kırmızı" : undefined },
        { yazi: true, m: "→" },
        { yazi: true, m: `{${x}, ${y}}`, v: true },
      ],
    })),
  }),
  GadCubukYildiz: kutuSekli({
    aciklama: "Çubuk ve yıldız gösterimi: 4 yıldız ve 2 çubuktan oluşan her dizi bir dağıtımdır; örneğin ★★|★|★ Ayşe 2, Bora 1, Cem 1 demektir",
    W: 22,
    H: 30,
    ara: 0,
    satirAra: 6,
    satirlar: [
      { k: "★★|★|★".split(""), sag: "(2, 1, 1)" },
      { k: "|★★★★|".split(""), sag: "(0, 4, 0)" },
      { k: "★★★★||".split(""), sag: "(4, 0, 0)" },
    ].map((r) => ({ ...r, k: r.k.map((c) => ({ yazi: true, w: 1, m: c, v: c === "|" })) })),
  }),
  SiralamaGruplari: kutuSekli({
    aciklama: "A, B, C, D'den 3 harfin 24 sıralı dizilişi kullandıkları harf kümesine göre 4 satırda; her satırda aynı üç harfin 6 sıralanışı, 24 ÷ 6 = 4 seçim",
    W: 44,
    H: 28,
    ara: 4,
    satirAra: 6,
    satirlar: ["ABC", "ABD", "ACD", "BCD"].map((k) => {
      const [x, y, z] = k.split("");
      return {
        sol: `{${x}, ${y}, ${z}}`,
        k: [x + y + z, x + z + y, y + x + z, y + z + x, z + x + y, z + y + x].map((m) => ({ m })),
        sag: "6",
      };
    }),
  }),
  KaleYerlesimi: tabloSekli({
    aciklama: "5×5 tahtada birbirini tehdit etmeyen 3 kale: 2, 4 ve 5. satırlar ile a, c ve e sütunları; kaleler 2c, 4a ve 5e karelerinde",
    sutunlar: ["a", "b", "c", "d", "e"],
    satirlar: ["1", "2", "3", "4", "5"],
    hucre: (i, j) => ((i === 1 && j === 2) || (i === 3 && j === 0) || (i === 4 && j === 4) ? "K" : ""),
    boya: (i, j) => (i === 1 && j === 2) || (i === 3 && j === 0) || (i === 4 && j === 4),
    vurgu: (i, j) => i >= 0 && j >= 0,
  }),
  KombOlasilikEtiket: kutuSekli({
    aciklama: "İki top iki kutuya atılıyor: etiketli 4 eş olasılıklı sonuç; etiketler silinince (2, 0), (1, 1), (0, 2) kalır, olasılıkları 1/4, 2/4, 1/4",
    W: 56,
    H: 30,
    satirAra: 8,
    satirlar: [
      ["T_1T_2", "", "(2, 0)", "1/4"],
      ["T_1", "T_2", "(1, 1)", "2/4"],
      ["T_2", "T_1", "(1, 1)", "2/4"],
      ["", "T_1T_2", "(0, 2)", "1/4"],
    ].map(([a, b, c, d], i) => ({
      k: [
        { m: a, ust: i === 0 ? "1. kutu" : undefined },
        { m: b, ust: i === 0 ? "2. kutu" : undefined },
        { yazi: true, m: "→" },
        { yazi: true, w: 1.2, m: c, v: c === "(1, 1)" },
      ],
      sag: d,
    })),
  }),
  BinomSecim: tabloSekli({
    aciklama: "(a + b)³ açılımında 8 seçim b sayısına göre gruplanır: aaa; aab, aba, baa; abb, bab, bba; bbb; grup büyüklükleri 1, 3, 3, 1 katsayılardır",
    sutunlar: ["0 tane b", "1 tane b", "2 tane b", "3 tane b"],
    satirlar: ["", "", "", "katsayı"],
    w: 76,
    ilkW: 70,
    duz: true,
    hucre: (i, j) => [["aaa", "aab", "abb", "bbb"], ["", "aba", "bab", ""], ["", "baa", "bba", ""], ["1", "3", "3", "1"]][i][j],
    vurgu: (i) => i === 3,
    boya: (i) => i === 3,
  }),
  DehtDuzensizListe: tabloSekli({
    aciklama: "Dört kişinin hiçbirinin kendi eşyasını almadığı 9 dağıtım, birinci kişinin aldığı eşyaya göre üç sütunda",
    sutunlar: ["1. kişi → 2", "1. kişi → 3", "1. kişi → 4"],
    satirlar: ["", "", ""],
    w: 116,
    ilkW: 0,
    duz: true,
    hucre: (i, j) => [["2143", "3412", "4321"], ["2341", "3142", "4123"], ["2413", "3421", "4312"]][i][j],
  }),
  DehtGuvercinTorba: kutuSekli({
    aciklama: "Aynı renkten 3 top için en kötü durum: 2 kırmızı (K), 2 mavi (M) ve tek yeşil (Y) top çekilmiş, toplam 5; 6. top kırmızı ya da mavidir",
    W: 34,
    H: 34,
    satirlar: [
      {
        k: [{ daire: true, m: "K" }, { daire: true, m: "K" }, { daire: true, m: "M" }, { daire: true, m: "M" }, { daire: true, m: "Y" }, { yazi: true, m: "+" }, { daire: true, m: "?", boya: true, v: true, alt: "6. top", altV: true }],
      },
    ],
  }),
  SkBayrakListesi: kutuSekli({
    aciklama: "Üç dikey şeritli 12 bayrak: kırmızı (K), lacivert (L), gri (G); komşu şeritler farklı renkte; her satırda ilk şerit sabit, 4 bayrak",
    W: 54,
    H: 30,
    ara: 10,
    satirAra: 8,
    satirlar: (["K", "L", "G"] as const).map((x) => {
      const r = ["K", "L", "G"].filter((c) => c !== x);
      const bayraklar = r.flatMap((y) => ["K", "L", "G"].filter((z) => z !== y).map((z) => x + y + z));
      return { k: bayraklar.map((m) => ({ m })), sag: "4" };
    }),
  }),
  RakamSayiSayfaBloklari: tabloSekli({
    aciklama: "Sayfa numaralama blokları: 1–9 arası 9 sayı × 1 rakam = 9; 10–99 arası 90 × 2 = 180; 100–999 arası 900 × 3 = 2700; blok sonlarında toplam 9, 189, 2889",
    sutunlar: ["sayı adedi", "basamak", "rakam", "toplam"],
    satirlar: ["1–9", "10–99", "100–999"],
    w: 82,
    ilkW: 74,
    duz: true,
    hucre: (i, j) => [["9", "1", "9", "9"], ["90", "2", "180", "189"], ["900", "3", "2700", "2889"]][i][j],
    vurgu: (i, j) => j === 3,
  }),
  FonkSayiCiftSayim: tabloSekli({
    aciklama: "Önce her kutuya bir top koyma yöntemi aynı dağılımı iki kez sayar: Yol 1'de önce 1, sonra 4 numaralı top K1'e; Yol 2'de tersi; ikisi de K1 = {1, 4}, K2 = {2}, K3 = {3}",
    sutunlar: ["1. tur", "2. tur", "sonuç"],
    satirlar: ["Yol 1", "Yol 2"],
    duz: true,
    w: 130,
    ilkW: 64,
    h: 34,
    hucre: (i, j) => [["1, 2, 3", "4 → K_1", "K_1 = {1, 4}"], ["4, 2, 3", "1 → K_1", "K_1 = {1, 4}"]][i][j],
    vurgu: (i, j) => j === 2,
  }),
  FonkSayiSecim: {
    aciklama: "A = {a, b, c} kümesinin her elemanı B = {1, 2, 3, 4} kümesinden bir görüntü seçer; kesik çizgiler bütün seçenekler, oklar bir fonksiyon: f(a) = 2, f(b) = 2, f(c) = 4",
    boyut: [300, 220],
    noktalar: {
      MA: [0, 0], MB: [4, 0], YA: [0, 2.35], YB: [4, 2.35],
      a: [0, 1], b: [0, 0], c: [0, -1], n1: [4, 1.5], n2: [4, 0.5], n3: [4, -0.5], n4: [4, -1.5],
      ...Object.fromEntries(["a", "b", "c"].map((x, i) => [`s${x}`, [0.25, 1 - i]])),
      ...Object.fromEntries([1, 2, 3, 4].map((n) => [`h${n}`, [3.75, 2.5 - n]])),
    } as Record<string, Nk>,
    elipsler: [{ merkez: "MA", rx: 0.85, ry: 1.75 }, { merkez: "MB", rx: 0.85, ry: 2.1 }],
    dogrular: [
      ...["a", "b", "c"].flatMap((x) => [1, 2, 3, 4].map((n) => ({ p: [`s${x}`, `h${n}`] as [string, string], kesik: true }))),
      { p: ["sa", "h2"], vurgu: true, ok: true },
      { p: ["sb", "h2"], vurgu: true, ok: true },
      { p: ["sc", "h4"], vurgu: true, ok: true },
    ],
    yazilar: [{ nokta: "YA", metin: "A" }, { nokta: "YB", metin: "B" }],
    isaretli: ["a", "b", "c", "n1", "n2", "n3", "n4"],
    etiketMetni: { n1: "1", n2: "2", n3: "3", n4: "4" },
    etiketYonu: { a: 180, b: 180, c: 180, n1: 0, n2: 0, n3: 0, n4: 0 },
    gizli: ["MA", "MB", "YA", "YB", "sa", "sb", "sc", "h1", "h2", "h3", "h4"],
  },
  FonkSayiOrtenGrup: {
    aciklama: "Dört elemanlı A'dan üç elemanlı B'ye örten fonksiyon: aynı görüntüyü paylaşan 1 ve 2 kesikli kutuda gruplanıp b'ye; 3 c'ye, 4 a'ya gidiyor",
    boyut: [300, 220],
    noktalar: {
      MA: [0, 0], MB: [4, 0], YA: [0, 2.35], YB: [4, 2.35],
      p1: [0, 1.5], p2: [0, 0.5], p3: [0, -0.5], p4: [0, -1.5], a: [4, 1], b: [4, 0], c: [4, -1],
      G0: [-0.45, 0.15], G1: [0.45, 0.15], G2: [0.45, 1.85], G3: [-0.45, 1.85],
      s12: [0.5, 1], s3: [0.25, -0.5], s4: [0.25, -1.5], ha: [3.75, 1], hb: [3.75, 0], hc: [3.75, -1],
    },
    elipsler: [{ merkez: "MA", rx: 0.85, ry: 2.1 }, { merkez: "MB", rx: 0.85, ry: 1.75 }],
    dogrular: [
      { p: ["G0", "G1"], kesik: true }, { p: ["G1", "G2"], kesik: true }, { p: ["G2", "G3"], kesik: true }, { p: ["G3", "G0"], kesik: true },
      { p: ["s12", "hb"], vurgu: true, ok: true },
      { p: ["s3", "hc"], vurgu: true, ok: true },
      { p: ["s4", "ha"], vurgu: true, ok: true },
    ],
    yazilar: [{ nokta: "YA", metin: "A" }, { nokta: "YB", metin: "B" }],
    isaretli: ["p1", "p2", "p3", "p4", "a", "b", "c"],
    etiketMetni: { p1: "1", p2: "2", p3: "3", p4: "4" },
    etiketYonu: { p1: 180, p2: 180, p3: 180, p4: 180, a: 0, b: 0, c: 0 },
    gizli: ["MA", "MB", "YA", "YB", "G0", "G1", "G2", "G3", "s12", "s3", "s4", "ha", "hb", "hc"],
  },
  GadBayrakYerleri: (() => {
    // Pixel units (drawn 1:1). Poles at x = 0, 120, 240; flags hang right of the pole.
    const noktalar: Record<string, Nk> = {};
    const dogrular: { p: [string, string] }[] = [];
    const yazilar: { nokta: string; metin: string; vurgu?: boolean }[] = [];
    const cokgenler: string[][] = [];
    const bayraklar: [number, number, string][] = [[0, -22, "a"], [0, -62, "b"], [120, -22, "c"]];
    const yerler: [number, number][] = [[0, -12], [0, -52], [0, -92], [120, -12], [120, -52], [240, -12]];
    [0, 120, 240].forEach((x, i) => {
      noktalar[`D${i}a`] = [x, 0];
      noktalar[`D${i}b`] = [x, -170];
      dogrular.push({ p: [`D${i}a`, `D${i}b`] });
    });
    bayraklar.forEach(([x, y, m], i) => {
      const c = [`F${i}a`, `F${i}b`, `F${i}c`, `F${i}d`];
      noktalar[c[0]] = [x, y];
      noktalar[c[1]] = [x + 38, y];
      noktalar[c[2]] = [x + 38, y - 24];
      noktalar[c[3]] = [x, y - 24];
      cokgenler.push(c);
      noktalar[`F${i}m`] = [x + 19, y - 12];
      yazilar.push({ nokta: `F${i}m`, metin: m });
    });
    yerler.forEach(([x, y], i) => {
      noktalar[`Y${i}`] = [x - 16, y - (i === 2 || i === 4 ? 4 : 0) + 2];
      yazilar.push({ nokta: `Y${i}`, metin: String(i + 1), vurgu: true });
    });
    return {
      aciklama: "Üç direk: birincide a ve b, ikincide c bayrağı, üçüncü boş; dördüncü bayrak birinci direkte 3, ikincide 2, üçüncüde 1 yere asılabilir, toplam 6 yer",
      boyut: [278, 170],
      noktalar,
      dogrular,
      cokgenler,
      yazilar,
      gizli: Object.keys(noktalar),
    } satisfies Sekil;
  })(),
} satisfies Record<string, Sekil>;

export type DersSekliAdi = keyof typeof DERS_SEKILLERI;
