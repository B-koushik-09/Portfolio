import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

const GraduationCap = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* The Top Part (Morterboard) */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2.5, 0.1, 2.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* The Cap Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 1, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* The Tassel Link */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
      </mesh>

      {/* The Tassel */}
      <mesh position={[1, 0.2, 1]}>
        <cylinderGeometry args={[0.05, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#8a2be2" emissive="#8a2be2" emissiveIntensity={2} />
      </mesh>

      {/* Glowing Aura */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#00f0ff" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  );
};

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden" data-aos="zoom-out">
      {/* Background Stars and Aura */}
      <div className="absolute inset-0 z-0">
        <Canvas>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full py-12 lg:py-0">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg md:text-xl text-accent-neon-blue font-medium tracking-widest mb-4 uppercase">
              Hello, I am
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display leading-tight mb-6 tracking-tight">
              Balla <span className="text-white">Koushik</span>
            </h1>
            <h3 className="text-lg md:text-2xl font-bold tracking-tight">
               <span className="text-gradient uppercase">AI/ML Enthusiast | Full Stack Developer</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-accent-neon-blue lg:pl-6 py-2 italic font-light leading-relaxed"
          >
            "Building scalable, intelligent systems that solve real-world problems."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple text-white font-bold hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-lg"
            >
              View My Work
            </button>
            <a 
              href="/tpresume.pdf" 
              download
              className="px-10 py-5 rounded-full glass-panel text-white font-bold hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-accent-neon-blue active:scale-95 text-center text-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* 3D Education Visual - Positioned on the Right */}
        <div className="flex items-center justify-center relative order-1 lg:order-2 h-[300px] lg:h-[500px]">
            <div className="absolute inset-0 bg-accent-neon-blue/5 rounded-full blur-[100px] animate-pulse"></div>
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 6]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <GraduationCap />
              </Float>
            </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
