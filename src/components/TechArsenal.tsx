"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryDots: Record<string, string> = {
  Frontend: "#22d3ee",
  Backend: "#6366f1",
  "Cloud & DevOps": "#f59e0b",
};

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
  const dotColor = categoryDots[category] || "#6366f1";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="mb-10"
    >
      {/* Category heading */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ background: dotColor }}
        />
        <h3 className="text-white font-semibold text-lg">{category}</h3>
      </div>

      {/* Skill grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {items.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: index * 0.1 + i * 0.05 }}
            className="skill-icon-card"
          >
            <span>{skill.icon}</span>
            <span>{skill.name}</span>
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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            Tech Arsenal
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </motion.div>

        {/* Categories */}
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
