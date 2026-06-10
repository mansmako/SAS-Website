import Image from "next/image";

type ChatBubble = {
  from: "them" | "me";
  text: string;
};

const fallbackChat: ChatBubble[] = [
  { from: "them", text: "Hi! How can I save R200 a month without feeling it?" },
  { from: "me", text: "Try the 'round-up' trick: round every purchase up to the nearest R10 and move the difference to savings. On 20 purchases a week, that's roughly R200/month." },
  { from: "them", text: "That's actually doable. Can you remind me weekly?" },
  { from: "me", text: "Done — I'll check in every Monday with your progress." },
];

export function PhoneFrame({
  imageSrc,
  caption,
}: {
  imageSrc?: string;
  caption?: string;
}) {
  return (
    <figure className="flex flex-col items-center gap-3">
      <div className="relative mx-auto w-[220px] rounded-[2rem] border border-[var(--cs-border-hi)] bg-[var(--cs-bg-2)] p-2.5 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[var(--cs-bg)]" />
        <div className="overflow-hidden rounded-[1.5rem] bg-[#0b141a]">
          {imageSrc ? (
            // Real screenshot drop-in: replace `imageSrc` with the deployment screenshot.
            <Image
              src={imageSrc}
              alt={caption ?? "Screenshot"}
              width={220}
              height={420}
              className="h-[420px] w-full object-cover"
            />
          ) : (
            <div className="flex h-[420px] w-full flex-col gap-2 bg-[#0b141a] px-3 pb-3 pt-10">
              {fallbackChat.map((bubble, i) => (
                <div
                  key={i}
                  className={
                    bubble.from === "me"
                      ? "ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-[#005c4b] px-2.5 py-1.5 text-[11px] leading-snug text-[#e9edef]"
                      : "mr-auto max-w-[80%] rounded-lg rounded-tl-none bg-[#202c33] px-2.5 py-1.5 text-[11px] leading-snug text-[#e9edef]"
                  }
                >
                  {bubble.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="text-xs text-[var(--cs-text-mut)]">{caption}</figcaption>
      )}
    </figure>
  );
}
