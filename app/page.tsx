"use client";

import HeroGeometric from "../components/kokonutui/hero-geometric";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

// Lightweight in-file reveal helper (avoids extra component wiring)
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
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

// Shared styles
const card =
  "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.45)]";
const pill =
  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-white/5 border border-white/10";
const tag =
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs bg-white/5 border border-white/10";

export default function Home() {
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
        {/* Capabilities */}
        <section className="container mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <Reveal>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {capabilities.map((c) => (
                <span key={c} className={tag}>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Featured Work */}
        <section className="container mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Featured Work</h2>
            <p className="text-white/60 mb-8">
              A taste of recent architecture &amp; delivery.
            </p>
          </Reveal>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {work.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className={`${card} p-5 md:p-6`}>
                  <div className="aspect-[16/9] rounded-xl bg-black/20 border border-white/10 mb-4" />
                  <h3 className="text-lg md:text-xl font-medium">{w.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{w.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className={tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
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
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:contact@adamhartmann.ch"
                  className={`${pill} hover:bg-white/10 transition`}
                >
                  contact@adamhartmann.ch
                </a>
                <Link href="/more" className={`${pill} hover:bg-white/10 transition`}>
                  Book a call
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}