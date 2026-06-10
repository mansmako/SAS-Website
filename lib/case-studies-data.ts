export type TriangleNode = {
  label: string;
  sub: string;
};

export type Deliverable = {
  frame: "phone" | "slack" | "doc";
  caption: string;
  variant?: "doc" | "table" | "timeline";
  tableKind?: "audit" | "airtable";
};

export type UseCase = {
  title: string;
  desc: string;
};

export type Project = {
  id: string;
  status: "Live" | "In Development";
  title: string;
  sector: string;
  oneLiner: string;
  repo?: string;
  problem: string;
  triangle: TriangleNode[];
  techChips: string[];
  useCases: UseCase[];
  deliverables: Deliverable[];
  outcome: string;
  statusChecklist?: string[];
  whatsappCta?: boolean;
};

export const projects: Project[] = [
  {
    id: "timesheets",
    status: "Live",
    title: "Audited Timesheet → Payroll Automation",
    sector: "Knowledge-Work Operations",
    oneLiner:
      "Raw timesheets in, audited payroll out — with a traceable record at every step.",
    repo: "https://github.com/mansmako/sas-audited-timesheets",
    problem:
      "Knowledge-work teams lose hours reconciling timesheets by hand, and errors slip silently into payroll. There was no single source of truth between what people logged and what they were paid.",
    triangle: [
      { label: "Input Layer", sub: "Google Sheets" },
      { label: "Logic Layer", sub: "n8n" },
      { label: "Visibility Layer", sub: "Slack" },
    ],
    techChips: ["Google Sheets", "n8n", "Slack"],
    useCases: [
      { title: "Agencies billing by the hour", desc: "Accurate, auditable hours behind every invoice." },
      { title: "Distributed teams, variable rates", desc: "Per-person rates handled automatically across regions." },
      { title: "Finance sign-off", desc: "An audit trail ready before payroll is approved." },
    ],
    deliverables: [
      { frame: "slack", caption: "Slack weekly-summary message" },
      { frame: "doc", caption: "Audit CSV table", variant: "table" },
      { frame: "doc", caption: "n8n workflow" },
    ],
    outcome:
      "MVP complete and handed to independent QA (125-case test register). Architecture proven end-to-end: form → master sheet → weekly workflow → Slack + audit CSV.",
  },
  {
    id: "awfii",
    status: "Live",
    title: "AWFII WhatsApp Financial Literacy Chatbot",
    sector: "Fintech · Financial Inclusion",
    oneLiner:
      "Financial literacy guidance delivered where people already are — on WhatsApp.",
    repo: "https://github.com/mansmako/awfii-chatbot",
    problem:
      "Financial literacy resources rarely reach the people who need them most, and almost never in a channel they already use daily. AWFII meets South African users on WhatsApp — no app to download, no barrier to entry.",
    triangle: [
      { label: "Input", sub: "Twilio (WhatsApp)" },
      { label: "Logic", sub: "n8n + LangChain / Groq" },
      { label: "Visibility", sub: "Airtable + reply" },
    ],
    techChips: [
      "n8n Cloud v2.20.7",
      "Twilio (WhatsApp)",
      "Airtable",
      "Groq (llama-3.3-70b-versatile)",
      "LangChain",
    ],
    statusChecklist: [
      "Inbound WhatsApp",
      "Keyword routing",
      "AI fallback w/ per-user memory",
      "Conversation logging",
      "Outbound replies",
    ],
    useCases: [
      { title: "First-time savers", desc: "Learning the basics of budgeting and saving." },
      { title: "Natural-language Q&A", desc: "Users ask budgeting questions in their own words." },
      { title: "Inclusion campaigns", desc: "Organisations running financial-inclusion programmes at scale." },
    ],
    deliverables: [
      { frame: "phone", caption: "Live WhatsApp conversation" },
      { frame: "doc", caption: "Airtable conversation log", variant: "table", tableKind: "airtable" },
    ],
    outcome:
      "Live and handling inbound messages, keyword routing, and AI fallback with per-user memory and full conversation logging.",
    whatsappCta: true,
  },
  {
    id: "smart-agri",
    status: "In Development",
    title: "Smart Agriculture AI Strategy",
    sector: "Agritech",
    oneLiner:
      "A go-to-market AI strategy bringing agentic tools to smallholder and commercial agriculture.",
    problem:
      "Agritech advice rarely fits the realities of farming in Zimbabwe and South Africa. This strategy maps how an AI advisory layer — delivered via WhatsApp — can reach extension officers and agri-input retailers in their own context.",
    triangle: [
      { label: "Input", sub: "WhatsApp" },
      { label: "Logic", sub: "n8n + LLM (planned)" },
      { label: "Visibility", sub: "Airtable" },
    ],
    techChips: ["WhatsApp", "n8n", "LLM (planned)", "Airtable"],
    useCases: [
      { title: "Extension officers", desc: "Advising farmers at scale, in context." },
      { title: "Agri-input retailers", desc: "Guiding product choice for customers." },
      { title: "Smallholders", desc: "Getting season-relevant guidance directly." },
    ],
    deliverables: [
      { frame: "doc", caption: "Strategy document cover" },
      { frame: "doc", caption: "Roadmap timeline", variant: "timeline" },
    ],
    outcome:
      "In active development. Strategy defined; build underway reusing proven AWFII components.",
  },
];
