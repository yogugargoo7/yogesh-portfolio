"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#0a0a12] border-y border-white/[0.04]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-label">Recognition</span>
            <h2 className="section-heading">Achievements</h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Competitions, teaching, and streaks that reflect consistency and commitment.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                className="card p-6"
              >
                <div className="text-3xl mb-4">{ach.icon}</div>
                <p className="font-bold text-white text-[1rem] leading-snug">{ach.title}</p>
                <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{ach.desc}</p>
                <span className="badge badge-purple mt-4">{ach.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
