import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TiltWrapper from "./TiltWrapper";
import ProjectsCanvas from "./canvas/ProjectsCanvas";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} style={{ perspective: "1000px" }}>
      <TiltWrapper className="w-full sm:w-[360px] h-full cursor-pointer">
        <div className="bg-surface p-5 rounded-2xl w-full h-full border border-gray-800 hover:border-brand/50 transition-colors group relative overflow-hidden shadow-xl" style={{ transform: "translateZ(30px)" }}>
          
          {/* Hover Highlight Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative w-full h-[230px]" style={{ transform: "translateZ(50px)" }}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="bg-black/70 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-brand transition-colors hover-target"
                >
                  <FaGithub size={20} color="white" />
                </div>
              )}
              {demo_link && (
                <div
                  onClick={() => window.open(demo_link, "_blank")}
                  className="bg-black/70 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-brand transition-colors hover-target"
                >
                  <FaExternalLinkAlt size={16} color="white" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 z-10 relative" style={{ transform: "translateZ(40px)" }}>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 z-10 relative" style={{ transform: "translateZ(30px)" }}>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </TiltWrapper>
    </motion.div>
  );
};

const Projects = () => {
  const [view3D, setView3D] = useState(false);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
      <div className="flex justify-between items-start">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">My Work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
        </motion.div>
        
        {/* View Toggle */}
        <motion.button
          onClick={() => setView3D(!view3D)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full bg-brand/20 border border-brand text-brand hover:bg-brand hover:text-white transition-all text-sm font-medium h-fit"
        >
          {view3D ? "2D View" : "3D View"}
        </motion.button>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos. 
          It reflects my ability to solve complex problems, work with different technologies, 
          and manage projects effectively.
        </motion.p>
      </div>

      {/* 3D View */}
      {view3D ? (
        <div className="mt-20 w-full h-[700px] rounded-2xl overflow-hidden border border-brand/30">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-400">Loading 3D view...</div>}>
            <ProjectsCanvas projects={projects} />
          </Suspense>
        </div>
      ) : (
        /* 2D View */
        <div className="mt-20 flex flex-wrap gap-7 justify-center md:justify-start">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
