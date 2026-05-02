import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "Diamond Coder",
      desc: "Awarded by Smart Interviews for exceptional performance in Data Structures and Algorithms.",
      delay: 0
    },
    {
      icon: <Target className="w-6 h-6 text-accent-neon-blue" />,
      title: "Global Rank 610 / 53,931",
      desc: "Achieved top 1.1% in global competitive programming contest.",
      delay: 0.1
    },
    {
      icon: <Code className="w-6 h-6 text-pink-500" />,
      title: "200+ DSA Problems Solved",
      desc: "Consistent problem solver across multiple platforms focusing on algorithmic efficiency.",
      delay: 0.2
    },
    {
      icon: <Star className="w-6 h-6 text-accent-neon-purple" />,
      title: "LeetCode Rating: 1867",
      desc: "Maintained a strong competitive rating highlighting problem-solving consistency.",
      delay: 0.3
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden" data-aos="fade-up">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-neon-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Achievements</span> & Milestones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 text-center group hover:border-accent-neon-blue/30 transition-all duration-300"
              data-aos="flip-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
