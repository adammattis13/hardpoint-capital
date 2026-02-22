import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Hardpoint Capital privacy policy.",
};

export default function Privacy() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p>
            <strong className="text-black">Last Updated:</strong> February 2026
          </p>
          <p>
            Hardpoint Capital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting the privacy of
            visitors to our website and individuals who submit applications for
            funding. This Privacy Policy describes how we collect, use, and
            share information.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, including your
            name, email address, phone number, business name, industry,
            revenue information, and funding needs when you submit an
            application or contact us.
          </p>
          <p>
            We also automatically collect certain information when you visit
            our website, including your IP address, browser type, operating
            system, referring URLs, and information about how you interact
            with our site.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and evaluate your funding application</li>
            <li>Communicate with you about our products and services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and unauthorized transactions</li>
          </ul>

          <h2 className="text-xl font-semibold text-black mt-8">
            Information Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with service providers who assist us in operating our
            business, funding partners who may participate in providing your
            advance, and as required by law.
          </p>

          <h2 className="text-xl font-semibold text-black mt-8">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at{" "}
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
