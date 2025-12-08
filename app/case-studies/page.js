export const metadata = { title: 'Case Studies - PrimeLogic' };

export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <article className="service-link-card card-hover">
          <h2 className="font-semibold text-lg text-gray-900">
            Document Ingestion Platform
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Converted large volumes of contracts and forms into structured data,
            reducing manual review time by over 60% and improving downstream data quality.
          </p>
        </article>
        <article className="service-link-card card-hover">
          <h2 className="font-semibold text-lg text-gray-900">
            LLM Knowledge Assistant
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Built a retrieval-augmented chatbot for policy and procedure lookup,
            enabling staff to self-serve answers in seconds instead of minutes.
          </p>
        </article>
      </div>
    </div>
  );
}
