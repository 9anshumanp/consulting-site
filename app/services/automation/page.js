export const metadata = { title: "Process Automation - PrimeLogic" };

export default function AutomationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Process Automation
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        We help teams identify high-impact manual processes and design automation that is robust,
        observable, and safe. We focus on stitching together systems — not just building isolated bots.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Examples</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Automated intake, triage, and routing of requests</li>
        <li>Data quality checks and exception workflows</li>
        <li>Periodic reporting and reconciliation automation</li>
        <li>Decision flows combining business rules with AI judgment</li>
      </ul>
    </div>
  );
}
