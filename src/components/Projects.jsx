import React from "react";
import { Card, CardFooter, Image, Button, Link, HeroUIProvider } from "@heroui/react";
import { ExternalLink, Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


const projects = [
  {
    title: "UI/UX Designer",
    subtitle: "& Frontend Developer",
    description: "Crafting pixel-perfect interfaces and seamless user experiences with modern frontend technologies.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    tag: "Design & Frontend",
    link: "#"
  },
  {
    title: "Data Analyst",
    subtitle: "& Marketing",
    description: "Turning raw data into actionable insights and driving growth through data-informed marketing strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    tag: "Analytics & Growth",
    link: "#"
  },
  {
    title: "Backend",
    subtitle: "Engineer",
    description: "Building scalable, high-performance server infrastructure and robust API systems.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop",
    tag: "Infrastructure & API",
    link: "#"
  },
  {
    title: "Project Manager",
    subtitle: "& Leader",
    description: "Orchestrating cross-functional teams and steering projects from vision to successful delivery.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    tag: "Leadership & Strategy",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative w-full h-[450px] rounded-3xl overflow-hidden cursor-pointer">
                {/* Background photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 opacity-75 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-7 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] text-cyan-400 uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                      {project.tag}
                    </p>
                    <h4 className="text-white font-bold text-2xl tracking-tight leading-tight">{project.title}</h4>
                    <p className="text-cyan-300/70 font-semibold text-sm tracking-wide">{project.subtitle}</p>
                  </div>
                  <p className="text-slate-200 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
