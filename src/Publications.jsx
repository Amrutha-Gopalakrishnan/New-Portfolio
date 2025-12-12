import React, { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";

import article from "./assets/article.png";
import AICTE from "./assets/Pictures/AICTE.png";
import BgImage from "./assets/background1.png";

export default function PublicationCard() {
  const [open, setOpen] = useState(false);

  const lineVariant = {
    hidden: { width: 0 },
    visible: {
      width: "210px",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover" }}
      >
        {/* Heading */}
        <h2
          id="publications"
          className="text-3xl md:text-4xl font-bold text-center text-white pt-10"
        >
          PUBLICATION
        </h2>

        <motion.div
          className="h-1 bg-purple-500 mx-auto rounded-full"
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
        />

        {/* Card Container */}
        <div className="w-full flex justify-center items-center pt-10 pb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-3xl border border-blue-400 rounded-xl bg-black/40 backdrop-blur-md shadow-xl p-4"
          >
            <div className="text-white flex flex-col sm:flex-row items-start gap-4">
              <img
                src={article}
                alt="Article Icon"
                className="w-12 h-12 shrink-0"
              />

              <div className="flex-1">
                <h2 className="font-bold text-lg sm:text-xl leading-tight">
                  Sahayak: An AI-Powered Teaching Assistant for Multi-Grade
                  Classrooms
                  <br /> TAMIL.AI: BRIDGING LANGUAGE AND LOGIC Artificial
                  Intelligence and Data Science
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  Research on building an intelligent teaching assistant
                  designed to support rural multi-grade classrooms through
                  automated content delivery, student guidance, and adaptive
                  learning assistance.
                </p>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="p-2 rounded-full hover:bg-white/20 transition self-start"
              >
                <Eye className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>

          {/* Popup */}
          {open && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
              <div className="bg-[#0a0a0a] rounded-2xl p-4 w-full max-w-3xl shadow-2xl border border-gray-700 relative">

                <h2 className="text-center text-white font-bold text-xl sm:text-2xl mb-4">
                  SAHAYAK — Research Publication
                </h2>

                {/* Header Buttons */}
                <div className="w-full flex justify-between items-center mb-3 px-2">
                  <h2 className="text-white font-semibold text-lg">Certificate</h2>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://drive.google.com/file/d/10YDZi8Kjs4rOlGyAS1cCgxsXoEj7LZr0/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => setOpen(false)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="w-full bg-black rounded-xl overflow-hidden border border-gray-600">
                  <img
                    src={AICTE}
                    alt="Certificate"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
