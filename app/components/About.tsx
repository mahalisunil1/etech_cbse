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
              A legacy of academic excellence and <span className="font-bold">holistic growth.</span>
            </h2>
            
            <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              eTech Vidyamandir is a premier CBSE institution dedicated to shaping tomorrow's innovators through a rigorous curriculum spanning Grades 8 through 12, featuring a highly specialized Science-exclusive senior secondary program.
            </p>

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