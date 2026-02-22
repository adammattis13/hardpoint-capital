"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 sm:w-6 sm:h-6"
                aria-hidden="true"
              >
                <path
                  d="M20 7L12 3L4 7V17L12 21L20 17V7Z"
                  stroke="#C4A265"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M8 10H16V16H8V10Z"
                  stroke="#C4A265"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path d="M10 10V8H14V10" stroke="#C4A265" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold text-black tracking-tight">
              Hardpoint Capital
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center px-5 py-2.5 bg-copper text-white text-sm font-semibold rounded-lg hover:bg-copper-dark transition-colors"
            >
              Get Funded
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-200"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/how-it-works"
              className="block text-base font-medium text-gray-600 hover:text-black py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/industries"
              className="block text-base font-medium text-gray-600 hover:text-black py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="block text-base font-medium text-gray-600 hover:text-black py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/apply"
              className="block w-full text-center px-5 py-3 bg-copper text-white text-base font-semibold rounded-lg hover:bg-copper-dark transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Funded
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
