import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how merchant cash advances work at Hardpoint Capital. Simple application, fast approval, funding in as little as 24 hours.",
};

const timeline = [
  {
    step: "1",
    title: "Submit Your Application",
    description:
      "Complete our short online form with basic information about your business: name, industry, monthly revenue, and funding amount needed. This takes about 5 minutes and does not require a hard credit pull.",
    detail:
      "We keep the initial application simple on purpose. We need enough to understand your business, not a mountain of paperwork.",
  },
  {
    step: "2",
    title: "Document Review",
    description:
      "We'll ask for 3-4 months of recent bank statements. That's typically all we need to evaluate your business. Our team reviews your revenue patterns, cash flow consistency, and overall business health.",
    detail:
      "Unlike traditional lenders, we focus on your business revenue — not your personal credit score or years of tax returns.",
  },
  {
    step: "3",
    title: "Receive Your Offer",
    description:
      "Within hours (not weeks), you'll receive a clear, transparent offer outlining the advance amount, factor rate, total cost, and daily remittance amount. No hidden fees, no confusing terms.",
    detail:
      "We walk through every number with you. If something doesn't make sense, ask — we'd rather explain it twice than have you sign something you don't understand.",
  },
  {
    step: "4",
    title: "Get Funded",
    description:
      "Once you accept, funds are deposited directly into your business bank account. Many of our clients receive funding within 24 hours of approval.",
    detail:
      "The funds are yours to use however your business needs — equipment, inventory, payroll, expansion, marketing, or bridging a gap.",
  },
  {
    step: "5",
    title: "Simple Daily Remittance",
    description:
      "A small, fixed percentage of your daily revenue is automatically remitted. When business is good, the advance gets repaid faster. When it's slower, the daily amount stays manageable.",
    detail:
      "This isn't a monthly lump sum that could strain your cash flow. It's designed to flex with your business.",
  },
];

const faqs = [
  {
    question: "What is a merchant cash advance?",
    answer:
      "A merchant cash advance (MCA) is not a loan. It's a purchase of a portion of your future business revenue at a discount. Hardpoint Capital provides you with a lump sum of working capital, and in return, a small percentage of your daily revenue is automatically remitted until the advance is fully repaid.",
  },
  {
    question: "How is this different from a bank loan?",
    answer:
      "Traditional bank loans typically require extensive documentation, strong personal credit, collateral, and 60-90 days to process. An MCA is based primarily on your business revenue, requires minimal paperwork, and can fund in as little as 24 hours. MCAs use a factor rate rather than an interest rate, and remittance is tied to your daily revenue rather than a fixed monthly payment.",
  },
  {
    question: "What is a factor rate?",
    answer:
      "A factor rate is a decimal number (typically between 1.1 and 1.5) that determines the total cost of the advance. For example, if you receive a $100,000 advance at a factor rate of 1.3, the total amount to be repaid is $130,000. Unlike interest rates, factor rates don't compound — the total cost is fixed from day one.",
  },
  {
    question: "How much can I qualify for?",
    answer:
      "Funding amounts typically range from $10,000 to $500,000, based on your monthly business revenue. Most businesses qualify for an advance equal to 1-1.5x their average monthly revenue. We'll work with you to determine an amount that makes sense for your business without creating undue strain.",
  },
  {
    question: "What do I need to qualify?",
    answer:
      "The core requirements are straightforward: your business should have been operating for at least 6 months, generate a minimum of approximately $15,000 in monthly revenue, and have an active business bank account. We'll review your bank statements to assess revenue consistency.",
  },
  {
    question: "How long does the process take?",
    answer:
      "From application to funding, the entire process can take as little as 24-48 hours. The application itself takes about 5 minutes. Document review and offer generation typically happen the same business day. Funding is usually deposited the next business day after acceptance.",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              From application to funding.{" "}
              <span className="text-sand">No mystery.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              We believe you should understand exactly how the process works
              before you start it. Here&apos;s what to expect when you work with
              Hardpoint Capital.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {timeline.map((item) => (
              <div key={item.step} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black text-sand rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                  <p className="mt-3 text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  <p className="mt-3 text-gray-400 text-sm italic">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Ready to get started?
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            The application takes about 5 minutes. No hard credit pull.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center mt-6 px-8 py-4 bg-copper text-white text-lg font-semibold rounded-lg hover:bg-copper-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-16">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
