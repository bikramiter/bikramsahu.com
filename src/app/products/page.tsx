import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products & Services</h1>

      <div className="space-y-8">
        {/* GBP Audit Tool */}
        <div className="border rounded-xl p-6 shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">📍 GBP Audit Tool</h2>
          <p className="text-gray-700 mb-4">
            Get a personalized Google Business Profile audit sent to your email
            as a PDF. Ideal for small business owners.
          </p>
          <Link
            href="/products/gbp-audit"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Start Audit
          </Link>
        </div>

        {/* Other Product */}
      </div>
    </div>
  );
}
