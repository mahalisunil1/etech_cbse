"use client";

export default function Ticker() {
  const items = [
    "100% CBSE Pass Rate",
    "Future-Ready Curriculum",
    "Holistic Development",
    "Modern Facilities",
    "Excellence in Sports",
    "100% CBSE Pass Rate",
    "Future-Ready Curriculum",
    "Holistic Development",
    "Modern Facilities",
    "Excellence in Sports",
  ];

  return (
    <div className="bg-[#507dbd] py-6 overflow-hidden relative z-20 border-y-4 border-white">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="w-3 h-3 rounded-full bg-primary-yellow mr-4"></span>
            <span className="text-white font-black text-lg tracking-widest uppercase">
              {item}
            </span>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex items-center mx-8">
            <span className="w-3 h-3 rounded-full bg-primary-yellow mr-4"></span>
            <span className="text-white font-black text-lg tracking-widest uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}