import Section from "./components/Section";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio",
};

export default function Page() {
  const sections = [
    { id: "home", label: "Home", content: <HomeSection /> },
    { id: "about", label: "About", content: <AboutSection /> },
    { id: "skills", label: "Skills", content: <SkillsSection /> },
    { id: "projects", label: "Projects", content: <ProjectsSection /> },
    { id: "contact", label: "Contact", content: <ContactSection /> },
  ];

  return (
    <main className="scroll-smooth bg-gray-900 text-gray-100">
      <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <ul className="flex justify-center gap-8 py-4 text-gray-300">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-blue-400 transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map(({ id, content }) => (
        <Section key={id} id={id}>
          {content}
        </Section>
      ))}
    </main>
  );
}
