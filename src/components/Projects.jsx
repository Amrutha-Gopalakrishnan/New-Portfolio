import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import CursorFollower from "./CursorFollower";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "./projectsData";

export default function Projects() {
    const [selected, setSelected] = useState(null);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 lg:px-24"
        >
            <CursorFollower />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-14 lg:mb-16 space-y-6"
                >
                    <motion.span
                        animate={{ opacity: blink ? 1 : 0.35 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-sm text-green-400"
                    >
                        <motion.span
                            animate={{ opacity: blink ? 1 : 0 }}
                            transition={{ duration: 0.4 }}
                            className="h-2 w-2 bg-green-400 rounded-full"
                        />
                        PROJECTS
                    </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-snug">
                Projects that actually shipped in realtime 
          </h2>

   <p className="mt-6 text-gray-400 text-base sm:text-lg">
            Click projects to view in detail
          </p>

                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title ?? index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            viewport={{ once: true, margin: "-80px" }}
                        >
                            <ProjectCard project={project} onClick={() => setSelected(project)} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}