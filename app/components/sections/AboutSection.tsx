import MotionWrapper from "../MotionWrapper";

const tags = ["Figma", "User research", "React", "Next.js", "TypeScript"];

const path = [
  {
    date: "Sep – Dec 2025",
    title: "Axelerated Solutions",
    description: "Co-op Trainee, Front-End & UI/UX",
  },
  {
    date: "Aug – Oct 2026",
    title: "Tuwaiq Academy",
    description: "UI/UX Design Bootcamp, 4 end-to-end projects in Figma",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <MotionWrapper className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-2.5 w-2.5 bg-violet" />
          <h2 className="m-0 font-pixelify text-4xl font-bold sm:text-5xl lg:text-[56px]">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bio */}
          <div className="glass flex flex-col justify-between gap-8 rounded-3xl p-8 md:p-10">
            <p className="m-0 text-lg leading-loose">
              Management Information Systems graduate specializing in front-end
              development and UI/UX design, turning user needs into intuitive
              digital experiences with Figma, React, and Next.js.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[10px] border border-violet/35 bg-violet/10 px-3.5 py-2 text-sm text-violet"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Path */}
          <div className="rounded-3xl border border-lavender/10 bg-lavender/[0.04] p-8 md:p-10">
            <h3 className="mb-7 font-pixelify text-2xl font-bold text-mist">
              My path
            </h3>

            <ol className="m-0 list-none p-0">
              {path.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="h-3.5 w-3.5 bg-violet" />
                    {i < path.length - 1 && (
                      <span className="w-0.5 flex-1 bg-violet/35" />
                    )}
                  </div>
                  <div className={i < path.length - 1 ? "pb-7" : ""}>
                    <div className="text-sm text-mist">{item.date}</div>
                    <div className="my-1 font-pixelify text-[22px] font-semibold">
                      {item.title}
                    </div>
                    <div className="text-[15px] leading-relaxed text-mist">
                      {item.description}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
