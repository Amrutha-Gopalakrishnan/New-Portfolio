
import React, { useEffect, useState } from 'react';

function Home() {
  const roles = ["Frontend Developer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Which role
  const [charIndex, setCharIndex] = useState(0); // Which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typeSpeed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setDeleting(true), 1000); // wait before delete
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
  }, [charIndex, deleting, index, roles]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center mb-2 bg-cover bg-center" id='home'>
      <img
        src="./profile1.jpg"
        alt="profile"
        className="w-100 h-100 rounded-3xl object-cover shadow-md"
      />

      <div className="text-center mt-6 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Hi, I’m Amrutha KG
        </h2>

        <p className="text-sm md:text-base text-gray-300 mt-2">
          Crafting Beautiful Interfaces & Seamless User Experiences
        </p>

        {/* ✨ Typewriter Role Line */}
        <p className="text-lg md:text-xl font-semibold text-purple-400 mt-2 h-6">
          {text}
          <span className="border-r-2 border-purple-400 animate-pulse ml-1" />
        </p>

        <p className="text-sm md:text-base text-white mt-2 font-semibold">
          <span className="">Code meets Creativity</span>
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap mb-2">
          <button className="bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:-translate-y-1">
            <a href='src/assets/Resume.pdf' download={true}>Download CV</a>
          </button>
          <button className="bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:-translate-y-1">
             <a href='#about'>Know Me</a>
          </button>
          <button className="bg-gray-800 hover:bg-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform hover:-translate-y-1">
             <a href='#contact'>Contact Me</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
