import Hero from './components/Hero';
import Link from 'next/link';

function ServiceCard({ title, icon, desc, href }) {
  return (
    <div className="p-6 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
      <img
        src={icon}
        alt={title}
        className="h-20 w-20 mx-auto mb-4"
      />
      <h3 className="mt-1 text-lg font-semibold text-center text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 text-center mt-2 text-sm flex-1">{desc}</p>
      <div className="mt-4 text-center">
        <Link href={href} className="text-brand hover:text-brand-dark text-sm font-semibold">
          Learn more →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          AI & Automation Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard
            title="AI Strategy & Advisory"
            icon="/images/services/ai_advisory.png"
            href="/services/ai-advisory"
            desc="Roadmaps, AI maturity assessment, and business case definition aligned to your context."
          />
          <ServiceCard
            title="Agentic AI Systems"
            icon="/images/services/agentic_ai.png"
            href="/services/agentic-ai"
            desc="Multi-step agents, tool-use workflows, and orchestration for complex processes."
          />
          <ServiceCard
            title="AI Architecture"
            icon="/images/services/ai_architecture.png"
            href="/services/ai-architecture"
            desc="LLM stacks, retrieval, vector search, and observability for production AI systems."
          />
          <ServiceCard
            title="Chatbots & RAG"
            icon="/images/services/chatbot.png"
            href="/services/chatbots"
            desc="Internal and customer-facing assistants grounded in your documentation and data."
          />
          <ServiceCard
            title="Document Intelligence"
            icon="/images/services/pdf.png"
            href="/services/document-intelligence"
            desc="PDFs, forms, and contracts into structured data with quality controls built-in."
          />
          <ServiceCard
            title="Process Automation"
            icon="/images/services/automation.png"
            href="/services/automation"
            desc="Workflow automation and decision flows that reduce manual effort and errors."
          />
          <ServiceCard
            title="Data Engineering"
            icon="/images/services/data_engineering.png"
            href="/services/data-engineering"
            desc="Pipelines, transformations, and models that feed both analytics and AI."
          />
          <ServiceCard
            title="AI Governance"
            icon="/images/services/governance.png"
            href="/services/ai-governance"
            desc="Model risk, monitoring, controls, and documentation for responsible AI use."
          />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm font-semibold"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
