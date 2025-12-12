import React from "react";
import { motion } from "framer-motion";
import scool from "./assets/scool.png";
import clg from "./assets/clg.jpeg";

const educationData = [
  {
    image: clg,
    institution: "SRI RAMAKRISHNA COLLEGE OF ARTS & SCIENCE, COIMBATORE",
    course: "Bachelor of Science – BSc Computer Science with Data Analytics",
    duration: "2023 - 2026",
    grade: "78%",
    borderColor: "border-yellow-400",
  },
  {
    image: scool,
    institution:
      "SRI RAMAKRISHNA MATRICULATION HIGHER SECONDARY SCHOOL, COIMBATORE",
    course: "ARTS with CA",
    duration: "2021 - 2023",
    grade: "95%",
    borderColor: "border-red-500",
  },
];

const Education = () => {
  return (
    <section className="text-white py-12 px-4 bg-black" id="education">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        EDUCATION
      </motion.h2>

      <motion.div
        className="h-1 bg-purple-500 rounded-full w-0 mb-10 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 220 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div className="space-y-6 max-w-5xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start gap-4 border-l-4 ${item.borderColor} bg-[#121212] p-4 rounded-xl shadow-md`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.institution}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-md"
            />

            <div className="flex flex-col text-center md:text-left">
              <h3 className="font-bold uppercase text-base md:text-lg">
                {item.institution}
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-semibold mt-2">
                {item.course}
              </p>
              <p className="text-sm md:text-base mt-1">
                <span className="font-semibold">Year:</span> {item.duration}
              </p>
              <p className="text-sm md:text-base">
                <span className="font-semibold">Grade:</span> {item.grade}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
