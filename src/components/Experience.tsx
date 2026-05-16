"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-3">Work History</p>
          <h2 className="text-5xl font-black text-white">
            Professional{" "}
            <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-px" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ExperienceCard
                  key={i}
                  exp={exp}
                  index={i}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
  isLeft,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative lg:grid lg:grid-cols-2 gap-8 items-center`}>
      {/* Timeline dot — desktop */}
      <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 items-center justify-center">
        <div
          className="w-4 h-4 rounded-full border-2 relative"
          style={{ borderColor: exp.color, background: "#050508" }}
        >
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-40"
            style={{ background: exp.color }}
          />
        </div>
      </div>

      {/* Empty spacer for right cards */}
      {!isLeft && <div className="hidden lg:block" />}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.05 }}
        className={`glass gradient-border rounded-2xl p-6 border-l-2 ${isLeft ? "lg:col-start-1" : "lg:col-start-2"}`}
        style={{ borderLeftColor: exp.color }}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <p className="text-gray-400 text-sm mt-0.5">
              {exp.company} &mdash; {exp.location}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="glass rounded-full px-3 py-1 text-xs text-gray-300 whitespace-nowrap">
              {exp.period}
            </span>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${exp.color}22`, color: exp.color }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2 mb-4">
          {exp.description.map((point, j) => (
            <li key={j} className="text-sm text-gray-400 flex gap-2 leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full glass"
              style={{ color: exp.color, borderColor: `${exp.color}40` }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Empty spacer for left cards */}
      {isLeft && <div className="hidden lg:block" />}
    </div>
  );
}
