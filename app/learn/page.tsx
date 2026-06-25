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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { articles, categories, type Category } from "@/lib/learn-data";

// Metadata must be exported from a Server Component, so we handle it via
// generateMetadata in a wrapper — but since this is a client component we
// declare it here as a reference and rely on the layout title cascade.
// For a static export with per-page meta, convert the outer shell to a server
// component wrapping this client component.

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
    "AI Updates": "bg-primary/15 text-primary border-primary/30",
    Reviews: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    "Use Cases": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "Case Studies": "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Ideology: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  };
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colours[category]
      )}
    >
      {category}
    </span>
  );
}

function AuthorAvatar({ name }: { name: string }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary ring-1 ring-primary/30">
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
        setShareMsg("Link copied!");
        setTimeout(() => setShareMsg(""), 2000);
      });
    }
  }

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2 mb-2">
          <CategoryBadge category={article.category} />
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {article.readTime} min read
          </span>
        </div>
        <CardTitle className="font-display text-base leading-snug line-clamp-2">
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
            <p className="text-xs text-muted-foreground leading-tight truncate">
              {article.authorRole}
            </p>
          </div>
          <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
            {formatDate(article.lastUpdated)}
          </span>
        </div>

        {/* Interaction row */}
        <div className="flex w-full items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-8 gap-1.5 px-2 text-xs",
              liked ? "text-rose-400" : "text-muted-foreground hover:text-rose-400"
            )}
            onClick={() => setLiked((v) => !v)}
            title="Like (coming soon)"
          >
            <Heart className={cn("h-3.5 w-3.5", liked && "fill-current")} />
            <span>{liked ? 1 : 0}</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-2 text-xs text-muted-foreground"
            title="Comments coming soon"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>0</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-2 text-xs text-muted-foreground ml-auto"
            onClick={handleShare}
            title="Share"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>{shareMsg || "Share"}</span>
          </Button>
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
    <div className="flex flex-col min-h-screen">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
        {/* Cosmic background layer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(201 100% 56% / 0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 110%, hsl(201 100% 56% / 0.10) 0%, transparent 60%)",
          }}
        />
        {/* Star dots — pure CSS, no JS dependency */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, hsl(var(--primary)) 0%, transparent 100%), radial-gradient(1px 1px at 70% 15%, hsl(var(--primary)) 0%, transparent 100%), radial-gradient(1px 1px at 45% 70%, hsl(var(--primary) / 0.6) 0%, transparent 100%), radial-gradient(1px 1px at 85% 55%, hsl(var(--primary) / 0.5) 0%, transparent 100%), radial-gradient(1px 1px at 10% 85%, hsl(var(--primary) / 0.4) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 60% 45%, hsl(var(--primary) / 0.3) 0%, transparent 100%)",
            backgroundSize: "100% 100%",
          }}
        />

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-block rounded-full bg-primary/10 border border-primary/25 px-4 py-1.5 text-sm font-medium text-primary">
              The Spiritus Knowledge Hub
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Intelligence from the{" "}
              <span className="text-primary">workshop</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Field notes, reviews, and ideas from the Spiritus team — frontier
              AI for SADC business, written by the people building it.
            </p>

            {/* Search bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full max-w-xl mt-2"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchSubmitted(false);
                }}
                placeholder="Search the knowledge hub…"
                className="w-full rounded-xl border border-border bg-background/80 py-3.5 pl-11 pr-28 text-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/60 placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg"
              >
                Search
              </Button>
            </form>

            {searchSubmitted && (
              <p className="text-sm text-muted-foreground -mt-2 animate-fade-in">
                Search is coming soon — browse by category below in the meantime.
              </p>
            )}

            {/* Suggested topic chips */}
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              {SUGGESTED_TOPICS.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => {
                    const match = categories.find(
                      (c) => c.toLowerCase() === topic.toLowerCase()
                    );
                    setActiveCategory(match ?? "All");
                    document
                      .getElementById("article-feed")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {topic}
                  <ChevronRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUEST AN ARTICLE ── */}
      <section className="border-y border-border/40 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-sm text-muted-foreground text-center sm:text-left max-w-md">
              <span className="font-medium text-foreground">Missing a topic?</span>{" "}
              Send us a one-liner and we will put it on the list.
            </p>
            <Button variant="outline" size="sm" className="shrink-0" asChild>
              <a
                href="mailto:hello@spiritusagentic.com?subject=Article%20Request"
                target="_blank"
                rel="noreferrer"
              >
                Request an article
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FEED ── */}
      <section id="article-feed" className="flex-1 py-14 md:py-20">
        <div className="container px-4 md:px-6">

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
                    : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <FadeInOnView key={article.id}>
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
