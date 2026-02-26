"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function BrandLogo() {
    const pathname = usePathname();
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const isHomePage = pathname === "/";

    useEffect(() => {
        if (!isHomePage) return;

        // Use IntersectionObserver to detect if we are in the hero section
        const hero = document.getElementById('hero');
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeroVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Hide earlier if needed
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, [isHomePage]);

    const showTagline = isHomePage && isHeroVisible;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-8 left-8 z-[100] pointer-events-auto"
        >
            <motion.div
                className="flex items-center gap-4 group cursor-pointer"
                whileHover="hover"
            >
                {/* Neural Sigil Core */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* Background Geometric Sigil */}
                    <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full text-primary/40 group-hover:text-primary transition-colors duration-500"
                    >
                        <motion.path
                            d="M 20 20 L 80 20 L 80 80 L 20 80 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    {/* Monogram Glyph */}
                    <div className="relative z-10 font-sans text-xl font-black text-white group-hover:text-primary transition-colors duration-500 tracking-tighter">
                        <span className="relative">
                            S
                            <motion.span
                                className="absolute -right-1.5 -bottom-0.5 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </span>
                    </div>

                    {/* Orbiting Nodes */}
                    {[0, 120, 240].map((angle, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/60 rounded-full"
                            animate={{
                                rotate: [angle, angle + 360],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            style={{
                                transformOrigin: '24px 24px',
                                left: '50%',
                                top: '50%',
                                marginLeft: '-0.5px',
                                marginTop: '-0.5px',
                            }}
                        />
                    ))}
                </div>

                {/* Typography: Sneha Uppula */}
                <div className="flex flex-col">
                    <div className="overflow-hidden">
                        <motion.h1
                            className="text-lg font-sans font-black tracking-[-0.05em] uppercase leading-none text-white origin-left"
                            variants={{
                                hover: { scale: 1.05, transition: { duration: 0.4 } }
                            }}
                        >
                            Sneha <span className="text-primary italic">Uppula</span>
                        </motion.h1>
                    </div>
                    <AnimatePresence>
                        {showTagline && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 0.8, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="flex flex-col overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mt-2 blur-[0.2px]">
                                    <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-primary font-black">
                                        Decoding_Data_Frontiers
                                    </span>
                                    <div className="h-px flex-1 bg-primary/30" />
                                </div>

                                {/* Data Stream Decoration */}
                                <motion.div
                                    className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-1"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}
