export const metadata = { title: "Process Automation - PrimeLogic" };

export default function AutomationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        Process Automation
      </h1>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We build workflow automation solutions that combine AI reasoning with deterministic
        logic. This ensures your processes become faster, more consistent, and less dependent
        on manual intervention.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
        Automations can include routing, validations, document classification, decision
        scoring, notifications, and integrations with internal APIs or legacy systems.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
        Our goal is to reduce operational overhead while increasing accuracy and governance.
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
