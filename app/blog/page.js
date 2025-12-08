export const metadata = { title: 'Blog - PrimeLogic' };

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Insights</h1>
      <article className="service-link-card card-hover mb-4">
        <h2 className="font-semibold text-lg text-gray-900">
          Secure RAG pipelines — quick checklist
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          A practical outline for designing retrieval-augmented generation in
          regulated environments, including data access, logging, and evaluation.
        </p>
      </article>
    </div>
  );
}
