import Image from "next/image";

const tables = {
  audit: {
    title: "Audit CSV",
    columns: ["ID", "Employee", "Logged", "Approved", "Status"],
    rows: [
      ["TS-0042", "Thabo M.", "40.0", "40.0", "Match"],
      ["TS-0043", "Zanele K.", "38.5", "38.5", "Match"],
      ["TS-0044", "Pieter V.", "41.0", "37.5", "Review"],
    ],
  },
  airtable: {
    title: "Conversation log",
    columns: ["Phone", "Intent", "Last message", "Status"],
    rows: [
      ["+27 8X XXX 1234", "HELP", "Show me how budgeting works", "Resolved"],
      ["+27 8X XXX 5678", "HELLO", "Hi there", "Resolved"],
      ["+27 8X XXX 9012", "Fallback", "How do I start an emergency fund?", "AI replied"],
    ],
  },
};

export function DocFrame({
  imageSrc,
  caption,
  variant = "doc",
  tableKind = "audit",
}: {
  imageSrc?: string;
  caption?: string;
  variant?: "doc" | "table" | "timeline";
  tableKind?: "audit" | "airtable";
}) {
  const table = tables[tableKind];
  return (
    <figure className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-[var(--cs-border-hi)] bg-[var(--cs-bg-2)] shadow-2xl">
        {imageSrc ? (
          // Real screenshot/document drop-in: replace `imageSrc` with the real asset.
          <Image
            src={imageSrc}
            alt={caption ?? "Document"}
            width={420}
            height={300}
            className="w-full object-cover"
          />
        ) : variant === "table" ? (
          <div className="p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--cs-text-mut)]">
              {table.title}
            </p>
            <table className="w-full text-left text-[11px] text-[var(--cs-text-mut)]">
              <thead>
                <tr className="border-b border-[var(--cs-border)] text-[var(--cs-text)]">
                  {table.columns.map((col) => (
                    <th key={col} className="py-1.5 pr-2 font-medium">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri} className="border-b border-[var(--cs-border)] last:border-0">
                    {row.map((cell, i) => (
                      <td key={i} className="py-1.5 pr-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : variant === "timeline" ? (
          <div className="p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--cs-text-mut)]">
              Roadmap
            </p>
            <div className="space-y-3">
              {["Discovery & landscape analysis", "WhatsApp advisory pilot", "Commercialisation rollout"].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--cs-blue-soft)] text-[10px] font-bold text-[var(--cs-blue-text)]">
                      {i + 1}
                    </div>
                    <div className="h-px flex-1 bg-[var(--cs-border)]" />
                    <p className="text-xs text-[var(--cs-text-mut)]">{step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="h-10 w-8 rounded-sm border border-[var(--cs-border-hi)] bg-[var(--cs-bg-3)]" />
            <p className="text-xs font-semibold text-[var(--cs-text)]">{caption ?? "Document"}</p>
            <p className="text-[10px] text-[var(--cs-text-dim)]">Cover preview</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-[var(--cs-text-mut)]">{caption}</figcaption>
      )}
    </figure>
  );
}
