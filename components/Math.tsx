import katex from "katex";

// Renders KaTeX to HTML on the server so it ships as static markup.
// Used inside .tsx files (the MDX body uses $...$ directly instead).
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
  });
  return display ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );
}
