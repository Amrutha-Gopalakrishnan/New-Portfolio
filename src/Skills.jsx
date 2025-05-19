
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const Skills = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: 'ease-out', once: true });
//   }, []);

//   return (
//     <div className=" text-white py-12 px-6" id='skills'>
//       <h2 className="text-4xl font-bold text-center mb-9">SKILLS</h2>

//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16" data-aos="fade-up">
//         <div className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300">
//           <h3 className="text-xl font-bold mb-4 text-center">Frontend Developer</h3>
//           <p className="text-gray-300 text-sm text-justify">
//             As a frontend developer, I craft responsive and user-friendly web interfaces using HTML, CSS, Bootstrap, and ReactJS. I focus on building clean, efficient code that ensures seamless performance across all devices while bringing designs to life with precision and functionality.
//           </p>
//         </div>

//         <div className="border  border-pink-400  rounded-xl p-6 bg-black hover:shadow-lg transition duration-300">
//           <h3 className="text-xl font-bold mb-4 text-center">UI/UX Designer</h3>
//           <p className="text-gray-300 text-sm text-justify">
//             With a strong eye for detail, I design intuitive and engaging user experiences. Using tools like Figma and Canva, I create wireframes, prototypes, and visual designs that are both user-centric and aesthetically appealing, ensuring smooth interaction and usability.
//           </p>
//         </div>
//       </div>

//       <h2 className="text-3xl font-bold text-center mb-8">TECH STACK & TOOLS</h2>

//       <div className="border border-yellow-400 rounded-xl p-4 max-w-5xl mx-auto mb-15" data-aos="fade-up">
//         <div className="grid  grid-cols-4 md:grid-cols-4 gap-6 justify-items-center text-3xl text-white ">
         
//          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./html.jpg" // or any icon image
//                 alt="HTML"
//                 title="HTML"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">HTML</p>
//             </div>

//              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./css.jpeg"
//                 alt="CSS"
//                 title="CSS"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">CSS</p>
//             </div>

//              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./boot.jpeg"
//                 alt="Bootstrap CSS"
//                 title="Bootstrap CSS"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Bootstrap CSS</p>
//             </div>

//              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./js.logo.webp" 
//                 alt="Javascript"
//                 title="Javascript"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Javascript</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./react.png" 
//                 alt="React JS"
//                 title="React JS"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">React JS</p>
//             </div>


//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./vscode.png" 
//                 alt="VS Code"
//                 title="VS Code"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">VS Code</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./python.png" 
//                 alt="Python"
//                 title="Python"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Python</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./github.png" 
//                 alt="GitHub"
//                 title="GitHub"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">GitHub</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./Canva.png" 
//                 alt="Canva"
//                 title="Canva"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Canva</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./figma.png" 
//                 alt="Figma"
//                 title="Figma"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Figma</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./vercel.png" 
//                 alt="Vercel"
//                 title="Vercel"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Vercel</p>
//             </div>

//                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./netlify.png" 
//                 alt="Netlify"
//                 title="Netlify"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Netlify</p>
//             </div>

//                <div className="flex items-center ms-185 justify-center gap-2 px-4 py-2 rounded-xl bg-[#1b2236] shadow-md">
//             <img
//                 src="./postman.web.webp" 
//                 alt="Postman"
//                 title="Postman"
//                 className="w-6 h-6 object-contain"
//             />
//             <p className="text-white text-sm font-medium">Postman</p>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <div className="text-white py-12 px-4 sm:px-6 md:px-8 lg:px-16" id="skills">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">SKILLS</h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16" data-aos="fade-up">
        <div className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Frontend Developer</h3>
          <p className="text-gray-300 text-sm sm:text-base text-justify leading-relaxed">
            As a frontend developer, I craft responsive and user-friendly web interfaces using HTML, CSS, Bootstrap, and ReactJS. I focus on building clean, efficient code that ensures seamless performance across all devices while bringing designs to life with precision and functionality.
          </p>
        </div>

        <div className="border border-pink-400 rounded-xl p-6 bg-black hover:shadow-lg transition duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">UI/UX Designer</h3>
          <p className="text-gray-300 text-sm sm:text-base text-justify leading-relaxed">
            With a strong eye for detail, I design intuitive and engaging user experiences. Using tools like Figma and Canva, I create wireframes, prototypes, and visual designs that are both user-centric and aesthetically appealing, ensuring smooth interaction and usability.
          </p>
        </div>
      </div>

      {/* Tech Stack Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">TECH STACK & TOOLS</h2>

      {/* Tech Stack Grid */}
      <div className="border border-yellow-400 rounded-xl p-6 sm:p-8 max-w-6xl mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {[
            { img: './html.jpg', name: 'HTML' },
            { img: './css.jpeg', name: 'CSS' },
            { img: './boot.jpeg', name: 'Bootstrap CSS' },
            { img: './js.logo.webp', name: 'Javascript' },
            { img: './react.png', name: 'React JS' },
            { img: './vscode.png', name: 'VS Code' },
            { img: './python.png', name: 'Python' },
            { img: './github.png', name: 'GitHub' },
            { img: './Canva.png', name: 'Canva' },
            { img: './figma.png', name: 'Figma' },
            { img: './vercel.png', name: 'Vercel' },
            { img: './netlify.png', name: 'Netlify' },
            { img: './postman.web.webp', name: 'Postman' },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#1b2236] shadow-md w-full justify-center"
            >
              <img
                src={tech.img}
                alt={tech.name}
                title={tech.name}
                className="w-6 h-6 object-contain"
              />
              <p className="text-white text-xs sm:text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
