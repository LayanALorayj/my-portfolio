import MotionWrapper from "../MotionWrapper";
import ProjectsClient, { type Project } from "../client/ProjectsClient";

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      category: "dev",
      title: "Layan Shope E-Commerce",
      description:
        "Shopping cart, user authentication and payment integration.",
      imageUrl: "/image/demo.png",
      demoUrl: "https://layan-shop.vercel.app/",
      githubUrl: "https://github.com/LayanALorayj/shopping-cart",
      technologies: ["React", "TypeScript", "Ant Design"],
    },
    {
      id: 2,
      category: "dev",
      title: "Anime Finder",
      description:
        "Anime discovery platform with advanced search and detailed information.",
      imageUrl: "/image/demo2.png",
      demoUrl: "https://animefinder-tau.vercel.app/",
      githubUrl: "https://github.com/LayanALorayj/next-starter/",
      technologies: ["Next.js", "TypeScript", "MUI"],
    },
    {
      id: 3,
      category: "uiux",
      title: "Level Up",
      description: "A mobile esports app simplifying event discovery, tournament registration, and ticketing through a bold pixel-art aesthetic, neon dark theme, and cohesive design system.",
      imageUrl: "/image/Level Up-project-cover.png",
      demoUrl: "https://www.behance.net/gallery/256889727/LEVEL-UP-Esports-Gaming-Events-Mobile-App",
      technologies: ["Figma", "UI"],
    },
    {
      id: 4,
      category: "uiux",
      title: "SPL - Shipment Experience UX/UI Redesign",
      description: "A mobile experience enhancing shipment tracking, address management, and customer support.",
      imageUrl: "/image/SPL.jpg",
      demoUrl: "https://www.behance.net/gallery/256569495/SPL-Shipment-Experience-UXUI-Redesign?share=1",
      technologies: ["Figma", "UI/UX"],
    },
    {
      id: 5,
      category: "uiux",
      title: "SIYAQ",
      description: "An interactive app helping beginners understand Islam through real-life scenarios, simplified explanations, trusted sources, and AI-powered guidance.",
      imageUrl: "/image/siaq.png",
      demoUrl: "https:https://www.behance.net/gallery/257229431/SIYAQ",
      technologies: ["Figma", "UI/UX"],
    },
    {
      id: 6,
      category: "uiux",
      title: "Project Title 6",
      description: "One line: the problem, and your role.",
      imageUrl: "",
      demoUrl: "https://www.behance.net/your-username",
      technologies: ["Figma", "UI/UX"],
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <MotionWrapper className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-violet" />
            <h2 className="m-0 font-pixelify text-4xl font-bold sm:text-5xl lg:text-[56px]">
              Projects
            </h2>
          </div>
          <p className="m-0 text-[17px] text-mist">
            Selected work across design and development.
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </MotionWrapper>
    </section>
  );
}
