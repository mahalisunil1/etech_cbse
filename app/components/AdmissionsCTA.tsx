"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function AdmissionsCTA() {
  const CornerBadge = ({ text }: { text: string }) => {
    return (
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500">
        <path d="M 0 0 L 100 0 L 0 100 Z" fill="#507dbd" /> 
        <path d="M 5 5 L 85 5 L 5 85 Z" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <text x="32" y="40" fontSize="22" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ fontFamily: "inherit" }}>
          {text}
        </text>
      </svg>
    );
  };

  return (
    <section id="admissions" className="py-24 md:py-32 lg:py-48 bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[90vw] max-w-6xl mx-auto flex flex-col gap-4">
        
        {/* Main Headline Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-slate-900 text-white p-12 md:p-20 lg:p-24 relative overflow-hidden group"
          style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%, 0 80px)" }}
        >
          {/* Corner Badge SVG (Triangle) */}
          <div className="absolute top-0 left-0 z-10 pointer-events-none">
            <CornerBadge text="2026" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
            <div>
              <span className="text-[#507dbd] font-bold tracking-widest uppercase text-xs mb-6 block">
                Admissions Open
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.05] max-w-2xl">
                Shape your <br className="hidden md:block" /><span className="font-bold">legacy.</span>
              </h2>
            </div>
            <p className="text-slate-400 font-light text-base md:text-lg max-w-sm leading-relaxed pb-2">
              Join a community dedicated to academic rigor and brilliant innovation. Your journey to excellence starts here.
            </p>
          </div>
        </motion.div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Action 1: Download Prospectus */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-slate-50 border border-slate-100 p-10 md:p-14 hover:bg-[#507dbd] text-slate-900 hover:text-white group transition-colors duration-500 flex flex-col justify-between aspect-[2/1] sm:aspect-auto sm:min-h-[250px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Minimalist Circle SVG */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none z-0">
              <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-slate-200 opacity-50 group-hover:text-white group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-[1.6] ease-out">
                <circle cx="100" cy="100" r="100" fill="currentColor" />
              </svg>
            </div>

            <Download className="w-8 h-8 text-slate-300 group-hover:text-white/90 group-hover:-translate-y-2 transition-all duration-500 relative z-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-500">Download Prospectus</h3>
              <p className="text-slate-500 group-hover:text-white/80 font-light text-sm transition-colors duration-500">
                Explore our comprehensive curriculum and facilities.
              </p>
            </div>
          </motion.a>

          {/* Action 2: Begin Application */}
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-slate-50 border border-slate-100 p-10 md:p-14 hover:bg-slate-900 text-slate-900 hover:text-white group transition-colors duration-500 flex flex-col justify-between aspect-[2/1] sm:aspect-auto sm:min-h-[250px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Minimalist Circle SVG */}
            <div className="absolute -top-20 -right-20 pointer-events-none z-0">
              <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="text-slate-200 opacity-50 group-hover:text-white group-hover:opacity-[0.04] transition-all duration-700 transform group-hover:scale-[1.6] ease-out">
                <circle cx="120" cy="120" r="120" fill="currentColor" />
              </svg>
            </div>

            <ArrowRight className="w-8 h-8 text-slate-300 group-hover:text-white/90 group-hover:translate-x-2 transition-all duration-500 relative z-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-500">Begin Application</h3>
              <p className="text-slate-500 group-hover:text-white/80 font-light text-sm transition-colors duration-500">
                Start your official enrollment process for 2026-27.
              </p>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
}