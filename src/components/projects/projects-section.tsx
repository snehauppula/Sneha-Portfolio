"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Github, ExternalLink, ArrowRight, Sparkles, Folder } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    id: string;
    year: string;
    metrics: string[];
}

const projects: Project[] = [
    {
        title: "College Prediction System",
        description: "Advanced predictive model developed using counseling dataset architectures to forecast academic placements with high precision.",
        tech: ["Python", "Flask", "ML"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        id: "PREDICT_SYS",
        metrics: ["94.2% Precision", "MLOps Optimized"]
    },
    {
        title: "Mini Music Predictor",
        description: "Intelligence engine designed to decipher user music preferences using optimized hyperparameter tuning and classification algorithms.",
        tech: ["ML", "Python", "Stats"],
        year: "2023",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
        id: "AUDIO_CORE",
        metrics: ["91% Recall", "Real-time Class"]
    },
    {
        title: "CleanData Visualization",
        description: "A Streamlit-powered tool that automates complex data cleaning workflows providing real-time graphical insights for data scientists.",
        tech: ["Streamlit", "Numpy", "Seaborn"],
        year: "2023",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        id: "VIS_DA",
        metrics: ["100% Automation", "Dashboard Ready"]
    },
    {
        title: "Flask Content Manager",
        description: "Robust backend system utilizing SQLAlchemy for structured content management and high-availability server configurations.",
        tech: ["Flask", "SQL", "Backend"],
        year: "2022",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
        id: "BACKEND_CORE",
        metrics: ["R/W Optimized", "Integrity Verified"]
    }
];

export function ProjectsSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section id="projects" className="bg-[#020202] py-40 relative flex items-center justify-center overflow-hidden">
            {/* Subtle atmospheric gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.015),transparent_70%)]" />

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left: Section Header */}
                <div className="lg:col-span-4 flex flex-col justify-between py-4">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-primary/60 font-mono text-[10px] uppercase tracking-[0.4em]"
                        >
                            <Sparkles className="w-4 h-4" />
                            Project Index
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]"
                        >
                            SELECTED <br />
                            <span className="text-glow italic text-primary">WORKS.</span>
                        </motion.h2>
                        <p className="text-white/30 text-base font-light leading-relaxed border-l border-white/5 pl-6 max-w-xs">
                            A curated archive of technical systems and data-driven solutions.
                        </p>
                    </div>

                    {/* Image Preview Canvas (Visible on Hover) */}
                    <div className="hidden lg:block relative aspect-[4/3] w-full rounded-2xl overflow-hidden glass border-white/5 bg-white/[0.01] mt-12 group">
                        <AnimatePresence mode="wait">
                            {hoveredId ? (
                                <motion.div
                                    key={hoveredId}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={projects.find(p => p.id === hoveredId)?.image || ""}
                                        alt="Preview"
                                        fill
                                        className="object-cover brightness-[0.6] grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-transparent" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.05 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Folder className="w-10 h-10 text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: The Archive List */}
                <div className="lg:col-span-8 flex flex-col justify-center divide-y divide-white/5 border-y border-white/5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative py-8 cursor-default"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                                <div className="space-y-3 flex-1">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[9px] font-mono text-primary/40 tracking-widest uppercase font-black">
                                            0{index + 1} // {project.year}
                                        </span>
                                        <div className="flex gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase group-hover:text-primary transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                        <ArrowRight className="w-5 h-5 text-white/5 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                    </div>
                                    <p className="text-white/20 text-xs max-w-lg font-light leading-relaxed hidden md:block">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center md:flex-col md:items-end justify-between py-2">
                                    <div className="flex gap-4">
                                        <Github className="w-4 h-4 text-white/10 hover:text-white transition-colors cursor-pointer" />
                                        <ExternalLink className="w-4 h-4 text-white/10 hover:text-white transition-colors cursor-pointer" />
                                    </div>
                                    <div className="hidden md:flex flex-col items-end mt-4">
                                        {project.metrics.slice(0, 1).map(m => (
                                            <span key={m} className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em] group-hover:text-primary/40 transition-colors">
                                                {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Image Preview (Subtle) */}
                            <div className="mt-6 md:hidden relative aspect-video w-full rounded-xl overflow-hidden glass border-white/5 bg-white/[0.01]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-30 grayscale"
                                />
                            </div>

                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 -z-0 rounded-xl" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle background noise overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
