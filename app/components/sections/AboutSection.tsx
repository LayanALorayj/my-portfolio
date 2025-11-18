import GlassCard from "../GlassCard";

export default function AboutSection() {
  return (
    <section id="about" className="flex justify-center px-6 mb-20">
      <GlassCard
        title="About Me"
        description="I’m a Fresh Graduate Frontend Developer with a degree in Management Information Systems (MIS), 
        passionate about building modern, performant, and user-friendly web applications.
         I enjoy crafting clean, maintainable code and bringing creative UI ideas to life. 
         Always eager to learn new technologies and improve the user experience."
        imageSrc="/image/Capture-.png" 
      />
    </section>
  );
}
