export const metadata = { title: "Data Engineering - PrimeLogic" };

export default function DataEngineeringPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        Data Engineering & Analytics Foundations
      </h1>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We design and implement data pipelines, transformations, and analytics layers that
        support both traditional BI and modern AI use cases. Our solutions ensure your data
        is reliable, well-modeled, and efficiently processed.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
        This includes ingestion, ETL/ELT, cleaning, enrichment, modeling, orchestration,
        versioning, and performance optimization across cloud platforms.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
        High-quality data engineering is the foundation that makes AI and automation
        trustworthy and scalable.
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
