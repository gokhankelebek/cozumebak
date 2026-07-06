import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatexServer from "./lib/rehypeKatexServer.mjs";

const withMDX = createMDX({
  options: {
    // remark-math parses $...$ / $$...$$ into math nodes (and shields the
    // LaTeX braces from MDX). rehypeKatexServer then renders every formula to
    // static HTML AT BUILD TIME — crawlers see real math, no client JS needed.
    // See lib/rehypeKatexServer.mjs for the three key decisions (HTML-only
    // output for memory, aria-label for accessibility, and the single-line
    // $$…$$ display heuristic). The MathML twin that rehype-katex emits by
    // default is what OOM'd the build machine historically — do not re-enable
    // it without re-measuring peak build memory.
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatexServer],
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
  webpack: (config, { dev }) => {
    // On Vercel (8 GB, 2 cores) the persistent PackFileCache OOM'd the build:
    // restoring the stale pre-KaTeX pack and re-serializing a module graph
    // with 141 pages of build-time-rendered math spikes memory well past the
    // container limit (SIGKILL ~5 min in; local clean builds pass at ~2.5 GB).
    // An in-memory cache skips both the restore and the serialization spike.
    if (!dev && process.env.VERCEL) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default withMDX(nextConfig);
