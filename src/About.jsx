import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [blink, setBlink] = useState(true);

  // Blink effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-black px-4 sm:px-6 lg:px-24 py-24 flex items-center "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 lg:gap-20 items-center">

        {/* LEFT – Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-[#0c0c0c] p-3 shadow-[0_0_80px_rgba(255,255,255,0.04)]">
            <img
              src="./me.jpg"
              alt="Amrutha Gopalakrishnan"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition duration-700"
            />

            {/* Glass overlay */}
            <div className="absolute inset-3 rounded-2xl border border-white/10 pointer-events-none" />
          </div>
        </motion.div>

        {/* RIGHT – About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* ABOUT Badge (Blinking) */}
          <motion.span
            animate={{ opacity: blink ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400 mb-6"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            ABOUT
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-snug">
            Designing web experiences with clarity,
            creativity, and performance in mind
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed text-sm sm:text-base">
            I’m a frontend developer based in Coimbatore, India. I focus on building
            fast, scalable, and visually refined web interfaces that feel effortless
            to use.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
            My background in Computer Science and Data Analytics helps me balance
            design decisions with logic, performance, and real-world usability.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
            I don’t chase trends. I build interfaces that are intentional,
            maintainable, and quietly powerful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
