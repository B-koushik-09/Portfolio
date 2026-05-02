import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Ensure loading finishes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-bg-primary min-h-screen text-text-primary selection:bg-accent-neon-blue/30 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary"
          >
            <div className="text-center relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 border-4 border-accent-neon-blue border-t-accent-neon-purple mb-8 mx-auto shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              />
              <motion.h1 
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1, 0.95] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-3xl font-display font-bold text-gradient tracking-tighter"
              >
                &lt;B Koushik /&gt;
              </motion.h1>
              <div className="mt-4 text-xs font-mono text-white/20 tracking-widest uppercase">Initializing 3D Environment...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor Glow */}
      <div 
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[100px] bg-accent-neon-blue mix-blend-screen transition-transform duration-300 ease-out hidden lg:block"
        style={{ 
          left: `\${mousePosition.x}px`, 
          top: `\${mousePosition.y}px` 
        }}
      />

      <Navbar scrollToSection={scrollToSection} />
      
      <main className="relative z-10">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-6 text-center border-t border-white/5 relative z-10 glass-panel mt-12">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Balla Koushik. Built with React & Three.js.
        </p>
      </footer>
    </div>
  );
}

export default App;
