"use client";

import { useState } from "react";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = imageUrl && !imageError;

  return (
    <article className="glass group flex flex-col overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-violet hover:shadow-[8px_8px_0_rgba(177,143,207,0.22)]">
      <div className="pixel-grid flex h-52 items-center justify-center overflow-hidden">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-pixelify text-base text-mist">
            [PROJECT IMAGE]
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-violet/15 px-2.5 py-1 text-xs text-violet"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="m-0 font-pixelify text-[26px] font-bold leading-tight">
          {title}
        </h3>

        <p className="m-0 flex-1 text-sm leading-relaxed text-mist">
          {description}
        </p>

        {(demoUrl || githubUrl) && (
          <div className="mt-2 flex gap-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-violet px-4 font-pixelify text-sm font-bold text-blackdeep transition-all duration-300 hover:bg-violet/80"
              >
                <EyeOutlined />
                Visit Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-lavender/25 px-4 font-pixelify text-sm font-bold text-lavender transition-all duration-300 hover:border-violet hover:text-violet"
              >
                <GithubOutlined />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
