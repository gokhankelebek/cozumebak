import type { Metadata } from "next";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Ara",
  description: "Lise matematiği konularında ara: konu, soru ya da kavram.",
  alternates: { canonical: "/ara" },
  robots: { index: false, follow: true },
};

export default async function AraPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  return (
    <main className="container">
      <section className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow">Arama</p>
        <h1 className="hero-title">Konu Ara</h1>
        <p className="hero-sub">
          9–12. sınıf, TYT ve AYT matematiğinin tüm konularında anında ara.
        </p>
        <SearchBox variant="full" autoFocus initialQuery={q} />
      </section>
    </main>
  );
}
