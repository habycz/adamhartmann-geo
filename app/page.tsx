"use client";

import HeroGeometric from "../components/kokonutui/hero-geometric";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Robust clipboard helper with fallback for older browsers/iOS
function copyTextRobust(text: string) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    return navigator.clipboard.writeText(text);
  }
  return new Promise<void>((resolve) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    } catch {}
    resolve();
  });
}

const capabilities = [
  "Power Pages",
  "Power Automate",
  "Dataverse",
  "Power BI",
  "Azure",
  "SharePoint",
];

const work = [
  {
    title: "Secure Partner Portal",
    blurb:
      "Role-based access, Dataverse integration, streamlined onboarding.",
    tags: ["Power Pages", "Dataverse", "Azure"],
  },
  {
    title: "Claims Intake UX",
    blurb:
      "Reduced clicks by 35% with guided process flows and validation.",
    tags: ["Power Pages", "Automate"],
  },
  {
    title: "Client Reporting Hub",
    blurb:
      "Power BI embedded with consented data views and export.",
    tags: ["Power BI", "Power Pages"],
  },
];

const services = [
  {
    title: "Power Pages",
    blurb:
      "Secure external portals with Dataverse, auth, and robust governance.",
  },
  {
    title: "Power Automate",
    blurb: "Event-driven workflows, approvals, and system integrations.",
  },
  {
    title: "Dataverse",
    blurb:
      "Schema, security roles, forms, and business rules.",
  },
  {
    title: "Power BI",
    blurb:
      "Embedded analytics, consented views, export & share controls.",
  },
  {
    title: "Azure / SharePoint",
    blurb:
      "Identity, storage, and enterprise integration patterns.",
  },
  {
    title: "UAT & Training",
    blurb:
      "Enablement, documentation, and rollout support.",
  },
];

const testimonials = [
  {
    quote:
      "Adam’s Power Pages expertise and commercial awareness made a measurable impact. Exceptional architecture and client-facing skills.",
  },
  {
    quote:
      "Professional, friendly, and dependable. A pleasure to work with at both senior and frontline levels.",
  },
  {
    quote:
      "Trained our team and improved adoption. Turned click-heavy flows into clean, visual, process-driven experiences.",
  },
];

const posts = [
  {
    title: "Power Pages Auth: Choosing the Right Strategy",
    date: "2025-01-14",
  },
  {
    title: "Dataverse Security: Roles that Scale",
    date: "2025-02-02",
  },
  {
    title: "From Click-Heavy to Guided",
    date: "2025-03-05",
  },
];

// Simple top-right toast rendered via portal
function Toast({ message }: { message: string }) {
  return (
    <div className="pointer-events-none fixed top-5 right-5 z-[10000]" role="status" aria-live="polite">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.18 }}
        className="rounded-xl bg-neutral-900/90 text-white shadow-[0_12px_48px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl px-4 py-3 flex items-center gap-3"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">✓</span>
        <div className="text-sm leading-tight">
          <div className="font-medium">Copied to clipboard!</div>
          <div className="text-white/70">Email address copied successfully.</div>
        </div>
        <a
          href="mailto:contact@adamhartmann.ch"
          className="ml-3 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15"
        >
          Send Email
        </a>
      </motion.div>
    </div>
  );
}

// Shared styles
const card =
  "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.45)]";
const pill =
  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-white/5 border border-white/10";
const tag =
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs bg-white/5 border border-white/10";
const workCard = `${card} group p-6`;

const bubbleCardVariants = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 15px 3px rgba(255, 255, 255, 0.6)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function Home() {
  const [toastOpen, setToastOpen] = useState(false);
  const toastTimer = useRef<number | null>(null);
  const [copiedInline, setCopiedInline] = useState(false);
  const [glow, setGlow] = useState(false);

  function copyEmail(email: string) {
    copyTextRobust(email).finally(() => {
      setToastOpen(true);
      setCopiedInline(true);
      setGlow(true);
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToastOpen(false), 2400);
      window.setTimeout(() => setGlow(false), 480);
      window.setTimeout(() => setCopiedInline(false), 1600);
    });
  }

  useEffect(() => () => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="relative -mt-[30px] md:-mt-[30px] lg:-mt-[50px] space-y-2">
        <HeroGeometric
          badge="Crafting Swiss-grade Power Pages"
          title1="Turning Vision into"
          title2="Seamless Digital Reality"
          badgeClassName="shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse"
        />
        {/* Soft fade to avoid visible seam at the bottom of the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-b from-transparent via-black/10 to-black/0"
        />
      </div>

      {/* MAIN CONTENT (scrollable) */}
      <div className="relative z-10 -mt-20 md:-mt-24">



        {/* Featured Work (STATIC, FIXED — scales as ONE box) */}

        {/* Work-style cards (same design as /work) */}
        <section className="container mx-auto max-w-6xl px-6 pt-12 md:pt-16">
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {work.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <article
                  className={`${card} group p-5 md:p-6 transition
                              hover:bg-white/7 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]`}
                  role="article"
                  aria-labelledby={`work-${i}`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-white/8 border border-white/10 backdrop-blur grid place-items-center">
                      <span className="i-lucide-box text-white/80" aria-hidden />
                    </div>
                    <span className="text-[11px] uppercase tracking-wide text-white/50">Case</span>
                  </div>

                  <h3 id={`work-${i}`} className="text-[15px] font-medium text-white">
                    {w.title}
                  </h3>
                  <p className="text-[13px] leading-snug text-white/70 mt-2">
                    {w.blurb}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className={tag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-white/50">Selected work</span>
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white underline decoration-white/30"
                    >
                      View details
                      <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services / Approach */}
        <section className="container mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Services &amp; Approach</h2>
            <p className="text-white/60 mb-8">
              Power Pages, Automate, Dataverse, Power BI, and integration patterns for regulated environments.
            </p>
          </Reveal>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`${card} p-5 md:p-6`}>
                  <h3 className="text-base md:text-lg font-medium">{s.title}</h3>
                  <p className="text-sm text-white/60 mt-2">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Testimonials</h2>
          </Reveal>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <blockquote className={`${card} p-5 md:p-6 text-sm leading-relaxed text-white/80`}>
                  “{t.quote}”
                </blockquote>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="container mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <div className="flex items-end justify-between mb-4">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-semibold">Blog</h2>
              <p className="text-white/60 mt-1">
                Notes on Power Pages patterns, adoption, and architecture.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <Link href="/blog" className="text-sm text-white/70 hover:text-white underline decoration-white/30">
                View all
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className={`${card} p-5 md:p-6`}>
                  <h3 className="text-base md:text-lg font-medium">{p.title}</h3>
                  <p className="text-xs text-white/50 mt-2">{p.date}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-24 md:pb-32">
          <Reveal>
            <div className={`${card} p-6 md:p-8 text-center`}>
              <h2 className="text-xl md:text-2xl font-semibold">
                Let’s create something remarkable
              </h2>
              <p className="text-white/60 mt-2">
                Email me and we’ll align on outcomes, timelines, and success criteria.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  type="button"
                  onClick={() => copyEmail("contact@adamhartmann.ch")}
                  className={`${pill} transition relative duration-200 ${
                    glow
                      ? "shadow-[0_0_0_2px_rgba(255,255,255,0.22),0_0_28px_rgba(255,255,255,0.35)] ring-1 ring-white/30"
                      : "shadow-none"
                  }`}
                >
                  <span className="i-lucide-clipboard-check mr-1.5" aria-hidden />
                  contact@adamhartmann.ch
                </button>
                {copiedInline && (
                  <span className="text-sm text-white/80 inline-flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">✓</span>
                    Copied to clipboard
                  </span>
                )}
                <Link href="/more" className={`${pill} hover:bg-white/10 transition`}>
                  Book a call
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
      <AnimatePresence>
        {toastOpen && (typeof document !== "undefined") && (
          document.getElementById("toast-root") ?
            createPortal(
              <Toast message="Copied to clipboard!" />,
              document.getElementById("toast-root") as HTMLElement
            ) : (
              <Toast message="Copied to clipboard!" />
            )
        )}
      </AnimatePresence>
    </>
  );
}