import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { Eye, X } from "lucide-react";

import CertificatePNG from "./assets/Pictures/Form3.png";

const achievements = [
  {
    title: "Inter-College Hackathon Organizer",
    description:
      "Successfully conducted a large-scale inter-college hackathon with 200+ participants, overseeing planning, coordination, event flow, and judging processes.",
    icon: <FaAward />,
    date: "2024",
  },
  {
    title: "Coimbatore District Cricket Association (2023–2024)",
    description:
      "Represented the Coimbatore District Cricket Association in official district-level cricket tournaments.",
    icon: <FaAward />,
    date: "2023–2024",
  },
  {
    title: "South Zone – All India Cricket Tournament",
    description:
      "Represented the South Zone in the All India Cricket Tournament, competing at a national-level stage.",
    icon: <FaAward />,
    date: "2024–2025",
    certificate: {
      preview: CertificatePNG,
      link: "https://drive.google.com/file/d/1ME5xuTNQKB_NAKlx_YTYkeJcZfHJvNxt/view?usp=sharing",
    },
  },
];

const Achievements = () => {
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
      id="achievements"
      className="w-full bg-black px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <motion.span
            animate={{ opacity: blink ? 1 : 0.35 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs sm:text-sm text-green-400"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            ACHIEVEMENTS
          </motion.span>

          <p className="text-gray-400 text-xs sm:text-sm mt-3">
            Awards & Recognition ({achievements.length})
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:border-green-400/40 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-yellow-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {item.date}
              </p>

              <div className="h-px bg-white/10 my-5 sm:my-6" />

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Achievement
                </span>

                {item.certificate && (
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setCurrent(item.certificate);
                        setOpen(true);
                      }}
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      <Eye size={20} />
                    </button>

                    <a
                      href={item.certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                )}
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
              className="relative max-w-xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-4"
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
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>

              <img
                src={current.preview}
                alt="Achievement Certificate"
                className="w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
