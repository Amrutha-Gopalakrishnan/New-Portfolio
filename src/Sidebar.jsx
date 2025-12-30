import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { id: "home", label: "Introduction", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
  { id: "achievements", label: "Achievements", icon: <FaTrophy /> },
  { id: "publications", label: "Publications", icon: <FaBook /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

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

  const NavLinks = ({ mobile = false }) => (
    <ul className="mt-8 flex flex-col gap-2">
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => mobile && setOpen(false)}
            className={`group flex items-center gap-4 px-4 py-3 rounded-lg transition
              ${
                active === item.id
                  ? "bg-emerald-500 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
          >
            <span className="text-lg">{item.icon}</span>

            {/* Label */}
            <span
              className={`text-sm font-medium whitespace-nowrap transition-all duration-300
                ${
                  mobile
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
            >
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-16 hover:w-56 group bg-[#0b0b0b] border-r border-white/5 px-2 py-4 z-50 transition-all duration-300">
        <div className="w-full">
          <h1 className="text-white text-xl font-semibold tracking-tight px-2 mb-6">
            <span className="text-emerald-400 text-3xl">A</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
              mrutha-dev
            </span>
          </h1>

          <NavLinks />
        </div>
      </aside>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-lg bg-black/70 border border-white/10 text-white"
      >
        <FaBars />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed left-0 top-0 h-screen w-72 bg-[#0b0b0b] z-50 px-5 py-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-white text-lg font-semibold">
                  Amrutha<span className="text-emerald-400">-dev</span>
                </h1>
                <button onClick={() => setOpen(false)} className="text-white">
                  <FaTimes />
                </button>
              </div>

              <NavLinks mobile />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
