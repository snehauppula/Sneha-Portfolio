"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Terminal, Cpu, Cloud, Layers, Activity, Workflow, Code2, Sparkles } from "lucide-react";

interface Skill {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
}

interface SkillGroup {
    id: string;
    category: string;
    tagline: string;
    icon: React.ReactNode;
    color: string;
    skills: Skill[];
    description: string;
}

const skillGroups: SkillGroup[] = [
    {
        id: "programming",
        category: "Programming",
        tagline: "The Logical Core",
        icon: <Terminal className="w-5 h-5" />,
        color: "rgb(168, 85, 247)",
        description: "Foundational languages used to architect scalable systems and complex logic flows.",
        skills: [
            { name: "Python", level: "Core" },
            { name: "TypeScript", level: "Advanced" },
            { name: "JavaScript", level: "Core" },
            { name: "SQL", level: "Advanced" },
            { name: "C++", level: "Proficient" },
            { name: "HTML/CSS", level: "Core" }
        ]
    },
    {
        id: "intelligence",
        category: "Intelligence",
        tagline: "Data & AI Systems",
        icon: <Cpu className="w-5 h-5" />,
        color: "rgb(16, 185, 129)",
        description: "Harnessing data through machine learning frameworks and statistical intelligence.",
        skills: [
            { name: "Scikit-Learn", level: "Core" },
            { name: "TensorFlow", level: "Advanced" },
            { name: "Pandas", level: "Core" },
            { name: "NumPy", level: "Core" },
            { name: "Seaborn", level: "Advanced" },
            { name: "Keras", level: "Proficient" }
        ]
    },
    {
        id: "infrastructure",
        category: "Infrastructure",
        tagline: "DevOps & Cloud",
        icon: <Cloud className="w-5 h-5" />,
        color: "rgb(59, 130, 246)",
        description: "Deploying and scaling systems with modern cloud-native technologies.",
        skills: [
            { name: "Git/GitHub", level: "Core" },
            { name: "Docker", level: "Advanced" },
            { name: "Flask", level: "Core" },
            { name: "Vercel", level: "Core" },
            { name: "AWS", level: "Proficient" },
            { name: "Postman", level: "Advanced" }
        ]
    },
    {
        id: "fundamentals",
        category: "Foundations",
        tagline: "Computer Science",
        icon: <Layers className="w-5 h-5" />,
        color: "rgb(244, 63, 94)",
        description: "The theoretical bedrock of efficient software engineering and problem-solving.",
        skills: [
            { name: "Data Structures", level: "Core" },
            { name: "Algorithms", level: "Core" },
            { name: "System Design", level: "Advanced" },
            { name: "OOP", level: "Core" },
            { name: "DBMS", level: "Core" },
            { name: "OS Fundamentals", level: "Advanced" }
        ]
    }
];

export function SkillsSection() {
    const [activeGroup, setActiveGroup] = useState(skillGroups[0].id);
    const activeData = skillGroups.find(g => g.id === activeGroup) || skillGroups[0];

    return (
        <section id="skills" className="min-h-screen bg-[#020202] py-16 relative flex items-center justify-center overflow-hidden">
            {/* Subtle Atmospheric Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.02),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

                {/* Left: Navigational Hierarchy */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                    >
                        <span className="flex items-center gap-3 text-primary/60 font-mono text-[10px] uppercase tracking-[0.4em]">
                            <Sparkles className="w-4 h-4" />
                            PROTO_CORE_v1.0
                        </span>
                        <h2 className="text-6xl font-black text-white tracking-tighter uppercase leading-none">
                            SKILLS<span className="text-glow italic text-primary">.</span>
                        </h2>
                    </motion.div>

                    <nav className="space-y-6">
                        {skillGroups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => setActiveGroup(group.id)}
                                className="group flex flex-col items-start text-left relative"
                            >
                                <span className={`text-4xl font-bold tracking-tighter uppercase transition-all duration-500 ${activeGroup === group.id ? "text-white" : "text-white/20 group-hover:text-white/40"
                                    }`}>
                                    {group.category}
                                </span>
                                <AnimatePresence>
                                    {activeGroup === group.id && (
                                        <motion.div
                                            layoutId="active-nav-line"
                                            className="h-1 bg-primary mt-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </AnimatePresence>
                                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mt-2 transition-colors ${activeGroup === group.id ? "text-primary/60" : "text-white/5 opacity-0 group-hover:opacity-100"
                                    }`}>
                                    {group.tagline}
                                </span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Right: The Typographic Canvas */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeGroup}
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <p className="text-2xl font-light text-white/50 leading-relaxed max-w-2xl border-l border-primary/20 pl-8">
                                    {activeData.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                {activeData.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="group cursor-default"
                                    >
                                        <div className="flex items-baseline justify-between mb-3">
                                            <h4 className="text-3xl font-black text-white/90 uppercase tracking-tighter group-hover:text-primary transition-colors">
                                                {skill.name}
                                            </h4>
                                            <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="h-px w-full bg-white/5 relative overflow-hidden">
                                            <motion.div
                                                className="absolute inset-0 bg-primary/20"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "0%" }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Minimal Footer */}
                            <div className="pt-12 flex items-center gap-10 opacity-20">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest">Efficiency_Rating: Optimized</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Workflow className="w-4 h-4" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest">Stack_Integrity: Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
