import { getTopic } from "@/lib/curriculum";

// Student feedback sink. FeedbackForm posts here; we validate and forward one
// row to the Google Sheet behind FEEDBACK_WEBHOOK_URL (scripts/feedback-sheet.gs).
// The webhook URL stays server-side, and no IP or identifier is forwarded.
const MAX_BODY = 2000;
const MAX_COMMENT = 500;

// Best-effort limit: per serverless instance, resets on cold start. Enough at
// current traffic; the IP is only held in memory, never written anywhere.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, { n: number; start: number }>();

function rateLimited(ip: string, now: number): boolean {
  if (hits.size > 5000) hits.clear();
  const h = hits.get(ip);
  if (!h || now - h.start > WINDOW_MS) {
    hits.set(ip, { n: 1, start: now });
    return false;
  }
  h.n += 1;
  return h.n > MAX_PER_WINDOW;
}

const reply = (status: number) => Response.json({ ok: status === 200 }, { status });

export async function POST(req: Request) {
  const webhook = process.env.FEEDBACK_WEBHOOK_URL;
  if (!webhook) return reply(503);

  // Browsers always send Origin on POST; this keeps other sites from posting.
  const origin = req.headers.get("origin");
  try {
    if (!origin || new URL(origin).host !== req.headers.get("host")) return reply(403);
  } catch {
    return reply(403);
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip, Date.now())) return reply(429);

  const raw = await req.text();
  if (raw.length > MAX_BODY) return reply(413);
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return reply(400);
  }

  const { kind, slug, vote, questionId, comment } = body;
  if (kind !== "oy" && kind !== "yorum" && kind !== "soru-hatasi") return reply(400);
  if (typeof slug !== "string" || getTopic(slug)?.status !== "published") return reply(400);
  if (vote !== undefined && vote !== "evet" && vote !== "hayir") return reply(400);
  if (kind === "oy" && !vote) return reply(400);
  if (
    questionId !== undefined &&
    (typeof questionId !== "string" || !/^[\w-]{1,80}$/.test(questionId))
  ) {
    return reply(400);
  }
  if (kind === "soru-hatasi" && !questionId) return reply(400);
  if (comment !== undefined && typeof comment !== "string") return reply(400);
  const text = (comment ?? "").trim().slice(0, MAX_COMMENT);
  if (kind === "yorum" && !text) return reply(400);

  try {
    // Apps Script runs the handler, then answers with a redirect to its output.
    // That redirect is the success signal, so there's no need to follow it.
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, slug, vote: vote ?? "", questionId: questionId ?? "", comment: text }),
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });
    return reply(res.status < 400 ? 200 : 502);
  } catch {
    return reply(502);
  }
}
