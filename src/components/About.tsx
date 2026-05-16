"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { education, stats } from "@/lib/data";

const techKeywords = [
  ".NET Core", "React.js", "Azure", "TypeScript",
  "MS SQL", "CI/CD", "JWT", "REST APIs",
];

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Glow orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="section-label mb-3">About Me</p>
              <h2 className="text-5xl font-black leading-tight text-white">
                I Don&apos;t Just Write Code,
                <br />
                <span className="text-gradient">I Ship Products.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer from Rajasthan, India, currently building a
                production-grade Real Estate CRM at{" "}
                <span className="text-indigo-400 font-medium">Subh Sankalp Pvt Ltd</span>.
                My work handles actual business transactions — not just CRUD demos.
              </p>
              <p>
                My stack is .NET Core + React.js + Azure. I design REST APIs with JWT
                authentication, deploy via GitHub Actions CI/CD, and integrate cloud
                storage. I care deeply about clean architecture, performance, and code
                that doesn&apos;t need babysitting in production.
              </p>
              <p>
                Outside of shipping features, I&apos;ve mentored 100+ students as a Teaching
                Assistant at VIT Bhopal and maintained a 100+ day coding streak — because
                consistency beats talent when talent doesn&apos;t show up.
              </p>
            </div>

            {/* Education Cards */}
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="glass rounded-xl p-4 border-l-2"
                  style={{ borderLeftColor: edu.color }}
                >
                  <p className="font-semibold text-white text-sm">{edu.degree}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{edu.school}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-500">{edu.period}</span>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${edu.color}22`, color: edu.color }}
                    >
                      {edu.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Quote card */}
            <div className="gradient-border rounded-2xl p-6">
              <div className="text-5xl text-indigo-400 mb-3 leading-none">&ldquo;</div>
              <p className="text-lg text-gray-200 leading-relaxed font-medium">
                Currently building live production CRM handling real estate
                transactions — not just portfolio projects.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm text-green-400 font-medium">Currently active</span>
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-gray-300 text-sm">
                Open to <span className="text-white font-semibold">full-time roles</span> and
                <span className="text-white font-semibold"> freelance projects</span>
              </span>
            </div>

            {/* Tech keywords */}
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Tech I Work With</p>
              <div className="flex flex-wrap gap-2">
                {techKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="glass rounded-full px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors cursor-default"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-4xl font-black text-gradient mb-1">
                {statsInView ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
