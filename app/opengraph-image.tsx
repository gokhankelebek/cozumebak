import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "çözümebak — Lise Matematiği · Konu Anlatımı & Çözümlü Sorular";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default OpenGraph card, inherited by every route that doesn't define its own.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#fbf9f4",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(14,27,51,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          position: "relative",
        }}
      >
        {/* Brand mark, top-right */}
        <svg
          width="260"
          height="260"
          viewBox="0 0 512 512"
          style={{ position: "absolute", top: 56, right: 64 }}
        >
          <line
            x1="90"
            y1="188"
            x2="422"
            y2="188"
            stroke="#0E1B33"
            strokeWidth="5"
            strokeDasharray="9 13"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M118,386 C196,386 236,188 300,188 C352,188 372,266 410,300"
            fill="none"
            stroke="#E5492B"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="300" cy="188" r="14" fill="#0E1B33" />
        </svg>
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
          MEB Müfredatı · TYT · AYT
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#0e1b33",
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          çözüme<span style={{ color: "#e5492b" }}>bak</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#3d4a63",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Lise matematik konularının tamamı — adım adım çözümlü sorular ve net konu anlatımları.
        </div>
      </div>
    ),
    { ...size },
  );
}
