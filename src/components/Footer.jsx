import React from "react";
import { Divider, Link } from "@heroui/react";
import { Github, Twitter, Instagram, Linkedin, Command, MapPin, Mail } from "lucide-react";
import { SpayLogo } from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const navLinks = ["Home", "Team", "Projects", "Contact"];

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer id="footer" className="relative px-6 pt-20 pb-8 border-t footer-section overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <SpayLogo />
              <p className={`font-black text-2xl tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                SPAY<span className="text-cyan-500">TEAM</span>
              </p>
            </div>
            <p className={`text-sm leading-relaxed font-light mb-8 max-w-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Architecting the next generation of financial protocols. We turn complex challenges into seamless experiences through elite engineering and visionary design.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:text-cyan-400 ${
                    isDark ? "bg-white/5 hover:bg-cyan-500/15 text-white/40" : "bg-slate-100 hover:bg-cyan-50 text-slate-400"
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div className="lg:col-span-3">
            <h4 className={`font-black text-[10px] tracking-[0.3em] uppercase mb-6 ${isDark ? "text-white/40" : "text-slate-400"}`}>Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-all hover:text-cyan-500 inline-flex items-center gap-2 group ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <span className="w-0 h-[1px] bg-cyan-500 group-hover:w-3 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="lg:col-span-4">
            <h4 className={`font-black text-[10px] tracking-[0.3em] uppercase mb-6 ${isDark ? "text-white/40" : "text-slate-400"}`}>Contact</h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: Mail, text: "hello@spayteam.dev" },
                { icon: MapPin, text: "Jakarta, Indonesia" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className={`flex items-center gap-3 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDark ? "bg-white/5 text-cyan-400" : "bg-slate-100 text-cyan-500"}`}>
                    <Icon size={14} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className={isDark ? "bg-white/5" : "bg-slate-200"} />

        {/* Bottom bar */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-[11px] font-medium tracking-widest uppercase ${isDark ? "text-slate-600" : "text-slate-400"}`}>
          <div className="flex items-center gap-2">
            <Command size={12} />
            <span>© 2026 SPAY TEAM. All rights reserved.</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
