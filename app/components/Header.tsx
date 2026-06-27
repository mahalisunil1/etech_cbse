"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: 'Home page', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Academic', href: '#academic' },
  { name: 'Staff details', href: '#staff-details' },
  { name: 'Transport', href: '#transport' },
  { name: 'Library', href: '#library' },
  { name: 'Sports', href: '/sports' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact us', href: '#contact-us' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 top-0 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
      {/* Top Section: Logo & Email & Mobile Menu Button */}
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

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -mr-2 text-slate-800 hover:text-[#507dbd] transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-8 h-8" />
        </button>

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

      {/* Bottom Section: Links (Desktop only) */}
      <div className="hidden lg:block absolute top-full left-0 w-full bg-slate-900/40 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="w-[95vw] md:w-[90vw] max-w-[90vw] mx-auto flex flex-wrap items-center justify-center md:justify-between py-3 gap-y-4 gap-x-4">
          
          <nav className="flex items-center justify-center flex-wrap gap-x-4 gap-y-3 md:gap-x-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (i * 0.1), ease: [0.2, 0.65, 0.3, 0.9] }}
              >
                <Link 
                  href={item.href} 
                  className="text-slate-200 font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] hover:text-white transition-colors drop-shadow-md whitespace-nowrap"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="shrink-0"
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

      {/* Mobile Side Drawer */}
      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 z-[100] w-[85vw] max-w-sm h-full bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.1)] lg:hidden flex flex-col overflow-hidden"
            >
              {/* Massive Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none grayscale">
                <Image src="/logo.png" alt="Watermark" fill className="object-contain" />
              </div>

              {/* Drawer Header (Logo & Close) */}
              <div className="flex justify-between items-center p-8 relative z-10 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative h-10 w-10">
                    <Image src="/logo.png" alt="eTech Vidyamandir" fill className="object-contain" priority />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-xl tracking-tight text-slate-900 leading-none">
                      eTech
                    </span>
                    <span className="font-bold text-[9px] tracking-widest text-[#507dbd] uppercase">
                      Vidyamandir
                    </span>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-transform hover:rotate-90 duration-500"
                >
                  <X className="w-8 h-8" strokeWidth={1} />
                </button>
              </div>
              
              {/* Drawer Links (Left Aligned) */}
              <div className="px-8 py-4 overflow-y-auto flex-1 flex flex-col scrollbar-hide relative z-10">
                <nav className="flex flex-col gap-6 mt-8 items-start">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex flex-col items-start"
                      >
                        <span className="text-3xl font-light tracking-tight text-slate-500 group-hover:text-slate-900 transition-colors duration-300">
                          {item.name}
                        </span>
                        {/* Underline effect that grows from left to right */}
                        <span className="h-[2px] w-0 bg-[#507dbd] group-hover:w-full transition-all duration-500 ease-out mt-1" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer section inside drawer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-auto pt-10 pb-8 flex flex-col gap-6 items-start"
                >
                  <Link
                    href="#admissions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group inline-flex items-center gap-3 text-slate-900 hover:text-[#507dbd] transition-colors font-bold text-sm uppercase tracking-widest"
                  >
                    Apply Now
                    <span className="w-12 h-[1px] bg-slate-300 group-hover:bg-[#507dbd] transition-colors"></span>
                  </Link>
                  
                  <div className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@etechvidyamandir.com" className="hover:text-slate-900 transition-colors">
                      info@etechvidyamandir.com
                    </a>
                  </div>

                  <div className="w-full h-px bg-slate-100 my-2"></div>

                  {/* Mobile CBSE Badge */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/cbse-central-board-of-secondary-education7240-removebg-preview.png"
                        alt="CBSE Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-500">
                        Affiliated to
                      </span>
                      <span className="block text-xs font-black text-slate-800 tracking-tight">
                        CBSE BOARD
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}