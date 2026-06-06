import type { ReactNode } from "react";

// Every blog page (index, post, tag) is wrapped in this reading container.
// Mirrors app/konular/layout.tsx. The narrow column suits both a single-column
// post list and long-form reading.
export default function BlogLayout({ children }: { children: ReactNode }) {
  return <article className="post container">{children}</article>;
}
