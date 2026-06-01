import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, trackMeta, getUnit, soonTopics } from "@/lib/curriculum";
import { topicMetadata } from "@/lib/seo";
import Konu from "@/components/Konu";

// Catch-all for "soon" topics only. Published topics are served by their own
// app/konular/<slug>/page.mdx (static segment wins over this dynamic route);
// this route notFound()s them as a safety net. Unknown slugs → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return soonTopics().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return topicMetadata(slug);
}

export default async function SoonTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic || topic.status === "published") notFound();

  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const unitHref = unit ? `${tm.route}#${unit.slug}` : tm.route;

  return (
    <>
      <Konu slug={slug} />

      <div className="soon-notice">
        <span className="soon-notice-badge">Yakında</span>
        <h2>Bu konu anlatımı hazırlanıyor</h2>
        <p>
          <strong>{topic.title}</strong> konusunun adım adım çözümlü anlatımı çok yakında
          yayında olacak. Bu arada aynı ünitedeki diğer konulara göz atabilirsin.
        </p>
        <div className="soon-notice-actions">
          <Link href={unitHref} className="btn btn-primary">
            {unit ? unit.title : tm.label} konuları →
          </Link>
          <Link href="/konular" className="btn btn-ghost">
            Tüm konular
          </Link>
        </div>
      </div>
    </>
  );
}
