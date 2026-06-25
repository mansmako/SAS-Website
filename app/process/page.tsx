// app/process/page.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";


const InfiniteScroll = dynamic(() => import("@/components/InfiniteScroll"), {
  ssr: false,
});
const Particles = dynamic(() => import("@/components/particles"), { ssr: false });
// Single source of truth
const processSteps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We start by diving deep into your business to understand your goals, challenges, and opportunities. Together, we define a strategic roadmap for implementing agentic solutions that align with your objectives and deliver measurable ROI.",
  },
  {
    step: 2,
    title: "Design & Architecture",
    description:
      "Our team designs a robust and scalable architecture for your AI agents. This includes defining agent roles, data flows, integration points with existing systems, and safety protocols to ensure reliable and secure operation.",
  },
  {
    step: 3,
    title: "Development & Integration",
    description:
      "We build, train, and fine-tune your AI agents, integrating them seamlessly into your workflows. Our iterative development process includes rigorous testing and human-in-the-loop validation to ensure high performance and accuracy.",
  },
  {
    step: 4,
    title: "Deployment & Optimization",
    description:
      "Once deployed, we continuously monitor and optimize your agents' performance. We use advanced observability and analytics to track key metrics, gather feedback, and make data-driven improvements to enhance their effectiveness over time.",
  },
  {
    step: 5,
    title: "Support & Evolution",
    description:
      "We provide ongoing support and maintenance to ensure your agentic systems evolve with your business. Our partnership includes regular check-ins, performance reviews, and strategic guidance to help you stay ahead of the curve.",
  },
];

export default function ProcessPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Full-screen particles background (behind everything) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles
          // make it *very* subtle
          className="opacity-50"        // tweak to opacity-15/20 if you want a bit more
          particleColors={["#FFFFFF"]}  // single soft color
          particleCount={500}           // fewer points
          particleBaseSize={50}         // smaller points
          particleSpread={10}

          // make it fully static + non-interactive
          speed={0.01}                     // no time-based motion
          disableRotation={false}        // no rotation
          moveParticlesOnHover={false}  // ignores the mouse
          alphaParticles={false}         // soft-edged dots with alpha
        />
      </div>
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 md:py-24 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Process
                </div>
                <h1 className="text-3xl font-bold tracking-tighter font-display sm:text-5xl">
                  A Partnership for Transformation
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our collaborative process ensures that we deliver solutions
                  that are not only technologically advanced but also perfectly
                  aligned with your strategic goals.
                </p>
              </div>

              {/* Infinite Scroll with your steps */}
              <div className="w-full flex justify-center pt-6">
                <InfiniteScroll
                  width="34rem"
                  maxHeight="70vh"
                  negativeMargin="-0.75rem"
                  itemMinHeight={140}
                  isTilted
                  tiltDirection="left"
                  autoplay
                  autoplaySpeed={0.6}
                  autoplayDirection="down"  // should move downward; see note above
                  pauseOnHover
                  items={processSteps.map((s) => ({
                    content: (
                      <div className="w-full text-left">
                        <div className="text-xs uppercase tracking-wide text-primary/80">
                          Step {s.step}
                        </div>
                        <div className="text-lg font-semibold">{s.title}</div>
                        <div className="text-sm opacity-80 mt-1">{s.description}</div>
                      </div>
                    ),
                  }))}
                />
              </div>

              <p className="text-sm opacity-70">Drag, scroll, or hover to pause.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter font-display md:text-4xl/tight">
                Ready to Build the Future?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let&apos;s start the conversation and explore how agentic AI can
                revolutionize your business.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button
                size="lg"
                className="w-full group transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(31,176,255,0.45)] hover:brightness-110"
                asChild
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
