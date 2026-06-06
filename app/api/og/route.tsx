import { ImageResponse } from "next/og";
import { getTopic, getUnit, trackMeta } from "@/lib/curriculum";

export const runtime = "edge";

// Dynamic per-topic OpenGraph card. Referenced from topicMetadata() in
// lib/seo.ts as /api/og?slug=<slug>, so every lesson (published + "soon") gets a
// distinct share image. Mirrors the static app/opengraph-image.tsx design but
// injects the topic title + track/unit context. Unknown slugs fall back to the
// generic brand line.
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? "";
  const topic = getTopic(slug);

  const eyebrow = topic
    ? (() => {
        const tm = trackMeta(topic.track);
        const unit = getUnit(topic.unit);
        return unit ? `${tm.label} · ${unit.title}` : tm.label;
      })()
    : "MEB Müfredatı · TYT · AYT";

  const heading = topic
    ? topic.title
    : "Lise Matematiği · Konu Anlatımı & Çözümlü Sorular";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#fbf9f4",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(14,27,51,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#e5492b",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: topic ? 76 : 64,
            fontWeight: 700,
            color: "#0e1b33",
            lineHeight: 1.08,
            maxWidth: 1040,
          }}
        >
          {heading}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
            color: "#0e1b33",
          }}
        >
          çözüme<span style={{ color: "#e5492b" }}>bak</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
