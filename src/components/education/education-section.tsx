"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

interface EducationRecord {
    id: string;
    level: string;
    org: string;
    date: string;
    grade: string;
    details: string[];
}

const records: EducationRecord[] = [
    {
        id: "rec-01",
        level: "B.Tech – Computer Science (AIML)",
        org: "SNIST",
        date: "2021 — 2025",
        grade: "9.65 CGPA",
        details: ["Machine Learning", "Data Structures", "DBMS", "Linear Algebra"]
    },
    {
        id: "rec-02",
        level: "Intermediate (MPC)",
        org: "Sri Chaitanya Junior Kalashala",
        date: "2019 — 2021",
        grade: "98.9%",
        details: ["Mathematics", "Physics", "Chemistry"]
    },
    {
        id: "rec-03",
        level: "Secondary School (SSC)",
        org: "Jyothi IIT Academy",
        date: "2019",
        grade: "10.0 CGPA",
        details: ["Academic Excellence", "Core Sciences", "Computational Logic"]
    }
];

export function EducationSection() {
    return (
        <section id="education" className="bg-[#020202] py-20 relative flex items-center justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(129,140,248,0.03),transparent_50%)]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                {/* Header: Fixed Single View Style */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-mono text-indigo-400/60 uppercase tracking-[0.5em]"
                    >
                        Academic_Base
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none"
                    >
                        HISTORY.
                    </motion.h2>
                </div>

                {/* High-Density Timeline Array */}
                <div className="relative">
                    {/* Vertical Timeline Spine */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />

                    <div className="space-y-8 relative">
                        {records.map((item, index) => (
                            <div key={item.id} className="relative">
                                {/* Chronological Node (Dot) aligned with Date */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-1.5 z-20">
                                    <div className="w-8 h-8 rounded-full border border-indigo-500/40 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(129,140,248,0.2)]">
                                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    {/* Date Range Overlay */}
                                    <div className="flex items-center gap-6 text-[10px] font-mono text-indigo-400 uppercase tracking-[0.4em] mb-3">
                                        <div className="w-12 h-px bg-white/5" />
                                        {item.date}
                                        <div className="w-12 h-px bg-white/5" />
                                    </div>

                                    {/* High-Density Dossier Card */}
                                    <div className="w-full max-w-2xl glass p-8 rounded-[2.5rem] border-white/10 flex items-center gap-8 hover:border-indigo-400/30 transition-all duration-700 group hover:bg-white/[0.02] relative">
                                        {/* Left Visual ID */}
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-white/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-400 group-hover:text-black transition-all duration-500 relative overflow-hidden">
                                            <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
                                            <GraduationCap className="w-8 h-8" />
                                        </div>

                                        {/* Content Stream */}
                                        <div className="flex-1 space-y-2">
                                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight drop-shadow-md">
                                                {item.level}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                                                <p className="font-bold text-white/30 italic uppercase tracking-wider">{item.org}</p>
                                                <div className="w-1 h-1 rounded-full bg-white/20" />
                                                <div className="flex items-center gap-2">
                                                    <Award className="w-3.5 h-3.5 text-indigo-400/40" />
                                                    <span className="font-mono text-indigo-400/80 font-black tracking-widest uppercase">
                                                        {item.grade}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
