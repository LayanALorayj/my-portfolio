"use client";

import { useState } from "react";
import SkillCard from "./SkillCard";

type SkillsClientProps = {
  skills: {
    languages: Array<{ name: string; level: number }>;
    libraries: Array<{ name: string; level: number }>;
  };
};

export default function SkillsClient({ skills }: SkillsClientProps) {
  const [activeCategory, setActiveCategory] = useState<'languages' | 'libraries'>('languages');

  return (
    <div>
      <div className="flex justify-center gap-8 mb-12">
        <button
          onClick={() => setActiveCategory('languages')}
          className={`px-8 py-4 rounded-2xl text-xl font-pixelify transition-all duration-500 ${
            activeCategory === 'languages'
              ? 'bg-violet text-blackdeep shadow-lg shadow-violet/50'
              : 'bg-graydeep/50 text-rose border-2 border-violet/30 hover:bg-violet/20'
          }`}
        >
          Languages
        </button>
        
        <button
          onClick={() => setActiveCategory('libraries')}
          className={`px-8 py-4 rounded-2xl text-xl font-pixelify transition-all duration-500 ${
            activeCategory === 'libraries'
              ? 'bg-rose text-blackdeep shadow-lg shadow-rose/50'
              : 'bg-graydeep/50 text-rose border-2 border-rose/30 hover:bg-rose/20'
          }`}
        >
          Libraries & Frameworks
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills[activeCategory].map((skill, index) => (
          <SkillCard 
            key={skill.name}
            skill={skill}
            index={index}
            category={activeCategory}
          />
        ))}
      </div>
    </div>
  );
}