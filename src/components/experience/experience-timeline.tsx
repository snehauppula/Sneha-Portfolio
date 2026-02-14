"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Trophy, Cpu, Zap, Activity, Terminal, ChevronRight } from "lucide-react";

interface ProfessionalRole {
    id: string;
    title: string;
    org: string;
    date: string;
    description: string[];
    metrics: string;
    tech: string[];
    icon: React.ReactNode;
}

const roles: ProfessionalRole[] = [
    {
        id: "role-01",
        title: "Data Science Lead",
        org: "CIVIGUARD",
        date: "2024 - PRESENT",
        description: [
            "Leading core data preprocessing & predictive model development for civic systems.",
            "Architected automated ML pipelines reducing manual cycle time by 40%.",
            "Coordinating cross-functional teams for API integration and database scaling.",
            "Implementing real-time data validation protocols in a Python/Django ecosystem."
        ],
        metrics: "Lead // 94% Accuracy Baseline",
        tech: ["Python", "Scikit-Learn", "FastAPI", "PostgreSQL"],
        icon: <Cpu className="w-5 h-5" />
    },
    {
        id: "role-02",
        title: "AI & ML Developer",
        org: "TECHNICAL PROJECTS",
        date: "2023 - 2024",
        description: [
            "Engineered end-to-end predictive architectures for classification and regression tasks.",
            "Developed high-precision deployment subsystems using Flask and Streamlit.",
            "Performed advanced feature engineering and outlier detection on high-dimensional datasets.",
            "Optimized model performance through hyperparameter tuning and cross-validation."
        ],
        metrics: "Development // Production-Ready",
        tech: ["Keras", "TensorFlow", "Pandas", "Streamlit"],
        icon: <Briefcase className="w-5 h-5" />
    },
    {
        id: "role-03",
        title: "Hackathon Finalist",
        org: "TECH MAHINDRA AI DAY",
        date: "2024",
        description: [
            "Collaborated on rapid prototyping of a civic-tech solution under intense time constraints.",
            "Built a competitive classification engine that reached the final evaluation round.",
            "Demonstrated scalability and real-world impact potential to industry judges."
        ],
        metrics: "Event Finalist // Innovation Peak",
        tech: ["MLOps", "Rapid Prototyping", "UI/UX Integration"],
        icon: <Trophy className="w-5 h-5" />
    }
];

export function ExperienceTimeline() {
    const [activeRoleId, setActiveRoleId] = useState(roles[0].id);
    const activeRole = roles.find(r => r.id === activeRoleId) || roles[0];

    return (
        <section id="experience" className="min-h-screen bg-[#020202] py-32 relative overflow-hidden flex flex-col items-center justify-center border-b border-white/5">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Header */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3 text-primary font-mono text-[10px] uppercase tracking-[0.5em]">
                        <Activity className="w-4 h-4" />
                        Professional_Evolution_Matrix
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        CAREER <br />
                        <span className="text-glow italic text-primary">COMMAND.</span>
                    </h2>
                </div>

                {/* Dashboard Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden glass">

                    {/* Role Sidebar */}
                    <div className="lg:col-span-4 border-r border-white/10 p-4 lg:p-8 space-y-2 bg-black/20">
                        <div className="px-4 pb-6 border-b border-white/5 mb-4">
                            <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em] block">System_Nodes</span>
                        </div>
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveRoleId(role.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 flex items-center justify-between group ${activeRoleId === role.id
                                        ? 'bg-primary/10 border border-primary/20'
                                        : 'hover:bg-white/5 border border-transparent'
                                    }`}
                            >
                                <div className="space-y-1">
                                    <h4 className={`text-lg font-bold transition-colors ${activeRoleId === role.id ? 'text-white' : 'text-white/40'}`}>
                                        {role.title}
                                    </h4>
                                    <p className={`text-[10px] font-mono uppercase tracking-[0.1em] ${activeRoleId === role.id ? 'text-primary' : 'text-white/20'}`}>
                                        {role.org}
                                    </p>
                                </div>
                                <ChevronRight className={`w-4 h-4 transition-all duration-500 ${activeRoleId === role.id ? 'text-primary translate-x-1' : 'text-white/0'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Data Pane */}
                    <div className="lg:col-span-8 p-8 lg:p-14 min-h-[600px] flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRoleId}
                                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-12"
                            >
                                {/* Role Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/5">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 rounded-3xl glass border-primary/20 flex items-center justify-center text-primary shadow-2xl shadow-primary/20">
                                            {activeRole.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-2">
                                                {activeRole.title}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="text-primary font-mono text-xs uppercase tracking-[0.2em] font-bold">{activeRole.org}</span>
                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                <span className="text-white/40 font-mono text-xs uppercase">{activeRole.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-primary/5 border border-primary/20 px-6 py-3 rounded-2xl flex flex-col items-end">
                                        <span className="text-[8px] font-mono text-primary/60 uppercase tracking-[0.3em] font-black">Performance_Metric</span>
                                        <span className="text-sm font-mono text-white font-black">{activeRole.metrics}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                                    <div className="md:col-span-8 space-y-6">
                                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.5em] block font-black">Achievement_Log</span>
                                        <ul className="space-y-6">
                                            {activeRole.description.map((line, i) => (
                                                <li key={i} className="flex gap-4 text-white/80 text-lg font-light leading-relaxed">
                                                    <Terminal className="w-5 h-5 text-primary/40 shrink-0 mt-1.5" />
                                                    <span>{line}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack Column */}
                                    <div className="md:col-span-4 space-y-6">
                                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em] block font-black">System_Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {activeRole.tech.map((item) => (
                                                <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-mono text-white font-bold uppercase tracking-widest hover:border-primary/30 transition-colors">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-10">
                                            <div className="p-6 rounded-3xl border border-white/5 bg-white/2 group hover:bg-white/5 transition-colors">
                                                <Zap className="w-6 h-6 text-primary mb-4 animate-pulse" />
                                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-2">Security_Status</span>
                                                <span className="text-xs font-mono text-primary font-black uppercase">Role_Active_S0{roles.indexOf(activeRole) + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
