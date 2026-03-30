import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import TiltWrapper from "./TiltWrapper";

const CertificationCard = ({ index, issuer, title, date }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      style={{ perspective: "1000px" }}
    >
      <TiltWrapper className="w-full sm:w-[360px] cursor-pointer">
        <div className="bg-surface/50 border border-gray-800 p-6 rounded-2xl w-full h-full flex flex-col items-center text-center relative overflow-hidden group hover:border-brand/50 transition-colors backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="w-16 h-16 rounded-full bg-brand/20 flex justify-center items-center mb-4 border border-brand/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]" style={{ transform: "translateZ(50px)" }}>
            <span className="text-white font-black text-[22px] tracking-widest">{issuer[0]}</span>
          </div>

          <h3 className="text-white text-[20px] font-bold mb-2 z-10" style={{ transform: "translateZ(40px)" }}>{issuer}</h3>
          <p className="text-gray-300 text-[14px] font-medium min-h-[40px] z-10" style={{ transform: "translateZ(30px)" }}>{title}</p>
          
          <div className="mt-4 bg-black/40 px-4 py-1.5 rounded-full z-10" style={{ transform: "translateZ(35px)" }}>
            <p className="text-brand text-[12px] font-bold">{date}</p>
          </div>
        </div>
      </TiltWrapper>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">Qualifications</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certifications.</h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center items-stretch">
        {certifications.map((cert, index) => (
          <CertificationCard key={`certification-${index}`} index={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
