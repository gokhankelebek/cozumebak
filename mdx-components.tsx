import type { MDXComponents } from "mdx/types";
import { Ipucu, Cozum } from "@/components/Reveal";
import { Ornek, Soru, Cevap, Figur, Altyazi } from "@/components/icerik";
import KonuBaslik from "@/components/KonuBaslik";
import Konu from "@/components/Konu";
import KonuNav from "@/components/KonuNav";
import Math from "@/components/Math";

// Anything returned here is usable in ANY .mdx file with zero imports.
// This is the magic that makes authoring konu #1.201 feel effortless:
// the author writes <Cozum>, <Ornek>, <KonuBaslik> as if they were HTML.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    KonuBaslik,
    Konu,
    KonuNav,
    Ornek,
    Soru,
    Ipucu,
    Cozum,
    Cevap,
    Figur,
    Altyazi,
    Math,
    ...components,
  };
}
