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
    display: personalInfo.email,
  },
  {
    icon: "📱",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`,
    display: personalInfo.phone,
  },
  {
    icon: "📍",
    label: "Location",
    value: personalInfo.location,
    href: null,
    display: personalInfo.location,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/yogesh-garg-dev",
    href: personalInfo.linkedin,
    display: "Connect on LinkedIn",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 outline-none w-full transition-colors placeholder:text-gray-600 text-sm";

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="text-5xl font-black text-white">
            Let&apos;s{" "}
            <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to hire me? Drop a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <p className="text-gray-400 leading-relaxed">
              I&apos;m currently open to full-time roles and freelance contracts. Whether it&apos;s
              building a full product from scratch or joining an existing team — let&apos;s talk.
            </p>

            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass rounded-xl p-4 flex items-center gap-4 card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-indigo-400 transition-colors truncate block"
                    >
                      {item.display}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium truncate">{item.display}</p>
                  )}
                </div>
                {item.href && (
                  <span className="ml-auto text-gray-600 group-hover:text-indigo-400 transition-colors text-sm">↗</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-2xl p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className="btn-outline rounded-xl px-6 py-2.5 text-sm mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-gray-500 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary rounded-xl w-full py-4 text-lg font-semibold relative z-10 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
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
