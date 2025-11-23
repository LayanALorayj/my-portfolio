"use client";

import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    turnstile: any;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (turnstileRef.current && window.turnstile) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
        callback: (token: string) => {
          setTurnstileToken(token);
        },
        "error-callback": () => {
          setTurnstileToken("");
          console.log("Turnstile error occurred");
        },
        "expired-callback": () => {
          setTurnstileToken("");
          console.log("Turnstile token expired");
        },
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the security verification.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch('/api/sendmassage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTurnstileToken("");
        
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.reset(turnstileRef.current);
        }
        
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

        <div className="flex justify-center">
          <div ref={turnstileRef} id="cf-turnstile-widget" />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || !turnstileToken}
          className={`w-full py-4 rounded-xl font-bold font-pixelify text-lg transition-all duration-300 ${
            status === "sending" || !turnstileToken
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