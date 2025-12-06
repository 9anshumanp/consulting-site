export const metadata = { title: "Agentic AI Systems - PrimeLogic" };

export default function AgenticAIPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Agentic AI Systems
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        We design agentic systems where AI can plan, call tools, and coordinate across multiple
        steps — going beyond single-turn prompts. These agents orchestrate workflows across APIs,
        internal systems, and human review where needed.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Typical patterns</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Agents that read, enrich, and file documents or tickets</li>
        <li>Multi-step research and synthesis flows over knowledge bases</li>
        <li>Decisioning agents that combine rules, scores, and model outputs</li>
        <li>Tool-using agents that interact with CRMs, data warehouses, or SaaS tools</li>
      </ul>
    </div>
  );
}
