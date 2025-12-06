    export const metadata = { title: "Data Engineering - PrimeLogic" };

    export default function DataEngineeringPage() {
      return (
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Data Engineering & Analytics Foundations
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Great AI systems rely on high-quality, well-modeled data. We help modernize data pipelines,
            design analytics-ready models, and ensure your AI projects are built on reliable foundations.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Focus areas</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Batch and streaming data pipelines</li>
            <li>Data modeling for analytics and AI consumption</li>
            <li>Monitoring data quality and freshness</li>
            <li>Integrating third-party SaaS and internal data sources</li>
          </ul>
        </div>
      );
    }
 