import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const eduData = [
    {
      degree: "B.Tech (Computer Science and Engineering)",
      inst: "VNR Vignana Jyothi Institute of Engineering and Technology",
      period: "2024–2027",
      score: "8.6 CGPA",
      board: "JNTUH",
      icon: <GraduationCap className="w-8 h-8 text-accent-neon-blue" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Diploma (Computer Science and Engineering)",
      inst: "Government Polytechnic, Nalgonda",
      period: "2021–2024",
      score: "9.1 CGPA",
      board: "SBTET",
      icon: <Award className="w-8 h-8 text-accent-neon-purple" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "10th (SSC)",
      inst: "MJPTBC Welfare Residential School",
      period: "2021",
      score: "10 GPA",
      board: "SSC",
      icon: <BookOpen className="w-8 h-8 text-pink-500" />,
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eduData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br \${edu.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
              <div className="glass-panel p-8 rounded-3xl border border-white/5 h-full flex flex-col relative overflow-hidden group-hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {edu.icon}
                </div>
                
                <div className="mb-6 flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                        {edu.icon}
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-full text-sm font-bold text-gradient">
                        {edu.score}
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">{edu.degree}</h3>
                
                <div className="space-y-4 mt-auto">
                    <div className="flex items-start space-x-3 text-text-secondary group-hover:text-text-primary transition-colors">
                        <MapPin className="w-5 h-5 flex-shrink-0 text-accent-neon-blue" />
                        <span className="text-sm">{edu.inst}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-text-secondary group-hover:text-text-primary transition-colors">
                        <Calendar className="w-5 h-5 flex-shrink-0 text-accent-neon-purple" />
                        <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono tracking-widest text-white/30 uppercase">
                        <span>Board: {edu.board}</span>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
