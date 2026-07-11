"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// /durumum island — reads the cb-quiz:<slug> entries QuizClient persists and
// turns them into a progress picture. Everything stays on the device: no
// account, no network, no cookies. The server page passes a compact topic
// manifest so this bundle doesn't drag lib/curriculum in wholesale.
// ─────────────────────────────────────────────────────────────────────────────

export interface DurumTopic {
  slug: string;
  title: string;
  track: string;
  unitSlug: string;
  unitTitle: string;
}

export interface DurumTrack {
  key: string;
  label: string;
  route: string;
  total: number; // published topics in this track
}

interface Attempt {
  slug: string;
  answered: number;
  score: number | null; // null → legacy entry, self-heals on next quiz visit
  total: number | null;
  t: number;
}

/** Accuracy over what the student actually answered (not the whole set). */
function accuracy(a: Attempt): number | null {
  if (a.score === null || a.answered === 0) return null;
  return a.score / a.answered;
}

function readAttempts(): Map<string, Attempt> {
  const map = new Map<string, Attempt>();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith("cb-quiz:")) continue;
    try {
      const raw = JSON.parse(localStorage.getItem(key) ?? "");
      if (!Array.isArray(raw.picks)) continue;
      const answered = raw.picks.filter((p: unknown) => p !== null).length;
      if (answered === 0) continue;
      map.set(key.slice("cb-quiz:".length), {
        slug: key.slice("cb-quiz:".length),
        answered,
        score: typeof raw.score === "number" ? raw.score : null,
        total: typeof raw.total === "number" ? raw.total : raw.picks.length,
        t: typeof raw.t === "number" ? raw.t : 0,
      });
    } catch {
      /* corrupt entry → skip */
    }
  }
  return map;
}

export default function DurumClient({
  topics,
  tracks,
  aytUnitWeight,
}: {
  topics: DurumTopic[];
  tracks: DurumTrack[];
  /** Unit slug → avg AYT questions/year; drives the "next topic" suggestion. */
  aytUnitWeight: Record<string, number>;
}) {
  // Render nothing meaningful until after mount — localStorage is client-only.
  const [attempts, setAttempts] = useState<Map<string, Attempt> | null>(null);

  useEffect(() => {
    try {
      setAttempts(readAttempts());
    } catch {
      setAttempts(new Map());
    }
  }, []);

  if (attempts === null) {
    return <p className="durum-loading">Durumun hesaplanıyor…</p>;
  }

  const bySlug = new Map(topics.map((t) => [t.slug, t]));
  const done = [...attempts.values()].filter((a) => bySlug.has(a.slug));

  // ── Empty state ─────────────────────────────────────────────────────────────
  if (done.length === 0) {
    return (
      <div className="durum-empty">
        <p>
          Henüz kayıtlı bir çözümün yok. Herhangi bir konunun sonundaki soruları
          çözmeye başladığında ilerlemen — tamamen bu cihazda kalarak — burada
          birikecek.
        </p>
        <p>
          Başlamak için: <Link href="/tyt">TYT</Link> ya da{" "}
          <Link href="/ayt">AYT</Link> sayfasından bir konu seç, ya da doğrudan{" "}
          <Link href="/konular/turevin-tanimi">türevin tanımı</Link>ndan dene.
        </p>
      </div>
    );
  }

  // ── Per-track coverage ──────────────────────────────────────────────────────
  const trackRows = tracks
    .map((tr) => {
      const rows = done.filter((a) => bySlug.get(a.slug)!.track === tr.key);
      const scored = rows.filter((a) => accuracy(a) !== null);
      const avg =
        scored.length > 0
          ? scored.reduce((s, a) => s + (accuracy(a) as number), 0) / scored.length
          : null;
      return { tr, attempted: rows.length, avg };
    })
    .filter((r) => r.attempted > 0);

  // ── Weak / strong topics (need a meaningful sample) ─────────────────────────
  const meaningful = done.filter((a) => accuracy(a) !== null && a.answered >= 5);
  const weak = meaningful
    .filter((a) => (accuracy(a) as number) < 0.6)
    .sort((a, b) => (accuracy(a) as number) - (accuracy(b) as number))
    .slice(0, 6);
  const strong = meaningful.filter((a) => (accuracy(a) as number) >= 0.8).length;

  // ── Next-topic suggestion ───────────────────────────────────────────────────
  // Highest ÖSYM-weight AYT unit that still has an untouched topic; falls back
  // to the first untouched topic of the student's most-active track.
  const untouched = topics.filter((t) => !attempts.has(t.slug));
  let next: DurumTopic | undefined;
  let nextReason = "";
  const aytUntouched = untouched
    .filter((t) => t.track === "ayt" && aytUnitWeight[t.unitSlug] !== undefined)
    .sort((a, b) => aytUnitWeight[b.unitSlug] - aytUnitWeight[a.unitSlug]);
  const activeAyt = done.some((a) => bySlug.get(a.slug)!.track === "ayt");
  if (activeAyt && aytUntouched.length > 0) {
    next = aytUntouched[0];
    nextReason = `AYT'de en yüksek soru getiren ünitelerden: ${next.unitTitle} (~${aytUnitWeight[next.unitSlug]} soru/yıl).`;
  } else {
    const counts = new Map<string, number>();
    for (const a of done) {
      const tk = bySlug.get(a.slug)!.track;
      counts.set(tk, (counts.get(tk) ?? 0) + 1);
    }
    const topTrack = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    next = untouched.find((t) => t.track === topTrack) ?? untouched[0];
    if (next) nextReason = "Çalıştığın seride sıradaki dokunulmamış konu.";
  }

  const pct = (x: number) => `%${Math.round(x * 100)}`;

  return (
    <div className="durum">
      {/* Track coverage */}
      <section className="durum-block">
        <h2>Kapsamın</h2>
        <div className="durum-tracks">
          {trackRows.map(({ tr, attempted, avg }) => (
            <Link key={tr.key} href={tr.route} className="durum-track">
              <strong>{tr.label}</strong>
              <span>
                {attempted}/{tr.total} konu
                {avg !== null && ` · isabet ${pct(avg)}`}
              </span>
              <div
                className="durum-bar"
                role="progressbar"
                aria-valuenow={attempted}
                aria-valuemin={0}
                aria-valuemax={tr.total}
              >
                <div
                  className="durum-bar-fill"
                  style={{ width: `${Math.min(100, (attempted / tr.total) * 100)}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
        <p className="durum-note">
          Toplam {done.length} konuda soru çözdün{strong > 0 && (
            <>
              ; {strong} konuda isabetin %80'in üzerinde 💪
            </>
          )}.
        </p>
      </section>

      {/* Weak topics */}
      {weak.length > 0 && (
        <section className="durum-block">
          <h2>Tekrar İsteyen Konular</h2>
          <p className="durum-note">
            İsabetin %60'ın altında kaldığı konular — netin en hızlı buradan
            yükselir. Konuyu yeniden oku, sonra "Baştan Çöz" ile tekrar dene.
          </p>
          <ul className="durum-weak">
            {weak.map((a) => {
              const t = bySlug.get(a.slug)!;
              return (
                <li key={a.slug}>
                  <Link href={`/konular/${a.slug}`}>{t.title}</Link>
                  <span>
                    {a.score}/{a.answered} doğru ({pct(accuracy(a) as number)})
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Next step */}
      {next && (
        <section className="durum-block durum-next">
          <h2>Sıradaki Adım</h2>
          <p>
            <Link href={`/konular/${next.slug}`} className="durum-next-link">
              {next.title} →
            </Link>
          </p>
          {nextReason && <p className="durum-note">{nextReason}</p>}
        </section>
      )}

      <p className="durum-privacy">
        Bu sayfa yalnızca senin cihazındaki verilerle hesaplanır; hiçbir bilgi
        sunucuya gönderilmez. Tarayıcı verilerini temizlersen ilerleme sıfırlanır.
      </p>
    </div>
  );
}
