"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <Tilt
        glareEnable
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareMaxOpacity={0.1}
        scale={1.02}
        transitionSpeed={400}
        className="h-full"
      >
        <div className="glass rounded-2xl overflow-hidden h-full flex flex-col group">
          {/* Gradient top bar */}
          <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Status + year */}
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  project.status === "Production Live"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-blue-500/15 text-blue-400"
                }`}
              >
                {project.status === "Production Live" ? "🟢 " : "✅ "}
                {project.status}
              </span>
              <span className="text-xs text-gray-600">{project.year}</span>
            </div>

            {/* Title + subtitle */}
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-0.5">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="glass text-xs px-2.5 py-1 rounded-full text-gray-300">
                  {h}
                </span>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: `${project.color}18`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bottom link */}
            <div className="pt-2 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline rounded-xl px-4 py-2 text-sm inline-flex items-center gap-2 font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="text-5xl font-black text-white">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real-world applications shipped to production — not just demos or tutorials.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
