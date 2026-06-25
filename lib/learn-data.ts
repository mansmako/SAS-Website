// PLACEHOLDER CONTENT — replace with real articles before launch.

export type Category =
  | "AI Updates"
  | "Reviews"
  | "Use Cases"
  | "Case Studies"
  | "Ideology";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  authorRole: string;
  lastUpdated: string; // ISO date string
  readTime: number;   // minutes
}

export const articles: Article[] = [
  {
    id: "1",
    title: "How GPT-4o Is Reshaping SADC Supply Chains",
    excerpt:
      "Frontier multimodal models are no longer a Western luxury — we break down exactly where GPT-4o is creating leverage in Southern African logistics and procurement workflows.",
    category: "AI Updates",
    author: "Mako",
    authorRole: "Founder & AI Architect",
    lastUpdated: "2025-10-01",
    readTime: 7,
  },
  {
    id: "2",
    title: "Claude 3.5 Sonnet Reviewed: Enterprise-Ready for Southern Africa?",
    excerpt:
      "We put Claude 3.5 Sonnet through its paces on real SADC business documents — contracts, RFPs, cross-border compliance forms. Here is what held up and what surprised us.",
    category: "Reviews",
    author: "Jerome",
    authorRole: "Lead Engineer",
    lastUpdated: "2025-09-28",
    readTime: 9,
  },
  {
    id: "3",
    title: "Automating Vendor Onboarding with AI Agents",
    excerpt:
      "Manual vendor onboarding costs finance teams days per new supplier. We walk through the agentic workflow we built that cuts that to under two hours — no human in the loop for routine cases.",
    category: "Use Cases",
    author: "Donnovan",
    authorRole: "Solutions Engineer",
    lastUpdated: "2025-09-25",
    readTime: 6,
  },
  {
    id: "4",
    title: "Field Notes: Building an AI Workflow for a Zimbabwean Logistics Firm",
    excerpt:
      "Low bandwidth, inconsistent connectivity, mixed document formats. A look at the constraints we actually faced deploying an agentic system in Harare — and how we solved them.",
    category: "Case Studies",
    author: "Jolo",
    authorRole: "Product & Strategy",
    lastUpdated: "2025-09-20",
    readTime: 11,
  },
  {
    id: "5",
    title: "Why Agentic AI Will Define the Next Decade in Africa",
    excerpt:
      "Africa's infrastructure gap is not a liability for AI adoption — it is an accelerant. The regions that leapfrogged landlines for mobile will do the same with automation. Here is our thesis.",
    category: "Ideology",
    author: "Mako",
    authorRole: "Founder & AI Architect",
    lastUpdated: "2025-10-03",
    readTime: 8,
  },
  {
    id: "6",
    title: "The State of AI Regulation in Southern Africa",
    excerpt:
      "SADC governments are moving — some faster than others. We map the current regulatory landscape, the gaps that matter for enterprise deployments, and what to watch in the next 12 months.",
    category: "AI Updates",
    author: "Jerome",
    authorRole: "Lead Engineer",
    lastUpdated: "2025-09-15",
    readTime: 10,
  },
  {
    id: "7",
    title: "Gemini 1.5 Pro vs GPT-4o for Document Processing",
    excerpt:
      "Two frontier models, one task: extracting structured data from messy SADC trade documents. We ran 500 real documents through both. The results are not what you would expect.",
    category: "Reviews",
    author: "Donnovan",
    authorRole: "Solutions Engineer",
    lastUpdated: "2025-09-10",
    readTime: 12,
  },
  {
    id: "8",
    title: "Deploying AI for Cross-Border Trade Compliance",
    excerpt:
      "SADC trade corridors involve up to nine document types per shipment. We built an agent that validates, flags, and routes compliance issues in real time. Here is the architecture.",
    category: "Use Cases",
    author: "Jolo",
    authorRole: "Product & Strategy",
    lastUpdated: "2025-09-05",
    readTime: 8,
  },
  {
    id: "9",
    title: "Lessons from Our First Enterprise Agent Deployment",
    excerpt:
      "Twelve weeks. One large client. More edge cases than we planned for. This is an honest account of what we learned shipping our first production agentic system into a Southern African enterprise.",
    category: "Case Studies",
    author: "Mako",
    authorRole: "Founder & AI Architect",
    lastUpdated: "2025-08-30",
    readTime: 14,
  },
];

export const categories: Category[] = [
  "AI Updates",
  "Reviews",
  "Use Cases",
  "Case Studies",
  "Ideology",
];
