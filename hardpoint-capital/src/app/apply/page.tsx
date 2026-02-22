import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for Funding",
  description:
    "Apply for working capital from Hardpoint Capital. Quick application, no hard credit pull, funding in as little as 24 hours.",
};

export default function Apply() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Let&apos;s get your business{" "}
              <span className="text-sand">funded.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Fill out the form below to start your pre-qualification. This
              takes about 5 minutes and does not affect your credit score.
              We&apos;ll be in touch within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <ApplicationForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="font-semibold text-black text-lg mb-4">
                    What to expect
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sand text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">
                          Submit your info
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Takes about 5 minutes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sand text-xs font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">
                          We review &amp; reach out
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Usually within hours
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sand text-xs font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">
                          Get your offer
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Clear terms, no surprises
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sand text-xs font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">
                          Receive funding
                        </p>
                        <p className="text-sm text-gray-500 mt-0.5">
                          As fast as 24 hours
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="font-semibold text-black text-lg mb-3">
                    No hard credit pull
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Submitting this form will not affect your credit score. We
                    use a soft inquiry for pre-qualification. A full review only
                    happens after you agree to move forward.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="font-semibold text-black text-lg mb-3">
                    Questions?
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Prefer to talk to a person? Reach us directly at{" "}
                    <a
                      href="mailto:info@hardpointcapital.com"
                      className="text-copper hover:text-copper-dark font-medium"
                    >
                      info@hardpointcapital.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
