"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="min-h-screen bg-[#020202] relative overflow-hidden flex flex-col items-center py-20 px-6">
            {/* Ambient Neural Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.05),transparent_50%)]" />
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-primary/2 blur-[120px] rounded-full pointer-events-none" />

            {/* Content Container */}
            <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col h-full">

                {/* Compact Header: Single View Optimized */}
                <div className="text-center mb-10 space-y-2">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-4 text-primary font-mono text-[10px] uppercase tracking-[0.6em] opacity-60"
                    >
                        <Terminal className="w-3.5 h-3.5" />
                        UPLINK_SYTEM_v4
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none"
                    >
                        SYNC WITH SOURCE.
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 flex-1 items-center">
                    {/* Left: Narrative & Credentials */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
                                Initializing communication bridge. Open to AI/ML internships and collaborations. Transmit coordinates below.
                            </p>
                            <div className="flex items-center gap-3 text-primary/80 font-mono text-[9px] uppercase tracking-widest bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/20">
                                <MapPin className="w-3.5 h-3.5" />
                                NODE_IDENT: INDIA // REMOTE_READY
                            </div>
                        </div>

                        {/* Social Link Shells */}
                        <div className="flex gap-6">
                            {[
                                { icon: <Github />, label: "GIT", href: "https://github.com/snehauppula" },
                                { icon: <Linkedin />, label: "LINKED", href: "https://linkedin.com/in/snehauppula" },
                                { icon: <Mail />, label: "MAIL", href: "mailto:snehauppula23@gmail.com" }
                            ].map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative"
                                >
                                    <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-white/40 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                                        {social.icon}
                                    </div>
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-60 transition-opacity">
                                        {social.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: The High-Density Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7 glass p-8 md:p-10 rounded-[2.5rem] border-white/12 relative shadow-2xl flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormInput label="Ident_Name" placeholder="SYN_01" type="text" />
                                <FormInput label="Email_Buffer" placeholder="user@source.ai" type="email" />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-black block ml-1">Instruction_Set</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-white/[0.03] border border-white/15 rounded-3xl px-8 py-5 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all text-white placeholder:text-white/10 resize-none text-sm leading-relaxed"
                                    placeholder="Transmit your message bundle..."
                                />
                            </div>

                            <button className="w-fit flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all relative overflow-hidden group shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                                <span>INITIATE_UPLINK</span>
                                <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                                    <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </button>
                        </div>

                        {/* Status Bar */}
                        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[7px] font-mono text-white/20 uppercase tracking-[0.5em]">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Bridge_Ready
                            </div>
                            <span>Packet_v4.2 // Verified_Uplink</span>
                        </div>
                    </motion.div>
                </div>

                {/* Ultra-Streamlined Footer */}
                <footer className="w-full pt-8 pb-4 mt-auto border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-1 text-center md:text-left">
                            <h4 className="text-white font-black uppercase tracking-tighter text-xl">SNEHA UPPULA.</h4>
                            <p className="text-[7px] font-mono text-white/20 tracking-[0.4em] uppercase">DECODING_DATA // 2026</p>
                        </div>
                        <div className="flex gap-8 text-[8px] font-mono text-white/30 tracking-widest uppercase items-center">
                            <FooterLink label="Github" href="https://github.com/snehauppula" />
                            <span className="w-1 h-1 rounded-full bg-white/10" />
                            <FooterLink label="LinkedIn" href="https://linkedin.com/in/snehauppula" />
                            <span className="w-1 h-1 rounded-full bg-white/10" />
                            <FooterLink label="Email" href="mailto:snehauppula23@gmail.com" />
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}

function FormInput({ label, placeholder, type }: { label: string, placeholder: string, type: string }) {
    return (
        <div className="space-y-4">
            <label className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-black block ml-1">{label}</label>
            <input
                type={type}
                className="w-full bg-white/[0.03] border border-white/15 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary/40 focus:bg-primary/5 transition-all text-white placeholder:text-white/10 text-sm"
                placeholder={placeholder}
            />
        </div>
    );
}

function FooterLink({ label, href }: { label: string, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:tracking-[0.8em] duration-500">
            {label}
        </a>
    );
}


