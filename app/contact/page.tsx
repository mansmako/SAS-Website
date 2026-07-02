"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getDb } from "@/lib/firebase";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const details = [
  { icon: Mail, label: "Email us", value: "hello@spiritusagentic.com" },
  { icon: MapPin, label: "Headquarters", value: "Spiritus Agentic Solutions" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const db = getDb();
      if (db) {
        await addDoc(collection(db, "contacts"), {
          name, email, company, message, timestamp: new Date(),
        });
      } else {
        // Firebase not configured — fall back to mailto
        window.location.href =
          `mailto:hello@spiritusagentic.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`)}`;
      }
      setSubmitted(true);
      setName(""); setEmail(""); setCompany(""); setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get Started
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Let&apos;s build your<br />
              <span className="text-primary">first agent.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us about your biggest operational challenge. We&apos;ll come back
              with a scoped proposal in 24 hours.
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left — form */}
            <div className="md:col-span-3">
              {submitted ? (
                <FadeInOnView className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center rounded-2xl border border-primary/30 bg-primary/5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary text-2xl font-bold">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold">Message sent!</h2>
                  <p className="text-muted-foreground max-w-sm">
                    We&apos;ve received your message and will get back to you within
                    one business day.
                  </p>
                </FadeInOnView>
              ) : (
                <FadeInOnView>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium" htmlFor="name">Full name</label>
                        <input
                          id="name"
                          className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-card transition-colors"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium" htmlFor="email">Work email</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-card transition-colors"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium" htmlFor="company">Company name</label>
                      <input
                        id="company"
                        className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-card transition-colors"
                        placeholder="Your company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium" htmlFor="message">What&apos;s your biggest operational challenge?</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-card transition-colors resize-none"
                        placeholder="Describe the workflow, the pain, and what you've tried so far..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_24px_hsl(200_100%_41%/0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Send message"}
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </form>
                </FadeInOnView>
              )}
            </div>

            {/* Right — details */}
            <div className="md:col-span-2 flex flex-col gap-5">
              {details.map((d, i) => (
                <FadeInOnView
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="text-sm font-medium mt-0.5">{d.value}</p>
                  </div>
                </FadeInOnView>
              ))}

              <FadeInOnView
                className="rounded-2xl border border-accent/30 bg-accent/5 p-5 mt-2"
                style={{ transitionDelay: "240ms" }}
              >
                <p className="text-sm font-semibold text-accent mb-1">Prefer to see it first?</p>
                <p className="text-sm text-muted-foreground">
                  Book a live demo — we&apos;ll show you a working agent against a
                  workflow similar to yours.
                </p>
              </FadeInOnView>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
