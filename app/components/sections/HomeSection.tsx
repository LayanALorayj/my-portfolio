"use client";

import { useState } from "react";

const chips = ["Figma", "UX Research", "React", "Next.js"];

export default function HomeSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center px-6 pt-32 pb-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-14 lg:flex-row lg:gap-16">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center gap-7 text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-mist">
            <span className="h-2.5 w-2.5 bg-violet" />
            Front-End Developer &amp; UI/UX Designer
          </div>

          <h1 className="m-0 font-pixelify text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-[92px]">
            Hi, I&apos;m <span className="text-violet">Layan</span>
          </h1>

          <p className="m-0 max-w-lg text-lg leading-relaxed text-mist">
            I design and build clean, user-centered web experiences, from
            research and Figma prototypes to responsive React &amp; Next.js apps.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {chips.map((chip) => (
              <span
                key={chip}
                className="glass rounded-[10px] px-3.5 py-2 text-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-violet px-8 font-pixelify text-xl font-bold text-blackdeep transition-all duration-300 hover:bg-violet/80"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-violet px-8 font-pixelify text-xl font-bold text-lavender transition-all duration-300 hover:bg-violet/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Pixel window */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-[440px]">
            <div className="overflow-hidden rounded-[18px] border-2 border-violet bg-white/5 shadow-[10px_10px_0_rgba(177,143,207,0.28)] backdrop-blur-md">
              <div className="flex items-center gap-2 border-b-2 border-violet bg-graydeep/80 px-4 py-3">
                <span className="h-3 w-3 bg-rose" />
                <span className="h-3 w-3 bg-violet" />
                <span className="h-3 w-3 bg-lavender" />
                <span className="ml-3 font-pixelify text-[15px] text-mist">
                  layan.exe
                </span>
              </div>

              <div className="pixel-grid flex h-[400px] items-center justify-center">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/image/Capture-.png"
                    alt="Layan"
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="px-6 text-center font-pixelify text-xl leading-snug text-mist">
                    [YOUR PHOTO OR
                    <br />
                    PIXEL AVATAR]
                  </span>
                )}
              </div>
            </div>

            <div className="glass absolute -left-3 bottom-9 rounded-xl bg-blackdeep/75 px-4 py-2.5 font-pixelify text-base sm:-left-7">
              Riyadh, SA
            </div>
            <div className="glass absolute -right-2 top-16 rounded-xl border-violet/40 bg-blackdeep/75 px-4 py-2.5 font-pixelify text-base text-violet sm:-right-4">
              Figma → React
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
