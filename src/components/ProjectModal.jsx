import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  const hasLiveLink = project?.liveLink && project.liveLink !== "...";

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-[14px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 70, scale: 0.96 }}
            transition={{ duration: 0.45, type: "spring", damping: 22, stiffness: 180 }}
            className="fixed left-1/2 top-1/2 z-[100] w-[min(96vw,74rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border border-white/10 bg-[#07090f] shadow-[0_30px_140px_rgba(0,0,0,0.72)]"
          >
            <div className="max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 z-20 border-b border-white/10 bg-[#07090f]/90 px-5 py-4 backdrop-blur-2xl sm:px-7 sm:py-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                        {project.title}
                      </h2>
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.32em] text-zinc-300">
                        {project.category}
                      </span>
                    </div>
              
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {hasLiveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                      >
                        Visit
                        <FaExternalLinkAlt size={12} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-400">
                        Visit unavailable
                      </span>
                    )}

                    <button
                      onClick={onClose}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white hover:text-black"
                      aria-label="Close project modal"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="border-b border-white/10 lg:border-b-0 lg:border-r lg:border-r-white/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/30 to-transparent" />
                    <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-4 py-1 text-[11px] uppercase tracking-[0.32em] text-white/90 backdrop-blur-md">
                      Detail view
                    </div>
                  </div>

                  <div className="space-y-12 px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-10">
                    <section>
                      <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
                        Overview
                      </p>
                      <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-200 sm:text-xl">
                        {project.description}
                      </p>
                    </section>

                    <section>
                      <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
                        Highlights
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {(project.features || []).map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                          >
                            <FaCheckCircle className="shrink-0 text-white/80" />
                            <span className="text-sm leading-6 text-zinc-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                <aside className="px-5 py-7 sm:px-7 sm:py-8 lg:px-6 lg:py-10">
                  <div className="sticky top-6 space-y-6">
                    <section className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6">
                      <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
                        Tech Stack
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {(project.tech || []).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-[#0b0d14] px-4 py-2 text-sm text-zinc-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section className="rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6">
                      <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
                        Action
                      </p>
                      <p className="mt-4 text-sm leading-6 text-zinc-400">
                        Open the live build if it is available, or keep this modal
                        open to scan the stack and feature summary.
                      </p>

                      {hasLiveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02]"
                        >
                          Visit Live Project
                          <FaExternalLinkAlt size={12} />
                        </a>
                      ) : (
                        <div className="mt-5 flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4 font-semibold text-zinc-400">
                          Live link unavailable
                        </div>
                      )}
                    </section>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}