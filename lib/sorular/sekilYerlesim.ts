// ─────────────────────────────────────────────────────────────────────────────
// Layout engine + quality checker for quiz figures (see ./sekil.ts).
//
// sekilYerlesim(sekil) turns the declarative spec into screen geometry with
// every label already placed; sekilKontrol(yerlesim) lists label collisions
// (with lines, arcs, other labels) so a bad figure is caught before it ships.
// Pure functions: used by the renderer and by the /dev/sekiller review page.
// ─────────────────────────────────────────────────────────────────────────────

import type { Sekil } from "./sekil";

export type P = { x: number; y: number };
export interface Kutu {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}
export type EtiketTuru = "nokta" | "kenar" | "aci";
export interface Etiket {
  x: number; // box centre
  y: number;
  metin: string;
  tur: EtiketTuru;
  vurgu: boolean;
  kutu: Kutu;
  kaynak: string; // human-readable origin, for checker messages
  /** Direction the label may be pushed in if it touches a line. */
  yon: P;
  /** Upright text (no math italics). */
  duz?: boolean;
}
export interface Cizgi {
  a: P;
  b: P;
  tur: "ana" | "yardimci" | "ince" | "vurgu";
}
export interface Yay {
  merkez: P;
  r: number;
  t1: number; // start angle (screen radians)
  d: number; // signed sweep
  vurgu: boolean;
  /** "aci" (thin angle mark, default), "ana" (part of the figure), "kalin" (highlighted arc) */
  tur?: "aci" | "ana" | "kalin";
}
export interface Elips {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  arkaKesik: boolean;
  /** Visible (front) part runs from t0 to t1 (screen parameter, radians, t1 > t0). */
  t0: number;
  t1: number;
}
export interface Dilim {
  merkez: P;
  r: number;
  t1: number;
  d: number;
  kesme: boolean;
}
export interface Egri {
  yol: P[];
  vurgu: boolean;
  kesik: boolean;
}
export interface Yerlesim {
  vb: Kutu; // viewBox
  noktalar: P[]; // dot markers
  bosNoktalar: P[]; // open circles
  egriler: Egri[];
  bolgeler: { ic: { merkez: P; r: number }[]; dis: { merkez: P; r: number }[] }[];
  cokgenler: P[][];
  boyali: P[][];
  cemberler: { merkez: P; r: number }[];
  dilimler: Dilim[];
  elipsler: Elips[];
  /** Sampled outlines of curved parts, used only for collision checks. */
  engeller: Cizgi[];
  cizgiler: Cizgi[];
  yaylar: Yay[];
  etiketler: Etiket[];
}

// Drawing area for the points themselves (labels extend beyond it).
const MAKS_G = 270;
const MAKS_Y = 230;

export const YAZI = { nokta: 16, sayi: 15 } as const;

// Approximate advance widths (em) for KaTeX_Main / KaTeX_Math glyphs.
function karakterGenisligi(c: string): number {
  if (/[0-9]/.test(c)) return 0.5;
  if (c === "°") return 0.4;
  if (c === " ") return 0.28;
  if (c === "+" || c === "−" || c === "-" || c === "=") return 0.78;
  if (c === "?") return 0.47;
  if (c === "," || c === ".") return 0.28;
  if (c === "(" || c === ")") return 0.39;
  if (/[A-ZÇĞİÖŞÜ]/.test(c)) return 0.72;
  if (/[a-zçğıöşü]/.test(c)) return 0.52;
  if (c === "√") return 0.83;
  if (/[α-ω]/.test(c)) return 0.5;
  return 0.6;
}
/** Splits "2^x", "f^{-1}", "log_2" into plain, superscript and subscript runs. */
export function parcala(metin: string): { t: string; ust: boolean; alt: boolean }[] {
  const out: { t: string; ust: boolean; alt: boolean }[] = [];
  let son = 0;
  for (const m of metin.matchAll(/([\^_])(?:\{([^}]*)\}|(.))/g)) {
    if (m.index! > son) out.push({ t: metin.slice(son, m.index), ust: false, alt: false });
    out.push({ t: m[2] ?? m[3], ust: m[1] === "^", alt: m[1] === "_" });
    son = m.index! + m[0].length;
  }
  if (son < metin.length) out.push({ t: metin.slice(son), ust: false, alt: false });
  return out;
}
export function metinGenisligi(metin: string, boyut: number): number {
  let w = 0;
  for (const p of parcala(metin)) for (const c of p.t) w += karakterGenisligi(c) * (p.ust || p.alt ? 0.7 : 1);
  return w * boyut;
}

const fark = (a: P, b: P): P => ({ x: a.x - b.x, y: a.y - b.y });
const uz = (v: P) => Math.hypot(v.x, v.y);
const birim = (v: P): P => {
  const u = uz(v) || 1;
  return { x: v.x / u, y: v.y / u };
};
const aciOf = (v: P) => Math.atan2(v.y, v.x);
const normal = (a: number) => {
  let x = a;
  while (x < 0) x += 2 * Math.PI;
  while (x >= 2 * Math.PI) x -= 2 * Math.PI;
  return x;
};

function kutuOlustur(cx: number, cy: number, metin: string, boyut: number): Kutu {
  const w = metinGenisligi(metin, boyut);
  const h = boyut * 0.82; // cap height + a little; glyphs are centred
  return { x0: cx - w / 2, y0: cy - h / 2, x1: cx + w / 2, y1: cy + h / 2 };
}
const kutuYariGen = (k: Kutu) => (k.x1 - k.x0) / 2;
const kutuYariYuk = (k: Kutu) => (k.y1 - k.y0) / 2;

/** Distance from the box centre, along unit u, at which a box of half-size (hw,hh) clears its anchor by `bosluk`. */
const uzaklik = (u: P, hw: number, hh: number, bosluk: number) => bosluk + Math.abs(u.x) * hw + Math.abs(u.y) * hh;

/** Textbook oblique projection: depth drawn at 40°, foreshortened by half. */
export function egikIzdusum([x, y, z]: [number, number, number]): [number, number] {
  const k = 0.5;
  const t = (40 * Math.PI) / 180;
  return [x + k * z * Math.cos(t), y + k * z * Math.sin(t)];
}

/**
 * Samples y = f(x) on [a, b] and splits it into runs inside the y-window
 * [lo, hi]; a run ends at the window edge (interpolated) or at a jump such as
 * a vertical asymptote.
 */
function egriOrnekle(f: (x: number) => number, a: number, b: number, lo: number, hi: number): [number, number][][] {
  const n = 240;
  const runs: [number, number][][] = [];
  let run: [number, number][] = [];
  let onceki: [number, number] | null = null;
  const icinde = (y: number) => Number.isFinite(y) && y >= lo && y <= hi;
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    const y = f(x);
    if (icinde(y)) {
      if (!run.length && onceki && Number.isFinite(onceki[1]) && Math.abs(onceki[1] - y) < (hi - lo)) {
        const kenar = onceki[1] > hi ? hi : lo;
        run.push([onceki[0] + ((x - onceki[0]) * (kenar - onceki[1])) / (y - onceki[1]), kenar]);
      }
      run.push([x, y]);
    } else if (run.length) {
      if (Number.isFinite(y) && Math.abs(y - onceki![1]) < (hi - lo)) {
        const kenar = y > hi ? hi : lo;
        run.push([onceki![0] + ((x - onceki![0]) * (kenar - onceki![1])) / (y - onceki![1]), kenar]);
      }
      runs.push(run);
      run = [];
    }
    onceki = [x, y];
  }
  if (run.length) runs.push(run);
  return runs.filter((r) => r.length > 1);
}

export function sekilYerlesim(girdi: Sekil): Yerlesim {
  const sekil: Sekil = girdi.noktalar3d
    ? {
        ...girdi,
        noktalar: {
          ...girdi.noktalar,
          ...Object.fromEntries(Object.entries(girdi.noktalar3d).map(([k, v]) => [k, egikIzdusum(v)])),
        },
      }
    : girdi;
  const adlar = Object.keys(sekil.noktalar);
  const xs = adlar.map((k) => sekil.noktalar[k][0]);
  const ys = adlar.map((k) => sekil.noktalar[k][1]);
  for (const e of sekil.elipsler ?? []) {
    const [mx, my] = sekil.noktalar[e.merkez];
    xs.push(mx - e.rx, mx + e.rx);
    ys.push(my - e.ry, my + e.ry);
  }
  // Circles widen the drawing's extent.
  for (const c of sekil.cemberler ?? []) {
    const [mx, my] = sekil.noktalar[c.merkez];
    const [px, py] = sekil.noktalar[c.nokta];
    const r = Math.hypot(px - mx, py - my);
    xs.push(mx - r, mx + r);
    ys.push(my - r, my + r);
  }
  for (const y of [...(sekil.cemberYaylari ?? []), ...(sekil.dilimler ?? [])]) {
    const [mx, my] = sekil.noktalar[y.merkez];
    const [bx, by] = sekil.noktalar[y.bas];
    const [sx, sy] = sekil.noktalar[y.son];
    const r = Math.hypot(bx - mx, by - my);
    const a0 = Math.atan2(by - my, bx - mx);
    let sweep = Math.atan2(sy - my, sx - mx) - a0;
    while (sweep <= 0) sweep += 2 * Math.PI;
    for (let i = 0; i <= 48; i++) {
      const t = a0 + (sweep * i) / 48;
      xs.push(mx + r * Math.cos(t));
      ys.push(my + r * Math.sin(t));
    }
  }
  if (sekil.eksen) {
    xs.push(sekil.eksen.x[0], sekil.eksen.x[1], 0);
    ys.push(sekil.eksen.y[0], sekil.eksen.y[1], 0);
  }
  if (sekil.sayiDogrusu) {
    xs.push(...sekil.sayiDogrusu.x);
    ys.push(sekil.sayiDogrusu.y ?? 0);
  }
  const [pencereAlt, pencereUst] = sekil.eksen?.y ?? [-Infinity, Infinity];
  const egriKosulari = (sekil.egriler ?? []).map((e) => egriOrnekle(e.f, e.x[0], e.x[1], pencereAlt, pencereUst));
  for (const runs of egriKosulari) for (const r of runs) for (const [x, y] of r) {
    xs.push(x);
    ys.push(y);
  }
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const [maksG, maksY] = sekil.boyut ?? [MAKS_G, MAKS_Y];
  // A flat figure (a number line) is fitted by its width alone.
  const olcek = Math.min(maxX > minX ? maksG / (maxX - minX) : Infinity, maxY > minY ? maksY / (maxY - minY) : Infinity, 1e6);
  const N: Record<string, P> = {};
  for (const k of adlar) {
    const [x, y] = sekil.noktalar[k];
    N[k] = { x: (x - minX) * olcek, y: (maxY - y) * olcek };
  }
  const nokta = (k: string) => {
    const p = N[k];
    if (!p) throw new Error(`Şekilde tanımsız nokta: ${k}`);
    return p;
  };

  const cokgenler = (sekil.cokgenler ?? []).map((c) => c.map(nokta));
  const cizgiler: Cizgi[] = [];
  for (const c of cokgenler) for (let i = 0; i < c.length; i++) cizgiler.push({ a: c[i], b: c[(i + 1) % c.length], tur: "ana" });
  const okUcu = (a: P, b: P, tur: Cizgi["tur"]): Cizgi[] => {
    const t = aciOf(fark(a, b));
    return [-0.42, 0.42].map((d) => ({ a: b, b: { x: b.x + 8 * Math.cos(t + d), y: b.y + 8 * Math.sin(t + d) }, tur }));
  };
  const okCizgileri: Cizgi[] = [];
  for (const d of sekil.dogrular ?? []) {
    const tur = d.kesik ? "yardimci" : d.vurgu ? "vurgu" : d.ince ? "ince" : "ana";
    cizgiler.push({ a: nokta(d.p[0]), b: nokta(d.p[1]), tur });
    if (d.ok) okCizgileri.push(...okUcu(nokta(d.p[0]), nokta(d.p[1]), tur));
  }
  const ekranda = (x: number, y: number): P => ({ x: (x - minX) * olcek, y: (maxY - y) * olcek });
  const eksenEtiketleri: { p: P; metin: string; dx: number; dy: number }[] = [];
  const oklar: Cizgi[] = [];
  if (sekil.eksen) {
    const [x0, x1] = sekil.eksen.x;
    const [y0, y1] = sekil.eksen.y;
    const xa = ekranda(x0, 0);
    const xb = ekranda(x1, 0);
    const ya = ekranda(0, y0);
    const yb = ekranda(0, y1);
    cizgiler.push({ a: xa, b: xb, tur: "ince" }, { a: ya, b: yb, tur: "ince" });
    oklar.push(
      { a: xb, b: { x: xb.x - 8, y: xb.y - 3.5 }, tur: "ince" },
      { a: xb, b: { x: xb.x - 8, y: xb.y + 3.5 }, tur: "ince" },
      { a: yb, b: { x: yb.x - 3.5, y: yb.y + 8 }, tur: "ince" },
      { a: yb, b: { x: yb.x + 3.5, y: yb.y + 8 }, tur: "ince" },
    );
    const [ax, ay] = sekil.eksen.adlar ?? ["x", "y"];
    // The y name sits left of the arrowhead; a wide letter (P) moves further left.
    eksenEtiketleri.push({ p: xb, metin: ax, dx: 2, dy: 13 }, { p: yb, metin: ay, dx: -Math.max(12, 7.5 + metinGenisligi(ay, YAZI.nokta) / 2), dy: 4 });
  }
  const egriler: Egri[] = (sekil.egriler ?? []).flatMap((e, i) =>
    egriKosulari[i].map((r) => ({ yol: r.map(([x, y]) => ekranda(x, y)), vurgu: !!e.vurgu, kesik: !!e.kesik })),
  );
  const boyaliAlanlar: P[][] = (sekil.alanlar ?? []).map((a) => {
    const n = 120;
    const sinirla = (y: number) => Math.min(Math.max(y, pencereAlt), pencereUst);
    const ust: P[] = [];
    const alt: P[] = [];
    for (let i = 0; i <= n; i++) {
      const x = a.x[0] + ((a.x[1] - a.x[0]) * i) / n;
      ust.push(ekranda(x, sinirla(a.ust(x))));
      alt.push(ekranda(x, sinirla(a.alt ? a.alt(x) : 0)));
    }
    return [...ust, ...alt.reverse()];
  });
  const tikEtiketleri: { p: P; metin: string }[] = [];
  if (sekil.sayiDogrusu) {
    const { x: [a, b], tikler } = sekil.sayiDogrusu;
    const y = sekil.sayiDogrusu.y ?? 0;
    const A = ekranda(a, y);
    const B = ekranda(b, y);
    cizgiler.push({ a: A, b: B, tur: "ince" });
    oklar.push(...okUcu(A, B, "ince"), ...okUcu(B, A, "ince"));
    for (const t of tikler) {
      const [v, metin] = typeof t === "number" ? [t, String(t).replace("-", "−")] : t;
      const p = ekranda(v, y);
      oklar.push({ a: { x: p.x, y: p.y - 4 }, b: { x: p.x, y: p.y + 4 }, tur: "ince" });
      if (metin) tikEtiketleri.push({ p, metin });
    }
  }
  const anaCizgiler = cizgiler.slice(); // structural lines, before marks
  cizgiler.push(...oklar, ...okCizgileri);

  // Centroid of the closed shapes (or all points): "outside" is away from it.
  const merkezNoktalar = cokgenler.length ? cokgenler.flat() : adlar.map(nokta);
  const merkez: P = {
    x: merkezNoktalar.reduce((s, p) => s + p.x, 0) / merkezNoktalar.length,
    y: merkezNoktalar.reduce((s, p) => s + p.y, 0) / merkezNoktalar.length,
  };
  // "Outside" is judged against the shape the segment belongs to: with two
  // separate triangles, each side looks away from its own triangle's centre.
  const sekleAit = (a: P, b: P): P => {
    const c = cokgenler.find((poly) => poly.includes(a) && poly.includes(b)) ?? cokgenler.find((poly) => poly.includes(a) || poly.includes(b));
    if (!c || cokgenler.length < 2) return merkez;
    return { x: c.reduce((s, p) => s + p.x, 0) / c.length, y: c.reduce((s, p) => s + p.y, 0) / c.length };
  };
  const disNormal = (a: P, b: P, ic = false): P => {
    const t = birim(fark(b, a));
    let n = { x: -t.y, y: t.x };
    const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    const o = sekleAit(a, b);
    const disa = n.x * (m.x - o.x) + n.y * (m.y - o.y) >= 0;
    if (disa === ic) n = { x: -n.x, y: -n.y };
    return n;
  };

  const yaylar: Yay[] = [];
  const etiketler: Etiket[] = [];
  const cemberler = (sekil.cemberler ?? []).map((c) => {
    const m = nokta(c.merkez);
    return { merkez: m, r: uz(fark(nokta(c.nokta), m)) };
  });
  // CCW-in-math arc from bas to son → screen arc (screen angles run clockwise).
  const ekranYayi = (merkez: string, bas: string, son: string) => {
    const C = nokta(merkez);
    const B0 = nokta(bas);
    const S0 = nokta(son);
    const r = uz(fark(B0, C));
    const t1 = aciOf(fark(B0, C));
    let sweep = -(aciOf(fark(S0, C)) - t1); // math-CCW sweep, positive
    while (sweep <= 1e-9) sweep += 2 * Math.PI;
    while (sweep > 2 * Math.PI) sweep -= 2 * Math.PI;
    return { merkez: C, r, t1, d: -sweep };
  };
  const dilimler: Dilim[] = (sekil.dilimler ?? []).map((d) => ({ ...ekranYayi(d.merkez, d.bas, d.son), kesme: !!d.kesme }));
  const elipsler: Elips[] = (sekil.elipsler ?? []).map((e) => {
    const m = nokta(e.merkez);
    const rx = e.rx * olcek;
    const ry = e.ry * olcek;
    let t0 = 0;
    let t1 = Math.PI; // default: lower (front) half visible
    if (e.tepe) {
      // Tangent points from the apex: work on the unit circle, map back.
      const T = nokta(e.tepe);
      const px = (T.x - m.x) / rx;
      const py = (T.y - m.y) / ry;
      const d = Math.hypot(px, py);
      if (d > 1) {
        const phi = Math.atan2(py, px);
        const a = Math.acos(1 / d);
        // apex above (py < 0): visible rim runs from the right tangent, through the front, to the left one
        t0 = phi + a;
        t1 = phi - a + 2 * Math.PI;
        if (t1 < t0) t1 += 2 * Math.PI;
        for (const t of [phi + a, phi - a]) {
          cizgiler.push({ a: T, b: { x: m.x + rx * Math.cos(t), y: m.y + ry * Math.sin(t) }, tur: "ana" });
        }
      }
    }
    return { cx: m.x, cy: m.y, rx, ry, arkaKesik: !!e.arkaKesik, t0, t1 };
  });
  const engeller: Cizgi[] = [];
  for (const e of elipsler) {
    const n = 48;
    for (let i = 0; i < n; i++) {
      const t1 = (i / n) * 2 * Math.PI;
      const t2 = ((i + 1) / n) * 2 * Math.PI;
      engeller.push({
        a: { x: e.cx + e.rx * Math.cos(t1), y: e.cy + e.ry * Math.sin(t1) },
        b: { x: e.cx + e.rx * Math.cos(t2), y: e.cy + e.ry * Math.sin(t2) },
        tur: "ana",
      });
    }
  }
  for (const e of egriler) for (let i = 0; i + 1 < e.yol.length; i++) engeller.push({ a: e.yol[i], b: e.yol[i + 1], tur: "ana" });
  // Circles that points may sit on (full circles and arcs), for label placement.
  const cevreler = [...cemberler];

  // ── Right-angle squares ──
  for (const [a, b, c] of sekil.dikler ?? []) {
    const B = nokta(b);
    const u = birim(fark(nokta(a), B));
    const v = birim(fark(nokta(c), B));
    const s = 11;
    const p1 = { x: B.x + u.x * s, y: B.y + u.y * s };
    const p2 = { x: B.x + (u.x + v.x) * s, y: B.y + (u.y + v.y) * s };
    const p3 = { x: B.x + v.x * s, y: B.y + v.y * s };
    cizgiler.push({ a: p1, b: p2, tur: "ince" }, { a: p2, b: p3, tur: "ince" });
  }

  // ── Equal-side ticks ──
  for (const e of sekil.esitler ?? []) {
    const A = nokta(e.p[0]);
    const B = nokta(e.p[1]);
    const t = birim(fark(B, A));
    const n = { x: -t.y, y: t.x };
    const adet = e.adet ?? 1;
    const m = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    for (let i = 0; i < adet; i++) {
      const s = (i - (adet - 1) / 2) * 4;
      const c = { x: m.x + t.x * s, y: m.y + t.y * s };
      cizgiler.push({ a: { x: c.x - n.x * 5, y: c.y - n.y * 5 }, b: { x: c.x + n.x * 5, y: c.y + n.y * 5 }, tur: "ince" });
    }
  }

  // ── Hatching ──
  for (const tr of sekil.taralar ?? []) {
    const A = nokta(tr.p[0]);
    const B = nokta(tr.p[1]);
    const t = birim(fark(B, A));
    const n = disNormal(A, B, tr.ic);
    const L = uz(fark(B, A));
    for (let s = 6; s < L - 2; s += 9) {
      const c = { x: A.x + t.x * s, y: A.y + t.y * s };
      // 45° strokes leaning back along the segment
      cizgiler.push({ a: c, b: { x: c.x + (n.x - t.x) * 6, y: c.y + (n.y - t.y) * 6 }, tur: "ince" });
    }
  }

  // ── Angles ──
  for (const a of sekil.acilar ?? []) {
    const B = nokta(a.p[1]);
    const u = birim(fark(nokta(a.p[0]), B));
    const v = birim(fark(nokta(a.p[2]), B));
    const t1 = aciOf(u);
    let d = aciOf(v) - t1;
    while (d <= -Math.PI) d += 2 * Math.PI;
    while (d > Math.PI) d -= 2 * Math.PI;
    const th = Math.abs(d);
    const r = a.yaricap ?? (th < 0.55 ? 26 : th < 1.2 ? 20 : 17);
    yaylar.push({ merkez: B, r, t1, d, vurgu: !!a.vurgu });
    if (a.cift) yaylar.push({ merkez: B, r: r + 4, t1, d, vurgu: !!a.vurgu });
    if (a.metin) {
      const orta = t1 + d / 2;
      const yon = { x: Math.cos(orta), y: Math.sin(orta) };
      const k0 = kutuOlustur(0, 0, a.metin, YAZI.sayi);
      const hw = kutuYariGen(k0);
      const hh = kutuYariYuk(k0);
      // Beyond the arc(s), and far enough out that the box fits inside the wedge.
      const yarim = Math.hypot(hw, hh);
      const disYay = r + (a.cift ? 4 : 0) + uzaklik(yon, hw, hh, 4);
      const kama = (yarim + 3) / Math.sin(Math.min(th / 2, Math.PI / 2));
      const dist = Math.min(Math.max(disYay, kama), 80);
      const cx = B.x + yon.x * dist;
      const cy = B.y + yon.y * dist;
      etiketler.push({
        x: cx,
        y: cy,
        metin: a.metin,
        tur: "aci",
        vurgu: !!a.vurgu,
        kutu: kutuOlustur(cx, cy, a.metin, YAZI.sayi),
        kaynak: `açı ${a.p.join("")}`,
        yon,
      });
    }
  }

  // ── Circle arcs (and their labels) ──
  for (const ya of sekil.cemberYaylari ?? []) {
    const y = ekranYayi(ya.merkez, ya.bas, ya.son);
    yaylar.push({ ...y, vurgu: !!ya.vurgu, tur: ya.vurgu && !ya.ince ? "kalin" : "ana" });
    cevreler.push({ merkez: y.merkez, r: y.r });
    if (ya.metin) {
      const orta = y.t1 + y.d / 2;
      const dis = { x: Math.cos(orta), y: Math.sin(orta) };
      const yon = ya.ic ? { x: -dis.x, y: -dis.y } : dis;
      const k0 = kutuOlustur(0, 0, ya.metin, YAZI.sayi);
      const ara = uzaklik(dis, kutuYariGen(k0), kutuYariYuk(k0), 6);
      const dist = ya.ic ? y.r - ara : y.r + ara;
      const cx = y.merkez.x + dis.x * dist;
      const cy = y.merkez.y + dis.y * dist;
      etiketler.push({ x: cx, y: cy, metin: ya.metin, tur: "kenar", vurgu: !!ya.vurgu, kutu: kutuOlustur(cx, cy, ya.metin, YAZI.sayi), kaynak: `yay ${ya.bas}${ya.son}`, yon });
    }
  }

  // ── Free text ──
  for (const yz of sekil.yazilar ?? []) {
    const p = nokta(yz.nokta);
    etiketler.push({ x: p.x, y: p.y, metin: yz.metin, tur: "kenar", vurgu: !!yz.vurgu, kutu: kutuOlustur(p.x, p.y, yz.metin, YAZI.sayi), kaynak: `yazı "${yz.metin}"`, yon: { x: 0, y: 0 }, duz: yz.duz });
  }

  // ── Side labels ──
  for (const k of sekil.kenarlar ?? []) {
    const A = nokta(k.p[0]);
    const B = nokta(k.p[1]);
    const f = k.konum ?? 0.5;
    const m = { x: A.x + (B.x - A.x) * f, y: A.y + (B.y - A.y) * f };
    const n = disNormal(A, B, k.ic);
    const k0 = kutuOlustur(0, 0, k.metin, YAZI.sayi);
    const dist = uzaklik(n, kutuYariGen(k0), kutuYariYuk(k0), 5);
    const cx = m.x + n.x * dist;
    const cy = m.y + n.y * dist;
    etiketler.push({
      x: cx,
      y: cy,
      metin: k.metin,
      tur: "kenar",
      vurgu: !!k.vurgu,
      kutu: kutuOlustur(cx, cy, k.metin, YAZI.sayi),
      kaynak: `kenar ${k.p.join("")}`,
      yon: n,
    });
  }

  // ── Dimension lines ──
  for (const o of sekil.olculer ?? []) {
    const A = nokta(o.p[0]);
    const B = nokta(o.p[1]);
    const n = disNormal(A, B, o.ic);
    const t = birim(fark(B, A));
    const ofs = 16;
    const a = { x: A.x + n.x * ofs + t.x * 3, y: A.y + n.y * ofs + t.y * 3 };
    const b = { x: B.x + n.x * ofs - t.x * 3, y: B.y + n.y * ofs - t.y * 3 };
    cizgiler.push({ a, b, tur: "ince" });
    for (const u of [a, b]) cizgiler.push({ a: { x: u.x - n.x * 4, y: u.y - n.y * 4 }, b: { x: u.x + n.x * 4, y: u.y + n.y * 4 }, tur: "ince" });
    const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    const k0 = kutuOlustur(0, 0, o.metin, YAZI.sayi);
    const dist = uzaklik(n, kutuYariGen(k0), kutuYariYuk(k0), 5);
    const cx = m.x + n.x * dist;
    const cy = m.y + n.y * dist;
    etiketler.push({ x: cx, y: cy, metin: o.metin, tur: "kenar", vurgu: !!o.vurgu, kutu: kutuOlustur(cx, cy, o.metin, YAZI.sayi), kaynak: `ölçü ${o.p.join("")}`, yon: n });
  }

  // ── Number-line tick labels (below the line) ──
  for (const t of tikEtiketleri) {
    const k0 = kutuOlustur(0, 0, t.metin, YAZI.sayi);
    const cy = t.p.y + 6 + kutuYariYuk(k0);
    etiketler.push({ x: t.p.x, y: cy, metin: t.metin, tur: "kenar", vurgu: false, kutu: kutuOlustur(t.p.x, cy, t.metin, YAZI.sayi), kaynak: `tik ${t.metin}`, yon: { x: 0, y: 1 } });
  }

  // ── Axis labels ──
  for (const e of eksenEtiketleri) {
    const cx = e.p.x + e.dx;
    const cy = e.p.y + e.dy;
    etiketler.push({ x: cx, y: cy, metin: e.metin, tur: "nokta", vurgu: false, kutu: kutuOlustur(cx, cy, e.metin, YAZI.nokta), kaynak: `eksen ${e.metin}`, yon: { x: 0, y: 0 } });
  }

  const gizli = new Set(sekil.gizli ?? []);
  // ── Label search: try 16 directions around a point, keep the one with the
  //    most room from every line, curve, dot and earlier label. The widest-gap
  //    direction is tried first and wins ties.
  const noktaIsaretleri = [...(sekil.isaretli ?? []), ...(sekil.bosNoktalar ?? [])].map(nokta);
  const bosluk = (k: Kutu, sahibi?: P): number => {
    let m = Infinity;
    for (const c of cizgiler) m = Math.min(m, kutuCizgiMesafesi(k, c.a, c.b));
    for (const c of engeller) m = Math.min(m, kutuCizgiMesafesi(k, c.a, c.b));
    for (const y of yaylar) m = Math.min(m, kutuYayMesafesi(k, y));
    for (const c of cemberler) m = Math.min(m, kutuCemberMesafesi(k, c));
    for (const d of noktaIsaretleri) if (!sahibi || uz(fark(d, sahibi)) > 0.5) m = Math.min(m, Math.hypot(Math.max(k.x0 - d.x, 0, d.x - k.x1), Math.max(k.y0 - d.y, 0, d.y - k.y1)) - 2.6);
    for (const e of etiketler) {
      const dx = Math.max(e.kutu.x0 - k.x1, k.x0 - e.kutu.x1, 0);
      const dy = Math.max(e.kutu.y0 - k.y1, k.y0 - e.kutu.y1, 0);
      m = Math.min(m, Math.hypot(dx, dy));
    }
    return m;
  };
  const konumla = (p: P, yazi: string, yon: P, ara = 5) => {
    const k0 = kutuOlustur(0, 0, yazi, YAZI.nokta);
    const dist = uzaklik(yon, kutuYariGen(k0), kutuYariYuk(k0), ara);
    const x = p.x + yon.x * dist;
    const y = p.y + yon.y * dist;
    return { x, y, kutu: kutuOlustur(x, y, yazi, YAZI.nokta), yon };
  };
  const enIyiKonum = (p: P, yazi: string, yon0: P) => {
    const t0 = Math.atan2(yon0.y, yon0.x);
    let enIyi = konumla(p, yazi, yon0);
    let enIyiPuan = -Infinity;
    // The first candidate with enough room wins, so a label that already fits
    // stays exactly where the widest-gap rule puts it.
    arama: for (const ara of [5, 10]) {
      for (let i = 0; i < 16; i++) {
        const adim = Math.ceil(i / 2) * (i % 2 ? 1 : -1); // 0, +1, -1, +2, -2, ...
        const t = t0 + (adim * Math.PI) / 8;
        const aday = konumla(p, yazi, { x: Math.cos(t), y: Math.sin(t) }, ara);
        const b = bosluk(aday.kutu, p);
        if (b >= BOSLUK_MIN) {
          enIyi = aday;
          break arama;
        }
        if (b > enIyiPuan) {
          enIyiPuan = b;
          enIyi = aday;
        }
      }
    }
    // Already placed with care: the later nudge pass must not move it.
    return { ...enIyi, yon: { x: 0, y: 0 } };
  };
  if (sekil.eksen && sekil.eksen.o !== false) {
    // Skip "O" only when a labelled point already sits on the origin.
    const origindeNokta = Object.entries(sekil.noktalar).some(([ad, [x, y]]) => !gizli.has(ad) && Math.abs(x) < 1e-9 && Math.abs(y) < 1e-9);
    if (!origindeNokta) {
      const o = ekranda(0, 0);
      const yer = enIyiKonum(o, "O", birim({ x: -1, y: 1 }));
      etiketler.push({ x: yer.x, y: yer.y, metin: "O", tur: "nokta", vurgu: false, kutu: yer.kutu, kaynak: "eksen O", yon: yer.yon });
    }
  }

  // ── Curve labels: beside the curve near metinX, in the freest direction ──
  (sekil.egriler ?? []).forEach((e, i) => {
    if (!e.metin) return;
    const runs = egriKosulari[i];
    const hepsi = runs.flat();
    if (!hepsi.length) return;
    const hedef = e.metinX ?? e.x[0] + (e.x[1] - e.x[0]) * 0.8;
    const [mx, my] = hepsi.reduce((a, b) => (Math.abs(b[0] - hedef) < Math.abs(a[0] - hedef) ? b : a));
    const t = ((e.metinYonu ?? 90) * Math.PI) / 180;
    const yer = enIyiKonum(ekranda(mx, my), e.metin, { x: Math.cos(t), y: -Math.sin(t) });
    etiketler.push({ x: yer.x, y: yer.y, metin: e.metin, tur: "kenar", vurgu: !!e.vurgu, kutu: yer.kutu, kaynak: `eğri "${e.metin}"`, yon: yer.yon, duz: e.duz });
  });

  // ── Point labels: centre of the widest free gap around the point ──
  for (const ad of adlar) {
    if (gizli.has(ad)) continue;
    const p = N[ad];
    const yonler: number[] = [];
    for (const c of anaCizgiler) {
      const ua = uz(fark(c.a, p));
      const ub = uz(fark(c.b, p));
      if (ua < 0.5) yonler.push(aciOf(fark(c.b, p)));
      else if (ub < 0.5) yonler.push(aciOf(fark(c.a, p)));
      else {
        // point lying on the segment's interior
        const L = uz(fark(c.b, c.a));
        if (Math.abs(ua + ub - L) < 0.5) yonler.push(aciOf(fark(c.a, p)), aciOf(fark(c.b, p)));
      }
    }
    for (const y of yaylar) {
      if (uz(fark(y.merkez, p)) < 0.5) yonler.push(y.t1 + y.d / 2); // keep clear of angle labels
    }
    for (const e of egriler) {
      // a point on a graph: block both directions along the curve
      const j = e.yol.findIndex((q) => uz(fark(q, p)) < 2);
      if (j >= 0) {
        const once = e.yol[Math.max(0, j - 4)];
        const sonra = e.yol[Math.min(e.yol.length - 1, j + 4)];
        if (uz(fark(once, p)) > 0.5) yonler.push(aciOf(fark(once, p)));
        if (uz(fark(sonra, p)) > 0.5) yonler.push(aciOf(fark(sonra, p)));
      }
    }
    for (const c of cevreler) {
      // a point on a circle: block the inward direction and both tangents
      if (Math.abs(uz(fark(p, c.merkez)) - c.r) < 0.8) {
        const ic = aciOf(fark(c.merkez, p));
        yonler.push(ic, ic + Math.PI / 2, ic - Math.PI / 2);
      }
    }
    let yon: P;
    const elle = sekil.etiketYonu?.[ad];
    if (elle != null) {
      const t = (elle * Math.PI) / 180;
      yon = { x: Math.cos(t), y: -Math.sin(t) };
    } else if (yonler.length === 0) {
      yon = birim(fark(p, merkez));
    } else {
      const s = yonler.map(normal).sort((a, b) => a - b);
      let enIyi = 0;
      let bas = s[0];
      for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = i + 1 < s.length ? s[i + 1] : s[0] + 2 * Math.PI;
        if (b - a > enIyi) {
          enIyi = b - a;
          bas = a;
        }
      }
      const o = bas + enIyi / 2;
      yon = { x: Math.cos(o), y: Math.sin(o) };
    }
    const yazi = sekil.etiketMetni?.[ad] ?? ad;
    const yer = elle != null ? konumla(p, yazi, yon) : enIyiKonum(p, yazi, yon);
    etiketler.push({
      x: yer.x,
      y: yer.y,
      metin: yazi,
      tur: "nokta",
      vurgu: !!sekil.vurguluNoktalar?.includes(ad),
      kutu: yer.kutu,
      kaynak: `nokta ${ad}`,
      yon: yer.yon,
    });
  }

  // ── Nudge: push any label that touches a line or arc outward, 2 px at a time ──
  for (const e of etiketler) {
    for (let adim = 0; adim < 8 && (cizimeDegiyor(e.kutu, [...cizgiler, ...engeller], yaylar) || cemberler.some((c) => kutuCemberMesafesi(e.kutu, c) < BOSLUK_MIN)); adim++) {
      e.x += e.yon.x * 2;
      e.y += e.yon.y * 2;
      e.kutu = { x0: e.kutu.x0 + e.yon.x * 2, y0: e.kutu.y0 + e.yon.y * 2, x1: e.kutu.x1 + e.yon.x * 2, y1: e.kutu.y1 + e.yon.y * 2 };
    }
  }

  // ── viewBox: everything drawn, plus a margin ──
  let x0 = Infinity,
    y0 = Infinity,
    x1 = -Infinity,
    y1 = -Infinity;
  const ekle = (x: number, y: number) => {
    x0 = Math.min(x0, x);
    y0 = Math.min(y0, y);
    x1 = Math.max(x1, x);
    y1 = Math.max(y1, y);
  };
  for (const c of cizgiler) {
    ekle(c.a.x, c.a.y);
    ekle(c.b.x, c.b.y);
  }
  for (const k of Object.values(N)) ekle(k.x, k.y);
  for (const e of egriler) for (const q of e.yol) ekle(q.x, q.y);
  for (const e of elipsler) {
    ekle(e.cx - e.rx, e.cy - e.ry);
    ekle(e.cx + e.rx, e.cy + e.ry);
  }
  for (const y of yaylar) {
    if (y.tur !== "ana" && y.tur !== "kalin") continue;
    for (let i = 0; i <= 48; i++) {
      const t = y.t1 + (y.d * i) / 48;
      ekle(y.merkez.x + y.r * Math.cos(t), y.merkez.y + y.r * Math.sin(t));
    }
  }
  for (const e of etiketler) {
    ekle(e.kutu.x0, e.kutu.y0);
    ekle(e.kutu.x1, e.kutu.y1);
  }
  const pay = 8;
  return {
    vb: { x0: Math.min(x0, ...cemberler.map((c) => c.merkez.x - c.r)) - pay, y0: Math.min(y0, ...cemberler.map((c) => c.merkez.y - c.r)) - pay, x1: Math.max(x1, ...cemberler.map((c) => c.merkez.x + c.r)) + pay, y1: Math.max(y1, ...cemberler.map((c) => c.merkez.y + c.r)) + pay },
    boyali: [...(sekil.boyali ?? []).map((b) => b.map(nokta)), ...boyaliAlanlar],
    bosNoktalar: (sekil.bosNoktalar ?? []).map(nokta),
    egriler,
    bolgeler: (sekil.bolgeler ?? []).map((b) => {
      const cember = (ad: string) => {
        const c = cemberler.find((c) => c.merkez === N[ad]);
        if (!c) throw new Error(`Bölge için çember yok: ${ad}`);
        return c;
      };
      return { ic: b.ic.map(cember), dis: (b.dis ?? []).map(cember) };
    }),
    cemberler,
    dilimler,
    elipsler,
    engeller,
    noktalar: (sekil.isaretli ?? []).map(nokta),
    cokgenler,
    cizgiler,
    yaylar,
    etiketler,
  };
}

// ── Checker ──────────────────────────────────────────────────────────────────

function kutuYayMesafesi(k: Kutu, yay: Yay): number {
  let enAz = Infinity;
  const n = 24;
  for (let i = 0; i <= n; i++) {
    const t = yay.t1 + (yay.d * i) / n;
    const x = yay.merkez.x + yay.r * Math.cos(t);
    const y = yay.merkez.y + yay.r * Math.sin(t);
    const dx = Math.max(k.x0 - x, 0, x - k.x1);
    const dy = Math.max(k.y0 - y, 0, y - k.y1);
    enAz = Math.min(enAz, Math.hypot(dx, dy));
  }
  return enAz;
}

function kutuCemberMesafesi(k: Kutu, c: { merkez: P; r: number }): number {
  let enAz = Infinity;
  for (let i = 0; i < 72; i++) {
    const t = (i / 72) * 2 * Math.PI;
    const x = c.merkez.x + c.r * Math.cos(t);
    const y = c.merkez.y + c.r * Math.sin(t);
    const dx = Math.max(k.x0 - x, 0, x - k.x1);
    const dy = Math.max(k.y0 - y, 0, y - k.y1);
    enAz = Math.min(enAz, Math.hypot(dx, dy));
  }
  return enAz;
}

function cizimeDegiyor(k: Kutu, cizgiler: Cizgi[], yaylar: Yay[]): boolean {
  return cizgiler.some((c) => kutuCizgiMesafesi(k, c.a, c.b) < BOSLUK_MIN) || yaylar.some((y) => kutuYayMesafesi(k, y) < BOSLUK_MIN);
}

function kutuCizgiMesafesi(k: Kutu, a: P, b: P): number {
  // 0 if the segment enters the box; otherwise sampled min distance.
  let enAz = Infinity;
  const L = uz(fark(b, a));
  const adim = Math.max(1, Math.ceil(L / 1.5));
  for (let i = 0; i <= adim; i++) {
    const x = a.x + ((b.x - a.x) * i) / adim;
    const y = a.y + ((b.y - a.y) * i) / adim;
    const dx = Math.max(k.x0 - x, 0, x - k.x1);
    const dy = Math.max(k.y0 - y, 0, y - k.y1);
    enAz = Math.min(enAz, Math.hypot(dx, dy));
  }
  return enAz;
}

const BOSLUK_MIN = 3.5;

/** Human-readable problems; empty means the figure passed. */
export function sekilKontrol(y: Yerlesim): string[] {
  const sorunlar: string[] = [];
  for (const e of y.etiketler) {
    for (const c of y.cizgiler) {
      const d = kutuCizgiMesafesi(e.kutu, c.a, c.b);
      if (d < BOSLUK_MIN) {
        sorunlar.push(`${e.kaynak} ("${e.metin}") bir çizgiye ${d < 0.01 ? "değiyor" : `çok yakın (${d.toFixed(1)} px)`}`);
        break;
      }
    }
    for (const yay of y.yaylar) {
      const enAz = kutuYayMesafesi(e.kutu, yay);
      if (enAz < BOSLUK_MIN) {
        sorunlar.push(`${e.kaynak} ("${e.metin}") bir açı yayına ${enAz < 0.01 ? "değiyor" : "çok yakın"}`);
        break;
      }
    }
  }
  for (const e of y.etiketler) {
    for (const c of y.engeller) {
      if (kutuCizgiMesafesi(e.kutu, c.a, c.b) < BOSLUK_MIN) {
        sorunlar.push(`${e.kaynak} ("${e.metin}") bir eğriye değiyor`);
        break;
      }
    }
    for (const c of y.cemberler) {
      if (kutuCemberMesafesi(e.kutu, c) < BOSLUK_MIN) sorunlar.push(`${e.kaynak} ("${e.metin}") çembere değiyor`);
    }
  }
  for (let i = 0; i < y.etiketler.length; i++) {
    for (let j = i + 1; j < y.etiketler.length; j++) {
      const a = y.etiketler[i].kutu;
      const b = y.etiketler[j].kutu;
      const dx = Math.max(a.x0 - b.x1, b.x0 - a.x1, 0);
      const dy = Math.max(a.y0 - b.y1, b.y0 - a.y1, 0);
      if (Math.hypot(dx, dy) < 3) {
        sorunlar.push(`${y.etiketler[i].kaynak} ile ${y.etiketler[j].kaynak} etiketleri çakışıyor`);
      }
    }
  }
  return sorunlar;
}
