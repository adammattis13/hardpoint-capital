import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Hardpoint Capital provides working capital to healthcare practices, professional services, B2B companies, manufacturing, and food service operations.",
};

const industries = [
  {
    id: "healthcare",
    title: "Healthcare Practices",
    subtitle: "Dental, veterinary, specialty clinics, and medical offices",
    description:
      "Healthcare practices often face a frustrating gap: strong patient volume and revenue, but slow insurance reimbursements and expensive equipment needs. Traditional bank financing can take months and require collateral that practice owners shouldn't have to risk.",
    painPoints: [
      "Insurance reimbursement delays creating 30-90 day cash flow gaps",
      "Expensive equipment purchases or upgrades needed to stay competitive",
      "Office expansion or renovation costs",
      "Staff hiring and training during growth periods",
      "Marketing investments to fill new appointment capacity",
    ],
    howWeHelp:
      "We provide working capital based on your practice's revenue, not your personal credit. Whether you're bridging an insurance gap, financing a new operatory, or hiring ahead of demand, Hardpoint Capital moves at the speed your practice needs.",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    subtitle: "Law firms, accounting practices, IT consultancies, engineering firms",
    description:
      "Professional service firms are talent-driven businesses. Your biggest expense is your people, and your biggest growth constraint is often cash flow timing. Client payments arrive on net-30 or net-60 terms, but payroll happens every two weeks.",
    painPoints: [
      "Payroll coverage during revenue growth phases",
      "Technology and software investments",
      "Office space expansion or relocation",
      "Marketing and business development spending",
      "Bridge funding between large project completions",
    ],
    howWeHelp:
      "We understand the professional services model — recurring relationships, project-based revenue, and the constant pressure to invest in talent ahead of the revenue that talent will generate. Our funding is structured to support that growth cycle.",
  },
  {
    id: "b2b",
    title: "B2B Service Companies",
    subtitle: "Staffing agencies, logistics, commercial contractors, managed services",
    description:
      "B2B companies often sit on strong contract revenue but face significant timing gaps between service delivery and payment. You've done the work, but you won't see the money for 30, 60, or even 90 days. Meanwhile, your costs are immediate.",
    painPoints: [
      "Invoice-to-payment gaps on large contracts",
      "Working capital for new contract ramp-up",
      "Equipment and fleet maintenance or expansion",
      "Seasonal demand fluctuations",
      "Bonding or insurance requirements tying up cash",
    ],
    howWeHelp:
      "We look at your contracted revenue and payment history to structure an advance that bridges the gap between doing the work and getting paid. No waiting 90 days for a bank to evaluate your application while the opportunity passes.",
  },
  {
    id: "manufacturing",
    title: "Light Manufacturing & Distribution",
    subtitle: "Production facilities, distribution companies, wholesale operations",
    description:
      "Manufacturing businesses need capital for raw materials, equipment, and inventory — often before the purchase order is fulfilled and paid. Traditional lenders see manufacturing as risky. We see it as a business with clear, measurable revenue cycles.",
    painPoints: [
      "Raw material purchases for large orders",
      "Equipment maintenance, repair, or replacement",
      "Inventory stocking for seasonal demand",
      "Facility upgrades or expansion",
      "Cash flow gaps during production cycles",
    ],
    howWeHelp:
      "We fund based on your revenue trajectory, not your equipment appraisals. If you have consistent sales and a clear production model, we can provide the capital you need to take on that next big order or keep production running smoothly.",
  },
  {
    id: "food-service",
    title: "Food Service Operations",
    subtitle: "Established restaurants, catering companies, food production",
    description:
      "Food service is a high-volume, tight-margin business where cash flow timing is everything. A successful restaurant might be turning tables every night but still struggle to cover a kitchen renovation or carry costs through a slow season.",
    painPoints: [
      "Kitchen equipment replacement or upgrades",
      "Seasonal revenue fluctuations",
      "Location renovations or new buildouts",
      "Inventory management for catering operations",
      "Marketing campaigns for new menu launches or locations",
    ],
    howWeHelp:
      "We work with established food service businesses that have proven revenue. If your daily sales are strong and consistent, we can provide working capital that's remitted as a small percentage of those daily sales — designed to flex with your business volume.",
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              We know your industry.{" "}
              <span className="text-sand">Not just your numbers.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Every industry has unique cash flow patterns, growth challenges,
              and capital needs. We take the time to understand yours so we can
              structure funding that actually fits.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry) => (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24"
              >
                <div className="border-l-4 border-sand pl-6">
                  <h2 className="text-3xl font-bold text-black">
                    {industry.title}
                  </h2>
                  <p className="text-sand-dark font-medium mt-1">
                    {industry.subtitle}
                  </p>
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  {industry.description}
                </p>
                <div className="mt-8 bg-gray-50 rounded-xl p-8">
                  <h3 className="font-semibold text-black mb-4">
                    Common capital needs:
                  </h3>
                  <ul className="space-y-3">
                    {industry.painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-sand flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {industry.howWeHelp}
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center mt-6 text-copper font-semibold hover:text-copper-dark transition-colors"
                >
                  Apply for {industry.title.split(" ")[0]} funding &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            We work with businesses across many sectors. If your company
            generates consistent revenue, we likely have a solution for you.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-copper text-white text-lg font-semibold rounded-lg hover:bg-copper-dark transition-colors"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </>
  );
}
