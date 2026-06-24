"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 font-light">
      <div className="w-[90vw] max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 pb-16">
          
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 transform hover:scale-105 transition-transform duration-500">
                 <Image 
                   src="/logo.png" 
                   alt="E-Tech Vidyamandir Logo" 
                   fill 
                   className="object-contain" 
                 />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-widest uppercase text-white text-lg leading-none">E-Tech</span>
                <span className="font-bold tracking-widest uppercase text-[#507dbd] text-xs mt-1">Vidyamandir</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              A premier educational institution dedicated to academic rigor, brilliant innovation, and holistic growth since 2005.
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
            
            {/* Navigation */}
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase tracking-widest text-xs mb-8">Explore</span>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link href="#academics" className="hover:text-white transition-colors duration-300">Academics</Link></li>
                <li><Link href="#facilities" className="hover:text-white transition-colors duration-300">Campus Facilities</Link></li>
                <li><Link href="#achievers" className="hover:text-white transition-colors duration-300">Our Achievers</Link></li>
                <li><Link href="#admissions" className="hover:text-white transition-colors duration-300">Admissions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact</span>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="leading-relaxed">123 Education Blvd<br/>Tech District, New Delhi</li>
                <li><a href="tel:+911123456789" className="hover:text-white transition-colors duration-300">+91 11 2345 6789</a></li>
                <li><a href="mailto:hello@etech.edu.in" className="hover:text-white transition-colors duration-300">hello@etech.edu.in</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase tracking-widest text-xs mb-8">Connect</span>
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group w-fit">
                    Instagram 
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#507dbd]"/>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group w-fit">
                    LinkedIn 
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#507dbd]"/>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group w-fit">
                    Twitter 
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#507dbd]"/>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Scroll to Top Row */}
        <div className="pt-12 pb-8 flex justify-end items-center border-t border-slate-900">
          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 border border-slate-800 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300 group shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase font-bold text-slate-600 border-t border-slate-900">
           <p>&copy; {new Date().getFullYear()} E-Tech Vidyamandir. All Rights Reserved.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  );
}