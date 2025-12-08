import Link from "next/link";

export const metadata = { title: "Services - PrimeLogic" };

const services = [
  {
    title: "AI Strategy & Advisory",
    href: "/services/ai-advisory",
    desc: "Maturity assessments, AI roadmaps, operating model design, and strategic guidance rooted in business value.",
    icon: "ai_advisory.png",
  },
  {
    title: "Agentic AI Systems",
    href: "/services/agentic-ai",
    desc: "Autonomous decision-making and tool-using AI agents designed for multi-step workflows.",
    icon: "agentic_ai.png",
  },
  {
    title: "AI Architecture",
    href: "/services/ai-architecture",
    desc: "Design of scalable AI platforms including vector search, embeddings, LLM orchestration, and data infrastructure.",
    icon: "ai_architecture.png",
  },
  {
    title: "Chatbots & RAG",
    href: "/services/chatbots",
    desc: "Enterprise-grade RAG chatbots connected to your documents, processes, and knowledge bases.",
    icon: "chatbot.png",
  },
  {
    title: "Document Intelligence",
    href: "/services/document-intelligence",
    desc: "OCR, table extraction, PDF-to-structured-data pipelines for contracts, forms, and operations.",
    icon: "pdf.png",
  },
  {
    title: "Process Automation",
    href: "/services/automation",
    desc: "AI-driven workflow automation that reduces manual work and accelerates decisions.",
    icon: "automation.png",
  },
  {
    title: "Data Engineering",
    href: "/services/data-engineering",
    desc: "Pipelines, transformations, data modeling, analytics foundations, and cloud migration.",
    icon: "data_engineering.png",
  },
  {
    title: "AI Governance",
    href: "/services/ai-governance",
    desc: "Responsible AI frameworks, risk controls, model monitoring, and compliance alignment.",
    icon: "governance.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        PrimeLogic helps you move from AI experimentation to durable, governed capabilities.
        We partner across strategy, architecture, implementation, and operations to create
        systems that are both impactful and maintainable.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="service-link-card card-hover items-center text-center"
          >
            <img
              src={`/images/services/${s.icon}`}
              className="h-24 w-24 mx-auto mb-4"
              alt={s.title}
            />
            <h2 className="font-semibold text-lg text-gray-900 mb-1">
              {s.title}
            </h2>
            <p className="text-sm text-gray-600">
              {s.desc}
            </p>
            <div className="mt-4 text-sm text-brand font-semibold">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
