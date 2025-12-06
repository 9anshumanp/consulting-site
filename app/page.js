import Hero from './components/Hero';
import Link from 'next/link';

function Service({ title, icon, desc }) {
  return (
    <div className="p-6 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src={`/images/services/${icon}.png`}
        alt={title}
        className="h-12 w-12 mx-auto"
      />
      <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 text-center mt-2 text-sm">{desc}</p>
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
          <Service
            title="AI Architecture"
            icon="ai_architecture"
            desc="LLM pipelines, retrieval, vector DBs, model orchestration."
          />
          <Service
            title="Chatbots & RAG"
            icon="chatbot"
            desc="Internal helpdesk bots and knowledge retrieval systems."
          />
          <Service
            title="Document Intelligence"
            icon="pdf"
            desc="PDF → structured data, OCR, table and form extraction."
          />
          <Service
            title="Process Automation"
            icon="automation"
            desc="End-to-end workflow automation and task orchestration."
          />
          <Service
            title="Data Engineering"
            icon="data_engineering"
            desc="Pipelines, dashboards, and analytics-ready data stacks."
          />
          <Service
            title="AI Governance"
            icon="governance"
            desc="Model monitoring, risk controls, and responsible AI."
          />
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm font-semibold"
          >
            Explore all services
          </Link>
        </div>
      </section>
    </>
  );
}
