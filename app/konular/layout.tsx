import type { ReactNode } from "react";

// Every konu page is automatically wrapped in this reading container.
export default function KonuLayout({ children }: { children: ReactNode }) {
  return <article className="konu container">{children}</article>;
}
