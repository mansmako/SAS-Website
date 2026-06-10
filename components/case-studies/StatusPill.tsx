import { cn } from "@/lib/utils";

export function StatusPill({ status }: { status: "Live" | "In Development" }) {
  const isLive = status === "Live";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        isLive
          ? "border-[var(--unify-blue)]/40 bg-[var(--cs-blue-soft)] text-[var(--cs-blue-text)]"
          : "border-[var(--africa-gold)]/40 bg-[var(--africa-gold)]/10 text-[var(--africa-gold)]"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          isLive ? "bg-[var(--unify-blue)]" : "bg-[var(--africa-gold)]"
        )}
      />
      {status}
    </span>
  );
}
