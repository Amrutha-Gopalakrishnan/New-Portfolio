// import React from 'react'
// import { FaGithub } from "react-icons/fa";

// function Navbar() {
//   return (
//     <div className='sticky-top'>
//      <nav className="flex items-center justify-between px-6 py-3 bg-[#1e1e2f] rounded-xl mx-6 shadow-md ">
//       <h1 className="text-white text-xl font-bold ">{`<PORTFOLIO />`}</h1>
//       <ul className="flex gap-10 text-white justify-center items-center font-medium text-sm">
//         <li className="cursor-pointer hover:text-purple-400"><a href='#home'>Home</a></li>
//         <li className="cursor-pointer hover:text-purple-400"><a href='#about'>About</a></li>
//         <li className="cursor-pointer hover:text-purple-400"><a href='#skills'>Skills</a></li>
//         <li className="cursor-pointer hover:text-purple-400"><a href='#projects'>Projects</a></li>
//         <li className="cursor-pointer hover:text-purple-400"><a href='#education'>Education</a></li>
//         <li className="cursor-pointer hover:text-purple-400"><a href='#contact'>Contact</a></li>
//       </ul>
//       <a href="https://github.com/Amrutha-Gopalakrishnan" target="_blank" rel="noopener noreferrer">
//         <FaGithub className="text-white text-xl hover:text-purple-400" />
//       </a>
//     </nav>
//     </div>
//   );
// }

// export default Navbar


import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-3 bg-[#1e1e2f] rounded-xl mx-4 shadow-md">
        <h1 className="text-white text-xl font-bold">{`<PORTFOLIO />`}</h1>

        {/* Hamburger Icon for Mobile */}
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium text-sm">
          <li className="hover:text-purple-400"><a href="#home">Home</a></li>
          <li className="hover:text-purple-400"><a href="#about">About</a></li>
          <li className="hover:text-purple-400"><a href="#skills">Skills</a></li>
          <li className="hover:text-purple-400"><a href="#projects">Projects</a></li>
          <li className="hover:text-purple-400"><a href="#education">Education</a></li>
          <li className="hover:text-purple-400"><a href="#contact">Contact</a></li>
        </ul>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Amrutha-Gopalakrishnan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-purple-400 hidden md:block"
        >
          <FaGithub />
        </a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 bg-[#1e1e2f] py-4 mt-2 mx-4 rounded-lg shadow-md text-white font-medium text-sm md:hidden">
          <li className="hover:text-purple-400"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className="hover:text-purple-400"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="hover:text-purple-400"><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li className="hover:text-purple-400"><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li className="hover:text-purple-400"><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li className="hover:text-purple-400"><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a
              href="https://github.com/Amrutha-Gopalakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-400"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
