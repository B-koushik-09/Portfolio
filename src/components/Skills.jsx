import React, { useRef, useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Stars, OrbitControls, PerspectiveCamera } from '@react-three/drei';

const SkillSphere = ({ position, color, text, speed }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
        meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * speed) * 0.2;
        meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
        </mesh>
        <Text
          position={[0, 0, 1.2]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Java", "Python"],
      color: "#00f0ff"
    },
    {
      title: "Web Technologies",
      skills: ["MERN Stack", "REST APIs", "React", "Node.js"],
      color: "#8a2be2"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "MongoDB", "Git", "GitHub"],
      color: "#ff00ff"
    },
    {
      title: "AI & ML",
      skills: ["CNN", "Transfer Learning", "RAG", "LLMs"],
      color: "#ffff00"
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Render", "GitHub Actions", "Netlify"],
      color: "#ff8800"
    }
  ];

  const spheres = useMemo(() => [
    { pos: [-4, 2, 0], col: "#00f0ff", txt: "React", spd: 1.2 },
    { pos: [0, 2.5, 0], col: "#8a2be2", txt: "Node.js", spd: 0.8 },
    { pos: [4, 2, 0], col: "#ff00ff", txt: "Python", spd: 1.5 },
    { pos: [-3, -1, 0], col: "#ffff00", txt: "C++", spd: 1.1 },
    { pos: [3, -1, 0], col: "#00ff00", txt: "AI/ML", spd: 1.3 },
    { pos: [0, -2, 2], col: "#ff8800", txt: "MERN", spd: 1.0 },
    { pos: [-5, -0.5, -2], col: "#00ffff", txt: "Java", spd: 0.9 },
    { pos: [5, -0.5, -2], col: "#ff0088", txt: "RAG", spd: 1.4 },
  ], []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-neon-blue to-accent-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Enhanced 3D Skills Visualization */}
        <div className="h-[380px] w-full rounded-3xl glass-panel overflow-hidden mb-16 relative cursor-grab active:cursor-grabbing border border-white/5">
          <Canvas dpr={[1, 2]}>
            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f0ff" />
                
                <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={2} />
                
                <group>
                    {spheres.map((s, i) => (
                        <SkillSphere key={i} position={s.pos} color={s.col} text={s.txt} speed={s.spd} />
                    ))}
                </group>

                <OrbitControls 
                    enableZoom={false} 
                    autoRotate 
                    autoRotateSpeed={0.5}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
            </Suspense>
          </Canvas>
          <div className="absolute bottom-6 left-0 w-full text-center">
            <span className="px-4 py-2 rounded-full glass-panel text-xs font-mono tracking-widest text-white/50 uppercase border border-white/10">
                Interactive Skill Cloud • Drag to explore
            </span>
          </div>
        </div>

        {/* Text Based Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6" data-aos="fade-up">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: category.color }}>{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color }}></span>
                    <span className="text-text-secondary text-sm font-medium group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
