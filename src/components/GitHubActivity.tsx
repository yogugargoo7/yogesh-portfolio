"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GitHubActivity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#0a0a12] border-y border-white/[0.04]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-label">Open Source</span>
            <h2 className="section-heading">GitHub Activity</h2>
            <p className="text-gray-500 text-sm mt-2 mb-8">
              Consistent daily contributions across projects
            </p>

            {/* Contribution chart */}
            <div className="card p-5 overflow-hidden">
              <img
                src="https://ghchart.rshah.org/6366f1/yogugargoo7"
                alt="GitHub Contribution Chart"
                className="w-full rounded-lg opacity-80"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Stats card */}
            <div className="card p-5 overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api?username=yogugargoo7&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f0f18&title_color=818cf8&icon_color=a78bfa&text_color=94a3b8"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>

            {/* Streak card */}
            <div className="card p-5 mt-4 overflow-hidden">
              <img
                src="https://streak-stats.demolab.com?user=yogugargoo7&theme=tokyonight&hide_border=true&background=0f0f18"
                alt="GitHub Streak"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
