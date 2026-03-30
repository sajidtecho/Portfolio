import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
      >
        Computer Science student skilled in AI/ML, data analytics, and scalable systems development. Experienced in building real-time, high-reliability platforms using React, Node, and Python. Strong foundation in algorithms, databases, and distributed systems. Passionate about applying machine learning and system design to solve real-world fintech and security challenges.
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {[
          { title: "Machine Learning & AI", width: "w-4/5" },
          { title: "Data Analytics", width: "w-5/6" },
          { title: "Full-Stack Development", width: "w-3/4" },
          { title: "System Architecture", width: "w-4/5" }
        ].map((skill, index) => (
          <motion.div
            key={skill.title}
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full sm:w-[45%]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white text-[16px] font-medium">{skill.title}</h3>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div className={`bg-gradient-to-r from-brand to-purple-400 h-3 rounded-full ${skill.width}`} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
