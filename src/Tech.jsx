import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlask,
  SiMysql,
  SiVercel,
  SiFigma,
  SiBootstrap,
  SiPostman,
  SiCanva,
  SiNetlify,
  SiWix,
  SiWordpress,
  SiFramer,
  SiFirebase,
} from "react-icons/si";
import { MdCode } from "react-icons/md";

const techStack = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap CSS", icon: <SiBootstrap className="text-purple-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  ],
  backend: [
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-300" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "VS Code", icon: <MdCode className="text-sky-400" /> },
    { name: "Wix", icon: <SiWix className="text-gray-300" /> },
    { name: "Framer", icon: <SiFramer className="text-sky-400" /> },
    { name: "WordPress", icon: <SiWordpress className="text-sky-400" /> },
    { name: "Canva", icon: <SiCanva className="text-purple-400" /> },
    { name: "Netlify", icon: <SiNetlify className="text-sky-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
  ],
};

const TechStack = () => {
  const [blink, setBlink] = useState(true);

  // Blink badge every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      className="w-full bg-black px-4 sm:px-6 lg:px-24 py-24"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.span
            animate={{ opacity: blink ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            SKILLS & TOOLS
          </motion.span>

          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
            Learned by coding all night and debugging all day. I focus on building
            clean, scalable interfaces and reliable backend systems using modern
            technologies.
          </p>
        </motion.div>

        {/* Tech Sections */}
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-light text-white capitalize"
            >
              {category}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl
                             bg-white/5 border border-white/10
                             hover:border-emerald-400/40
                             hover:bg-white/10
                             transition-all duration-300"
                >
                  <div className="text-xl">{skill.icon}</div>
                  <span className="text-gray-200 font-semibold text-sm">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
