"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Zap, Terminal, Activity, Briefcase, ChevronRight } from "lucide-react";

interface ProfessionalRole {
    id: string;
    title: string;
    org: string;
    date: string;
    impact: string;
    description: string[];
    metrics: string;
    tag: string;
}

const roles: ProfessionalRole[] = [
    {
        id: "role-01",
        title: "Data Science Lead",
        org: "CIVIGUARD",
        date: "24' - PRES",
        tag: "Lead_Ops",
        impact: "Architecting automated predictive pipelines for large-scale civic systems.",
        description: [
            "Leading core data preprocessing & predictive model development for civic utility optimization.",
            "Reduced manual cycle time by 40% through MLOps automation and cloud-native ingestion.",
            "Implementing real-time validation in Python/Django stacks for deployment integrity."
        ],
        metrics: "94% Accuracy Baseline"
    },
    {
        id: "role-02",
        title: "AI & ML Developer",
        org: "TECH PROJECTS",
        date: "23' - 24'",
        tag: "Core_ML",
        impact: "Engineering end-to-end predictive architectures for high-precision tasks.",
        description: [
            "Developed deployment subsystems using Flask and Streamlit for rapid prototyping.",
            "Performed outlier detection on high-dimensional datasets using advanced statistical methods.",
            "Optimized model performance through automated hyperparameter tuning and cross-validation."
        ],
        metrics: "Production-Ready Deployment"
    },
    {
        id: "role-03",
        title: "Hackathon Finalist",
        org: "TECH MAHINDRA",
        date: "2024",
        tag: "Innov_Unit",
        impact: "Rapidly prototyping civic-tech engines for real-world impact evaluation.",
        description: [
            "Built a competitive classification engine for AI Day evaluation within a 24-hour cycle.",
            "Demonstrated scalability and integration potential to industry judging panels."
        ],
        metrics: "Innovation Peak Finalist"
    }
];

export function ExperienceTimeline() {
    const [activeId, setActiveId] = useState(roles[0].id);
    const activeRole = roles.find(r => r.id === activeId) || roles[0];

    return (
        <section id="experience" className="min-h-screen bg-[#020202] py-32 relative overflow-hidden flex flex-col items-center justify-center border-b border-white/5">
            {/* Background Data Stream */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.01)_1px,transparent_1px)] bg-[size:100px_100px] -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.05)_0%,transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Dashboard Header */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3 text-primary font-mono text-[10px] uppercase tracking-[0.6em]">
                        <Activity className="w-4 h-4" />
                        Career_Trajectory_v4.2
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        COMMAND <br />
                        <span className="text-glow italic text-primary">CENTER.</span>
                    </h2>
                </div>

                {/* Dashboard Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden glass">

                    {/* Role Sidebar (Tabs) */}
                    <div className="lg:col-span-4 border-r border-white/10 p-4 lg:p-8 space-y-2 bg-black/20">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] block mb-6 pl-4">Registry_Select</span>
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveId(role.id)}
                                className={`w-full group relative p-6 rounded-2xl flex items-center justify-between transition-all duration-500 text-left ${activeId === role.id
                                        ? "bg-primary/10 border-primary/20 shadow-xl"
                                        : "hover:bg-white/5 border-transparent"
                                    } border`}
                            >
                                <div className="space-y-1">
                                    <span className={`text-[9px] font-mono uppercase tracking-widest block transition-colors ${activeId === role.id ? "text-primary" : "text-white/20"
                                        }`}>
                                        {role.date}
                                    </span>
                                    <h4 className={`text-sm md:text-base font-bold transition-colors ${activeId === role.id ? "text-white" : "text-white/40"
                                        }`}>
                                        {role.org}
                                    </h4>
                                </div>
                                <ChevronRight className={`w-4 h-4 transition-all ${activeId === role.id ? "text-primary translate-x-0" : "text-white/10 -translate-x-2 opacity-0"
                                    }`} />

                                {activeId === role.id && (
                                    <motion.div
                                        layoutId="sidebar-accent"
                                        className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Data Pane (Dossier) */}
                    <div className="lg:col-span-8 p-8 lg:p-14 min-h-[600px] flex flex-col justify-between relative overflow-hidden">
                        {/* Dossier Watermark */}
                        <div className="absolute top-10 right-10 text-[100px] font-black text-white/[0.02] pointer-events-none select-none italic tracking-tighter">
                            {activeRole.tag}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-12 relative z-10"
                            >
                                {/* Role Header */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-mono text-primary uppercase tracking-[0.3em] font-black">
                                            Status_Active
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none drop-shadow-2xl">
                                            {activeRole.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-primary/60 font-mono tracking-widest mt-2">
                                            {activeRole.org} // {activeRole.date}
                                        </p>
                                    </div>
                                </div>

                                {/* Impact Description */}
                                <div className="space-y-8">
                                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-8">
                                        {activeRole.impact}
                                    </p>

                                    <ul className="space-y-4">
                                        {activeRole.description.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex items-start gap-4 text-white/40 text-sm md:text-base group/item"
                                            >
                                                <Terminal className="w-4 h-4 mt-1 text-primary/40 group-hover/item:text-primary transition-colors flex-shrink-0" />
                                                <span className="group-hover:text-white/60 transition-colors italic">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Performance Metric Footer */}
                        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] block">Core_Outcome</span>
                                    <span className="text-lg font-black text-white tracking-widest uppercase italic">{activeRole.metrics}</span>
                                </div>
                            </div>

                            <button className="flex items-center gap-4 px-8 py-4 glass border-white/10 rounded-2xl group/btn hover:border-primary/30 transition-all active:scale-95">
                                <span className="text-[10px] font-mono text-white/40 group-hover/btn:text-white transition-colors uppercase tracking-[0.2em]">Validate Dossier</span>
                                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
