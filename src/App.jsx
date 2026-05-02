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
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

      <footer className="bg-bg-secondary border-t border-white/5 pt-12 pb-8 relative z-10 glass-panel mt-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Bio */}
          <div className="space-y-3 text-center md:text-left">
            <div className="text-xl font-bold font-display tracking-tighter">
              <span className="text-white">&lt;B Koushik</span>
              <span className="text-accent-neon-blue"> /&gt;</span>
            </div>
            <p className="text-text-secondary/70 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Full stack develper & AI/ML Enthusiast.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <div className="flex justify-center space-x-4 text-text-secondary text-xs">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent-neon-blue transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent-neon-blue transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-accent-neon-blue transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent-neon-blue transition-colors">Contact</button>
            </div>
          </div>

          {/* Social Presence */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Follow Me</h4>
            <div className="flex justify-center md:justify-end space-x-3">
              <a href="https://github.com/B-koushik-09" target="_blank" rel="noreferrer" className="w-8 h-8 glass-panel rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all text-sm">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/koushik-balla-46799331b/" target="_blank" rel="noreferrer" className="w-8 h-8 glass-panel rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-all text-sm">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 text-center">
          <p className="text-text-secondary/40 text-[10px] tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Balla Koushik. Built with React, Three.js & AOS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
