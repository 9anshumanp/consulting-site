export const metadata = { title: "Document Intelligence - PrimeLogic" };

export default function DocumentIntelligencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Document Intelligence & PDF to Structured Data
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        We help organizations transform PDFs, scanned documents, forms, and contracts into
        structured, action-ready data. Our solutions combine OCR, layout analysis, table
        extraction, entity detection, and custom post-processing to achieve high precision.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        From financial statements to legal agreements, we tailor extraction logic based on
        patterns in your documents and the accuracy thresholds your teams require.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Extracted data can be pushed into databases, workflows, or automated decisioning
        systems to streamline operations.
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
