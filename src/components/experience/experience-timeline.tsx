"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Zap, Terminal, Activity, ChevronRight } from "lucide-react";

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
        title: "Data Analyst",
        org: "Linq (GoTogether Rides)",
        date: "Present",
        tag: "Analytics",
        impact: "Analyzed user and ride data to surface travel behavior, ride-sharing preferences, and spending patterns.",
        description: [
            "Built interactive Power BI dashboards for ride frequency, user intent, and usage trends.",
            "Translated analysis into actionable insights to support decisions and engagement strategy."
        ],
        metrics: "Power BI · Behavioral insights"
    },
    {
        id: "role-02",
        title: "Developer",
        org: "Codex Careers",
        date: "Present",
        tag: "Full_stack_AI",
        impact: "Built features for a B.Tech student platform including ATS resume scoring and interview prep.",
        description: [
            "Implemented AI-driven resume analysis and improvement suggestions.",
            "Used AWS Lambda, S3, and DynamoDB for backend processing and data management.",
            "Designed scalable workflows for feature development and deployment."
        ],
        metrics: "AWS serverless · AI features"
    },
    {
        id: "role-03",
        title: "Co-Founder",
        org: "Flowsite AI",
        date: "Present",
        tag: "Founder",
        impact: "Co-founded an AI-focused initiative exploring automation and intelligent systems for real problems.",
        description: [
            "Developed AI-driven workflows and tools for real-world use cases.",
            "Collaborated across ideation, build, and delivery of AI-based projects."
        ],
        metrics: "Automation · Product discovery"
    },
    {
        id: "role-04",
        title: "Co-organizer",
        org: "Mahindra University",
        date: "2025",
        tag: "Events",
        impact: "Co-organized a technical event at Mahindra University, contributing to planning and execution.",
        description: [],
        metrics: "Planning · Execution"
    }
];

export function ExperienceTimeline() {
    const [activeId, setActiveId] = useState(roles[0].id);
    const activeRole = roles.find(r => r.id === activeId) || roles[0];
    const [isValidating, setIsValidating] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleValidate = () => {
        setIsValidating(true);
        setTimeout(() => {
            setIsValidating(false);
            setIsVerified(true);
            setTimeout(() => setIsVerified(false), 3000);
        }, 1500);
    };

    return (
        <section id="experience" className="relative overflow-hidden border-b border-white/5 bg-[#020202] py-10 md:py-14 lg:py-16">
            {/* Background Data Stream */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.01)_1px,transparent_1px)] bg-[size:100px_100px] -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.05)_0%,transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Dashboard Header */}
                <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-3 text-primary font-mono text-[10px] uppercase tracking-[0.6em]">
                        <Activity className="w-4 h-4" />
                        Career_Trajectory_v4.2
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                        EXPERIENCES<span className="text-glow italic text-primary">.</span>
                    </h2>
                </div>

                {/* Dashboard Interface */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden glass">

                    {/* Role Sidebar (Tabs) */}
                    <div className="space-y-2 border-r border-white/10 bg-black/20 p-4 lg:col-span-4 lg:p-6">
                        <span className="mb-4 block pl-4 font-mono text-[10px] uppercase tracking-[0.4em] text-white/20">Registry_Select</span>
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => {
                                    setActiveId(role.id);
                                    setIsVerified(false);
                                }}
                                className={`group relative flex w-full items-center justify-between rounded-2xl p-5 text-left transition-all duration-500 ${activeId === role.id
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

                    {/* Data Pane (Experience Logs) */}
                    <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden p-4 md:min-h-[260px] lg:col-span-8 lg:min-h-[280px] lg:p-6">
                        {/* Logs Watermark */}
                        <div className="absolute top-10 right-10 text-[100px] font-black text-white/[0.02] pointer-events-none select-none italic tracking-tighter">
                            {activeRole.tag}
                        </div>

                        {/* Scanner Effect */}
                        <AnimatePresence>
                            {isValidating && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-50 pointer-events-none"
                                >
                                    <div className="absolute inset-0 bg-primary/5 backdrop-blur-[2px]" />
                                    <div className="scanline bg-primary/40 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="relative z-10 space-y-6"
                            >
                                {/* Role Header */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-mono text-primary uppercase tracking-[0.3em] font-black">
                                            Status_Active
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none drop-shadow-2xl">
                                            {activeRole.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-primary/60 font-mono tracking-widest mt-1">
                                            {activeRole.org} // {activeRole.date}
                                        </p>
                                    </div>
                                </div>

                                {/* Impact Description */}
                                <div className="space-y-3">
                                    <p className="max-w-2xl border-l-2 border-primary/30 pl-5 text-base font-light leading-relaxed text-white/90 md:text-lg md:pl-6">
                                        {activeRole.impact}
                                    </p>

                                    {activeRole.description.length > 0 && (
                                    <ul className="space-y-3">
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
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Performance Metric Footer */}
                        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] block">Core_Outcome</span>
                                    <span className="text-lg font-black text-white tracking-widest uppercase italic">{activeRole.metrics}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleValidate}
                                disabled={isValidating || isVerified}
                                className={`flex items-center gap-4 px-8 py-4 glass border-white/10 rounded-2xl group/btn transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202] ${isVerified ? "border-emerald-500/50 bg-emerald-500/10" : "hover:border-primary/30"
                                    }`}
                            >
                                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${isVerified ? "text-emerald-500" : "text-white/40 group-hover/btn:text-white"
                                    }`}>
                                    {isValidating ? "Validating..." : isVerified ? "Logs Verified" : "Validate Logs"}
                                </span>
                                {isVerified ? (
                                    <Zap className="w-4 h-4 text-emerald-500 animate-pulse" />
                                ) : (
                                    <ArrowUpRight className={`w-4 h-4 transition-all ${isValidating ? "animate-spin text-primary" : "text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
                                        }`} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
