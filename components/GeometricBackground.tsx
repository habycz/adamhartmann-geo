// path: components/GeometricBackground.tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

function Shape({
  className = "", delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]",
}: { className?: string; delay?: number; width?: number; height?: number; rotate?: number; gradient?: string }) {
  const reduce = useReducedMotion();
  const core = (
    <div style={{ width, height }} className="relative">
      <div
        className={[
          "absolute inset-0 rounded-full",
          "bg-gradient-to-r to-transparent",
          gradient,
          "backdrop-blur-[2px] border-2 border-white/[0.15]",
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
          "after:absolute after:inset-0 after:rounded-full",
          "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
        ].join(" ")}
      />
    </div>
  );

  if (reduce) return <div className={`absolute ${className}`} style={{ rotate }}>{core}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={`absolute ${className}`}
    >
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
        {core}
      </motion.div>
    </motion.div>
  );
}

export default function GeometricBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0">
        <Shape delay={0.3} width={600} height={140} rotate={12}  gradient="from-indigo-500/[0.12]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
        <Shape delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.12]"  className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
        <Shape delay={0.4} width={300} height={80}  rotate={-8}  gradient="from-violet-500/[0.12]"className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
        <Shape delay={0.6} width={220} height={60}  rotate={20}  gradient="from-amber-500/[0.12]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <Shape delay={0.7} width={180} height={50}  rotate={-25} gradient="from-cyan-500/[0.12]"  className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />
      </div>
      <div className="absolute inset-0 [mask-image:radial-gradient(85%_70%_at_50%_40%,black,transparent)]" />
    </div>
  );
}