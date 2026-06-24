"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed w-full z-50 top-0 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
      {/* Top Section: Logo & Email */}
      <div className="w-[90vw] max-w-[90vw] mx-auto flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-4 group">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20">
            <Image 
              src="/logo.png" 
              alt="eTech Vidyamandir" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="font-black text-3xl md:text-4xl tracking-tight text-slate-900 leading-none">
                eTech
              </span>
              <span className="font-bold text-lg md:text-xl tracking-wide text-[#507dbd] uppercase">
                Vidyamandir
              </span>
            </div>
            <div className="mt-1 flex items-center">
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 italic">
                "Empowering the innovators of tomorrow."
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Right Side: CBSE & Email */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* CBSE Affiliation */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Affiliated to
              </span>
              <span className="block text-sm font-black text-slate-800 tracking-tight">
                CBSE BOARD
              </span>
            </div>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/cbse-central-board-of-secondary-education7240-removebg-preview.png"
                alt="CBSE Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-px h-10 bg-slate-200"></div>

          {/* Email Contact */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#507dbd]" />
            <a href="mailto:info@etechvidyamandir.com" className="text-slate-800 font-bold text-sm hover:text-[#507dbd] transition-colors">
              info@etechvidyamandir.com
            </a>
          </div>
          
        </div>
      </div>

      {/* Bottom Section: Links (Overlapping Glassmorphism) */}
      <div className="absolute top-full left-0 w-full bg-slate-900/40 backdrop-blur-md border-b border-white/10 shadow-sm overflow-hidden">
        <div className="w-[90vw] max-w-[90vw] mx-auto flex items-center justify-between h-14 overflow-x-auto scrollbar-hide">
          
          <nav className="flex items-center gap-6 md:gap-10 shrink-0">
            {['About', 'Academics', 'Facilities'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (i * 0.1), ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-200 font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] hover:text-white transition-colors drop-shadow-md"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="shrink-0 ml-8"
          >
            <Link 
              href="#admissions" 
              className="text-slate-900 bg-white hover:bg-slate-100 transition-colors font-bold text-[10px] md:text-xs uppercase tracking-widest px-6 md:px-8 py-2 rounded-full shadow-lg"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}