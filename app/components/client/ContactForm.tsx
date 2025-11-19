"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "" 
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      console.log("🤖 Bot detected! Honeypot field is filled.");
      return; 
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
        
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage('Network error. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-md w-full p-8 rounded-2xl border-2 border-graydeep/50 bg-blackdeep/80 backdrop-blur-sm">
      <h2 className="text-4xl font-bold mb-3 text-lavender font-pixelify text-center">
        Contact Me
      </h2>
      <p className="text-rose mb-8 text-center font-pixelify">
        Let's work together!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="hidden border-2 border-red-500 p-4 bg-yellow-100" aria-hidden="true">
        <label htmlFor="honeypot" className="text-red-500 font-bold">
      just for not humen
        </label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="border border-red-500 p-2 w-full mt-2"
          placeholder="if you fill this email will not send"
        />
      </div>
        
        <div className="space-y-2">
          <label className="text-rose font-pixelify text-sm">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-graydeep/30 border-2 border-graydeep focus:border-violet outline-none text-lavender placeholder-rose transition-all duration-300"
            placeholder="Your name"
            required
            disabled={status === "sending"}
          />
        </div>

        <div className="space-y-2">
          <label className="text-rose font-pixelify text-sm">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-graydeep/30 border-2 border-graydeep focus:border-violet outline-none text-lavender placeholder-rose transition-all duration-300"
            placeholder="your@email.com"
            required
            disabled={status === "sending"}
          />
        </div>

        <div className="space-y-2">
          <label className="text-rose font-pixelify text-sm">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-graydeep/30 border-2 border-graydeep focus:border-violet outline-none resize-none text-lavender placeholder-rose transition-all duration-300"
            placeholder="Tell me about your project..."
            required
            disabled={status === "sending"}
          />
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full py-4 rounded-xl font-bold font-pixelify text-lg transition-all duration-300 ${
            status === "sending"
              ? "bg-graydeep text-rose cursor-not-allowed"
              : status === "sent"
              ? "bg-green-500 text-white"
              : "bg-gradient-to-r from-violet to-rose hover:from-violet/80 hover:to-rose/80 text-blackdeep hover:scale-105"
          }`}
        >
          {status === "sending" ? "Sending..." : 
           status === "sent" ? "Message Sent!" : 
           "Send Message"}
        </button>
      </form>
    </div>
  );
}