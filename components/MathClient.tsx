"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import katex from "katex";

// We don't run rehype-katex at build time — rendering KaTeX for all ~141 pages
// during the build OOM'd Vercel's build machine. remark-math instead emits the
// LaTeX as the text content of <code class="language-math math-inline">…</code>
// (and shields the braces from MDX). We render those to KaTeX in the browser.
//
// Note: this MDX pipeline collapses display ($$…$$) blocks to "math-inline" too,
// but a display block ends up as the ONLY child of its own <p>, whereas inline
// math sits amid other text. We use that to pick displayMode.
export default function MathClient() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      ".math-inline:not([data-katex]), .math-display:not([data-katex])",
    );
    nodes.forEach((el) => {
      const tex = el.textContent ?? "";
      const parent = el.parentElement;
      const aloneInParagraph =
        parent?.tagName === "P" &&
        (parent.textContent ?? "").trim() === tex.trim();
      const displayMode =
        el.classList.contains("math-display") || aloneInParagraph;
      try {
        katex.render(tex, el, {
          displayMode,
          throwOnError: false,
          output: "html",
        });
        if (displayMode) el.classList.add("math-rendered-display");
      } catch {
        // leave the raw LaTeX text in place if a single expression fails
      }
      el.setAttribute("data-katex", "");
    });
  }, [pathname]);

  return null;
}
