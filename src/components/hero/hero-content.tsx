"use client";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { LucideMousePointer2 } from "lucide-react";
import Image from "next/image";
import { useRef, MouseEvent } from "react";

const textReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

export function HeroContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax Motion Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-[6vw] overflow-hidden"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Side: Storytelling & Action */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="space-y-10 lg:pr-10 z-10 text-left order-2 lg:order-1"
                >
                    <div className="space-y-6">
                        <motion.div
                            custom={0}
                            variants={textReveal}
                            className="inline-block"
                        >
                            <span className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-xs uppercase tracking-[0.4em] backdrop-blur-sm">
                                Data Science || Machine Learning Engineer
                            </span>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={textReveal}
                            className="space-y-2"
                        >
                            <h1 className="text-4xl md:text-7xl font-sans font-bold tracking-tighter text-white select-none">
                                Meet <span className="text-glow text-primary">Sneha</span>.
                            </h1>
                            <h2 className="text-2xl md:text-4xl text-white/90 font-sans font-medium tracking-tight uppercase">
                                Turning uncertainty into <span className="italic text-primary lowercase">intelligence</span>.
                            </h2>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={textReveal}
                            className="pt-4"
                        >
                            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed font-light">
                                From raw datasets to deployed machine learning systems, I design predictive architectures that transform complexity into precision — powered by <span className="text-white/80 font-medium">Python</span>, modern <span className="text-white/80 font-medium">ML frameworks</span>, and relentless curiosity.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        custom={3}
                        variants={textReveal}
                        className="flex flex-wrap gap-5 justify-center lg:justify-start"
                    >
                        <button className="group relative px-10 py-5 rounded-full bg-white text-black font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <span className="relative z-10">Explore Projects</span>
                            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        <button className="px-10 py-5 rounded-full border border-white/10 glass font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
                            Collaborate
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side: Visual Centerpiece */}
                <motion.div
                    initial={{ opacity: 0, x: 100, filter: "blur(20px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] group cursor-pointer">
                        {/* Interactive Frame */}
                        <motion.div
                            animate={{
                                rotateY: [-5, 5, -5],
                                rotateX: [2, -2, 2],
                                y: [0, -20, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/20 glass shadow-2xl z-10"
                        >
                            <motion.div
                                initial={{ filter: "grayscale(1) contrast(1.2)" }}
                                whileHover={{ filter: "grayscale(0) contrast(1)" }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/sneha_pic1.jpg"
                                    alt="Sneha - Profile"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 300px, 450px"
                                    className="object-cover transition-transform duration-1000"
                                />
                                {/* Detail Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                            </motion.div>
                        </motion.div>



                        {/* Ambient Glows */}
                        <div className="absolute -inset-10 bg-primary/30 blur-[120px] rounded-full -z-20 opacity-40 group-hover:opacity-60 transition-opacity" />

                        {/* Floating Tech Badges */}
                        <div className="absolute -bottom-5 -left-10 glass p-4 rounded-2xl flex gap-3 items-center z-20 shadow-xl border-white/10 hidden md:flex animate-bounce-slow">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase tracking-[0.2em]">Neural Mesh v4 Active</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground">Scroll</span>
                    <LucideMousePointer2 className="w-4 h-4 text-primary" />
                </motion.div>
            </motion.div>
        </div>
    );
}
