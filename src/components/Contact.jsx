import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            data-aos="fade-right"
          >
            <a href="mailto:koushikballa09@gmail.com" className="flex items-center space-x-6 glass-panel p-6 rounded-2xl hover:border-accent-neon-blue/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-neon-blue/20 transition-all duration-300">
                <Mail className="w-6 h-6 text-accent-neon-blue" />
              </div>
              <div>
                <h3 className="text-sm text-text-secondary uppercase tracking-wider mb-1">Email</h3>
                <p className="text-lg font-medium group-hover:text-accent-neon-blue transition-colors">koushikballa09@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919392858341" className="flex items-center space-x-6 glass-panel p-6 rounded-2xl hover:border-accent-neon-purple/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-neon-purple/20 transition-all duration-300">
                <Phone className="w-6 h-6 text-accent-neon-purple" />
              </div>
              <div>
                <h3 className="text-sm text-text-secondary uppercase tracking-wider mb-1">Phone</h3>
                <p className="text-lg font-medium group-hover:text-accent-neon-purple transition-colors">+91 9392858341</p>
              </div>
            </a>

            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/B-koushik-09" target="_blank" rel="noreferrer" className="w-14 h-14 glass-panel rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/koushik-balla" target="_blank" rel="noreferrer" className="w-14 h-14 glass-panel rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 group hover:border-[#0077b5]">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-neon-purple/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-neon-blue/10 rounded-full blur-[80px] pointer-events-none"></div>

            {status === 'success' ? (
              <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-4 py-12">
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-text-secondary text-center">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-accent-neon-blue hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-neon-blue/50 focus:ring-1 focus:ring-accent-neon-blue/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-neon-purple/50 focus:ring-1 focus:ring-accent-neon-purple/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple text-white font-bold flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all duration-300 transform hover:-translate-y-1 \${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
