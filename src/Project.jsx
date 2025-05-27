import React, { useEffect } from "react";
import {  FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import Asha from './assets/Asha.png'
import gdg from './assets/gdg.png'
import port from './assets/port.png'
import todo from './assets/todo.png'
import cash from './assets/Cash.png'
import Blood from './assets/Blood.png'

const projects = [
  {
    title: "READ ME",
    description: "ReadMe is a responsive and visually engaging website built with HTML, CSS, and JavaScript. Designed to present essential information in a clear and interactive format, it features a user-friendly layout, smooth transitions, and a focus on readability. The site serves as a clean and effective platform for content sharing and digital presentation.",
    image: todo , 
    borderColor: "border-indigo-500",
    liveLink: "https://readmeee.netlify.app/",
  },
  {
    title: "PORTFOLIO",
    description: "This is my first personal portfolio website, built from scratch using HTML, CSS, and JavaScript. It features a clean, fully responsive layout, smooth scrolling navigation, and interactive elements that showcase my projects, skills, and background. The site reflects my foundational web development abilities and serves as a professional online presence.",
    image: port ,
    borderColor: "border-indigo-500",
    liveLink: "https://amrutha-gopalakrishnan.netlify.app/",
  },
  {
    title: "EDUCRAFT",
    description:"Educraft Empower is an AI-enhanced educational platform designed to deliver accessible and engaging learning experiences. It features structured video lessons, interactive tools, and intelligent content suggestions to support diverse learning styles. With a clean, intuitive interface and responsive design, the platform aims to make quality education available anytime, anywhere.",
    image: gdg ,
    borderColor: "border-indigo-500",
    liveLink: "https://educraft-empower.vercel.app/",
  },
  {
    title: "ASHA AI",
    description:"Asha AI is an intelligent career support platform that integrates an AI-powered chatbot for real-time career guidance, personalized recommendations, and resources. It features dynamic job listings with advanced filtering, user authentication, profile management, and a clean, responsive UI. Designed to empower users with instant insights and streamlined job discovery, Asha AI bridges technology and career development in a user-centric experience.",
    image: Asha ,
    borderColor: "border-indigo-500",
    liveLink: "https://ashaa.netlify.app/",
  },
  {
    title: "CASHCROW",
    description:"CashCrow is a modern web platform designed to revolutionize waste management by combining technology with incentives. The platform educates users about proper waste segregation, rewards sustainable practices, and connects communities with recycling solutions. With a clean and intuitive user interface, CashCrow promotes environmental responsibility and digital engagement through gamified experiences and informative content.",
    image: cash ,
    borderColor: "border-indigo-500",
    liveLink: "https://cashcrow.netlify.app/",
  },
  {
    title: "BLOOD BUMS",
    description: "BloodBurns is a bold and immersive fitness web platform designed to inspire and engage users through high-impact visuals and motivational content. The site promotes full-body workouts and personal training services with a powerful UI, compelling testimonials, and a call-to-action-driven layout. Featuring responsive design, smooth animations, and a striking 'Contact Us' section, BloodBurns delivers a premium digital experience for fitness enthusiasts and potential clients alike.",
    image: Blood ,
    borderColor: "border-indigo-500",
    liveLink: "https://bloodbums.netlify.app/",
  }
];


const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out', once: true });
      }, []);
    
  return (
    <section className="bg-black text-white py-16 px-4" id="projects" style={{backgroundImage: `url("/background.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "auto"}} >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        PROJECTS
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" data-aos="fade-up">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`border ${project.borderColor} rounded-xl p-4 bg-[#0e0e10] shadow-md transition-transform duration-300 hover:scale-[1.02]`}
          >
            <div className="relative group mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-44 object-cover"
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

            <h3 className="text-lg font-bold text-center text-white">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-2 font-2 text-justify">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// import React, { useEffect } from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import AOS from 'aos';
// import Asha from './assets/Asha.png';
// import gdg from './assets/gdg.png';
// import port from './assets/port.png';
// import todo from './assets/todo.png';

// const projects = [
//   {
//     title: "READ ME",
//     description:
//       "ReadMe is a clean and responsive website designed to showcase and share essential information or content interactively. Built with HTML, CSS, and JavaScript, it features a user-friendly layout and visually appealing design.",
//     image: todo,
//     borderColor: "border-indigo-500",
//     liveLink: "https://readmeee.netlify.app/",
//   },
//   {
//     title: "PORTFOLIO",
//     description:
//       "This was my first portfolio project, built using HTML, CSS, and JavaScript. It features a clean, responsive layout with smooth navigation and interactive elements.",
//     image: port,
//     borderColor: "border-indigo-500",
//     liveLink: "https://amrutha-gopalakrishnan.netlify.app/",
//   },
//   {
//     title: "EDUCRAFT",
//     description:
//       "Educraft Empower is an educational platform designed to provide accessible, AI-powered learning experiences with video lessons and interactive features.",
//     image: gdg,
//     borderColor: "border-indigo-500",
//     liveLink: "https://educraft-empower.vercel.app/",
//   },
//   {
//     title: "ASHA AI",
//     description:
//       "A career support platform featuring an AI-powered chatbot for real-time guidance, dynamic job listings with filters, user profile management, and secure login/signup system.",
//     image: Asha,
//     borderColor: "border-indigo-500",
//     liveLink: "https://asha-ai.vercel.app/",
//   },
// ];

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: 'ease-out', once: true });
//   }, []);

//   return (
//     <section className="bg-black text-white py-16 px-4 md:px-8" id="projects">
//       <h2 className="text-4xl font-bold text-center mb-10">PROJECTS</h2>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto" data-aos="fade-up">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={`border ${project.borderColor} rounded-xl p-4 bg-[#0e0e10] shadow-md transition-transform duration-300 hover:scale-[1.02]`}
//           >
//             <div className="relative group mb-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="rounded-lg w-full h-44 object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-4 rounded-lg">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
//                   title="Live Preview"
//                 >
//                   <FaExternalLinkAlt />
//                 </a>
//               </div>
//             </div>
//             <h3 className="text-lg font-bold text-center">{project.title}</h3>
//             <p className="text-sm text-gray-300 mt-2 text-justify">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


