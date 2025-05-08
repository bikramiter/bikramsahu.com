"use client";
import { useState } from "react";
import { isValidGBPUrl, isValidEmail } from "@/lib/validators";

export default function GBPAuditPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [gbpUrl, setGbpUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gbpUrlError, setGbpUrlError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleStartAuditClick = () => {
    setIsFormVisible(true);
  };

  const validateForm = (): boolean => {
    let isValid = true;
    if (!gbpUrl) {
      setGbpUrlError("GBP URL is required.");
      isValid = false;
    } else if (!isValidGBPUrl(gbpUrl)) {
      setGbpUrlError("Please enter a valid GBP URL.");
      isValid = false;
    } else {
      setGbpUrlError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/gbp-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gbpUrl, email }),
      });

      if (response.ok) {
        // Redirect to Gumroad checkout
        window.location.href = `https://bikram23.gumroad.com/l/lfvqm?wanted=true&email=${email}&gbpUrl=${gbpUrl}`;
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        📍 Boost Your Local Visibility with a GBP Audit
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Your Google Business Profile (GBP) is the first impression many
        customers get when they search for your business. A fully optimized GBP
        can dramatically increase your local traffic, customer inquiries, and
        trust. <b>This will lead to more business 💵!!!</b> But many businesses
        don&apos;t realize they&apos;re leaving money on the table by having an
        incomplete or misconfigured profile.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        If your GBP is incomplete, outdated, or unoptimized — you&apos;re
        leaving money on the table. Customers are searching right now for the
        services you offer. Make sure you show up and stand out.
      </p>

      <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">How This Audit Helps You</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Scan your current GBP for completeness and correctness</li>
          <li>Identify missing sections and outdated information</li>
          <li>Get a detailed, professional PDF report in your inbox</li>
          <li>
            Receive actionable recommendations to rank better and convert more
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-10">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          ✨ Make your GBP work <em>for</em> your business
        </h3>
        <p className="text-gray-700">
          For just $5.90 and in a few seconds, you&apos;ll get a clear,
          actionable audit that can help you get more customers — without
          running ads or doing complex SEO.
        </p>
      </div>

      {/* 🔍 Preview Sample Report */}
      <div className="text-center mb-10">
        <a
          href="/sample-gbp-audit.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-100 transition"
        >
          🔍 View Sample Audit Report (PDF)
        </a>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleStartAuditClick}
          className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow"
        >
          Start My Audit
        </button>
        <p className="text-sm text-gray-500 mt-2">
          You’ll be asked for your GBP link and email in the next step.
        </p>
      </div>

      {/* Hidden section that will be revealed */}
      {isFormVisible && (
        <div className="mt-8">
          <div className="mb-4">
            <label
              htmlFor="gbp-url"
              className="block text-lg font-medium text-gray-700"
            >
              Your GBP URL
              <a
                href="#gbp-help"
                className="ml-2 text-sm text-blue-600 hover:underline"
              >
                Help?
              </a>
            </label>

            <input
              type="url"
              id="gbp-url"
              value={gbpUrl}
              onChange={(e) => setGbpUrl(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              placeholder="Enter your GBP URL"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-red-500 text-sm mt-1">{gbpUrlError}</div>
          <div className="text-red-500 text-sm mt-1">{emailError}</div>

          <div className="text-center">
            <button
              onClick={handleCheckout}
              className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow"
            >
              Checkout
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-500 text-center">
            💬 <span className="font-medium">Instant delivery issue?</span> No
            worries — if you don’t receive your report, just email me at{" "}
            <a
              href="mailto:hi@bikramsahu.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              hi@bikramsahu.com
            </a>{" "}
            and I’ll send it manually within 24 hours.
          </p>
        </div>
      )}
      {/* Hint section for GBP URL */}
      <div id="gbp-help" className="mt-16 border-t pt-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          🆘 Where do I find my GBP URL?
        </h4>
        <p className="text-gray-700 mb-4">
          Visit your business profile on Google Maps and copy the URL from the
          address bar.
        </p>
        <img
          src="/gbp-url-help.jpg"
          alt="Example showing where to get GBP URL"
          className="w-full mx-auto rounded shadow"
        />
      </div>
    </div>
  );
}
