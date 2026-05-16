"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-12 border-y border-white/[0.05] bg-[#0a0a12]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
              className="bg-[#0a0a12] p-8 flex flex-col gap-2"
            >
              <span className="stat-value text-gradient">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent mt-1 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
