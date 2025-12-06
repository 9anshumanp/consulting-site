"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Build AI-Powered Systems That Deliver Real Business Value
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          PrimeLogic helps organizations unlock efficiency, automate workflows, streamline document-heavy
          processes, and deploy production-grade AI reliably. With experience across financial services and
          regulated industries, we design practical AI architectures, internal chat assistants, and document
          intelligence solutions that integrate cleanly with your existing data and systems.
        </p>
        <p className="mt-3 text-lg text-gray-600">
          Whether you are experimenting with generative AI or scaling an existing initiative, we focus on
          clear outcomes, governance, and measurable ROI rather than hype.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/contact"
            className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark text-sm font-semibold"
          >
            Contact us
          </Link>
          <Link
            href="/services"
            className="px-5 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:border-brand hover:text-brand"
          >
            View all services
          </Link>
        </div>
      </div>

      <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="AI consulting"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
