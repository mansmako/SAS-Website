import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";
import { SpotlightCard } from "@/components/SpotlightCard";
import { StatusPill } from "@/components/case-studies/StatusPill";
import { projects } from "@/lib/case-studies-data";

/* ─── Data ─────────────────────────────────────────────────────────── */

const heroPills = [
  {
    label: "Lead qualified",
    sub: "Sales pipeline updated",
    cls: "animate-float",
  },
  {
    label: "Invoice matched",
    sub: "3-way match approved",
    cls: "animate-float-b",
  },
  {
    label: "Order dispatched",
    sub: "Delivery route confirmed",
    cls: "animate-float",
    style: { animationDelay: "1.2s" },
  },
];

const stats = [
  { value: "3×", label: "Faster decisions" },
  { value: "40%", label: "Cost reduction" },
  { value: "<8 wks", label: "Pilot to production" },
  { value: "100%", label: "Local context" },
];

const integrations = [
  { name: "WhatsApp", color: "#25D366", slug: "whatsapp" },
  { name: "Sage", color: "#00dc82", slug: "sage" },
  { name: "Xero", color: "#13B5EA", slug: "xero" },
  { name: "HubSpot", color: "#FF7A59", slug: "hubspot" },
  { name: "Zendesk", color: "#03363D", slug: "zendesk" },
  { name: "Jira", color: "#0052CC", slug: "jira" },
  { name: "Stripe", color: "#635BFF", slug: "stripe" },
  { name: "Zoho", color: "#E42527", slug: "zoho" },
  { name: "+\u00a0more", color: "#e0af00", slug: null },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We map your workflows, pain points, and existing tech stack." },
  { step: "02", title: "Build", desc: "Custom agents tuned to your SOPs, data, and compliance rules." },
  { step: "03", title: "Deploy", desc: "Our Field Deployment Engineers go on-site to ensure it works in your context." },
  { step: "04", title: "Scale", desc: "Prove KPIs in weeks, then expand across your business with confidence." },
];

const testimonials = [
  {
    quote:
      "Spiritus transformed how we handle leads. What used to take our team hours now happens automatically — with full audit trails every step of the way.",
    name: "Thabo M.",
    title: "Operations Director",
  },
  {
    quote:
      "The agents integrate directly into our Sage environment. Invoice matching that used to take days now completes in minutes — with zero errors.",
    name: "Zanele K.",
    title: "Finance Manager, Cape Town",
  },
  {
    quote:
      "We went from pilot to full deployment in six weeks. The FDE team ensured everything worked in our context, our language, our culture.",
    name: "Pieter V.",
    title: "CEO, SME Distributor",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* ══ HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="flex flex-col gap-7">
              <FadeInOnView>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Now building for businesses worldwide
                </div>
              </FadeInOnView>

              <FadeInOnView
                as="h1"
                className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.04] text-glow"
                style={{ transitionDelay: "80ms" }}
              >
                AI, custom-built for your reality.
              </FadeInOnView>

              <FadeInOnView
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                style={{ transitionDelay: "160ms" }}
              >
                We create, implement, and scale autonomous digital employees —
                AI Agents that not only deliver insights but take{" "}
                <strong className="text-foreground font-semibold">
                  decisive action
                </strong>
                . Built so your business grows with reduced costs, increased
                control, and faster decisions.
              </FadeInOnView>

              <FadeInOnView
                className="flex flex-col sm:flex-row gap-3"
                style={{ transitionDelay: "240ms" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.45)]"
                >
                  Get a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground/75 transition-all hover:border-primary/50 hover:text-foreground"
                >
                  Our Services
                </Link>
              </FadeInOnView>
            </div>

            {/* Right — floating activity feed */}
            <div className="relative hidden md:flex items-center justify-center h-[440px]">
              <div className="absolute inset-[15%] rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm shadow-2xl" />
              {/* Glow inside card */}
              <div className="absolute inset-[15%] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 glow-blob opacity-60" />
              </div>
              <div className="absolute inset-0 flex flex-col gap-4 justify-center px-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1">
                  Agent activity
                </p>
                {heroPills.map((pill) => (
                  <div
                    key={pill.label}
                    className={`flex items-center gap-3 rounded-xl border border-border/50 bg-background/80 backdrop-blur px-4 py-3.5 shadow-lg ${pill.cls}`}
                    style={pill.style}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-sm">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{pill.label}</p>
                      <p className="text-xs text-muted-foreground">{pill.sub}</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════════════ */}
      <section className="py-20 border-y border-border/40">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Results, not reports.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Where other solutions promise transformation, Spiritus agents
              deliver measurable outcomes from week one.
            </p>
          </FadeInOnView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <FadeInOnView
                key={stat.label}
                className="text-center p-7 rounded-2xl border border-border/40 bg-card/40 hover:border-primary/30 transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURE 1 — The Spiritus Difference ════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Mock chat comparison */}
            <FadeInOnView className="space-y-4">
              {/* Generic bot — bad example */}
              <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  Generic Bot
                </p>
                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <div className="rounded-xl rounded-tl-none bg-muted px-3 py-2 text-xs text-muted-foreground max-w-[80%]">
                      My invoice hasn&apos;t been paid — can you help?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="rounded-xl rounded-tr-none bg-card border border-border/60 px-3 py-2 text-xs max-w-[80%]">
                      Please contact your account manager or email
                      support@company.com
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground/60 text-center pt-1">
                    Customer has left the conversation.
                  </p>
                </div>
              </div>

              {/* Spiritus — good example */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Spiritus Agent
                </p>
                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <div className="rounded-xl rounded-tl-none bg-muted px-3 py-2 text-xs text-muted-foreground max-w-[80%]">
                      My invoice hasn&apos;t been paid — can you help?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="rounded-xl rounded-tr-none bg-primary/20 border border-primary/30 px-3 py-2 text-xs max-w-[85%]">
                      I found Invoice #INV-2847 for $2,400. It&apos;s pending
                      approval in your payment run. I&apos;ve flagged it for
                      priority processing — you&apos;ll receive payment within
                      24 hours.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p className="text-[10px] text-emerald-400 font-medium">
                      Issue resolved. No human intervention required.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnView>

            {/* Text */}
            <FadeInOnView className="space-y-6">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider">
                The Spiritus Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Generic bots deflect.
                <br />
                <span className="text-primary">Spiritus delivers.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our agents follow your SOPs, tap into your live systems —
                Sage, Xero, Paystack — and resolve problems from start to
                finish. No hand-offs to inboxes. No customers left waiting.
              </p>
              <ul className="space-y-3">
                {[
                  "Reads and acts on live system data",
                  "Follows your exact SOPs and approval rules",
                  "Escalates intelligently to the right human",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* ══ FEATURE 2 — Integrations ═══════════════════════════════════ */}
      <section className="py-28 bg-card/20 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <FadeInOnView className="space-y-6 order-2 md:order-1">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider">
                Integrations
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Your tools.
                <br />
                <span className="text-primary">Our agents.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Spiritus meets your business where it operates. Our agents
                plug directly into your existing stack — no rip and replace
                required. We enforce maker-checker controls and full activity
                logs at every step.
              </p>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {[
                  "WhatsApp",
                  "Sage / Xero / Zoho",
                  "HubSpot",
                  "Paystack",
                  "Stitch",
                  "Flutterwave",
                  "Stripe",
                  "+ custom APIs",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Zap className="w-3 h-3 text-primary shrink-0" />
                    {tool}
                  </div>
                ))}
              </div>
            </FadeInOnView>

            {/* Integration grid */}
            <FadeInOnView className="order-1 md:order-2">
              <div className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur p-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                  Connected systems
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {integrations.map((t) => (
                    <div
                      key={t.name}
                      className="flex flex-col items-center gap-2.5 rounded-xl border border-border/40 bg-background/60 p-3.5 hover:border-border/70 transition-colors"
                    >
                      <div
                        className="h-9 w-9 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: t.color + "22",
                          border: `1px solid ${t.color}44`,
                        }}
                      >
                        {t.slug ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={`https://cdn.simpleicons.org/${t.slug}/${t.color.slice(1)}`}
                            alt={t.name}
                            width={20}
                            height={20}
                            style={{ width: 20, height: 20, flexShrink: 0 }}
                          />
                        ) : (
                          <span className="text-lg font-bold leading-none" style={{ color: t.color }}>+</span>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground text-center leading-tight font-medium">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Systems live
                  </span>
                  <span>Maker-checker enforced</span>
                </div>
              </div>
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* ══ FEATURE 3 — Process ════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Process steps */}
            <FadeInOnView className="space-y-3">
              {processSteps.map((s, i) => (
                <div
                  key={s.step}
                  className="flex gap-5 rounded-2xl border border-border/40 bg-card/40 p-5 transition-all hover:border-primary/30 hover:bg-card/80"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-3xl font-bold text-primary/25 leading-none w-10 shrink-0 pt-0.5">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </FadeInOnView>

            {/* Text */}
            <FadeInOnView className="space-y-6">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Built to act.
                <br />
                <span className="text-primary">Designed to scale.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We don&apos;t deliver off-the-rack software. We measure your
                workflows, cut solutions that fit exactly, then deploy our
                Field Deployment Engineers locally — ensuring every agent
                works in your context, your language, your culture.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
              >
                See our full process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* ══ SELECTED ENGAGEMENTS ═══════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent uppercase tracking-wider mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected{" "}
              <span style={{ color: "var(--unify-blue)" }}>engagements</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              A look inside the workshop — real builds, real problems, real
              outcomes.
            </p>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <FadeInOnView key={project.id} style={{ transitionDelay: `${i * 80}ms` }}>
                <SpotlightCard href={`/case-studies/#${project.id}`} className="h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <StatusPill status={project.status} />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.oneLiner}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read the build
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </SpotlightCard>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════════════════════ */}
      <section className="py-28 bg-card/20">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Real businesses. Real results.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Growing businesses trust Spiritus to automate their most
              complex processes — from finance to fulfilment.
            </p>
          </FadeInOnView>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeInOnView
                key={t.name}
                className="flex flex-col gap-5 rounded-2xl border border-border/40 bg-card/60 p-6 hover:border-primary/25 transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Quote marks */}
                <span className="text-3xl text-primary/30 font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 -mt-4">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                  <div className="h-9 w-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════ */}
      <section className="py-36 relative overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
              Your market is our
              <br />
              <span className="text-primary text-glow">comfort zone.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Global tools. Local expertise. Let&apos;s build your first agent
              together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_48px_hsl(200_100%_41%/0.5)]"
              >
                Get a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-9 py-4 text-base font-semibold text-foreground/75 transition-all hover:border-primary/50 hover:text-foreground"
              >
                Explore Services
              </Link>
            </div>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}

