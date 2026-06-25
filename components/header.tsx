"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/learn", label: "Learn" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    /* Outer strip — transparent, just handles positioning */
    <header className="fixed top-0 z-50 w-full flex justify-center pointer-events-none pt-4 px-4">

      {/* ── Floating pill container ── */}
      <div
        className={cn(
          "pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-6",
          "rounded-2xl border border-border/50 px-4 py-2.5",
          "transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border-border/70"
            : "bg-card/80 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo height={32} />
        </Link>

        {/* Desktop nav links — centered */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-foreground bg-muted/60"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted/40"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA pill — dark, matching Lorikeet style */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          {mounted && (
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {resolvedTheme === "dark"
                ? <Sun className="h-4 w-4" />
                : <Moon className="h-4 w-4" />
              }
            </button>
          )}

          <Link
            href="/contact"
            className={cn(
              "hidden md:inline-flex items-center rounded-xl",
              "bg-foreground text-background",
              "px-5 py-2 text-sm font-semibold",
              "transition-all duration-200",
              "hover:bg-foreground/85 hover:shadow-md"
            )}
          >
            Get a demo
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-1.5 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — attaches below the pill */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-[calc(100%-0.5rem)] left-4 right-4 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-background/98 backdrop-blur-xl shadow-2xl p-3 mt-1">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2.5 text-sm font-medium rounded-xl transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-border/40">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl bg-foreground text-background px-5 py-3 text-sm font-semibold hover:bg-foreground/85 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a demo
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
