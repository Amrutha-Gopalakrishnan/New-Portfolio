import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaPython
} from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import Internship from "./assets/Pictures/Internship.png";

const techIcons = [FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaPython, SiFlask];

const Experience = () => {
  const [openCert, setOpenCert] = useState(false);
  const [openTech, setOpenTech] = useState(false);

  return (
    <div className="w-full flex flex-col items-center px-4 bg-black" id="experience">

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl sm:text-3xl font-bold tracking-wider mt-10 text-center"
      >
        PROFESSIONAL EXPERIENCE
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        className="h-1 bg-purple-500 rounded-full w-0 mb-10"
        initial={{ width: 0 }}
        whileInView={{ width: 300 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0a0a0a] border border-gray-700 p-5 sm:p-6 rounded-2xl w-full max-w-3xl shadow-2xl mb-10"
      >
        <h3 className="text-white text-lg sm:text-xl font-semibold">
          Machine Learning & Front-End Developer Intern
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm mt-1">TCS iON RIO 45</p>

        <div className="flex flex-wrap text-gray-300 text-xs sm:text-sm mt-4 gap-3">
          <span className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full">
            <FaCalendarAlt className="text-yellow-400" /> July 2025 – August 2025 | 1 month
          </span>

          <span className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full">
            <FaMapMarkerAlt className="text-blue-400" /> Remote
          </span>

          <span className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full">
            <FaUserTie className="text-green-400" /> Internship
          </span>
        </div>

        <p className="text-gray-300 text-xs sm:text-sm mt-4 leading-relaxed">
          Worked on an end-to-end machine learning–based House Price Prediction system,
          validating ML outputs, refining user interactions, and building a modern UI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={() => setOpenTech(true)}
            className="bg-black/60 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg hover:bg-black/80 transition w-full sm:w-auto text-sm"
          >
            Tech Stack
          </button>

          <button
            onClick={() => setOpenCert(true)}
            className="bg-black/60 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg hover:bg-black/80 transition w-full sm:w-auto text-sm"
          >
            Certificate
          </button>
        </div>
      </motion.div>

      {/* ---------------------- CERTIFICATE POPUP ---------------------- */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0a0a] rounded-2xl p-4 w-full max-w-3xl shadow-2xl relative border border-gray-700"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <h2 className="text-white font-semibold text-base sm:text-lg text-center mb-4">
                Internship Certificate — TCS iON RIO 45
              </h2>

              <div className="w-full flex justify-between items-center mb-3 px-2">
                <a
                  href="https://drive.google.com/file/d/1JMxwbe0IOpYWpTIgR-_tyRDV_P8nosfR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setOpenCert(false)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm"
                >
                  Close
                </button>
              </div>

              <div className="w-full bg-black rounded-xl overflow-hidden border border-gray-600">
                <img
                  src={Internship}
                  alt="Certificate"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------- TECH STACK POPUP ---------------------- */}
      <AnimatePresence>
        {openTech && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[9999] p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0a0a] rounded-2xl p-6 w-full max-w-xl shadow-2xl relative border border-gray-700"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              <h2 className="text-white text-base sm:text-lg font-semibold text-center mb-4">
                Tech Stack Used
              </h2>

              <button
                onClick={() => setOpenTech(false)}
                className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 text-sm"
              >
                Close
              </button>

              <motion.div
                className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-white text-3xl sm:text-4xl place-items-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.1, duration: 0.6 }}
              >
                {techIcons.map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="cursor-pointer"
                  >
                    <Icon />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
