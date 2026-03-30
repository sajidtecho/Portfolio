import React, { useRef, useState, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import ExperienceCanvas from "./canvas/ExperienceCanvas";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col relative shrink-0 snap-center w-[300px] md:w-[380px] h-full"
    >
      {/* Timeline Node and Line */}
      <div className="flex items-center w-full mb-6">
        <div className="w-5 h-5 rounded-full bg-brand shadow-[0_0_15px_#a855f7] z-10 shrink-0" />
        <div className="h-[2px] w-full bg-gradient-to-r from-brand to-gray-800 shrink-0 -ml-1" />
      </div>

      {/* Card Content */}
      <div className="bg-surface/80 border border-gray-800 p-8 rounded-2xl relative z-10 flex-1 flex flex-col hover:border-brand/50 transition-colors backdrop-blur-md">
        <div className="flex justify-between items-start mb-2">
           <span className="text-brand text-[14px] font-bold bg-brand/10 px-3 py-1 rounded-full">{experience.date}</span>
        </div>
        
        <h3 className="text-white text-[22px] font-bold leading-tight mt-2">{experience.title}</h3>
        <p className="text-gray-400 text-[16px] font-medium m-0 mt-1">{experience.company_name}</p>
        
        <ul className="mt-5 list-disc ml-4 space-y-2 flex-1">
          {experience.points.map((point, i) => (
            <li key={`experience-point-${i}`} className="text-gray-300 text-[14px] leading-relaxed tracking-wide">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const scrollRef = useRef(null);
  const [view3D, setView3D] = useState(false);

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
      <div className="flex justify-between items-start">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider pb-2">Recent to Past</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] leading-tight md:leading-normal">Leadership and Achievements.</h2>
        </motion.div>
        
        {/* View Toggle */}
        <motion.button
          onClick={() => setView3D(!view3D)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full bg-brand/20 border border-brand text-brand hover:bg-brand hover:text-white transition-all text-sm font-medium"
        >
          {view3D ? "2D View" : "3D View"}
        </motion.button>
      </div>

      {/* 3D View */}
      {view3D ? (
        <div className="mt-16 w-full h-[600px] rounded-2xl overflow-hidden border border-brand/30">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-400">Loading 3D view...</div>}>
            <ExperienceCanvas experiences={experiences} />
          </Suspense>
        </div>
      ) : (
        /* 2D View */
        <div className="mt-16 w-full relative">
          <div 
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-8 pb-10 pt-4 px-2 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
            ))}
            
            {/* Fading Edge Gradient at the end of scroll */}
            <div className="shrink-0 w-8 md:w-16 h-10" />
          </div>
          
          {/* Visual Cue for Scrolling */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-bg-dark to-transparent pointer-events-none hidden md:block" />
        </div>
      )}
    </section>
  );
};

export default Experience;
