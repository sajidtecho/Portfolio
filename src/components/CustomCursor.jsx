import React, { useRef, useState, useEffect } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  
  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        cursorDotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const handleHover = () => {
      cursorRef.current?.classList.add('scale-150', 'bg-brand/30');
    };

    const handleHoverOut = () => {
      cursorRef.current?.classList.remove('scale-150', 'bg-brand/30');
    };
    
    // Select elements that should trigger a hover effect
    const interactables = document.querySelectorAll('a, button, input, textarea, .hover-target');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand/50 pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:block"
        style={{ willChange: 'transform' }}
      ></div>
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand pointer-events-none z-50 hidden md:block"
        style={{ willChange: 'transform' }}
      ></div>
    </>
  );
};

export default CustomCursor;
