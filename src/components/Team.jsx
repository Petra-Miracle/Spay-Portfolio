import React, { useState } from "react";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const team = [
  {
    name: "Petra Miracle ME Lenggu",
    role: "UI/UX Designer",
    subrole: "& Frontend Developer",
    skills: ["Figma", "React", "Tailwind"],
    avatar: "/img/Petra.jpeg",
    gradient: "from-cyan-500 to-blue-600",
    gradientRaw: ["#06b6d4", "#2563eb"],
    number: "01",
    github: "#",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Rivaldi Christian Adoe",
    role: "Data Analyst",
    subrole: "& Marketing",
    skills: ["Python", "SQL", "Growth"],
    avatar: "/img/Aldy.jpeg",
    gradient: "from-violet-500 to-indigo-600",
    gradientRaw: ["#8b5cf6", "#4f46e5"],
    number: "02",
    github: "#",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Yudha Habel Palulun",
    role: "Backend",
    subrole: "Engineer",
    skills: ["Node.js", "Docker", "Redis"],
    avatar: "/img/Yudha.jpeg",
    gradient: "from-emerald-500 to-teal-600",
    gradientRaw: ["#10b981", "#0d9488"],
    number: "03",
    github: "#",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Samuel Adian",
    role: "Project Manager",
    subrole: "& Leader",
    skills: ["Agile", "Scrum", "Strategy"],
    avatar: "/img/Sam.jpeg",
    gradient: "from-orange-500 to-rose-600",
    gradientRaw: ["#f97316", "#e11d48"],
    number: "04",
    github: "#",
    linkedin: "#",
    twitter: "#"
  }
];

export default function Team() {
  const { isDark } = useTheme();
  return (
    <section id="team" className="py-32 px-6 relative overflow-hidden section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter"
          >
            The <span className="text-gradient-accent">Engineers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-light"
          >
            A multidisciplinary team focused on shipping high-fidelity digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: "easeOut" }}
              className="group cursor-default"
            >
              <div className="relative rounded-[32px] overflow-hidden h-[420px] shadow-xl">

                {/* Photo background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.avatar})` }}
                />

                {/* Base overlay always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                {/* Extra dim on hover reveal */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${member.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                {/* Number badge */}
                <div className={`absolute top-4 right-4 w-9 h-9 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-[11px] font-black tracking-tight">{member.number}</span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0">

                  {/* Name */}
                  <h3 className="text-white font-black text-lg leading-tight tracking-tight mb-0.5 drop-shadow-lg">
                    {member.name}
                  </h3>

                  {/* Role with gradient */}
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                    {member.role} {member.subrole}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 backdrop-blur-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-4" />

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
