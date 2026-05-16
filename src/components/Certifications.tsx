"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#0a0a12] border-y border-white/[0.04]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-label">Credentials</span>
            <h2 className="section-heading">Certifications</h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xs leading-relaxed">
              Industry-recognized certifications validating expertise across full-stack and cloud development.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {certifications.map((group, i) => (
              <motion.div
                key={group.provider}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="card p-6"
              >
                <div className="flex items-start gap-5">
                  {/* Provider initial */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-lg flex-shrink-0"
                    style={{ background: group.color }}
                  >
                    {group.provider[0]}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      {group.provider}
                    </p>
                    {group.certs.map((cert, j) => (
                      <div key={j}>
                        <p className="font-semibold text-white text-[0.95rem] leading-snug">
                          {cert.name}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-600">{cert.year}</span>
                          <span className="text-green-400 text-xs font-semibold">
                            Certified ✓
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
