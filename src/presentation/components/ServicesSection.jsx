import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Building2, 
  Plane, 
  Code2, 
  Cloud, 
  PenTool, 
  ShieldCheck, 
  LineChart,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit size={32} className="text-cyan-600" />,
    bgClass: "bg-cyan-50",
    borderClass: "group-hover:border-cyan-300",
    shadowClass: "group-hover:shadow-cyan-500/20",
    title: 'AI & Machine Learning',
    description: 'Intelligent algorithms and data-driven models to automate processes and unlock deep business insights.'
  },
  {
    icon: <Building2 size={32} className="text-purple-600" />,
    bgClass: "bg-purple-50",
    borderClass: "group-hover:border-purple-300",
    shadowClass: "group-hover:shadow-purple-500/20",
    title: 'Enterprise Solutions',
    description: 'Robust, scalable B2B software designed to streamline operations and enhance corporate productivity.'
  },
  {
    icon: <Plane size={32} className="text-blue-600" />,
    bgClass: "bg-blue-50",
    borderClass: "group-hover:border-blue-300",
    shadowClass: "group-hover:shadow-blue-500/20",
    title: 'Tour & Travel Tech',
    description: 'Modern booking engines, itinerary managers, and comprehensive platforms for the travel industry.'
  },
  {
    icon: <Code2 size={32} className="text-emerald-600" />,
    bgClass: "bg-emerald-50",
    borderClass: "group-hover:border-emerald-300",
    shadowClass: "group-hover:shadow-emerald-500/20",
    title: 'Web & Mobile Apps',
    description: 'High-performance, responsive applications built with the latest modern frameworks.'
  },
  {
    icon: <Cloud size={32} className="text-sky-600" />,
    bgClass: "bg-sky-50",
    borderClass: "group-hover:border-sky-300",
    shadowClass: "group-hover:shadow-sky-500/20",
    title: 'Cloud & DevOps',
    description: 'Scalable cloud architecture, continuous integration, and secure infrastructure management.'
  },
  {
    icon: <PenTool size={32} className="text-pink-600" />,
    bgClass: "bg-pink-50",
    borderClass: "group-hover:border-pink-300",
    shadowClass: "group-hover:shadow-pink-500/20",
    title: 'UI/UX Design',
    description: 'User-centric, visually stunning interfaces that provide seamless digital experiences.'
  },
  {
    icon: <ShieldCheck size={32} className="text-rose-600" />,
    bgClass: "bg-rose-50",
    borderClass: "group-hover:border-rose-300",
    shadowClass: "group-hover:shadow-rose-500/20",
    title: 'Cyber Security',
    description: 'Advanced threat protection, audits, and secure coding practices to keep your data safe.'
  },
  {
    icon: <LineChart size={32} className="text-amber-600" />,
    bgClass: "bg-amber-50",
    borderClass: "group-hover:border-amber-300",
    shadowClass: "group-hover:shadow-amber-500/20",
    title: 'Data & Analytics',
    description: 'Comprehensive business intelligence tools turning raw data into actionable strategies.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative z-10 bg-white overflow-hidden">
      {/* Subtle Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-cyan-600 uppercase tracking-wider"
          >
            What We Do
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight"
          >
            Our <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            We provide end-to-end technological solutions tailored to push your business into the future.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`group flex flex-col justify-between bg-white border border-slate-100 rounded-[2rem] p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl ${service.borderClass} ${service.shadowClass}`}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${service.bgClass}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-slate-900">
                <span>Learn more</span>
                <ArrowRight size={18} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
