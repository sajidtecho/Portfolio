import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn, zoomIn } from "../utils/motion";
import SkillBallsCanvas from "./canvas/SkillBalls";
import { top_skills, technicalSkills } from "../constants";

const SkillCategory = ({ category, skillsList, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="bg-surface/50 border border-gray-800 p-6 rounded-2xl w-full sm:w-[48%] lg:w-[31%] flex flex-col items-start hover:border-brand/50 transition-colors backdrop-blur-md"
  >
    <h3 className="text-brand text-[20px] font-bold mb-4">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skillsList.map((skill, i) => (
        <motion.span 
          key={`${category}-${i}`} 
          variants={zoomIn(index * 0.15 + i * 0.1 + 0.2, 0.6)}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15, delay: index * 0.15 + i * 0.1 + 0.2 } }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15, rotate: [0, -2, 2, 0], backgroundColor: "#a855f7", color: "#fff" }}
          transition={{ duration: 0.2 }}
          className="bg-black/60 px-3 py-1.5 rounded-lg text-gray-300 text-[14px] font-medium border border-gray-700/50 cursor-pointer shadow-md"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">Technologies</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">My Skills.</h2>
      </motion.div>

      {/* Interactive 3D Canvas for Core Skills */}
      <div className="mt-10 md:mt-16 w-full flex justify-center items-center h-[50vh] min-h-[350px]">
        <SkillBallsCanvas skills={top_skills} />
      </div>

      {/* Categorized Technical Skills */}
      <div className="mt-16 flex flex-wrap gap-6 justify-center md:justify-start">
        {technicalSkills.map((tech, index) => (
          <SkillCategory 
            key={tech.category} 
            category={tech.category} 
            skillsList={tech.skills} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
