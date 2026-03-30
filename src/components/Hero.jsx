import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import RobotModel from "./canvas/RobotModel";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start justify-between z-10">
        <div className="flex flex-col justify-center h-full md:w-3/5 mt-[-60px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-brand">Sajid Ahmad</span>
            </h1>
            <h2 className="text-gray-300 text-2xl lg:text-4xl font-semibold mt-2">
              Computer Science Student <span className="text-surface font-light mx-2">|</span> AI/ML Engineer
            </h2>
            <p className="mt-4 text-gray-400 text-lg lg:text-xl max-w-xl font-light">
              Skilled in AI/ML, data analytics, and scalable systems development. Passionate about applying machine learning to solve real-world fintech and security challenges.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="py-3 px-8 rounded-full bg-brand text-white font-medium hover:bg-brand/80 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover-target">
                View Projects
              </a>
              <a href="#contact" className="py-3 px-8 rounded-full bg-surface border border-gray-600 text-white font-medium hover:bg-gray-800 transition-all hover:scale-105 hover-target">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* 3D Canvas Area */}
        <div className="h-full w-full md:w-2/5 absolute md:relative right-0 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
          <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [-4, 3, 6],
            }}
          >
            <Suspense fallback={null}>
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <RobotModel />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" className="hover-target">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
