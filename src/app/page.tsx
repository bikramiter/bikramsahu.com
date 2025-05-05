"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Helping Small Businesses Grow with{" "}
          <span className="text-blue-600">Automation</span> &{" "}
          <span className="text-green-600">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Custom-built workflows, expert consultation, and growth-focused tools
          — designed by someone who understands your needs.
        </p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
            Get a Free Strategy Call
          </button>
        </Link>
      </section>

      {/* Placeholder Image */}
      <section className="mb-16">
        <Image
          src="/bikram-sahu.jpg"
          alt="Bikram Sahu Portrait"
          width={300}
          height={300}
          className="rounded-full shadow-xl object-cover"
        />
      </section>

      {/* Services Section */}
      <section className="w-full max-w-5xl text-center grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "Automation Setup",
            desc: "Streamline your operations using n8n, Zapier, and custom logic.",
          },
          {
            title: "AI Agent Building",
            desc: "Create intelligent tools to interact, recommend, or support your business.",
          },
          {
            title: "Custom Web Tools",
            desc: "From lead capture to internal dashboards — get what fits your flow.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-200 text-left"
          >
            <h3 className="text-lg font-bold text-blue-700 mb-2 tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to grow your business the smart way?
        </h2>
        <Link href="/contact">
          <button className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition">
            Let’s Talk
          </button>
        </Link>
      </section>
    </main>
  );
}
