"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#050508] text-white">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}
