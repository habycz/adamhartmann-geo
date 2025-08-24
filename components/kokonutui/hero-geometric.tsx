"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "• Crafting Swiss‑grade Power Pages",
  title1 = "Turning Vision into",
  title2 = "Seamless Digital Reality",
  subtitle = "Helping B2B teams bring ideas to life with Microsoft Power Pages expertise.",
  showLogo = false,
  badgeClassName = "",
}: {
  badge?: string
  title1?: string
  title2?: string
  subtitle?: string
  showLogo?: boolean
  badgeClassName?: string
}) {
  const [copied, setCopied] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 + i * 0.15, ease: "easeOut" },
    }),
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("contact@adamhartmann.ch")
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // no-op; clipboard may be blocked in some environments
    }
  }

  return (
    <motion.div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      key="hero"
    >
      {/* subtle global tint */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" /> */}

      {/* content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* clickable badge with larger top gap */}
          <motion.a
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            href="#"
            className={cn(
              "inline-flex items-center gap-2 h-9 px-4 leading-none rounded-full bg-white/[0.04] border border-white/[0.1] shadow-[0_8px_32px_rgba(255,255,255,0.06)] mb-10 md:mb-14 hover:bg-white/[0.07] transition transform-gpu will-change-transform whitespace-nowrap",
              badgeClassName
            )}
            style={{
              transform: "translateZ(0)",
              WebkitFontSmoothing: "antialiased",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {showLogo ? (
              <Image src="/placeholder-logo.svg" alt="Logo" width={18} height={18} />
            ) : (
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-white/70" />
            )}
            <span className="text-sm text-white/70 tracking-wide leading-[1]">{badge}</span>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </motion.a>

          {/* two‑line heading (smaller) */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-[9vw] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 leading-[1.05] tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/85">
                {title1}
              </span>
              <br />
              <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300", pacifico.className)}>
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* single‑line subtitle with emoji */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/45 mb-8 md:mb-10 font-light tracking-wide max-w-3xl mx-auto whitespace-pre-line">
              {"Helping B2B teams bring "}
              <span role="img" aria-label="light-bulb">💡</span>
              {" ideas to life with Microsoft Power Pages expertise."}
            </p>
          </motion.div>

          {/* CTA row inside hero */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            {/* Left CTA: glass by default, turns white on hover */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-white/90 backdrop-blur-md px-6 sm:px-7 py-3.5 text-sm sm:text-base transition-all duration-300 shadow-[0_8px_28px_rgba(0,0,0,0.25)] hover:bg-white hover:text-black hover:shadow-[0_14px_44px_rgba(255,255,255,0.25)] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span className="font-medium">Let’s Connect</span>
              <span className="ml-1 inline-grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-black/10 group-hover:text-black">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>

            {/* Right CTA: glass email copy with inline feedback */}
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 text-white/85 backdrop-blur-md px-5 sm:px-6 py-3 text-sm sm:text-base hover:bg-white/9 transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span>{copied ? "Copied to clipboard" : "contact@adamhartmann.ch"}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* bottom-right ephemeral toast for clipboard */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 rounded-xl border border-white/10 bg-black/70 px-5 py-4 text-white/90 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">✓</span>
            <div>
              <p className="text-sm font-medium">Copied to clipboard!</p>
              <p className="text-xs text-white/60">Email address copied successfully.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* soft top vignette only – avoids bottom seam */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
    </motion.div>
  )
}