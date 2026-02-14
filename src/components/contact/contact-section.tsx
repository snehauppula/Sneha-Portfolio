"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Terminal, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="min-h-screen bg-[#020202] relative overflow-hidden flex flex-col items-center justify-center pt-40 px-6 md:px-[10vw]">
            {/* Background Neural Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10 w-full mb-20">
                {/* Contact Narrative */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 text-primary font-mono text-xs uppercase tracking-[0.5em]"
                        >
                            <Terminal className="w-4 h-4" />
                            UPLINK_PROTOCOL_775
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white uppercase"
                        >
                            SYNC WITH <br />
                            <span className="text-glow text-primary italic font-serif">THE SOURCE.</span>
                        </motion.h2>
                        <div className="space-y-6">
                            <p className="text-white/40 text-lg font-light max-w-lg leading-relaxed">
                                Initializing communication bridge. Open to AI/ML internships, research collaborations, and applied data science opportunities.
                            </p>
                            <div className="flex items-center gap-3 text-primary/60 font-mono text-[10px] uppercase tracking-widest bg-primary/5 w-fit px-4 py-2 rounded-full border border-primary/10">
                                <MapPin className="w-3 h-3" />
                                NODE_LOCATION: INDIA
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        {[
                            { icon: <Github />, label: "GITHUB", href: "https://github.com/snehauppula" },
                            { icon: <Linkedin />, label: "LINKEDIN", href: "https://linkedin.com/in/snehauppula" },
                            { icon: <Mail />, label: "EMAIL", href: "mailto:snehauppula23@gmail.com" }
                        ].map((social, i) => (
                            <motion.a
                                key={social.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                whileHover={{ y: -5 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-3 text-white/40 group transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl glass border-white/5 flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:bg-primary/5 transition-all">
                                    {social.icon}
                                </div>
                                <span className="text-[9px] font-mono tracking-widest uppercase opacity-40 group-hover:opacity-100">{social.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Neural Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass p-8 md:p-12 rounded-[3.5rem] border-white/5 space-y-8 relative group/form shadow-2xl"
                >
                    <div className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] font-black ml-1">Ident_Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-white placeholder:text-white/10"
                                    placeholder="SYN_01"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] font-black ml-1">Email_Buffer</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-white placeholder:text-white/10"
                                    placeholder="user@system.ai"
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] font-black ml-1">Instruction_Set</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all text-white placeholder:text-white/10 resize-none"
                                placeholder="Transmit your request..."
                            />
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-4 px-8 py-6 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-[0.4em] hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group/btn shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                        <span className="relative z-10">INITIATE_UPLINK</span>
                        <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                    </button>

                    <div className="flex items-center justify-between text-[8px] font-mono text-white/20 uppercase tracking-[0.5em] pt-4">
                        <span>Status: Bridge_Ready</span>
                        <span>Packet_v4.2</span>
                    </div>
                </motion.div>
            </div>

            {/* Footer Unification */}
            <footer className="w-full py-12 border-t border-white/5 mt-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p>© 2026 SNEHA UPPULA PORTFOLIO</p>
                    <p className="opacity-40">Integrated Neural Ecosystem</p>
                </div>
                <div className="flex gap-10">
                    <a href="https://github.com/snehauppula" className="hover:text-primary transition-colors">Github</a>
                    <a href="https://linkedin.com/in/snehauppula" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="mailto:snehauppula23@gmail.com" className="hover:text-primary transition-colors">Email</a>
                </div>
            </footer>
        </section>
    );
}

