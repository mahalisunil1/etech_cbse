"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const facilities = [
    {
      id: "tech",
      title: "Advanced Innovation Lab",
      desc: "State-of-the-art robotics, 3D printing, and high-end computing arrays dedicated to the Senior Science track.",
      img: "/facility_tech.png",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      id: "library",
      title: "The Grand Library",
      desc: "A massive, naturally lit architectural marvel housing thousands of volumes for deep academic research.",
      img: "/facility_library.png",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: "hostel",
      title: "Premium Residences",
      desc: "Architecturally designed hostel lounges providing a calm, focused environment for our boarding students.",
      img: "/facility_hostel.png",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: "sports",
      title: "Indoor Sports Complex",
      desc: "Professional-grade athletic facilities including hardwood basketball courts and modern stadium lighting.",
      img: "/facility_sports.png",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % facilities.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="facilities" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-slate-100 relative">
      <div className="w-[90vw] max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#507dbd] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
            >
              Infrastructure
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 tracking-tighter leading-none"
            >
              Our <span className="font-bold">Campus.</span>
            </motion.h2>
          </div>
          
          <div className="flex items-center gap-6">
            {/* View All Button (Desktop & Mobile) */}
            <a 
              href="#facilities" 
              className="inline-flex items-center gap-3 bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300 px-6 py-3 sm:px-8 sm:py-4 font-bold uppercase tracking-widest text-[10px] sm:text-xs group"
            >
              View All
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Mobile Navigation Controls */}
            <div className="flex md:hidden gap-2">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 bg-[#507dbd] flex items-center justify-center text-white hover:bg-slate-900 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP VIEW: MASONRY GRID (Hidden on Mobile) */}
        {/* ========================================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-4 md:auto-rows-[minmax(250px,1fr)] lg:auto-rows-[minmax(350px,1fr)] gap-4 lg:gap-6"
        >
          {facilities.map((fac) => (
            <motion.div 
              key={fac.id}
              variants={itemVariants}
              className={`group relative overflow-hidden bg-slate-900 shadow-xl ${fac.className}`}
            >
              {/* Background Image */}
              <Image 
                src={fac.img}
                alt={fac.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              {/* Dark Gradient Default */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* Default Title (Hidden on hover) */}
              <h3 className="absolute bottom-6 left-6 text-white font-bold tracking-widest uppercase text-xs sm:text-sm transition-opacity duration-300 group-hover:opacity-0 z-10">
                {fac.title}
              </h3>

              {/* Hover Overlay Panel */}
              <div className="absolute inset-x-0 bottom-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#507dbd] p-6 sm:p-8 lg:p-10 flex flex-col justify-end z-20">
                <h3 className="text-white font-black text-2xl sm:text-3xl tracking-tight mb-2">
                  {fac.title}
                </h3>
                <p className="text-blue-100 font-light text-sm sm:text-base leading-relaxed max-w-md">
                  {fac.desc}
                </p>
                <div className="w-10 h-10 mt-6 bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <svg className="w-4 h-4 text-[#507dbd] -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ========================================= */}
        {/* MOBILE VIEW: SLIDER CAROUSEL (Hidden on Desktop) */}
        {/* ========================================= */}
        <div className="block md:hidden relative w-full h-[500px] overflow-hidden shadow-2xl bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Image */}
              <div className="relative flex-1">
                <Image 
                  src={facilities[currentIndex].img}
                  alt={facilities[currentIndex].title}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Text Content overlaying the bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#507dbd] font-black tracking-widest text-xs uppercase w-6 text-center">
                    0{currentIndex + 1}
                  </span>
                  
                  {/* Auto-Carousel Progress Bar */}
                  <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
                    <motion.div 
                      key={currentIndex}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-[#507dbd]"
                    />
                  </div>

                  <span className="text-white/40 font-black tracking-widest text-xs uppercase w-6 text-center">
                    0{facilities.length}
                  </span>
                </div>
                
                <h3 className="text-white font-black text-3xl tracking-tight mb-3">
                  {facilities[currentIndex].title}
                </h3>
                <p className="text-blue-100 font-light text-sm leading-relaxed mb-4">
                  {facilities[currentIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}