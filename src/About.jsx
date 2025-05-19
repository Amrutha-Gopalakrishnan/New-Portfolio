// // src/components/About.jsx
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: 'ease-out', once: true });
//   }, []);

//   return (
//     <div  id="about">
//          <h2 className="text-3xl font-bold text-center  pt-5 text-white bg-black ">ABOUT</h2>
//     <section className=" bg-black text-white flex items-center justify-center px-4 py-12">

//       <div
//         className="max-w-6xl w-full grid md:grid-cols-2 justify-center items-center"
//         data-aos="fade-up"
//       >

//         {/* Left Side Text */}
//         <div className="ms-3">
//           <p className="text-gray-200 mb-1">&lt;ABOUT ME /&gt;</p>
//           <p className="text-gray-300 text-justify leading-relaxed">
//             A passionate Frontend Developer and UI/UX Designer with a deep love for clean code and creative design. I specialize in building responsive, intuitive, and user-centered web experiences that not only look good but also perform seamlessly.
//             <br /><br />
//             With a strong foundation in both development and design, I enjoy crafting interfaces that strike the perfect balance between aesthetics and functionality. Whether it’s designing smooth user flows or coding dynamic components, I approach each project with precision, creativity, and a user-first mindset.
//             <br /><br />
//             Outside of work, I’m constantly exploring new trends in tech and design, always eager to learn, grow, and take on challenges that push my boundaries.
//           </p>
//         </div>

//         {/* Right Side Image */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src="./me.jpg"
//             alt="About"
//             className="w-75 h-100 object-cover rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default About;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <div id="about">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pt-6 pb-2 text-white bg-black">
        ABOUT
      </h2>

      <section className="bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20">
        <div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          data-aos="fade-up"
        >
          {/* Left Side Text */}
          <div className="md:pl-4">
            <p className="text-purple-400 mb-2 text-sm sm:text-base">&lt;ABOUT ME /&gt;</p>
            <p className="text-gray-300 text-justify text-sm sm:text-base leading-relaxed tracking-wide">
              A passionate Frontend Developer and UI/UX Designer with a deep love for clean code and creative design.
              I specialize in building responsive, intuitive, and user-centered web experiences that not only look good
              but also perform seamlessly.
              <br /><br />
              With a strong foundation in both development and design, I enjoy crafting interfaces that strike the perfect
              balance between aesthetics and functionality. Whether it’s designing smooth user flows or coding dynamic
              components, I approach each project with precision, creativity, and a user-first mindset.
              <br /><br />
              Outside of work, I’m constantly exploring new trends in tech and design, always eager to learn, grow, and
              take on challenges that push my boundaries.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="./me.jpg"
              alt="About"
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
