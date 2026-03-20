import React from "react";
import { Card, CardHeader, CardBody, Avatar, Chip, Tooltip } from "@heroui/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const team = [
  {
    name: "Alex Johnson",
    role: "Fullstack Architect",
    skills: ["React", "Go", "Web3"],
    avatar: "https://i.pravatar.cc/150?u=alex",
    github: "#",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    skills: ["Figma", "UI/UX", "System Design"],
    avatar: "https://i.pravatar.cc/150?u=sarah",
    github: "#",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Aurelius",
    role: "Core Engineer",
    skills: ["Rust", "Kubernetes", "Redis"],
    avatar: "https://i.pravatar.cc/150?u=marcus",
    github: "#",
    linkedin: "#",
    twitter: "#"
  },

  {
    name: "Marcus Aurelius",
    role: "Core Engineer",
    skills: ["Rust", "Kubernetes", "Redis"],
    avatar: "https://i.pravatar.cc/150?u=marcus",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="glass-card p-4 hover:scale-[1.02] transition-transform">
                <CardHeader className="flex flex-col items-center pb-0 pt-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
                    <Avatar 
                      src={member.avatar} 
                      className={`w-32 h-32 relative z-10 ring-4 ${isDark ? "ring-white/5" : "ring-slate-200"}`}
                    />
                  </div>
                  <h3 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>{member.name}</h3>
                  <p className="text-cyan-500 text-sm font-semibold tracking-widest uppercase mt-1">{member.role}</p>
                </CardHeader>
                <CardBody className="py-10 text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {member.skills.map((skill, sIdx) => (
                      <Chip key={sIdx} variant="flat" style={{ backgroundColor: 'var(--chip-bg)', color: 'var(--chip-text)' }} className="border-none text-[10px] font-bold uppercase tracking-wider">
                        {skill}
                      </Chip>
                    ))}
                  </div>
                  <div className="flex justify-center gap-6">
                    <a href={member.github} style={{ color: 'var(--icon-muted)' }} className="hover:text-white dark:hover:text-white hover:!text-slate-800 transition-all transform hover:-translate-y-1">
                      <Github size={22} />
                    </a>
                    <a href={member.linkedin} style={{ color: 'var(--icon-muted)' }} className="hover:!text-cyan-500 transition-all transform hover:-translate-y-1">
                      <Linkedin size={22} />
                    </a>
                    <a href={member.twitter} style={{ color: 'var(--icon-muted)' }} className="hover:!text-indigo-400 transition-all transform hover:-translate-y-1">
                      <Twitter size={22} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
