    export const metadata = { title: "AI Architecture - PrimeLogic" };

    export default function AIArchitecturePage() {
      return (
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            AI Architecture & LLM Systems
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We design scalable AI and LLM architectures tailored to your business workflows — including
            retrieval pipelines, vector databases, embedding strategies, and production orchestration.
            Our solutions are built to be observable, maintainable, and aligned with your risk and
            compliance requirements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">What we deliver</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>End-to-end AI system blueprints (LLMs, retrieval, ranking, and routing)</li>
            <li>RAG and hybrid RAG-search architectures for internal or customer use</li>
            <li>Vector database schema design and performance tuning</li>
            <li>Model orchestration and evaluation pipelines</li>
            <li>Monitoring, observability, and governance patterns</li>
          </ul>
        </div>
      );
    }
 