import React, { useState } from "react";
import { Eye, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bgBlue from "./assets/background1.png";
import tcsion from "./assets/tcsion.png";

import Communication from "./assets/Pictures/Communication.png";
import SoftSkills from "./assets/Pictures/SoftSkills.png";
import JS from "./assets/Pictures/JS.png";
import Git from "./assets/Pictures/Git.png";
import ReactCert from "./assets/Pictures/React.png";
import Python from "./assets/Pictures/Python.png";

const onlineIcons = {
  js: "https://www.svgrepo.com/show/353925/javascript.svg",
  git: "https://www.svgrepo.com/show/452210/git.svg",
  react: "https://www.svgrepo.com/show/452092/react.svg",
  tcs: tcsion,
  python: "https://www.svgrepo.com/show/452091/python.svg",
};

const certifications = [
  {
    title: "Programming with JavaScript",
    platform: "META – COURSERA",
    border: "border-blue-400",
    icon: onlineIcons.js,
    preview: JS,
    link: "https://www.coursera.org/account/accomplishments/verify/MNK1STQH7X0O",
  },
  {
    title: "Git and GitHub Course",
    platform: "Geekster",
    border: "border-red-400",
    icon: onlineIcons.git,
    preview: Git,
    link: "https://drive.google.com/file/d/1q-5gNNzP94yNOX4u9snVRegZLIlyGIFv/view",
  },
  {
    title: "React Basics",
    platform: "META – COURSERA",
    border: "border-yellow-400",
    icon: onlineIcons.react,
    preview: ReactCert,
    link: "https://coursera.org/share/2770fae1889eda49be8a288f90498168",
  },
  {
    title: "Communication Skills",
    platform: "TCS iON",
    border: "border-yellow-400",
    icon: onlineIcons.tcs,
    preview: Communication,
    link: "https://drive.google.com/file/d/1A0mNT8iB4CpLds-IGW58h5qTimffTbTo/view",
  },
  {
    title: "Introduction to Soft Skills",
    platform: "TCS iON",
    border: "border-green-400",
    icon: onlineIcons.tcs,
    preview: SoftSkills,
    link: "https://drive.google.com/file/d/1nAEgpHanCa4JJYyQIfyytshB3-zrcTo6/view",
  },
  {
    title: "Python for Data Science",
    platform: "Infosys Springboard",
    border: "border-yellow-400",
    icon: onlineIcons.python,
    preview: Python,
    link: "https://drive.google.com/file/d/1w6zZAjG2dN9MXI_t9NFooqz7PmOOO_qC/view",
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  return (
    <>
      <div
        className="py-16 bg-cover bg-center text-white"
        id="certificate"
        style={{ backgroundImage: `url(${bgBlue})` }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CERTIFICATIONS
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          className="h-[3px] bg-purple-500 rounded-full mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 240 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`border ${cert.border} rounded-xl px-5 py-4 bg-[#0d1025] hover:bg-[#141832] hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={cert.icon}
                    alt="certificate icon"
                    className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                    <p className="text-gray-300 text-sm">{cert.platform}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white opacity-90">
                  <Eye
                    className="w-5 h-5 cursor-pointer hover:text-blue-300 transition hover:scale-125"
                    onClick={() => {
                      setCurrent(cert);
                      setOpen(true);
                    }}
                  />

                  <ExternalLink
                    className="w-5 h-5 cursor-pointer hover:text-blue-300 transition hover:scale-125"
                    onClick={() => window.open(cert.link, "_blank")}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {open && current && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0a0a] rounded-2xl p-4 w-full max-w-3xl shadow-2xl border border-gray-700"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <div className="w-full flex justify-between items-center mb-3 px-2">
                <h2 className="text-white font-semibold text-lg">{current.title}</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm transition hover:scale-110"
                >
                  Close
                </button>
              </div>

              <motion.div
                className="w-full bg-black rounded-xl overflow-hidden border border-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={current.preview}
                  alt="Certificate"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
