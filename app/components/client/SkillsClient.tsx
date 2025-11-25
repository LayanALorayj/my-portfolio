"use client";

import { useState } from "react";
import SkillCard from "../SkillCard";

type SkillsClientProps = {
  skills: {
    languages: Array<{ name: string; level: number }>;
    libraries: Array<{ name: string; level: number }>;
  };
};

export default function SkillsClient({ skills }: SkillsClientProps) {
  return (
    <div className="space-y-12">
      {/* قسم Languages */}
      <div>
        <h3 className="text-3xl font-bold text-violet mb-8 text-center font-pixelify">
          Languages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.languages.map((skill, index) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              index={index}
              category="languages"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-violet mb-8 text-center font-pixelify">
          Libraries & Frameworks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.libraries.map((skill, index) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              index={index}
              category="libraries"
            />
          ))}
        </div>
      </div>
    </div>
  );
}