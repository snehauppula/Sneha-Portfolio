"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Activity, Zap, ClipboardList } from "lucide-react";

interface EducationRecord {
    id: string;
    level: string;
    org: string;
    date: string;
    grade: string;
    details: string[];
    icon: React.ReactNode;
}

const records: EducationRecord[] = [
    {
        id: "rec-01",
        level: "B.Tech – Computer Science (AIML)",
        org: "SNIST",
        date: "2021 – 2025",
        grade: "9.65 CGPA",
        details: ["Machine Learning", "Data Structures", "DBMS", "Computer Org", "Linear Algebra"],
        icon: <GraduationCap className="w-6 h-6" />
    },
    {
        id: "rec-02",
        level: "Intermediate (MPC)",
        org: "Sri Chaitanya Junior Kalashala",
        date: "2019 – 2021",
        grade: "98.9%",
        details: ["Mathematics", "Physics", "Chemistry"],
        icon: <Award className="w-6 h-6" />
    },
    {
        id: "rec-03",
        level: "Secondary School (SSC)",
        org: "Jyothi IIT Academy",
        date: "2019",
        grade: "10.0 CGPA",
        details: ["Academic Excellence", "Core Secondary Sciences", "Computational Logic"],
        icon: <BookOpen className="w-6 h-6" />
    }
];

export function EducationSection() {
    return (
        <section id="education" className="min-h-screen bg-[#020202] py-32 relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Data Stream Ambient */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                {/* Transcript Header */}
                <div className="mb-20 space-y-4">
                    <div className="flex items-center gap-3 text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em]">
                        <ClipboardList className="w-4 h-4" />
                        Foundational_Knowledge_Base
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        ACADEMIC <br />
                        <span className="text-glow italic text-indigo-400 font-serif">TRANSCRIPT.</span>
                    </h2>
                </div>

                {/* Structured Data Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {records.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-indigo-500/30 transition-all duration-500 bg-white/[0.02]">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                                    {/* Institution Info */}
                                    <div className="lg:col-span-5 flex items-center gap-8">
                                        <div className="w-20 h-20 rounded-3xl glass border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_50px_rgba(99,102,241,0.2)] transition-all">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <span className="text-indigo-400/60 font-mono text-[9px] uppercase tracking-[0.4em] block mb-1">Index_Node_0{records.length - index}</span>
                                            <h3 className="text-3xl font-black text-white uppercase leading-tight tracking-tight mb-2">
                                                {item.level}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <p className="text-lg font-bold text-white/50 italic">{item.org}</p>
                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{item.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Performance Metric Hub */}
                                    <div className="lg:col-span-3 flex justify-center">
                                        <div className="px-10 py-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl flex flex-col items-center group-hover:border-indigo-500/30 transition-colors">
                                            <span className="text-[8px] font-mono text-indigo-400/60 uppercase tracking-[0.4em] font-black mb-1">Validation_Metric</span>
                                            <span className="text-2xl font-black text-white tracking-widest">{item.grade}</span>
                                        </div>
                                    </div>

                                    {/* Course Details (Subsystem) */}
                                    <div className="lg:col-span-4 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Activity className="w-3 h-3 text-indigo-400/40" />
                                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-black">Subsystem_Specs</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.details.map((detail) => (
                                                <span key={detail} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[10px] font-mono text-white/60 uppercase tracking-widest font-bold group-hover:border-indigo-500/20 transition-colors">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Background Label */}
                                <div className="absolute top-4 right-10 opacity-[0.03] font-mono text-[10px] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                                    DATA_INTEGRITY_VERIFIED // {Math.random().toString(16).substring(2, 8)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Performance Summary Footer */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 group animate-pulse hover:animate-none">
                        <Zap className="w-8 h-8 text-indigo-400" />
                        <div>
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] block mb-1">Cumulative_Logic_Status</span>
                            <span className="text-sm font-mono text-white font-black uppercase">Academic_Optimization_Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
