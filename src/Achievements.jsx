import React, { useState } from "react";
import { Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import goal from "./assets/goal.png";
import CertificatePDF from "./assets/Pictures/Form3.png";

export default function Achievements() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full flex flex-col items-center  py-10 bg-black text-white px-4"
      id="achievements"
    >
      <motion.h1
        className="text-2xl font-extrabold tracking-wide  text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ACHIEVEMENTS & EXTRACURRICULAR
      </motion.h1>

        {/* Animated underline */}
        <motion.div
          className="h-[3px] bg-purple-500 rounded-full mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 500 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />


      {/* Animated Cards */}
      <div className="flex flex-col gap-6 w-full items-center">
        {[
          {
            title: "Inter-College Hackathon Organizer",
            desc: "Successfully conducted a large-scale inter-college hackathon with 200+ participants, overseeing planning, coordination, event flow, and judging processes.",
            border: "border-red-400",
          },
          {
            title: "Coimbatore District Cricket Association (2023–2024)",
            desc: "Represented the Coimbatore District Cricket Association in official district-level cricket tournaments.",
            border: "border-red-400",
          },
          {
            title: "All India Cricket Tournament – South Zone (2024–2025)",
            desc: "Represented the South Zone in the All India Cricket Tournament, competing at a national-level stage.",
            border: "border-yellow-400",
            certificate: true,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`w-full md:w-[70%] border ${item.border} rounded-xl p-5 bg-black/40 backdrop-blur-md shadow-lg relative`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex gap-5 items-start">
              <img src={goal} alt="icon" className="w-12 h-12" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  {item.certificate && (
                    <button
                      onClick={() => setOpen(true)}
                      className="flex items-center gap-2 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP CERTIFICATE */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0a0a0a] rounded-2xl p-4 w-full max-w-xl shadow-2xl relative border border-gray-700"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            >
              {/* Header */}
              <div className="w-full flex justify-between items-center mb-3 px-2">
                <h2 className="text-white font-semibold text-lg">Form 3</h2>
                <div className="flex items-center gap-2">
                  {/* External Verification Link */}
                  <a
                    href="https://drive.google.com/file/d/1ME5xuTNQKB_NAKlx_YTYkeJcZfHJvNxt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Certificate Image */}
              <motion.div
                className="w-full bg-black rounded-xl overflow-hidden border border-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={CertificatePDF}
                  alt="Certificate"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
