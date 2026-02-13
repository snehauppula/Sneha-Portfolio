"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Skill {
    id: string;
    name: string;
    category: string;
    x: number;
    y: number;
    confidence: number;
}

const skills: Skill[] = [
    { id: "python", name: "Python", category: "core", x: 200, y: 150, confidence: 0.98 },
    { id: "ml", name: "Machine Learning", category: "ai", x: 400, y: 100, confidence: 0.95 },
    { id: "dl", name: "Deep Learning", category: "ai", x: 600, y: 150, confidence: 0.92 },
    { id: "nlp", name: "NLP", category: "ai", x: 750, y: 300, confidence: 0.88 },
    { id: "cv", name: "Computer Vision", category: "ai", x: 550, y: 400, confidence: 0.85 },
    { id: "nextjs", name: "Next.js", category: "web", x: 150, y: 350, confidence: 0.90 },
    { id: "react", name: "React", category: "web", x: 300, y: 500, confidence: 0.93 },
    { id: "sql", name: "SQL / NoSQL", category: "data", x: 450, y: 250, confidence: 0.94 },
];

const connections = [
    ["python", "ml"], ["ml", "dl"], ["dl", "nlp"], ["dl", "cv"],
    ["python", "nextjs"], ["nextjs", "react"], ["ml", "sql"], ["sql", "python"]
];

export function SkillsVisualization() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section className="relative py-32 px-6 bg-background overflow-hidden min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full space-y-12">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-4 text-primary font-mono text-xs uppercase tracking-[0.4em]"
                    >
                        <div className="w-12 h-px bg-primary/40" />
                        Skill Graph Architecture
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Neural <span className="text-primary italic text-glow">Ecosystem</span>
                    </motion.h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                        Interactive cognitive map of my technical stack. Hover nodes to see connectivity and confidence metrics.
                    </p>
                </div>

                <div className="relative aspect-[16/9] w-full glass rounded-[3rem] border-white/5 overflow-hidden group/canvas shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent:80%)]" />

                    <svg viewBox="0 0 900 600" className="w-full h-full relative z-10 drop-shadow-2xl">
                        {/* Connection Lines */}
                        {connections.map(([fromId, toId], i) => {
                            const from = skills.find(s => s.id === fromId)!;
                            const to = skills.find(s => s.id === toId)!;
                            const isActive = hoveredSkill === fromId || hoveredSkill === toId;

                            return (
                                <motion.line
                                    key={i}
                                    x1={from.x} y1={from.y}
                                    x2={to.x} y2={to.y}
                                    stroke="currentColor"
                                    strokeWidth={isActive ? 2 : 1}
                                    className={`${isActive ? 'text-primary' : 'text-white/10'} transition-colors duration-500`}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: i * 0.1 }}
                                />
                            );
                        })}

                        {/* Nodes */}
                        {skills.map((skill) => (
                            <motion.g
                                key={skill.id}
                                onHoverStart={() => setHoveredSkill(skill.id)}
                                onHoverEnd={() => setHoveredSkill(null)}
                                className="cursor-pointer group/node"
                            >
                                {/* Outer Glow */}
                                <motion.circle
                                    cx={skill.x} cy={skill.y} r={15}
                                    className="fill-primary/20 opacity-0 group-hover/node:opacity-100 transition-opacity"
                                />
                                {/* Core Node */}
                                <motion.circle
                                    cx={skill.x} cy={skill.y} r={6}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileHover={{ scale: 1.5 }}
                                    className={`${hoveredSkill === skill.id ? 'fill-primary' : 'fill-white/40'} transition-colors duration-300`}
                                />
                                {/* Label */}
                                <text
                                    x={skill.x} y={skill.y + 25}
                                    textAnchor="middle"
                                    className={`text-[10px] font-mono tracking-widest fill-white/60 uppercase select-none pointer-events-none transition-opacity ${hoveredSkill && hoveredSkill !== skill.id ? 'opacity-20' : 'opacity-100'}`}
                                >
                                    {skill.name}
                                </text>
                            </motion.g>
                        ))}
                    </svg>

                    {/* Metadata Overlay Panel */}
                    <AnimatePresence>
                        {hoveredSkill && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute top-8 right-8 w-48 glass p-6 rounded-2xl border-white/10 z-20 pointer-events-none"
                            >
                                {(() => {
                                    const s = skills.find(sk => sk.id === hoveredSkill)!;
                                    return (
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-mono text-primary uppercase tracking-widest leading-none">Node ID</p>
                                                <p className="text-lg font-bold leading-tight">{s.name}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none">Confidence Score</p>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${s.confidence * 100}%` }}
                                                            className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                                                        />
                                                    </div>
                                                    <span className="text-xs font-mono text-primary">{(s.confidence * 100).toFixed(0)}%</span>
                                                </div>
                                            </div>
                                            <p className="text-[8px] font-mono text-white/20 italic">Status: Fully Optimized</p>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

