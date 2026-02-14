"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, Cpu, Activity, Layers, Zap, Terminal, Code2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    id: string;
    metrics: string[];
    color: string;
}

const projects: Project[] = [
    {
        title: "College Prediction System",
        description: "Advanced predictive model developed using counseling dataset architectures. Features a dedicated Flask interface to forecast academic placements with high precision.",
        tech: ["Python", "Flask", "Pandas", "Scikit-Learn"],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        id: "PREDICT_SYS_V4",
        metrics: ["94.2% Precision", "12 Node Arch", "MLOps Optimized"],
        color: "rgb(168, 85, 247)"
    },
    {
        title: "Mini Music Predictor",
        description: "Classification-based intelligence engine designed to decipher user music preferences using optimized hyperparameter tuning.",
        tech: ["Python", "Machine Learning", "Matplotlib"],
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
        id: "AUDIO_CORE_X1",
        metrics: ["91% Recall", "24 Dim Feature Set", "Real-time Class"],
        color: "rgb(234, 179, 8)"
    },
    {
        title: "CleanData Visualization",
        description: "A Streamlit-powered data cleaning and visualization tool that automates complex workflows with real-time graphical insights.",
        tech: ["Streamlit", "Numpy", "Seaborn"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        id: "VIS_DA_009",
        metrics: ["100% Automation", "0.2ms Parsing", "Dashboard Ready"],
        color: "rgb(16, 185, 129)"
    },
    {
        title: "Flask Content Manager",
        description: "Robust backend architecture utilizing SQLAlchemy for structured content management and high-availability configurations.",
        tech: ["Flask", "SQLAlchemy", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
        id: "BACKEND_LOG_X",
        metrics: ["R/W Optimized", "Sync Sync Rate", "Integrity Verified"],
        color: "rgb(59, 130, 246)"
    }
];

export function ProjectsSection() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#020202]">
            <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden">
                {/* Horizontal Header */}
                <div className="container mx-auto px-6 lg:px-12 mb-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-primary font-mono text-[10px] uppercase tracking-[0.6em] mb-4"
                    >
                        <Terminal className="w-4 h-4" />
                        Intelligence_Vault_v6.5
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        SELECTED <br />
                        <span className="text-glow italic text-primary font-serif">WORKS.</span>
                    </h2>
                </div>

                {/* Horizontal Moving Container */}
                <motion.div style={{ x }} className="flex gap-12 px-6 lg:px-12 items-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}

                    {/* Final CTA Card */}
                    <div className="flex-shrink-0 w-80 h-[500px] flex flex-col items-center justify-center text-center space-y-6 glass rounded-[3rem] border-white/5 bg-white/[0.01]">
                        <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center animate-pulse">
                            <ArrowRight className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-widest">End_of_Scan</h4>
                        <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">Contact for more dossiers</p>
                    </div>
                </motion.div>

                {/* Background Telemetry Layers */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.01)_1px,transparent_1px)] bg-[size:100px_100px] -z-10" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -z-10" />
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
    return (
        <div className="flex-shrink-0 w-[85vw] md:w-[650px] group">
            <div className="glass rounded-[3.5rem] border-white/10 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 flex flex-col md:flex-row h-full">

                {/* Visual Node */}
                <div className="relative w-full md:w-2/5 h-64 md:h-[500px] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale brightness-50 contrast-125 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                    />

                    <div className="absolute top-8 left-8">
                        <div
                            className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center shadow-2xl"
                            style={{ color: project.color }}
                        >
                            <Code2 className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Data Dossier */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em] block">Dossier_{project.id}</span>
                            <div className="flex gap-2">
                                <Github className="w-4 h-4 text-white/20 hover:text-primary transition-colors cursor-pointer" />
                                <ExternalLink className="w-4 h-4 text-white/20 hover:text-primary transition-colors cursor-pointer" />
                            </div>
                        </div>

                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-2xl">
                            {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[9px] font-mono text-white/70 uppercase tracking-widest font-black">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Integrated Metrics */}
                    <div className="pt-8 border-t border-white/5 grid grid-cols-1 gap-4">
                        <div className="flex items-center gap-3">
                            <Activity className="w-4 h-4 text-primary/40" />
                            <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] font-black">Performance_Index</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {project.metrics.map((m) => (
                                <div key={m} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary" />
                                    <span className="text-[10px] font-mono text-white/80 uppercase tracking-tighter">{m}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
