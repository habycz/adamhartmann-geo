"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/more", label: "More" },
];

export default function NavGlass() {
  // Track highlight position and active index
  const [highlight, setHighlight] = useState({ left: 0, width: 0, index: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const linksRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // On mount, set highlight to current path or first link
  useEffect(() => {
    updateHighlight(highlight.index);
    // eslint-disable-next-line
  }, []);

  // On window resize, update highlight position
  useEffect(() => {
    function handleResize() {
      updateHighlight(highlight.index);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, [highlight.index]);

  function updateHighlight(index: number) {
    const el = linksRefs.current[index];
    const parent = rowRef.current; // the relative container of the sliding pill
    if (el && parent) {
      const parentRect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      const linkWidth = rect.width;
      const linkLeft = rect.left - parentRect.left;
      // desired pill is 86% of the link width; center it by shifting half the delta
      const targetWidth = Math.max(0, linkWidth * 0.86);
      const centeredLeft = linkLeft + (linkWidth - targetWidth) / 2;
      setHighlight({ left: centeredLeft, width: targetWidth, index });
    }
  }

  const handleTabClick = (i: number) => {
    updateHighlight(i);
  };

  return (
    <nav aria-label="Primary" className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center">
      <div
        ref={containerRef}
        className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10
                      bg-white/5 px-2 py-1 backdrop-blur-2xl
                      shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative"
      >
        <div className="relative flex" ref={rowRef}>
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              id={"nav-btn-" + i}
              ref={el => (linksRefs.current[i] = el)}
              className={twMerge(
                "relative z-10 rounded-full h-10 px-4 flex items-center text-sm leading-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer",
                highlight.index === i
                  ? "text-black font-semibold"
                  : "text-white/80 hover:text-white"
              )}
              onClick={() => handleTabClick(i)}
            >
              {l.label}
            </Link>
          ))}
          {/* Sliding highlight */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[36px] bg-white rounded-full transition-all duration-300 ease-in-out z-0 shadow-[0_2px_12px_rgba(255,255,255,0.15)] flex items-center justify-center"
            style={{
              width: `${highlight.width}px`,
              transform: `translateX(${highlight.left}px) translateY(-50%)`
            }}
            aria-hidden="true"
          />
        </div>
        <a
          href="mailto:contact@adamhartmann.ch"
          className="ml-1 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}