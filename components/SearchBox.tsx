"use client";

import { useDeferredValue, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { searchTopics } from "@/lib/searchIndex";
import { getTopic } from "@/lib/curriculum";
import TopicCard from "@/components/TopicCard";

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export default function SearchBox({
  variant = "hero",
  autoFocus = false,
  initialQuery = "",
}: {
  variant?: "hero" | "full";
  autoFocus?: boolean;
  initialQuery?: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const deferred = useDeferredValue(query);
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(
    () => searchTopics(deferred, variant === "full" ? 60 : 8),
    [deferred, variant],
  );

  const goToSearch = () => {
    const q = query.trim();
    if (q) router.push(`/ara?q=${encodeURIComponent(q)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (variant !== "hero") {
      if (e.key === "Enter") goToSearch();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      if (active >= 0 && results[active]) {
        router.push(`/konular/${results[active].slug}`);
      } else {
        goToSearch();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // ── Full search page variant ──
  if (variant === "full") {
    return (
      <div className="search-wrap">
        <div className="search">
          <SearchIcon />
          <input
            type="text"
            autoFocus={autoFocus}
            value={query}
            placeholder="Konu, soru ya da kavram ara — ör. 'türev kuralları'"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Konu ara"
          />
        </div>
        {query.trim() && (
          <p className="ara-count">
            {results.length > 0
              ? `“${query.trim()}” için ${results.length} sonuç`
              : `“${query.trim()}” için sonuç bulunamadı.`}
          </p>
        )}
        {results.length > 0 && (
          <div className="ara-results">
            {results.map((r) => {
              const topic = getTopic(r.slug);
              return topic ? <TopicCard key={r.slug} topic={topic} /> : null;
            })}
          </div>
        )}
      </div>
    );
  }

  // ── Hero variant (input + instant dropdown) ──
  return (
    <div
      className="search-wrap"
      ref={boxRef}
      onBlur={(e) => {
        if (!boxRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="search">
        <SearchIcon />
        <input
          type="text"
          autoFocus={autoFocus}
          value={query}
          placeholder="Konu, soru ya da kavram ara — ör. 'türev kuralları'"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls="search-results"
          aria-label="Konu ara"
        />
        <button type="button" className="btn btn-primary" onClick={goToSearch}>
          Ara
        </button>
      </div>

      {open && query.trim() && (
        <div className="search-results" id="search-results" role="listbox">
          {results.length > 0 ? (
            results.map((r, i) => (
              <Link
                key={r.slug}
                href={`/konular/${r.slug}`}
                className={`search-result${i === active ? " active" : ""}`}
                role="option"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
              >
                <span className="sr-title">{r.title}</span>
                <span className="sr-meta">
                  {r.trackLabel}
                  {r.unitLabel ? ` · ${r.unitLabel}` : ""}
                  {r.status === "soon" && <span className="sr-soon"> · Yakında</span>}
                </span>
              </Link>
            ))
          ) : (
            <div className="search-empty">Sonuç bulunamadı. Farklı bir kelime dene.</div>
          )}
        </div>
      )}
    </div>
  );
}
