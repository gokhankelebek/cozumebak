import { TOPICS, trackMeta, getUnit, type Track, type Status } from "@/lib/curriculum";

export interface SearchEntry {
  slug: string;
  title: string;
  track: Track;
  trackLabel: string;
  unitLabel: string;
  summary: string;
  status: Status;
  /** Pre-normalized haystack for fast matching (title + summary + keywords). */
  haystack: string;
}

/** Turkish-aware normalize: lowercase + strip diacritics so "turev" ~ "türev". */
export function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Flat, inlinable search index built from the manifest at build time. */
export const SEARCH_INDEX: SearchEntry[] = TOPICS.map((t) => {
  const tm = trackMeta(t.track);
  const unit = getUnit(t.unit);
  const summary = t.summary ?? "";
  return {
    slug: t.slug,
    title: t.title,
    track: t.track,
    trackLabel: tm.label,
    unitLabel: unit?.title ?? "",
    summary,
    status: t.status,
    haystack: normalize(
      [t.title, summary, tm.label, unit?.title ?? "", ...(t.keywords ?? [])].join(" "),
    ),
  };
});

export interface RankedResult extends SearchEntry {
  score: number;
}

/** Ranked substring search: title prefix > title substring > summary/keyword. */
export function searchTopics(query: string, limit = 12): RankedResult[] {
  const q = normalize(query.trim());
  if (!q) return [];
  const results: RankedResult[] = [];
  for (const e of SEARCH_INDEX) {
    const title = normalize(e.title);
    let score = 0;
    if (title.startsWith(q)) score = 100;
    else if (title.includes(q)) score = 60;
    else if (e.haystack.includes(q)) score = 30;
    else continue;
    // Nudge published topics above stubs at equal relevance.
    if (e.status === "published") score += 5;
    results.push({ ...e, score });
  }
  return results.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "tr")).slice(0, limit);
}
