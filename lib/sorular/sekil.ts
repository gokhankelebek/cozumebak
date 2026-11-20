// ─────────────────────────────────────────────────────────────────────────────
// Soru şekilleri — a small declarative geometry spec for quiz questions.
//
// Authors give named points in plain math coordinates (y up, any unit); the
// renderer (components/quiz/SoruSekli.tsx) fits them into an SVG, places point
// labels outward, and draws segments, angle arcs, right-angle marks and side
// labels in the site's figure style. Figures are schematic, like ÖSYM's: they
// must never reveal the answer — label the unknown with "?" or a variable.
// ─────────────────────────────────────────────────────────────────────────────

export type Nokta = [number, number];

export interface Sekil {
  /** Screen-reader description of the figure (required). */
  aciklama: string;
  /** Named points, math coordinates (y grows upward). */
  noktalar: Record<string, Nokta>;
  /** Filled polygons, each a list of point names in order. */
  cokgenler?: string[][];
  /** Extra segments (diagonals, heights, extensions). */
  dogrular?: { p: [string, string]; kesik?: boolean }[];
  /** Side labels placed at the segment's midpoint, outside the figure. */
  kenarlar?: { p: [string, string]; metin: string; vurgu?: boolean; ic?: boolean }[];
  /** Angle arcs at the middle point p[1], between rays to p[0] and p[2]. */
  acilar?: { p: [string, string, string]; metin?: string; vurgu?: boolean; cift?: boolean }[];
  /** Right-angle squares at the middle point. */
  dikler?: [string, string, string][];
  /** Point names that get no letter label (helper points). */
  gizli?: string[];
}
