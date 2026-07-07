import React, { useState, useEffect } from "react";
import { Eye, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiGit,
  SiReact,
  SiPython,
  SiTcs,
  SiAnthropic
} from "react-icons/si";

import IBM from "./assets/ibm.png";
import JS from "./assets/Pictures/JS.png";
import Git from "./assets/Pictures/Git.png";
import ReactCert from "./assets/Pictures/React.png";
import Python from "./assets/Pictures/Python.png";
import Communication from "./assets/Pictures/Communication.png";
import SoftSkills from "./assets/Pictures/SoftSkills.png";
import Cisco from "./assets/Pictures/Cisco.png";
import FS from "./assets/Pictures/FS.jpg";
import Software from "./assets/Pictures/Software.jpg";
import NQT from "./assets/Pictures/TCS NQT.jpg";
import MCP from "./assets/Pictures/MCP.jpg"

const certifications = [
  {
    title: "Programming with JavaScript",
    platform: "META – COURSERA",
    icon: <SiJavascript className="text-yellow-400" size={20} />,
    preview: JS,
    link: "https://www.coursera.org/account/accomplishments/verify/MNK1STQH7X0O",
  },
    {
    title: "Introduction to Model Context Protocol",
    platform: "Anthropic",
    icon: <SiAnthropic className="text-black-400" size={20} />,
    preview: MCP,
    link: "https://verify.skilljar.com/c/npjxzs29wopk",
  },
  {
  title: "Full Stack Software Developer Assessment",
  platform: "IBM – COURSERA",
  icon: (
    <img
      src={IBM}
      alt="IBM"
      className="w-6 h-6 object-contain"
    />
  ),
  preview: FS,
  link: "https://coursera.org/share/4d1b9d5d8e555dd194dee7f464f14c0d",
},

  {
  title: "Software Developer Career Guide and Interview Preparation",
  platform: "IBM – COURSERA",
  icon: (
    <img
      src={IBM}
      alt="IBM"
      className="w-6 h-6 object-contain"
    />
  ),
  preview: Software,
  link: "https://coursera.org/share/be2f14e639d367339e34f294c6388610",
},

  {
  title: "TCS NQT - National Qualifier Test",
  platform: "TCSiON",
  icon: <SiTcs className="text-blue-400" size={20} />,
  preview: NQT,
  link: "https://drive.google.com/file/d/16Wemcty61l2RAmeDaK3QcFFTPeq-XiaX/view?usp=sharing",
},


    {
    title: "JavaScript Essentials 2",
    platform: "CISCO",
    icon: <SiJavascript className="text-yellow-400" size={20} />,
    preview: Cisco,
    link: "https://drive.google.com/file/d/1KQDu2-1xQ60HZHgrPvBpfBopJQdirtco/view?usp=sharing",
  },
  {
    title: "React Basic",
    platform: "META – COURSERA",
    icon: <SiReact className="text-cyan-400" size={20} />,
    preview: ReactCert,
    link: "https://coursera.org/share/2770fae1889eda49be8a288f90498168",
  },
  {
    title: "Git and Github",
    platform: "Geekster",
    icon: <SiGit className="text-orange-500" size={20} />,
    preview: Git,
    link: "https://drive.google.com/file/d/1q-5gNNzP94yNOX4u9snVRegZLIlyGIFv/view",
  },
  {
    title: "Python for Data Science",
    platform: "Infosys Springboard",
    icon: <SiPython className="text-blue-400" size={20} />,
    preview: Python,
    link: "https://drive.google.com/file/d/1w6zZAjG2dN9MXI_t9NFooqz7PmOOO_qC/view",
  },
  {
    title: "Communication Skills",
    platform: "TCS iON",
    icon: <SiTcs className="text-blue-400" size={20} />,
    preview: Communication,
    link: "https://drive.google.com/file/d/1A0mNT8iB4CpLds-IGW58h5qTimffTbTo/view",
  },
  {
    title: "Introduction to Soft Skills",
    platform: "TCS iON",
    icon: <SiTcs className="text-blue-400" size={20} />,
    preview: SoftSkills,
    link: "https://drive.google.com/file/d/1nAEgpHanCa4JJYyQIfyytshB3-zrcTo6/view",
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      className="bg-black px-4 sm:px-6 lg:px-24 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <motion.span
            animate={{ opacity: blink ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs sm:text-sm text-green-400"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            CERTIFICATIONS
          </motion.span>

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-snug">
            Professional Learning ({certifications.length})

          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:border-green-400/40 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-5">
                {cert.icon}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {cert.platform}
              </p>

              <div className="h-px bg-white/10 my-5 sm:my-6" />

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Certificate
                </span>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setCurrent(cert);
                      setOpen(true);
                    }}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    <Eye size={20} />
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-red-400"
                >
                  <X size={22} />
                </button>

                <a
                  href={current.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <img
                src={current.preview}
                alt={current.title}
                className="w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
