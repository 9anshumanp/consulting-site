'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-12 h-24">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="PrimeLogic logo" className="h-16 w-auto" />
        </Link>
        <div className="flex gap-10 text-base font-medium">
          <Link href="/services" className="hover:text-brand">Services</Link>
          <Link href="/case-studies" className="hover:text-brand">Case Studies</Link>
          <Link href="/blog" className="hover:text-brand">Blog</Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded bg-brand text-white hover:bg-brand-dark"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
