import Image from "next/image";

export function SlackFrame({
  imageSrc,
  caption,
}: {
  imageSrc?: string;
  caption?: string;
}) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-[var(--cs-border-hi)] bg-[var(--cs-bg-2)] shadow-2xl">
        {imageSrc ? (
          // Real screenshot drop-in: replace `imageSrc` with the Slack summary screenshot.
          <Image
            src={imageSrc}
            alt={caption ?? "Slack message"}
            width={420}
            height={260}
            className="w-full object-cover"
          />
        ) : (
          <div className="p-4">
            <div className="mb-3 flex items-center gap-2 border-b border-[var(--cs-border)] pb-2">
              <span className="h-2 w-2 rounded-full bg-[var(--unify-blue)]" />
              <span className="text-xs font-semibold text-[var(--cs-text)]">#payroll-audit</span>
            </div>
            <div className="flex gap-3">
              <div className="h-9 w-9 shrink-0 rounded-md bg-[var(--unify-blue)]/20 flex items-center justify-center text-sm font-bold text-[var(--cs-blue-text)]">
                TS
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-[var(--cs-text)]">Timesheet Bot</span>
                  <span className="text-[10px] text-[var(--cs-text-dim)]">9:00 AM</span>
                </div>
                <p className="text-xs text-[var(--cs-text-mut)] leading-relaxed">
                  📋 <strong className="text-[var(--cs-text)]">Weekly audit summary</strong> — 42 entries
                  processed, 39 matched automatically, 3 flagged for review.
                </p>
                <ul className="space-y-1 pt-1 text-xs text-[var(--cs-text-mut)]">
                  <li>• Total hours logged: 312.5</li>
                  <li>• Exceptions: 3 (rate mismatch)</li>
                  <li>• Audit CSV attached below</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-[var(--cs-text-mut)]">{caption}</figcaption>
      )}
    </figure>
  );
}
