import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Asha from "./assets/Asha.png";
import cash from "./assets/Cash.png";
import Blood from "./assets/Blood.png";
import simbu from "./assets/simbu.png";
import SD from "./assets/SD.png";
import Sahayak from "./assets/Sahayak.png";
import Trip from "./assets/tripraja.png";

const projects = [
  {
    title: "ASHA AI",
    description:
      "Asha AI is an intelligent career support platform that integrates an AI-powered chatbot for real-time career guidance, personalized recommendations, and resources. It features dynamic job listings with advanced filtering, user authentication, profile management, and a clean, responsive UI. Designed to empower users with instant insights and streamlined job discovery, Asha AI bridges technology and career development in a user-centric experience.",
    image: Asha,
    borderColor: "border-indigo-500",
    liveLink: "https://ashaa.netlify.app/",
  },
  {
    title: "BLOOD BUMS",
    description:
      "BloodBurns is a bold and immersive fitness web platform designed to inspire and engage users through high-impact visuals and motivational content.",
    image: Blood,
    borderColor: "border-indigo-500",
    liveLink: "https://bloodbums.netlify.app/",
  },
  {
    title: "SILAMBARSAN",
    description:
      "This sample portfolio for actor Silambarasan TR (Simbu) showcases his cinematic journey, iconic performances, and multifaceted talent as an actor, singer, and director. Designed with a modern and elegant interface, the site highlights Simbu's filmography, achievements, and public presence, offering fans and industry professionals a dynamic glimpse into his legacy and impact on Tamil cinema.",
    image: simbu,
    borderColor: "border-indigo-500",
    liveLink: "https://amruthagopal16.wixsite.com/simbu",
  },
  {
    title: "SKILL DRAGON EDITING",
    description:
      "This video editing interface is a sleek and intuitive UI design built for modern creators. With a focus on user-friendly controls, streamlined workflows, and real-time preview capabilities, the layout empowers users to easily trim, cut, layer, and enhance videos. The clean dashboard, timeline editor, and smart tool placement ensure an efficient editing experience that balances functionality with aesthetics—ideal for both beginners and professionals.",
    image: SD,
    borderColor: "border-indigo-500",
    liveLink:
      "https://www.figma.com/proto/La7YL2Oi8SODyCVld8iZr4/Untitled?node-id=11-18&t=SIcn9vtW8QyhLLNG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A18",
  },
  {
    title: "SAHAYAK",
    description:
      "Sahayak is an AI-powered, offline-first Progressive Web App designed for multi-grade classrooms in rural India. Built to support teachers with multilingual and culturally contextual content, it features intelligent lesson planning, automated assessments, and seamless resource sharing, even in low-connectivity environments.",
    image: Sahayak,
    borderColor: "border-indigo-500",
    liveLink: "https://sahayak-agentic-ai.web.app/",
  },
  {
    title: "MY TRIP RAJA",
    description:
      "MyTripRaja is an online travel platform dedicated to providing seamless travel experiences across India. Designed for both leisure and business travelers, it offers curated tour packages, real-time hotel bookings, and customizable itineraries to major destinations. With a user-friendly interface and multilingual support, MyTripRaja enables quick comparison of prices, local experiences, and instant booking confirmations. The platform features trusted payment gateways, responsive customer support, and regularly updated deals to ensure affordable and memorable journeys for everyone.",
    image: Trip,
    borderColor: "border-indigo-500",
    liveLink: "https://www.mytripraja.com/",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const lineVariant = {
  hidden: { width: 0 },
  visible: {
    width: "190px",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Projects = () => {
  return (
    <section
      className="bg-black text-white py-16 px-4"
      id="projects"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        PROJECTS
      </motion.h2>

      <motion.div
        className="h-1 bg-purple-500 mx-auto mb-10 rounded-full"
        variants={lineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`border ${project.borderColor} rounded-xl p-4 bg-[#0e0e10] shadow-md`}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {/* ⭐ Responsive Smaller Image */}
            <div className="relative group mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="
                  rounded-lg w-full 
                  h-36 sm:h-40 md:h-44 lg:h-48 
                  object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-4 rounded-lg">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
                  title="Live Preview"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <h3 className="text-lg font-bold text-center">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2 text-justify">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
