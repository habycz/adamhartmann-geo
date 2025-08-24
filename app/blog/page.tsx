// path: app/blog/page.tsx
import Reveal from "@/components/Reveal";

const posts = [
  {
    title: "Power Pages Auth: Choosing the Right Strategy",
    date: "2025‑01‑14",
    summary:
      "When to use Azure AD, custom identities, and invitations.",
  },
  {
    title: "Dataverse Security: Roles that Scale",
    date: "2025‑02‑02",
    summary:
      "Designing roles and teams for sustainable governance.",
  },
  {
    title: "From Click‑Heavy to Guided",
    date: "2025‑03‑05",
    summary:
      "Turning complex flows into visual, process‑driven UX.",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-28 pb-24">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-white/60">Notes on Power Pages patterns, adoption, and architecture.</p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-xs text-white/50">{p.date}</p>
              <p className="mt-3 text-sm text-white/70">{p.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}