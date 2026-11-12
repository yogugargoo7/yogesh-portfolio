"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#6366f1",
  },
  {
    icon: "📱",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`,
    color: "#22d3ee",
  },
  {
    icon: "📍",
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "#a855f7",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/yogesh-garg-980517232",
    href: personalInfo.linkedin,
    color: "#0ea5e9",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#07070c]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="section-heading">
              {"Let's Work\nTogether".split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-sm leading-relaxed">
              Open to full-time roles, freelance projects, and collaborations.
              Drop a message and I&apos;ll get back within 24 hours.
            </p>

            {/* Contact info list */}
            <div className="mt-10 flex flex-col gap-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-indigo-400 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium truncate">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="card p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  className="flex flex-col items-center gap-4 py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="btn-ghost mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <h3 className="font-bold text-white text-xl mb-6">Send a Message</h3>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="form-input"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-input h-36 resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3.5 justify-center text-base font-semibold mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
