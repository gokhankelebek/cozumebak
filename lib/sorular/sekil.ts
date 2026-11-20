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
  /** Angle arcs at the middle point p[1], between rays to p[0] and p[2]. */
  acilar?: { p: [string, string, string]; metin?: string; vurgu?: boolean; cift?: boolean }[];
  /** Right-angle squares at the middle point. */
  dikler?: [string, string, string][];
  /** Equal-length ticks on a segment (1, 2 or 3 strokes). */
  esitler?: { p: [string, string]; adet?: 1 | 2 | 3 }[];
  /** Hatching along a segment (ground, wall), on the outer side unless `ic`. */
  taralar?: { p: [string, string]; ic?: boolean }[];
  /** Points drawn as small filled dots (points on a line, marked positions). */
  isaretli?: string[];
  /** Point names that get no letter label (helper points). */
  gizli?: string[];
}
