import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";
import { StatusPill } from "@/components/case-studies/StatusPill";
import { TriangleOfTruth } from "@/components/case-studies/TriangleOfTruth";
import { PhoneFrame } from "@/components/case-studies/PhoneFrame";
import { SlackFrame } from "@/components/case-studies/SlackFrame";
import { DocFrame } from "@/components/case-studies/DocFrame";
import type { Project } from "@/lib/case-studies-data";

// Replace with the real WhatsApp business number when available.
const AWFII_WHATSAPP_NUMBER = "<WHATSAPP_NUMBER>";

export function ProjectSection({ project }: { project: Project }) {
  return (
    <section id={project.id} className="scroll-mt-28 py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Hero band */}
        <FadeInOnView className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill status={project.status} />
            <span className="text-xs uppercase tracking-widest text-[var(--cs-text-mut)]">
              {project.sector}
            </span>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[var(--cs-text)]">
            {project.title}
          </h2>
          <p className="font-body max-w-2xl text-lg text-[var(--cs-text-mut)] leading-relaxed">
            {project.oneLiner}
          </p>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--cs-blue-text)] hover:underline"
            >
              View repository
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </FadeInOnView>

        {/* Problem */}
        <FadeInOnView className="mt-10 max-w-2xl" style={{ transitionDelay: "60ms" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--cs-text-mut)] mb-2">
            The problem
          </p>
          <p className="font-body text-[var(--cs-text)]/85 leading-relaxed">{project.problem}</p>
        </FadeInOnView>

        {/* Solution diagram */}
        <FadeInOnView className="mt-12" style={{ transitionDelay: "100ms" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--cs-text-mut)] mb-4">
            The solution
          </p>
          <TriangleOfTruth nodes={project.triangle} />
          {project.statusChecklist && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {project.statusChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-[var(--cs-text-mut)]"
                >
                  <span className="text-[var(--unify-blue)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </FadeInOnView>

        {/* Tech stack */}
        <FadeInOnView className="mt-12" style={{ transitionDelay: "140ms" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--cs-text-mut)] mb-4">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--unify-blue)]/25 bg-[var(--cs-blue-soft)] px-3.5 py-1.5 text-sm font-medium text-[var(--cs-blue-text)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeInOnView>

        {/* Use cases */}
        <FadeInOnView className="mt-12" style={{ transitionDelay: "180ms" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--cs-text-mut)] mb-4">
            Use cases
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="rounded-xl border border-[var(--cs-border)] bg-[var(--cs-bg-2)] p-5"
              >
                <span className="text-2xl font-bold text-[var(--unify-blue)]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold text-[var(--cs-text)]">{uc.title}</p>
                <p className="mt-1 text-sm text-[var(--cs-text-mut)] leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </FadeInOnView>

        {/* Deliverables */}
        <FadeInOnView className="mt-12" style={{ transitionDelay: "220ms" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--cs-text-mut)] mb-4">
            Deliverables
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {project.deliverables.map((d) => {
              if (d.frame === "phone") {
                return <PhoneFrame key={d.caption} caption={d.caption} />;
              }
              if (d.frame === "slack") {
                return <SlackFrame key={d.caption} caption={d.caption} />;
              }
              return (
                <DocFrame
                  key={d.caption}
                  caption={d.caption}
                  variant={d.variant}
                  tableKind={d.tableKind}
                />
              );
            })}
          </div>
        </FadeInOnView>

        {/* WhatsApp CTA (AWFII only) */}
        {project.whatsappCta && (
          <FadeInOnView className="mt-12" style={{ transitionDelay: "260ms" }}>
            <a
              href={`https://wa.me/${AWFII_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--unify-blue)] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(0,138,209,0.45)]"
            >
              <MessageCircle className="h-4 w-4" />
              Try it on WhatsApp
            </a>
            <p className="mt-2 text-xs text-[var(--cs-text-dim)]">
              Placeholder number — replace <code>AWFII_WHATSAPP_NUMBER</code> with the live business
              number.
            </p>
          </FadeInOnView>
        )}

        {/* Outcome */}
        <FadeInOnView
          className="mt-12 border-l-2 border-[var(--unify-blue)] pl-5"
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--cs-text-mut)] mb-2">
            Outcome
          </p>
          <p className="font-body text-[var(--cs-text)] leading-relaxed">{project.outcome}</p>
        </FadeInOnView>
      </div>
    </section>
  );
}
