import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const withMDX = createMDX({
  options: {
    // remark-math finds $...$ / $$...$$; rehype-katex renders it to HTML
    // at BUILD TIME (server-side) — so search engines index the math.
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex],
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
