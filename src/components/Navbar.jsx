import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 \${scrolled ? 'py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-7 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-display cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-white group-hover:text-accent-neon-blue transition-colors duration-300">&lt;B Koushik</span>
          <span className="text-accent-neon-blue group-hover:text-white transition-colors duration-300"> /&gt;</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group \${activeSection === link.id ? 'text-white' : 'text-text-secondary hover:text-white'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-accent-neon-blue transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`text-left text-lg font-medium \${activeSection === link.id ? 'text-accent-neon-blue' : 'text-text-secondary'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
