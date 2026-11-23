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
  /**
   * Solids: named 3-D points [x, y, z] (x right, y up, z into the page),
   * drawn in the textbook oblique projection (depth at 40°, halved). They join
   * `noktalar` and can be used everywhere a point name is expected; mark
   * hidden edges with `kesik`.
   */
  noktalar3d?: Record<string, [number, number, number]>;
  /**
   * Ellipses (circular bases of cylinders and cones, a sphere's equator),
   * radii in the same units as the points. `arkaKesik` dashes the back
   * (upper) half, as for a base seen from above. `tepe` (a cone's apex above
   * the base) draws the cone's sides tangent to the ellipse and splits the
   * visible and hidden parts of the rim at the tangent points.
   */
  elipsler?: { merkez: string; rx: number; ry: number; arkaKesik?: boolean; tepe?: string }[];
  /** Closed shapes, each a list of point names in order. */
  cokgenler?: string[][];
  /** Extra segments (diagonals, heights, extensions). */
  /** `vurgu` draws the segment thick in the accent colour (the line a question is about). */
  dogrular?: { p: [string, string]; kesik?: boolean; vurgu?: boolean; /** arrowhead at p[1] (a ray) */ ok?: boolean }[];
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
  /**
   * Free text centred on a (usually hidden) point, e.g. an area written inside a region.
   * `duz` sets it upright in KaTeX_Main (Roman numerals, "sin +"), not as math italics.
   */
  yazilar?: { nokta: string; metin: string; vurgu?: boolean; duz?: boolean }[];
  /** Shaded regions (filled light grey, under the lines), e.g. an area asked for. */
  boyali?: string[][];
  /** Points drawn as small filled dots (points on a line, marked positions). */
  isaretli?: string[];
  /** Override a point label's direction, in degrees (math convention: 0 = right, 90 = up). */
  etiketYonu?: Record<string, number>;
  /**
   * Coordinate axes over the given window (in the same units as the points,
   * which are then real coordinates): arrows, x / y / O labels, no grid — a
   * grid would let the figure give the answer away.
   */
  eksen?: { x: [number, number]; y: [number, number]; adlar?: [string, string]; /** false: no "O" at the origin */ o?: boolean };
  /**
   * Function graphs y = f(x) on x ∈ [x0, x1], clipped to the axis window
   * (`eksen.y`) when there is one, so asymptotic branches stop at the frame.
   * `metin` labels the curve near x = `metinX` (default: 80% along), placed
   * in the free direction closest to `metinYonu` (degrees, default 90 = up).
   */
  egriler?: {
    f: (x: number) => number;
    x: [number, number];
    vurgu?: boolean;
    kesik?: boolean;
    metin?: string;
    metinX?: number;
    metinYonu?: number;
    /** Set the label upright (words such as "kesen"). */
    duz?: boolean;
  }[];
  /** Shaded regions between two graphs on [x0, x1]: `ust` above, `alt` below (default the x-axis). */
  alanlar?: { ust: (x: number) => number; alt?: (x: number) => number; x: [number, number] }[];
  /**
   * Venn shading: each region is the part inside every circle in `ic` and
   * outside every circle in `dis`; circles are named by their centre point
   * (as in `cemberler`). A union is several regions.
   */
  bolgeler?: { ic: string[]; dis?: string[] }[];
  /**
   * A number line along y = `y` (default 0) over [x0, x1], arrows at both
   * ends, with tick marks and labels below at `tikler` (a value, or a value
   * and its label text).
   */
  sayiDogrusu?: { x: [number, number]; y?: number; tikler: (number | [number, string])[] };
  /** Points drawn as open circles (a value the function does not take). */
  bosNoktalar?: string[];
  /** Point labels drawn in the accent colour (the unknown point). */
  vurguluNoktalar?: string[];
  /** Label text for a point instead of its name, e.g. { D: "D(2, 3)", Y: "12" }. */
  etiketMetni?: Record<string, string>;
  /** Point names that get no letter label (helper points). */
  gizli?: string[];
  /**
   * Drawing area for the points in px, [width, height] (default [270, 230],
   * the quiz size). Lesson figures use a larger box; type and line weights
   * stay the same.
   */
  boyut?: [number, number];
}
