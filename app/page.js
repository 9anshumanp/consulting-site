import Hero from './components/Hero';
import Link from 'next/link';

function ServiceCard({ title, icon, desc, href }) {
  return (
    <div className="p-6 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
      <img
        src={icon}
        alt={title}
        className="h-12 w-12 mx-auto mb-3"
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
          Core Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ServiceCard
            title="AI Architecture"
            icon="/images/services/ai_architecture.png"
            href="/services/ai-architecture"
            desc="LLM systems, retrieval pipelines, vector search, and scalable AI foundations."
          />
          <ServiceCard
            title="Chatbots & RAG"
            icon="/images/services/chatbot.png"
            href="/services/chatbots"
            desc="Internal and external chat assistants grounded in your knowledge and data."
          />
          <ServiceCard
            title="Document Intelligence"
            icon="/images/services/pdf.png"
            href="/services/document-intelligence"
            desc="PDF and document ingestion into clean structured data, at scale."
          />
          <ServiceCard
            title="Process Automation"
            icon="/images/services/automation.png"
            href="/services/automation"
            desc="Automate repetitive processes end-to-end to save time and reduce errors."
          />
          <ServiceCard
            title="Data Engineering"
            icon="/images/services/data_engineering.png"
            href="/services/data-engineering"
            desc="Modern data pipelines, transformation, and analytics-ready data models."
          />
          <ServiceCard
            title="AI Governance"
            icon="/images/services/governance.png"
            href="/services/ai-governance"
            desc="Controls, monitoring, and documentation for safe and compliant AI use."
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
