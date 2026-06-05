import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const withMDX = createMDX({
  options: {
    // remark-math parses $...$ / $$...$$ into math nodes (and shields the LaTeX
    // braces from MDX). We deliberately do NOT run rehype-katex at build time:
    // rendering KaTeX for all ~141 pages during the build blew past Vercel's
    // build-machine memory (OOM/SIGKILL). Instead the math is emitted as
    // <span class="math math-inline">…</span> / <div class="math math-display">
    // and rendered in the browser by <MathClient> (components/MathClient.tsx).
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // .mdx files in app/ become routes, e.g. app/konular/turevin-tanimi/page.mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: { ignoreDuringBuilds: true },
  // 141 KaTeX-rendered MDX pages make the production build memory-heavy.
  // - webpackMemoryOptimizations: lowers peak heap during the webpack compile.
  // - memoryBasedWorkersCount: sizes the static-generation worker pool by
  //   available RAM instead of CPU count, so a many-core CI box doesn't spawn
  //   a worker per core and OOM the container (the SIGKILL we hit on deploy).
  experimental: {
    webpackMemoryOptimizations: true,
    memoryBasedWorkersCount: true,
  },
};

export default withMDX(nextConfig);
