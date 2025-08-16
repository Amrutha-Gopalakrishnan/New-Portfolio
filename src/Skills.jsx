// SkillsInfo.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <div className="text-white py-12 px-4" id="skills"  style={{backgroundImage: `url("/background.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "auto"}}>
      <h2 className="text-4xl font-bold text-center mb-9">SKILLS</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto " data-aos="fade-up">
        <div className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-4 text-center">Frontend Developer</h3>
          <p className="text-gray-300 text-sm text-justify">
            As a frontend developer, I craft responsive and user-friendly web interfaces using HTML, CSS, Bootstrap, and ReactJS. I focus on building clean, efficient code that ensures seamless performance across all devices while bringing designs to life with precision and functionality.
          </p>
        </div>

        <div className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold mb-4 text-center">UI/UX Designer</h3>
          <p className="text-gray-300 text-sm text-justify">
            With a strong eye for detail, I design intuitive and engaging user experiences. Using tools like Figma and Canva, I create wireframes, prototypes, and visual designs that are both user-centric and aesthetically appealing, ensuring smooth interaction and usability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
