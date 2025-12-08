export const metadata = { title: "AI Governance - PrimeLogic" };

export default function AIGovernancePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        AI Governance & Model Risk
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        We help organizations implement responsible AI practices that meet regulatory,
        ethical, and operational expectations. Governance ensures your models are safe,
        explainable, and monitored throughout their lifecycle.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Our work includes bias testing, model documentation, risk assessments, audit trails,
        performance monitoring, and controls that fit your industry’s compliance standards.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Strong governance reduces risk while enabling faster and more confident deployment of
        AI capabilities.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What this includes</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>AI use case inventory and risk classification</li>
        <li>Documentation templates for models and systems</li>
        <li>Monitoring for drift, performance, and misuse</li>
        <li>Processes for approvals, review, and change management</li>
      </ul>
    </div>
  );
}
