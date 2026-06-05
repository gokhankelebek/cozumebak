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
  // 141 KaTeX-rendered MDX pages make the production compile memory-heavy.
  // This trades a little build time for a much lower peak heap so the build
  // doesn't OOM on memory-capped CI/deploy containers (e.g. Vercel).
  experimental: { webpackMemoryOptimizations: true },
};

export default withMDX(nextConfig);
