import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import scool from './assets/scool.png' 
import clg from './assets/clg.jpeg'

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
    institution: "SRI RAMAKRISHNA MATRICULATION HIGHER SECONDARY SCHOOL, COIMBATORE",
    course: "ARTS with CA",
    duration: "2021 - 2023",
    grade: "95%",
    borderColor: "border-red-500",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <section className="text-white py-12 px-4 bg-black" id="education">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        EDUCATION
      </h2>

      <div className="space-y-6 max-w-5xl mx-auto" data-aos="fade-up">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start gap-4 border-l-4 ${item.borderColor} bg-[#121212] p-4 rounded-xl shadow-md`}
          >
            <img
              src={item.image}
              alt={item.institution}
              className="w-full md:w-40 h-40 object-contain rounded-md"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
