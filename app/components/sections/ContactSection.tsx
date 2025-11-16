"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  return (
    <section
      id="contact"
      className="h-screen flex justify-center items-center text-center font-pixelify"
    >
      <div className="max-w-md w-full p-6 rounded-lg border border-graydeep bg-graydeep/50">
        <h2 className="text-4xl font-semibold mb-3 text-lavender">Contact</h2>
        <p className="text-rose mb-6">Feel free to send me a message</p>

        <form className="flex flex-col gap-4 text-left">
          <input
            className="p-3 rounded bg-blackdeep border border-graydeep focus:border-violet outline-none text-lavender placeholder-rose"
            placeholder="Your name"
          />

          <input
            className="p-3 rounded bg-blackdeep border border-graydeep focus:border-violet outline-none text-lavender placeholder-rose"
            placeholder="Your email"
          />

          <textarea
            rows={4}
            className="p-3 rounded bg-blackdeep border border-graydeep focus:border-violet outline-none resize-none text-lavender placeholder-rose"
            placeholder="Your message..."
          />

          <button className="bg-violet hover:bg-rose text-blackdeep font-medium py-2 rounded transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
