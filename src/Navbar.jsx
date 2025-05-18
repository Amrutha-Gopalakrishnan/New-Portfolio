import React from 'react'
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className='sticky-top'>
     <nav className="flex items-center justify-between px-6 py-3 bg-[#1e1e2f] rounded-xl mx-6 shadow-md ">
      <h1 className="text-white text-xl font-bold ">{`<PORTFOLIO />`}</h1>
      <ul className="flex gap-10 text-white justify-center items-center font-medium text-sm">
        <li className="cursor-pointer hover:text-purple-400"><a href='#home'>Home</a></li>
        <li className="cursor-pointer hover:text-purple-400"><a href='#about'>About</a></li>
        <li className="cursor-pointer hover:text-purple-400"><a href='#skills'>Skills</a></li>
        <li className="cursor-pointer hover:text-purple-400"><a href='#projects'>Projects</a></li>
        <li className="cursor-pointer hover:text-purple-400"><a href='#education'>Education</a></li>
        <li className="cursor-pointer hover:text-purple-400"><a href='#contact'>Contact</a></li>
      </ul>
      <a href="https://github.com/Amrutha-Gopalakrishnan" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white text-xl hover:text-purple-400" />
      </a>
    </nav>
    </div>
  );
}

export default Navbar