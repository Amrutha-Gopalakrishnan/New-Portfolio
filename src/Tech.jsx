// // TechStack.jsx
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const techTools = [
//   { name: "HTML", icon: "./html.jpg" },
//   { name: "CSS", icon: "./css.jpeg" },
//   { name: "Bootstrap CSS", icon: "./boot.jpeg" },
//   { name: "Javascript", icon: "./js.logo.webp" },
//   { name: "React JS", icon: "./react.png" },
//   { name: "VS Code", icon: "./vscode.png" },
//   { name: "Python", icon: "./python.png" },
//   { name: "GitHub", icon: "./github.png" },
//   { name: "Canva", icon: "./Canva.png" },
//   { name: "Figma", icon: "./figma.png" },
//   { name: "Vercel", icon: "./vercel.png" },
//   { name: "Netlify", icon: "./netlify.png" },
//   { name: "Postman", icon: "./postman.web.webp" },
// ];

// const TechStack = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: 'ease-out', once: true });
//   }, []);

//   return (
//     <div className="text-white pb-16 bg-black">
//       <h2 className="text-3xl font-bold text-center pt-10 mb-8">TECH STACK & TOOLS</h2>

//       <div
//         className="border border-yellow-400 rounded-xl p-4 max-w-5xl mx-auto"
//         data-aos="fade-up"
//       >
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center align-center">
//           {techTools.map((tool, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md"
//             >
//               <img
//                 src={tool.icon}
//                 alt={tool.name}
//                 title={tool.name}
//                 className="w-6 h-6 object-contain"
//               />
//               <p className="text-white text-sm font-medium">{tool.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const techTools = [
  { name: "HTML", icon: "./html.jpg" },
  { name: "CSS", icon: "./css.jpeg" },
  { name: "Bootstrap CSS", icon: "./boot.jpeg" },
  { name: "Javascript", icon: "./js.logo.webp" },
  { name: "React JS", icon: "./react.png" },
  { name: "VS Code", icon: "./vscode.png" },
  { name: "Python", icon: "./python.png" },
  { name: "GitHub", icon: "./github.png" },
  { name: "Canva", icon: "./Canva.png" },
  { name: "Figma", icon: "./figma.png" },
  { name: "Vercel", icon: "./vercel.png" },
  { name: "Netlify", icon: "./netlify.png" },
  // Exclude Postman from this main list
];

const postmanTool = { name: "Postman", icon: "./postman.web.webp" };

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <div className="text-white pb-16 bg-black">
      <h2 className="text-3xl font-bold text-center pt-10 mb-8">TECH STACK & TOOLS</h2>

      <div className="border border-yellow-400 rounded-xl p-4 max-w-5xl mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {techTools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                title={tool.name}
                className="w-6 h-6 object-contain"
              />
              <p className="text-white text-sm font-medium">{tool.name}</p>
            </div>
          ))}

          {/* Postman - Centered as a full-width row */}
          <div className="col-span-full flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
              <img
                src={postmanTool.icon}
                alt={postmanTool.name}
                title={postmanTool.name}
                className="w-6 h-6 object-contain"
              />
              <p className="text-white text-sm font-medium">{postmanTool.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
