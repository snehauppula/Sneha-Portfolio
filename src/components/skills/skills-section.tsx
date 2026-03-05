"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Cloud, Layers, Sparkles } from "lucide-react";

interface SkillGroup {
    id: string;
    category: string;
    tagline: string;
    icon: React.ReactNode;
    skills: string[];
}

const skillGroups: SkillGroup[] = [
    {
        id: "programming",
        category: "Programming",
        tagline: "Languages & logic",
        icon: <Terminal className="w-5 h-5" />,
        skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML/CSS"]
    },
    {
        id: "intelligence",
        category: "Intelligence",
        tagline: "Data & AI",
        icon: <Cpu className="w-5 h-5" />,
        skills: ["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Seaborn", "Keras"]
    },
    {
        id: "infrastructure",
        category: "Infrastructure",
        tagline: "DevOps & Cloud",
        icon: <Cloud className="w-5 h-5" />,
        skills: ["Git/GitHub", "Docker", "Flask", "Vercel", "AWS", "Postman"]
    },
    {
        id: "fundamentals",
        category: "Foundations",
        tagline: "Computer Science",
        icon: <Layers className="w-5 h-5" />,
        skills: ["Data Structures", "Algorithms", "System Design", "OOP", "DBMS", "OS Fundamentals"]
    }
];

export function SkillsSection() {
    return (
        <section id="skills" className="min-h-screen bg-[#020202] py-16 md:py-24 relative flex items-center overflow-hidden">
            {/* Layered background for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_70%,rgba(99,102,241,0.04),transparent_55%)]" />
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: "64px 64px"
                }}
            />
            {/* Soft vignette edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,2,2,0.4)_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                {/* Header - centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-flex items-center gap-2 text-primary/60 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        PROTO_CORE_v1.0
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                        SKILLS<span className="text-glow italic text-primary">.</span>
                    </h2>
                </motion.div>

                {/* Grid of category cards - 2x2 on desktop, 1 col on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.article
                            key={group.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-24px" }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="group rounded-2xl md:rounded-3xl glass border border-white/10 p-6 md:p-8 hover:border-primary/20 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.15)] transition-all duration-300 focus-within:border-primary/20"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                                    {group.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                                        {group.category}
                                    </h3>
                                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                                        {group.tagline}
                                    </p>
                                </div>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                {group.skills.map((skill, i) => (
                                    <li key={skill}>
                                        <span className="inline-block px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs font-medium text-white/80 hover:text-white hover:border-white/10 transition-colors duration-200">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
