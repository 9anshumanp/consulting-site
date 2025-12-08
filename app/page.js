import Hero from './components/Hero';
import Link from 'next/link';

function ServiceCard({ title, icon, desc, href }) {
  return (
    <div className="service-link-card card-hover flex flex-col items-center text-center">
      <img
        src={icon}
        alt={title}
        className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mx-auto mb-4"
      />
      <h3 className="mt-1 text-base sm:text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-[15px] flex-1 px-1">
        {desc}
      </p>
      <div className="mt-4">
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

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Why teams work with PrimeLogic
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed max-w-3xl">
          We combine hands-on delivery experience with practical advisory, helping you make
          grounded decisions about AI adoption — especially in environments with strict risk
          and compliance expectations.
        </p>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="service-link-card card-hover bg-gradient-to-br from-indigo-50 to-sky-50">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Deep AI & Data Experience
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              15+ years working with data, analytics, and AI in financial services and
              other regulated industries — from proof-of-concept to production.
            </p>
          </div>
          <div className="service-link-card card-hover bg-gradient-to-br from-indigo-50 to-violet-50">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Agentic & Practical
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Focus on agentic workflows, document intelligence, and automation that
              remove real manual work, not just demonstrations.
            </p>
          </div>
          <div className="service-link-card card-hover bg-gradient-to-br from-indigo-50 to-slate-50">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Governance & Control Mindset
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Designed with model risk, auditability, and operational resilience in mind —
              so AI systems can stand up to real scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          AI & Automation Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
            desc="Pipelines, transformations, and data models powering analytics and AI."
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
