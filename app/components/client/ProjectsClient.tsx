"use client";

import ProjectCard from "./ProjectCard";

interface ProjectsClientProps {
  projects: Array<{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    demoUrl: string;
    githubUrl?: string;
    technologies: string[];
  }>;
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
          technologies={project.technologies}
          index={index}
        />
      ))}
    </div>
  );
}