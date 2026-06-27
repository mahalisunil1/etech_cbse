"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const images = [
    { src: "/images/1000589353.jpg", alt: "Prize Distribution Ceremony", label: "Awards & Recognition" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#507dbd] selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-24 relative overflow-x-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none z-0"></div>

        <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="mb-16 md:mb-24 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
            >
              Capturing Moments
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light text-slate-900 tracking-tighter leading-none"
            >
              Photo <span className="relative inline-block">
                <span className="font-bold text-[#507dbd]">Gallery.</span>
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                className="group relative w-full aspect-square md:aspect-[4/5] bg-white shadow-xl overflow-hidden border border-slate-100"
              >
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-[#fbbf24] font-bold text-xs uppercase tracking-widest mb-2">{img.label}</p>
                    <h3 className="text-white font-medium text-lg leading-tight">{img.alt}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
