import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getYazili, yaziliSlugs } from "@/lib/yazili";
import { yaziliMetadata } from "@/lib/seo";
import YaziliSinav from "@/components/YaziliSinav";

export const dynamicParams = false;

export function generateStaticParams() {
  return yaziliSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return yaziliMetadata(slug);
}

export default async function YaziliGradePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getYazili(slug)) notFound();
  return <YaziliSinav slug={slug} />;
}
