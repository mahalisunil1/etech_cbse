"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Trophy, Activity } from "lucide-react";

export default function SportsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms matching the website style
  const imageY1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#507dbd] selection:text-white overflow-x-hidden">
      <Header />
      
      <main ref={containerRef} className="flex-grow pt-24 md:pt-32 pb-24 md:pb-48 relative">
        
        {/* Polka Dot Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none z-0"></div>

        <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
          
          {/* Page Header */}
          <div className="mb-20 md:mb-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
            >
              Extracurricular Excellence
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-slate-900 tracking-tighter leading-none"
            >
              Sports &{" "}
              <span className="relative inline-block">
                <span className="font-bold text-[#507dbd]">Wellness.</span>
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

          {/* 2-Column Story Layout (Matching the About style) */}
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
                Grooming Students at <br className="hidden lg:block"/><span className="font-bold text-[#507dbd]">E-tech Vidyamandir.</span>
              </h2>
              
              <div className="flex flex-col gap-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
                <p>
                  When it comes to Sports, all staff and students get all serious and competitive. We put a massive amount of focus on the Sports Training and Wellness of all the students.
                </p>
                <p>
                  In our Vidyalaya we are groomed across six major sports and games which include: <strong>Basketball, Volleyball, Cricket, Table Tennis, Kabaddi, and Kho-Kho.</strong>
                </p>
                <p>
                  The school boasts of a dedicated junior and senior team in each of these sports and takes immense pride in a wide range of state and national awards.
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
                    src="/images/1000589331.jpg"
                    alt="Students playing sports at E-tech"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
              </motion.div>

              {/* Overlapping Info Box with standard watermark icon */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-10 sm:-bottom-16 -left-4 sm:left-4 lg:-left-4 bg-white p-8 sm:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] w-[105%] lg:w-[100%] max-w-[500px] z-30"
              >
                {/* Static Watermark Icon (Matching Academics style) */}
                <div className="absolute -top-6 -right-6 w-14 h-14 text-[#507dbd] bg-white rounded-full p-3 shadow-md flex items-center justify-center">
                  <Trophy strokeWidth={1.5} className="w-full h-full" />
                </div>

                <p className="text-slate-900 text-lg md:text-xl font-light italic leading-snug">
                  "Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and <span className="font-bold text-[#507dbd]">creative intellectual activity.</span>"
                </p>
              </motion.div>
            </div>
          </div>

          {/* Programs Section */}
          <div className="mt-40 grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Sports Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 xl:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] relative overflow-hidden"
            >
              {/* Background Watermark Icon */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-[0.03] pointer-events-none text-slate-900">
                <Trophy strokeWidth={1.5} className="w-full h-full" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-6 text-slate-900">
                Sports Training
              </h3>
              <p className="text-[10px] font-black uppercase tracking-widest mb-8 border-b border-slate-200 pb-4 text-slate-900">
                Professional Coaching
              </p>
              <p className="text-base sm:text-lg font-light leading-relaxed mb-8 text-slate-600 relative z-10">
                The training is provided to all the children of E-Tech, and Junior and Senior teams are carefully selected for each of the core sports. In addition, proper and dedicated sports infrastructure is provided to support maximum physical development.
              </p>
              
              <ul className="grid grid-cols-2 gap-y-4 gap-x-6 relative z-10">
                {['Basketball', 'Volleyball', 'Cricket', 'Table Tennis', 'Kho-Kho', 'Kabaddi'].map((sport, i) => (
                  <motion.li 
                    key={sport}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 font-medium text-sm sm:text-base text-slate-900"
                  >
                    <div className="w-1.5 h-1.5 rotate-45 flex-shrink-0 bg-[#507dbd]"></div>
                    {sport}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Yoga & Meditation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#507dbd] p-10 xl:p-12 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative overflow-hidden"
            >
              {/* Background Watermark Icon */}
              <div className="absolute top-8 right-8 w-16 h-16 opacity-10 pointer-events-none text-white">
                <Activity strokeWidth={1.5} className="w-full h-full" />
              </div>

              <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-6 text-white">
                Yoga & Wellness
              </h3>
              <p className="text-[10px] font-black uppercase tracking-widest mb-8 border-b border-white/20 pb-4 text-white">
                Mind & Body Balance
              </p>
              <p className="font-light text-base sm:text-lg leading-relaxed text-blue-50 relative z-10 mb-8">
                In today's fast-paced academic environment, mental clarity is just as critical as physical agility. Yoga Classes and Meditation Intervals are provided seamlessly throughout the week to all children to ensure their mental and social wellbeing.
              </p>
              
              <ul className="space-y-4 relative z-10">
                {[
                  "Guided mindfulness and focus sessions.",
                  "Breathing techniques for exam stress relief.",
                  "Flexibility and core strength training."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-light text-sm sm:text-base text-blue-100">
                    <div className="w-1.5 h-1.5 rotate-45 flex-shrink-0 bg-white mt-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
          
          {/* Sports Photo Gallery */}
          <div className="mt-32">
            <h3 className="text-3xl font-light tracking-tighter mb-12 text-slate-900 text-center">
              Our <span className="font-bold text-[#507dbd]">Sporting Events.</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['1000589295.jpg', '1000589329.jpg', '1000589333.jpg'].map((img, i) => (
                <motion.div 
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative w-full aspect-video md:aspect-[4/5] overflow-hidden shadow-lg group"
                >
                  <Image 
                    src={`/images/${img}`} 
                    alt={`Sports Event ${i + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
