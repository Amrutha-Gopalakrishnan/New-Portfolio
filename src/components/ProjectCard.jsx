import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export default function ProjectCard({ project, onClick }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 180,
    damping: 20,
  });

  function handleMouseMove(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      data-cursor="hover"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        y: -10,
        transition: {
          type: "spring",
          stiffness: 220,
          damping: 20,
        },
      }}
      className="group relative cursor-pointer"
    >
      <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-amber-400/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#090b10] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-white/90 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition group-hover:scale-105"
          >
            <FaArrowRight />
          </motion.button>

          <div className="absolute bottom-0 left-0 w-full p-6">
            <motion.h2
              whileHover={{ x: 4 }}
              className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
            >
              {project.title}
            </motion.h2>

          </div>
        </div>
      </div>
    </motion.article>
  );
}