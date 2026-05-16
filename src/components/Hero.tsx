"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo } from "@/lib/data";

const techPills = [".NET Core", "React.js", "Azure", "C#"];

const floatingBadges = [
  { emoji: "🔷", name: ".NET Core", top: "10%", left: "5%", delay: 0 },
  { emoji: "⚛️", name: "React.js", top: "15%", right: "8%", delay: 0.3 },
  { emoji: "☁️", name: "Azure", bottom: "20%", left: "2%", delay: 0.6 },
  { emoji: "💜", name: "C#", bottom: "15%", right: "5%", delay: 0.9 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Split headline — last word gets gradient
  const words = personalInfo.headline.split(" ");
  const lastWord = words.pop();
  const restWords = words.join(" ");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none z-0 opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-0 opacity-20" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-[55%_45%] gap-12 items-center w-full relative z-10">
        {/* LEFT: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              Open to Full-time Roles
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black leading-tight text-white"
          >
            {restWords}{" "}
            <span className="text-gradient">{lastWord}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-xl leading-relaxed"
          >
            {personalInfo.subheadline}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary rounded-xl"
            >
              View Projects
            </button>
            <a
              href={personalInfo.resume}
              className="btn-secondary rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motion.div>

          {/* Tech pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="tech-badge float"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              >
                {pill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Avatar (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center relative h-[420px]"
        >
          {/* Floating tech badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + badge.delay, duration: 0.4 }}
              className="absolute z-20 float"
              style={{
                top: badge.top,
                left: (badge as { left?: string }).left,
                right: (badge as { right?: string }).right,
                bottom: badge.bottom,
                animationDelay: `${badge.delay}s`,
              }}
            >
              <div className="flex items-center gap-2 bg-[#111118] border border-white/10 rounded-xl px-3 py-2 backdrop-blur-sm">
                <span className="text-lg">{badge.emoji}</span>
                <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{badge.name}</span>
              </div>
            </motion.div>
          ))}

          {/* Avatar rings + center */}
          <div className="relative flex items-center justify-center w-72 h-72">
            {/* Outer rotating dashed ring */}
            <div
              className="absolute inset-0 rounded-full spin-slow"
              style={{
                border: "2px dashed rgba(99,102,241,0.3)",
                borderRadius: "50%",
              }}
            />
            {/* Counter-rotating gradient ring */}
            <div
              className="absolute inset-4 rounded-full counter-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, #6366f1 25%, #a855f7 50%, #22d3ee 75%, transparent 100%)",
                padding: "2px",
                borderRadius: "50%",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
            </div>
            {/* Center avatar circle */}
            <div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
              <span className="text-7xl font-black text-white select-none">YG</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-5 text-gray-600"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
