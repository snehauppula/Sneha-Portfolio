"use client";

import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Terminal, User, Cpu, Database, Send, History } from "lucide-react";

const navItems = [
    { id: "hero", label: "00 // IDENT", icon: <Terminal className="w-4 h-4" /> },
    { id: "about", label: "01 // GENESIS", icon: <User className="w-4 h-4" /> },
    { id: "projects", label: "02 // OUTPUT", icon: <Cpu className="w-4 h-4" /> },
    { id: "experience", label: "03 // CHRONOS", icon: <History className="w-4 h-4" /> },
    { id: "skills", label: "04 // NEURAL", icon: <Database className="w-4 h-4" /> },
    { id: "contact", label: "05 // SYNC", icon: <Send className="w-4 h-4" /> },
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
                {(isHovered || isActive) && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                        className="absolute right-14 px-4 py-1.5 glass rounded-lg border-primary/20 pointer-events-none flex flex-col items-end"
                    >
                        <span className="text-[8px] font-mono text-primary uppercase tracking-[0.3em] opacity-60">System_Access</span>
                        <span className="text-[11px] font-sans font-black text-white tracking-[0.1em] whitespace-nowrap">
                            {item.label}
                        </span>
                        {isActive && (
                            <motion.div
                                layoutId="tooltip-line"
                                className="h-0.5 w-full bg-primary mt-1 origin-right"
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
                className={`relative w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive
                        ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(168,85,247,0.5)] border-transparent"
                        : "glass text-white/30 border-white/5 hover:text-white"
                    }`}
            >
                <motion.div
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="z-10"
                >
                    {item.icon}
                </motion.div>

                {/* Internal Glow for Active */}
                {isActive && (
                    <motion.div
                        layoutId="btn-active-glow"
                        className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl -z-10"
                    />
                )}

                {/* Border Hover Trace */}
                <motion.div
                    className="absolute inset-0 border border-primary/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
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
            { threshold: 0.6 } // Increased threshold for tighter snap feedback
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
        <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-8 py-10">
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
            <div className="absolute top-10 bottom-10 right-[21px] w-px bg-white/5 -z-20">
                {/* Active Progress Segment */}
                <motion.div
                    className="absolute top-0 w-full bg-gradient-to-b from-primary via-primary shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    animate={{
                        height: `${progressLineHeight}%`
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                />

                {/* Terminal Connection Nodes (Small ticks) */}
                {navItems.map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1.5 h-1.5 right-[-3px] rounded-full border border-white/10 ${i <= activeIndex ? 'bg-primary border-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-background'
                            } transition-colors duration-500`}
                        style={{ top: `${(i / (navItems.length - 1)) * 100}%` }}
                    />
                ))}
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-background/20 backdrop-blur-xl -z-30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
}

