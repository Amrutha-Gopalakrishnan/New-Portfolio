import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="
        flex items-center justify-between 
        px-4 sm:px-6 py-3 
        bg-[#1e1e2f] rounded-xl mx-3 sm:mx-4 mt-2
        shadow-md
      ">
        {/* LOGO */}
        <h1 className="text-white text-lg sm:text-xl font-bold">
          {`<PORTFOLIO />`}
        </h1>

        {/* HAMBURGER ICON */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-white font-medium text-sm lg:text-base">
          <li className="hover:text-purple-400"><a href="#home">Home</a></li>
          <li className="hover:text-purple-400"><a href="#about">About</a></li>
          <li className="hover:text-purple-400"><a href="#skills">Skills</a></li>
          <li className="hover:text-purple-400"><a href="#projects">Projects</a></li>
          <li className="hover:text-purple-400"><a href="#experience">Experience</a></li>
          <li className="hover:text-purple-400"><a href="#certificate">Certifications</a></li>
          <li className="hover:text-purple-400"><a href="#achievements">Achievements</a></li>
          <li className="hover:text-purple-400"><a href="#publications">Publications</a></li>
          <li className="hover:text-purple-400"><a href="#education">Education</a></li>
          <li className="hover:text-purple-400"><a href="#contact">Contact</a></li>
        </ul>

        {/* DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex flex-row gap-5">
          <a
            href="https://github.com/Amrutha-Gopalakrishnan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-purple-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/amrutha-gopalakrishnan-91b85b315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-purple-400"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <ul
          className="
            flex flex-col items-center gap-4 
            bg-[#0a0a0a] py-6 mt-3 mx-3 sm:mx-4
            rounded-2xl shadow-2xl 
            text-white font-medium text-base
            border border-gray-700 md:hidden
          "
        >
          <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Projects</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Experience</a></li>
          <li><a href="#certificate" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Certifications</a></li>
          <li><a href="#achievements" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Achievements</a></li>
          <li><a href="#publications" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Publications</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Education</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Contact</a></li>

          {/* MOBILE SOCIAL ICONS */}
          <li className="flex gap-6 mt-2 text-2xl">
            <a
              href="https://github.com/Amrutha-Gopalakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/amrutha-gopalakrishnan-91b85b315"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
