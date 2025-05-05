"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    company_name: "",
    bottleneck: "",
  });
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadRecaptcha = () => {
      if (!window.grecaptcha) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.body.appendChild(script);
      }
    };
    loadRecaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.grecaptcha || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      setErrorMsg("reCAPTCHA not loaded properly");
      return;
    }

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "submit" }
    );

    if (!token) {
      setErrorMsg("reCAPTCHA verification failed");
      return;
    }

    const { error } = await supabase.from("leads").insert([
      {
        ...form,
        captcha_token: token,
      },
    ]);

    if (error) {
      console.error("Error submitting lead:", error.message);
      setErrorMsg("Submission failed. Please try again.");
    } else {
      setSuccess(true);
      setForm({ full_name: "", email: "", company_name: "", bottleneck: "" });
      setErrorMsg("");
    }
  };
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m Bikram 👋</h1>
      <p className="mb-6">
        I help small businesses grow using automation and AI — tell me
        what&apos;s holding your business back.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="company_name"
          value={form.company_name}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="bottleneck"
          value={form.bottleneck}
          onChange={handleChange}
          placeholder="What’s your biggest bottleneck?"
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Submit
        </button>

        {success && (
          <p className="text-green-600 mt-2">Thanks! I’ll reach out soon.</p>
        )}
        {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
      </form>
    </main>
  );
}
