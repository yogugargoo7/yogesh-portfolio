"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/lib/data";

const categoryLabels = [
  "Web Development",
  "CRM Systems",
  "Cloud & DevOps",
  "API Design",
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-[#07070c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div ref={ref} className="flex items-end justify-between mb-16">
          <div>
            <span className="section-label">What I Do</span>
            <h2 className="section-heading">Services</h2>
            <p className="text-gray-400 text-base max-w-md mt-3">
              End-to-end solutions from architecture design to production deployment.
            </p>
          </div>
          <span className="hidden lg:block text-gray-700 text-5xl font-black select-none leading-none">
            04
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="card p-8 group"
            >
              {/* Top row */}
              <div className="flex justify-between items-start">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${service.color}15` }}
                >
                  {service.icon}
                </div>
                <span className="text-gray-700 group-hover:text-indigo-400 transition-colors duration-200 text-lg">
                  →
                </span>
              </div>

              <h3 className="font-semibold text-white text-[1.1rem] mt-5 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-[1.75]">{service.description}</p>

              {/* Category footer */}
              <div className="flex items-center gap-2 mt-6">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: service.color }}
                />
                <span className="text-xs text-gray-600">{categoryLabels[i]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
