export const metadata = { title: "Chatbots & RAG - PrimeLogic" };

export default function ChatbotsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Chatbots & Retrieval-Augmented Generation
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        We build chat interfaces that let employees or customers interact with your knowledge directly.
        Using retrieval-augmented generation (RAG), chatbots can answer questions grounded in policies,
        documentation, FAQs, and historical data — with guardrails and logging built-in.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Use cases</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Internal helpdesk for operations, risk, and compliance teams</li>
        <li>Customer-facing FAQ and onboarding assistants</li>
        <li>Policy and procedure lookup for regulated functions</li>
        <li>Research assistants over internal reports and knowledge bases</li>
      </ul>
    </div>
  );
}
