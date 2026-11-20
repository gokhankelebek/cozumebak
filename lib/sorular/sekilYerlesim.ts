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
}
export interface Cizgi {
  a: P;
  b: P;
  tur: "ana" | "yardimci" | "ince";
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
export interface Yerlesim {
  vb: Kutu; // viewBox
  noktalar: P[]; // dot markers
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
export function metinGenisligi(metin: string, boyut: number): number {
  let w = 0;
  for (const c of metin) w += karakterGenisligi(c);
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
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const olcek = Math.min(MAKS_G / (maxX - minX || 1), MAKS_Y / (maxY - minY || 1));
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
  for (const d of sekil.dogrular ?? []) cizgiler.push({ a: nokta(d.p[0]), b: nokta(d.p[1]), tur: d.kesik ? "yardimci" : "ana" });
  const anaCizgiler = cizgiler.slice(); // structural lines, before marks

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
    etiketler.push({ x: p.x, y: p.y, metin: yz.metin, tur: "kenar", vurgu: !!yz.vurgu, kutu: kutuOlustur(p.x, p.y, yz.metin, YAZI.sayi), kaynak: `yazı "${yz.metin}"`, yon: { x: 0, y: 0 } });
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

  // ── Point labels: centre of the widest free gap around the point ──
  const gizli = new Set(sekil.gizli ?? []);
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
    const k0 = kutuOlustur(0, 0, ad, YAZI.nokta);
    const dist = uzaklik(yon, kutuYariGen(k0), kutuYariYuk(k0), 5);
    const cx = p.x + yon.x * dist;
    const cy = p.y + yon.y * dist;
    etiketler.push({
      x: cx,
      y: cy,
      metin: ad,
      tur: "nokta",
      vurgu: false,
      kutu: kutuOlustur(cx, cy, ad, YAZI.nokta),
      kaynak: `nokta ${ad}`,
      yon,
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
    boyali: (sekil.boyali ?? []).map((b) => b.map(nokta)),
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
        sorunlar.push(`${e.kaynak} ("${e.metin}") bir elipse değiyor`);
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
