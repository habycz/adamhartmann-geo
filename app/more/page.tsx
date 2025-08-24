// path: app/more/page.tsx
import Reveal from "@/components/Reveal";

export default function MorePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-28 pb-24 max-w-4xl">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">More</h1>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-6 grid gap-4">
          <a href="mailto:contact@adamhartmann.ch" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
            Email — contact@adamhartmann.ch
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
            LinkedIn — connect
          </a>
          <a href="/blog" className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
            Blog — latest notes
          </a>
        </div>
      </Reveal>
    </div>
  );
}