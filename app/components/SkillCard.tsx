"use client";

import { useState, useEffect } from "react";

type SkillCardProps = {
  skill: { name: string; level: number };
  index: number;
  category: 'languages' | 'libraries';
}

export default function SkillCard({ skill, index, category }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, index * 200); 

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div
      className={`relative p-6 rounded-2xl border-2 transition-all duration-500 transform ${
        category === 'languages' 
          ? 'border-violet/30 bg-gradient-to-br from-violet/10 to-transparent' 
          : 'border-rose/30 bg-gradient-to-br from-rose/10 to-transparent'
      } ${
        isHovered 
          ? 'scale-105 shadow-2xl' 
          : 'scale-100 shadow-lg hover:scale-102'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className={`absolute inset-0 rounded-2xl ${
          category === 'languages' ? 'bg-violet/10' : 'bg-rose/10'
        }`}></div>
      )}
      
      <h3 className={`text-2xl font-bold font-pixelify mb-4 relative z-10 ${
        category === 'languages' ? 'text-violet' : 'text-rose'
      }`}>
        {skill.name}
      </h3>

      <div className="space-y-2 relative z-10">
        <div className="w-full bg-graydeep rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ease-out ${
              category === 'languages' 
                ? 'bg-gradient-to-r from-violet to-violet/80' 
                : 'bg-gradient-to-r from-rose to-rose/80'
            }`}
            style={{ 
              width: `${animatedLevel}%`,
            }}
          ></div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs font-pixelify ${
            category === 'languages' ? 'text-violet/60' : 'text-rose/60'
          }`}>
          </span>
          <span className={`text-sm font-bold font-pixelify ${
            category === 'languages' ? 'text-violet' : 'text-rose'
          }`}>
            {skill.level}%
          </span>
        </div>
      </div>

      {isHovered && (
        <div className={`absolute -inset-1 rounded-2xl blur-md ${
          category === 'languages' ? 'bg-violet/20' : 'bg-rose/20'
        }`}></div>
      )}
    </div>
  );
}