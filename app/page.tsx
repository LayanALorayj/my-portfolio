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

// إنشاء Navigation كـ Server Component منفصل
function Navigation() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blackdeep/80 backdrop-blur-md z-50 border-b border-graydeep">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-violet hover:text-rose transition-colors duration-300 ml-4 font-pixelify">
          &lt;Layan /&gt;
        </div>
        
        <ul className="flex justify-center gap-8 text-rose">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="hover:text-violet transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-graydeep/50 font-pixelify"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

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
          
          {/* خط أنيق بين الأقسام ماعدا الأخير - مع تحسينات للرؤية */}
          {index < sections.length - 1 && (
            <div className="flex justify-center items-center py-12">
              <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-violet/80 to-violet"></div>
              <div className="w-3 h-3 bg-rose rounded-full mx-6 transform rotate-45"></div>
              <div className="w-32 h-0.5 bg-linear-to-l from-transparent via-rose/80 to-rose"></div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}