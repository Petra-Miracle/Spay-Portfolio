import React from "react";
import { Divider, Link, Button, Input } from "@heroui/react";
import { Github, Twitter, Instagram, Linkedin, Code, Command, Send } from "lucide-react";
import { SpayLogo } from "./Navbar";

export default function Footer() {
  return (
    <footer id="footer" className="pt-24 pb-12 px-6 relative border-t footer-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <SpayLogo />
              <p className="font-black text-3xl tracking-tighter">SPAY<span className="text-cyan-500">TEAM</span></p>
            </div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed font-light mb-8">
              Architecting the next generation of financial protocols. We turn complex challenges into seamless experiences through elite engineering and visionary design.
            </p>
            <div className="flex gap-4">
               {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <Button key={i} isIconOnly variant="flat" className="bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-full transition-all">
                   <Icon size={20} />
                 </Button>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Team", "Projects", "Connect"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Stay updated with our latest builds and technical insights.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email address" 
                variant="flat" 
                className="bg-white/5 rounded-full"
                classNames={{
                  inputWrapper: "bg-white/5 border border-white/5",
                }}
              />
              <Button isIconOnly className="bg-cyan-600 rounded-full text-white">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <Divider className="bg-white/5 mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <Command size={14} />
            <p>© 2026 SPAY TEAM. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-10">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest text-[10px]">Privacy Protocol</Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest text-[10px]">Terms of Engineering</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
