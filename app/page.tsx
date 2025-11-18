import Section from "./components/Section";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import Navigation from "./components/client/Navigation";

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
    <main className="scroll-smooth bg-blackdeep text-lavender">
      <Navigation />
      
      {sections.map(({ id, content }, index) => (
        <div key={id} className="relative">
          <Section id={id}>
            {content}
          </Section>
          
          {index < sections.length - 1 && (
            <div className="flex justify-center items-center py-12">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-violet/80 to-violet"></div>
              <div className="w-3 h-3 bg-rose rounded-full mx-6 transform rotate-45"></div>
              <div className="w-32 h-0.5 bg-gradient-to-l from-transparent via-rose/80 to-rose"></div>
            </div>
          )}
        </div>
      ))}
      <Footer />
    </main>
  );
}