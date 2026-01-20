// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaHome,
//   FaUser,
//   FaCode,
//   FaProjectDiagram,
//   FaBriefcase,
//   FaGraduationCap,
//   FaEnvelope,
//   FaTrophy,
//   FaCertificate,
//   FaBook,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// const navItems = [
//   { id: "home", label: "Introduction", icon: <FaHome /> },
//   { id: "about", label: "About", icon: <FaUser /> },
//   { id: "skills", label: "Skills", icon: <FaCode /> },
//   { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
//   { id: "experience", label: "Experience", icon: <FaBriefcase /> },
//   { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
//   { id: "achievements", label: "Achievements", icon: <FaTrophy /> },
//   { id: "publications", label: "Publications", icon: <FaBook /> },
//   { id: "education", label: "Education", icon: <FaGraduationCap /> },
//   { id: "contact", label: "Contact", icon: <FaEnvelope /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("home");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const offset = window.scrollY + 200;
//       navItems.forEach(({ id }) => {
//         const section = document.getElementById(id);
//         if (
//           section &&
//           offset >= section.offsetTop &&
//           offset < section.offsetTop + section.offsetHeight
//         ) {
//           setActive(id);
//         }
//       });
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const NavLinks = ({ mobile = false }) => (
//     <ul className="mt-8 flex flex-col gap-2">
//       {navItems.map((item) => (
//         <li key={item.id}>
//           <a
//             href={`#${item.id}`}
//             onClick={() => mobile && setOpen(false)}
//             className={`group flex items-center gap-4 px-4 py-3 rounded-lg transition
//               ${
//                 active === item.id
//                   ? "bg-emerald-500 text-white"
//                   : "text-gray-400 hover:bg-white/5 hover:text-white"
//               }`}
//           >
//             <span className="text-lg">{item.icon}</span>

//             {/* Label */}
//             <span
//               className={`text-sm font-medium whitespace-nowrap transition-all duration-300
//                 ${
//                   mobile
//                     ? "opacity-100"
//                     : "opacity-0 group-hover:opacity-100"
//                 }`}
//             >
//               {item.label}
//             </span>
//           </a>
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:flex fixed left-0 top-0 h-screen w-16 hover:w-56 group bg-[#0b0b0b] border-r border-white/5 px-2 py-4 z-50 transition-all duration-300">
//         <div className="w-full">
//           <h1 className="text-white text-xl font-semibold tracking-tight px-2 mb-6">
//             <span className="text-emerald-400 text-3xl">A</span>
//             <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
//               mrutha-dev
//             </span>
//           </h1>

//           <NavLinks />
//         </div>
//       </aside>

//       {/* Mobile Hamburger */}
//       <button
//         onClick={() => setOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-lg bg-black/70 border border-white/10 text-white"
//       >
//         <FaBars />
//       </button>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black z-40"
//             />

//             <motion.aside
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", stiffness: 260, damping: 25 }}
//               className="fixed left-0 top-0 h-screen w-72 bg-[#0b0b0b] z-50 px-5 py-6"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h1 className="text-white text-lg font-semibold">
//                   Amrutha<span className="text-emerald-400">-dev</span>
//                 </h1>
//                 <button onClick={() => setOpen(false)} className="text-white">
//                   <FaTimes />
//                 </button>
//               </div>

//               <NavLinks mobile />
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaTrophy,
  FaCertificate,
  FaBook,
} from "react-icons/fa";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { cn } from "./lib/utils";

const navItems = [
  { id: "home", title: "Introduction", icon: <FaHome />, href: "#home" },
  { id: "about", title: "About", icon: <FaUser />, href: "#about" },
  { id: "skills", title: "Skills", icon: <FaCode />, href: "#skills" },
  { id: "projects", title: "Projects", icon: <FaProjectDiagram />, href: "#projects" },
  { id: "experience", title: "Experience", icon: <FaBriefcase />, href: "#experience" },
  { id: "certifications", title: "Certifications", icon: <FaCertificate />, href: "#certifications" },
  { id: "achievements", title: "Achievements", icon: <FaTrophy />, href: "#achievements" },
  { id: "publications", title: "Publications", icon: <FaBook />, href: "#publications" },
  { id: "education", title: "Education", icon: <FaGraduationCap />, href: "#education" },
  { id: "contact", title: "Contact", icon: <FaEnvelope />, href: "#contact" },
];

// Desktop Floating Dock Icon
const IconContainer = ({ mouseX, title, icon, href, active }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors",
          active 
            ? "bg-emerald-500 text-white" 
            : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 w-fit rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs whitespace-nowrap text-white shadow-xl"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};

// Desktop Floating Dock
const FloatingDockDesktop = ({ items, active }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
        "hidden md:flex h-16 items-end gap-4 rounded-2xl bg-black/80 backdrop-blur-xl px-4 pb-3",
        "border border-white/10 shadow-2xl"
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.id}
          {...item}
          active={active === item.id}
        />
      ))}
    </motion.div>
  );
};

// Mobile Floating Dock
const FloatingDockMobile = ({ items, active }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 block md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full right-0 mb-3 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-xl border shadow-lg",
                    active === item.id
                      ? "bg-emerald-500 text-white border-emerald-400"
                      : "bg-neutral-900/90 text-gray-400 border-white/10"
                  )}
                >
                  <div className="text-xl">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-xl border shadow-xl transition-colors",
          open 
            ? "bg-emerald-500 text-white border-emerald-400" 
            : "bg-neutral-900/90 text-gray-400 border-white/10"
        )}
      >
        <IconLayoutNavbarCollapse className={cn(
          "h-6 w-6 transition-transform",
          open && "rotate-180"
        )} />
      </motion.button>
    </div>
  );
};

// Main Sidebar Component
const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 200;
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (
          section &&
          offset >= section.offsetTop &&
          offset < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <FloatingDockDesktop items={navItems} active={active} />
      <FloatingDockMobile items={navItems} active={active} />
    </>
  );
};

export default Sidebar;
