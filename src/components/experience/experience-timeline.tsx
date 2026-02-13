"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface Experience {
    title: string;
    company: string;
    date: string;
    description: string;
    id: string;
}

const experiences: Experience[] = [
    {
        title: "Finalist – AI Hack Day",
        company: "AI Innovation Hub",
        date: "2025",
        description: "Developed a vision-based safety system for public spaces using real-time ML inference.",
        id: "EXP_01"
    },
    {
        title: "Hackprix Participant",
        company: "National Level Hackathon",
        date: "2024",
        description: "Collaborated on a data-driven solution for predictive maintenance in industrial IoT.",
        id: "EXP_02"
    },
    {
        title: "AIML Student",
        company: "Technical University",
        date: "2022 - present",
        description: "Deepening expertise in Deep Learning, Computer Vision, and Big Data Analytics.",
        id: "EXP_03"
    }
];

export function ExperienceTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Narrative */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
                <div className="text-[20vw] font-bold text-white/10 absolute -top-20 -left-20 rotate-12">CHRONOS</div>
                <div className="text-[15vw] font-bold text-white/5 absolute bottom-0 -right-20 -rotate-12">DATABASE</div>
            </div>

            <div className="max-w-7xl w-full px-6 md:px-[10vw] mb-24 space-y-6 text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 text-primary font-mono text-xs uppercase tracking-[0.4em] justify-center lg:justify-start"
                >
                    <div className="w-12 h-px bg-primary/40" />
                    Temporal Logs
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter leading-none"
                >
                    THE <span className="text-glow text-primary italic">JOURNEY.</span>
                </motion.h2>
            </div>

            <div className="relative max-w-5xl w-full mx-auto px-6">
                {/* Neural Path Line */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent z-10 hidden md:block"
                />

                <div className="space-y-24 md:space-y-48">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Neural Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ margin: "-100px" }}
                                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border border-primary z-20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            </motion.div>

                            {/* Experience Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className={`w-full md:w-[42%] pl-16 md:pl-0 space-y-6 group`}
                            >
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                            {exp.date}
                                        </span>
                                        <span className="text-[10px] font-mono text-white/20 tracking-widest">{exp.id}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-primary transition-colors duration-500">
                                        {exp.title}
                                    </h3>
                                    <p className="text-white/60 text-lg md:text-xl font-light">
                                        {exp.company}
                                    </p>
                                </div>

                                <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
                                    <p className="text-muted-foreground leading-relaxed italic text-lg lg:text-xl font-light">
                                        &ldquo;{exp.description}&rdquo;
                                    </p>
                                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-40 transition-opacity">
                                        <div className="text-4xl font-mono">{index + 1}</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Spacer */}
                            <div className="hidden md:block w-[42%]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/10 blur-[150px] -z-10 rounded-full" />
        </section>
    );
}

