import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// Complex 3D scene for Hero
const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#0284c7" />
      <directionalLight position={[-5, -5, 5]} intensity={1} color="#7c3aed" />
      <Environment preset="city" />

      {/* Floating Center Object */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[3, 0, -3]} scale={1.8}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshTransmissionMaterial 
            backside
            thickness={0.5}
            roughness={0.1}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.4}
            color="#e0f2fe"
          />
        </mesh>
      </Float>

      {/* Floating Background Spheres */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[-5, 2, -6]} scale={1.5}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial thickness={1} roughness={0.2} transmission={0.9} ior={1.2} color="#f3e8ff" />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[5, -3, -4]} scale={1}>
          <octahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial thickness={1} roughness={0.1} transmission={0.9} ior={1.3} color="#e0f2fe" />
        </mesh>
      </Float>
    </>
  );
};

const Hero3D = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Soft CSS Gradients for extra depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-200/40 blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-200/40 blur-[100px]"></div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-5 py-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md shadow-sm"
        >
          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
            Next Generation Software Agency
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-slate-900 drop-shadow-sm leading-tight"
        >
          Empowering Your <br className="hidden md:block" />
          <span className="gradient-text">Digital Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Noviq builds highly scalable systems. From AI & Machine Learning to robust Enterprise software and innovative Cloud platforms.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto"
        >
          <button className="btn-primary shadow-xl shadow-cyan-500/20 text-lg px-8 py-4">Explore Solutions</button>
          <button className="btn-outline bg-white/50 backdrop-blur-sm text-lg px-8 py-4 border-slate-300 text-slate-700 hover:bg-white/80 hover:text-black">
            View Portfolio
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1 bg-white/50 backdrop-blur-sm">
          <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;
