export const metadata = { title: "Chatbots & RAG - PrimeLogic" };

export default function ChatbotsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        Chatbots & Retrieval-Augmented Generation
      </h1>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We build domain-specific conversational systems backed by Retrieval-Augmented
        Generation (RAG). This allows your chatbot to respond based on your internal
        documentation, policies, emails, PDFs, and knowledge bases — with higher accuracy
        than generic models.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
        Our RAG solutions include data ingestion pipelines, embedding optimization, chunking
        strategies, vector search tuning, context re-ranking, and guardrails to ensure the
        chatbot remains factual and aligned with your policies.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
        Chat interfaces can be deployed across web, mobile, internal tools, or as APIs
        integrated into your workflows.
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
