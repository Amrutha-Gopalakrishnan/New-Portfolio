import React from "react";
import { motion } from "framer-motion";

const lineVariant = {
  hidden: { width: 0 },
  visible: {
    width: "120px",
    transition: { duration: 1, ease: "easeInOut" }
  },
};

const About = () => {
  return (
    <div id="about" className="bg-black text-white">

      {/* TITLE */}
      <div className="pt-10 pb-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ABOUT
        </motion.h2>

        {/* LEFT→RIGHT UNDERLINE */}
        <div className="flex justify-center mt-2">
          <motion.div
            className="h-[3px] bg-purple-500 rounded-full"
            variants={lineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* MAIN SECTION */}
      <motion.section
        className="flex items-center justify-center px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT TEXT */}
          <motion.div
            className="md:pl-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-purple-400 mb-2 text-sm sm:text-base">&lt;ABOUT ME /&gt;</p>

            <p className="text-gray-300 text-justify text-sm sm:text-base leading-relaxed tracking-wide">
              A passionate Frontend Developer and UI/UX Designer with a deep love for clean code 
              and creative design. I specialize in building responsive, intuitive, and user-centered 
              web experiences that not only look good but also perform seamlessly.
              <br /><br />
              With a strong foundation in both development and design, I enjoy crafting interfaces 
              that strike the perfect balance between aesthetics and functionality. Whether it’s 
              designing smooth user flows or coding dynamic components, I approach each project 
              with precision, creativity, and a user-first mindset.
              <br /><br />
              Outside of work, I’m constantly exploring new trends in tech and design, always eager 
              to learn, grow, and take on challenges that push my boundaries.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="./me.jpg"
              alt="About"
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
