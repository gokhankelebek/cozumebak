import { publishedPosts } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

// RSS 2.0 feed for the blog. Served at /blog/rss.xml and referenced from the
// blog pages' <head> via alternates.types in lib/seo.ts.
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// "2026-06-05" → RFC-822 (RSS pubDate). Fixed midnight UTC; no time component
// is stored in the manifest.
function rfc822(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

export async function GET() {
  const posts = publishedPosts();
  const feedUrl = `${SITE_URL}/blog/rss.xml`;
  const lastBuild = posts[0] ? rfc822(posts[0].updated ?? posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.slug}`;
      const cats = p.tags.map((t) => `<category>${esc(t)}</category>`).join("");
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <description>${esc(p.description)}</description>
      ${cats}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)} — Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>Matematik müfredatı, MEB güncellemeleri ve öğrenme üzerine yazılar.</description>
    <language>tr-TR</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
