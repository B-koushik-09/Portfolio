import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Brain } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-accent-neon-blue" />,
      title: "Core Programming",
      desc: "Strong foundations in C++, Data Structures, and Algorithms."
    },
    {
      icon: <Server className="w-8 h-8 text-accent-neon-purple" />,
      title: "Web Development",
      desc: "Full Stack Development using the MERN stack."
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      title: "AI/ML Systems",
      desc: "Experience with RAG systems, CNNs, and ML pipelines."
    }
  ];

  return (
    <section id="about" className="py-24 relative" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
            data-aos="fade-right"
          >
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              I am a motivated Computer Science and Engineering student passionate about building scalable and impactful software solutions. My journey bridges the gap between traditional software engineering and modern AI capabilities.
            </p>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              With a solid foundation in core computer science principles and hands-on experience in modern web technologies and AI/ML systems, I strive to create applications that are not just functional, but intelligent and user-centric.
            </p>
            
            <div className="pt-6">
               <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-neon-purple relative overflow-hidden group mx-auto lg:mx-0 max-w-lg lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-lg md:text-xl italic font-light relative z-10">
                    "Constant learning and adaptation are the keys to building the technology of tomorrow."
                  </p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid grid-cols-1 gap-6"
            data-aos="fade-left"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 border border-white/5 hover:border-accent-neon-blue/30 transition-all duration-300"
              >
                <div className="p-3 bg-white/5 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm md:text-base">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
