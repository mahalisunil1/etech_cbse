"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Achievers() {
  const achievers = [
    {
      id: 1,
      name: "Aanya Sharma",
      title: "CBSE Class 12th Topper",
      score: "99.8%",
      badge: "1st",
      img: "/achiever_1.png",
      delay: 0.1,
    },
    {
      id: 2,
      name: "Rahul Verma",
      title: "IIT-JEE Advanced",
      score: "AIR 45",
      badge: "2nd",
      img: "/achiever_2.png",
      delay: 0.2,
    },
    {
      id: 3,
      name: "Priya Desai",
      title: "NEET UG Examination",
      score: "AIR 12",
      badge: "3rd",
      img: "/achiever_3.png",
      delay: 0.3,
    }
  ];

  const RankBadge = ({ rank }: { rank: string }) => {
    // Gold, Silver, and Bronze theme colors
    const colors = {
      "1st": { fill: "#fef08a", stroke: "#eab308", text: "#a16207" },
      "2nd": { fill: "#f1f5f9", stroke: "#cbd5e1", text: "#475569" },
      "3rd": { fill: "#ffedd5", stroke: "#fdba74", text: "#c2410c" },
    };
    const theme = colors[rank as keyof typeof colors] || colors["1st"];

    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm group-hover:drop-shadow-md transition-all duration-500">
        <path d="M 0 0 L 100 0 L 0 100 Z" fill={theme.fill} />
        {/* Decorative inner border matching the triangle shape */}
        <path d="M 5 5 L 85 5 L 5 85 Z" fill="none" stroke={theme.stroke} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <text x="32" y="40" fontSize="26" fontWeight="900" fill={theme.text} textAnchor="middle" style={{ fontFamily: "inherit" }}>
          {rank}
        </text>
      </svg>
    );
  };

  return (
    <section id="achievers" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 tracking-tighter leading-none mb-6"
          >
            Our <span className="font-bold">Achievers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-light text-sm sm:text-base leading-relaxed"
          >
            A legacy of unprecedented academic success and global recognition.
          </motion.p>
        </div>

        {/* Topper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-24">
          {achievers.map((achiever) => (
            <motion.div
              key={achiever.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: achiever.delay, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-100 shadow-xl p-6 sm:p-8 flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              
              <div className="relative w-full mb-8">
                {/* Triangular SVG Badge matching the clipping perfectly */}
                <div className="absolute top-0 left-0 z-0">
                  <RankBadge rank={achiever.badge} />
                </div>

                {/* Square Portrait with Enlarged Top-Left Clip */}
                <div 
                  className="w-full aspect-square overflow-hidden relative bg-slate-100 z-10"
                  style={{ clipPath: "polygon(100px 0, 100% 0, 100% 100%, 0 100%, 0 100px)" }}
                >
                  <Image 
                    src={achiever.img}
                    alt={achiever.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                </div>
              </div>
              
              {/* Massive Score Block */}
              <div className="bg-slate-50 w-full py-4 mb-6 border border-slate-100 group-hover:border-[#507dbd]/30 transition-colors duration-300">
                <h4 className="text-4xl font-black text-[#507dbd] tracking-tighter">{achiever.score}</h4>
              </div>
              
              {/* Name & Title */}
              <div className="flex flex-col items-center">
                <h3 className="text-slate-900 font-bold text-2xl tracking-tight mb-2">{achiever.name}</h3>
                <p className="text-slate-500 font-medium text-xs uppercase tracking-widest">{achiever.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a 
            href="#achievers" 
            className="inline-flex items-center gap-3 bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300 px-8 py-4 font-bold uppercase tracking-widest text-xs group"
          >
            View All Toppers
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
