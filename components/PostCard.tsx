import Link from "next/link";
import { tagsOf, type BlogPost } from "@/lib/blog";
import { formatDateTR } from "@/components/BlogPost";

// One blog post card, used on the blog index, tag pages and the homepage strip.
export default function PostCard({ post }: { post: BlogPost }) {
  const tags = tagsOf(post);
  return (
    <article className="post-card">
      <div className="post-card-meta">
        <time dateTime={post.date}>{formatDateTR(post.date)}</time>
        {post.readingMinutes ? <span>~{post.readingMinutes} dk</span> : null}
      </div>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="post-card-desc">{post.description}</p>
      <div className="post-card-foot">
        {tags.slice(0, 3).map((t) => (
          <Link key={t.slug} href={`/blog/etiket/${t.slug}`} className="tag-chip">
            {t.label}
          </Link>
        ))}
        <Link href={`/blog/${post.slug}`} className="post-card-link">
          Yazıyı oku →
        </Link>
      </div>
    </article>
  );
}
