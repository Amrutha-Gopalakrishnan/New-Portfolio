import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  ShieldCheck,
  ExternalLink,
  X,
} from "lucide-react";
import Internship from "./assets/Pictures/Internship.png";

const Experience = () => {
  const [open, setOpen] = useState(false);
  const [blink, setBlink] = useState(true);
  const driveLink =
    "https://drive.google.com/file/d/1JMxwbe0IOpYWpTIgR-_tyRDV_P8nosfR/view?usp=sharing";

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experience"
      className="w-full bg-black px-4 sm:px-6 md:px-10 lg:px-24 py-16 sm:py-20"
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
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-xs sm:text-sm text-green-400"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            EXPERIENCE
          </motion.span>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-5 sm:p-7 lg:p-10"
        >
          {/* Button – mobile safe */}
          <div className="flex justify-start sm:absolute sm:top-6 sm:right-6 mb-4 sm:mb-0">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-green-400 hover:text-green-400 transition"
            >
              View Certificate <ExternalLink size={14} />
            </button>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-green-400 leading-snug">
            Machine Learning & Front-End Developer Intern
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">
            TCS iON RIO 45
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 text-xs sm:text-sm text-gray-300">
            {[
              { icon: Calendar, label: "July 2025 – August 2025" },
              { icon: MapPin, label: "India" },
              { icon: Briefcase, label: "Internship" },
              { icon: ShieldCheck, label: "ML & Front-End" },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
              >
                <item.icon size={14} />
                {item.label}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-sm sm:text-base mt-6 max-w-4xl leading-relaxed">
            Worked on an end-to-end machine learning–based House Price Prediction
            system, validating ML outputs, refining user interactions, and
            building a modern UI.
          </p>

          <ul className="mt-6 space-y-2 sm:space-y-3 text-gray-400 text-sm list-disc list-inside">
            <li>Built secure and scalable front-end interfaces</li>
            <li>Integrated ML predictions with user-facing dashboards</li>
            <li>Validated and optimized model outputs</li>
            <li>Improved UI performance and usability</li>
          </ul>

          <div className="h-px bg-white/10 my-6 sm:my-8" />

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "React.js",
              "Python",
              "Flask API",
              "Machine Learning",
              "UI Integration",
              "Model Validation",
            ].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-gray-300 hover:text-green-400 hover:border-green-400 transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 py-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-black border border-white/10 rounded-2xl p-4"
            >
              <div className="flex justify-between items-center mb-3">
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-red-400"
                >
                  <X size={22} />
                </button>

                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <img
                src={Internship}
                alt="Certificate"
                className="w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
