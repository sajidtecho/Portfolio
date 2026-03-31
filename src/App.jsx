import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <div className="relative z-0 bg-bg-dark overflow-x-hidden w-full">
      <CustomCursor />
      <div className="relative z-0">
        {/* Dynamic Background */}
        <StarsCanvas />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 relative z-10 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Sajid Ahmad. All rights reserved.</p>
        <p className="text-sm mt-1">Built with ❤️ by Sajid Ahmad.</p>
      </footer>
    </div>
  );
};

export default App;
