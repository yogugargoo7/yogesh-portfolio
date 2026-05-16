"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import TechArsenal from "@/components/TechArsenal";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <GitHubActivity />
      <TechArsenal />
      <Certifications />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
