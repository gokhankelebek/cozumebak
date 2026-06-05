import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "çözümebak — Lise Matematiği",
    short_name: "çözümebak",
    description:
      "9-12. sınıf, TYT ve AYT matematiği: konu anlatımları ve adım adım çözümlü sorular.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F1",
    theme_color: "#0E1B33",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
