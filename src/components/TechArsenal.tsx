"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryColors = ["#6366f1", "#22d3ee", "#f59e0b"];

function SkillCategory({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; icon: string }[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const color = categoryColors[index] ?? "#6366f1";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="mb-10"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: color }}
        />
        <span className="text-sm font-semibold text-white uppercase tracking-widest">
          {category}
        </span>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {items.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.04 }}
            className="skill-card"
          >
            <span className="icon">{skill.icon}</span>
            <span className="name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechArsenal() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="skills" className="py-28 bg-[#07070c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <span className="section-label">Skills</span>
            <h2 className="section-heading">Tech Arsenal</h2>
            <p className="text-gray-500 text-sm mt-2">
              Technologies I work with day-to-day in production environments.
            </p>
          </motion.div>
        </div>

        {/* Skill categories */}
        {Object.entries(skills).map(([category, items], i) => (
          <SkillCategory
            key={category}
            category={category}
            items={items}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
