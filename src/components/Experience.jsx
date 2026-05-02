import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Image as ImageIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Development Intern",
      company: "Elevance Skills",
      period: "Jan 2026 – Mar 2026",
      desc: [
        "Built scalable web apps using MERN stack.",
        "Implemented secure authentication and designed REST APIs.",
        "Improved application performance and optimized deployment workflows."
      ],
      color: "from-accent-neon-blue to-accent-neon-purple",
      certificate: "/null-class-internship.jpg"
    },
    {
      title: "AI/ML Intern",
      company: "Edunet Foundation (AICTE & IBM SkillsBuild)",
      period: "Jan 2026 – Feb 2026",
      desc: [
        "Developed machine learning models using Convolutional Neural Networks (CNN).",
        "Worked on real-world ML pipelines including data preprocessing and evaluation."
      ],
      color: "from-pink-500 to-accent-neon-purple",
      certificate: "/aiml internship.jpeg"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group border border-white/5 flex flex-col"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r \${exp.color}`}></div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-text-secondary">{exp.company}</p>
                </div>
              </div>
              
              <div className="mb-6 flex justify-center sm:justify-start">
                <div className="px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-accent-neon-blue border border-white/5">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {exp.desc.map((item, i) => (
                  <li key={i} className="flex items-start text-text-secondary text-sm md:text-base text-left">
                    <span className="mr-2 mt-1.5 text-accent-neon-purple text-xs flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {exp.certificate && (
                <a 
                  href={exp.certificate} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center space-x-2 py-3 px-4 rounded-xl glass-panel hover:bg-white/10 border border-white/10 hover:border-accent-neon-blue transition-all duration-300 group/cert"
                >
                  <ImageIcon className="w-4 h-4 text-accent-neon-blue" />
                  <span className="text-xs font-bold tracking-widest uppercase">View Certificate</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/cert:opacity-100 transform group-hover/cert:translate-x-1 transition-all" />
                </a>
              )}
              
              {/* Subtle background glow effect on hover */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r \${exp.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
