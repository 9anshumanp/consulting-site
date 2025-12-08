export const metadata = { title: "AI Architecture - PrimeLogic" };

export default function AIArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        AI Architecture & LLM Systems
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        We design modern AI architectures that integrate LLMs, embeddings, vector search,
        retrieval pipelines, and orchestration layers. Our focus is on scalability,
        reliability, and maintainability — ensuring your AI systems can evolve as models
        improve.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Architecture work includes model selection, prompt strategies, caching layers,
        containerization, vector database design, streaming ingestion patterns, security
        controls, and integration with existing enterprise systems.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        We ensure your stack is cloud-ready, vendor-agnostic where possible, and optimized
        for performance and cost.
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
