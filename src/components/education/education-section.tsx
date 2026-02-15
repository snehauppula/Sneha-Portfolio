"use client";

import { motion } from "framer-motion";
import { ClipboardList, Minus } from "lucide-react";

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
        <section id="education" className="bg-[#020202] py-40 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

                {/* Minimal Header */}
                <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-indigo-400/60 font-mono text-[10px] uppercase tracking-[0.4em]"
                        >
                            <ClipboardList className="w-4 h-4" />
                            Academic Base
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]"
                        >
                            ACADEMIC <br />
                            <span className="text-glow italic text-indigo-400">HISTORY.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Typographic List */}
                <div className="space-y-4">
                    {records.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative py-12 border-b border-white/5 last:border-0"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                                {/* Left: Timing & Level */}
                                <div className="lg:col-span-4 space-y-4">
                                    <span className="text-[10px] font-mono text-indigo-400/40 uppercase tracking-[0.4em] block">
                                        Term // {item.date}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white uppercase group-hover:text-indigo-400 transition-colors duration-500">
                                        {item.level}
                                    </h3>
                                    <p className="text-lg font-bold text-white/30 italic">{item.org}</p>
                                </div>

                                {/* Center: Performance */}
                                <div className="lg:col-span-3 lg:pt-8">
                                    <div className="inline-flex flex-col">
                                        <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em] font-black mb-1">Score</span>
                                        <span className="text-2xl font-black text-white tracking-widest">{item.grade}</span>
                                    </div>
                                </div>

                                {/* Right: Specializations */}
                                <div className="lg:col-span-5 lg:pt-8">
                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                        {item.details.map((detail) => (
                                            <div key={detail} className="flex items-center gap-2">
                                                <Minus className="w-3 h-3 text-indigo-400/40" />
                                                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
