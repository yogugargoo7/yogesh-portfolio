"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Certifications
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((group, i) => (
            <motion.div
              key={group.provider}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card p-6"
              style={{ borderLeft: `3px solid ${group.color}` }}
            >
              {/* Provider */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black"
                  style={{ background: `${group.color}18`, color: group.color }}
                >
                  {group.provider[0]}
                </div>
                <span className="font-bold text-white">{group.provider}</span>
              </div>

              {/* Certs list */}
              <div className="flex flex-col gap-3">
                {group.certs.map((cert, j) => (
                  <div key={j} className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white text-sm leading-snug">{cert.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{cert.year}</p>
                    </div>
                    <span className="text-green-400 text-xs font-medium whitespace-nowrap flex-shrink-0 mt-0.5">
                      Verified ✓
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
