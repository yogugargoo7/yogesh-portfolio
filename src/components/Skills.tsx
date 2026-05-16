"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categoryGradients: Record<string, string> = {
  Backend: "from-indigo-500 to-purple-600",
  Frontend: "from-cyan-400 to-blue-500",
  "Cloud & DevOps": "from-amber-400 to-orange-500",
  Databases: "from-emerald-400 to-teal-500",
};

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="bg-white/5 h-1.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const gradient = categoryGradients[skill.category] || "from-indigo-500 to-purple-600";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass gradient-border rounded-2xl p-6 flex flex-col gap-5"
    >
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="font-bold text-white text-lg">{skill.category}</h3>
        </div>
        <div className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${gradient}`} />
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4">
        {skill.items.map((item) => (
          <SkillBar
            key={item.name}
            name={item.name}
            level={item.level}
            color={skill.color}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Technical Expertise</p>
          <h2 className="text-5xl font-black text-white">
            Skills &{" "}
            <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Production-tested skills across the full stack — from backend APIs to cloud deployments.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
