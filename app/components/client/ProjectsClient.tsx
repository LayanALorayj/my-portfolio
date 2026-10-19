"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export type Project = {
  id: number;
  category: "uiux" | "dev";
  title: string;
  description: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
};

type Filter = "all" | "uiux" | "dev";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "uiux", label: "UI / UX" },
  { id: "dev", label: "Development" },
];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2.5 font-pixelify text-[17px]">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={`min-h-11 rounded-xl px-5 transition-all duration-300 ${
              filter === id
                ? "bg-violet font-bold text-blackdeep"
                : "glass text-lavender hover:border-violet/50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </>
  );
}
