import React, { useEffect, useState } from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenu, NavbarMenuItem, Link, Button,
} from "@heroui/react";
import { Trophy, Github, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const SpayLogo = () => (
  <motion.div 
    whileHover={{ rotate: 10, scale: 1.1 }}
    className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20"
  >
    <Trophy className="text-white" size={20} fill="currentColor" />
  </motion.div>
);

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Team", href: "#team" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl"
      >
        <Navbar 
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen} 
          maxWidth="full" 
          className={`h-16 lg:h-20 transition-all duration-500 rounded-3xl ${
            scrolled 
              ? isDark
                ? "bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl py-0"
                : "bg-white/80 backdrop-blur-2xl border border-slate-200 shadow-lg shadow-slate-200/50 py-0"
              : "bg-transparent py-2"
          }`}
          containerFragment={false}
          position="static"
        >
          <NavbarContent className="basis-1/4" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <Link className="flex justify-start items-center gap-3 group" href="/">
                <SpayLogo />
                <div className="flex flex-col leading-none">
                  <span className={`font-black text-2xl tracking-tighter group-hover:text-cyan-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>SPAY</span>
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? "text-white/30" : "text-slate-400"}`}>SYSTEMS</span>
                </div>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden lg:flex gap-12 font-bold" justify="center">
            {menuItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={`transition-all text-[13px] tracking-[0.2em] uppercase relative group py-2 ${isDark ? "text-white/40 hover:text-white" : "text-slate-500 hover:text-slate-900"}`}
                  href={item.href}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent className="basis-1/4 hidden lg:flex" justify="end">
            <button
              onClick={toggle}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isDark ? "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </NavbarContent>

          <NavbarContent className="lg:hidden basis-1 gap-2" justify="end">
            <button
              onClick={toggle}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${isDark ? "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-12 h-12 rounded-2xl transition-all flex items-center justify-center ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-slate-100 hover:bg-slate-200"}`}
            >
              <div className="flex flex-col gap-1.5 w-5 items-center justify-center">
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${isDark ? "bg-white" : "bg-slate-700"} ${isMenuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
                <span className={`block h-[2px] bg-cyan-400 rounded-full transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-3.5"}`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${isDark ? "bg-white" : "bg-slate-700"} ${isMenuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
              </div>
            </button>
          </NavbarContent>
          <NavbarMenu className={`backdrop-blur-[40px] pt-16 px-10 border-t mt-6 rounded-[40px] h-[calc(100vh-120px)] shadow-2xl overflow-hidden ${isDark ? "bg-[#020617]/90 border-white/5" : "bg-white/95 border-slate-200"}`}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-8">
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item.label}-${index}`}>
                    <Link
                      className={`w-full text-5xl font-black transition-all duration-500 flex justify-between items-center group decoration-none hover:text-cyan-400 ${isDark ? "text-white/10" : "text-slate-200"}`}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="group-hover:translate-x-4 transition-transform leading-none">{item.label}</span>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="p-3 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 -translate-x-12 group-hover:translate-x-0 transition-all duration-500"
                      >
                         <ArrowRight className="text-cyan-500" size={32} />
                      </motion.div>
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
              
              <div className={`mt-auto pb-20 border-t pt-10 flex flex-col gap-4 ${isDark ? "border-white/5" : "border-slate-200"}`}>
                 <p className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? "text-white/20" : "text-slate-400"}`}>SYSTEM STATUS</p>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-white/60" : "text-slate-600"}`}>All protocols operational</p>
                 </div>
              </div>
            </motion.div>
          </NavbarMenu>
        </Navbar>
      </motion.div>
    </div>
  );
}
