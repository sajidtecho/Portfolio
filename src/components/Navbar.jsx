import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-40 transition-all duration-300 ${scrolled ? "bg-bg-dark/80 backdrop-blur-md shadow-brand/10 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-12">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-white text-xl font-bold tracking-wider hover-target">
            <span className="text-brand">S</span>A
          </span>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-brand" : "text-gray-300"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors hover-target`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Resume Download Button */}
          <li>
            <motion.a
              href="https://drive.google.com/drive/u/0/folders/1rZNsPvTU2s1gDjQWTMfmGZf3zezxh4Ns"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white font-semibold hover:bg-brand/90 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover-target"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </li>

          {/* Social Icons */}
          <li className="flex flex-row gap-4 ml-2 border-l border-gray-700 pl-6">
            <a href="https://github.com/sajidtecho" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors hover-target">
              <span className="text-[14px] font-semibold">GitHub</span>
            </a>
            <a href="https://www.kaggle.com/wajidaliahmad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors hover-target">
              <span className="text-[14px] font-semibold">Kaggle</span>
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95, y: toggle ? 0 : -20 }}
            transition={{ duration: 0.2 }}
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-surface absolute top-16 right-4 mx-4 my-2 min-w-[140px] z-50 rounded-xl shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-brand" : "text-gray-300"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Resume Button for Mobile */}
              <li className="w-full pt-2 border-t border-gray-700 mt-2">
                <motion.a
                  href="/Sajid_Ahmad.pdf"
                  download="Sajid_Ahmad_Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-brand text-white font-semibold hover:bg-brand/90 transition-all"
                  onClick={() => setToggle(!toggle)}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </li>

              {/* Social Icons for Mobile */}
              <li className="w-full flex justify-center gap-6 pt-4">
                <a href="https://github.com/sajidtecho" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand transition-colors text-sm font-semibold">GitHub</a>
                <a href="https://www.kaggle.com/wajidaliahmad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand transition-colors text-sm font-semibold">Kaggle</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
