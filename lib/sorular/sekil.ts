// ─────────────────────────────────────────────────────────────────────────────
// Soru şekilleri — a small declarative geometry spec for quiz questions.
//
// Authors give named points in plain math coordinates (y up, any unit). The
// layout engine (./sekilYerlesim.ts) fits them, places every label (points
// in the widest free gap around them, side labels off the edge, angle labels
// inside the wedge) and the checker reports any label that touches a line,
// an arc or another label. components/quiz/SoruSekli.tsx draws the result.
//
// House style (Turkish exam/publisher look): thin dark lines, no fill, math
// fonts (KaTeX_Math italic for letters, KaTeX_Main for numbers), arcs for
// angles, squares for right angles, ticks for equal sides, hatching for
// ground/walls. Figures must never reveal the answer: mark the unknown with
// "?" or a variable.
//
// Review every figure at /dev/sekiller (development only) before shipping.
// ─────────────────────────────────────────────────────────────────────────────

export type Nokta = [number, number];

export interface Sekil {
  /** Screen-reader description of the figure (required). */
  aciklama: string;
  /** Named points, math coordinates (y grows upward). */
  noktalar: Record<string, Nokta>;
  /** Closed shapes, each a list of point names in order. */
  cokgenler?: string[][];
  /** Extra segments (diagonals, heights, extensions). */
  dogrular?: { p: [string, string]; kesik?: boolean }[];
  /**
   * Side labels at the segment's midpoint, on the outer side. `ic` puts it on
   * the inner side; `konum` (0–1) slides it along the segment.
   */
  kenarlar?: { p: [string, string]; metin: string; vurgu?: boolean; ic?: boolean; konum?: number }[];
  /**
   * Dimension lines: a thin line parallel to the segment, offset to the outer
   * side (or inner with `ic`), with end ticks and the label beside it. Use when
   * the measured length spans other points (e.g. |AC| with E on it).
   */
  olculer?: { p: [string, string]; metin: string; vurgu?: boolean; ic?: boolean }[];
  /** Angle arcs at the middle point p[1], between rays to p[0] and p[2]. */
  acilar?: { p: [string, string, string]; metin?: string; vurgu?: boolean; cift?: boolean; yaricap?: number }[];
  /** Right-angle squares at the middle point. */
  dikler?: [string, string, string][];
  /** Equal-length ticks on a segment (1, 2 or 3 strokes). */
  esitler?: { p: [string, string]; adet?: 1 | 2 | 3 }[];
  /** Hatching along a segment (ground, wall), on the outer side unless `ic`. */
  taralar?: { p: [string, string]; ic?: boolean }[];
  /** Circles through a point: centre `merkez`, radius = distance to `nokta`. */
  cemberler?: { merkez: string; nokta: string }[];
  /**
   * Circle arcs, counter-clockwise (math sense) from `bas` to `son` around
   * `merkez`. Plain arcs draw a partial circle (semicircles); `vurgu` draws the
   * arc thick in the accent colour (the arc a question is about); add `ince`
   * to keep it at normal width (for long arcs). `metin`
   * labels the arc outside its midpoint ("64°", "3x").
   */
  cemberYaylari?: { merkez: string; bas: string; son: string; vurgu?: boolean; ince?: boolean; metin?: string; ic?: boolean }[];
  /** Shaded circle pieces, CCW from `bas` to `son`: a sector, or with `kesme` the segment cut off by the chord. */
  dilimler?: { merkez: string; bas: string; son: string; kesme?: boolean }[];
  /** Free text centred on a (usually hidden) point, e.g. an area written inside a region. */
  yazilar?: { nokta: string; metin: string; vurgu?: boolean }[];
  /** Shaded regions (filled light grey, under the lines), e.g. an area asked for. */
  boyali?: string[][];
  /** Points drawn as small filled dots (points on a line, marked positions). */
  isaretli?: string[];
  /** Override a point label's direction, in degrees (math convention: 0 = right, 90 = up). */
  etiketYonu?: Record<string, number>;
  /** Point names that get no letter label (helper points). */
  gizli?: string[];
}
