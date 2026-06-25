import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Bot, Code, Zap } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative py-20 md:py-32 lg:py-40 bg-grid-small-white/[0.05]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <FadeInOnView
                  as="h1"
                  className="text-4xl font-bold tracking-tighter font-display sm:text-5xl md:text-6xl lg:text-7xl text-glow"
                >
                  AI, custom-built for African realities.
                </FadeInOnView>
                <FadeInOnView
                  as="p"
                  className="max-w-[600px] text-muted-foreground md:text-xl delay-150"
                >
                  We design, deploy, and scale autonomous digital employees—AI agents that take action, not just provide insights—so businesses in Southern Africa grow with lower cost, higher control, and faster decisions.
                </FadeInOnView>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="group" asChild>
                    <Link href="/contact">
                      Request a Demo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-full h-full bg-primary/10 rounded-full blur-3xl" />
                <Bot className="relative w-48 h-48 md:w-64 md:h-64 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-display sm:text-5xl">
                  Operational AI, delivered as digital employees
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Plug into your existing stack and orchestrate end-to-end workflows. Our autonomous agents perceive, decide, and act with approvals and full audit trails—so you see measurable ROI without changing how your teams work.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(31,176,255,0.35)]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Agentic Workflows</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pre-built, custom-tuned autonomous digital employees that perceive → decide → act across Sales, Finance, and Operations—lead qualification, 3-way match and reconciliations, pick/pack and delivery orchestration with approvals and audit trails by design.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(31,176,255,0.35)]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Automation & Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Plug into your existing CRM/ERP/accounting stack—WhatsApp/HubSpot, Sage/Xero/Zoho, bank feeds via Stitch, and payments via Paystack/Flutterwave/Stripe while enforcing maker-checker controls, approvals, and full activity logs at every step.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(31,176,255,0.35)]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Custom AI Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Agents tailored to your data, SOPs, and regulatory context : start with a 4–8 week pilot to prove KPIs, then scale in waves once ROI is visible.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter font-display md:text-4xl/tight">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let&apos;s discuss how our agentic solutions can help you achieve
                your goals.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full group" asChild>
                <Link href="/contact">
                  Get in Touch
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
