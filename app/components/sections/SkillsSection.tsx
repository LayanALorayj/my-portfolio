import SkillsClient from "../SkillsClient";

export default function SkillsSection() {
  const skills = {
    languages: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 65 },
    ],
    libraries: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 65 },
      { name: "Bootstrap", level: 80 },
      { name: "Ant Design", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ]
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-violet mb-4 font-pixelify">
            Skills
          </h2>
          <p className="text-xl text-rose font-pixelify">
            Technologies I work with
          </p>
        </div>

        <SkillsClient skills={skills} />
      </div>
    </section>
  );
}