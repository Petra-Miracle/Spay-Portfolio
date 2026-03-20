import React from "react";
import { Divider, Link, Button, Input } from "@heroui/react";
import { Github, Twitter, Instagram, Linkedin, Code, Command, Send } from "lucide-react";
import { SpayLogo } from "./Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer id="footer" className="pt-24 pb-12 px-6 relative border-t footer-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <SpayLogo />
              <p className={`font-black text-3xl tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>SPAY<span className="text-cyan-500">TEAM</span></p>
            </div>
            <p className={`text-lg max-w-md leading-relaxed font-light mb-8 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Architecting the next generation of financial protocols. We turn complex challenges into seamless experiences through elite engineering and visionary design.
            </p>
            <div className="flex gap-4">
               {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <Button key={i} isIconOnly variant="flat" className={`hover:text-cyan-400 rounded-full transition-all ${isDark ? "bg-white/5 hover:bg-cyan-500/20 text-white/50" : "bg-slate-100 hover:bg-cyan-500/10 text-slate-500"}`}>
                   <Icon size={20} />
                 </Button>
               ))}
            </div>
          </div>

          <div>
            <h4 className={`font-bold mb-6 tracking-tight uppercase text-xs ${isDark ? "text-white" : "text-slate-900"}`}>Navigation</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Team", "Projects", "Connect"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className={`transition-colors text-sm font-medium hover:text-cyan-500 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-6 tracking-tight uppercase text-xs ${isDark ? "text-white" : "text-slate-900"}`}>Newsletter</h4>
            <p className={`text-sm mb-6 leading-relaxed ${isDark ? "text-slate-500" : "text-slate-400"}`}>
              Stay updated with our latest builds and technical insights.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email address" 
                variant="flat" 
                className="rounded-full"
                classNames={{
                  inputWrapper: isDark
                    ? "bg-white/5 border border-white/5 text-white"
                    : "bg-slate-100 border border-slate-200 text-slate-900",
                }}
              />
              <Button isIconOnly className="bg-cyan-600 rounded-full text-white">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <Divider className={`mb-12 ${isDark ? "bg-white/5" : "bg-slate-200"}`} />
        
        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium tracking-wider uppercase ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          <div className="flex items-center gap-2">
            <Command size={14} />
            <p>© 2026 SPAY TEAM. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-10">
            <Link href="#" className={`transition-colors uppercase tracking-widest text-[10px] hover:text-cyan-500 ${isDark ? "text-slate-500" : "text-slate-400"}`}>Privacy Protocol</Link>
            <Link href="#" className={`transition-colors uppercase tracking-widest text-[10px] hover:text-cyan-500 ${isDark ? "text-slate-500" : "text-slate-400"}`}>Terms of Engineering</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
