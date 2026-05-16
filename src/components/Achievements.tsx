"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements, certifications } from "@/lib/data";

export default function Achievements() {
  const titleRef = useRef(null);
  const certRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const certInView = useInView(certRef, { once: true, margin: "-60px" });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Recognition</p>
          <h2 className="text-5xl font-black text-white">
            Achievements &{" "}
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        {/* Achievement cards 2x2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={titleInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-hover flex flex-col gap-3 text-center"
            >
              <div className="text-5xl">{ach.icon}</div>
              <h3 className="font-bold text-xl text-white">{ach.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{ach.desc}</p>
              <span className="text-xs text-gray-600 glass rounded-full px-3 py-1 w-fit mx-auto">
                {ach.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div ref={certRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={certInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-6 text-center"
          >
            Certifications
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={certInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass gradient-border rounded-xl p-5 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg font-black"
                  style={{ background: `${cert.color}22`, color: cert.color }}
                >
                  {cert.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{cert.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{cert.issuer}</p>
                </div>
                <span
                  className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: `${cert.color}22`, color: cert.color }}
                >
                  Certified
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
