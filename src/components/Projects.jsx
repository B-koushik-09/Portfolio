import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "AI RAG Chatbot",
      desc: "Context-aware chatbot using embeddings & vector search. Reduces hallucination using domain-specific retrieval.",
      tags: ["Python", "ChromaDB", "LLM", "RAG"],
      link: "#",
      github: "https://github.com/B-koushik-09/vnr-rag-chatbot",
      gradient: "from-blue-500/20 to-purple-500/20",
      borderGlow: "group-hover:border-blue-500/50"
    },
    {
      title: "Internship Platform",
      desc: "Full stack application with authentication, resume builder, subscriptions, and PayPal integration.",
      tags: ["React", "Node.js", "MongoDB", "PayPal"],
      link: "#",
      github: "https://github.com/B-koushik-09/internarea",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGlow: "group-hover:border-green-500/50"
    },
    {
      title: "Leaf Disease Detection",
      desc: "Real-time plant disease prediction model using Convolutional Neural Networks and Transfer Learning.",
      tags: ["Python", "CNN", "TensorFlow", "Keras"],
      link: "#",
      github: "https://github.com/B-koushik-09/agritech",
      gradient: "from-orange-500/20 to-red-500/20",
      borderGlow: "group-hover:border-orange-500/50"
    },
    {
      title: "Portfolio Website",
      desc: "Responsive modern portfolio with 3D elements, smooth scroll animations, and interactive hover effects.",
      tags: ["React", "Tailwind", "Three.js", "Framer Motion"],
      link: "#",
      github: "https://github.com/B-koushik-09/portfolio",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderGlow: "group-hover:border-pink-500/50"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-bg-secondary/30" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative glass-panel p-8 rounded-3xl overflow-hidden border border-white/5 \${project.borderGlow} transition-all duration-500`}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
              data-aos="zoom-in"
            >
              <div className={`absolute inset-0 bg-gradient-to-br \${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                <div className="flex space-x-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent-neon-blue transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <p className="text-text-secondary mb-8 min-h-[60px]">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/80 border border-white/10 group-hover:border-white/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
