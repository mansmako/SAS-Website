"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateX = (0.5 - py) * 8; // max ~4deg
    const rotateY = (px - 0.5) * 8;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-6",
        "transition-[transform,border-color] duration-[400ms] ease-out hover:border-primary/40",
        "motion-reduce:transition-colors motion-reduce:hover:border-primary/40",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
        "before:[background:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(0,138,209,0.15),transparent_60%)]",
        "hover:before:opacity-100 motion-reduce:before:hidden",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </Link>
  );
}
