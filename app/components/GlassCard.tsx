"use client";

import { useState } from "react";

interface GlassCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function GlassCard({ title, description, imageSrc }: GlassCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full max-w-4xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative flex flex-col md:flex-row items-center gap-6 p-8 md:p-10 rounded-[--radius-card] glass overflow-hidden transition-all duration-500`}
        style={{
          boxShadow: hover
            ? "0 0 0 2px rgba(129,140,248,0.8), 0 0 0 4px rgba(129,140,248,0.4), 0 0 0 6px rgba(129,140,248,0.2)"
            : "0 0 0 1px rgba(129,140,248,0.3)",
          border: "1px solid rgba(129,140,248,0.2)",
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex-1 text-left flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-[--color-lavender] mb-4 leading-tight font-pixelify">
            {title}
          </h1>
          <p className="text-[--color-secondary] text-lg leading-relaxed word-spacing-wide font-Roboto Mono">
            {description}
          </p>
        </div>

        <div className="shrink-0">
          <div className="hidden md:block image-content relative">
            <div className="absolute inset-0 -z-10">
              <div 
                className="absolute bg-white/25 blur-xl rounded-full"
                style={{
                  width: 'calc(100% + 50px)',
                  height: 'calc(100% + 50px)',
                  top: '-25px',
                  left: '-25px',
                }}
              ></div>
              <div 
                className="absolute bg-white/10 blur-lg rounded-full"
                style={{
                  width: 'calc(50% + 10px)',
                  height: 'calc(50% + 10px)',
                  top: '-1px',
                  left: '-1px',
                }}
              ></div>
            </div>
            
            <img
              src={imageSrc}
              alt={title}
              className="w-64 md:w-80 rounded-[--radius-card] object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}