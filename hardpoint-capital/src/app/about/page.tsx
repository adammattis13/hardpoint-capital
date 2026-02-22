import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Hardpoint Capital was founded by Adam Mattis — a business advisor, consultant, and entrepreneur who brings an operator's perspective to business funding.",
};

const values = [
  {
    title: "Relationships Over Transactions",
    description:
      "We're not optimizing for volume. We're building a portfolio of businesses we genuinely understand and want to see succeed. That starts with treating every conversation like the beginning of a long-term relationship.",
  },
  {
    title: "Clarity Over Complexity",
    description:
      "The MCA industry has a transparency problem. We've seen competitors hide behind jargon and obscure terms. We do the opposite: clear language, honest numbers, and full disclosure before you sign anything.",
  },
  {
    title: "Sustainability Over Speed",
    description:
      "We could fund more businesses by being less careful. We choose not to. Every advance we structure is designed to be sustainable for the business receiving it, because stacking debt on a struggling company helps nobody.",
  },
  {
    title: "Expertise Over Algorithms",
    description:
      "We use technology to work efficiently, but funding decisions are made by people who understand business operations. Your application isn't just a score — it's a story we take time to read.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Built by an advisor.{" "}
              <span className="text-sand">Run like one.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Hardpoint Capital isn&apos;t a typical funding company. We come
              from the advisory world — and that perspective shapes everything
              we do.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Photo Placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-sand text-2xl font-bold">AM</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Professional headshot
                    <br />
                    coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-black">Adam Mattis</h2>
              <p className="text-sand-dark font-medium mt-1">
                Founder & Principal
              </p>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Before launching Hardpoint Capital, Adam spent years in
                  business advisory and enterprise consulting — working directly
                  with companies to solve operational challenges, improve
                  performance, and drive growth.
                </p>
                <p>
                  As the founder of Mattis &amp; Co, he built an advisory practice
                  focused on helping businesses make better decisions. At TSG
                  (The Select Group), he gained deep experience in enterprise
                  consulting and talent strategy. Through The Adam Mattis Show
                  podcast, he&apos;s had conversations with hundreds of business
                  leaders, founders, and operators.
                </p>
                <p>
                  That background shapes how Hardpoint Capital operates. When we
                  evaluate a business for funding, we don&apos;t just look at bank
                  statements and credit scores. We look at the operation — the
                  revenue model, the growth trajectory, the industry dynamics.
                  We think like advisors first and funders second.
                </p>
                <p>
                  Hardpoint Capital is headquartered in North Carolina and
                  serves businesses across the United States.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/adammattis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-black hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://theadammattisshow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-black hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  The Adam Mattis Show
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-16">
            How we operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-xl font-semibold text-black">
                  {value.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner / Referral CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black text-white rounded-2xl p-10 sm:p-12">
              <h3 className="text-2xl font-bold">For Business Owners</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Need working capital for your business? Find out what you
                qualify for in minutes — no hard credit pull, no obligation.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 bg-copper text-white font-semibold rounded-lg hover:bg-copper-dark transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 sm:p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-black">
                For Referral Partners
              </h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                CPAs, attorneys, bookkeepers, and business consultants — if your
                clients need working capital, let&apos;s talk about how we can
                work together.
              </p>
              <a
                href="mailto:partners@hardpointcapital.com"
                className="inline-flex items-center justify-center mt-6 px-6 py-3 border border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
