import React from "react";
import { motion } from "framer-motion";

const lineVariant = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <div
      className="text-white py-12 px-4"
      id="skills"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto"
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-center "
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        SKILLS
      </motion.h2>

      {/* Animated Line */}
      <motion.div
        className="h-1 bg-purple-500 mx-auto mb-12 rounded-full"
        variants={lineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        style={{ maxWidth: "130px" }}
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Frontend Developer</h3>
          <p className="text-gray-300 text-sm text-justify">
            As a frontend developer, I craft responsive and user-friendly web interfaces using HTML,
            CSS, Bootstrap, and ReactJS. I focus on building clean, efficient code that ensures seamless
            performance across all devices while bringing designs to life with precision and functionality.
          </p>
        </motion.div>

        <motion.div
          className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">UI/UX Designer</h3>
          <p className="text-gray-300 text-sm text-justify">
            With a strong eye for detail, I design intuitive and engaging user experiences. Using tools
            like Figma and Canva, I create wireframes, prototypes, and visual designs that are both
            user-centric and aesthetically appealing, ensuring smooth interaction and usability.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
