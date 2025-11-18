import ProjectsClient from "../client/ProjectsClient";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Layan Shope E-Commerce",
      description: "A modern e-commerce platform with shopping cart, user authentication, and payment integration built with Next.js and Stripe.",
      imageUrl: "/image/demo.png",
      demoUrl: "https://layan-shop.vercel.app/",
      githubUrl: "https://github.com/LayanALorayj/shopping-cart",
      technologies: ["React", "TypeScript", "Ant design", "Node.js"]
    },
    {
      id: 2,
      title: "Anime Finder",
      description: "A modern anime discovery platform that helps users find and explore new anime series with advanced search, detailed information.",
      imageUrl: "/image/demo2.png",
      demoUrl: "https://animefinder-tau.vercel.app/",
      githubUrl: "https://github.com/LayanALorayj/next-starter/",
      technologies: ["Next.js", "Node.js", "TypeScript", "MUI"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-8 flex items-center justify-center z-0"> 
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-violet mb-6 font-pixelify">
            Projects
          </h2>
          <p className="text-lg sm:text-xl text-rose font-pixelify max-w-2xl mx-auto px-4">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </div>
    </section>
  );
}