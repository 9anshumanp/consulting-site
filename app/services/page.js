import Link from "next/link";

export const metadata = { title: "Services - PrimeLogic" };

const services = [
  {
    title: "AI Strategy & Advisory",
    href: "/services/ai-advisory",
    desc: "Maturity assessment, roadmap definition, and executive-ready plans for AI adoption."
  },
  {
    title: "Agentic AI Systems",
    href: "/services/agentic-ai",
    desc: "Agents that can plan, call tools, and coordinate complex multi-step workflows."
  },
  {
    title: "AI Architecture",
    href: "/services/ai-architecture",
    desc: "End-to-end LLM and AI system design, including retrieval, vector databases, and orchestration."
  },
  {
    title: "Chatbots & RAG",
    href: "/services/chatbots",
    desc: "Enterprise chatbots backed by your documentation, FAQs, and policies via RAG."
  },
  {
    title: "Document Intelligence",
    href: "/services/document-intelligence",
    desc: "High-accuracy extraction of tables, forms, and contracts into structured data."
  },
  {
    title: "Process Automation",
    href: "/services/automation",
    desc: "Automated workflows and decisioning to remove manual steps from your operations."
  },
  {
    title: "Data Engineering",
    href: "/services/data-engineering",
    desc: "Pipelines, transformations, and data models powering analytics and AI."
  },
  {
    title: "AI Governance",
    href: "/services/ai-governance",
    desc: "Risk frameworks, monitoring, and documentation for responsible AI in production."
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
      <p className="text-lg text-gray-700 mb-10">
        PrimeLogic helps you move from AI experimentation to durable, governed capabilities.
        We partner across strategy, architecture, implementation, and operations to create
        systems that are both impactful and maintainable.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="service-link-card card-hover">
            <img src={`/images/services/${s.icon}`} className="h-24 w-24 mx-auto mb-4" alt={s.title} />
              <div>
              <h2 className="font-semibold text-lg text-gray-900 mb-1">{s.title}</h2>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
            <div className="mt-4 text-sm text-brand font-semibold">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
