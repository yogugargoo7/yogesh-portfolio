"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, personalInfo } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="card overflow-hidden flex flex-col"
    >
      {/* Image area */}
      <div className={`project-img bg-gradient-to-br ${project.gradient}`}>
        <span className="big-emoji">{project.bgPattern}</span>
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="badge badge-purple">{project.category}</span>
        </div>
        {/* Year badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs text-white/50 bg-black/30 px-2 py-0.5 rounded-full">
            {project.year}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title + Status row */}
        <div className="flex justify-between items-center mb-3 gap-2">
          <h3 className="font-bold text-white text-[1.05rem] leading-tight">
            {project.title}
          </h3>
          <span
            className={`badge flex-shrink-0 ${
              project.status === "Production Live" ? "badge-green" : "badge-blue"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.05] pt-4 flex justify-between items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
          >
            View on GitHub →
          </a>
          <span className="text-xs text-gray-700">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-28 bg-[#07070c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">Portfolio</span>
            <h2 className="section-heading">Latest Projects</h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-shrink-0"
          >
            View GitHub →
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
