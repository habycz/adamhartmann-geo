// path: components/NavGlass.tsx
"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/more", label: "More" },
];

export default function NavGlass() {
  return (
    <nav aria-label="Primary" className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10
                      bg-white/[0.06] px-2 py-1 backdrop-blur-xl
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.35)]">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-2 text-sm text-white/80 hover:text-white transition
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {l.label}
          </Link>
        ))}

        <a
          href="mailto:contact@adamhartmann.ch"
          className="ml-1 rounded-full bg-white px-3 py-2 text-sm font-medium text-black hover:opacity-90 transition
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}