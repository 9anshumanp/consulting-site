'use client';
import Link from "next/link";

export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand">
          <img src="/images/logo.png" alt="PrimeLogic logo" className="h-8 w-auto" />
          <span>PrimeLogic</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/services" className="text-gray-700 hover:text-brand">Services</Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-brand">Case Studies</Link>
          <Link href="/blog" className="text-gray-700 hover:text-brand">Blog</Link>
          <Link href="/contact" className="px-4 py-2 rounded bg-brand text-white hover:bg-brand-dark">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
