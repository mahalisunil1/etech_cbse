"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/hero-school.png",
    title: "Empowering Minds.\nInspiring Greatness.",
    subtitle: "Affiliated with the Central Board of Secondary Education (CBSE), delivering a rigorous, globally competitive curriculum.",
    cta: "Apply Now"
  },
  {
    id: 2,
    image: "/library.png",
    title: "World-Class\nFacilities.",
    subtitle: "State-of-the-art libraries, robotics labs, and athletic complexes designed for deep focus and discovery.",
    cta: "Explore Campus"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    title: "A Legacy Of\nAcademic Excellence.",
    subtitle: "Consistent 100% board exam pass rates and top-tier university placements year after year.",
    cta: "View Academics"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 350]); // Stronger parallax (35% scroll speed)

  // Scroll listener for Bezel hide/reveal
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]); // Reset timer when user manually changes slides

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Motion variants for the staggered word reveal
  const titleContainerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, 
        delayChildren: 0.1, // Fast start for heading
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02, // Extremely fast exit
        staggerDirection: -1,
      },
    },
  };

  const wordVariants: any = {
    hidden: { 
      y: "120%", 
      opacity: 0, 
      filter: "blur(8px)", 
      rotate: 2 
    },
    visible: { 
      y: "0%", 
      opacity: 1, 
      filter: "blur(0px)",
      rotate: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } // Cinematic easeOutQuint
    },
    exit: { 
      y: "-50%", 
      opacity: 0, 
      filter: "blur(4px)",
      rotate: -1,
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  // Helper to split text into animated words
  const renderAnimatedTitle = (title: string) => {
    return title.split("\n").map((line, lineIndex) => (
      <span key={lineIndex} className="block overflow-hidden pb-1 md:pb-2">
        {line.split(" ").map((word, wordIndex) => (
          <motion.span
            key={`${lineIndex}-${wordIndex}`}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
    ));
  };

  return (
    <section className="relative w-full bg-white">
      
      {/* Edge-to-Edge Container (Full Occupancy) */}
      <div className="relative w-full h-[100vh] overflow-hidden bg-slate-900">
        
        {/* Background Images Crossfade */}
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ y: backgroundY }}
            className="absolute top-[-40vh] bottom-[-40vh] left-0 right-0 z-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Background"
              fill
              className="object-cover"
              priority={currentSlide === 0}
            />
            {/* Cinematic Gradient Overlays (KIITIS Style: Heavy Left-to-Right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content Container (Left-Aligned) */}
        <div className="absolute inset-0 w-[90vw] max-w-[90vw] mx-auto flex flex-col justify-center md:justify-end pb-24 md:pb-32 z-20 pointer-events-none">
          <div className="max-w-4xl pointer-events-auto flex flex-col items-start">

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                variants={titleContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-start text-left mb-10"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white leading-tight mb-6 drop-shadow-lg">
                  {renderAnimatedTitle(slides[currentSlide].title)}
                </h1>

                <motion.p 
                  initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)", transition: { duration: 0.2, ease: "easeIn" } }}
                  className="text-sm md:text-base lg:text-lg text-slate-200 font-light leading-relaxed max-w-2xl drop-shadow"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* FIXED CTA BUTTON (Does not transition with the slide) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#admissions"
                className="group flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 shadow-2xl font-bold text-sm md:text-base py-3 px-8 transition-colors duration-300 min-w-[200px]"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`cta-${currentSlide}`}
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.4, delay: 0.3 } }}
                    exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.1 } }}
                  >
                    {slides[currentSlide].cta}
                  </motion.span>
                </AnimatePresence>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Carousel Controls (Mobile: Bottom Split | Desktop: Bottom Right) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-24 sm:bottom-28 md:bottom-12 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 right-auto md:right-12 z-30 flex flex-row items-center justify-between md:justify-end w-[90vw] md:w-auto gap-4 md:gap-8 pointer-events-none"
        >
          {/* Progress Indicators */}
          <div className="flex gap-2 md:gap-3 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative w-8 md:w-12 h-1.5 rounded-full overflow-hidden bg-white/20 hover:bg-white/40 transition-colors"
                aria-label={`Go to slide ${index + 1}`}
              >
                {currentSlide === index && (
                  <motion.div
                    layoutId="active-indicator"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="absolute inset-0 bg-[#507dbd]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button 
              onClick={prevSlide} 
              className="p-2 md:p-3 bg-white text-slate-900 hover:bg-slate-200 shadow-xl rounded-full transition-transform active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 md:p-3 bg-white text-slate-900 hover:bg-slate-200 shadow-xl rounded-full transition-transform active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </motion.div>

        {/* Android Bezel: State Toppers (Attached to Bottom) */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: "0%", transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.6 } }}
              exit={{ y: "100%", transition: { duration: 0.4, ease: "easeIn" } }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-4 sm:gap-6 bg-zinc-900/95 backdrop-blur-xl border-t border-x border-white/10 px-5 sm:px-12 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] cursor-default w-[90vw] sm:w-auto max-w-[420px] sm:max-w-none"
            >
              {/* Overlapping Avatars */}
              <div className="flex items-center">
                {[1, 2, 3, 4].map((i, index) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, delay: 0.9 + (index * 0.1), ease: "easeOut" } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className={`relative w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-[3px] border-zinc-900 overflow-hidden shadow-sm ${index !== 0 ? '-ml-3 sm:-ml-5' : ''}`}
                  >
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i + 30}`} 
                      alt="Topper Profile"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Text */}
              {/* Text and CTA Group (Stacked vertically) */}
              <div className="flex flex-col items-start gap-1.5 sm:gap-2">
                <motion.div 
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, delay: 1.3, ease: "easeOut" } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="flex flex-col"
                >
                  <span className="text-white font-black text-sm sm:text-lg tracking-wide leading-tight whitespace-nowrap">30+ State Toppers</span>
                </motion.div>

                {/* View All CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1.5, ease: "easeOut" } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <Link
                    href="#toppers"
                    className="flex items-center gap-1 sm:gap-2 bg-white hover:bg-slate-100 text-slate-900 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md transition-colors"
                  >
                    <span className="whitespace-nowrap">View All</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}