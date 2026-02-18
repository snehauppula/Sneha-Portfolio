"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useState } from "react";

function NeuralNetwork({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
    // Generate static nodes for the background visualization
    const nodes = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.2 + 0.1
    })), []);

    const connections = useMemo(() => {
        const lines = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2));
                if (dist < 20) {
                    lines.push({ i, j, opacity: 1 - dist / 20 });
                }
            }
        }
        return lines;
    }, [nodes]);

    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d">
                {connections.map((line, idx) => {
                    const nodeA = nodes[line.i];
                    const nodeB = nodes[line.j];
                    return (
                        <motion.line
                            key={`line-${idx}`}
                            x1={nodeA.x}
                            y1={nodeA.y}
                            x2={nodeB.x}
                            y2={nodeB.y}
                            stroke="currentColor"
                            strokeWidth="0.05"
                            className="text-primary"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: line.opacity }}
                            transition={{ duration: 2, delay: idx * 0.02 }}
                        />
                    );
                })}
                {nodes.map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={node.x}
                        cy={node.y}
                        r={node.size / 15}
                        className="fill-primary"
                        animate={{
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        style={{
                            x: useTransform(mouseX, [0, 1], [-node.speed * 5, node.speed * 5]),
                            y: useTransform(mouseY, [0, 1], [-node.speed * 5, node.speed * 5]),
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            id="about"
            className="relative min-h-screen snap-section bg-background py-12 px-6 md:px-[8vw] flex flex-col items-center justify-center overflow-hidden"
        >
            <NeuralNetwork mouseX={springX} mouseY={springY} />

            {/* Kinetic Typography Background */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 right-[-5%] text-[20vw] font-black text-white/[0.02] select-none whitespace-nowrap leading-none z-0"
            >
                DATA SCIENCE DATA SCIENCE DATA
            </motion.div>
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-20 left-[-5%] text-[20vw] font-black text-white/[0.02] select-none whitespace-nowrap leading-none z-0"
            >
                MACHINE LEARNING MACHINE LEARNING
            </motion.div>

            <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Side: The "Core" Ident */}
                <div className="lg:col-span-4 space-y-12">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 text-primary font-mono text-[10px] uppercase tracking-[0.5em]"
                        >
                            <div className="w-8 h-px bg-primary" />
                            IDENTITY_v1.0
                        </motion.div>
                        <h2 className="text-7xl md:text-[8vw] font-black text-white tracking-tighter uppercase leading-none">
                            ABOUT<span className="text-primary italic">.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {[
                            { label: "Systems Built", value: "24+", desc: "Deployed production models" },
                            { label: "Data Scale", value: "TBs+", desc: "Processed daily volume" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5, scale: 1.02, rotateX: -2, rotateY: 2 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 glass border-white/5 rounded-2xl space-y-2 group hover:border-primary/30 transition-all cursor-crosshair preserve-3d"
                            >
                                <p className="text-primary font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
                                <p className="text-4xl font-bold text-white group-hover:text-glow transition-all">{stat.value}</p>
                                <p className="text-white/40 text-xs font-mono uppercase tracking-wider">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Narrative & Philosophy */}
                <div className="lg:col-span-8 lg:pl-12 space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4 text-primary/40 font-mono text-[10px] uppercase tracking-[0.4em]">
                            UPLINK_STATUS: SECURED // GENESIS_PROTOCOL
                        </div>
                        <p className="text-3xl md:text-5xl lg:text-5xl text-white font-black leading-[1.1] tracking-tighter uppercase italic">
                            I specialize in bridging the gap <br />
                            between <span className="text-primary">raw complexity</span> <br />
                            and <span className="text-glow">human intuition.</span>
                        </p>

                        <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />

                        <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
                            With a focus on predictive architectures and high-performance ML pipelines,
                            I don&apos;t just build models — I architect decision engines that drive measurable impact.
                            My approach combines rigorous statistical foundations with cutting-edge engineering.
                        </p>
                    </motion.div>

                    {/* Technical Stack Tags */}
                    <div className="flex flex-wrap gap-3 pt-8">
                        {["Deep Learning", "Predictive Analytics", "CV", "NLP", "MLOps"].map((tech, i) => (
                            <span key={i} className="px-5 py-2 rounded-full border border-white/10 glass text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-primary hover:border-primary/30 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section Footer: Ambient Deco */}
            <div className="absolute bottom-10 left-10 flex items-center gap-4 opacity-20 hidden md:flex">
                <div className="w-10 h-10 rounded-full border border-primary animate-ping" />
                <span className="text-[10px] font-mono text-white uppercase tracking-[0.4em]">System Active // 01 Genesis</span>
            </div>
        </section>
    );
}

