"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Sparkles,
  FolderOpen,
  Mail,
} from "lucide-react";
import type { Project } from "@/data/projects";

const accentVariants = [
  "from-primary/25 via-primary/5 to-transparent",
  "from-indigo-400/20 via-violet-500/5 to-transparent",
  "from-fuchsia-500/20 via-primary/5 to-transparent",
] as const;

interface CategoryProjectsViewProps {
  slug: string;
  name: string;
  description: string;
  projects: Project[];
}

export function CategoryProjectsView({
  slug,
  name,
  description,
  projects,
}: CategoryProjectsViewProps) {
  return (
    <div className="relative min-h-0 overflow-hidden bg-[#020202] text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(168,85,247,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[40vh] w-[min(100%,80rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/#projects"
            className="group mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-white/70 backdrop-blur-md transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202] md:mb-8"
            aria-label="Back to portfolio projects section"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>
        </motion.div>

        <header className="mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-5 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-primary/90">
              <Sparkles className="h-3 w-3" aria-hidden />
              Project vault
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
              /{slug}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 max-w-3xl font-sans text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl md:leading-[0.92]"
          >
            {name}
            <span className="text-glow text-primary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="max-w-2xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            {description}
          </motion.p>
          {projects.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 flex items-center gap-2 font-mono text-[11px] text-white/35"
            >
              <FolderOpen className="h-3.5 w-3.5 text-primary/50" aria-hidden />
              {projects.length} {projects.length === 1 ? "project" : "projects"} in this category
            </motion.p>
          )}
        </header>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-sm"
          >
            <p className="mb-6 text-white/50">
              No projects in this category yet.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202]"
            >
              <Mail className="h-4 w-4" />
              Start a conversation
            </Link>
          </motion.div>
        ) : (
          <ul className="flex flex-col gap-6 md:gap-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i + 1}
                accentClass={accentVariants[i % accentVariants.length]}
                categorySlug={slug}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  accentClass,
  categorySlug,
}: {
  project: Project;
  index: number;
  accentClass: string;
  categorySlug: string;
}) {
  const isAutomation = categorySlug === "automation";
  const hasDemo = Boolean(project.demo && project.demo !== "#");
  const hasGithub = Boolean(project.github && project.github !== "#");
  const needsAccess = !isAutomation && !hasDemo && !hasGithub;
  const showCtaColumn = hasDemo || hasGithub || needsAccess;

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative list-none"
    >
      <div
        className={`absolute -inset-px rounded-[1.35rem] bg-gradient-to-br ${accentClass} opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100 md:rounded-[1.5rem]`}
        aria-hidden
      />
      <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c]/90 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl md:rounded-[1.45rem]">
        <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/15 blur-3xl transition-all duration-700 group-hover:bg-primary/25" aria-hidden />
        <div className="absolute bottom-0 left-0 h-32 w-64 -translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden />

        <div
          className={`relative grid gap-8 p-6 md:p-10 ${
            showCtaColumn
              ? "md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10"
              : ""
          }`}
        >
          <div className="min-w-0 space-y-5">
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-mono text-[11px] font-bold tabular-nums text-primary/70">
                {String(index).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {project.title}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-[15px] md:leading-relaxed">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <li key={t}>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/75 transition-colors group-hover:border-primary/20 group-hover:text-white/90">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {showCtaColumn && (
          <div className="flex w-full flex-col gap-3 border-t border-white/5 pt-6 md:w-auto md:min-w-[200px] md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-black/20 transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] md:w-auto"
              >
                Live demo
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </a>
            )}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white/90 transition hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] md:w-auto"
                aria-label={`${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" aria-hidden />
                Source code
              </a>
            )}
            {needsAccess && (
              <>
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-black/25 transition hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0c] md:w-auto"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  Demo
                </Link>
                <p className="text-center text-[10px] leading-relaxed text-white/35 md:text-left">
                  Demo and repository links are shared on request for this project.
                </p>
              </>
            )}
          </div>
          )}
        </div>
      </article>
    </motion.li>
  );
}
