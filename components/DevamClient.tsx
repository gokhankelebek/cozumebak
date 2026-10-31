"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readAttempts, accuracy, type Attempt } from "@/lib/progress";
import { track } from "@/lib/track";

// ─────────────────────────────────────────────────────────────────────────────
// Homepage "Kaldığın yerden devam et" card. Reads the same device-local quiz
// history as /durumum and, for a returning student, points at the one most
// useful next click: finish the open set, revisit a weak topic, or move to the
// next lesson in curriculum order. First-time visitors get nothing (no layout
// change, no empty state) — the card only exists once there is history.
// ─────────────────────────────────────────────────────────────────────────────

export interface DevamTopic {
  slug: string;
  title: string;
  track: string;
}

export interface DevamTrack {
  key: string;
  label: string;
  /** Show the YKS countdown (TYT/AYT/12. sınıf students). */
  yks: boolean;
  /** This grade's yazılı guide, if one exists. */
  yaziliSlug?: string;
}

/** Calendar-day distance in the student's own timezone: bugün / dün / n gün önce. */
function ago(t: number): string {
  if (!t) return "";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const then = new Date(t);
  then.setHours(0, 0, 0, 0);
  const days = Math.round((today.getTime() - then.getTime()) / 86_400_000);
  if (days <= 0) return "bugün";
  if (days === 1) return "dün";
  return `${days} gün önce`;
}

interface Action {
  href: string;
  label: string;
  target: "finish" | "review" | "next" | "durumum";
}

export default function DevamClient({
  topics,
  tracks,
  yksStart,
}: {
  /** Published topics in curriculum order (track → unit order → lesson). */
  topics: DevamTopic[];
  tracks: DevamTrack[];
  /** ISO timestamp of the TYT session start. */
  yksStart: string;
}) {
  // Client-only: localStorage and "today" both differ from build time.
  const [state, setState] = useState<{ latest: Attempt; attempts: Map<string, Attempt> } | null>(
    null,
  );

  useEffect(() => {
    let attempts = new Map<string, Attempt>();
    try {
      attempts = readAttempts();
    } catch {
      return; // blocked storage → behave like a first visit
    }
    const known = new Set(topics.map((t) => t.slug));
    const latest = [...attempts.values()]
      .filter((a) => known.has(a.slug))
      .sort((a, b) => b.t - a.t)[0];
    if (!latest) return;
    setState({ latest, attempts });
    track("continue_view", { topic: latest.slug });
  }, [topics]);

  if (!state) return null;

  const { latest, attempts } = state;
  const topic = topics.find((t) => t.slug === latest.slug)!;
  const tr = tracks.find((t) => t.key === topic.track);
  const finished = latest.total !== null && latest.answered >= latest.total;
  const acc = accuracy(latest);

  // Next lesson: first untouched topic after this one in the same track, else
  // simply the following one.
  const sameTrack = topics.filter((t) => t.track === topic.track);
  const after = sameTrack.slice(sameTrack.findIndex((t) => t.slug === topic.slug) + 1);
  const next = after.find((t) => !attempts.has(t.slug)) ?? after[0];

  let action: Action;
  let status: string;
  if (!finished) {
    status = `${latest.answered}/${latest.total ?? "?"} soru cevaplandı`;
    action = { href: `/konular/${topic.slug}#sorular`, label: "Soruları bitir", target: "finish" };
  } else if (acc !== null && acc < 0.6) {
    status = `skorun ${latest.score}/${latest.total}`;
    action = { href: `/konular/${topic.slug}`, label: "Konuyu tekrar et", target: "review" };
  } else if (next) {
    status = latest.score !== null ? `skorun ${latest.score}/${latest.total}` : "tamamlandı";
    action = { href: `/konular/${next.slug}`, label: `Sıradaki konu: ${next.title}`, target: "next" };
  } else {
    status = latest.score !== null ? `skorun ${latest.score}/${latest.total}` : "tamamlandı";
    action = { href: "/durumum", label: "Durumuna bak", target: "durumum" };
  }

  const when = ago(latest.t);
  const meta = [tr?.label, status, when].filter(Boolean).join(" · ");

  const daysToYks = Math.ceil((Date.parse(yksStart) - Date.now()) / 86_400_000);
  const showYks = tr?.yks && daysToYks > 0;

  const click = (target: string) => () =>
    track("continue_click", { topic: topic.slug, target });

  return (
    <section className="devam container" aria-label="Kaldığın yerden devam et">
      <div className="devam-card">
        <div className="devam-main">
          <p className="devam-eyebrow">Kaldığın yerden devam et</p>
          <p className="devam-title">{topic.title}</p>
          <p className="devam-meta">{meta}</p>
          <div className="devam-actions">
            <Link href={action.href} className="btn btn-primary" onClick={click(action.target)}>
              {action.label} →
            </Link>
            {action.target !== "durumum" && (
              <Link href="/durumum" className="devam-link" onClick={click("durumum")}>
                Tüm ilerlemen →
              </Link>
            )}
          </div>
        </div>
        {(showYks || tr?.yaziliSlug) && (
          <div className="devam-side">
            {showYks && (
              <p className="devam-count">
                <strong>{daysToYks}</strong>
                <span>gün kaldı · TYT</span>
              </p>
            )}
            {tr?.yaziliSlug && (
              <Link
                href={`/yazili-sinavlar/${tr.yaziliSlug}`}
                className="devam-link"
                onClick={click("yazili")}
              >
                Yazılıya hazırlan →
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
