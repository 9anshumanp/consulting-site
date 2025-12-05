import Link from "next/link";

export default function Hero(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          AI & Automation Consulting for{" "}
          <span className="text-brand">Modern Organizations</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We help teams design scalable AI systems, automate workflows, and
          extract structured insights from complex documents.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/contact"
            className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm font-semibold"
          >
            Book a free consultation
          </Link>
          <Link
            href="/services"
            className="px-5 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:border-brand hover:text-brand"
          >
            View services
          </Link>
        </div>
      </div>
      <div>
        <img
          src="/images/hero.jpg"
          alt="AI & Automation"
          className="rounded-xl shadow-lg w-full"
        />
      </div>
    </section>
  )
}
