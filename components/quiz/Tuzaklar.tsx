import { getSoruTipleri } from "@/lib/soru-tipleri";

// "Sınavda Tuzaklar" — surfaces the soru-tipleri knowledge base on lesson
// pages. Each line pairs an ÖSYM archetype with the classic student mistake
// (celdirici) it's designed to punish, so the student reads the traps BEFORE
// attempting the quiz below. Renders nothing for topics without a KB file;
// as the KB grows, lessons pick this up automatically — no MDX edits.
export default function Tuzaklar({ slug }: { slug: string }) {
  const kb = getSoruTipleri(slug);
  if (!kb || kb.tipler.length === 0) return null;

  // High-frequency archetypes first (stable within each group), one trap per
  // archetype, capped so the block warns rather than lectures.
  const rows = [...kb.tipler]
    .sort((a, b) => Number(b.sikCikar) - Number(a.sikCikar))
    .filter((t) => t.celdiriciler.length > 0)
    .slice(0, 6)
    .map((t) => ({ id: t.id, ad: t.ad, c: t.celdiriciler[0] }));

  if (rows.length === 0) return null;

  return (
    <aside className="tuzaklar" aria-label="Sınavda tuzaklar">
      <p className="tuzaklar-eyebrow">Sınavda Tuzaklar</p>
      <p className="tuzaklar-sub">
        ÖSYM bu konuda çeldiricileri tam şu hatalar üzerine kurar — sorulara
        başlamadan bir kez oku:
      </p>
      <ul>
        {rows.map((r) => (
          <li key={r.id}>
            <strong>{r.ad}:</strong> {r.c.hata} <span aria-hidden="true">→</span>{" "}
            <em>{r.c.uretir.toLocaleLowerCase("tr")}</em>
          </li>
        ))}
      </ul>
    </aside>
  );
}
