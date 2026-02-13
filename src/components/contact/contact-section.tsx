"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal } from "lucide-react";

export function ContactSection() {
    return (
        <section className="h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center px-6 md:px-[10vw]">
            {/* Background Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
                {/* Contact Narrative */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 text-primary font-mono text-xs uppercase tracking-[0.4em]"
                        >
                            <Terminal className="w-4 h-4" />
                            Establishing Connection
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
                        >
                            READY TO <br />
                            <span className="text-glow text-primary italic">SYNC?</span>
                        </motion.h2>
                        <p className="text-white/60 text-xl font-light max-w-lg leading-relaxed">
                            Interested in collaboration, research partnerships, or just want to chat about the future of AI? My neural pathways are always open.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        {[
                            { icon: <Github />, label: "GITHUB", href: "#" },
                            { icon: <Linkedin />, label: "LINKEDIN", href: "#" },
                            { icon: <Mail />, label: "EMAIL", href: "mailto:hello@sneha.ai" }
                        ].map((social, i) => (
                            <motion.a
                                key={social.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                whileHover={{ y: -5, color: "var(--color-primary)" }}
                                href={social.href}
                                className="flex flex-col items-center gap-3 text-white/40 group transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl glass border-white/5 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                                    {social.icon}
                                </div>
                                <span className="text-[10px] font-mono tracking-widest uppercase">{social.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Neural Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 space-y-8 relative group/form"
                >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/form:opacity-100 transition-opacity rounded-[2.5rem]" />

                    <div className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] ml-2">Ident_Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all font-light"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] ml-2">Email_Buffer</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all font-light"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] ml-2">Input_Data_Stream</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all font-light"
                                placeholder="What's the signal?"
                            />
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group/btn shadow-xl">
                        <span className="relative z-10 transition-transform group-hover/btn:-translate-x-1">INITIATE SEND</span>
                        <Send className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                    </button>

                    <div className="flex items-center justify-between text-[8px] font-mono text-white/20 uppercase tracking-widest pt-4">
                        <span>Encryption: Active</span>
                        <span>Protocol: v2.0.4</span>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-auto pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">
                <p>© 2026 DATABASE://SNEHA_PORTFOLIO</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                </div>
            </footer>
        </section>
    );
}

