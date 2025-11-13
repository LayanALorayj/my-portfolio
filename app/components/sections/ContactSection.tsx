"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="h-screen flex justify-center items-center text-center"
    >
      <div className="max-w-md w-full p-6 rounded-lg border border-gray-800 bg-gray-800/50">
        <h2 className="text-4xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-400 mb-6">
          Feel free to send me a message below 👇
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows={4}
            className="p-3 rounded bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent "
              : status === "error"
              ? "Error "
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
