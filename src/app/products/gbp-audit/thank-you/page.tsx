export default function ThankYouPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        ✅ Thank You for Your Order!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Your <strong>Google Business Profile Audit</strong> is being prepared.
        You’ll receive your personalized PDF report via email shortly.
      </p>
      <p className="text-md text-gray-600 mb-6">
        Please check your inbox (and promotions/spam folders just in case).
        Delivery usually takes less than 10 minutes.
      </p>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm mt-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          💡 What’s Next?
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>
            Review the audit report to understand where improvements are needed
          </li>
          <li>Implement the recommendations to boost your visibility</li>
          <li>Watch for a follow-up email with next-step suggestions</li>
        </ul>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        If you have any questions, feel free to reply to the email or contact me
        at{" "}
        <a href="mailto:hi@bikramsahu.com" className="text-blue-600 underline">
          hi@bikramsahu.com
        </a>
        .
      </p>
    </div>
  );
}
