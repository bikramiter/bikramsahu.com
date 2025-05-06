export default function GBPAuditPage() {
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
        don’t realize they’re leaving money on the table by having an incomplete
        or misconfigured profile.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        If your GBP is incomplete, outdated, or unoptimized — you're leaving
        money on the table. Customers are searching right now for the services
        you offer. Make sure you show up and stand out.
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
          For just $5.90 and in a few seconds, you'll get a clear, actionable
          audit that can help you get more customers — without running ads or
          doing complex SEO.
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
        <button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow">
          Start My Audit (coming soon)
        </button>
        <p className="text-sm text-gray-500 mt-2">
          You’ll be asked for your GBP link and email in the next step.
        </p>
      </div>
    </div>
  );
}
