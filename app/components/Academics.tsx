"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, GraduationCap } from "lucide-react";
import WaveDivider from "./WaveDivider";

export default function Academics() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms for the two image headers
  const imageY1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  const phases = [
    {
      id: "secondary",
      phase: "Secondary Phase",
      grades: "Grades 8 — 10",
      description: "A comprehensive foundational curriculum adhering strictly to CBSE guidelines. We focus intensely on building strong analytical, linguistic, and mathematical skills to prepare students for the rigorous demands of specialized higher education.",
      subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Second Language'],
      bgColor: "bg-white",
      textColor: "text-slate-900",
      accentColor: "text-[#507dbd]",
      subTextColor: "text-slate-600",
      borderColor: "border-slate-200",
      boxColor: "bg-slate-900"
    },
    {
      id: "senior",
      phase: "Senior Secondary",
      grades: "Grades 11 — 12 • Science Exclusive",
      description: "A highly specialized, Science-only track engineered for absolute mastery. We provide intensive, targeted preparation for competitive exams (JEE/NEET) alongside the core CBSE curriculum, fully supported by state-of-the-art laboratory facilities.",
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science'],
      bgColor: "bg-[#507dbd]",
      textColor: "text-white",
      accentColor: "text-blue-200",
      subTextColor: "text-blue-50",
      borderColor: "border-white/20",
      boxColor: "bg-white"
    }
  ];

  return (
    <section id="academics" ref={containerRef} className="pt-20 pb-36 lg:pb-48 bg-slate-50 relative overflow-hidden">
      
      {/* Polka Dot Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none"></div>

      <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Academic Pathways
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-light text-slate-900 tracking-tighter leading-none"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="font-bold">Curriculum.</span>
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
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                />
                <motion.path
                  d="M25,22 Q100,10 170,19"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                />
              </svg>
            </span>
          </motion.h2>
        </div>

        {/* 2-Column Parallax Overlap Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {phases.map((data, idx) => {
            const bgImage = idx === 0 
              ? "/secondary_classroom.png" 
              : "/senior_science_lab.png"; 

            const parallaxY = idx === 0 ? imageY1 : imageY2;

            return (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col relative"
              >
                {/* Column Header (Image Background with Parallax) */}
                <div className="relative h-80 sm:h-96 lg:h-[450px] overflow-hidden shadow-xl">
                  {/* Parallax Image Wrapper */}
                  <motion.div style={{ y: parallaxY }} className="absolute inset-[-20%] w-[140%] h-[140%] z-0">
                    <Image 
                      src={bgImage}
                      alt={data.phase}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                  
                  {/* Header Text */}
                  <div className="absolute bottom-24 sm:bottom-28 lg:bottom-32 left-8 sm:left-12 z-20">
                    <h3 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 text-white">
                      {data.phase}
                    </h3>
                    <p className={`font-bold tracking-widest uppercase text-xs sm:text-sm ${idx === 1 ? 'text-blue-300' : 'text-blue-200'}`}>
                      {data.grades}
                    </p>
                  </div>
                </div>

                {/* Overlapping Column Body */}
                <div className={`relative z-30 -mt-16 sm:-mt-20 mx-4 sm:mx-8 mb-4 sm:mb-8 flex-1 p-8 sm:p-10 xl:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] ${data.bgColor}`}>
                  
                  {/* Rotating Star Badge */}
                  <motion.div 
                    className={`absolute top-8 right-8 w-14 h-14 opacity-10 pointer-events-none ${idx === 1 ? 'text-white' : 'text-slate-900'}`}
                  >
                    <GraduationCap strokeWidth={1.5} className="w-full h-full" />
                  </motion.div>

                  <p className={`text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-12 relative z-10 ${data.subTextColor}`}>
                    {data.description}
                  </p>
                  
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-6 border-b pb-4 ${data.borderColor} ${data.textColor}`}>
                      {idx === 1 ? 'Specialized Streams' : 'Core Disciplines'}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {data.subjects.map((sub, i) => (
                        <motion.li 
                          key={sub}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className={`flex items-center gap-4 font-medium text-sm sm:text-base ${data.textColor}`}
                        >
                          <div className={`w-1.5 h-1.5 rotate-45 flex-shrink-0 ${data.boxColor}`}></div>
                          {sub}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
      <WaveDivider fillColor="text-slate-100 fill-current" accentColor="text-slate-200 fill-current" />
    </section>
  );
}