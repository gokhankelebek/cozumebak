"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "error";

async function send(payload: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch("/api/geri-bildirim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// Remembers the tap per browser (key cb-fb:…), so one student counts once.
function useRemembered(key: string) {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    try {
      setValue(localStorage.getItem(key));
    } catch {
      /* blocked storage → the buttons just show again */
    }
  }, [key]);
  const remember = (v: string) => {
    setValue(v);
    try {
      localStorage.setItem(key, v);
    } catch {}
  };
  return [value, remember] as const;
}

// Optional follow-up after a tap. The tap is already recorded, so skipping this
// loses nothing.
function CommentBox({
  label,
  payload,
}: {
  label: string;
  payload: Record<string, string>;
}) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState(false);

  if (sent) return <p className="fb-thanks">Aldık, teşekkürler!</p>;

  const submit = async () => {
    setStatus("sending");
    const ok = await send({ ...payload, comment: text });
    if (ok) setSent(true);
    else setStatus("error");
  };

  return (
    <div className="fb-comment">
      <label>
        <span>{label}</span>
        <textarea
          rows={2}
          maxLength={500}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <p className="fb-hint">Lütfen ad, telefon gibi kişisel bilgi yazma.</p>
      <div className="fb-row">
        <button
          type="button"
          className="fb-send"
          disabled={!text.trim() || status === "sending"}
          onClick={submit}
        >
          Gönder
        </button>
        {status === "error" && (
          <span className="fb-error">Gönderilemedi, tekrar dene.</span>
        )}
      </div>
    </div>
  );
}

/** End-of-lesson "was this useful?" buttons. One tap sends the vote. */
export function PageFeedback({ slug }: { slug: string }) {
  const [vote, remember] = useRemembered(`cb-fb:${slug}`);
  const [status, setStatus] = useState<Status>("idle");
  const [justVoted, setJustVoted] = useState(false);

  const cast = async (v: "evet" | "hayir") => {
    setStatus("sending");
    if (await send({ kind: "oy", slug, vote: v })) {
      remember(v);
      setJustVoted(true);
      setStatus("idle");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="fb" aria-label="Geri bildirim" aria-live="polite">
      {!vote ? (
        <>
          <h2>Bu sayfa işine yaradı mı?</h2>
          <div className="fb-row">
            <button type="button" className="fb-vote" disabled={status === "sending"} onClick={() => cast("evet")}>
              👍 Evet
            </button>
            <button type="button" className="fb-vote" disabled={status === "sending"} onClick={() => cast("hayir")}>
              👎 Hayır
            </button>
            {status === "error" && (
              <span className="fb-error">Gönderilemedi, tekrar dene.</span>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="fb-thanks">Teşekkürler, cevabını aldık.</p>
          {justVoted && (
            <CommentBox
              label={
                vote === "hayir"
                  ? "Ne eksikti ya da ne zordu? (isteğe bağlı)"
                  : "Eklemek istediğin bir şey var mı? (isteğe bağlı)"
              }
              payload={{ kind: "yorum", slug, vote }}
            />
          )}
        </>
      )}
    </section>
  );
}

/** "Bu soruda hata var" link under a quiz question. One tap sends the report. */
export function QuestionReport({ slug, questionId }: { slug: string; questionId: string }) {
  const [reported, remember] = useRemembered(`cb-fb:${slug}:${questionId}`);
  const [status, setStatus] = useState<Status>("idle");
  const [justReported, setJustReported] = useState(false);

  const report = async () => {
    setStatus("sending");
    if (await send({ kind: "soru-hatasi", slug, questionId })) {
      remember("1");
      setJustReported(true);
      setStatus("idle");
    } else {
      setStatus("error");
    }
  };

  if (!reported) {
    return (
      <div className="fb-report" aria-live="polite">
        <button type="button" disabled={status === "sending"} onClick={report}>
          Bu soruda hata var
        </button>
        {status === "error" && <span className="fb-error"> Gönderilemedi, tekrar dene.</span>}
      </div>
    );
  }
  return (
    <div className="fb-report" aria-live="polite">
      <p className="fb-thanks">Bildirdin, teşekkürler.</p>
      {justReported && (
        <CommentBox
          label="Neyi yanlış buldun? (isteğe bağlı)"
          payload={{ kind: "yorum", slug, questionId }}
        />
      )}
    </div>
  );
}
