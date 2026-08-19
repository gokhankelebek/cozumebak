import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSoruTipleri, coveredTopics } from "@/lib/soru-tipleri";
import { getTopic, getUnit, trackMeta } from "@/lib/curriculum";
import { weightChip } from "@/lib/examInsights";
import { soruTipleriMetadata } from "@/lib/seo";
import SoruTipleri from "@/components/SoruTipleri";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

// Static params: every topic that has a knowledge base gets a page.
export function generateStaticParams() {
  return coveredTopics().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return soruTipleriMetadata(slug);
}

export default async function SoruTipleriPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kb = getSoruTipleri(slug);
  const topic = getTopic(slug);
  if (!kb || !topic) notFound();

  const tm = trackMeta(topic.track);
  const unit = getUnit(topic.unit);
  const eyebrow = unit ? `${tm.label} · ${unit.title}` : tm.label;
  const examChip = weightChip(topic.unit);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soru Tipleri",
        item: `${SITE_URL}/soru-tipleri`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${topic.title} — Soru Tipleri ve Tuzaklar`,
      },
    ],
  };

  return (
    <main className="container">
      <JsonLd data={breadcrumbLd} />
      <nav className="crumb">
        <Link href="/">Anasayfa</Link>
        {" › "}
        <Link href="/soru-tipleri">Soru Tipleri</Link>
        {" › "}
        <strong>{topic.title}</strong>
      </nav>

      <header className="konu-head">
        <p className="eyebrow">{eyebrow} · Soru Tipleri</p>
        <h1 className="konu-title">{topic.title} — Soru Tipleri ve Tuzaklar</h1>
        <div className="chips">
          <span>{kb.tipler.length} soru tipi</span>
          {examChip && <span>{examChip}</span>}
          <Link href={`/konular/${slug}`}>Konu anlatımı →</Link>
        </div>
      </header>

      <SoruTipleri slug={slug} />
    </main>
  );
}
