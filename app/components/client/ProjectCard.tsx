"use client";

import { useState } from "react";
import { EyeOutlined, GithubOutlined } from '@ant-design/icons';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl?: string;
  technologies: string[];
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  demoUrl, 
  githubUrl,
  technologies,
  index 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative group rounded-2xl overflow-hidden border-2 border-graydeep/30 bg-gradient-to-br from-graydeep/20 to-transparent hover:border-violet/50 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative h-48 bg-graydeep/30 overflow-hidden">
        {!imageError ? (
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-contain transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-rose font-pixelify">Image not found</span>
          </div>
        )}
        
        <div className={`absolute inset-0 bg-gradient-to-t from-blackdeep/60 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-50'
        }`}></div>
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span
              key={tech}
              className="px-2 py-1 bg-violet/80 text-blackdeep text-xs font-pixelify rounded-lg backdrop-blur-sm"
              style={{ animationDelay: `${techIndex * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-lavender font-pixelify mb-3">
          {title}
        </h3>
        
        <p className="text-rose text-sm leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet to-violet/80 hover:from-violet/80 hover:to-violet text-blackdeep font-bold rounded-lg transition-all duration-300 transform hover:scale-105 font-pixelify text-sm flex-1 justify-center"
          >
            <EyeOutlined />
            Visit Demo
          </a>
          
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-rose hover:bg-rose/80 text-blackdeep font-bold rounded-lg transition-all duration-300 transform hover:scale-105 font-pixelify text-sm justify-center"
            >
              <GithubOutlined />
              Code
            </a>
          )}
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 border-2 border-violet/30 rounded-2xl pointer-events-none"></div>
      )}
    </div>
  );
}