"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

interface ProfessionalRole {
    id: string;
    title: string;
    org: string;
    date: string;
    impact: string;
    description: string[];
    metrics: string;
}

const roles: ProfessionalRole[] = [
    {
        id: "role-01",
        title: "Data Science Lead",
        org: "CIVIGUARD",
        date: "24' - PRES",
        impact: "Architecting automated predictive pipelines for large-scale civic systems.",
        description: [
            "Leading core data preprocessing & predictive model development.",
            "Reduced manual cycle time by 40% through MLOps automation.",
            "Implementing real-time validation in Python/Django stacks."
        ],
        metrics: "94% Accuracy Baseline"
    },
    {
        id: "role-02",
        title: "AI & ML Developer",
        org: "TECH PROJECTS",
        date: "23' - 24'",
        impact: "Engineering end-to-end predictive architectures for high-precision tasks.",
        description: [
            "Developed deployment subsystems using Flask and Streamlit.",
            "Performed outlier detection on high-dimensional datasets.",
            "Optimized model performance through hyperparameter tuning."
        ],
        metrics: "Production-Ready Deployment"
    },
    {
        id: "role-03",
        title: "Hackathon Finalist",
        org: "TECH MAHINDRA",
        date: "2024",
        impact: "Rapidly prototyping civic-tech engines for real-world impact evaluation.",
        description: [
            "Built a competitive classification engine for AI Day evaluation.",
            "Demonstrated scalability to industry judging panels."
        ],
        metrics: "Innovation Peak Finalist"
    }
];

export function ExperienceTimeline() {
    return (
        <section id="experience" className="bg-[#020202] py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">

                {/* Minimalist Section Header */}
                <div className="mb-24 flex items-center gap-6">
                    <div className="h-px w-12 bg-primary/20" />
                    <h2 className="text-xs font-mono text-primary/40 uppercase tracking-[0.6em] font-black">
                        Professional Evolution
                    </h2>
                </div>

                <div className="relative">
                    {/* The Synapse: Thin vertical thread */}
                    <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0" />

                    {/* Roles Nodes */}
                    <div className="space-y-32">
                        {roles.map((role, index) => (
                            <SynapseNode key={role.id} role={role} isLeft={index % 2 === 0} />
                        ))}
                    </div>
                </div>

                {/* Performance Footer Metric */}
                <div className="mt-32 pt-8 flex justify-center">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.01]">
                        <Zap className="w-3 h-3 text-primary/40" />
                        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Optimized_Trajectory_Locked</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SynapseNode({ role, isLeft }: { role: ProfessionalRole; isLeft: boolean }) {
    return (
        <div className={`relative flex items-start ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

            {/* The Node Point */}
            <div className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-20">
                <div className="w-[9px] h-[9px] rounded-full border border-primary/40 bg-[#020202] group-hover:bg-primary transition-colors flex items-center justify-center">
                    <div className="w-[3px] h-[3px] rounded-full bg-primary/40" />
                </div>
            </div>

            {/* Date Tag */}
            <div className={`hidden md:block w-1/2 ${isLeft ? 'pl-16' : 'pr-16 text-right'}`}>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest font-black italic">
                    {role.date}
                </span>
            </div>

            {/* Content Card (Ultra Minimal) */}
            <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{role.date}</span>
                    </div>

                    <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} gap-1 mb-4`}>
                        <h3 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-black">{role.org}</h3>
                        <div className="flex items-center gap-2">
                            <h4 className="text-xl font-bold text-white tracking-tight">{role.title}</h4>
                            <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-primary transition-colors" />
                        </div>
                    </div>

                    <p className="text-[13px] text-white/40 leading-relaxed font-light mb-6 max-w-sm inline-block group-hover:text-white/60 transition-colors">
                        {role.impact}
                    </p>

                    {/* Interactive Metrics Reveal */}
                    <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} gap-3`}>
                        <div className="flex items-center gap-2 group/reveal cursor-default">
                            <div className="w-1 h-1 rounded-full bg-primary/40" />
                            <span className="text-[9px] font-mono text-primary/30 uppercase tracking-widest italic group-hover:text-primary transition-colors">
                                {role.metrics}
                            </span>
                        </div>

                        {/* Hidden Detail Bullets (Revealed via Group Hover) */}
                        <div className={`max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out`}>
                            <ul className={`space-y-2 pt-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                {role.description.slice(0, 2).map((item, i) => (
                                    <li key={i} className="text-[11px] text-white/20 font-light hover:text-white/40 transition-colors">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
