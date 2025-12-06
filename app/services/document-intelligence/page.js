export const metadata = { title: "Document Intelligence - PrimeLogic" };

export default function DocumentIntelligencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Document Intelligence & PDF to Structured Data
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Many critical processes still run on PDFs, scanned forms, and semi-structured documents.
        We design extraction pipelines that convert contracts, statements, applications, and reports
        into clean structured data that downstream systems can rely on.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Capabilities</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Table and key-value extraction from PDFs and scanned documents</li>
        <li>Template and template-free document parsing approaches</li>
        <li>Human-in-the-loop workflows for quality assurance</li>
        <li>Integration with data warehouses, CRMs, and case management tools</li>
      </ul>
    </div>
  );
}
