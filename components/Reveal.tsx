// path: components/Reveal.tsx
"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { useScrollRoot } from "@/components/ScrollContext";

export default function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const root = useScrollRoot();

  const viewportRoot = root ? { current: root } : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, root: viewportRoot }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}