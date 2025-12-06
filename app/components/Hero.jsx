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
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Full-width abstract AI background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_bg.jpg"
          alt="AI abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE: Text */}
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight drop-shadow-sm">
            AI Strategy, Agentic Systems & Automation
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
            PrimeLogic partners with teams to define AI roadmaps, design production-grade
            architectures, and implement agentic and automated workflows across document-heavy,
            data-rich environments.
          </p>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed max-w-xl">
            From advisory and architecture to implementation and governance, we help you move
            from pilots to durable AI capabilities.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
            >
              View services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Slideshow */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl z-10">
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt="AI hero visual"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
