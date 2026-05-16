"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GitHubActivity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Contributions</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            GitHub Activity
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card p-6 overflow-hidden"
        >
          {/* Contribution chart */}
          <img
            src="https://ghchart.rshah.org/6366f1/yogugargoo7"
            alt="GitHub Contributions"
            className="w-full rounded-lg opacity-90"
          />

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=yogugargoo7&show_icons=true&theme=tokyonight&hide_border=true&bg_color=111118&title_color=6366f1&icon_color=a855f7&text_color=94a3b8"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
            <img
              src="https://streak-stats.demolab.com?user=yogugargoo7&theme=tokyonight&hide_border=true&background=111118"
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
