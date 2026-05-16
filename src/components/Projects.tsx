"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, personalInfo } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card overflow-hidden flex flex-col"
    >
      {/* Image Area */}
      <div className="h-48 relative overflow-hidden">
        <div
          className={`h-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
        >
          {/* Big background emoji */}
          <span className="text-8xl opacity-20 select-none">{project.bgPattern}</span>
          {/* Category badge top-left */}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
              {project.category}
            </span>
          </div>
          {/* Year badge top-right */}
          <div className="absolute top-3 right-3">
            <span className="text-xs text-white/70 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1">
              {project.year}
            </span>
          </div>
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111118] to-transparent" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Status badge */}
        <span
          className={
            project.status === "Production Live" ? "badge-green w-fit" : "badge-blue w-fit"
          }
        >
          {project.status === "Production Live" ? "🟢 " : "✅ "}
          {project.status}
        </span>
        <h3 className="font-bold text-white text-lg mt-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm mt-4 rounded-xl justify-center"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="section-label">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Latest Projects
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary rounded-xl text-sm flex-shrink-0"
          >
            View GitHub ↗
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
