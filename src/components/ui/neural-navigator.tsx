"use client";

import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Terminal, User, Cpu, Database, Send, History, GraduationCap } from "lucide-react";

const navItems = [
    { id: "hero", label: "00 // IDENT", icon: <Terminal className="w-4 h-4" /> },
    { id: "about", label: "01 // ABOUT", icon: <User className="w-4 h-4" /> },
    { id: "experience", label: "02 // EXPERIENCES", icon: <History className="w-4 h-4" /> },
    { id: "skills", label: "03 // SKILLS", icon: <Database className="w-4 h-4" /> },
    { id: "projects", label: "04 // PROJECTS", icon: <Cpu className="w-4 h-4" /> },
    { id: "education", label: "05 // EDUCATION", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "contact", label: "06 // SYNC", icon: <Send className="w-4 h-4" /> },
];

function NavButton({ item, isActive, isHovered, onHover, onLeave }: any) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) * 0.4);
        mouseY.set((e.clientY - centerY) * 0.4);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        onLeave();
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className="group relative flex items-center justify-end"
            onMouseEnter={() => onHover(item.id)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Label / Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                        className="absolute right-14 px-3 md:px-5 py-2 glass rounded-xl border-primary/30 pointer-events-none flex flex-col items-end backdrop-blur-2xl bg-black/40 z-[110] shadow-2xl"
                    >
                        <span className="text-[8px] font-mono text-primary uppercase tracking-[0.4em] opacity-80">PROTOCOL_LINK</span>
                        <span className="text-[10px] md:text-[12px] font-sans font-black text-white tracking-[0.15em] whitespace-nowrap">
                            {item.label}
                        </span>
                        {isActive && (
                            <motion.div
                                layoutId="tooltip-line"
                                className="h-0.5 w-full bg-primary mt-1.5 origin-right shadow-[0_0_10px_#a855f7]"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Magnetic Button Container */}
            <motion.button
                onClick={() => scrollToSection(item.id)}
                style={{ x, y }}
                className={`relative w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_40px_rgba(168,85,247,0.6)] border-transparent"
                    : "glass text-white/30 border-white/5 hover:text-white group-hover:border-primary/20"
                    }`}
            >
                <motion.div
                    animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="z-10"
                >
                    {item.icon}
                </motion.div>

                {/* Internal Glow for Active */}
                {isActive && (
                    <motion.div
                        layoutId="btn-active-glow"
                        className="absolute inset-0 bg-primary/25 blur-2xl rounded-2xl -z-10"
                    />
                )}

                {/* Border Hover Trace */}
                <motion.div
                    className="absolute inset-0 border border-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.15 }}
                />
            </motion.button>
        </div>
    );
}

export function NeuralNavigator() {
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } // Lower threshold for fluid single-page flow
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const activeIndex = navItems.findIndex(i => i.id === activeSection);
    const progressLineHeight = (activeIndex / (navItems.length - 1)) * 100;

    return (
        <div className="fixed right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6 md:gap-8 lg:gap-10 py-12">
            {navItems.map((item) => (
                <NavButton
                    key={item.id}
                    item={item}
                    isActive={activeSection === item.id}
                    isHovered={hoveredItem === item.id}
                    onHover={setHoveredItem}
                    onLeave={() => setHoveredItem(null)}
                />
            ))}

            {/* Sidebar Visual Backbone */}
            <div className="absolute top-12 bottom-12 right-[19px] md:right-[23px] w-[2px] bg-white/[0.03] -z-20 rounded-full">
                {/* Active Progress Segment */}
                <motion.div
                    className="absolute top-0 w-full bg-gradient-to-b from-primary via-primary to-transparent shadow-[0_0_20px_rgba(168,85,247,0.6)] rounded-full"
                    animate={{
                        height: `${progressLineHeight}%`
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 120 }}
                />

                {/* Terminal Connection Nodes (Small ticks) */}
                {navItems.map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1.5 h-1.5 md:w-2 md:h-2 right-[-2.5px] md:right-[-3px] rounded-full border border-white/10 ${i <= activeIndex ? 'bg-primary border-primary shadow-[0_0_15px_rgba(168,85,247,0.7)]' : 'bg-background'
                            } transition-all duration-700`}
                        style={{ top: `${(i / (navItems.length - 1)) * 100}%` }}
                    />
                ))}
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-background/20 backdrop-blur-xl -z-30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
}


