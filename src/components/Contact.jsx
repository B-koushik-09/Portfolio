import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-8 h-8 text-accent-neon-blue" />,
      title: "Email",
      value: "koushikballa09@gmail.com",
      link: "mailto:koushikballa09@gmail.com",
      color: "hover:border-accent-neon-blue/50"
    },
    {
      icon: <Phone className="w-8 h-8 text-accent-neon-purple" />,
      title: "Phone",
      value: "+91 9392858341",
      link: "tel:+919392858341",
      color: "hover:border-accent-neon-purple/50"
    },
    {
      icon: <FaGithub className="w-8 h-8 text-white" />,
      title: "GitHub",
      value: "B-koushik-09",
      link: "https://github.com/B-koushik-09",
      color: "hover:border-white/50"
    },
    {
      icon: <FaLinkedin className="w-8 h-8 text-[#0077b5]" />,
      title: "LinkedIn",
      value: "koushik-balla",
      link: "https://www.linkedin.com/in/koushik-balla-46799331b/",
      color: "hover:border-[#0077b5]/50"
    }
  ];

  return (
    <section id="contact" className="pt-24 pb-12 relative bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, idx) => (
            <motion.a
              key={idx}
              href={detail.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-panel p-8 rounded-3xl border border-white/5 transition-all duration-300 flex flex-col items-center text-center group ${detail.color}`}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {detail.icon}
              </div>
              <h3 className="text-sm text-text-secondary uppercase tracking-widest mb-2">{detail.title}</h3>
              <p className="text-lg font-bold text-white mb-4 break-all">{detail.value}</p>
              <div className="mt-auto flex items-center space-x-2 text-accent-neon-blue font-bold text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Connect Now</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
