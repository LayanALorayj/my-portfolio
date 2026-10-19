"use client";

import { useState } from "react";

type SkillCardProps = {
  skill: { name: string; level?: number };
  index: number;
  category: "languages" | "libraries";
};

export default function SkillCard({ skill, category }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-2xl border-2 transition-all duration-500 transform text-center ${
        category === "languages"
          ? "border-violet/30 bg-gradient-to-br from-violet/10 to-transparent"
          : "border-rose/30 bg-gradient-to-br from-violet/10 to-transparent"
      } ${isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-lg"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className={`absolute inset-0 rounded-2xl ${
            category === "languages" ? "bg-violet/10" : "bg-rose/10"
          }`}
        ></div>
      )}

      <h3 className="text-2xl font-bold font-pixelify relative z-10 text-violet mb-0">
        {skill.name}
      </h3>

      {isHovered && (
        <div
          className={`absolute -inset-1 rounded-2xl blur-md -z-10 ${
            category === "languages" ? "bg-violet/20" : "bg-rose/20"
          }`}
        ></div>
      )}
    </div>
  );
}
