"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            AI Strategy, Agentic Systems & Automation
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
            PrimeLogic helps teams plan, build, and scale AI responsibly — from advisory to 
            architecture, implementation, and governance.
          </p>

          <p className="mt-3 text-lg text-gray-700 leading-relaxed max-w-xl">
            We specialize in agentic workflows, RAG platforms, document intelligence, and AI-driven automation.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
            >
              Contact us
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 border border-gray-400 rounded-lg font-semibold text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
            >
              View services
            </Link>
          </div>
        </div>

        {/* RIGHT — enhanced slideshow */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl">
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`
                absolute inset-0 w-full h-full object-cover transition-all duration-[1300ms] ease-[cubic-bezier(.4,0,.2,1)]
                ${i === index 
                  ? "opacity-100 scale-100 translate-x-0 blur-0" 
                  : "opacity-0 scale-105 translate-x-4 blur-sm"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
