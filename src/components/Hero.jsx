import React from "react";
import { motion } from "framer-motion";
import { Rocket, Cpu, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full animate-float" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[150px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 max-w-5xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-10 text-sm font-semibold border-white/5 text-cyan-400"
        >
          <Rocket size={16} className="animate-pulse" />
          <span className="tracking-wide uppercase text-[10px]">Pioneering Fintech Innovation</span>
        </motion.div>
        
        <h1 className="text-6xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
          Mastering the <br />
          <span className="text-gradient-accent">Digital Frontier</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          We are <span className="text-slate-900 dark:text-white font-medium">SPAY Team</span>. A collective of visionaries building high-performance solutions for the next generation of finance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 h-14 px-10 font-bold bg-white text-black hover:bg-slate-100 transition-all shadow-xl rounded-full group no-underline"
          >
            Selected Works
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-slate-400/30 dark:border-white/10 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
