import katex from "katex";

// Renders KaTeX to HTML on the server so it ships as static markup.
// Used inside .tsx files (the MDX body uses $...$ directly instead).
// Mirrors lib/rehypeKatexServer.mjs: HTML-only output (no MathML twin —
// it triples textContent and bloats pages) with role="img" + aria-label
// carrying the LaTeX source for screen readers.
export default function Math({
  tex,
  display = false,
}: {
  tex: string;
  display?: boolean;
}) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    output: "html",
  });
  return display ? (
    <div role="img" aria-label={tex} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span role="img" aria-label={tex} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
