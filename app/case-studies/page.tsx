import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";
import { ScrollProgressBar } from "@/components/case-studies/ScrollProgressBar";
import { ProjectSection } from "@/components/case-studies/ProjectSection";
import { WatermarkDivider } from "@/components/case-studies/WatermarkDivider";
import { projects } from "@/lib/case-studies-data";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col bg-[var(--cs-bg)] text-[var(--cs-text)]">
      <ScrollProgressBar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="container relative z-10 max-w-3xl">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--unify-blue)]/40 bg-[var(--cs-blue-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--cs-blue-text)] mb-6">
              Our Work
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              The workshop
            </h1>
            <p className="font-body mt-6 text-lg text-[var(--cs-text-mut)] max-w-xl leading-relaxed">
              Every agent here is hand-fitted to the business it serves —
              global tools, tailored to African realities. This is where we
              show our work: the problems, the builds, and what they deliver.
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* Anchor jump nav */}
      <nav className="sticky top-0 z-40 border-y border-[var(--cs-border)] bg-[var(--cs-bg)]/80 backdrop-blur">
        <div className="container flex flex-wrap gap-2 py-3">
          {projects.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="rounded-full border border-[var(--cs-border-hi)] px-4 py-1.5 text-sm font-medium text-[var(--cs-text-mut)] transition-colors hover:border-[var(--unify-blue)]/50 hover:text-[var(--cs-text)]"
            >
              {p.title.split("—")[0].split(":")[0].trim()}
            </a>
          ))}
        </div>
      </nav>

      {/* Project sections */}
      {projects.map((project, i) => (
        <div key={project.id}>
          <ProjectSection project={project} />
          {i < projects.length - 1 && <WatermarkDivider />}
        </div>
      ))}

      {/* Closing CTA */}
      <section className="border-t border-[var(--cs-border)] py-24">
        <div className="container max-w-2xl text-center">
          <FadeInOnView>
            <h2 className="font-sans text-3xl md:text-4xl font-bold">
              More agents in the workshop.
            </h2>
            <p className="font-body mt-4 text-[var(--cs-text-mut)] leading-relaxed">
              Every project here started as a conversation about a real
              problem. If you&apos;ve got one, we&apos;d love to hear it —
              and show you what a custom-built agent could do for your
              business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--unify-blue)] px-8 py-3.5 text-sm font-semibold text-white hover:shadow-[0_0_32px_rgba(0,138,209,0.4)] transition-all"
            >
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}
