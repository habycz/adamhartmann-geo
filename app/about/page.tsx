// path: app/about/page.tsx
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-28 pb-24 max-w-4xl">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h1>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mt-4 text-white/70">
          Power Platform Solution Architect &amp; Functional Consultant focused on Microsoft Power Pages.
          I help B2B teams deliver secure, scalable portals people actually enjoy using. My work spans architecture,
          functional consultancy, UX input, UAT and training—especially in regulated environments.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-medium">Core focus</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Power Pages architecture &amp; governance</li>
              <li>• Dataverse schema, roles, forms, rules</li>
              <li>• Power Automate workflows &amp; approvals</li>
              <li>• Power BI embeds with consented views</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-medium">Integration patterns</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Azure AD / SharePoint</li>
              <li>• Identity &amp; storage patterns</li>
              <li>• Secure external access</li>
              <li>• Documentation, enablement, rollout</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <p className="mt-8 text-white/70">
          If you value dependable partnership and outcome‑driven delivery, let’s talk:
          <a href="mailto:contact@adamhartmann.ch" className="underline decoration-white/30 underline-offset-4 ml-1">
            contact@adamhartmann.ch
          </a>
          .
        </p>
      </Reveal>
    </div>
  );
}