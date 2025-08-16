import React, { useEffect, useState } from 'react';

function Home() {
  const roles = ["Frontend Developer", "UI/UX Designer", "No Code Developer"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typeSpeed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center px-4 md:px-6 lg:px-12"
      id="home"
    >
      <img
        src="./profile1.jpg"
        alt="profile"
        className="sm:w-100 sm:h-100 md:w-65 md:h-65 lg:w-70 lg:h-70 rounded-3xl object-cover shadow-md"
      />

      <div className="text-center mt-6 w-full max-w-2xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Hi, I’m Amrutha KG
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
          Crafting Beautiful Interfaces & Seamless User Experiences
        </p>

        {/* ✨ Typewriter Role Line */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400 mt-2 h-6">
          {text}
          <span className="border-r-2 border-purple-400 animate-pulse ml-1" />
        </p>

        <p className="text-sm sm:text-base md:text-lg text-white mt-2 font-semibold">
          Code meets Creativity
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap mb-10">
          <a
            href="https://docs.google.com/document/d/1gNOpBTR9Jt6RCUeluQVaYO1R4uklDzJ_/edit?usp=sharing&ouid=115580187214025059968&rtpof=true&sd=true"
            download={true}
             target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:-translate-y-1"
          >
            Download CV
          </a>
          <a
            href="#about"
            className="bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:-translate-y-1"
          >
            Know Me
          </a>
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
