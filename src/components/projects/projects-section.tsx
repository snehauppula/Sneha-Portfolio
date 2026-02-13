"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Database, Cpu, Globe } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    color: string;
    image: string;
    icon: React.ReactNode;
    id: string;
}

const projects: Project[] = [
    {
        title: "AI-Based College Predictor",
        description: "Advanced machine learning model to predict college admissions based on diverse student metrics.",
        tech: ["Python", "Flask", "Scikit-Learn"],
        color: "from-purple-500/40 to-blue-500/40",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        icon: <Cpu className="w-5 h-5 text-primary" />,
        id: "ARCH-71"
    },
    {
        title: "YouTube Viral Analytics",
        description: "Real-time data visualization and sentiment analysis for trending video content.",
        tech: ["Pandas", "Plotly", "D3.js"],
        color: "from-red-500/40 to-orange-500/40",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
        icon: <Database className="w-5 h-5 text-orange-400" />,
        id: "DATA-12"
    },
    {
        title: "CIVIGUARD AI",
        description: "Public safety intelligence platform integrating ML with real-time incident monitoring.",
        tech: ["TensorFlow", "Next.js", "FastAPI"],
        color: "from-emerald-500/40 to-cyan-500/40",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        icon: <Globe className="w-5 h-5 text-emerald-400" />,
        id: "SEC-09"
    }
];

interface ProjectCardProps {
    project: Project;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 py-24 px-4 md:px-[6vw]">
            <motion.div
                style={{ scale, opacity, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden glass border-white/5 shadow-2xl group"
            >
                {/* Visual Content */}
                <div className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 blur-[2px] group-hover:blur-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-20 transition-opacity`} />
                </div>

                {/* Scan Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="scanline opacity-20" />
                    <div className="absolute top-8 left-8 p-4 border-l border-t border-primary/40 opacity-40">
                        <span className="text-[10px] font-mono tracking-[0.4em] uppercase">{project.id}</span>
                    </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 z-20 p-8 md:p-16 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4 glass px-4 py-2 rounded-full border-white/10">
                            {project.icon}
                            <span className="text-xs font-mono tracking-widest text-white/60">SYSTEMS READY</span>
                        </div>
                        <div className="flex gap-3">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md text-[10px] font-mono border border-white/10">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 max-w-3xl">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight"
                        >
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? 'text-primary italic' : ''}>{word}{' '}</span>
                            ))}
                        </motion.h3>
                        <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex gap-6">
                            <button className="flex items-center gap-3 px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                                <ExternalLink className="w-4 h-4" /> Review Model
                            </button>
                            <button className="flex items-center gap-3 px-8 py-3 rounded-full glass border-white/10 font-bold hover:bg-white/5 hover:scale-105 active:scale-95 transition-all">
                                <Github className="w-4 h-4" /> Source Code
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function ProjectsSection() {
    return (
        <section className="relative bg-background">
            {/* Project Header */}
            <div className="snap-section h-screen flex flex-col items-center justify-center space-y-8 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 text-primary font-mono text-xs uppercase tracking-[0.4em]"
                >
                    <div className="w-12 h-px bg-primary/40" />
                    Portfolio Output
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-[10vw] font-bold tracking-tight leading-none"
                >
                    SELECTED <br /> <span className="text-glow text-primary italic">WORKS.</span>
                </motion.h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl font-light">
                    Transforming complex data architectures into intuitive digital experiences.
                </p>
            </div>

            {/* Stacking Cards Container */}
            <div className="relative">
                {projects.map((project, index) => (
                    <div key={project.title} className="snap-section">
                        <ProjectCard
                            project={project}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

