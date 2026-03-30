import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dialogues = {
  hero: "Heheheh... Hey, welcome to the portfolio. It's freakin' sweet! Want a tour?",
  about: "This guy does AI and ML stuff. Probably building an intelligent robot to get me more beer.",
  skills: "Look at all these spinning shapes! That's a lot of skills. I just know how to drink Pawtucket Patriot.",
  experience: "Work, work, work... Honestly, looks a lot harder than my job at the brewery.",
  certifications: "Wow, certifications from Oracle, Udemy, and Infosys! Too many big words for me.",
  projects: "Holy crap, look at these projects! This is way more impressive than the time I fought that giant chicken.",
  contact: "Send a message! Come on, do it. I don't have all day, Road House is on TV.",
};

const sections = ["hero", "about", "skills", "experience", "certifications", "projects", "contact"];
const sectionNames = {
  hero: "Top",
  about: "About Me",
  skills: "Skills",
  experience: "Experience",
  certifications: "Certifications",
  projects: "Projects",
  contact: "Contact"
};

const CharacterGuide = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showMessage, setShowMessage] = useState(true);
  const [isRightSide, setIsRightSide] = useState(false);
  const [windowDims, setWindowDims] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    // Update window dimensions for limit drag constraints
    const updateDims = () => setWindowDims({ width: window.innerWidth, height: window.innerHeight });
    updateDims();
    window.addEventListener("resize", updateDims);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine which section is mostly in view
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Trigger message animation
              setShowMessage(false);
              setTimeout(() => setShowMessage(true), 150);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDims);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Image of Peter Griffin (Wikipedia transparent PNG)
  const peterImg = "https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png";
  
  const currentIndex = sections.indexOf(activeSection);

  return (
    <motion.div 
      drag
      dragMomentum={false}
      dragConstraints={{ left: 10, right: windowDims.width - 150, top: 10, bottom: windowDims.height - 150 }}
      onDrag={(event, info) => {
        if (info.point.x > windowDims.width / 2) {
          setIsRightSide(true);
        } else {
          setIsRightSide(false);
        }
      }}
      className="fixed bottom-5 left-4 md:left-10 z-[100] flex items-end cursor-grab active:cursor-grabbing"
      style={{ touchAction: "none" }}
    >
      {/* Speech Bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
            className={`absolute bottom-[90%] ${isRightSide ? 'right-[80%] md:right-[90%]' : 'left-[80%] md:left-[90%]'} bg-white text-black p-4 rounded-2xl w-[220px] md:w-[260px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 border-black pointer-events-auto flex flex-col items-start gap-3`}
            style={{ 
              borderRadius: isRightSide ? "24px 24px 4px 24px" : "24px 24px 24px 4px", 
              transformOrigin: isRightSide ? "bottom right" : "bottom left" 
            }}
            onPointerDown={(e) => e.stopPropagation()} /* Prevent dragging when clicking buttons in the bubble */
          >
            <p className="font-bold text-[13px] md:text-[14px] font-sans m-0 leading-snug text-left w-full">
              {dialogues[activeSection] || dialogues.hero}
            </p>
            
            {/* Guide Navigation */}
            <div className="w-full flex justify-between items-center border-t border-gray-200 pt-2 mt-1 gap-1">
              {currentIndex > 0 ? (
                <button 
                  onClick={() => scrollToSection(sections[currentIndex - 1])}
                  className="text-[11px] md:text-[12px] font-bold text-gray-500 hover:text-black transition-colors"
                >
                  ◀ {sectionNames[sections[currentIndex - 1]]}
                </button>
              ) : (
                <div /> /* Empty div for flex spacing */
              )}
              
              {currentIndex < sections.length - 1 ? (
                <button 
                  onClick={() => scrollToSection(sections[currentIndex + 1])}
                  className="text-[11px] md:text-[12px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full transition-colors shadow-md ml-auto whitespace-nowrap"
                >
                  Next: {sectionNames[sections[currentIndex + 1]]} ▶
                </button>
              ) : (
                <button 
                  onClick={() => scrollToSection(sections[0])}
                  className="text-[11px] md:text-[12px] font-bold text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-full transition-colors shadow-md ml-auto whitespace-nowrap"
                >
                  Back to Top ⏏
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Peter Griffin Animated Character */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[120px] md:w-[150px] pointer-events-auto cursor-pointer flex justify-center"
        onClick={(e) => {
           // If clicked directly on Peter without dragging, go next
           if (currentIndex < sections.length - 1) scrollToSection(sections[currentIndex + 1]);
           else scrollToSection(sections[0]);
        }}
        title="Drag me anywhere or Click to go next"
      >
        <img
          src={peterImg}
          alt="Peter Griffin Guide"
          className="h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] filter brightness-110 pointer-events-none transition-transform duration-300 transform"
          style={{ width: "100%", transform: isRightSide ? "scaleX(-1)" : "scaleX(1)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CharacterGuide;
