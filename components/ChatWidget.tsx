"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Phone } from "lucide-react";
import { FAQS } from "@/lib/faqs";

type Message = { role: "bot" | "user"; text: string; cta?: boolean };

const GREETING: Message = {
  role: "bot",
  text:
    "Hi! I can answer common questions about repairs, insurance, timelines, and more. What would you like to know?",
};

const SUGGESTIONS = [
  "How long does a repair take?",
  "Do you work with all insurance?",
  "Do you offer free estimates?",
];

function findAnswer(query: string): string | null {
  const q = query.toLowerCase();
  if (!q.trim()) return null;

  const tokens = q
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);

  let best: { faq: (typeof FAQS)[number]; score: number } | null = null;
  for (const faq of FAQS) {
    const haystack = `${faq.q} ${faq.a}`.toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (haystack.includes(t)) score += 1;
    }
    if (!best || score > best.score) best = { faq, score };
  }

  if (best && best.score >= 1) return best.faq.a;
  return null;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const answer = findAnswer(trimmed);
    const botMsg: Message = answer
      ? { role: "bot", text: answer }
      : {
          role: "bot",
          text:
            "I don't have an answer for that yet. The fastest way to get a clear answer is to call (978) 692-2471 or send us a message.",
          cta: true,
        };

    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="hidden md:inline-flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-700 transition-colors"
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
      </button>

      {open && (
        <div className="hidden md:flex fixed bottom-24 right-6 z-40 w-80 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl">
          <div className="flex items-center gap-2 border-b border-neutral-200 bg-red-600 px-4 py-3 text-white">
            <MessageCircle className="h-4 w-4" aria-hidden />
            <span className="text-sm font-semibold">Quick Questions</span>
          </div>

          <div ref={scrollRef} className="flex max-h-80 flex-col gap-2 overflow-y-auto px-4 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  m.role === "bot"
                    ? "self-start bg-neutral-100 text-neutral-800"
                    : "self-end bg-red-600 text-white"
                }`}
              >
                {m.text}
                {m.cta && (
                  <a
                    href="tel:+19786922471"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-700 hover:text-red-800"
                  >
                    <Phone className="h-3 w-3" aria-hidden />
                    Call (978) 692-2471
                  </a>
                )}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-2">
              <p className="text-xs font-medium text-neutral-500">Try asking:</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 hover:border-red-300 hover:text-red-700 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-neutral-200 px-3 py-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30"
            />
            <button
              type="submit"
              aria-label="Send"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
