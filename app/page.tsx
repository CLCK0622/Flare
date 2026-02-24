"use client";

import Image from "next/image";

const faqs = [
  {
    q: "What is Flare?",
    a: "Flare is a spontaneous hangout app. When you're in the mood to do something — coffee, a walk, a game, whatever — you fire off a flare to nearby people. No planning ahead, no event pages, no commitment until someone bites.",
  },
  {
    q: "How does it work?",
    a: 'Pick an activity and a rough timeframe, then fire your flare. People nearby see it on a live map and can tap "I\'m in!" You review who\'s interested and accept or pass. Once matched, a temporary chat opens so you can sort out the details.',
  },
  {
    q: "How is my location handled?",
    a: "Your precise location is never stored or shared. Flares only reveal your approximate area. You control your radius — anywhere from 1 km to 20 km — and location is only active while you have a live flare.",
  },
  {
    q: "Can I have multiple flares at once?",
    a: "Nope — one flare at a time. This keeps things genuine and prevents spam. Once your flare expires or you find a match, you're free to fire a new one.",
  },
  {
    q: "What happens after a match?",
    a: "A private 1-on-1 chat unlocks so you can coordinate the details. The chat automatically deletes after 48 hours, keeping everything clean and ephemeral.",
  },
  {
    q: "How long do flares last?",
    a: "Flares auto-expire once their timeframe passes, so the map always stays fresh and current. No stale hangout invites cluttering things up.",
  },
  {
    q: "Is Flare free?",
    a: "Yes. Flare is completely free to download and use.",
  },
  {
    q: "When is Flare launching?",
    a: "We're getting close. Follow us to be the first to know when Flare drops.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logo.png"
          alt="Flare logo"
          width={176}
          height={176}
          priority
          className="w-36 h-36 sm:w-44 sm:h-44 mb-2"
        />
        <h1 className="text-7xl sm:text-8xl font-bold tracking-tight gradient-text">
          Flare
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-medium tracking-wide text-[#C07810]">
          Send the signal. See who&apos;s down.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-5 pb-28">
        <h2 className="text-3xl font-bold text-center text-[#FF7A00] mb-10">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,184,0,0.3)" }}
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none font-semibold text-[#1A1714]">
                <span>{q}</span>
                <span className="faq-toggle ml-4 flex-shrink-0 text-2xl font-light leading-none text-[#FF7A00]">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-[#6B5E52] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: "1px solid rgba(255,184,0,0.2)" }}
      >
        <p className="text-sm" style={{ color: "rgba(26,23,20,0.4)" }}>
          © {new Date().getFullYear()} Flare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
