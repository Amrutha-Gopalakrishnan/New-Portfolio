import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AICTE from "./assets/Pictures/AICTE.png";

const publications = [
  {
    title:
      "Sahayak: An AI-Powered Teaching Assistant for Multi-Grade Classrooms",
    subtitle:
      "TAMIL.AI: Bridging Language and Logic – Artificial Intelligence and Data Science",
    description:
      "Research on building an intelligent teaching assistant designed to support rural multi-grade classrooms through automated content delivery, student guidance, and adaptive learning assistance.",
    platform: "Research Publication",
    date: "2024",
    preview: AICTE,
    link: "https://drive.google.com/file/d/10YDZi8Kjs4rOlGyAS1cCgxsXoEj7LZr0/view?usp=sharing",
  },
];

const Publications = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [blink, setBlink] = useState(true);

  // 🔴 Blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="publications"
      className="w-full bg-black px-4 sm:px-6 lg:px-24 py-20 "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0.4 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.span
            animate={{ opacity: blink ? 1 : 0.45 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400"
          >
            <motion.span
              animate={{ opacity: blink ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="h-2 w-2 bg-green-400 rounded-full"
            />
            PUBLICATIONS
          </motion.span>
        </motion.div>

        {/* List */}
        <div className="space-y-6">
          {publications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-green-400/40 transition"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                  <span>{item.date}</span>
                  <span className="text-green-400">{item.platform}</span>
                </div>

                <h2 className="font-bold text-lg sm:text-xl leading-tight text-white">
                  {item.title}
                  <br />
                  <span className="text-green-400 text-sm">
                    {item.subtitle}
                  </span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-300 max-w-3xl">
                  {item.description}
                </p>
              </div>

              <div className="flex gap-4 self-start">
                <button
                  onClick={() => {
                    setCurrent(item);
                    setOpen(true);
                  }}
                  className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/40 transition"
                >
                  <Eye size={20} />
                </button>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-green-400 hover:border-green-400/40 transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-white font-semibold text-lg">
                  SAHAYAK — Research Publication
                </h2>

                <div className="flex items-center gap-3">
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>

                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-400 hover:text-red-400 transition"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              <img
                src={current.preview}
                alt="Sahayak Publication Preview"
                className="w-full rounded-lg border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Publications;
