"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo } from "@/lib/data";

const techPills = ["C# / .NET Core", "React.js", "Azure", "MS SQL Server"];

const floatingBadges = [
  { emoji: "🔷", name: ".NET Core", className: "top-4 left-4", anim: "float-1" },
  { emoji: "⚛️", name: "React.js", className: "top-4 right-8", anim: "float-2" },
  { emoji: "☁️", name: "Azure", className: "bottom-8 left-4", anim: "float-3" },
  { emoji: "💜", name: "C#", className: "bottom-4 right-8", anim: "float-1" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full grid lg:grid-cols-[1fr_420px] gap-20 items-center">
        {/* LEFT — Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* "Open to roles" badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 w-fit mb-8">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5">
              Open to Full-time Roles
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.1] tracking-tight text-white mb-6"
          >
            Building
            <br />
            Production-Ready
            <br />
            <span className="text-gradient">Web Applications.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg text-gray-400 text-lg leading-relaxed mt-6"
          >
            {personalInfo.subheadline}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Download CV
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-ghost btn-icon"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost btn-icon"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motion.div>

          {/* Tech stack chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-6">
            {techPills.map((pill) => (
              <span key={pill} className="tech-pill">
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mt-14 text-xs text-gray-600"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-base leading-none"
            >
              ↓
            </motion.span>
            <span className="uppercase tracking-widest">Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Avatar cluster (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="hidden lg:block relative w-full h-[420px]"
        >
          {/* Glow behind avatar */}
          <div className="absolute inset-0 m-auto w-48 h-48 bg-indigo-600/15 blur-3xl rounded-full pointer-events-none" />

          {/* Outer ring (counter-spin) */}
          <div className="absolute inset-0 m-auto w-72 h-72 rounded-full border border-white/[0.04] counter-spin" />

          {/* Rotating dashed ring */}
          <div className="absolute inset-0 m-auto w-56 h-56 rounded-full border border-dashed border-indigo-500/25 spin-slow" />

          {/* Center avatar box */}
          <div className="absolute inset-0 m-auto w-48 h-48 rounded-[28px] bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center">
            <span className="text-6xl font-black text-gradient select-none">YG</span>
          </div>

          {/* Floating tech badges */}
          {floatingBadges.map((badge, i) => (
            <div
              key={i}
              className={`absolute ${badge.className} ${badge.anim}`}
            >
              <div className="card px-3 py-2 flex items-center gap-2 text-xs text-white font-medium">
                <span>{badge.emoji}</span>
                <span>{badge.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
