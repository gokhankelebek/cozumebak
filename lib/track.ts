// ─────────────────────────────────────────────────────────────────────────────
// GA4 custom events. gtag is defined by the init script in app/layout.tsx, which
// loads afterInteractive — so an event fired from a mount effect can run before
// it exists. track() waits up to ~5s for it, then gives up silently (ad blocker,
// offline): tracking can never break an interaction. Params carry topic slugs
// and scores only — nothing personal.
// ─────────────────────────────────────────────────────────────────────────────

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: Params) => void;
  }
}

const RETRY_MS = 250;
const MAX_TRIES = 20;

export function track(name: string, params: Params = {}, tries = 0): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", name, params);
    } catch {
      /* analytics must never throw into the UI */
    }
    return;
  }
  if (tries < MAX_TRIES) {
    setTimeout(() => track(name, params, tries + 1), RETRY_MS);
  }
}
