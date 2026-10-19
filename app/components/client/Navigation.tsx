"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `flex items-center gap-2 rounded-xl px-4 py-2.5 font-pixelify text-lg font-medium transition-colors duration-300 ${
      activeSection === id
        ? "bg-violet/20 text-violet"
        : "text-lavender hover:text-violet"
    }`;

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[1100px] -translate-x-1/2">
      <div className="glass flex items-center justify-between rounded-2xl bg-blackdeep/40 px-6 py-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-pixelify text-2xl font-bold text-violet transition-colors duration-300 hover:text-rose md:text-[28px]"
        >
          &lt;Layan /&gt;
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClass(id)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {activeSection === id && <span className="h-1.5 w-1.5 bg-violet" />}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="group flex h-10 w-10 flex-col items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-7 bg-lavender transition-all duration-300 ${
              isMenuOpen ? "translate-y-[7px] rotate-45 bg-violet" : ""
            }`}
          />
          <span
            className={`my-1.5 h-0.5 w-7 bg-lavender transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-lavender transition-all duration-300 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45 bg-violet" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`glass mt-2 overflow-hidden rounded-2xl bg-blackdeep/90 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-3">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClass(id)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {activeSection === id && <span className="h-1.5 w-1.5 bg-violet" />}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
