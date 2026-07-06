import katex from "katex";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";

/**
 * Build-time KaTeX rendering for the whole site. Replaces rehype-katex with
 * three deliberate differences:
 *
 * 1. MEMORY — output: "html" only, no MathML twin. rehype-katex's default
 *    (htmlAndMathml) doubles every formula's compiled size across ~141
 *    math-heavy MDX pages, and the build historically OOM'd Vercel's build
 *    machine (SIGKILL). HTML-only builds measure ~2.3 GB peak locally —
 *    comfortably inside Vercel's 8 GB. If you want the MathML twin back
 *    (better a11y/SEO), re-measure peak build memory first.
 *
 * 2. ACCESSIBILITY/SEO — since there is no MathML for screen readers, each
 *    rendered formula gets role="img" + aria-label with the original LaTeX
 *    source. Crawlers additionally see the visible KaTeX text content.
 *
 * 3. DISPLAY HEURISTIC — our authors write display math as single-line
 *    `$$…$$`, which micromark parses as INLINE math (only fence-on-own-line
 *    `$$` becomes a flow block). The old client renderer's heuristic is
 *    reproduced here: inline math that is the only content of its paragraph
 *    renders in displayMode. True flow blocks (<pre><code class="math-display">)
 *    are unwrapped from their <pre> and rendered in displayMode too.
 *
 * Renders are cached by (mode, tex) — formulas repeat heavily across lessons,
 * so this saves real build CPU. Nodes are cloned per use since hast trees are
 * mutated downstream.
 */

const cache = new Map();

function renderTex(tex, displayMode) {
  const key = (displayMode ? "D:" : "I:") + tex;
  let nodes = cache.get(key);
  if (!nodes) {
    const html = katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      strict: "ignore",
      output: "html",
    });
    nodes = fromHtmlIsomorphic(html, { fragment: true }).children;
    cache.set(key, nodes);
  }
  const cloned = structuredClone(nodes);
  for (const n of cloned) {
    if (n.type === "element") {
      n.properties.role = "img";
      n.properties.ariaLabel = tex;
    }
  }
  return cloned;
}

const isWhitespaceText = (n) => n.type === "text" && !n.value.trim();

const hasClass = (node, cls) =>
  node.type === "element" &&
  Array.isArray(node.properties?.className) &&
  node.properties.className.includes(cls);

const isMathEl = (n) => hasClass(n, "math-inline") || hasClass(n, "math-display");

const textOf = (node) =>
  (node.children ?? [])
    .map((c) => (c.type === "text" ? c.value : textOf(c)))
    .join("");

/** True when `child` is the only non-whitespace child of a <p>. */
function isLoneInParagraph(parent, child) {
  if (parent.type !== "element" || parent.tagName !== "p") return false;
  return parent.children.every((c) => c === child || isWhitespaceText(c));
}

/** For <pre><code class="math-display"> flow blocks: the code element, else null. */
function flowMathIn(node) {
  if (node.type !== "element" || node.tagName !== "pre") return null;
  const real = (node.children ?? []).filter((c) => !isWhitespaceText(c));
  return real.length === 1 && hasClass(real[0], "math-display") ? real[0] : null;
}

export default function rehypeKatexServer() {
  return function transform(node) {
    const children = node.children;
    if (!children) return;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const flowCode = flowMathIn(child);
      if (flowCode) {
        // Replace the whole <pre> wrapper with the rendered display block.
        const rendered = renderTex(textOf(flowCode), true);
        children.splice(i, 1, ...rendered);
        i += rendered.length - 1;
      } else if (isMathEl(child)) {
        const displayMode =
          hasClass(child, "math-display") || isLoneInParagraph(node, child);
        const rendered = renderTex(textOf(child), displayMode);
        children.splice(i, 1, ...rendered);
        i += rendered.length - 1;
      } else {
        transform(child);
      }
    }
  };
}
