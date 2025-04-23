import UnderConstructionBanner from "@/components/UnderConstructionBanner";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <UnderConstructionBanner />
      <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
      <p className="mb-4 text-gray-700">
        Have a question or an idea? Let’s talk about how we can work together.
      </p>

      <form className="space-y-4">
        <input
          className="w-full border rounded p-2"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full border rounded p-2"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full border rounded p-2"
          placeholder="Your Message"
          rows={5}
        ></textarea>
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
