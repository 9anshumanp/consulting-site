export const metadata = { title: 'Contact - PrimeLogic' };

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 mb-6">
        Tell us briefly about your project and we&apos;ll follow up within one
        business day.
      </p>
      <form method="POST" action="/api/contact" className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-brand-dark"
        >
          Send
        </button>
      </form>
    </div>
  );
}
