import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2023 – Now",
    title: "BSc Computer Science with Data Analytics",
    org: "Sri Ramakrishna College of Arts & Science",
    desc: "Currently building a strong foundation in computer science, data analytics, and real-world problem solving through projects and practical learning.",
    icon: <GraduationCap size={20} />,
  },
  {
    year: "2021 – 2023",
    title: "Higher Secondary – Arts with CA",
    org: "Sri Ramakrishna Matriculation School",
    desc: "Focused on commerce, accounting, and analytical thinking, developing discipline and consistency in academic performance.",
    icon: <GraduationCap size={20} />,
  },
];

const EducationExperience = () => {
  const [blink, setBlink] = useState(true);

  // 🔴 Blink effect (same as other sections)
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="education"
      className="bg-black px-4 sm:px-6 lg:px-24 py-24 lg:py-32 "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <motion.span
            animate={{ opacity: blink ? 1 : 0.35 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400"
          >
            <motion.span
              animate={{ opacity: blink ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="h-2 w-2 bg-green-400 rounded-full"
            />
            EDUCATION
          </motion.span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight">
            Learning, building,
            <br />
            <span className="text-gray-400">and evolving over time</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16 lg:space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-12"
              >
                <div className="text-green-400 text-sm font-medium lg:text-right">
                  {item.year}
                </div>

                <div className="relative">
                  <div className="hidden lg:block absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-green-400" />

                  <div className="mb-3 text-white/80">
                    {item.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 font-medium mt-1">
                    {item.org}
                  </p>

                  <p className="text-gray-500 mt-4 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
