"use client";

import { useState } from "react";
import { Search, Heart, MessageCircle, Share2, Clock, ChevronRight } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { articles, categories, type Category } from "@/lib/learn-data";

const SUGGESTED_TOPICS = [
  "AI Agents",
  "SADC Business",
  "Automation",
  "Document AI",
  "Regulation",
  "Case Studies",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function CategoryBadge({ category }: { category: Category }) {
  const colours: Record<Category, string> = {
    "AI Updates":    "bg-primary/10 text-primary border-primary/25",
    Reviews:         "bg-purple-500/10 text-purple-400 border-purple-500/25",
    "Use Cases":     "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    "Case Studies":  "bg-[var(--africa-gold)]/10 text-[#e0af00] border-[var(--africa-gold)]/25",
    Ideology:        "bg-rose-500/10 text-rose-400 border-rose-500/25",
  };
  return (
    <span className={cn("inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium", colours[category])}>
      {category}
    </span>
  );
}

function AuthorAvatar({ name }: { name: string }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary ring-1 ring-primary/25">
      {name[0]}
    </div>
  );
}

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  const [liked, setLiked] = useState(false);
  const [shareMsg, setShareMsg] = useState("");

  function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: article.title, url: window.location.href }).catch(() => null);
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShareMsg("Copied!");
        setTimeout(() => setShareMsg(""), 2000);
      });
    }
  }

  return (
    <Card className="flex flex-col rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2 mb-2">
          <CategoryBadge category={article.category} />
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {article.readTime} min read
          </span>
        </div>
        <CardTitle className="text-base font-semibold leading-snug line-clamp-2">
          {article.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <CardDescription className="line-clamp-3 text-sm leading-relaxed">
          {article.excerpt}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-0">
        {/* Author row */}
        <div className="flex w-full items-center gap-2 border-t border-border/40 pt-3">
          <AuthorAvatar name={article.author} />
          <div className="min-w-0">
            <p className="text-xs font-medium leading-tight">{article.author}</p>
            <p className="text-xs text-muted-foreground leading-tight truncate">{article.authorRole}</p>
          </div>
          <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
            {formatDate(article.lastUpdated)}
          </span>
        </div>

        {/* Interaction row */}
        <div className="flex w-full items-center gap-1">
          <button
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs transition-colors",
              liked
                ? "text-rose-400 bg-rose-500/10"
                : "text-muted-foreground hover:text-rose-400 hover:bg-rose-500/10"
            )}
            onClick={() => setLiked((v) => !v)}
            title="Like (coming soon)"
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-current")} />
            <span>{liked ? 1 : 0}</span>
          </button>

          <button
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted/40 transition-colors"
            title="Comments coming soon"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>0</span>
          </button>

          <button
            className="ml-auto flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted/40 transition-colors"
            onClick={handleShare}
            title="Share"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>{shareMsg || "Share"}</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchSubmitted(true);
  }

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        {/* Extra cosmic radial for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(200 100% 41% / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">

            {/* Eyebrow — Africa Gold, matching process/contact pages */}
            <FadeInOnView>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                The Spiritus Knowledge Hub
              </span>
            </FadeInOnView>

            <FadeInOnView>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
                Intelligence from the{" "}
                <span className="text-primary text-glow">workshop</span>
              </h1>
            </FadeInOnView>

            <FadeInOnView>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Field notes, reviews, and ideas from the Spiritus team —
                frontier AI for SADC business, written by the people building it.
              </p>
            </FadeInOnView>

            {/* Search bar */}
            <FadeInOnView className="w-full max-w-xl mt-2">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setSearchSubmitted(false); }}
                  placeholder="Search the knowledge hub…"
                  className="w-full rounded-xl border border-border/60 bg-card/60 py-3.5 pl-11 pr-28 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:bg-card transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Search
                </button>
              </form>
              {searchSubmitted && (
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Search is coming soon — browse by category below in the meantime.
                </p>
              )}
            </FadeInOnView>

            {/* Topic chips */}
            <FadeInOnView className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_TOPICS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => {
                    const match = categories.find(
                      (c) => c.toLowerCase() === topic.toLowerCase()
                    );
                    setActiveCategory(match ?? "All");
                    document.getElementById("article-feed")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {topic}
                  <ChevronRight className="h-3 w-3" />
                </button>
              ))}
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* ── REQUEST AN ARTICLE ── */}
      <section className="border-y border-border/40 bg-card/20">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
            <p className="text-sm text-muted-foreground text-center sm:text-left max-w-md">
              <span className="font-medium text-foreground">Missing a topic?</span>{" "}
              Send us a one-liner and we will put it on the list.
            </p>
            <a
              href="mailto:hello@spiritusagentic.com?subject=Article%20Request"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-xl border border-border/60 bg-card/60 px-5 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              Request an article
            </a>
          </div>
        </div>
      </section>

      {/* ── FEED ── */}
      <section id="article-feed" className="flex-1 py-16 border-t border-border/40">
        <div className="container">

          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    {articles.filter((a) => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Card grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <FadeInOnView key={article.id} style={{ transitionDelay: `${i * 60}ms` }}>
                <ArticleCard article={article} />
              </FadeInOnView>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-muted-foreground">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
