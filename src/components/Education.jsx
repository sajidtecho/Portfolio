import React from "react";
import { motion } from "framer-motion";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import TiltWrapper from "./TiltWrapper";

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    style={{ perspective: "1000px" }}
    className="w-full"
  >
    <TiltWrapper className="w-full cursor-pointer">
      <div className="bg-surface/50 border border-gray-800 p-8 rounded-2xl w-full flex flex-col items-start hover:border-brand/50 transition-colors backdrop-blur-sm shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div className="flex justify-between w-full items-start md:items-center flex-col md:flex-row gap-4 mb-4" style={{ transform: "translateZ(40px)" }}>
          <div>
            <h3 className="text-white text-[24px] font-bold z-10">{edu.title}</h3>
            <p className="text-gray-300 text-[16px] font-medium z-10 mt-1">{edu.institution}</p>
          </div>
          <div className="bg-brand/20 px-4 py-2 rounded-full border border-brand/30 z-10 shrink-0">
            <span className="text-brand font-bold text-[14px]">{edu.date}</span>
          </div>
        </div>
        
        <ul className="mt-4 list-disc ml-5 space-y-2 z-10" style={{ transform: "translateZ(30px)" }}>
          {edu.points.map((point, i) => (
            <li key={`edu-point-${i}`} className="text-gray-400 text-[15px] leading-relaxed tracking-wide">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </TiltWrapper>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider pb-2">Academic Background</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] leading-tight md:leading-normal">Education.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col gap-8 w-full max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} edu={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
