import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Asha from "./assets/Asha.png";
import Blood from "./assets/Blood.png";
import Sahayak from "./assets/Sahayak.png";
import SD from "./assets/SD.png";
import Trip from "./assets/tripraja.png";
import CF from "./assets/CF.png";

const projects = [
  {
    title: "ASHA AI",
    description:
      "Asha AI is an intelligent career support platform that integrates an AI-powered chatbot for real-time career guidance, personalized recommendations, and resources. It features dynamic job listings with advanced filtering, user authentication, profile management, and a clean, responsive UI. Designed to empower users with instant insights and streamlined job discovery, Asha AI bridges technology and career development in a user-centric experience.",
    image: Asha,
    liveLink: "https://ashaa.netlify.app/",
    tags: ["React", "AI"],
  },
  {
    title: "BLOOD BUMS",
    description: 'BloodBums is a modern, fully responsive gym landing page designed and developed for a fitness client using HTML, CSS, and JavaScript. It showcases the client’s services with a bold hero section, membership plans, class highlights, and clear call‑to‑action flows optimized for conversions on both desktop and mobile. The project demonstrates professional UI development, branding alignment, and production‑ready frontend delivery tailored to the client’s business needs.',
    image: Blood,
    liveLink: "https://bloodbums.netlify.app/",
    tags: ["JavaScript", "Tailwind CSS"],
  },
  {
    title: "SKILL DRAGON EDITING",
    description: "This video editing interface is a sleek and intuitive UI design built for modern creators. With a focus on user-friendly controls, streamlined workflows, and real-time preview capabilities, the layout empowers users to easily trim, cut, layer, and enhance videos. The clean dashboard, timeline editor, and smart tool placement ensure an efficient editing experience that balances functionality with aesthetics—ideal for both beginners and professionals.",
    image: SD,
    liveLink:
      "https://www.figma.com/proto/La7YL2Oi8SODyCVld8iZr4/Untitled",
    tags: ["UI/UX", "Design"],
  },
  {
    title: "MY TRIP RAJA",
    description: "MyTripRaja is an online travel platform dedicated to providing seamless travel experiences across India. Designed for both leisure and business travelers, it offers curated tour packages, real-time hotel bookings, and customizable itineraries to major destinations. With a user-friendly interface and multilingual support, MyTripRaja enables quick comparison of prices, local experiences, and instant booking confirmations.",
    image: Trip,
    liveLink: "https://www.mytripraja.com/",
    tags: ["React", "Travel", "AI"],
  },
  {
    title: "CAMPUS FIND",
    description: "CampusFind is a campus‑focused lost‑and‑found platform where students can report lost items, upload details and images, and browse or search for found items using filters like category and location. The app provides an organized dashboard for tracking item status, encourages quick communication between owners and finders. This is specifically designed for a college (SRCAS)- No one can able to login and use apart from SRCAS college students.",
    image: CF,
    liveLink: "https://campusfindsrcas.vercel.app/",
    tags: ["Lost & Found", "College App"],
  },
];

const Projects = () => {
  const [blink, setBlink] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="bg-black px-4 sm:px-6 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <motion.span
            animate={{ opacity: blink ? 1 : 0.35 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400 mb-6"
          >
            <span className="h-2 w-2 bg-green-400 rounded-full" />
            PROJECTS
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Selected projects <br />
            <span className="text-gray-400">that actually shipped</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="group [perspective:1200px]"
            >
              <div
                className={`relative h-[480px] w-full transition-transform duration-700
                [transform-style:preserve-3d]
                ${activeIndex === index ? "[transform:rotateY(180deg)]" : ""}
                group-hover:[transform:rotateY(180deg)]`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] backface-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-2xl bg-[#0c0c0c] border border-white/10 p-6 backface-hidden [transform:rotateY(180deg)] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center ml-20 gap-2 text-sm font-semibold text-black bg-green-400 px-5 py-2 rounded-full hover:scale-105 transition self-start"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Project <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;