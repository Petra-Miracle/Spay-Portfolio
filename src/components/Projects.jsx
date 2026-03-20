import React from "react";
import { Card, CardFooter, Image, Button, Link } from "@heroui/react";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "QuantumPay",
    description: "Next-gen algorithmic trading protocol with sub-millisecond execution.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    tag: "1st Place @ FinTech24",
    link: "#"
  },
  {
    title: "Aura Ledger",
    description: "Privacy-centric distributed ledger for enterprise asset management.",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop",
    tag: "Winner @ BlockHack",
    link: "#"
  },
  {
    title: "Nexus Bridge",
    description: "Multi-chain liquidity aggregator with optimized gas efficiency.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
    tag: "Finalist @ ETHGlobal",
    link: "#"
  }
];

export default function Projects() {
  const { isDark } = useTheme();
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter"
            >
              Selected <span className="text-gradient-accent">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 dark:text-slate-400 text-lg max-w-xl font-light"
            >
              A collection of our most ambitious projects and hackathon winners.
            </motion.p>
          </div>
          <Button 
            variant="flat" 
            className={`font-bold h-12 px-8 rounded-full border ${isDark ? "bg-white/5 hover:bg-white/10 text-white border-white/10" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"}`}
            endContent={<ExternalLink size={18} />}
          >
            Archive
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="w-full h-[450px] border-none glass-card group overflow-hidden">
                <Image
                  removeWrapper
                  alt={project.title}
                  className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
                  src={project.image}
                />
                <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${isDark ? "bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" : "bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-70"}`} />
                <CardFooter className="absolute bottom-0 z-20 flex-col items-start p-8 gap-4 w-full">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] text-cyan-400 uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                       <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                      {project.tag}
                    </p>
                    <h4 className="text-white font-bold text-3xl tracking-tight">{project.title}</h4>
                  </div>
                  <p className="text-slate-200 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                  <Button 
                    className="bg-white text-black font-black text-xs h-10 px-6 rounded-full mt-2" 
                    as={Link} 
                    href={project.link}
                    endContent={<ArrowUpRight size={14} />}
                  >
                    CASE STUDY
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
