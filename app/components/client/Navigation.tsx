"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blackdeep/80 backdrop-blur-md z-50 border-b border-graydeep">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        <div className="text-xl md:text-2xl font-bold text-violet hover:text-rose transition-colors duration-300 font-pixelify">
          &lt;Layan /&gt;
        </div>
        
        <ul className="hidden md:flex justify-center gap-6 lg:gap-8 text-rose">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="hover:text-violet transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-graydeep/50 font-pixelify text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-rose transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-1.5 bg-violet' : 'group-hover:bg-violet'
          }`}></span>
          <span className={`w-6 h-0.5 bg-rose transition-all duration-300 my-1.5 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100 group-hover:bg-violet'
          }`}></span>
          <span className={`w-6 h-0.5 bg-rose transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5 bg-violet' : 'group-hover:bg-violet'
          }`}></span>
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-blackdeep/95 backdrop-blur-lg border-b border-graydeep transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="flex flex-col p-4 space-y-3">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block text-rose hover:text-violet transition-all duration-300 py-3 px-4 rounded-lg hover:bg-violet/10 font-pixelify text-lg border-l-4 border-transparent hover:border-violet hover:translate-x-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
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