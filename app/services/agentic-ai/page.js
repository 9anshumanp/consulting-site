export const metadata = { title: "Agentic AI Systems - PrimeLogic" };

export default function AgenticAIPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Agentic AI Systems
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        Agentic systems go beyond chatbots — they can plan tasks, call tools, route decisions,
        and take multi-step actions autonomously. We design agentic workflows tailored to your
        business processes, ensuring they are reliable, auditable, and safely constrained.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Our approach emphasizes robustness: clear guardrails, deterministic fallbacks, event
        logging, and monitoring. Whether it’s document processing, customer service triage,
        portfolio analysis, or operations automation, agents dramatically reduce manual
        workload while preserving control.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        We integrate agents with internal APIs, knowledge bases, and existing automation
        systems — extending your organization’s capabilities without disrupting established
        processes.
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
