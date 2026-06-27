"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GraduationCap } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms matching the homepage style
  const imageY1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#507dbd] selection:text-white overflow-x-hidden">
      <Header />
      
      <main ref={containerRef} className="flex-grow pt-24 md:pt-32 pb-24 md:pb-48 relative">
        
        {/* Polka Dot Background Pattern (Matching Academics.tsx) */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none z-0"></div>

        <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
          
          {/* Page Header */}
          <div className="mb-20 md:mb-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
            >
              Who We Are
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-slate-900 tracking-tighter leading-none"
            >
              About{" "}
              <span className="relative inline-block">
                <span className="font-bold text-[#507dbd]">Etech.</span>
                <svg
                  className="absolute -bottom-3 left-0 w-[105%] h-[20px] md:h-[24px] text-[#fbbf24]"
                  viewBox="0 0 200 24"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M5,16 Q100,0 195,14"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M25,22 Q100,10 170,19"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>
          </div>

          {/* 2-Column Story Layout (Matching the Homepage style) */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-32">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col"
            >
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tighter leading-tight mb-8">
                Odisha's emerging <br className="hidden lg:block"/><span className="font-bold text-[#507dbd]">educational group.</span>
              </h2>
              
              <div className="flex flex-col gap-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
                <p>
                  E-tech Vidyamandir is the flagship school of E-tech Educational Group. Over the past decade, E-Tech has garnered a strong reputation as one of the top CBSE schools of the state and definitely as the best residential school of the state because of its dedication and sheer focus on Academics and service to parents.
                </p>
                <p>
                  &ldquo;Others Good&rdquo; originates from its three core values: love, care, and respect. The school was started back in 2021.
                </p>
                <p>
                  Within the broad-based curriculum options offered, ample opportunities are provided to develop and assess critical, creative thinking skills, the flexibility of approach, the ability to work with and serve others, and the grit and fortitude in the face of challenges.
                </p>
              </div>
            </motion.div>

            {/* Right: Parallax Image + Floating Box */}
            <div className="lg:col-span-7 relative lg:pl-12 mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] sm:h-[600px] w-full overflow-hidden shadow-2xl"
              >
                {/* Parallax Image */}
                <motion.div style={{ y: imageY1 }} className="absolute inset-[-15%] w-[130%] h-[130%] z-0">
                  <Image 
                    src="/library.png"
                    alt="E-tech Vidyamandir Campus"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
              </motion.div>

              {/* Overlapping Info Box */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-10 sm:-bottom-16 -left-4 sm:left-4 lg:-left-4 bg-white p-8 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] w-[105%] lg:w-[100%] max-w-[500px] z-30"
              >
                {/* Rotating Star Badge */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-14 h-14 text-[#507dbd] bg-white rounded-full p-3 shadow-md flex items-center justify-center"
                >
                  <GraduationCap strokeWidth={1.5} className="w-full h-full" />
                </motion.div>

                <p className="text-slate-900 text-lg md:text-xl font-light italic leading-snug">
                  "E-tech fuels the desire to inculcate a lifelong habit of learning in students... To fuel the seed of learning, the school constantly motivates the students to believe in the motto <span className="font-bold text-[#507dbd]">Learning the treasure within.</span>"
                </p>
              </motion.div>
            </div>
          </div>

          {/* Pillars Section (Mission, Vision, Promise) */}
          <div className="mt-40 grid lg:grid-cols-3 gap-8">
            
            {/* Mission (Matching Academics Secondary Phase card style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 xl:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] relative"
            >
              <h3 className="text-3xl font-black tracking-tight mb-8 text-slate-900">
                Mission
              </h3>
              <p className="text-[10px] font-black uppercase tracking-widest mb-6 border-b border-slate-200 pb-4 text-slate-900">
                Our Core Objectives
              </p>
              <ul className="space-y-4">
                {[
                  "To provide a platform for every child to explore his/her potential.",
                  "Imparting modernized education with eastern values.",
                  "To create global leaders in every domain.",
                  "To be a pioneer in quality education.",
                  "To mold every child into a good human."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-light text-sm sm:text-base text-slate-600">
                    <div className="w-1.5 h-1.5 rotate-45 flex-shrink-0 bg-slate-900 mt-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision (Matching Academics Senior Secondary blue card style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#507dbd] p-10 xl:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative"
            >
              {/* Rotating Star Badge */}
              <motion.div 
                className="absolute top-8 right-8 w-16 h-16 opacity-10 pointer-events-none text-white"
              >
                <GraduationCap strokeWidth={1.5} className="w-full h-full" />
              </motion.div>

              <h3 className="text-3xl font-black tracking-tight mb-8 text-white">
                Vision
              </h3>
              <p className="text-[10px] font-black uppercase tracking-widest mb-6 border-b border-white/20 pb-4 text-white">
                Our Ultimate Goal
              </p>
              <p className="font-light text-base sm:text-lg leading-relaxed text-blue-50">
                To be a premier educational institution with a global presence that cultivates academic excellence, human excellence, social well-being, and all-around development through diversity, innovation, and transformation.
              </p>
            </motion.div>

            {/* Promise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-10 xl:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] relative"
            >
              <h3 className="text-3xl font-black tracking-tight mb-8 text-slate-900">
                Promise
              </h3>
              <p className="text-[10px] font-black uppercase tracking-widest mb-6 border-b border-slate-200 pb-4 text-slate-900">
                Our Guarantee
              </p>
              <ul className="space-y-6">
                {[
                  "360-degree metric driven growth for each child.",
                  "Global standards yet highly affordable.",
                  "Best service. No reasonable inconvenience."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-light text-sm sm:text-base text-slate-600">
                    <div className="w-5 h-5 flex-shrink-0 bg-slate-100 text-slate-400 font-bold text-xs flex items-center justify-center rounded-full mt-0.5">
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
