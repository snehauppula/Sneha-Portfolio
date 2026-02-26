"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Code2, X, Activity } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    id: string;
    color: string;
}

const projects: Project[] = [
    {
        title: "College Prediction System",
        description: "An advanced predictive engine designed to forecast academic placements with surgical precision. Built on high-dimensional counseling datasets with an optimized MLOps pipeline.",
        tech: ["Python", "Flask", "Pandas", "Scikit"],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        id: "01",
        color: "#A855F7" // Purple
    },
    {
        title: "Mini Music Predictor",
        description: "A classification-based intelligence system that deciphers user music preferences. It transforms complex audio features into actionable preference clusters.",
        tech: ["ML", "Python", "Matplotlib"],
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
        id: "02",
        color: "#EAB308" // Yellow
    },
    {
        title: "CleanData Visualization",
        description: "Automated data sanitation meets high-fidelity visualization. This tool purges noise and reveals patterns in complex datasets with zero-latency insights.",
        tech: ["Streamlit", "Numpy", "Seaborn"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        id: "03",
        color: "#10B981" // Emerald
    },
    {
        title: "Flask Content Manager",
        description: "A robust backend architecture for content management. Built for high-availability environments with structured secondary-key database models.",
        tech: ["Flask", "SQLAlchemy", "Postgres"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
        id: "04",
        color: "#3B82F6" // Blue
    }
];

export function ProjectsSection() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const activeProject = projects.find(p => p.id === selectedId);

    return (
        <section id="projects" className="min-h-screen bg-[#020202] py-12 relative flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
                {/* Header Section */}
                <div className="mb-12 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-primary font-mono text-[10px] uppercase tracking-[0.5em]"
                    >
                        <div className="w-8 h-px bg-primary" />
                        DATA_WORKS_v1.0
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none"
                    >
                        PROJECTS<span className="text-glow italic text-primary">.</span>
                    </motion.h2>
                </div>

                {/* Minimal Grid Array */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12, transition: { duration: 0.4, ease: "circOut" } }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer aspect-[3/2] rounded-[3rem] overflow-hidden glass border-white/12 relative transition-all duration-500 hover:border-primary/40 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
                        >
                            {/* Base Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 brightness-50 group-hover:brightness-100"
                            />

                            {/* Holographic Aberration Layers */}
                            <AnimatePresence>
                                {hoveredId === project.id && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: 0 }}
                                            animate={{ opacity: 0.4, x: -4 }}
                                            exit={{ opacity: 0, x: 0 }}
                                            className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
                                        >
                                            <Image src={project.image} alt="Red" fill sizes="1000px" className="object-cover brightness-150 saturate-200 opacity-50 transition-all duration-500" style={{ filter: "sepia(1) hue-rotate(-50deg) saturate(5)" }} />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 0 }}
                                            animate={{ opacity: 0.4, x: 4 }}
                                            exit={{ opacity: 0, x: 0 }}
                                            className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
                                        >
                                            <Image src={project.image} alt="Blue" fill sizes="1000px" className="object-cover brightness-150 saturate-200 opacity-50 transition-all duration-500" style={{ filter: "sepia(1) hue-rotate(150deg) saturate(5)" }} />
                                        </motion.div>

                                        {/* Scanner Line */}
                                        <motion.div
                                            initial={{ top: "-10%" }}
                                            animate={{ top: "110%" }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-1.5 bg-primary/60 blur-[6px] z-20 pointer-events-none"
                                        />
                                    </>
                                )}
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-between z-30">
                                <span className="text-xs font-mono text-primary uppercase tracking-[0.5em] font-black block">SYSTEM_NODE_{project.id}</span>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-[11px] font-mono text-white/60 uppercase tracking-[0.4em] group-hover:text-primary transition-colors">
                                        INITIALIZE_PROTOCOL <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Active Dossier Overlay */}
            <AnimatePresence>
                {selectedId && activeProject && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            layoutId={`project-${activeProject.id}`}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative w-full max-w-6xl glass rounded-[3.5rem] border-white/20 overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[70vh] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            {/* Media Panel */}
                            <div className="w-full lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                                <Image
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent hidden lg:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />

                                {/* Close Button Mobile */}
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 right-6 lg:hidden w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Content Panel */}
                            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-between overflow-y-auto">
                                <div className="space-y-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-primary font-mono text-[10px] uppercase tracking-[0.4em]">
                                                <Activity className="w-4 h-4" />
                                                Dossier_ID: {activeProject.id}
                                            </div>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="hidden lg:flex w-10 h-10 rounded-full glass border-white/20 items-center justify-center text-white/40 hover:text-white hover:border-primary/40 transition-all"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                            {activeProject.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
                                            {activeProject.description}
                                        </p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex flex-wrap gap-3">
                                            {activeProject.tech.map((t) => (
                                                <span key={t} className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-mono text-white/60 uppercase tracking-widest">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-6">
                                            <button className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black font-black uppercase text-[11px] tracking-widest hover:scale-105 active:scale-95 transition-all">
                                                Source Code
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                            <button className="w-16 h-16 rounded-2xl glass border-white/20 flex items-center justify-center hover:bg-white/5 transition-all text-white/40 hover:text-white hover:border-primary/40">
                                                <Github className="w-7 h-7" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">
                                    <span>Status: Project_Unlocked</span>
                                    <span>Integrity: Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
