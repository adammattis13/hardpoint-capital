import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Hardpoint Capital terms of service.",
};

export default function Terms() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Last Updated:</strong> February 2026
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            the Hardpoint Capital website. By accessing or using our website,
            you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            Nature of Services
          </h2>
          <p>
            Hardpoint Capital provides merchant cash advances. A merchant cash
            advance is a purchase of future receivables at a discount and is
            not a loan. The information on this website is for general
            informational purposes and does not constitute an offer or
            solicitation for a loan.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            No Guarantee of Funding
          </h2>
          <p>
            Submitting an application through our website does not guarantee
            approval or funding. All applications are subject to review and
            approval based on our underwriting criteria. Terms, conditions,
            and funding amounts vary based on individual business
            qualifications.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            Website Use
          </h2>
          <p>
            You agree to use this website only for lawful purposes and in
            accordance with these Terms. You agree not to submit false or
            misleading information through any forms on this website.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            Limitation of Liability
          </h2>
          <p>
            Hardpoint Capital shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising
            out of your use of this website or our services.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            Contact Us
          </h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:info@hardpointcapital.com"
              className="text-copper hover:text-copper-dark"
            >
              info@hardpointcapital.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
