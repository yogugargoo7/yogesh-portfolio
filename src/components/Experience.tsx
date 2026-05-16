"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences, education } from "@/lib/data";

type Experience = (typeof experiences)[0];
type Education = (typeof education)[0];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card p-6"
      style={{ borderLeft: `3px solid ${exp.color}` }}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-bold text-white text-xl">{exp.title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-gray-400 text-sm">{exp.company}</span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${exp.color}22`, color: exp.color }}
            >
              {exp.type}
            </span>
            <span className="text-gray-500 text-xs">{exp.location}</span>
          </div>
        </div>
        <span className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full flex-shrink-0">
          {exp.period}
        </span>
      </div>

      {/* Bullet points */}
      <ul className="flex flex-col gap-2 mb-4">
        {exp.bullets.map((point, j) => (
          <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: exp.color }}
            />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tech.map((t) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function EducationCard({ edu, index }: { edu: Education; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-5"
      style={{ borderLeft: `3px solid ${edu.color}` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-white">{edu.degree}</p>
          <p className="text-gray-400 text-sm mt-0.5">{edu.school}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-gray-500">{edu.period}</span>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${edu.color}22`, color: edu.color }}
          >
            {edu.grade}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const expTitleRef = useRef(null);
  const eduTitleRef = useRef(null);
  const expInView = useInView(expTitleRef, { once: true });
  const eduInView = useInView(eduTitleRef, { once: true });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Experience Section */}
        <motion.div
          ref={expTitleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={expInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-label">Career</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Work Experience
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="flex flex-col gap-5 mb-20">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          ref={eduTitleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={eduInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="section-label">Education</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Academic Background
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
