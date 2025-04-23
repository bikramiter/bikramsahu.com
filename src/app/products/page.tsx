export default function ProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products & Services</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">
            🧠 AI-Powered Customer Finder
          </h2>
          <p className="text-gray-700">
            A tailored AI agent that finds, filters, and engages potential
            customers for your business.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            🔁 Workflow Automation Toolkit
          </h2>
          <p className="text-gray-700">
            Done-for-you Zapier/n8n automations to handle repetitive tasks, save
            time, and improve efficiency.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            🧩 Custom Software Development
          </h2>
          <p className="text-gray-700">
            I build scalable software solutions that solve real business
            problems — fast.
          </p>
        </div>
      </div>
    </div>
  );
}
