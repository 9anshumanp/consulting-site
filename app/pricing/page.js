export const metadata = { title: "Pricing & Engagements - PrimeLogic" };

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Pricing & Engagement Models
      </h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
        Every client has different constraints, but most engagements fall into a few common
        patterns. We favour transparent scopes, clear deliverables, and collaborative ways
        of working with your teams.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="service-link-card card-hover">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Advisory Retainer
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Ongoing strategy and architecture support — ideal for organizations who need a
            trusted AI advisor embedded alongside leadership, technology, and risk teams.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
            <li>Monthly or quarterly engagement</li>
            <li>Workshops, reviews, and roadmap updates</li>
            <li>Support for vendor and platform decisions</li>
          </ul>
        </div>

        <div className="service-link-card card-hover">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Prototype / POC Build
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Focused projects to prove value on a specific use case — such as a RAG chatbot,
            document extraction pipeline, or decisioning agent.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
            <li>Clearly scoped 4–8 week projects</li>
            <li>Working prototype in your environment where possible</li>
            <li>Guidance on next steps toward production</li>
          </ul>
        </div>

        <div className="service-link-card card-hover">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Production Deployment
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            End-to-end implementation of AI systems into production, including architecture,
            integration, monitoring, and governance alignment.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
            <li>Milestone-based delivery</li>
            <li>Work alongside your engineering and risk teams</li>
            <li>Documentation and handover to internal owners</li>
          </ul>
        </div>

        <div className="service-link-card card-hover">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Ongoing Support
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Continued support for AI systems post-launch — covering model updates, pipeline
            maintenance, and incremental enhancements.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 space-y-1">
            <li>Monthly support retainers</li>
            <li>Monitoring, tuning, and small feature changes</li>
            <li>Optional SLAs for critical workloads</li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Exact pricing depends on scope, complexity, and timelines. For an estimate or to
        discuss a specific project, please{" "}
        <a href="/contact" className="text-brand hover:text-brand-dark font-semibold">
          contact us
        </a>.
      </p>
    </div>
  );
}
