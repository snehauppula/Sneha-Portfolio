"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";



export function LoadingScreen() {
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        filter: "blur(8px) brightness(1.2)",
                        scale: 1.02
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'fixed', inset: 0, zIndex: 10000 }}
                    className="bg-background flex flex-col items-center justify-center font-mono"
                >
                    <div className="relative space-y-12 flex flex-col items-center">
                        <div className="relative">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-glow select-none"
                            >
                                SNEHA
                            </motion.h1>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "linear" }}
                                className="absolute -bottom-4 left-0 h-px bg-primary shadow-[0_0_15px_var(--color-primary)]"
                            />
                        </div>

                        {/* Loading Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-primary text-xs uppercase tracking-[0.4em] animate-pulse">
                                Booting AI · Software · Data...
                            </p>
                        </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-24 w-64 h-px bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-full bg-primary"
                        />
                    </div>

                    <p className="absolute bottom-10 text-[8px] uppercase tracking-[0.6em] text-white/20">
                        Establishing Connection...
                    </p>

                    {/* Background Glitch Elements */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                        <div className="scanline" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

