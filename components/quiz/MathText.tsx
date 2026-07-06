import { Fragment } from "react";
import Math from "@/components/Math";

// Renders a quiz string that mixes Turkish text with $...$ math segments.
// Math is rendered server-side by the existing <Math> (KaTeX renderToString),
// so quiz content ships as static, crawlable HTML like the rest of the site.
export default function MathText({ text }: { text: string }) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("$") && part.endsWith("$") && part.length > 2 ? (
          <Math key={i} tex={part.slice(1, -1)} />
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
