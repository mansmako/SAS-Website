import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub | Spiritus Agentic Solutions",
  description:
    "Field notes, reviews, and ideas from the Spiritus team — frontier AI for SADC business, written by the people building it.",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
