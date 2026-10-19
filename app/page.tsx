import PixelBackground from "./components/PixelBackground";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import Navigation from "./components/client/Navigation";

export default function Page() {
  return (
    <main className="w-full text-lavender">
      <PixelBackground />
      <Navigation />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
