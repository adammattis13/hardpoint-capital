import Link from "next/link";

const stats = [
  { value: "24hrs", label: "Funding as fast as" },
  { value: "$5M+", label: "Funding capacity" },
  { value: "90%", label: "Approval rate" },
  { value: "500+", label: "Businesses served" },
];

const steps = [
  {
    number: "01",
    title: "Apply in Minutes",
    description:
      "Fill out a simple application with basic business details. No hard credit pull, no lengthy paperwork.",
  },
  {
    number: "02",
    title: "Get a Custom Offer",
    description:
      "We review your business revenue — not just your credit score — and present clear, transparent terms within hours.",
  },
  {
    number: "03",
    title: "Receive Your Funding",
    description:
      "Accept your offer and receive working capital deposited directly into your business account, often within 24 hours.",
  },
  {
    number: "04",
    title: "Grow With Confidence",
    description:
      "Remittance is automatic and tied to your revenue. As your business grows, we grow with you.",
  },
];

const industries = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    title: "Healthcare",
    description:
      "Dental practices, veterinary clinics, specialty medical offices — fund equipment, expansion, or bridge insurance reimbursement gaps.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
    title: "Professional Services",
    description:
      "Law firms, accounting practices, IT consultancies — cover payroll during growth, invest in talent, or manage seasonal revenue swings.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "B2B Services",
    description:
      "Staffing companies, logistics firms, commercial contractors — bridge the gap between invoicing and payment on large contracts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Manufacturing",
    description:
      "Light manufacturing and distribution operations — finance raw materials, equipment upgrades, or inventory for large orders.",
  },
];

const differentiators = [
  {
    title: "Advisor First, Funder Second",
    description:
      "Our founder comes from business advisory, not Wall Street. We look at your business the way a consultant would — understanding your operations, not just your bank statements.",
  },
  {
    title: "Revenue-Based, Not Credit-Based",
    description:
      "We underwrite based on your business revenue, not your personal credit score. If your business is generating consistent revenue, you likely qualify.",
  },
  {
    title: "No Stacking, No Traps",
    description:
      "We don't pile multiple advances on top of each other. We structure funding that your business can actually sustain, because a partner who hurts you isn't a partner.",
  },
  {
    title: "Transparent Terms, Always",
    description:
      "You'll know exactly what the advance costs, how remittance works, and what to expect — before you sign anything. No hidden fees, no surprises.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Working capital for businesses that can&apos;t wait{" "}
              <span className="text-sand">90 days.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Hardpoint Capital provides fast, flexible funding to small and
              mid-sized businesses. We look at your revenue, not just your
              credit score. From application to funding in as little as 24
              hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-lg hover:bg-copper-dark transition-colors"
              >
                See If You Qualify
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white text-lg font-medium rounded-lg hover:border-white transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-gray-50 py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-black">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From application to funding in four straightforward steps. No
              runaround, no mystery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-gray-100">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="text-copper font-semibold hover:text-copper-dark transition-colors"
            >
              Learn more about our process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Industries we serve
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We specialize in businesses generating $250K&ndash;$5M in annual
              revenue across industries underserved by traditional banks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-sand transition-colors"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-sand mb-5">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {industry.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/industries"
              className="text-copper font-semibold hover:text-copper-dark transition-colors"
            >
              See all industries we serve &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                We fund businesses.
                <br />
                <span className="text-sand">Not credit scores.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Most alternative lenders are algorithms wearing a website.
                Hardpoint Capital is different. We come from business advisory —
                we understand operations, cash flow cycles, and what it takes to
                grow. That perspective shapes every funding decision we make.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-copper font-semibold hover:text-copper-dark transition-colors"
              >
                Meet our team &rarr;
              </Link>
            </div>
            <div className="space-y-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-sand pl-6 py-2"
                >
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="bg-black text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Trusted by business owners
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              We&apos;re building a track record one relationship at a time.
              Client stories coming soon.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-xl p-8 border border-white/10"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-sand"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-sm leading-relaxed">
                    &ldquo;Your success story could be here. We&apos;re looking
                    for our first partners to grow with.&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-gray-500">
                    &mdash; Future Client
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-10 sm:p-16 text-center border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Ready to move forward?
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Find out how much working capital your business qualifies for. No
              hard credit pull, no obligation. Takes less than 5 minutes.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center mt-8 px-10 py-4 bg-copper text-white text-lg font-semibold rounded-lg hover:bg-copper-dark transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
