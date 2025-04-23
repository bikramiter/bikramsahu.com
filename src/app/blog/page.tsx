export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Blog: Finding Your First 100 Customers
      </h1>
      <p className="mb-6 text-gray-700">
        Here you'll find actionable guides and insights on how small businesses
        can find their first 100 customers using automation and AI.
      </p>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            🔍 Cold Outreach That Converts
          </h2>
          <p className="text-gray-600">
            Learn how to design automated outreach campaigns that actually get
            responses.
          </p>
        </div>
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold">
            🤖 AI Agents for Lead Qualification
          </h2>
          <p className="text-gray-600">
            How AI can help you identify the right prospects and nurture them
            automatically.
          </p>
        </div>
      </div>
    </div>
  );
}
