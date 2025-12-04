import React from "react";
import { motion } from "framer-motion";

const techTools = [
  { name: "HTML", icon: "./html.jpg" },
  { name: "CSS", icon: "./css.jpeg" },
  { name: "Bootstrap CSS", icon: "./boot.jpeg" },
  { name: "Javascript", icon: "./js.logo.webp" },
  { name: "React JS", icon: "./react.png" },
  { name: "VS Code", icon: "./vscode.png" },
  { name: "Python", icon: "./python.png" },
  { name: "GitHub", icon: "./github.png" },
  { name: "Canva", icon: "./Canva-New-Logo.png" },
  { name: "Figma", icon: "./figma.png" },
  { name: "Vercel", icon: "./vercel.png" },
  { name: "Netlify", icon: "./netlify.png" },
  { name: "Postman", icon: "./postman.web.webp" },
  { name: "Wix", icon: "./WIX-Logo.png" },
  { name: "Framer", icon: "framer.png" },
  { name: "Word Press", icon: "wordpress.jpeg" }
];

const lineVariant = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5 }
  })
};

const TechStack = () => {
  return (
    <div className="text-white pb-16 bg-black">
      <motion.h2
        className="text-3xl font-bold text-center pt-10 "
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        TECH STACK & TOOLS
      </motion.h2>

      {/* Animated line */}
      <motion.div
        className="h-1 bg-purple-500 mx-auto mb-10 rounded-full"
        variants={lineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        style={{ maxWidth: "320px" }}
      />

      <motion.div
        className="border border-yellow-400 rounded-xl p-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {techTools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md"
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-6 h-6 object-contain"
              />
              <p className="text-white text-sm font-medium">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;
