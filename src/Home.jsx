import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const roles = ["FRONT-END DEVELOPER", "UI/UX DESIGNER", "NO CODE DEVELOPER"];

export default function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const resumeLink = "https://docs.google.com/document/d/1Ra7brojP2TWd-X4QZQvSZSirbW1RrlGZ/preview";

  /* Typing Effect */
  useEffect(() => {
    const currentRole = roles[index];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  /* Blink Effect (2s) */
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-black px-4 sm:px-6 lg:px-24 py-10 flex items-center "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0c0c0c] rounded-3xl p-4 sm:p-6 max-w-md mx-auto shadow-[0_0_80px_rgba(255,255,255,0.05)]"
        >
          <img
            src="/profile1.jpg"
            alt="Profile"
            className="rounded-2xl object-cover h-[380px] sm:h-[500px] w-full"
          />

          <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-xl p-4 sm:p-5">
            {/* Availability */}
            <span
              className={`flex items-center gap-2 text-sm font-medium transition-opacity duration-500 ${
                blink ? "opacity-100" : "opacity-30"
              } text-green-400`}
            >
              <span className="h-2 w-2 bg-green-400 rounded-full" />
              Available for Work
            </span>

            <h2 className="text-white text-xl sm:text-2xl font-semibold mt-2">
              Hey, I’m Amrutha
            </h2>

            {/* Typing Role */}
            <p className="text-green-400 text-sm mt-1 min-h-[20px]">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
              >
                Resume
              </a>

              <div className="flex gap-4 text-gray-400 text-lg">
                <a
                  className="hover:text-white"
                  href="https://github.com/Amrutha-Gopalakrishnan"
                  target="_blank"
                >
                  <FaGithub />
                </a>

                <a
                  className="hover:text-white"
                  href="https://www.linkedin.com/in/amrutha-gopalakrishnan-91b85b315/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>

                <a
                  className="hover:text-white"
                  href="https://www.instagram.com/_ams_.16/#"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400 transition-opacity duration-500 ${
              blink ? "opacity-100" : "opacity-30"
            }`}
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            INTRO
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
            Crafting Beautiful Interfaces <br />
            and Seamless User Experiences
          </h1>

          <p className="mt-6 text-gray-400 text-base sm:text-lg">
            Code meets Creativity
          </p>
        </motion.div>

      </div>
    </section>
  );
}
