import Link from "next/link";
import { ArrowRight, Target, Users, Globe2, Lightbulb } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const values = [
  {
    icon: Target,
    title: "Precision over promise",
    desc: "We don't sell demos — we build agents that work in your specific context. Every deployment is measured against your KPIs before we call it done.",
  },
  {
    icon: Globe2,
    title: "Global tools, local roots",
    desc: "Our founders built AI at Amazon and Bank of America. They left to apply those same disciplines to ambitious businesses everywhere — not as consultants, but as builders.",
  },
  {
    icon: Users,
    title: "Field Deployment Engineers",
    desc: "Every engagement includes local FDEs — engineers who go on-site, speak the language, and ensure your agent works in your culture, not just on a Zoom call.",
  },
  {
    icon: Lightbulb,
    title: "The Creator archetype",
    desc: "We're pioneers and non-conformists. We recognise what's possible early and build it. We don't deliver off-the-rack software — we tailor every solution to fit.",
  },
];

const team = [
  {
    initials: "SA",
    name: "Spiritus Founders",
    role: "Amazon Inc & Bank of America alumni",
    bio: "Having seen first-hand how world-class organisations use AI and automation to operate at unmatched efficiency, our founders set out to make those same tools accessible to ambitious businesses everywhere.",
  },
  {
    initials: "FDE",
    name: "Field Deployment Team",
    role: "On-the-ground implementation",
    bio: "Our FDEs are local experts embedded in your business during deployment. They bridge global technology with your specific operational context, language, and culture.",
  },
  {
    initials: "AI",
    name: "AI Engineering Team",
    role: "Agent architects & integrators",
    bio: "Senior engineers who design, build, and tune the agents. Specialists in agentic orchestration, enterprise integration, and multi-jurisdiction regulatory compliance.",
  },
];

const timeline = [
  { year: "2022", event: "Founded by ex-Amazon and Bank of America engineers with a mission to bring enterprise-grade AI to ambitious businesses." },
  { year: "2023", event: "First three client deployments in financial services and logistics." },
  { year: "2024", event: "Launched Field Deployment Engineer programme — agents deployed on-site across multiple markets." },
  { year: "2025", event: "Expanded to healthcare and retail verticals. 20+ agents live across 8 clients." },
  { year: "2026", event: "Serving businesses across multiple countries, with FDEs embedded in client operations globally." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <FadeInOnView>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Our Story
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Why should world-class AI only work<br />
                <span className="text-primary">in Silicon Valley?</span>
              </h1>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  Most firms in African markets are one of two things: a local
                  startup without access to frontier technology, or a global
                  player with no feel for the ground. We are deliberately both.
                </p>
                <p>
                  We are Silicon Valley-based and Africa-rooted. Our presence
                  at the frontier gives us direct access to the most advanced
                  AI and agentic infrastructure in the world — the same stack
                  reshaping global industry. Our roots across SADC mean we
                  understand the last mile: the languages, the payment rails,
                  the infrastructure, the way business actually gets done here.
                </p>
                <p>
                  African businesses have been locked out of the AI
                  productivity wave — not for lack of ambition, but for lack
                  of access. We close that gap. We build what global firms
                  can&apos;t, because they don&apos;t know the terrain the way
                  we do.
                </p>
              </div>
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* Brand proposition */}
      <section className="py-24 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeInOnView className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Like a personal tailor —<br />
                <span className="text-primary">but for AI.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We don&apos;t deliver off-the-rack software. We measure your workflows,
                identify your pain points, and cut solutions that fit you exactly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Then we deploy our Field Deployment Engineers — local experts who
                ensure the AI works in your context, your language, and your culture.
                This combination of global tools and local expertise is our DNA.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Work with us <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInOnView>

            {/* Timeline */}
            <FadeInOnView className="space-y-1">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className="relative flex gap-5 py-4 pl-5 border-l-2 border-border/40 last:border-transparent hover:border-primary/40 transition-colors"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="absolute -left-[9px] top-[22px] h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <div>
                    <span className="text-xs font-bold text-primary">{t.year}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{t.event}</p>
                  </div>
                </div>
              ))}
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-border/40 bg-card/20">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">What we stand for</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We embody the Creator archetype — innovators who recognise what&apos;s possible
              early and build it, without compromise.
            </p>
          </FadeInOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeInOnView
                key={v.title}
                className="rounded-2xl border border-border/50 bg-background/60 p-6 hover:border-primary/30 transition-all"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-border/40">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">The people behind the agents</h2>
          </FadeInOnView>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <FadeInOnView
                key={member.name}
                className="rounded-2xl border border-border/50 bg-card/50 p-7 hover:border-primary/25 transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 border border-primary/20 text-primary font-bold text-lg mb-5">
                  {member.initials}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mt-0.5 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/40">
        <div className="container text-center">
          <FadeInOnView>
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s build something together.</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Whether you&apos;re exploring AI for the first time or ready to scale,
              we&apos;d love to talk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.4)] transition-all"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground/70 hover:border-primary/50 hover:text-foreground transition-all"
              >
                View case studies
              </Link>
            </div>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}
