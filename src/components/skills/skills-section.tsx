"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState, type CSSProperties } from "react";
import { Sparkles } from "lucide-react";
import {
  marqueeSkills,
  getSkillIconUrlCandidates,
  type MarqueeSkill,
} from "@/data/skill-marquee";

const TOOLKIT_DESCRIPTION =
  "Languages, AI, data, and product tools from the work above — one continuous band, no jumps.";

const TOOLKIT_DESCRIPTION_REDUCED =
  "All tools in a static grid (motion reduced on your device).";

/** One full cycle duration — slow enough to read logos comfortably */
const MARQUEE_DURATION_SEC = 96;

function SkillLogoCard({ skill }: { skill: MarqueeSkill }) {
  const candidates = useMemo(() => getSkillIconUrlCandidates(skill), [skill]);
  const [urlIndex, setUrlIndex] = useState(0);
  const [broken, setBroken] = useState(false);
  const { name } = skill;

  const handleImgError = () => {
    setUrlIndex((current) => {
      if (current < candidates.length - 1) return current + 1;
      setBroken(true);
      return current;
    });
  };

  if (broken) {
    return (
      <div className="flex h-[9.75rem] w-[7.5rem] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 shadow-inner backdrop-blur-sm sm:h-[10.25rem] sm:w-[8rem] md:h-[10.5rem] md:w-[8.5rem]">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 font-mono text-sm font-bold text-primary md:h-14 md:w-14">
          {name.slice(0, 2).toUpperCase()}
        </span>
        <span className="max-w-[6.5rem] text-center text-[11px] font-medium leading-snug text-white/90 sm:text-xs">
          {name}
        </span>
      </div>
    );
  }

  const src = candidates[urlIndex] ?? "";

  return (
    <div className="flex h-[9.75rem] w-[7.5rem] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0c0c10]/95 px-3 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition-all duration-300 hover:border-primary/45 hover:bg-white/[0.08] hover:shadow-[0_16px_48px_-20px_rgba(168,85,247,0.3)] sm:h-[10.25rem] sm:w-[8rem] md:h-[10.5rem] md:w-[8.5rem]">
      <div className="flex h-[3.5rem] w-[3.5rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-200/95 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_16px_rgba(0,0,0,0.4)] ring-1 ring-black/10 md:h-16 md:w-16 md:p-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element -- external SVG (Simple Icons / jsDelivr) */}
        <img
          key={src}
          src={src}
          alt=""
          width={48}
          height={48}
          className="max-h-[2.35rem] max-w-[2.35rem] object-contain object-center md:max-h-[2.75rem] md:max-w-[2.75rem]"
          loading="lazy"
          decoding="async"
          onError={handleImgError}
        />
      </div>
      <span className="max-w-[6.75rem] text-center text-[11px] font-medium leading-snug tracking-tight text-white/90 sm:text-xs">
        {name}
      </span>
    </div>
  );
}

function SkillsMarqueeStrip({ stripKey }: { stripKey: string }) {
  return (
    <div className="flex shrink-0 items-stretch gap-4 pr-4 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6">
      {marqueeSkills.map((s) => (
        <SkillLogoCard key={`${stripKey}-${s.slug}`} skill={s} />
      ))}
    </div>
  );
}

function SkillsStaticGrid() {
  return (
    <ul className="mx-auto flex max-w-[88rem] list-none flex-wrap justify-center gap-4 px-6 sm:gap-5 md:gap-6">
      {marqueeSkills.map((s) => (
        <li key={s.slug}>
          <SkillLogoCard skill={s} />
        </li>
      ))}
    </ul>
  );
}

function SkillsToolkitIntro({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-5 text-center md:mb-6"
    >
      <span className="mb-5 inline-flex items-center gap-2 rounded-xl border border-primary/45 bg-black/50 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/95 shadow-[0_0_24px_-8px_rgba(168,85,247,0.45)] backdrop-blur-md">
        Skills
      </span>
      <div className="flex flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-primary/70">
          <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
          PROTO_CORE_v1.0
        </span>
        <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-5xl lg:text-6xl">
          TOOLKIT<span className="text-glow italic text-primary">.</span>
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
          {reduceMotion ? TOOLKIT_DESCRIPTION_REDUCED : TOOLKIT_DESCRIPTION}
        </p>
      </div>
    </motion.div>
  );
}

function SkillsSingleLineMarquee() {
  const durationStyle = {
    "--skills-marquee-duration": `${MARQUEE_DURATION_SEC}s`,
  } as CSSProperties;

  return (
    <div
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 py-2 md:py-4"
      role="region"
      aria-label="Technologies in a horizontal ticker."
    >
      <div
        className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:inset-x-[18%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent md:inset-x-[18%]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-[#020202] via-[#020202]/95 to-transparent sm:w-20 md:w-28 lg:w-36"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-[#020202] via-[#020202]/95 to-transparent sm:w-20 md:w-28 lg:w-36"
        aria-hidden
      />

      <div className="relative overflow-hidden">
        <div
          style={durationStyle}
          className="skills-marquee-track flex w-max"
        >
          <SkillsMarqueeStrip stripKey="m1" />
          <div aria-hidden="true">
            <SkillsMarqueeStrip stripKey="m2" />
          </div>
        </div>
      </div>

    </div>
  );
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020202] py-10 md:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,2,2,0.5)_100%)]" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-6">
          <SkillsToolkitIntro reduceMotion={reduceMotion} />
        </div>
        <div className="mt-2 w-full">
          {reduceMotion ? <SkillsStaticGrid /> : <SkillsSingleLineMarquee />}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
