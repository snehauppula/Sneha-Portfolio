"use client";

import { motion, Variants, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Download, LucideMousePointer2, User } from "lucide-react";
import { heroSocialLinks } from "@/data/hero-social";
import Image from "next/image";
import { useRef, MouseEvent } from "react";
import { useLenis } from "lenis/react";
import { lenisAnchorScrollOpts } from "@/components/providers/smooth-scroll";

const textReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const RESUME_DRIVE_FILE_ID = "1sQnWnu9epTTNHXjHyVJy6wY7DfGJdHcT";

/** Opens Drive preview in a new tab and export-download in another (same gesture). */
function openResumePreviewAndDownload() {
    const preview = `https://drive.google.com/file/d/${RESUME_DRIVE_FILE_ID}/view?usp=drive_link`;
    const download = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_FILE_ID}`;
    window.open(preview, "_blank", "noopener,noreferrer");
    window.open(download, "_blank", "noopener,noreferrer");
}

export function HeroContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();

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

    const lenis = useLenis();

    const scrollTo = (id: string) => {
        if (lenis) {
            lenis.scrollTo(`#${id}`, lenisAnchorScrollOpts);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            id="hero"
            className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-8 md:px-[6vw] md:py-12"
        >
            <div className="max-w-7xl w-full grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

                {/* Left Side: Storytelling & Action */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="z-10 order-2 space-y-8 text-left lg:order-1 lg:pr-8"
                >
                    <div className="space-y-5">
                        <motion.div
                            custom={0}
                            variants={textReveal}
                            className="inline-block"
                        >
                            <span className="px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-xs uppercase tracking-[0.4em] backdrop-blur-sm">
                                AI · Software · Data
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
                                <span className="text-primary">AI</span>
                                <span className="text-white/30"> · </span>
                                Software
                                <span className="text-white/30"> · </span>
                                Data
                            </h2>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={textReveal}
                            className="pt-4"
                        >
                            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed font-light">
                                Software developer at <span className="text-white/80 font-medium">SNIST</span>, Hyderabad.
                                I ship <span className="text-glow font-semibold text-primary">AI features</span>,{" "}
                                <span className="text-white/80 font-medium">apps and APIs</span>, and{" "}
                                <span className="text-white/80 font-medium">data systems</span> people can actually use.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        custom={3}
                        variants={textReveal}
                        className="flex flex-col items-center gap-5 pt-1 lg:items-start"
                    >
                        <div
                            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start"
                            role="list"
                            aria-label="Social and contact links"
                        >
                            {heroSocialLinks.map(({ href, label, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    role="listitem"
                                    aria-label={label}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-12 sm:w-12 sm:rounded-2xl"
                                >
                                    <Icon className="h-[1.15rem] w-[1.15rem] sm:h-5 sm:w-5" aria-hidden />
                                </a>
                            ))}
                        </div>

                        <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
                            <button
                                type="button"
                                onClick={() => scrollTo("contact")}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary/35 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_24px_-8px_rgba(168,85,247,0.35)] transition-all duration-300 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_32px_-6px_rgba(168,85,247,0.45)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] sm:w-auto sm:min-w-[12rem]"
                            >
                                <User className="h-4 w-4 text-primary" aria-hidden />
                                Contact me
                            </button>
                            <button
                                type="button"
                                onClick={openResumePreviewAndDownload}
                                aria-label="Open resume on Google Drive (preview) and start download"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary to-violet-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_12px_40px_-12px_rgba(168,85,247,0.55)] transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] sm:w-auto sm:min-w-[12rem]"
                            >
                                Get resume
                                <Download className="h-4 w-4 opacity-90" aria-hidden />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Visual Centerpiece */}
                <motion.div
                    initial={{ opacity: 0, x: 100, filter: "blur(20px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex justify-center lg:justify-center order-1 lg:order-2"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] group cursor-pointer">
                        {/* Interactive Frame */}
                        <motion.div
                            animate={
                                reduceMotion
                                    ? { rotateY: 0, rotateX: 0, y: 0 }
                                    : {
                                          rotateY: [-5, 5, -5],
                                          rotateX: [2, -2, 2],
                                          y: [0, -20, 0],
                                      }
                            }
                            transition={
                                reduceMotion
                                    ? { duration: 0 }
                                    : {
                                          duration: 8,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                      }
                            }
                            className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/20 glass shadow-2xl z-10"
                        >
                            <motion.div
                                initial={{ filter: "grayscale(1) contrast(1.2)" }}
                                whileHover={{ filter: "grayscale(0) contrast(1)" }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/hero-portrait.webp"
                                    alt="Sneha Uppula — portrait"
                                    fill
                                    priority
                                    quality={85}
                                    sizes="(max-width: 768px) 300px, 450px"
                                    className="object-cover object-top transition-transform duration-1000"
                                />
                                {/* Detail Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

                                {/* Scanline Effect */}
                                <div className="scanline" />
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
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
            >
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <motion.div
                    animate={reduceMotion ? { y: 0 } : { y: [0, 5, 0] }}
                    transition={
                        reduceMotion
                            ? { duration: 0 }
                            : { duration: 1.5, repeat: Infinity }
                    }
                    className="flex flex-col items-center gap-1.5"
                >
                    <span className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground">Scroll</span>
                    <LucideMousePointer2 className="w-4 h-4 text-primary" />
                </motion.div>
            </motion.div>
        </div>
    );
}
