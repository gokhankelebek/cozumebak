import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TAGS, getTag, postsByTag } from "@/lib/blog";
import { tagMetadata } from "@/lib/seo";
import PostCard from "@/components/PostCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return TAGS.map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  return tagMetadata(tag);
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const meta = getTag(tag);
  if (!meta) notFound();

  const posts = postsByTag(tag);

  return (
    <main>
      <nav className="crumb">
        <span>
          <Link href="/">Anasayfa</Link>
        </span>
        <span>
          {" › "}
          <Link href="/blog">Blog</Link>
        </span>
        <span>
          {" › "}
          <strong>{meta.label}</strong>
        </span>
      </nav>

      <header className="konu-head">
        <p className="eyebrow">Etiket</p>
        <h1>{meta.label}</h1>
        <p className="lead">
          {meta.label} etiketli {posts.length} yazı.
        </p>
      </header>

      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
