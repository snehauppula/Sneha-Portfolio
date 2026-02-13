"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative h-screen bg-background py-24 px-6 md:px-[10vw] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl w-full space-y-16 md:space-y-24 z-10">
                {/* Kinetic Heading */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 text-primary font-mono text-xs uppercase tracking-[0.4em]"
                    >
                        <div className="w-12 h-px bg-primary/40" />
                        Genesis & Philosophy
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-5xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter leading-[0.85] select-none"
                    >
                        I MOVE AT THE <br />
                        <span className="text-glow italic text-primary">SPEED OF THOUGHT.</span>
                    </motion.h2>
                </div>

                {/* Narrative Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-2xl md:text-4xl text-white font-light leading-snug">
                                As a <span className="text-primary font-medium">Data Scientist</span> and AI Engineer,
                                I specialize in building systems that <span className="italic">learn, adapt, and drive impact.</span>
                            </p>
                            <div className="h-px w-24 bg-primary/30" />
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                My mission is to bridge the gap between complex data and human intuition.
                                Whether it&apos;s predictive modeling or creative front-end integration,
                                I strive for excellence in every line of code.
                            </p>
                        </div>

                        {/* Stats/Details */}
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            {[
                                { label: "Systems Built", value: "24+" },
                                { label: "Data Processed", value: "TBs+" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-primary font-mono text-xs uppercase tracking-widest">{stat.label}</p>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        className="lg:col-span-2 relative aspect-[4/5] rounded-[2rem] overflow-hidden glass border-white/10 group shadow-2xl"
                    >
                        <Image
                            src="/sneha_pic2.jpg"
                            alt="Sneha - Vision"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                        {/* Content Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="p-4 rounded-xl glass border-white/5 space-y-2">
                                <div className="text-[10px] font-mono text-primary animate-pulse uppercase tracking-[0.2em]">Neural Architect v2.0</div>
                                <div className="h-px w-full bg-white/10" />
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">Architecting Neural Pathways</p>
                            </div>
                        </div>

                        {/* Interactive scan lines */}
                        <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.1),transparent)]" />
                    </motion.div>
                </div>
            </div>

            {/* Background Glitch Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                <div className="scanline" />
            </div>
        </section>
    );
}
