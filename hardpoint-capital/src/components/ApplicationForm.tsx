"use client";

import { useState } from "react";

const industries = [
  "Healthcare / Medical Practice",
  "Professional Services",
  "B2B Services / Staffing",
  "Manufacturing / Distribution",
  "Food Service / Restaurant",
  "Construction / Contracting",
  "Retail",
  "Transportation / Logistics",
  "Other",
];

const revenueRanges = [
  "Under $15,000/month",
  "$15,000 - $30,000/month",
  "$30,000 - $50,000/month",
  "$50,000 - $100,000/month",
  "$100,000 - $250,000/month",
  "$250,000+/month",
];

const fundingAmounts = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "Not sure yet",
];

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 text-center">
        <div className="w-16 h-16 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-sand"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-black">
          Application received
        </h3>
        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          Thank you for your interest in Hardpoint Capital. A member of our team
          will review your information and reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-black mb-6">
          Your Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div>
        <h3 className="text-xl font-semibold text-black mb-6">
          Business Information
        </h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              placeholder="Your business name"
            />
          </div>
          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Industry *
            </label>
            <select
              id="industry"
              name="industry"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              defaultValue=""
            >
              <option value="" disabled>
                Select your industry
              </option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="monthlyRevenue"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Monthly Revenue *
              </label>
              <select
                id="monthlyRevenue"
                name="monthlyRevenue"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                defaultValue=""
              >
                <option value="" disabled>
                  Select range
                </option>
                {revenueRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="fundingAmount"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Funding Amount Needed *
              </label>
              <select
                id="fundingAmount"
                name="fundingAmount"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
                defaultValue=""
              >
                <option value="" disabled>
                  Select range
                </option>
                {fundingAmounts.map((amount) => (
                  <option key={amount} value={amount}>
                    {amount}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="timeInBusiness"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Time in Business *
            </label>
            <select
              id="timeInBusiness"
              name="timeInBusiness"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent"
              defaultValue=""
            >
              <option value="" disabled>
                How long have you been operating?
              </option>
              <option value="less-than-6">Less than 6 months</option>
              <option value="6-12">6 - 12 months</option>
              <option value="1-2">1 - 2 years</option>
              <option value="2-5">2 - 5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="useOfFunds"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              How will you use the funds?{" "}
              <span className="text-gray-400">(optional)</span>
            </label>
            <textarea
              id="useOfFunds"
              name="useOfFunds"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent resize-none"
              placeholder="Equipment, payroll, inventory, expansion, etc."
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-4 bg-copper text-white text-lg font-semibold rounded-lg hover:bg-copper-dark transition-colors cursor-pointer"
        >
          Submit Application
        </button>
        <p className="mt-3 text-xs text-gray-400">
          By submitting this form, you agree to be contacted by Hardpoint
          Capital regarding your funding inquiry. No hard credit pull will be
          performed at this stage.
        </p>
      </div>
    </form>
  );
}
