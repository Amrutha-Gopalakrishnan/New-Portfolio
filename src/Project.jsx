import React, { useEffect } from "react";
import {  FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import Asha from './assets/Asha.png'
import gdg from './assets/gdg.png'
import port from './assets/port.png'
import todo from './assets/todo.png'

const projects = [
  {
    title: "READ ME",
    description:
      "ReadMe is a clean and responsive website designed to showcase and share essential information or content interactively. Built with HTML, CSS, and JavaScript, it features a user-friendly layout and visually appealing design.",
    image: todo , 
    borderColor: "border-indigo-500",
    
    liveLink: "https://readmeee.netlify.app/",
  },
  {
    title: "PORTFOLIO",
    description:
      "This was my first portfolio project, built using HTML, CSS, and JavaScript. It features a clean, responsive layout with smooth navigation and interactive elements.",
    image: port ,
    borderColor: "border-indigo-500",
    
    liveLink: "https://amrutha-gopalakrishnan.netlify.app/",
  },
  {
    title: "EDUCRAFT",
    description:
      "Educraft Empower is an educational platform designed to provide accessible, AI-powered learning experiences with video lessons and interactive features.",
    image: gdg ,
    borderColor: "border-indigo-500",
    
    liveLink: "https://educraft-empower.vercel.app/",
  },
  {
    title: "ASHA AI",
    description:
      "A career support platform featuring an AI-powered chatbot for real-time guidance, dynamic job listings with filters, user profile management, and secure login/signup system.",
    image: Asha ,
    borderColor: "border-indigo-500",

    liveLink: "https://asha-ai.vercel.app/",
  },
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


