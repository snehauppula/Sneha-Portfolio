"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, BarChart3 } from "lucide-react";
import { categories } from "@/data/projects";

const categoryIcons: Record<string, React.ReactNode> = {
  ai: <Cpu className="w-6 h-6" />,
  software: <Code2 className="w-6 h-6" />,
  data: <BarChart3 className="w-6 h-6" />,
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020202] py-10 md:py-14 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(168,85,247,0.06),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center md:mb-8"
        >
          <p className="text-[10px] font-mono text-primary/70 uppercase tracking-[0.35em] mb-3">
            By category
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Projects<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/projects/${cat.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/15 transition-colors">
                  {categoryIcons[cat.slug] ?? <Cpu className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                  View projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
