import Image from "next/image";

export function WatermarkDivider() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex items-center justify-center py-12 md:py-20"
    >
      <Image
        src="/brand/logo.png"
        alt=""
        width={280}
        height={280}
        className="h-32 w-32 md:h-56 md:w-56 object-contain opacity-[0.04]"
      />
    </div>
  );
}
