// path: app/work/page.tsx
import Reveal from "@/components/Reveal";

const items = [
  {
    title: "Secure Partner Portal",
    blurb: "Role-based access, Dataverse integration, streamlined onboarding.",
    tags: ["Power Pages", "Dataverse", "Azure"],
  },
  {
    title: "Claims Intake UX",
    blurb: "Reduced clicks by 35% with guided process flows and validation.",
    tags: ["Power Pages", "Automate"],
  },
  {
    title: "Client Reporting Hub",
    blurb: "Power BI embedded with consented data views and export.",
    tags: ["Power BI", "Power Pages"],
  },
];

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-28 pb-24">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Work</h1>
        <p className="mt-3 text-white/60">Selected deliveries and architecture highlights.</p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] mb-4" />
              <h3 className="text-lg font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-white/60">{it.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}