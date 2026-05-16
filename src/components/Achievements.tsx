"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Achievements
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-4xl">{ach.icon}</div>
              <h3 className="font-bold text-white mt-3 text-base leading-snug">{ach.title}</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">{ach.desc}</p>
              <p className="text-xs text-indigo-400 mt-2">{ach.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
