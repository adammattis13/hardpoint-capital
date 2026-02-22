import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
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
              <span className="text-white font-bold text-lg">
                Hardpoint Capital
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Working capital for businesses that can&apos;t wait. Fast funding,
              real partnership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-sm hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industries#healthcare" className="text-sm hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#professional-services" className="text-sm hover:text-white transition-colors">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/industries#b2b" className="text-sm hover:text-white transition-colors">
                  B2B Services
                </Link>
              </li>
              <li>
                <Link href="/industries#manufacturing" className="text-sm hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm">North Carolina</li>
              <li>
                <a
                  href="mailto:info@hardpointcapital.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@hardpointcapital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs leading-relaxed text-gray-500 max-w-4xl">
            Hardpoint Capital provides merchant cash advances and is not a
            lender. A merchant cash advance is a purchase of future receivables
            at a discount, not a loan. The funding provided is not a loan and
            should not be considered a loan. Terms, conditions, and amounts are
            subject to merchant qualifications. This is not an offer or
            solicitation for a loan. Products and services may not be available
            in all states.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Hardpoint Capital. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
