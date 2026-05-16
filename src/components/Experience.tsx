"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 bg-[#07070c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-20">
          {/* LEFT — Work Experience */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="section-label">Career</span>
            <h2 className="section-heading">Experience</h2>

            {/* Timeline */}
            <div className="flex flex-col gap-8 mt-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className="timeline-item"
                >
                  {/* Timeline line */}
                  <div className="timeline-line-wrap">
                    <div
                      className="timeline-dot"
                      style={{ borderColor: exp.color }}
                    />
                    {i < experiences.length - 1 && (
                      <div className="timeline-connector" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    {/* Title + Period */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-white text-[1.05rem] leading-tight">
                        {exp.title}
                      </span>
                      <span className="badge badge-purple text-xs flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Company + location */}
                    <p className="text-gray-500 text-sm mt-1">
                      {exp.company} · {exp.location}
                    </p>

                    {/* Type badge */}
                    <span className="badge badge-blue mt-2">{exp.type}</span>

                    {/* Bullets */}
                    <div className="mt-4 flex flex-col gap-2">
                      {exp.bullets.map((bullet, j) => (
                        <div key={j} className="flex gap-2 text-sm text-gray-500 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Education */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="section-label">Academic</span>
            <h2 className="section-heading">Education</h2>

            <div className="flex flex-col gap-5 mt-10">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={rightInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  className="card p-6"
                  style={{ borderLeftColor: edu.color, borderLeftWidth: "3px" }}
                >
                  <p className="font-semibold text-white text-[0.95rem] leading-snug">
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{edu.school}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-600">{edu.period}</span>
                    <span className="badge badge-green">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
