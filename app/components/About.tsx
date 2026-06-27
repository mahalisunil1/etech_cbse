"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 lg:py-48 bg-white relative overflow-hidden">
      
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none"></div>

      <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Informational Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col z-20"
          >
            <span className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">
              About Our Institution
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tighter leading-none mb-8">
              A legacy of academic excellence and{" "}
              <span className="relative inline-block">
                <span className="font-bold">holistic growth.</span>
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
            </h2>
            
            <div className="flex flex-col gap-4 text-slate-600 font-light text-base md:text-lg leading-relaxed mb-12 max-w-xl">
              <p>
                E-tech Vidyamandir is the flagship school of E-tech Educational Group, Odisha's emerging educational group. Over the past decade, E-Tech has garnered a strong reputation as one of the top CBSE schools of the state and definitely as the best residential school of the state because of its dedication and sheer focus on Academics and service to parents. &ldquo;Others Good&rdquo; originates from its three core values: love, care, and respect. The school was started back in 2021.
              </p>
              <p>
                Within the broad-based curriculum options offered, ample opportunities are provided to develop and assess critical, creative thinking skills, the flexibility of approach, the ability to work with and serve others, and the grit and fortitude in the face of challenges.
              </p>
              <p>
                A kaleidoscope of extra-curricular activities supports the institution's education programme to create the ultimate E-tech product - strong, confident individuals and active lifelong learners.
              </p>
              <p>
                E-tech fuels the desire to inculcate a lifelong habit of learning in students, imperative for holistic development. To fuel the seed of learning, the school constantly motivates the students to believe in the motto &ldquo;Learning the treasure within.&rdquo;
              </p>
            </div>

            <Link href="#admissions" className="inline-flex items-center gap-4 bg-slate-900 text-white hover:bg-[#507dbd] transition-colors duration-300 px-8 py-5 font-bold uppercase tracking-widest text-xs sm:text-sm w-fit mb-16 shadow-xl group">
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: Parallax Image + Glassmorphic Stats */}
          <div className="lg:col-span-7 relative lg:pl-12 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-[500px] sm:h-[700px] w-full overflow-hidden shadow-2xl"
            >
              {/* Parallax Image */}
              <motion.div style={{ y: imageY }} className="absolute inset-[-15%] w-[130%] h-[130%]">
                <Image 
                  src="/library.png"
                  alt="Students studying in library"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Glassmorphic Stats Block overlapping the image */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 sm:-bottom-16 lg:bottom-16 -left-4 sm:left-4 lg:-left-16 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-6 sm:p-10 lg:p-12 w-[105%] lg:w-[110%] max-w-[550px] z-30"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-8 divide-x divide-slate-300/50">
                <div className="pl-0 text-center">
                  <h4 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">15+</h4>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-600 font-bold">Years of Trust</p>
                </div>
                <div className="pl-4 sm:pl-8 text-center">
                  <h4 className="text-3xl sm:text-4xl font-black text-[#507dbd] mb-2">100%</h4>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-600 font-bold">Board Results</p>
                </div>
                <div className="pl-4 sm:pl-8 text-center">
                  <h4 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">30+</h4>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-600 font-bold">State Toppers</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}