"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cpu, Globe, Layers, Zap, Terminal, Activity, Boxes, Code2, Database, Briefcase } from "lucide-react";

interface SkillCluster {
    id: string;
    title: string;
    label: string;
    icon: React.ReactNode;
    color: string;
    skills: string[];
    description: string;
}

const clusters: SkillCluster[] = [
    {
        id: "programming",
        title: "Kernel_Languages",
        label: "Logic Units",
        icon: <Terminal className="w-6 h-6" />,
        color: "rgb(168, 85, 247)", // Purple
        description: "Primary computational languages used for system architecture, logic integration, and algorithmic foundations.",
        skills: ["Python", "SQL", "C++", "JavaScript", "HTML/CSS"]
    },
    {
        id: "ds_ml",
        title: "Neural_Compute",
        label: "AI Subsystems",
        icon: <Cpu className="w-6 h-6" />,
        color: "rgb(16, 185, 129)", // Emerald
        description: "Advanced machine learning frameworks and data processing kernels for high-dimensional statistical analysis.",
        skills: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Keras", "Matplotlib", "Seaborn"]
    },
    {
        id: "dev_tools",
        title: "Edge_Deployment",
        label: "System IO",
        icon: <Globe className="w-6 h-6" />,
        color: "rgb(59, 130, 246)", // Blue
        description: "Modern deployment pipelines and interface layers for real-time model interaction and system distribution.",
        skills: ["Flask", "Streamlit", "Git/GitHub", "Docker", "Jupyter", "Postman", "Vercel"]
    },
    {
        id: "core_cs",
        title: "System_Foundry",
        label: "Core Matrix",
        icon: <Layers className="w-6 h-6" />,
        color: "rgb(244, 63, 94)", // Rose
        description: "Fundamental computer science principles and database operations that power the underlying infrastructure.",
        skills: ["DSA", "DBMS", "OOP", "OS Fundamentals", "System Design", "Cloud Basics"]
    }
];

export function SkillsSection() {
    const [activeId, setActiveId] = useState(clusters[0].id);
    const activeCluster = clusters.find(c => c.id === activeId) || clusters[0];

    return (
        <section id="skills" className="min-h-screen bg-[#020202] py-32 relative overflow-hidden flex flex-col items-center justify-center border-b border-white/5">
            {/* Background Grid Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.02),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Section Title */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3 text-primary font-mono text-[10px] uppercase tracking-[0.6em]">
                        <Activity className="w-4 h-4" />
                        Synapse_Processor_v6.0
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        NEURAL <br />
                        <span className="text-glow italic text-primary">CAPABILITY.</span>
                    </h2>
                </div>

                {/* Integrated Bento Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Panel: Neural Processor Grid (Bento) */}
                    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {clusters.map((cluster) => (
                            <motion.button
                                key={cluster.id}
                                onClick={() => setActiveId(cluster.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 text-left overflow-hidden h-64 flex flex-col justify-between group ${activeId === cluster.id
                                        ? "bg-white/[0.05] border-white/20 shadow-2xl shadow-primary/10"
                                        : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                    }`}
                            >
                                {/* Animated Background Glow */}
                                <div
                                    className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                                    style={{ backgroundColor: cluster.color }}
                                />

                                <div className="relative z-10 space-y-4">
                                    <div
                                        className="w-14 h-14 rounded-2xl glass flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                        style={{
                                            borderColor: activeId === cluster.id ? cluster.color : 'rgba(255,255,255,0.1)',
                                            color: activeId === cluster.id ? cluster.color : 'rgba(255,255,255,0.4)'
                                        }}
                                    >
                                        {cluster.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] block mb-1">
                                            {cluster.label}
                                        </span>
                                        <h4 className={`text-2xl font-black tracking-tight uppercase leading-none transition-colors ${activeId === cluster.id ? "text-white" : "text-white/40"
                                            }`}>
                                            {cluster.title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cluster.color }} />
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Status: Operational</span>
                                    </div>
                                    <Terminal className={`w-4 h-4 transition-colors ${activeId === cluster.id ? "text-primary" : "text-white/10"
                                        }`} />
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Panel: Subsystem Inventory */}
                    <div className="lg:col-span-6 h-full">
                        <div className="glass h-full p-10 md:p-14 rounded-[3.5rem] border-white/10 flex flex-col justify-between group overflow-hidden relative">
                            {/* Scanning Line Effect */}
                            <motion.div
                                animate={{ y: [0, 500, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-1 bg-primary/10 blur-sm pointer-events-none z-0"
                            />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative z-10 space-y-12"
                                >
                                    {/* Inventory Header */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="px-4 py-1.5 rounded-full text-[9px] font-mono font-black uppercase tracking-[0.3em] border shadow-sm"
                                                style={{ borderColor: activeCluster.color + '40', color: activeCluster.color, backgroundColor: activeCluster.color + '10' }}
                                            >
                                                SYST_ACCESS_STABLE
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        </div>
                                        <div>
                                            <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                                                SUBSYSTEM <br />
                                                <span className="text-glow italic" style={{ color: activeCluster.color }}>INVENTORY.</span>
                                            </h3>
                                            <p className="text-white/40 text-base font-light leading-relaxed max-w-md">
                                                {activeCluster.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Qualitative Skill Grid */}
                                    <div className="space-y-6">
                                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em] block font-black">Registered_Nodes</span>
                                        <div className="flex flex-wrap gap-3">
                                            {activeCluster.skills.map((skill, i) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-mono text-white font-bold uppercase tracking-widest hover:border-white/30 transition-all flex items-center gap-3 group/chip"
                                                >
                                                    <Code2 className="w-3 h-3 transition-colors group-hover/chip:text-primary opacity-40" />
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Data Integrity Footer */}
                                    <div className="pt-10 flex items-center gap-6 opacity-30 group-hover:opacity-60 transition-opacity">
                                        <Boxes className="w-6 h-6 text-white" />
                                        <div className="text-[10px] font-mono text-white uppercase tracking-[0.2em] leading-tight">
                                            SYSTEM_INTEGRITY_INDEX: 100 // ENCRYPTION_SAFE <br />
                                            LATENCY: 0.001MS // NODES_ONLINE: {activeCluster.skills.length}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
